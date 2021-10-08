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

export const generalUnitId = process.env.TS_GENERAL_UNIT_ID || 'google';

export const needInit = process.env.TS_NEED_INIT
  ? process.env.TS_NEED_INIT === 'true'
  : true;
export const initEmptyArrays = process.env.TS_INIT_EMPTY_ARRAYS
  ? process.env.TS_INIT_EMPTY_ARRAYS === 'true'
  : true;

export const unitNamesArray = process.env.TS_INIT_UNIT_NAMES
  ? process.env.TS_INIT_UNIT_NAMES.split(',')
  : ['google', 'amazon'];
export const kartoffelIdsInitArray = process.env.TS_INIT_KARTOFFEL_IDS
  ? process.env.TS_INIT_KARTOFFEL_IDS.split(',')
  : ['google', 'amazon'];
export const prefixesInitArray = process.env.TS_INIT_PREFIXES
  ? process.env.TS_INIT_PREFIXES.split(',')
  : ['100', '200'];
export const countersInitArray = process.env.TS_INIT_COUNTERS
  ? process.env.TS_INIT_COUNTERS.split(',').map((counter) => parseInt(counter))
  : [1, 1];
export const suffixesInOldDomain = process.env.TS_SUFFIXES_OLD_DOMAIN
  ? process.env.TS_SUFFIXES_OLD_DOMAIN.split(',')
  : ['gmail.com', 'amazon.com'];
export const suffixesInNewDomain = process.env.TS_SUFFIXES_OLD_DOMAIN
  ? process.env.TS_SUFFIXES_OLD_DOMAIN.split(',')
  : ['newDomain.com', 'newDomain.com'];
// export const oldDomainSuffixesArray
export const mongoConnectionRetries =
  process.env.MONGO_RECONNECT_ATTEMPTS || '5';
export const mongoReconnectTimeout =
  process.env.MONGO_RECONNECT_TIMEOUT || '2000';

export const logPath = process.env.TS_LOG_PATH || './logs';
export const storeLogs = process.env.GLOBAL_STORE_LOGS
  ? process.env.GLOBAL_STORE_LOGS === 'true'
  : false;
