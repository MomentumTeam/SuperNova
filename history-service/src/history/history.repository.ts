import {
  Event,
  EventArray,
  GetDoneRequestsByRoleIdReq,
  GetDoneRequestsByGroupIdReq,
  GetDoneRequestsByEntityIdReq,
} from '../interfaces/protoc/proto/historyService';
import * as C from '../config';
import { RequestService } from '../services/requestService';
import KartoffelService from '../services/kartoffelService';
import {
  Request,
  RequestArray,
  requestTypeToJSON,
  RequestType,
  BoolCheck,
  requestTypeFromJSON,
} from '../interfaces/protoc/proto/requestService';
import {
  Role,
  Entity,
  OrganizationGroup,
} from '../interfaces/protoc/proto/kartoffelService';

import { logger } from '../logger';
import { MailType } from '../interfaces/protoc/proto/mailService';
import { isNaN } from 'lodash';
import { HandleCall } from '@grpc/grpc-js/build/src/server-call';


export class HistoryRepository {
  private requestService: RequestService;
  constructor() {
    this.requestService = new RequestService();
  }
  async getEventsByRoleId(
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
      //צריך לעשות בקשה שמזחריה אם הבקשה ראשונה הייתה בקשה מסוג יצירת תפקיד (כלומר אם זה קרה בלגו או לא) אם לא נוסיף אחד
      const doesCreateBeenInLego : BoolCheck = await this.requestService.wasCreateBeenInLego({
        idCheck:getDoneRequestsByRoleIdReq.roleId,
      });

      if (requestsArr.requests.length === 0) {
        if ((getDoneRequestsByRoleIdReq.from === 1)&&(!doesCreateBeenInLego.isItCreateInLego)) {
          eventArr.totalCount += 1;
          const temporaryEvent: Event = { message: '', date: new Date().getTime() };
          const tempRole : Role = await KartoffelService.GetRoleByRoleId({roleId:getDoneRequestsByRoleIdReq.roleId});
          temporaryEvent.message = `  ${tempRole?.createdAt.toLocaleString()} בתאריך ${tempRole?.displayName} בקשת "יצירת תפקיד" קרתה, שם התפקיד - `;
          eventArr.events.push(temporaryEvent);
        }
        return eventArr;
      }
      // eventArr.totalCount = requestsArr.totalCount
      
      // const firstRequestType =
      //   typeof requestsArr.requests[0].type === typeof ''
      //     ? requestTypeFromJSON(requestsArr.requests[0].type)
      //     : requestsArr.requests[0].type;

      // getDoneRequestsByRoleIdReq.from === 1 &&
      //   firstRequestType !== RequestType.CREATE_ROLE
      if (
        !doesCreateBeenInLego.isItCreateInLego
      ) {
        eventArr.totalCount += 1;
        //יכול לקרות מצב שיש פחות בקשות ממה שהפגיניישן רוצה ואז יקרה מצב שזה יפתח את האיבנטים בשני דפים שונים (צריך לבדוק מה עושים במצב כזה) זה קורה שיש מעט מאוד בקשותת
        if (getDoneRequestsByRoleIdReq.from === 1) {
          
          eventArr.till -= 1;
          const temporaryEvent: Event = { message: '', date: new Date().getTime() };
          const tempRole : Role = await KartoffelService.GetRoleByRoleId({roleId:getDoneRequestsByRoleIdReq.roleId});
          temporaryEvent.message = `  ${tempRole?.createdAt.toLocaleString()} בתאריך ${tempRole?.displayName} בקשת "יצירת תפקיד" קרתה, שם התפקיד - `;
          eventArr.events.push(temporaryEvent);
        }
      }
      // const rows: CreateRoleRow[] = requestsUnderBulk.requests.map(
      // const numberOfRequest = requestsArr.totalCount;
      const numberOfRequest = eventArr.till -
      getDoneRequestsByRoleIdReq.from +
      1;
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
      return eventArr as EventArray;
      // Request tempR requestsArr.requests.forEach()
      // eventArr.events.

      // return document as Request;
    } catch (error) {
      throw error;
    }
  }


  async getEventsOGByOGId(
    getDoneRequestsByOGIdReq: GetDoneRequestsByGroupIdReq
  ): Promise<EventArray> {
    try {
      const requestsArr: RequestArray =
        await this.requestService.getDoneRequestsByOG({
          groupId: getDoneRequestsByOGIdReq.groupId,
          from: getDoneRequestsByOGIdReq.from,
          to: getDoneRequestsByOGIdReq.to,
          showRoles: getDoneRequestsByOGIdReq.showRoles?getDoneRequestsByOGIdReq.showRoles:false,
        });
      const eventArr: EventArray = {
        events: [],
        totalCount: requestsArr.totalCount,
        till: getDoneRequestsByOGIdReq.to,
      };
      //צריך לעשות בקשה שמזחריה אם הבקשה ראשונה הייתה בקשה מסוג יצירת תפקיד (כלומר אם זה קרה בלגו או לא) אם לא נוסיף אחד
      const doesCreateBeenInLego : BoolCheck = await this.requestService.wasCreateBeenInLego({
        idCheck:getDoneRequestsByOGIdReq.groupId,
      });

      if (requestsArr.requests.length === 0) {
        if ((getDoneRequestsByOGIdReq.from === 1)&&(!doesCreateBeenInLego.isItCreateInLego)) {
          eventArr.totalCount += 1;
          const temporaryEvent: Event = { message: '', date: new Date().getTime() };
          const tempOG : OrganizationGroup = await KartoffelService.GetOGById({id: getDoneRequestsByOGIdReq.groupId,});
          temporaryEvent.message = `  ${tempOG?.createdAt.toLocaleString()} בתאריך ${tempOG?.name} בקשת "יצירת OG" קרתה, שם התפקיד - `;
          eventArr.events.push(temporaryEvent);
        }
        return eventArr;
      }
      // eventArr.totalCount = requestsArr.totalCount
      
      // const firstRequestType =
      //   typeof requestsArr.requests[0].type === typeof ''
      //     ? requestTypeFromJSON(requestsArr.requests[0].type)
      //     : requestsArr.requests[0].type;

      // getDoneRequestsByRoleIdReq.from === 1 &&
      //   firstRequestType !== RequestType.CREATE_ROLE
      if (
        !doesCreateBeenInLego.isItCreateInLego
      ) {
        eventArr.totalCount += 1;
        //יכול לקרות מצב שיש פחות בקשות ממה שהפגיניישן רוצה ואז יקרה מצב שזה יפתח את האיבנטים בשני דפים שונים (צריך לבדוק מה עושים במצב כזה) זה קורה שיש מעט מאוד בקשותת
        if (getDoneRequestsByOGIdReq.from === 1) {
          
          eventArr.till -= 1;
          const temporaryEvent: Event = { message: '', date: new Date().getTime() };
          const tempOG : OrganizationGroup = await KartoffelService.GetOGById({id: getDoneRequestsByOGIdReq.groupId,});
          temporaryEvent.message = `  ${tempOG?.createdAt.toLocaleString()} בתאריך ${tempOG?.name} בקשת "יצירת תפקיד" קרתה, שם התפקיד - `;
          eventArr.events.push(temporaryEvent);
        }
      }
      // const rows: CreateRoleRow[] = requestsUnderBulk.requests.map(
      // const numberOfRequest = requestsArr.totalCount;
      const numberOfRequest = eventArr.till -
      getDoneRequestsByOGIdReq.from +
      1;
      for (let i = 0; i++; i < numberOfRequest) {
        const tempEvent: Event = { message: '', date: new Date().getTime() };
        const tempRequest: Request = requestsArr.requests[i];
        const typeOfRequest = tempRequest.type;
        //צריך לבדוק איך להחזיר את הזמנים
        const tempDate = tempRequest.updatedAt.toLocaleString();
        ////////////////////////////////////////////////////////////////////////////////////////////////////////
        switch (typeOfRequest) {
          case RequestType.CREATE_OG:
            tempEvent.message = `  ${tempDate} בתאריך ${tempRequest?.kartoffelParams?.name} בקשת "יצירת קבוצה" קרתה עבור `;
            break;
          case RequestType.RENAME_OG:
            tempEvent.message = `  ${tempDate} בתאריך ${tempRequest?.kartoffelParams?.name} בקשת "שינוי שם קבוצה" קרתה עבור `;
            break;
          case RequestType.CREATE_ROLE:
            tempEvent.message = ` ${tempDate} בתאריך ${tempRequest?.kartoffelParams?.name} בקשת "יצירת תפקיד" קרתה עבור `;
            break;
          case RequestType.CHANGE_ROLE_HIERARCHY:
            tempEvent.message = `${tempDate} בתאריך ${tempRequest?.kartoffelParams?.name} בקשת "שינוי היררכיית תפקיד" קרתה עבור `;
            break;
          default:
        }
        eventArr.events.push(tempEvent);
      }
      return eventArr as EventArray;
      // Request tempR requestsArr.requests.forEach()
      // eventArr.events.

      // return document as Request;
    } catch (error) {
      throw error;
    }
  }


  async getEventsByEntityId(
    getDoneRequestsByEntityIdReq: GetDoneRequestsByEntityIdReq
  ): Promise<EventArray> {
    try {
      const requestsArr: RequestArray =
        await this.requestService.getEventsByEntityId({
          entityId: getDoneRequestsByEntityIdReq.entityId,
          from: getDoneRequestsByEntityIdReq.from,
          to: getDoneRequestsByEntityIdReq.to,
        });
      const eventArr: EventArray = {
        events: [],
        totalCount: requestsArr.totalCount,
        till: getDoneRequestsByEntityIdReq.to,
      };
      //צריך לעשות בקשה שמזחריה אם הבקשה ראשונה הייתה בקשה מסוג יצירת תפקיד (כלומר אם זה קרה בלגו או לא) אם לא נוסיף אחד
      const doesCreateBeenInLego : BoolCheck = await this.requestService.wasCreateBeenInLego({
        idCheck:getDoneRequestsByEntityIdReq.entityId,
      });

      if (requestsArr.requests.length === 0) {
        if ((getDoneRequestsByEntityIdReq.from === 1)&&(!doesCreateBeenInLego.isItCreateInLego)) {
          eventArr.totalCount += 1;
          const temporaryEvent: Event = { message: '', date: new Date().getTime() };
          const tempEntity : Entity = await KartoffelService.getEntityById({id: getDoneRequestsByEntityIdReq.entityId,});
          temporaryEvent.message = `  ${tempEntity?.createdAt.toLocaleString()} בתאריך ${tempEntity?.displayName} בקשת "יצירת תפקיד" קרתה, שם התפקיד - `;
          eventArr.events.push(temporaryEvent);
        }
        return eventArr;
      }
      // eventArr.totalCount = requestsArr.totalCount
      
      // const firstRequestType =
      //   typeof requestsArr.requests[0].type === typeof ''
      //     ? requestTypeFromJSON(requestsArr.requests[0].type)
      //     : requestsArr.requests[0].type;

      // getDoneRequestsByRoleIdReq.from === 1 &&
      //   firstRequestType !== RequestType.CREATE_ROLE
      if (
        !doesCreateBeenInLego.isItCreateInLego
      ) {
        eventArr.totalCount += 1;
        //יכול לקרות מצב שיש פחות בקשות ממה שהפגיניישן רוצה ואז יקרה מצב שזה יפתח את האיבנטים בשני דפים שונים (צריך לבדוק מה עושים במצב כזה) זה קורה שיש מעט מאוד בקשותת
        if (getDoneRequestsByEntityIdReq.from === 1) {
          
          eventArr.till -= 1;
          const temporaryEvent: Event = { message: '', date: new Date().getTime() };
          const tempEntity : Entity = await KartoffelService.getEntityById({id: getDoneRequestsByEntityIdReq.entityId,});
          temporaryEvent.message = `  ${tempEntity?.createdAt.toLocaleString()} בתאריך ${tempEntity?.displayName} בקשת "יצירת תפקיד" קרתה, שם התפקיד - `;
          eventArr.events.push(temporaryEvent);
        }
      }
      // const rows: CreateRoleRow[] = requestsUnderBulk.requests.map(
      // const numberOfRequest = requestsArr.totalCount;
      const numberOfRequest = eventArr.till -
      getDoneRequestsByEntityIdReq.from +
      1;
      for (let i = 0; i++; i < numberOfRequest) {
        const tempEvent: Event = { message: '', date: new Date().getTime() };
        const tempRequest: Request = requestsArr.requests[i];
        const typeOfRequest = tempRequest.type;
        //צריך לבדוק איך להחזיר את הזמנים
        const tempDate = tempRequest.updatedAt.toLocaleString();
        ////////////////////////////////////////////////////////////////////////////////////////////////////////
        switch (typeOfRequest) {
          case RequestType.CREATE_ENTITY:
            tempEvent.message = `  ${tempDate} בתאריך ${tempRequest?.kartoffelParams?.name} בקשת "יצירת יישות" קרתה עבור `;
            break;
          case RequestType.ADD_APPROVER:
            tempEvent.message = `  ${tempDate} בתאריך ${tempRequest?.kartoffelParams?.name} בקשת "הוספת גורם מאשר" קרתה עבור `;
            break;
          case RequestType.EDIT_ENTITY:
            tempEvent.message = ` ${tempDate} בתאריך ${tempRequest?.kartoffelParams?.name} בקשת "שינוי האדם שמחזיר בתפקיד" קרתה עבור `;
            break;
          case RequestType.ASSIGN_ROLE_TO_ENTITY:
            tempEvent.message = `${tempDate} בתאריך ${tempRequest?.kartoffelParams?.name} בקשת "שיוך אדם לתפקיד" קרתה עבור `;
            break;
          default:
        }
        eventArr.events.push(tempEvent);
      }
      return eventArr as EventArray;
      // Request tempR requestsArr.requests.forEach()
      // eventArr.events.

      // return document as Request;
    } catch (error) {
      throw error;
    }
  }

  async getEventsBySubmittedEntityId(
    getDoneRequestsByEntityIdReq: GetDoneRequestsByEntityIdReq
  ): Promise<EventArray> {
    try {
      const requestsArr: RequestArray =
        await this.requestService.getEventsByEntityId({
          entityId: getDoneRequestsByEntityIdReq.entityId,
          from: getDoneRequestsByEntityIdReq.from,
          to: getDoneRequestsByEntityIdReq.to,
        });
      const eventArr: EventArray = {
        events: [],
        totalCount: requestsArr.totalCount,
        till: getDoneRequestsByEntityIdReq.to,
      };
      //צריך לעשות בקשה שמזחריה אם הבקשה ראשונה הייתה בקשה מסוג יצירת תפקיד (כלומר אם זה קרה בלגו או לא) אם לא נוסיף אחד
      // const doesCreateBeenInLego = this.requestService.wasCreateBeenInLego({
      //   idCheck:getDoneRequestsByEntityIdReq.entityId,
      // });

      if (requestsArr.requests.length === 0) {
        // if ((getDoneRequestsByEntityIdReq.from === 1)&&(!doesCreateBeenInLego.isItCreateInLego)) {
        //   eventArr.totalCount += 1;
        //   const temporaryEvent: Event = { message: '', date: new Date().getTime() };
        //   const tempEntity : Entity = this.requestService.getEntityByEntityId;
        //   temporaryEvent.message = `  ${tempEntity?.createdAt.toLocaleString()} בתאריך ${tempEntity?.displayName} בקשת "יצירת תפקיד" קרתה, שם התפקיד - `;
        //   eventArr.events.push(temporaryEvent);
        // }
        return eventArr;
      }
      // eventArr.totalCount = requestsArr.totalCount
      
      // const firstRequestType =
      //   typeof requestsArr.requests[0].type === typeof ''
      //     ? requestTypeFromJSON(requestsArr.requests[0].type)
      //     : requestsArr.requests[0].type;

      // getDoneRequestsByRoleIdReq.from === 1 &&
      //   firstRequestType !== RequestType.CREATE_ROLE

      /*if (
        !doesCreateBeenInLego.isItCreateInLego
      ) {
        eventArr.totalCount += 1;
        //יכול לקרות מצב שיש פחות בקשות ממה שהפגיניישן רוצה ואז יקרה מצב שזה יפתח את האיבנטים בשני דפים שונים (צריך לבדוק מה עושים במצב כזה) זה קורה שיש מעט מאוד בקשותת
        if (getDoneRequestsByEntityIdReq.from === 1) {
          
          eventArr.till -= 1;
          const temporaryEvent: Event = { message: '', date: new Date().getTime() };
          const tempEntity : Entity = this.requestService.getEntityByEntityId;
          temporaryEvent.message = `  ${tempEntity?.createdAt.toLocaleString()} בתאריך ${tempEntity?.displayName} בקשת "יצירת תפקיד" קרתה, שם התפקיד - `;
          eventArr.events.push(temporaryEvent);
        }
      }*/

      // const rows: CreateRoleRow[] = requestsUnderBulk.requests.map(
      // const numberOfRequest = requestsArr.totalCount;
      const numberOfRequest = eventArr.till -
      getDoneRequestsByEntityIdReq.from +
      1;
      for (let i = 0; i++; i < numberOfRequest) {
        const tempEvent: Event = { message: '', date: new Date().getTime() };
        const tempRequest: Request = requestsArr.requests[i];
        const typeOfRequest = tempRequest.type;
        //צריך לבדוק איך להחזיר את הזמנים
        const tempDate = tempRequest.updatedAt.toLocaleString();
        ////////////////////////////////////////////////////////////////////////////////////////////////////////
        switch (typeOfRequest) {
          //////////////////////////////////////////////////////////////////// צריך לעשות בשביל כל הבקשות
          case RequestType.CREATE_ENTITY:
            tempEvent.message = `  ${tempDate} בתאריך ${tempRequest?.kartoffelParams?.name} בקשת "יצירת יישות" קרתה עבור `;
            break;
          case RequestType.ADD_APPROVER:
            tempEvent.message = `  ${tempDate} בתאריך ${tempRequest?.kartoffelParams?.name} בקשת "הוספת גורם מאשר" קרתה עבור `;
            break;
          case RequestType.EDIT_ENTITY:
            tempEvent.message = ` ${tempDate} בתאריך ${tempRequest?.kartoffelParams?.name} בקשת "שינוי האדם שמחזיר בתפקיד" קרתה עבור `;
            break;
          case RequestType.ASSIGN_ROLE_TO_ENTITY:
            tempEvent.message = `${tempDate} בתאריך ${tempRequest?.kartoffelParams?.name} בקשת "שיוך אדם לתפקיד" קרתה עבור `;
            break;
          default:
        }
        eventArr.events.push(tempEvent);
      }
      return eventArr as EventArray;
      // Request tempR requestsArr.requests.forEach()
      // eventArr.events.

      // return document as Request;
    } catch (error) {
      throw error;
    }
  }

}
