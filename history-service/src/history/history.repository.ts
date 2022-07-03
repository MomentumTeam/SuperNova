import {
  Event,
  EventArray,
  GetDoneRequestsByRoleIdReq,
  GetDoneRequestsByGroupIdReq,
  GetDoneRequestsByEntityIdReq,
} from "../interfaces/protoc/proto/historyService";
import * as C from "../config";
import { RequestService } from "../services/requestService";
import KartoffelService from "../services/kartoffelService";
import {
  Request,
  RequestArray,
  requestTypeToJSON,
  RequestType,
  BoolCheck,
  requestTypeFromJSON,
} from "../interfaces/protoc/proto/requestService";
import {
  Role,
  Entity,
  OrganizationGroup,
} from "../interfaces/protoc/proto/kartoffelService";

// import { CreatedInLegoCheck, } from '../services/requestService';
// import { wasCreateBeenInLego, } from '../services/requestService';

import { logger } from "../logger";
import { MailType } from "../interfaces/protoc/proto/mailService";
import { isNaN } from "lodash";
import { HandleCall } from "@grpc/grpc-js/build/src/server-call";

export class HistoryRepository {
  private requestService: RequestService;
  constructor() {
    this.requestService = new RequestService();
  }

  //צריך לחסום את ה'פרום' בערך עליון
  async getEventsByRoleId(
    getDoneRequestsByRoleIdReq: GetDoneRequestsByRoleIdReq
  ): Promise<EventArray> {
    try {
      //צריך לעשות בקשה שמזחריה אם הבקשה ראשונה הייתה בקשה מסוג יצירת תפקיד (כלומר אם זה קרה בלגו או לא) אם לא נוסיף אחד
      const createdInLego: BoolCheck =
        await this.requestService.createdInLegoCheck({
          idCheck: getDoneRequestsByRoleIdReq.roleId,
        });
      let fromVal = getDoneRequestsByRoleIdReq.from;
      let toVal = getDoneRequestsByRoleIdReq.to;

      if (!createdInLego.createdInLego) {
        const tempVar = getDoneRequestsByRoleIdReq.from;
        fromVal = tempVar !== 1 ? tempVar - 1 : tempVar;
        const tempVar2 = getDoneRequestsByRoleIdReq.to;
        toVal = tempVar2 !== 1 ? tempVar2 - 1 : tempVar2;
      }

      const requestsArr: RequestArray =
        await this.requestService.getDoneRequestsByRoleId({
          roleId: getDoneRequestsByRoleIdReq.roleId,
          from: fromVal,
          to: toVal,
        });

      //נוסיף תנאי של 1-1
      // let requestsArr: RequestArray = {requests:[],totalCount:0};
      // כל עוד אנחנו במצב שזה גם לא נוצר בלגו וגם שפרום והטו 1 אז תאפס את הפונקציה
      if (
        !doesCreateBeenInLego.isItCreateInLego &&
        getDoneRequestsByRoleIdReq.to === 1 &&
        getDoneRequestsByRoleIdReq.from === 1
      ) {
        requestsArr.requests = [];
      }

      const eventArr: EventArray = {
        events: [],
        totalCount: requestsArr.totalCount,
        ////////till: requestsArr.totalCount>=getDoneRequestsByRoleIdReq.to ? getDoneRequestsByRoleIdReq.to: requestsArr.totalCount,
        // till: createdInLego.createdInLego?getDoneRequestsByRoleIdReq.to:getDoneRequestsByRoleIdReq.to - 1,
        //till: Math.min(getDoneRequestsByRoleIdReq.to,requestsArr.totalCount),
      };
      let tillTemp = createdInLego.createdInLego
        ? getDoneRequestsByRoleIdReq.to
        : getDoneRequestsByRoleIdReq.to - 1;

      if (requestsArr?.totalCount === 0) {
        if (
          getDoneRequestsByRoleIdReq.from === 1 &&
          !createdInLego.createdInLego
        ) {
          eventArr.totalCount += 1;
          tillTemp = 1;
          const temporaryEvent: Event = {
            message: "",
            date: new Date().getTime(),
          };
          try {
            const tempRole: Role = await KartoffelService.GetRoleByRoleId({
              roleId: getDoneRequestsByRoleIdReq.roleId,
            });
            temporaryEvent.message = `  ${tempRole?.createdAt.toLocaleString()} בתאריך ${
              tempRole?.displayName
            } בקשת "יצירת תפקיד" קרתה, שם התפקיד - `;
            eventArr.events.push(temporaryEvent);
          } catch (error) {
            eventArr.totalCount = 0;
            console.log(error, "faild to get Kartoffel roleId");
          }
        }
        return eventArr;
      }

      if (!createdInLego.createdInLego) {
        eventArr.totalCount += 1; //////////////////////////////////////////////////////////////from =1
        //יכול לקרות מצב שיש פחות בקשות ממה שהפגיניישן רוצה ואז יקרה מצב שזה יפתח את האיבנטים בשני דפים שונים (צריך לבדוק מה עושים במצב כזה) זה קורה שיש מעט מאוד בקשותת
        if (getDoneRequestsByRoleIdReq.from === 1) {
          const temporaryEvent: Event = {
            message: "",
            date: new Date().getTime(),
          };
          const tempRole: Role = await KartoffelService.GetRoleByRoleId({
            roleId: getDoneRequestsByRoleIdReq.roleId,
          });
          temporaryEvent.message = `  ${tempRole?.createdAt.toLocaleString()} בתאריך ${
            tempRole?.displayName
          } בקשת "יצירת תפקיד" קרתה, שם התפקיד - `;
          eventArr.events.push(temporaryEvent);
        }
      }

      let numberOfRequest = requestsArr.requests.length;
      //if (numberOfRequest > )                                                                                   /// שים לב
      ////////////////////////////const theMin = Math.min(toVal, requestsArr.totalCount);
      /////////////////////////let numberOfRequest = Math.min(toVal - fromVal + 1, requestsArr.totalCount);
      // if ((!createdInLego.createdInLego) && (getDoneRequestsByRoleIdReq.from === 1)) {
      //   --numberOfRequest;
      // }
      for (let i = 0; i < numberOfRequest; i++) {
        const tempEvent: Event = { message: "", date: new Date().getTime() };
        const tempRequest: Request = requestsArr.requests[i];

        const typeOfTheRequest =
          typeof tempRequest.type === typeof ""
            ? requestTypeFromJSON(tempRequest.type)
            : tempRequest.type;
        //צריך לבדוק איך להחזיר את הזמנים
        const tempDate = tempRequest.updatedAt.toLocaleString();

        switch (typeOfTheRequest) {
          case requestTypeFromJSON(RequestType.CREATE_ROLE):
            tempEvent.message = `  ${tempDate} בתאריך ${tempRequest?.kartoffelParams?.name} בקשת "יצירת תפקיד" קרתה עבור `;
            break;
          case requestTypeFromJSON(RequestType.RENAME_ROLE):
            tempEvent.message = `  ${tempDate} בתאריך ${tempRequest?.kartoffelParams?.name} בקשת "שינוי שם תפקיד" קרתה עבור `;
            break;
          case requestTypeFromJSON(RequestType.EDIT_ENTITY):
            tempEvent.message = ` ${tempDate} בתאריך ${tempRequest?.kartoffelParams?.name} בקשת "שינוי האדם שמחזיר בתפקיד" קרתה עבור `;
            break;
          case requestTypeFromJSON(RequestType.ASSIGN_ROLE_TO_ENTITY):
            tempEvent.message = `${tempDate} בתאריך ${tempRequest?.kartoffelParams?.name} בקשת "שיוך אדם לתפקיד" קרתה עבור `;
            break;
          case requestTypeFromJSON(RequestType.CHANGE_ROLE_HIERARCHY):
            tempEvent.message = `  ${tempDate} בתאריך ${tempRequest?.kartoffelParams?.name} בקשת "שינוי היררכיית תפקיד" קרתה עבור `;
            break;

          default:
        }
        eventArr.events.push(tempEvent);
      }
      // eventArr.events.reverse();
      if (!createdInLego.createdInLego) {
        tillTemp += 1;
      }
      return eventArr as EventArray;
    } catch (error) {
      throw error;
    }
  }

