export const approverServiceUrl = process.env.WLS_APS_URL || '0.0.0.0:8085';
export const hour = process.env.WLS_HOUR || `0`; //   0-23
export const minute = process.env.WLS_MINUTE || `0`; //  0-59
export const cronJob = process.env.WLS_CRON_JOB
  ? process.env.WLS_CRON_JOB === 'true'
    ? true
    : false
  : true;

export const logPath = process.env.WLS_LOG_PATH
  ? `${process.env.WLS_LOG_PATH}/whileListSync-script`
  : './logs/whileListSync-script';
export const storeLogs = process.env.GLOBAL_STORE_LOGS
  ? process.env.GLOBAL_STORE_LOGS === 'true'
  : false;
