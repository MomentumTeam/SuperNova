import {
  NotificationType,
  notificationTypeToJSON,
} from './interfaces/protoc/proto/notificationService';
import {
  RequestType,
  requestTypeToJSON,
} from './interfaces/protoc/proto/requestService';

export const host = process.env.NS_HOST || '0.0.0.0';
export const port =
  process.env.NODE_ENV === 'production'
    ? '8080'
    : process.env.NS_PORT || '8084';

export const mongoUrl =
  process.env.NS_MONGO_URL || 'mongodb://127.0.0.1:27017/supernova';

export const requestTypeToHebrew = {
  [requestTypeToJSON(RequestType.CREATE_OG)]: 'יצירת היררכיה',
  [requestTypeToJSON(RequestType.CREATE_ROLE)]: 'יצירת תפקיד',
  [requestTypeToJSON(RequestType.ASSIGN_ROLE_TO_ENTITY)]: 'הוספת משתמש',
  [requestTypeToJSON(RequestType.CREATE_ENTITY)]: 'יצירת ישות',
  [requestTypeToJSON(RequestType.RENAME_OG)]: 'שיוי היררכיה',
  [requestTypeToJSON(RequestType.RENAME_ROLE)]: 'שינוי תפקיד',
  [requestTypeToJSON(RequestType.EDIT_ENTITY)]: 'עריכת ישות',
  [requestTypeToJSON(RequestType.DELETE_OG)]: 'מחיקת היררכיה',
  [requestTypeToJSON(RequestType.DELETE_ROLE)]: 'מחיקת תפקיד',
  [requestTypeToJSON(RequestType.DISCONNECT_ROLE)]: 'ניתוק תפקיד',
  [requestTypeToJSON(RequestType.ADD_APPROVER)]: 'הוספת גורם מאשר',
};
