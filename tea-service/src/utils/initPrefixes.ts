const readXlsxFile = require('read-excel-file/node');
import * as C from '../config';
import { AddPrefixReq } from '../interfaces/protoc/proto/teaService';
import { PrefixModel } from '../models/prefix.model';
export async function initPrefixes() {
  try {
    let initPrefixesArray = await parseInitExcel();
    for (let initPrefix of initPrefixesArray) {
      const prefixExists = await PrefixModel.exists({
        prefix: initPrefix.prefix,
      });
      if (prefixExists) {
        let setQuery: any = { currentCounter: initPrefix.currentCounter };
        if (C.initEmptyArrays) {
          setQuery.teaInProgress = [];
          setQuery.failedTea = [];
        }
        await PrefixModel.updateOne(
          { prefix: initPrefix.prefix },
          { $set: setQuery }
        );
      } else {
        const prefixModel: any = new PrefixModel(initPrefix);
        prefixModel.createdAt = new Date().getTime();
        await prefixModel.save();
      }
    }
  } catch (error) {
    throw error;
  }
}

async function parseInitExcel(): Promise<AddPrefixReq[]> {
  try {
    let rows: any = await readXlsxFile(C.initExcelFileFullPath);
    rows.shift();
    return rows.map((row: any) => {
      return { prefix: row[0], currentCounter: parseInt(row[1]) };
    });
  } catch (error) {
    throw error;
  }
}
