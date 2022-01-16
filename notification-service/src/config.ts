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
export const mongoConnectionRetries =
  process.env.MONGO_RECONNECT_ATTEMPTS || '5';
export const mongoReconnectTimeout =
  process.env.MONGO_RECONNECT_TIMEOUT || '2000';

export const requestTypeToHebrew = {
  [requestTypeToJSON(RequestType.CREATE_OG)]: 'יצירת היררכיה',
  [requestTypeToJSON(RequestType.CREATE_ROLE)]: 'יצירת תפקיד',
  [requestTypeToJSON(RequestType.ASSIGN_ROLE_TO_ENTITY)]: 'מעבר תפקיד',
  [requestTypeToJSON(RequestType.CREATE_ENTITY)]: 'יצירת משתמש מיוחד',
  [requestTypeToJSON(RequestType.RENAME_OG)]: 'שינוי שם היררכיה',
  [requestTypeToJSON(RequestType.RENAME_ROLE)]: 'עריכת תפקיד',
  [requestTypeToJSON(RequestType.EDIT_ENTITY)]: 'עריכת משתמש מיוחד',
  [requestTypeToJSON(RequestType.DELETE_OG)]: 'מחיקת היררכיה',
  [requestTypeToJSON(RequestType.DELETE_ROLE)]: 'מחיקת תפקיד',
  [requestTypeToJSON(RequestType.DISCONNECT_ROLE)]: 'ניתוק תפקיד',
  [requestTypeToJSON(RequestType.ADD_APPROVER)]: 'הוספת גורם מאשר',
  [requestTypeToJSON(RequestType.DELETE_ENTITY)]: 'מחיקת ישות',
  [requestTypeToJSON(RequestType.CREATE_ROLE_BULK)]: 'יצירה מרובה של תפקידים',
  [requestTypeToJSON(RequestType.CHANGE_ROLE_HIERARCHY)]: 'מעבר היררכיה לתפקיד',
  [requestTypeToJSON(RequestType.CHANGE_ROLE_HIERARCHY_BULK)]:
    'שינוי היררכיה מרובה',
};

export const logPath = process.env.NS_LOG_PATH
  ? `${process.env.NS_LOG_PATH}/notification-service`
  : './logs/notification-service';
export const storeLogs = process.env.GLOBAL_STORE_LOGS
  ? process.env.GLOBAL_STORE_LOGS === 'true'
  : false;
