const readXlsxFile = require('read-excel-file/node');
import * as EmailValidator from 'email-validator';
import * as C from '../config';
import { RequestType } from '../interfaces/protoc/proto/requestService';

export async function parseExcelFile(
  fileName: string,
  type: RequestType
): Promise<any> {
  try {
    let rows: any = await readXlsxFile(`${C.folderPath}/${fileName}`);
    rows.shift();
    const isLegeal = isLegalTable(rows, type);
    if (!isLegeal.legal) {
      return { legal: false, errorRows: isLegeal.errorRows };
    }
    if (type === RequestType.CREATE_ROLE_BULK) {
      rows = rows.map((row: any, index: any) => {
        return {
          rowNumber: index + 2,
          roleEntityType: C.hebEntityTypeToKartoffelLang[row[2]],
          // clearance: C.hebClearanceToKartoffelLang[row[1]],
          clearance: row[1],
          jobTitle: row[0].trim(),
        };
      });
    } else {
      //CHANGE_ROLE_HIERARCHY_BULK
      rows = rows.map((row: any, index: any) => {
        let res: any = {
          rowNumber: index + 2,
          currentJobTitle: row[1],
          roleId: row[0],
        };
        if (row[2] != null && row[2] != undefined) {
          res.newJobTitle = row[2].trim();
        }
        return res;
      });
    }

    return { legal: true, rows: rows };
  } catch (error: any) {
    throw error;
  }
}

export function isLegalTable(rows: any, type: RequestType) {
  const errorRows = containsLegalValues(rows, type);
  const isLegal =
    errorRows.length === 0 && rows.length > 0 && isTableFull(rows, type);
  return { legal: isLegal, errorRows: errorRows };
}

export function isTableFull(rows: any, type: RequestType) {
  for (let i in rows) {
    for (let j in rows[i]) {
      const illegalCell: boolean =
        type === RequestType.CREATE_ROLE_BULK
          ? !rows[i][j] || rows[i][j] == null
          : j !== '2' && (!rows[i][j] || rows[i][j] == null);
      if (illegalCell) {
        return false;
      }
    }
  }
  return true;
}

export function containsLegalValues(rows: any, type: RequestType) {
  // const jobTitleRegex =
  //   /^[\w\u0590-\u05fe]+[\w\u0590-\u05fe\s\-\']*[\w\u0590-\u05fe\']+$/;

  let errorLines: any = [];

  if (type === RequestType.CREATE_ROLE_BULK) {
    const hebEntityTypes: string[] = Object.keys(
      C.hebEntityTypeToKartoffelLang
    );
    const hebClearances: string[] = Object.keys(C.hebClearanceToKartoffelLang);
    for (let i in rows) {
      const jobTitle = rows[i][0].toString();
      const hebEntityType = rows[i][2].toString();
      const hebClearance = rows[i][1].toString();
      if (hebEntityTypes.indexOf(hebEntityType) === -1) {
        errorLines.push(i);
      }
    }
  } else {
    // for (let i in rows) {
    //   const newJobTitle = rows[i][2];
    //   if (
    //     newJobTitle !== null &&
    //     newJobTitle !== undefined &&
    //     !jobTitleRegex.test(newJobTitle)
    //   ) {
    //     return false;
    //   }
    // }
    return true;
  }
  return errorLines;
}
