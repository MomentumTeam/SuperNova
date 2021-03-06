import { requestTypeToHebrew } from '../config';
import {
  CreateCustomNotificationReq,
  NotificationType,
  notificationTypeFromJSON,
  OwnerType,
} from '../interfaces/protoc/proto/notificationService';
import {
  Request,
  RequestType,
  requestTypeFromJSON,
  requestTypeToJSON,
  StageStatus,
  stageStatusFromJSON,
} from '../interfaces/protoc/proto/requestService';

export function cleanUnderscoreFields(document: any): void {
  Object.keys(document).map((key) => {
    if (key.startsWith('_') && key !== '_id') delete document[key];
  });
}

export function turnObjectIdsToStrings(document: any) {
  if (document._id) {
    document.id = document._id.toString();
  }
  if (document.requestId) {
    document.requestId = document.requestId.toString();
  }
  if (document.ownerId) {
    document.ownerId = document.ownerId.toString();
  }
  cleanUnderscoreFields(document);
}

export function generateNotifications(
  type: any,
  request: Request
): CreateCustomNotificationReq[] {
  try {
    type = typeof type == typeof '' ? notificationTypeFromJSON(type) : type;
    let notifications: CreateCustomNotificationReq[] = [];
    let message: string = '';
    let reason: string = '';
    const requestType: any =
      typeof request.type == typeof ''
        ? requestTypeFromJSON(request.type)
        : request.type;
    const requestTypeStr = requestTypeToJSON(requestType);

    if (type === NotificationType.REQUEST_SUBMITTED) {
      const messageForCommander = `התקבלה בקשה חדשה מספר <b>${request.serialNumber}</b> לאישורך מאת <b>${request.submittedBy?.displayName}</b> עבור <b>${requestTypeToHebrew[requestTypeStr]}</b>.`;
      const messageForSubmitter = `בקשתך ל<b>${requestTypeToHebrew[requestTypeStr]}</b> מספר <b>${request.serialNumber}</b> התקבלה במערכת.`;
      let submitterId = '';
      if (request.submittedBy && request.submittedBy.id) {
        submitterId = request.submittedBy.id;
        notifications.push({
          type: type,
          ownerId: submitterId,
          ownerType: OwnerType.SUBMITTER,
          requestId: request.id,
          message: messageForSubmitter,
          reason: reason,
        });
      }
      if (request.commanders) {
        request.commanders.forEach((commander) => {
          if (commander.id !== submitterId) {
            notifications.push({
              type: type,
              ownerId: commander.id,
              ownerType: OwnerType.COMMANDER,
              requestId: request.id,
              message: messageForCommander,
              reason: reason,
            });
          }
        });
      }
      return notifications;
    }

    let commanderName = request.commanderDecision?.approver?.displayName;
    if (!commanderName) {
      commanderName = 'גורם מאשר ראשוני';
    }
    if (type === NotificationType.REQUEST_APPROVED_1) {
      message = `בקשתך ל<b>${requestTypeToHebrew[requestTypeStr]}</b> מספר <b>${request.serialNumber}</b> אושרה על ידי <b>${commanderName}</b> והועברה לטיפול יחב\"ם.`;
    } else if (type === NotificationType.REQUEST_DECLINED_1) {
      message = `בקשתך ל<b>${requestTypeToHebrew[requestTypeStr]}</b> מספר <b>${request.serialNumber}</b> נדחתה על ידי <b>${commanderName}</b>.`;
      reason = request.commanderDecision?.reason
        ? request.commanderDecision?.reason
        : '';
    } else if (type === NotificationType.REQUEST_APPROVED_2) {
      message = `בקשתך ל<b>${requestTypeToHebrew[requestTypeStr]}</b> מספר <b>${request.serialNumber}</b> אושרה על ידי <b>${commanderName}</b> ועל ידי יחב\"ם.`;
      if (request.needSuperSecurityDecision) {
        message = message + 'הועברה לטיפול בטח"ם.';
      }
    } else if (type === NotificationType.REQUEST_DECLINED_2) {
      message = `בקשתך ל<b>${requestTypeToHebrew[requestTypeStr]}</b> מספר <b>${request.serialNumber}</b> נדחתה על ידי יחב\"ם.`;
      reason = request.securityDecision?.reason
        ? request.securityDecision?.reason
        : '';
    } else if (type === NotificationType.REQUEST_APPROVED_3) {
      message = `בקשתך ל<b>${requestTypeToHebrew[requestTypeStr]}</b> מספר <b>${request.serialNumber}</b> אושרה על ידי <b>${commanderName}</b> ועל ידי יחב\"ם ובטח\"ם.`;
    } else if (type === NotificationType.REQUEST_DECLINED_3) {
      message = `בקשתך ל<b>${requestTypeToHebrew[requestTypeStr]}</b> מספר <b>${request.serialNumber}</b> נדחתה על ידי בטח\"ם.`;
      reason = request.superSecurityDecision?.reason
        ? request.superSecurityDecision?.reason
        : '';
    } else if (type === NotificationType.REQUEST_IN_PROGRESS) {
      message = `בקשתך ל<b>${requestTypeToHebrew[requestTypeStr]}</b> מספר <b>${request.serialNumber}</b> אושרה על ידי כל הגורמים המאשרים ותבוצע בזמן הקרוב.`;
    } else if (type === NotificationType.REQUEST_DECLINED) {
      message = `בקשתך ל<b>${requestTypeToHebrew[requestTypeStr]}</b> מספר <b>${request.serialNumber}</b> נדחתה ולכן לא תבוצע.`;
    } else if (type === NotificationType.KARTOFFEL_STAGE_DONE) {
      message = `בקשתך ל<b>${requestTypeToHebrew[requestTypeStr]}</b> מספר <b>${request.serialNumber}</b> עברה את שלב שירות המשתמשים בהצלחה.`;
    } else if (type === NotificationType.KARTOFFEL_STAGE_FAILED) {
      message = `בקשתך ל<b>${requestTypeToHebrew[requestTypeStr]}</b> מספר <b>${request.serialNumber}</b> נכשלה בשלב שירות המשתמשים.`;
      reason = request.kartoffelStatus?.message
        ? request.kartoffelStatus?.message
        : '';
    } else if (type === NotificationType.AD_STAGE_DONE) {
      message = `בקשתך ל<b>${requestTypeToHebrew[requestTypeStr]}</b> מספר <b>${request.serialNumber}</b> עברה את שלב AD בהצלחה.`;
    } else if (type === NotificationType.AD_STAGE_FAILED) {
      message = `בקשתך ל<b>${requestTypeToHebrew[requestTypeStr]}</b> מספר <b>${request.serialNumber}</b> נכשלה בשלב AD.`;
      reason = request.adStatus?.message ? request.adStatus?.message : '';
    } else if (type === NotificationType.REQUEST_DONE) {
      message = `בקשתך ל<b>${requestTypeToHebrew[requestTypeStr]}</b> מספר <b>${request.serialNumber}</b> בוצעה בהצלחה.`;
    } else if (type === NotificationType.REQUEST_DELETED) {
      message = `בקשתך ל<b>${requestTypeToHebrew[requestTypeStr]}</b> מספר <b>${request.serialNumber}</b> נמחקה בהצלחה.`;
    } else {
      message = `בקשתך ל<b>${requestTypeToHebrew[requestTypeStr]}</b> מספר <b>${request.serialNumber}</b> נכשלה.`;
      if (requestType !== RequestType.ADD_APPROVER) {
        const adStageStatus =
          typeof request.adStatus?.status == typeof ''
            ? stageStatusFromJSON(request.adStatus?.status)
            : request.adStatus?.status;
        const kartoffelStageStatus =
          typeof request.kartoffelStatus?.status == typeof ''
            ? stageStatusFromJSON(request.kartoffelStatus?.status)
            : request.kartoffelStatus?.status;
        if (
          adStageStatus === StageStatus.STAGE_FAILED &&
          request.adStatus?.message &&
          request.adStatus?.message.length > 0
        ) {
          message =
            message + ` השגיאה שהתקבלה מתשתיות: ${request.adStatus?.message}.`;
        } else if (
          kartoffelStageStatus === StageStatus.STAGE_FAILED &&
          request.kartoffelStatus?.message &&
          request.kartoffelStatus?.message.length > 0
        ) {
          message =
            message +
            ` השגיאה שהתקבלה משירות המשתמשים: ${request.kartoffelStatus?.message}.`;
        }
      }
      //REQUEST_FAILED
    }

    if (request.submittedBy) {
      notifications.push({
        type: type,
        ownerId: request.submittedBy.id,
        ownerType: OwnerType.SUBMITTER,
        requestId: request.id,
        message: message,
        reason: reason,
      });
    }
    return notifications;
  } catch (error) {
    throw error;
  }
}
