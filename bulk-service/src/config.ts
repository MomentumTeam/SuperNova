import { findPath } from './utils/path';

export const host = process.env.BS_HOST || '0.0.0.0';
export const port = process.env.NODE_ENV === 'production' ? '8080' : process.env.BS_PORT || '8087';
export const folderPath = process.env.BS_FOLDER_PATH || findPath('excelFilesExample');
export const requestServiceUrl = process.env.BS_RS_URL || '0.0.0.0:8081';

export const hebEntityTypeToKartoffelLang: any = {
  חייל: 'soldier',
  מילואים: 'reserved',
  אזרח: 'civilian',
  תפקידן: 'goalUser',
};

export const hebClearanceToKartoffelLang: any = {
  אדום: 'red',
  סגול: 'purple',
  כחול: 'blue',
};

export const exampleFiles = {
  changeRoleHierarchyRequest: process.env.BS_FILE_CRH || 'changeRoleHierarchyBulkExample.xlsx',
  createRoleRequest: process.env.BS_FILE_CR || 'createRoleBulkExample.xlsx',
};
