export const requestServiceUrl = process.env.EXS_RS_URL || '0.0.0.0:8081';
export const producerServiceUrl = process.env.EXS_PS_URL || '0.0.0.0:8083';
export const approverServiceUrl = process.env.EXS_APS_URL || '0.0.0.0:8085';
export const everyHour = process.env.EXS_EVERY_HOUR || '1';
export const cronJob = process.env.EXS_CRON_JOB
  ? process.env.EXS_CRON_JOB === 'true'
    ? true
    : false
  : true;
