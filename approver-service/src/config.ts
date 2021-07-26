export const host = process.env.APS_HOST || '0.0.0.0';
export const port = process.env.APS_PORT || '8085';
export const mongoUrl =
  process.env.RS_MONGO_URL || 'mongodb://127.0.0.1:27017/supernova';
export const kartoffelServiceUrl = process.env.APS_KS_URL || '0.0.0.0:8082';
export const requestServiceUrl = process.env.APS_RS_URL || '0.0.0.0:8081';
export const commanderRanks = process.env.APS_COMMANDER_RANKS
  ? process.env.APS_COMMANDER_RANKS.split(',')
  : ['aaa', 'bbb'];
