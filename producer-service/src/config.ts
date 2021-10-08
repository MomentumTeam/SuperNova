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

export const shmuelAudience = process.env.PS_SHMUEL_AUDIENCE || 'shmuel';
export const spikeServiceUrl = process.env.PS_SS_URL || '0.0.0.0:8080';
export const spikeTokenRefreshInHours = process.env.PS_SPIKE_TOKEN_REFRESH_HOURS
  ? parseInt(process.env.PS_SPIKE_TOKEN_REFRESH_HOURS)
  : 24;
export const oldDomain = process.env.PS_OLD_DOMAIN || 'oldDomain';
export const newDomain = process.env.PS_NEW_DOMAIN || 'newDomain';

export const shmuelRequestTypes: any = {
  CREATE_OG: 'CREATE_OG',
  CREATE_ROLE: 'CREATE_ROLE',
  ASSIGN_ROLE_TO_ENTITY: 'ASSIGN_ROLE_TO_ENTITY',
  CREATE_ENTITY: 'CREATE_ENTITY',
  RENAME_OG: 'RENAME_OG',
  RENAME_ROLE: 'RENAME_ROLE',
  EDIT_ENTITY: 'EDIT_ENTITY',
  DELETE_OG: 'DELETE_OG',
  DELETE_ENTITY: 'DELETE_ENTITY',
  DISCONNECT_ROLE: 'DISCONNECT_ROLE',
  CHANGE_ROLE_HIERARCHY: 'CHANGE_ROLE_HIERARCHY',
};

export const logPath = process.env.PS_LOG_PATH || './logs';
export const storeLogs = process.env.GLOBAL_STORE_LOGS
  ? process.env.GLOBAL_STORE_LOGS === 'true'
  : false;
