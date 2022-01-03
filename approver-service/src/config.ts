export const host = process.env.APS_HOST || '0.0.0.0';
export const port =
  process.env.NODE_ENV === 'production'
    ? '8080'
    : process.env.APS_PORT || '8085';
export const mongoUrl =
  process.env.APS_MONGO_URL || 'mongodb://127.0.0.1:27017/supernova';
export const kartoffelServiceUrl = process.env.APS_KS_URL || '0.0.0.0:8082';
export const requestServiceUrl = process.env.APS_RS_URL || '0.0.0.0:8081';
export const rootId = process.env.APS_ROOT_ID || '619e3193f235dc001846bb4f';
export const commanderRanks = process.env.APS_COMMANDER_RANKS
  ? process.env.APS_COMMANDER_RANKS.split(',')
  : ['aaa', 'bbb'];
export const mongoConnectionRetries =
  process.env.MONGO_RECONNECT_ATTEMPTS || '5';
export const mongoReconnectTimeout =
  process.env.MONGO_RECONNECT_TIMEOUT || '2000';
export const ogValidationDepth = process.env.APS_OG_VALIDATION_DEPTH
  ? parseInt(process.env.APS_OG_VALIDATION_DEPTH)
  : 4;

export const alwaysValidCommanders = process.env.APS_ALWAYS_VALID_COMMANDERS
  ? process.env.APS_ALWAYS_VALID_COMMANDERS.split(',')
  : [];

export const logPath = process.env.APS_LOG_PATH
  ? `${process.env.APS_LOG_PATH}/approver-service`
  : './logs/approver-service';
export const storeLogs = process.env.GLOBAL_STORE_LOGS
  ? process.env.GLOBAL_STORE_LOGS === 'true'
  : false;
