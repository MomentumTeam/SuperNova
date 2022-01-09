export const host = process.env.PS_HOST || '0.0.0.0';
export const port =
  process.env.NODE_ENV === 'production'
    ? '8080'
    : process.env.PS_PORT || '8083';
export const queueApi =
  process.env.PS_QUEUE_API_URL || 'https://www.google.com';
export const requestServiceUrl = process.env.PS_RS_URL || '0.0.0.0:8081';
export const devMode = process.env.PS_DEV_MODE
  ? process.env.PS_DEV_MODE === 'true'
  : true;

export const upnSuffix = process.env.PS_AD_UPN_SUFFIX || 'gmail.com';

export const shmuelAudience = process.env.PS_SHMUEL_AUDIENCE || 'shmuel';
export const spikeServiceUrl = process.env.PS_SS_URL || '0.0.0.0:8080';
export const spikeTokenRefreshInHours = process.env.PS_SPIKE_TOKEN_REFRESH_HOURS
  ? parseInt(process.env.PS_SPIKE_TOKEN_REFRESH_HOURS)
  : 24;
export const oldDomain = process.env.PS_OLD_DOMAIN || 'ADHK';
export const newDomain = process.env.PS_NEW_DOMAIN || 'newDomain';
export const defaultSource = process.env.PS_DEFAULT_SOURCE || 'sf_name';

export const shmuelRequestTypes: any = {
  CREATE_OG: 'CreateOU',
  CREATE_ROLE: 'CreateRole',
  ASSIGN_ROLE_TO_ENTITY: 'ConnectNewRole',
  RENAME_OG: 'EditOU',
  RENAME_ROLE: 'EditRoleName',
  EDIT_ENTITY: 'EditSpecialRole',
  DISCONNECT_ROLE: 'DisconnectRole',
  CHANGE_ROLE_HIERARCHY: 'ChangeRole',
  DELETE_ROLE: 'PurgeRole',
};

export const adAllowedSubmitters = process.env.PS_AD_ALLOWED_SUBMITTERS
  ? process.env.PS_AD_ALLOWED_SUBMITTERS.split(',')
  : [];
export const restrictADAccess = process.env.PS_RESTRICT_AD_ACCESS
  ? process.env.PS_RESTRICT_AD_ACCESS === 'true'
  : false;

export const grpcPoolSize = process.env.GLOBAL_GRPC_POOL_SIZE
  ? parseInt(process.env.GLOBAL_GRPC_POOL_SIZE)
  : 2;

export const logPath = process.env.PS_LOG_PATH
  ? `${process.env.PS_LOG_PATH}/producer-service`
  : './logs/producer-service';
export const storeLogs = process.env.GLOBAL_STORE_LOGS
  ? process.env.GLOBAL_STORE_LOGS === 'true'
  : false;
