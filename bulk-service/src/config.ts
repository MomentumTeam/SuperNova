import { findPath } from './utils/path';

export const host = process.env.BS_HOST || '0.0.0.0';
export const port =
  process.env.NODE_ENV === 'production'
    ? '8080'
    : process.env.BS_PORT || '8087';
export const folderPath =
  process.env.BS_FOLDER_PATH || findPath('excelFilesExample');

export const requestServiceUrl = process.env.BS_RS_URL || '0.0.0.0:8081';

export const defaultRoleSource =
  process.env.BS_DEFAULT_ROLE_SOURCE || 'OneTree';

export const domainUser = process.env.BS_KARTOFFEL_DOMAIN_USER || 'domainUser';

export const soldier = process.env.BS_SOLDIER || 'Soldier';
export const reserved = process.env.BS_RESERVED || 'Reserved';
export const civilian = process.env.BS_CIVILIAN || 'Civilian';
export const goalUser = process.env.BS_GOAL_USER || 'GoalUser';

export const hebEntityTypeToKartoffelLang: any = {
  חייל: soldier,
  מילואים: reserved,
  אזרח: civilian,
  תפקידן: goalUser,
};

export const hebClearanceToKartoffelLang: any = {
  אדום: 'red',
  סגול: 'purple',
  כחול: 'blue',
};

export const kartoffelEntityTypeToHeb: any = {
  [soldier]: 'חייל',
  [reserved]: 'מילואים',
  [civilian]: 'אזרח',
  [goalUser]: 'תפקידן',
};

export const kartoffelClearanceToHeb: any = {
  red: 'אדום',
  purple: 'סגול',
  blue: 'כחול',
};

export const exampleFiles = {
  changeRoleHierarchyRequest:
    process.env.BS_CRH_EXAMPLE_FILE || 'changeRoleHierarchyBulk.xlsx',
  createRoleRequest: process.env.BS_CR_EXAMPLE_FILE || 'createRoleBulk.xlsx',
};

export const logPath = process.env.BS_LOG_PATH
  ? `${process.env.BS_LOG_PATH}/bulk-service`
  : './logs/bulk-service';
export const storeLogs = process.env.GLOBAL_STORE_LOGS
  ? process.env.GLOBAL_STORE_LOGS === 'true'
  : false;
