import { findPath } from './utils/path';

export const kartoffelServiceUrl = process.env.AIS_KS_URL || '0.0.0.0:8082';
export const approverServiceUrl = process.env.AIS_APS_URL || '0.0.0.0:8085';

export const logPath = process.env.AIS_LOG_PATH
  ? `${process.env.AIS_LOG_PATH}/approvers-init-script`
  : './logs/approvers-init-script';
export const excelFilePath =
  process.env.AIS_EXCEL_FILE_PATH ||
  `${findPath('excelFiles')}/aisExcelFile.xlsx`;
export const storeLogs = process.env.GLOBAL_STORE_LOGS
  ? process.env.GLOBAL_STORE_LOGS === 'true'
  : false;
