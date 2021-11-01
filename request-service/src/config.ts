export const host = process.env.RS_HOST || '0.0.0.0';
export const port =
  process.env.NODE_ENV === 'production'
    ? '8080'
    : process.env.RS_PORT || '8081';

export const mongoUrl =
  process.env.RS_MONGO_URL || 'mongodb://127.0.0.1:27017/supernova';
export const maxQueueRetries = process.env.RS_MAX_QUEUE_RETRIES
  ? parseInt(process.env.RS_MAX_QUEUE_RETRIES)
  : 5;
export const notificationServiceUrl = process.env.RS_NS_URL || '0.0.0.0:8084';
export const teaServiceUrl = process.env.RS_TS_URL || '0.0.0.0:8086';
export const mailServiceUrl = process.env.RS_MS_URL || '0.0.0.0:8088';
export const mongoConnectionRetries =
  process.env.MONGO_RECONNECT_ATTEMPTS || '5';
export const mongoReconnectTimeout =
  process.env.MONGO_RECONNECT_TIMEOUT || '2000';

export const logPath = process.env.RS_LOG_PATH
  ? `${process.env.RS_LOG_PATH}/request-service`
  : './logs/request-service';
export const storeLogs = process.env.GLOBAL_STORE_LOGS
  ? process.env.GLOBAL_STORE_LOGS === 'true'
  : false;

export const searchFields = [
  'submittedBy.displayName',
  'submittedBy.personalNumber',
  'submittedBy.identityCard',
  'commanders.displayName',
  'commanders.personalNumber',
  'commanders.identityCard',
  'securityApprovers.displayName',
  'securityApprovers.personalNumber',
  'securityApprovers.identityCard',
  'superSecurityApprovers.displayName',
  'superSecurityApprovers.personalNumber',
  'superSecurityApprovers.identityCard',
  // 'serialNumber',
];
