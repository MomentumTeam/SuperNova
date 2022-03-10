import * as socketIO from "socket.io";
import mongoose from "mongoose";
import { config } from "../config";
import { logger } from '../utils/logger/logger';
import { concat, unique } from '../utils/array.utils';
import { EventName, StreamEvents } from './mongo.types';
import { ApproverService } from '../services/approver.service';
import { Decision, decisionFromJSON, RequestStatus } from '../interfaces/protoc/proto/requestService';

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

  sendToUser = (user: any, request: any, eventName: string) => {
    try {
      const users = Array.isArray(user) ? [...user] : [user];
      const usersIds = users.map((user) => user && user.id.toString());
      const usersUnique = unique(usersIds);
  
      if (usersUnique.length > 0) this.io.to(usersUnique).emit(eventName, request);
    } catch (error: any) {
      logger.error(`Error while send to user: ${error.message}`);
    }
  };

  createNotificiationStream = () => {
    const notificationCollection = this.db
      .collection(config.mongo.collections.notifications)
      .watch(undefined, { fullDocument: "updateLookup" });

    notificationCollection.on("change", (change) => {
      try {
        let destUserId;
        if (change?.fullDocument?.ownerId) {
          change.fullDocument.id = change?.fullDocument._id.toString();
          destUserId = change.fullDocument.ownerId.toString();
        }
        
        logger.info(
          `got a change in notification collection, operation type: ${change.operationType}, user: ${destUserId}`
        );
        switch (change.operationType) {
          case StreamEvents.insert:
            destUserId && this.io.to(destUserId).emit(EventName.newNotification, change.fullDocument);
            break;
          case StreamEvents.update:
            destUserId && this.io.to(destUserId).emit(EventName.readNotifications);
            break;
        }
      } catch (error: any) {
        logger.error(`error in notification change stream: ${error.message}`);
      }
    });
  };

  createRequestStream = () => {
    const requestCollection = this.db
      .collection(config.mongo.collections.requests)
      .watch(undefined, { fullDocument: "updateLookup" });

    requestCollection.on("change", async(change) => {
      try {
        const request = change?.fullDocument;
        logger.info(`got a change in request collection, operation type: ${change.operationType}`);
        console.log('request', request);

        const submittedBy = request?.submittedBy;
        const submittedByGroups = [...submittedBy.ancestors, submittedBy.directGroup];
        if (request?._id) request.id = request?._id.toString();

         // Get approvers
         let adminApprovers: any = [];
         try {
           const getAdminsRes = await ApproverService.getAdminsByGroupIds({ groupIds: submittedByGroups });
           if (getAdminsRes?.approvers) adminApprovers = getAdminsRes.approvers;
         } catch (error: any) {
           logger.error(`Error while get admin approvers: ${error.message}`);
         }

         const commanders = request?.commanders;
         const securityApprovers = request?.securityApprovers;
         const superSecurityApprovers = request?.superSecurityApprovers;
         const approvers = [...commanders, ...securityApprovers, ...superSecurityApprovers, ...adminApprovers];

         switch (change.operationType) {
           case StreamEvents.insert: {
             // Notify approvers
             approvers && this.sendToUser(approvers, request, EventName.newRequestMy);

             // TODO: send to user submitted by
             break;
           }
           case StreamEvents.update: {
             const updatedFields = change?.updateDescription?.updatedFields;
            console.log("updatedFields", updatedFields);

             const commanderDecision = decisionFromJSON(request?.commanderDecision?.decision);
             const securityDecision = decisionFromJSON(request?.securityDecision?.decision);

             // If security can see request now
             if (
               (updatedFields?.status === RequestStatus.APPROVED_BY_COMMANDER ||
                 (commanderDecision === Decision.APPROVED && updatedFields?.commanderDecision)) &&
               request?.needSecurityDecision
             ) {
               this.io.to(config.socket.rooms.security).emit(EventName.newRequestAll, request);
             }

             // If super security can see request now
             if (
               request?.needSuperSecurityDecision &&
               commanderDecision === Decision.APPROVED &&
               ((!request.needSecurityDecision && updatedFields?.commanderDecision) ||
                 (request?.needSecurityDecision &&
                   securityDecision === Decision.APPROVED &&
                   updatedFields?.securityDecision))
             ) {
               this.io.to(config.socket.rooms.superSecurity).emit(EventName.newRequestAll, request);
             }

             // If approvers updated
             if (
               updatedFields?.commanders ||
               updatedFields?.securityApprovers ||
               updatedFields?.superSecurityApprovers
             ) {
               const newApprovers: any = concat(
                 updatedFields?.commanders,
                 updatedFields?.securityApprovers,
                 updatedFields?.superSecurityApprovers
               );

               const oldApprovers = approvers.filter(
                 (approver) =>
                   !newApprovers.some((newApprover: any) => newApprover.id.toString() === approver.id.toString())
               );
               this.sendToUser(newApprovers, request, EventName.newRequestMy);
               this.sendToUser([...oldApprovers, submittedBy], request, EventName.updateRequest);
             }

             // If request status updated
             if (updatedFields?.status) {
               this.sendToUser([...approvers, submittedBy], request, EventName.updateRequest);
             }

             break;
           }
         }
      } catch (error: any) {
        logger.error(`error in request change stream: ${error.message}`)
      }
    });
  };
}
