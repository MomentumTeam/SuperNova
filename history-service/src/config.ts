export const host = process.env.HS_HOST || '0.0.0.0';
export const port =
  process.env.NODE_ENV === 'production'
    ? '8080'
    : process.env.HS_PORT || '8089';
export const maxQueueRetries = process.env.RS_MAX_QUEUE_RETRIES
  ? parseInt(process.env.RS_MAX_QUEUE_RETRIES)
  : 5;
export const kartoffelServiceUrl = process.env.HS_KS_URL || '0.0.0.0:8082';
export const requestServiceUrl = process.env.HS_RS_URL || '0.0.0.0:8081';

export const logPath = process.env.RS_LOG_PATH
  ? `${process.env.RS_LOG_PATH}/history-service`
  : './logs/history-service';
export const storeLogs = process.env.GLOBAL_STORE_LOGS
  ? process.env.GLOBAL_STORE_LOGS === 'true'
  : false;

export const grpcPoolSize = process.env.GLOBAL_GRPC_POOL_SIZE
  ? parseInt(process.env.GLOBAL_GRPC_POOL_SIZE)
  : 2;
