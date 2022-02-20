import * as socketIO from "socket.io";
import mongoose from "mongoose";
import { config } from "../config";
import { Decision, decisionFromJSON, RequestStatus, requestStatusFromJSON } from '../interfaces/protoc/proto/requestService';

enum StreamEvents {
  insert = "insert",
  update = "update"
}

enum EventName {
  newNotification = "newNotification",
  readNotifications = "readNotifications",
  newRequestMy = "newRequestMy",
  newRequestAll = "newRequestAll",
  updateRequest = "updateRequest"
}

export class MongoStream {
  io: socketIO.Server;
  db: mongoose.Connection;

  constructor(io: socketIO.Server) {
    this.io = io;
    this.db = mongoose.connection;

    this.initMongoStreams();
  }

  initMongoStreams = () => {
    this.createNotificiationStream();
    this.createRequestStream();
  };

  createNotificiationStream = () => {
    const notificationCollection = this.db
      .collection(config.mongo.collections.notifications)
      .watch(undefined, { fullDocument: "updateLookup" });

    notificationCollection.on("change", (change) => {
      let destUserId;
      if (change?.fullDocument?.ownerId) {
        change.fullDocument.id = change?.fullDocument._id.toString();
        destUserId = change.fullDocument.ownerId.toString();
      }

      switch (change.operationType) {
        case StreamEvents.insert:
          destUserId && this.io.to(destUserId).emit(EventName.newNotification, change.fullDocument);
          break;
        case StreamEvents.update:
          destUserId && this.io.to(destUserId).emit(EventName.readNotifications);
          break;
      }
    });
  };

  createRequestStream = () => {
    const requestCollection = this.db
      .collection(config.mongo.collections.requests)
      .watch(undefined, { fullDocument: "updateLookup" });

    const sendToUser = (user: any, request: any, eventName: string) => {
      const users = Array.isArray(user) ? [...user] : [user];
      const usersIds = users.map((user) => user.id.toString());
      this.io.to(usersIds).emit(eventName, request);
    };

    requestCollection.on("change", (change) => {
      const request = change?.fullDocument;
      const commanders = request?.commanders;
      const securityApprovers = request?.securityApprovers;
      const superSecurityApprovers = request?.superSecurityApprovers;
      const approvers = [...commanders, ...securityApprovers, ...superSecurityApprovers]
      const submittedBy = request?.submittedBy;

      if (request?._id) request.id = request?._id.toString();
      
      switch (change.operationType) {
        case StreamEvents.insert: {
          // Notify approvers
          approvers && sendToUser(approvers, request, EventName.newRequestMy);
          break;
        }
        case StreamEvents.update: {
          const updatedFields = change?.updateDescription?.updatedFields;
          const commanderDecision = decisionFromJSON(request?.commanderDecision?.decision);
          const securityDecision = decisionFromJSON(request?.securityDecision?.decision);

          // If security can see request now
          if (request?.needSecurityDecision && commanderDecision === Decision.APPROVED) {
            this.io.to(config.socket.rooms.security).emit(EventName.newRequestAll, request);
          }

          // If super security can see request now
          if (
            request?.needSuperSecurityDecision &&
            commanderDecision === Decision.APPROVED &&
            (!request.needSecurityDecision || (request?.needSecurityDecision && securityDecision === Decision.APPROVED))
          ) {
            this.io.to(config.socket.rooms.superSecurity).emit(EventName.newRequestAll, request);
          }
          
          // If approvers updated
          const newApprovers: any[] = [];
  
          if (updatedFields?.commanders || updatedFields?.securityApprovers || updatedFields?.superSecurityApprovers) {
            newApprovers.push({
              ...updatedFields?.commanders,
              ...updatedFields?.securityApprovers,
              ...updatedFields?.superSecurityApprovers,
            });
            
            const oldApprovers = approvers.filter((approver) => !newApprovers.includes(approver));
            sendToUser(newApprovers, request, EventName.newRequestMy);
            sendToUser(oldApprovers, request, EventName.updateRequest);
          }

          // If request status updated
          if (updatedFields?.status) {
            sendToUser([...approvers, submittedBy], request, EventName.updateRequest);
          }

          break;
        }
      }
    });
  };
}
