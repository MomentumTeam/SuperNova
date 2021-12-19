import { requestTypeToHebrew } from '../config';
import {
  CreateCustomNotificationReq,
  NotificationType,
  notificationTypeFromJSON,
  OwnerType,
} from '../interfaces/protoc/proto/notificationService';
import {
  Request,
  requestTypeFromJSON,
  requestTypeToJSON,
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
      message = `התקבלה בקשה חדשה מספר <b>${request.serialNumber}</b> לאישורך מאת <b>${request.submittedBy?.displayName}</b> עבור <b>${requestTypeToHebrew[requestTypeStr]}</b>.`;

      if (request.commanders) {
        const addNotification: CreateCustomNotificationReq[] =
          request.commanders.map((commander) => {
            return {
              type: type,
              ownerId: commander.id,
              ownerType: OwnerType.COMMANDER,
              requestId: request.id,
              message: message,
              reason: reason,
            };
          });
        notifications = [...addNotification];
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
