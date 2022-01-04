export const requestServiceUrl = process.env.EXS_RS_URL || '0.0.0.0:8081';
export const producerServiceUrl = process.env.EXS_PS_URL || '0.0.0.0:8083';
export const approverServiceUrl = process.env.EXS_APS_URL || '0.0.0.0:8085';
export const minute = process.env.EXS_MINUTE || '5'; //  0-59
export const cronJob = process.env.EXS_CRON_JOB
  ? process.env.EXS_CRON_JOB === 'true'
    ? true
    : false
  : true;
export const rootId = process.env.EXS_ROOT_ID || '619e3193f235dc001846bb4f';

export const logPath = process.env.EXS_LOG_PATH
  ? `${process.env.EXS_LOG_PATH}/execution-script`
  : './logs/execution-script';
export const storeLogs = process.env.GLOBAL_STORE_LOGS
  ? process.env.GLOBAL_STORE_LOGS === 'true'
  : false;
