import {
  RequestType,
  requestTypeToJSON,
} from './interfaces/protoc/proto/requestService';

export const host = process.env.MS_HOST || '0.0.0.0';
export const port =
  process.env.NODE_ENV === 'production'
    ? '8080'
    : process.env.MS_PORT || '8088';

export const logPath = process.env.MS_LOG_PATH
  ? `${process.env.MS_LOG_PATH}/mail-service`
  : './logs/mail-service';
export const storeLogs = process.env.GLOBAL_STORE_LOGS
  ? process.env.GLOBAL_STORE_LOGS === 'true'
  : false;

export const kartoffelServiceUrl = process.env.MS_KS_URL || '0.0.0.0:8082';

export const mailServerHost =
  process.env.MS_MAIL_SERVER_HOST || 'smtp-mail.outlook.com';
export const mailServerPort = process.env.MS_MAIL_SERVER_PORT
  ? parseInt(process.env.MS_MAIL_SERVER_PORT)
  : 587;
export const mailServerSecure = process.env.MS_MAIL_SERVER_SECURE
  ? process.env.MS_MAIL_SERVER_SECURE === 'true'
  : false;

export const fromAddress =
  process.env.MS_MAIL_ADDRESS || 'mayatest4321@outlook.com';
export const mailUser = process.env.MS_MAIL_USER || 'mayatest4321@outlook.com';
export const mailPassword = process.env.MS_MAIL_PASSWORD || 'testpass4321';

export const isTest = process.env.MS_IS_TEST
  ? process.env.MS_IS_TEST === 'true'
  : false;
export const emailsForTest = process.env.MS_EMAILS_FOR_TEST
  ? process.env.MS_EMAILS_FOR_TEST.split(',')
  : [];

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

export const legoAddress =
  process.env.MS_LEGO_ADDRESS || 'http://localhost:3000';