  async getEventsOGByOGId(
    getDoneRequestsByOGIdReq: GetDoneRequestsByGroupIdReq
  ): Promise<EventArray> {
    try {
      //צריך לעשות בקשה שמזחריה אם הבקשה ראשונה הייתה בקשה מסוג יצירת תפקיד (כלומר אם זה קרה בלגו או לא) אם לא נוסיף אחד
      const doesCreateBeenInLego: BoolCheck =
        await this.requestService.wasCreateBeenInLego({
          idCheck: getDoneRequestsByOGIdReq.groupId,
        });
      let fromVal = getDoneRequestsByOGIdReq.from;
      let toVal = getDoneRequestsByOGIdReq.to;

      if (!doesCreateBeenInLego.isItCreateInLego) {
        const tempVar = getDoneRequestsByOGIdReq.from;
        fromVal = tempVar !== 1 ? tempVar - 1 : tempVar;
        const tempVar2 = getDoneRequestsByOGIdReq.to;
        toVal = tempVar2 !== 1 ? tempVar2 - 1 : tempVar2;
      }

      const requestsArr: RequestArray =
        await this.requestService.getDoneRequestsByOG({
          groupId: getDoneRequestsByOGIdReq.groupId,
          from: fromVal,
          to: toVal,
          showRoles: getDoneRequestsByOGIdReq.showRoles,
        } as any);

      //נוסיף תנאי של 1-1
      // let requestsArr: RequestArray = {requests:[],totalCount:0};
      // כל עוד אנחנו במצב שזה גם לא נוצר בלגו וגם שפרום והטו 1 אז תאפס את הפונקציה
      if (
        !doesCreateBeenInLego.isItCreateInLego &&
        getDoneRequestsByOGIdReq.to === 1 &&
        getDoneRequestsByOGIdReq.from === 1
      ) {
        requestsArr.requests = [];
      }

      const eventArr: EventArray = {
        events: [],
        totalCount: requestsArr.totalCount,
        till: doesCreateBeenInLego.isItCreateInLego
          ? getDoneRequestsByOGIdReq.to
          : getDoneRequestsByOGIdReq.to - 1,
      };

      if (requestsArr?.totalCount === 0) {
        if (
          getDoneRequestsByOGIdReq.from === 1 &&
          !doesCreateBeenInLego.isItCreateInLego
        ) {
          eventArr.totalCount += 1;
          eventArr.till = 1;
          const temporaryEvent: Event = {
            message: "",
            date: new Date().getTime(),
          };
          try {
            const tempGroup: OrganizationGroup =
              await KartoffelService.GetOGById({
                id: getDoneRequestsByOGIdReq.groupId,
              });
            temporaryEvent.message = `  ${tempGroup?.createdAt.toLocaleString()} בתאריך ${
              tempGroup?.name
            } בקשת "יצירת קבוצה" קרתה, שם הקבוצה - `;
            eventArr.events.push(temporaryEvent);
          } catch (error) {
            eventArr.totalCount = 0;
            console.log(error, "faild to get Kartoffel groupId");
          }
        }
        return eventArr;
      }

      if (!doesCreateBeenInLego.isItCreateInLego) {
        eventArr.totalCount += 1; //////////////////////////////////////////////////////////////from =1
        //יכול לקרות מצב שיש פחות בקשות ממה שהפגיניישן רוצה ואז יקרה מצב שזה יפתח את האיבנטים בשני דפים שונים (צריך לבדוק מה עושים במצב כזה) זה קורה שיש מעט מאוד בקשותת
        if (getDoneRequestsByOGIdReq.from === 1) {
          const temporaryEvent: Event = {
            message: "",
            date: new Date().getTime(),
          };
          const tempGroup: OrganizationGroup = await KartoffelService.GetOGById(
            { id: getDoneRequestsByOGIdReq.groupId }
          );
          temporaryEvent.message = `  ${tempGroup?.createdAt.toLocaleString()} בתאריך ${
            tempGroup?.name
          } בקשת "יצירת קבוצה" קרתה, שם הקבוצה - `;
          eventArr.events.push(temporaryEvent);
        }
      }

      let numberOfRequest = requestsArr.requests.length;

      for (let i = 0; i < numberOfRequest; i++) {
        const tempEvent: Event = { message: "", date: new Date().getTime() };
        const tempRequest: Request = requestsArr.requests[i];

        const typeOfTheRequest =
          typeof tempRequest.type === typeof ""
            ? requestTypeFromJSON(tempRequest.type)
            : tempRequest.type;
        //צריך לבדוק איך להחזיר את הזמנים
        const tempDate = tempRequest.updatedAt.toLocaleString();

        switch (typeOfTheRequest) {
          case requestTypeFromJSON(RequestType.CREATE_ROLE):
            tempEvent.message = `  ${tempDate} בתאריך ${tempRequest?.kartoffelParams?.name} בקשת "יצירת תפקיד" קרתה עבור `;
            break;
          case requestTypeFromJSON(RequestType.CHANGE_ROLE_HIERARCHY):
            tempEvent.message = `  ${tempDate} בתאריך ${tempRequest?.kartoffelParams?.name} בקשת "שינוי היררכיית תפקיד" קרתה עבור `;
            break;
          case requestTypeFromJSON(RequestType.CREATE_OG):
            tempEvent.message = ` ${tempDate} בתאריך ${tempRequest?.kartoffelParams?.name} בקשת "יצירת קבוצה" קרתה עבור `;
            break;
          case requestTypeFromJSON(RequestType.RENAME_OG):
            tempEvent.message = `  ${tempDate} בתאריך ${tempRequest?.kartoffelParams?.name} בקשת "שינוי שם קבוצה" קרתה עבור `;
            break;

          default:
        }
        eventArr.events.push(tempEvent);
      }
      // eventArr.events.reverse();
      if (!doesCreateBeenInLego.isItCreateInLego) {
        eventArr.till += 1;
      }
      return eventArr as EventArray;
    } catch (error) {
      throw error;
    }
  }

