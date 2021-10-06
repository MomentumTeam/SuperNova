export const approverServiceUrl = process.env.WLS_APS_URL || '0.0.0.0:8085';
export const hour = process.env.WLS_HOUR || `0`; //   0-23
export const minute = process.env.WLS_MINUTE || `0`; //  0-59
export const cronJob = process.env.WLS_CRON_JOB
  ? process.env.WLS_CRON_JOB === 'true'
    ? true
    : false
  : true;