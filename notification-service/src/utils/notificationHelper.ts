import { requestTypeToHebrew } from '../config';
import {
  CreateCustomNotificationReq,
  NotificationType,
  notificationTypeFromJSON,
  notificationTypeToJSON,
  OwnerType,
} from '../interfaces/protoc/proto/notificationService';
import {
  Request,
  requestTypeFromJSON,
  requestTypeToJSON,
} from '../interfaces/protoc/proto/requestService';

export function cleanUnderscoreFields(document: any): void {
  let keys: any = Object.keys(document);

  for (let key of keys) {
    if (key.startsWith('_') && key !== '_id') {
      delete document[key];
    }
  }
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
      message = `התקבלה בקשה חדשה לאישורך מאת ${request.submittedBy?.displayName} עבור ${requestTypeToHebrew[requestTypeStr]}.`;
      if (request.commanders) {
        for (let commander of request.commanders) {
          notifications.push({
            type: type,
            ownerId: commander.id,
            ownerType: OwnerType.COMMANDER,
            requestId: request.id,
            message: message,
            reason: reason,
          });
        }
      }
      return notifications;
    }

    let commanderName = request.commanderDecision?.approver?.displayName;
    if (!commanderName) {
      commanderName = 'גורם מאשר ראשוני';
    }
    if (type === NotificationType.REQUEST_APPROVED_1) {
      message = `בקשתך ל${requestTypeToHebrew[requestTypeStr]} מספר ${request.serialNumber} אושרה על ידי ${commanderName} והועברה לטיפול יחב\"ם.`;
    } else if (type === NotificationType.REQUEST_DECLINED_1) {
      message = `בקשתך ל${requestTypeToHebrew[requestTypeStr]} מספר ${request.serialNumber} נדחתה על ידי ${commanderName}.`;
      reason = request.commanderDecision?.reason
        ? request.commanderDecision?.reason
        : '';
    } else if (type === NotificationType.REQUEST_APPROVED_2) {
      message = `בקשתך ל${requestTypeToHebrew[requestTypeStr]} מספר ${request.serialNumber} אושרה על ידי ${commanderName} ועל ידי יחב\"ם.`;
      if (request.needSuperSecurityDecision) {
        message = message + 'הועברה לטיפול בטח"ם.';
      }
    } else if (type === NotificationType.REQUEST_DECLINED_2) {
      message = `בקשתך ל${requestTypeToHebrew[requestTypeStr]} מספר ${request.serialNumber} נדחתה על ידי יחב\"ם.`;
      reason = request.securityDecision?.reason
        ? request.securityDecision?.reason
        : '';
    } else if (type === NotificationType.REQUEST_APPROVED_3) {
      message = `בקשתך ל${requestTypeToHebrew[requestTypeStr]} מספר ${request.serialNumber} אושרה על ידי ${commanderName} ועל ידי יחב\"ם ובטח\"ם.`;
    } else if (type === NotificationType.REQUEST_DECLINED_3) {
      message = `בקשתך ל${requestTypeToHebrew[requestTypeStr]} מספר ${request.serialNumber} נדחתה על ידי בטח\"ם.`;
      reason = request.superSecurityDecision?.reason
        ? request.superSecurityDecision?.reason
        : '';
    } else if (type === NotificationType.REQUEST_IN_PROGRESS) {
      message = `בקשתך ל${requestTypeToHebrew[requestTypeStr]} מספר ${request.serialNumber} אושרה על ידי כל הגורמים המאשרים ותבוצע בזמן הקרוב.`;
    } else if (type === NotificationType.REQUEST_DECLINED) {
      message = `בקשתך ל${requestTypeToHebrew[requestTypeStr]} מספר ${request.serialNumber} נדחתה ולכן לא תבוצע.`;
    } else if (type === NotificationType.KARTOFFEL_STAGE_DONE) {
      message = `בקשתך ל${requestTypeToHebrew[requestTypeStr]} מספר ${request.serialNumber} עברה את שלב שירות המשתמשים בהצלחה.`;
    } else if (type === NotificationType.KARTOFFEL_STAGE_FAILED) {
      message = `בקשתך ל${requestTypeToHebrew[requestTypeStr]} מספר ${request.serialNumber} נכשלה בשלב שירות המשתמשים.`;
      reason = request.kartoffelStatus?.message
        ? request.kartoffelStatus?.message
        : '';
    } else if (type === NotificationType.AD_STAGE_DONE) {
      message = `בקשתך ל${requestTypeToHebrew[requestTypeStr]} מספר ${request.serialNumber} עברה את שלב AD בהצלחה.`;
    } else if (type === NotificationType.AD_STAGE_FAILED) {
      message = `בקשתך ל${requestTypeToHebrew[requestTypeStr]} מספר ${request.serialNumber} נכשלה בשלב AD.`;
      reason = request.adStatus?.message ? request.adStatus?.message : '';
    } else if (type === NotificationType.REQUEST_DONE) {
      message = `בקשתך ל${requestTypeToHebrew[requestTypeStr]} מספר ${request.serialNumber} בוצעה בהצלחה.`;
    } else {
      message = `בקשתך ל${requestTypeToHebrew[requestTypeStr]} מספר ${request.serialNumber} נכשלה.`;
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
