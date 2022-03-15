import * as socketIO from "socket.io";
import { Notification } from "../interfaces/protoc/proto/notificationService";
import { Request } from "../interfaces/protoc/proto/requestService";
import {
  SendEventReq,
  SocketEventType,
  socketEventTypeFromJSON,
  SuccessMessage,
} from "../interfaces/protoc/proto/socketService";
import { EventName } from "./socket.types";
import { getApproversAndSubmittedFromReq, getNewApprovers, sendToUser } from "./socket.utils";

export class SocketRepository {
  async sendEvent(io: socketIO.Server, sendEventReq: SendEventReq): Promise<SuccessMessage> {
    const eventType = socketEventTypeFromJSON(sendEventReq.eventType);
    try {
      switch (eventType) {
        case SocketEventType.NEW_NOTIFICATION: {
          const notification: Notification | undefined = sendEventReq?.eventData?.notification;
          if (!notification) throw Error("sent new_notification event without notification object");

          const destUsers = [notification?.ownerId];
          if (destUsers && destUsers.length > 0) sendToUser(io, destUsers, EventName.newNotification, notification);

          break;
        }
        case SocketEventType.READ_NOTIFICATION: {
          const destUsers = sendEventReq?.eventData?.additionalDests;
          if (destUsers && destUsers.length > 0) sendToUser(io, destUsers, EventName.readNotifications);

          break;
        }
        case SocketEventType.NEW_REQUEST: {
          const request: Request | undefined = sendEventReq?.eventData?.request;
          if (!request) throw Error("sent new_request event without request object");

          const [directApprovers, undirectApprovers] = await getApproversAndSubmittedFromReq(request);
          // Notify approvers
          directApprovers && sendToUser(io, directApprovers, EventName.newRequestMy, request);

          // Notify admin approver
          undirectApprovers && sendToUser(io, undirectApprovers, EventName.newRequestAll, request);
          break;
        }
        case SocketEventType.UPDATE_REQUEST: {
          const request: Request | undefined = sendEventReq?.eventData?.request;
          if (!request) throw Error("sent update_request event without request object");

          const [directApprovers, undirectApprovers, submittedBy] = await getApproversAndSubmittedFromReq(request);

          // Send approvers and submitted an update
          sendToUser(io, [...directApprovers, ...undirectApprovers, submittedBy], EventName.updateRequest, request);
          break;
        }
        case SocketEventType.UPDATE_REQUEST_APPROVERS: {
          const request: Request | undefined = sendEventReq?.eventData?.request;
          if (!request) throw Error("sent update_request_approvers event without request object");

          const oldRequest: Request | undefined = sendEventReq?.eventData?.oldRequest;
          if (!oldRequest) throw Error("sent update_request_approvers event without old request object");

          const [directApprovers, undirectApprovers, submittedBy] = await getApproversAndSubmittedFromReq(request);
          const [oldDirectApprovers, oldUndirectApprovers] = await getApproversAndSubmittedFromReq(oldRequest);

          // Find which new in direct approvers and send them new my approve request
          const newDirectApprovers = getNewApprovers(oldDirectApprovers, directApprovers);
          newDirectApprovers && sendToUser(io, newDirectApprovers, EventName.newRequestMy, request);

          // Find which new in undirect approvers and send them new all approve request
          const newUndirectApprovers = getNewApprovers(oldUndirectApprovers, undirectApprovers);
          newUndirectApprovers && sendToUser(io, newUndirectApprovers, EventName.newRequestAll, request);

          // Send old approvers and submitted by an update
          sendToUser(io, [...oldDirectApprovers, ...oldUndirectApprovers, submittedBy], EventName.updateRequest, request);

          break;
        }
        case SocketEventType.DELETE_REQUEST: {
          const oldRequest: Request | undefined = sendEventReq?.eventData?.oldRequest;
          if (!oldRequest) throw Error("sent delete_request event without old request object");

          const [oldDirectApprovers, oldUndirectApprovers, submittedBy] = await getApproversAndSubmittedFromReq(
            oldRequest
          );

          // Send old approvers and submitted by an update
          sendToUser(
            io,
            [...oldDirectApprovers, ...oldUndirectApprovers, submittedBy],
            EventName.deleteRequest,
            oldRequest
          );
          break;
        }
        default:
          throw Error("unsupported eventType");
      }
      return { success: true };
    } catch (error) {
      throw error;
    }
  }
}
