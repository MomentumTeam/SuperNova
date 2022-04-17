import {
  Event,
  EventArray,
  GetDoneRequestsByRoleIdReq,
  GetDoneRequestsByGroupIdReq,
  GetDoneRequestsByEntityIdReq,
  EventArray,
} from '../interfaces/protoc/proto/historyService';
//   import { createNotifications } from '../services/notificationHelper';
//   import { sendMail } from '../services/mailHelper';
import * as C from '../config';
import { RequestService } from '../services/request.service';

//   import {
//     getAncestorsQuery,
//     getPersonQuery,
//     getRequestTypeQuery,
//     getSearchQuery,
//     getSortQuery,
//     getStatusQuery,
//     getWaitingForApproveCountQuery,
//     removeApproverFromArray,
//   } from '../utils/query';
import {
  Request,
  RequestArray,
  requestTypeToJSON,
  RequestType,
  requestTypeFromJSON,
} from '../interfaces/protoc/proto/requestService';

import { logger } from '../logger';
import { MailType } from '../interfaces/protoc/proto/mailService';
//   import ApproverService from '../services/approverService';
import { isNaN } from 'lodash';
import { HandleCall } from '@grpc/grpc-js/build/src/server-call';
//   import { getDoneRequestsByRoleId } from './request.controller';

export class HistoryRepository {
  private requestService: RequestService;
  constructor() {
    this.requestService = new RequestService();
  }
  async GetEventsByRoleId(
    getDoneRequestsByRoleIdReq: GetDoneRequestsByRoleIdReq
  ): Promise<EventArray> {
    try {
      const requestsArr: RequestArray =
        await this.requestService.getDoneRequestsByRoleId({
          roleId: getDoneRequestsByRoleIdReq.roleId,
          from: getDoneRequestsByRoleIdReq.from,
          to: getDoneRequestsByRoleIdReq.to,
        });
      const eventArr: EventArray = {
        events: [],
        totalCount: requestsArr.totalCount,
        till: getDoneRequestsByRoleIdReq.to,
      };

      if (requestsArr.requests.length === 0) {
        return eventArr;
      }
      // eventArr.totalCount = requestsArr.totalCount
      //צריך לעשות בקשה שמזחריה אם הבקשה ראשונה הייתה בקשה מסוג יצירת תפקיד (כלומר אם זה קרה בלגו או לא) אם לא נוסיף אחד
      const firstRequestType =
        typeof requestsArr.requests[0].type === typeof ''
          ? requestTypeFromJSON(requestsArr.requests[0].type)
          : requestsArr.requests[0].type;
      if (
        getDoneRequestsByRoleIdReq.from === 1 &&
        firstRequestType !== RequestType.CREATE_ROLE
      ) {
        eventArr.totalCount += 1;
        eventArr.till -= 1;
      }
      // const rows: CreateRoleRow[] = requestsUnderBulk.requests.map(
      const numberOfRequest = requestsArr.totalCount;
      for (let i = 0; i++; i < numberOfRequest) {
        const tempEvent: Event = { message: '', date: new Date().getTime() };
        const tempRequest: Request = requestsArr.requests[i];
        const typeOfRequest = tempRequest.type;
        //צריך לבדוק איך להחזיר את הזמנים
        const tempDate = tempRequest.updatedAt.toLocaleString();

        switch (typeOfRequest) {
          case RequestType.CREATE_ROLE:
            tempEvent.message = `  ${tempDate} בתאריך ${tempRequest?.kartoffelParams?.name} בקשת "יצירת תפקיד" קרתה עבור `;
            break;
          case RequestType.RENAME_ROLE:
            tempEvent.message = `  ${tempDate} בתאריך ${tempRequest?.kartoffelParams?.name} בקשת "שינוי שם תפקיד" קרתה עבור `;
            break;
          case RequestType.EDIT_ENTITY:
            tempEvent.message = ` ${tempDate} בתאריך ${tempRequest?.kartoffelParams?.name} בקשת "שינוי האדם שמחזיר בתפקיד" קרתה עבור `;
            break;
          case RequestType.ASSIGN_ROLE_TO_ENTITY:
            tempEvent.message = `${tempDate} בתאריך ${tempRequest?.kartoffelParams?.name} בקשת "שיוך אדם לתפקיד" קרתה עבור `;
            break;
          case RequestType.CHANGE_ROLE_HIERARCHY:
            tempEvent.message = `  ${tempDate} בתאריך ${tempRequest?.kartoffelParams?.name} בקשת "שינוי היררכיית תפקיד" קרתה עבור `;

          default:
        }
        eventArr.events.push(tempEvent);
      }
      // Request tempR requestsArr.requests.forEach()
      // eventArr.events.

      // return document as Request;
    } catch (error) {
      throw error;
    }
  }
}
