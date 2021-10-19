export const host = process.env.TS_HOST || '0.0.0.0';
export const port =
  process.env.NODE_ENV === 'production'
    ? '8080'
    : process.env.TS_PORT || '8086';
export const mongoUrl =
  process.env.TS_MONGO_URL || 'mongodb://127.0.0.1:27017/supernova';
export const soldier = process.env.TS_SOLDIER || 'soldier';
export const reserved = process.env.TS_RESERVED || 'reserved';
export const civilian = process.env.TS_CIVILIAN || 'civilian';
export const goalUser = process.env.TS_GOAL_USER || 'goalUser';
export const kartoffelServiceUrl = process.env.TS_KS_URL || '0.0.0.0:8082';

export const needInit = process.env.TS_NEED_INIT
  ? process.env.TS_NEED_INIT === 'true'
  : true;
export const initEmptyArrays = process.env.TS_INIT_EMPTY_ARRAYS
  ? process.env.TS_INIT_EMPTY_ARRAYS === 'true'
  : true;

export const oldSuffix = process.env.TS_OLD_SUFFIX
  ? process.env.TS_OLD_SUFFIX
  : 'gmail.com';
export const newSuffix = process.env.TS_NEW_SUFFIX
  ? process.env.TS_NEW_SUFFIX
  : 'yahoo.com';
// export const oldDomainSuffixesArray
export const mongoConnectionRetries =
  process.env.MONGO_RECONNECT_ATTEMPTS || '5';
export const mongoReconnectTimeout =
  process.env.MONGO_RECONNECT_TIMEOUT || '2000';

export const logPath = process.env.TS_LOG_PATH || './logs';
export const storeLogs = process.env.GLOBAL_STORE_LOGS
  ? process.env.GLOBAL_STORE_LOGS === 'true'
  : false;

export const initExcelFile =
  process.env.TS_EXCEL_INIT_FILE || 'initPrefixes.xlsx';

export const initExcelFolder = process.env.TS_EXCEL_INIT_FOLDER || '/teaUtils';

export const initExcelFileFullPath = `${initExcelFolder}/${initExcelFile}`;
