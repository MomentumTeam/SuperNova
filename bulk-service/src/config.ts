import { findPath } from './utils/path';

export const host = process.env.BS_HOST || '0.0.0.0';
export const port =
  process.env.NODE_ENV === 'production'
    ? '8080'
    : process.env.BS_PORT || '8087';
export const folderPath =
  process.env.BS_FOLDER_PATH || findPath('excelFilesExample');
export const requestServiceUrl = process.env.BS_RS_URL || '0.0.0.0:8081';

export const hebEntityTypeToKartoffelLang: any = {
  חייל: 'soldier',
  מילואים: 'reserved',
  אזרח: 'civilian',
  תפקידן: 'goalUser',
};

export const hebClearanceToKartoffelLang: any = {
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
};
