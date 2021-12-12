import { findPath } from './utils/path';

export const host = process.env.KS_HOST || '0.0.0.0';

export const port =
  process.env.NODE_ENV === 'production'
    ? '8080'
    : process.env.KS_PORT || '8082';

export const spikeServiceUrl = process.env.KS_SS_URL || '0.0.0.0:8080';

export const devMode = process.env.NODE_ENV
  ? process.env.NODE_ENV === 'development'
  : true;

export const kartoffelServiceUrl = process.env.TS_KS_URL || '0.0.0.0:8082';

export const kartoffelUrl =
  process.env.KS_KARTOFFEL_URL || 'http://52.188.158.174:7709';

export const useFaker = process.env.KS_USE_FAKER
  ? process.env.KS_USE_FAKER === 'true'
  : false;

export const kartoffelRootID =
  process.env.KS_ROOT_ID || '611b5c58a7a257532f054a4b';

export const kartoffelAudience =
  process.env.KS_KARTOFFEL_AUDIENCE || 'kartoffel';

export const spikeTokenRefreshInHours = process.env.KS_SPIKE_TOKEN_REFRESH_HOURS
  ? parseInt(process.env.KS_SPIKE_TOKEN_REFRESH_HOURS)
  : 24;

export const kartoffelTreeDepth = process.env.KS_TREE_DEPTH
  ? parseInt(process.env.KS_TREE_DEPTH)
  : 3;

export const commanderRanks = process.env.KS_COMMANDER_RANKS
  ? process.env.KS_COMMANDER_RANKS.split(',')
  : ['aaa', 'bbb', 'ccc'];

export const highCommanderRanks = process.env.KS_HIGH_COMMANDER_RANKS
  ? process.env.KS_HIGH_COMMANDER_RANKS.split(',')
  : ['aaa', 'bbb', 'ccc'];

export const logPath = process.env.KS_LOG_PATH
  ? `${process.env.KS_LOG_PATH}/approvers-init-script`
  : './logs/approvers-init-script';
export const storeLogs = process.env.GLOBAL_STORE_LOGS
  ? process.env.GLOBAL_STORE_LOGS === 'true'
  : false;

export const defaultSource = process.env.KS_DEFAULT_SOURCE || 'oneTree';
export const approverServiceUrl = process.env.EXS_APS_URL || '0.0.0.0:8085';

export const folderPath =
  process.env.BS_FOLDER_PATH || findPath('../excelFile/excelFilesApprover.xlsx');
  