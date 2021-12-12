import * as C from '../config';

const readXlsxFile = require('read-excel-file/node');

export async function parseExcelFile(){
  try{
    let rows: any = await readXlsxFile(`${C.folderPath}`);
    rows.shift();
    let commanders: Array<string> = rows.map((row: any) =>{return row[0]});
    let security: Array<string> = rows.map((row: any)=>{return row[1]});
    let superSecurity: Array<string> = rows.map((row: any)=>{return row[2]});
  
  return {
    commanders,
    security,
    superSecurity
  }  
  
  }catch(error: any){
    throw Error;
  }
  
}