  async oldddgetEventsOGByOGId(
    getDoneRequestsByOGIdReq: GetDoneRequestsByGroupIdReq
  ): Promise<EventArray> {
    try {
      const requestsArr: RequestArray =
        await this.requestService.getDoneRequestsByOG({
          groupId: getDoneRequestsByOGIdReq.groupId,
          from: getDoneRequestsByOGIdReq.from,
          to: getDoneRequestsByOGIdReq.to,
          showRoles: getDoneRequestsByOGIdReq.showRoles
            ? getDoneRequestsByOGIdReq.showRoles
            : false,
        });
      const eventArr: EventArray = {
        events: [],
        totalCount: requestsArr.totalCount,
        // till: getDoneRequestsByOGIdReq.to,
      };
      let tillTemp = getDoneRequestsByOGIdReq.to;
      //צריך לעשות בקשה שמזחריה אם הבקשה ראשונה הייתה בקשה מסוג יצירת תפקיד (כלומר אם זה קרה בלגו או לא) אם לא נוסיף אחד
      const createdInLego: BoolCheck =
        await this.requestService.createdInLegoCheck({
          idCheck: getDoneRequestsByOGIdReq.groupId,
        });

      if (requestsArr.requests.length === 0) {
        if (
          getDoneRequestsByOGIdReq.from === 1 &&
          !createdInLego.createdInLego
        ) {
          eventArr.totalCount += 1;
          const temporaryEvent: Event = {
            message: "",
            date: new Date().getTime(),
          };
          const tempOG: OrganizationGroup = await KartoffelService.GetOGById({
            id: getDoneRequestsByOGIdReq.groupId,
          });
          temporaryEvent.message = `  ${tempOG?.createdAt.toLocaleString()} בתאריך ${
            tempOG?.name
          } בקשת "יצירת OG" קרתה, שם התפקיד - `;
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
      if (!createdInLego.createdInLego) {
        eventArr.totalCount += 1;
        //יכול לקרות מצב שיש פחות בקשות ממה שהפגיניישן רוצה ואז יקרה מצב שזה יפתח את האיבנטים בשני דפים שונים (צריך לבדוק מה עושים במצב כזה) זה קורה שיש מעט מאוד בקשותת
        if (getDoneRequestsByOGIdReq.from === 1) {
          tillTemp -= 1;
          const temporaryEvent: Event = {
            message: "",
            date: new Date().getTime(),
          };
          const tempOG: OrganizationGroup = await KartoffelService.GetOGById({
            id: getDoneRequestsByOGIdReq.groupId,
          });
          temporaryEvent.message = `  ${tempOG?.createdAt.toLocaleString()} בתאריך ${
            tempOG?.name
          } בקשת "יצירת תפקיד" קרתה, שם התפקיד - `;
          eventArr.events.push(temporaryEvent);
        }
      }
      // const rows: CreateRoleRow[] = requestsUnderBulk.requests.map(
      // const numberOfRequest = requestsArr.totalCount;
      const numberOfRequest = tillTemp - getDoneRequestsByOGIdReq.from + 1;
      for (let i = 0; i++; i < numberOfRequest) {
        const tempEvent: Event = { message: "", date: new Date().getTime() };
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
      //צריך לעשות בקשה שמזחריה אם הבקשה ראשונה הייתה בקשה מסוג יצירת תפקיד (כלומר אם זה קרה בלגו או לא) אם לא נוסיף אחד
      const doesCreateBeenInLego: BoolCheck =
        await this.requestService.wasCreateBeenInLego({
          idCheck: getDoneRequestsByEntityIdReq.entityId,
        });
      let fromVal = getDoneRequestsByEntityIdReq.from;
      let toVal = getDoneRequestsByEntityIdReq.to;

      if (!doesCreateBeenInLego.isItCreateInLego) {
        const tempVar = getDoneRequestsByEntityIdReq.from;
        fromVal = tempVar !== 1 ? tempVar - 1 : tempVar;
        const tempVar2 = getDoneRequestsByEntityIdReq.to;
        toVal = tempVar2 !== 1 ? tempVar2 - 1 : tempVar2;
      }

      const requestsArr: RequestArray =
        await this.requestService.getEventsByEntityId({
          entityId: getDoneRequestsByEntityIdReq.entityId,
          from: fromVal,
          to: toVal,
        });

      //נוסיף תנאי של 1-1
      // let requestsArr: RequestArray = {requests:[],totalCount:0};
      // כל עוד אנחנו במצב שזה גם לא נוצר בלגו וגם שפרום והטו 1 אז תאפס את הפונקציה
      if (
        !doesCreateBeenInLego.isItCreateInLego &&
        getDoneRequestsByEntityIdReq.to === 1 &&
        getDoneRequestsByEntityIdReq.from === 1
      ) {
        requestsArr.requests = [];
      }

      const eventArr: EventArray = {
        events: [],
        totalCount: requestsArr.totalCount,
        till: doesCreateBeenInLego.isItCreateInLego
          ? getDoneRequestsByEntityIdReq.to
          : getDoneRequestsByEntityIdReq.to - 1,
      };

      if (requestsArr?.totalCount === 0) {
        if (
          getDoneRequestsByEntityIdReq.from === 1 &&
          !doesCreateBeenInLego.isItCreateInLego
        ) {
          eventArr.totalCount += 1;
          eventArr.till = 1;
          const temporaryEvent: Event = {
            message: "",
            date: new Date().getTime(),
          };
          try {
            const tempEntity: Entity = await KartoffelService.getEntityById({
              id: getDoneRequestsByEntityIdReq.entityId,
            });
            temporaryEvent.message = `  ${tempEntity?.createdAt.toLocaleString()} בתאריך ${
              tempEntity?.displayName
            } בקשת "יצירת תפקיד" קרתה, שם התפקיד - `;
            eventArr.events.push(temporaryEvent);
          } catch (error) {
            eventArr.totalCount = 0;
            console.log(error, "faild to get Kartoffel entityId");
          }
        }
        return eventArr;
      }

      if (!doesCreateBeenInLego.isItCreateInLego) {
        eventArr.totalCount += 1; //////////////////////////////////////////////////////////////from =1
        //יכול לקרות מצב שיש פחות בקשות ממה שהפגיניישן רוצה ואז יקרה מצב שזה יפתח את האיבנטים בשני דפים שונים (צריך לבדוק מה עושים במצב כזה) זה קורה שיש מעט מאוד בקשותת
        if (getDoneRequestsByEntityIdReq.from === 1) {
          const temporaryEvent: Event = {
            message: "",
            date: new Date().getTime(),
          };
          const tempEntity: Entity = await KartoffelService.getEntityById({
            id: getDoneRequestsByEntityIdReq.entityId,
          });
          temporaryEvent.message = `  ${tempEntity?.createdAt.toLocaleString()} בתאריך ${
            tempEntity?.displayName
          } בקשת "יצירת תפקיד" קרתה, שם התפקיד - `;
          eventArr.events.push(temporaryEvent);
        }
      }

      let numberOfRequest = requestsArr.requests.length;

      for (let i = 0; i < numberOfRequest; i++) {
        const tempEvent: Event = { message: "", date: new Date().getTime() };
        const tempRequest: Request = requestsArr.requests[i];

        const typeOfTheRequest =
          typeof tempRequest.type === typeof ""
            ? requestTypeFromJSON(tempRequest.type)
            : tempRequest.type;
        //צריך לבדוק איך להחזיר את הזמנים
        const tempDate = tempRequest.updatedAt.toLocaleString();

        switch (typeOfTheRequest) {
          case requestTypeFromJSON(RequestType.CREATE_ENTITY):
            tempEvent.message = `  ${tempDate} בתאריך ${tempRequest?.kartoffelParams?.name} בקשת "יצירת אדם חדש במערכת" קרתה עבור `;
            break;
          case requestTypeFromJSON(RequestType.ADD_APPROVER):
            tempEvent.message = `  ${tempDate} בתאריך ${tempRequest?.kartoffelParams?.name} בקשת "הוספת גורם מאשר" קרתה עבור `;
            break;
          case requestTypeFromJSON(RequestType.EDIT_ENTITY):
            tempEvent.message = ` ${tempDate} בתאריך ${tempRequest?.kartoffelParams?.name} בקשת "שינוי האדם שמחזיר בתפקיד" קרתה עבור `;
            break;
          case requestTypeFromJSON(RequestType.ASSIGN_ROLE_TO_ENTITY):
            tempEvent.message = `${tempDate} בתאריך ${tempRequest?.kartoffelParams?.name} בקשת "שיוך אדם לתפקיד" קרתה עבור `;
            break;

          default:
        }
        eventArr.events.push(tempEvent);
      }
      // eventArr.events.reverse();
      if (!doesCreateBeenInLego.isItCreateInLego) {
        eventArr.till += 1;
      }
      return eventArr as EventArray;
    } catch (error) {
      throw error;
    }
  }

  async olddddgetEventsByEntityId(
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
        // till: getDoneRequestsByEntityIdReq.to,
      };
      let tillTemp = getDoneRequestsByEntityIdReq.to;
      //צריך לעשות בקשה שמזחריה אם הבקשה ראשונה הייתה בקשה מסוג יצירת תפקיד (כלומר אם זה קרה בלגו או לא) אם לא נוסיף אחד
      const createdInLego: BoolCheck =
        await this.requestService.createdInLegoCheck({
          idCheck: getDoneRequestsByEntityIdReq.entityId,
        });

      if (requestsArr.requests.length === 0) {
        if (
          getDoneRequestsByEntityIdReq.from === 1 &&
          !createdInLego.createdInLego
        ) {
          eventArr.totalCount += 1;
          const temporaryEvent: Event = {
            message: "",
            date: new Date().getTime(),
          };
          const tempEntity: Entity = await KartoffelService.getEntityById({
            id: getDoneRequestsByEntityIdReq.entityId,
          });
          temporaryEvent.message = `  ${tempEntity?.createdAt.toLocaleString()} בתאריך ${
            tempEntity?.displayName
          } בקשת "יצירת תפקיד" קרתה, שם התפקיד - `;
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
      if (!createdInLego.createdInLego) {
        eventArr.totalCount += 1;
        //יכול לקרות מצב שיש פחות בקשות ממה שהפגיניישן רוצה ואז יקרה מצב שזה יפתח את האיבנטים בשני דפים שונים (צריך לבדוק מה עושים במצב כזה) זה קורה שיש מעט מאוד בקשותת
        if (getDoneRequestsByEntityIdReq.from === 1) {
          tillTemp -= 1;
          const temporaryEvent: Event = {
            message: "",
            date: new Date().getTime(),
          };
          const tempEntity: Entity = await KartoffelService.getEntityById({
            id: getDoneRequestsByEntityIdReq.entityId,
          });
          temporaryEvent.message = `  ${tempEntity?.createdAt.toLocaleString()} בתאריך ${
            tempEntity?.displayName
          } בקשת "יצירת תפקיד" קרתה, שם התפקיד - `;
          eventArr.events.push(temporaryEvent);
        }
      }
      // const rows: CreateRoleRow[] = requestsUnderBulk.requests.map(
      // const numberOfRequest = requestsArr.totalCount;
      const numberOfRequest = tillTemp - getDoneRequestsByEntityIdReq.from + 1;
      for (let i = 0; i++; i < numberOfRequest) {
        const tempEvent: Event = { message: "", date: new Date().getTime() };
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
      //צריך לעשות בקשה שמזחריה אם הבקשה ראשונה הייתה בקשה מסוג יצירת תפקיד (כלומר אם זה קרה בלגו או לא) אם לא נוסיף אחד
      // const doesCreateBeenInLego : BoolCheck = await this.requestService.wasCreateBeenInLego({
      //   idCheck:getDoneRequestsByEntityIdReq.entityId,
      // });
      let fromVal = getDoneRequestsByEntityIdReq.from;
      let toVal = getDoneRequestsByEntityIdReq.to;

      // if(!doesCreateBeenInLego.isItCreateInLego) {
      //   const tempVar = getDoneRequestsByEntityIdReq.from;
      //   fromVal = (tempVar !== 1 ? tempVar-1 : tempVar);
      //   const tempVar2 = getDoneRequestsByEntityIdReq.to;
      //   toVal = (tempVar2 !== 1 ? tempVar2-1 : tempVar2);
      // }

      const requestsArr: RequestArray =
        await this.requestService.getEventsByEntityId({
          entityId: getDoneRequestsByEntityIdReq.entityId,
          from: fromVal,
          to: toVal,
        });

      //נוסיף תנאי של 1-1
      // let requestsArr: RequestArray = {requests:[],totalCount:0};
      // כל עוד אנחנו במצב שזה גם לא נוצר בלגו וגם שפרום והטו 1 אז תאפס את הפונקציה
      // if (((!doesCreateBeenInLego.isItCreateInLego) && (getDoneRequestsByEntityIdReq.to === 1) && (getDoneRequestsByEntityIdReq.from === 1))) {
      //   requestsArr.requests = [];
      // }

      const eventArr: EventArray = {
        events: [],
        totalCount: requestsArr.totalCount,
        till: getDoneRequestsByEntityIdReq.to,
      };

      if (requestsArr?.totalCount === 0) {
        // if ((getDoneRequestsByEntityIdReq.from === 1)&&(!doesCreateBeenInLego.isItCreateInLego)) {
        //   eventArr.totalCount += 1;
        //   eventArr.till = 1;
        //   const temporaryEvent: Event = { message: '', date: new Date().getTime() };
        //   try {
        //   const tempEntity : Entity = await KartoffelService.getEntityById({id:getDoneRequestsByEntityIdReq.entityId});
        //   temporaryEvent.message = `  ${tempEntity?.createdAt.toLocaleString()} בתאריך ${tempEntity?.displayName} בקשת "יצירת תפקיד" קרתה, שם התפקיד - `;
        //   eventArr.events.push(temporaryEvent);
        //   } catch (error) {
        //     eventArr.totalCount = 0;
        //     console.log(error, 'faild to get Kartoffel entityId');
        //   }
        // }
        return eventArr;
      }

      // if (
      //   !doesCreateBeenInLego.isItCreateInLego
      // ) {
      //   eventArr.totalCount += 1; //////////////////////////////////////////////////////////////from =1
      //   //יכול לקרות מצב שיש פחות בקשות ממה שהפגיניישן רוצה ואז יקרה מצב שזה יפתח את האיבנטים בשני דפים שונים (צריך לבדוק מה עושים במצב כזה) זה קורה שיש מעט מאוד בקשותת
      //   if (getDoneRequestsByEntityIdReq.from === 1) {

      //     const temporaryEvent: Event = { message: '', date: new Date().getTime() };
      //     const tempEntity : Entity = await KartoffelService.getEntityById({id:getDoneRequestsByEntityIdReq.entityId});
      //     temporaryEvent.message = `  ${tempEntity?.createdAt.toLocaleString()} בתאריך ${tempEntity?.displayName} בקשת "יצירת תפקיד" קרתה, שם התפקיד - `;
      //     eventArr.events.push(temporaryEvent);
      //   }
      // }

      let numberOfRequest = requestsArr.requests.length;

      for (let i = 0; i < numberOfRequest; i++) {
        const tempEvent: Event = { message: "", date: new Date().getTime() };
        const tempRequest: Request = requestsArr.requests[i];

        const typeOfTheRequest =
          typeof tempRequest.type === typeof ""
            ? requestTypeFromJSON(tempRequest.type)
            : tempRequest.type;
        //צריך לבדוק איך להחזיר את הזמנים
        const tempDate = tempRequest.updatedAt.toLocaleString();

        switch (typeOfTheRequest) {
          case requestTypeFromJSON(RequestType.CREATE_ENTITY):
            tempEvent.message = `  ${tempDate} בתאריך ${tempRequest?.kartoffelParams?.name} בקשת "יצירת אדם חדש במערכת" קרתה עבור `;
            break;
          case requestTypeFromJSON(RequestType.ADD_APPROVER):
            tempEvent.message = `  ${tempDate} בתאריך ${tempRequest?.kartoffelParams?.name} בקשת "הוספת גורם מאשר" קרתה עבור `;
            break;
          case requestTypeFromJSON(RequestType.EDIT_ENTITY):
            tempEvent.message = ` ${tempDate} בתאריך ${tempRequest?.kartoffelParams?.name} בקשת "שינוי האדם שמחזיר בתפקיד" קרתה עבור `;
            break;
          case requestTypeFromJSON(RequestType.ASSIGN_ROLE_TO_ENTITY):
            tempEvent.message = `${tempDate} בתאריך ${tempRequest?.kartoffelParams?.name} בקשת "שיוך אדם לתפקיד" קרתה עבור `;
            break;

          default:
            tempEvent.message = `${tempDate} בתאריך ${tempRequest?.type} בקשת מסוג ${tempRequest?.kartoffelParams?.name} "סוג בקשה שעוד לא נכתבה הודעת איבנט לגביו שאל את שלו" קרתה עבור `;
            break;
        }
        eventArr.events.push(tempEvent);
      }
      // eventArr.events.reverse();
      // if (!doesCreateBeenInLego.isItCreateInLego) {
      //   eventArr.till+=1;
      // }
      return eventArr as EventArray;
    } catch (error) {
      throw error;
    }
  }

  async olddddgetEventsBySubmittedEntityId(
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
        // till: getDoneRequestsByEntityIdReq.to,
      };
      // let tillTemp = getDoneRequestsByEntityIdReq.to;
      //צריך לעשות בקשה שמזחריה אם הבקשה ראשונה הייתה בקשה מסוג יצירת תפקיד (כלומר אם זה קרה בלגו או לא) אם לא נוסיף אחד
      // const createdInLego = this.requestService.createdInLegoCheck({
      //   idCheck:getDoneRequestsByEntityIdReq.entityId,
      // });

      if (requestsArr.requests.length === 0) {
        // if ((getDoneRequestsByEntityIdReq.from === 1)&&(!createdInLego.createdInLego)) {
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
        !createdInLego.createdInLego
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
      const numberOfRequest =
        getDoneRequestsByEntityIdReq.to - getDoneRequestsByEntityIdReq.from + 1;
      for (let i = 0; i++; i < numberOfRequest) {
        const tempEvent: Event = { message: "", date: new Date().getTime() };
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
