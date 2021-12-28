import * as C from '../config';
import * as EmailValidator from 'email-validator';

const readXlsxFile = require('read-excel-file/node');

export async function parseExcelFile() {
  try {
    let rows: any = await readXlsxFile(`${C.excelFilePath}`);
    rows.shift();
    let commanders: Array<string> = rows
      .map((row: any) => {
        return row[0];
      })
      .filter(
        (element: any) =>
          element && element !== null && EmailValidator.validate(element)
      );
    let security: Array<string> = rows
      .map((row: any) => {
        return row[1];
      })
      .filter(
        (element: any) =>
          element && element !== null && EmailValidator.validate(element)
      );
    let superSecurity: Array<string> = rows
      .map((row: any) => {
        return row[2];
      })
      .filter(
        (element: any) =>
          element && element !== null && EmailValidator.validate(element)
      );
    let bulk: Array<string> = rows
      .map((row: any) => {
        return row[3];
      })
      .filter(
        (element: any) =>
          element && element !== null && EmailValidator.validate(element)
      );
    let admin: Array<string> = rows
      .map((row: any) => {
        return row[4];
      })
      .filter(
        (element: any) =>
          element && element !== null && EmailValidator.validate(element)
      );

    return {
      commanders,
      security,
      superSecurity,
      bulk,
      admin,
    };
  } catch (error: any) {
    throw Error;
  }
}
