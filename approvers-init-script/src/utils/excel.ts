import * as C from '../config';
import * as EmailValidator from 'email-validator';

const readXlsxFile = require('read-excel-file/node');

export async function parseExcelFile(index: any) {
  try {
    let rows: any = await readXlsxFile(`${C.excelFilePath}`);
    rows.shift();
    let approvers: Array<string> = rows
      .map((row: any) => {
        return row[index];
      })
      .filter(
        (element: any) =>
          element && element !== null && EmailValidator.validate(element)
      );
    return approvers;
  } catch (error) {
    throw error;
  }
}

export async function parseExcelFileAdmin() {
  try {
    let rows: any = await readXlsxFile(`${C.excelFilePath}`);
    rows.shift();
    let approvers: Array<string> = rows.map((row: any) => {
      return row[4];
    });

    let admin = approvers
      .map((T) => {
        return T?.split(',')[0];
      })
      .filter(
        (element: any) =>
          element && element !== null && EmailValidator.validate(element)
      );
    let io = approvers.map((I) => {
      return I?.split(',')[1];
    });
    return {
      admin,
      io,
    };
  } catch (error) {
    throw error;
  }
}
