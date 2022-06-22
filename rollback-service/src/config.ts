export const requestServiceUrl = process.env.ROS_RS_URL || '0.0.0.0:8081';
export const kartoffelServiceUrl = process.env.ROS_KS_URL || '0.0.0.0:8082';
export const producerServiceUrl = process.env.ROS_PS_URL || '0.0.0.0:8083';
export const approverServiceUrl = process.env.ROS_APS_URL || '0.0.0.0:8085';

export const host = process.env.ROS_HOST || '0.0.0.0';
export const port =
  process.env.NODE_ENV === 'production'
    ? '8080'
    : process.env.ROS_PORT || '8090';
export const logPath = process.env.BS_LOG_PATH
  ? `${process.env.BS_LOG_PATH}/rollback-service`
  : './logs/rollback-service';

export const grpcPoolSize = process.env.GLOBAL_GRPC_POOL_SIZE
  ? parseInt(process.env.GLOBAL_GRPC_POOL_SIZE)
  : 2;

export const storeLogs = process.env.GLOBAL_STORE_LOGS
  ? process.env.GLOBAL_STORE_LOGS === 'true'
  : false;

export const soldier = process.env.ROS_SOLDIER || 'Soldier';
export const external = process.env.ROS_EXTERNAL || 'External';
export const civilian = process.env.ROS_CIVILIAN || 'Civilian';
