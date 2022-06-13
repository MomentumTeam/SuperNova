import * as C from '../config';
import * as EmailValidator from 'email-validator';

const readXlsxFile = require('read-excel-file/node');

export async function parseExcelFile(index: any) {
  try {
    let rows: any = await readXlsxFile(`${C.excelFilePath}`);
    rows.shift();
    let approvers: Array<string> = rows
      .map((row: any) => row[index])
      .filter(
        (element: any) =>
          element && element !== null && EmailValidator.validate(element)
      );
    return approvers;
  } catch (error) {
    throw error;
  }
}

export async function parseExcelFileAdminAndSecurityAdmin(index: any) {
  try {
    let rows: any = await readXlsxFile(`${C.excelFilePath}`);
    rows.shift();
    let approvers: Array<string> = rows.map((row: any) => row[index]);

    let admin = approvers
      .map((T) => T?.split(',')[0])
      .filter(
        (element: any) =>
          element && element !== null && EmailValidator.validate(element)
      );
    let io = approvers.map((I) => I?.split(',')[1]);
    return {
      admin,
      io,
    };
  } catch (error) {
    throw error;
  }
}
