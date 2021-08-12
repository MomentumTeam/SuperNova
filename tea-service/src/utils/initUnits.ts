import * as C from '../config';
import { UnitModel } from '../models/unit.model';
import { TeaRepository } from '../tea/tea.repository';
const teaRepository: TeaRepository = new TeaRepository();
export async function initUnits() {
  let i = 0;
  for (let kartoffelId of C.kartoffelIdsInitArray) {
    try {
      let query: any = {
        kartoffelId: kartoffelId,
        name: C.unitNamesArray[i],
        prefix: C.prefixesInitArray[i],
        oldDomainSuffix: C.suffixesInOldDomain[i],
        newDomainSuffix: C.suffixesInNewDomain[i],
        currentCounter: C.countersInitArray[i],
      };
      if (C.initEmptyArrays) {
        query.teaInProgress = [];
        query.failedTea = [];
      }
      const unitAlreadyExists = await UnitModel.exists({
        kartoffelId: kartoffelId,
      });
      if (unitAlreadyExists) {
        await UnitModel.updateOne(
          { kartoffelId: kartoffelId },
          {
            $set: query,
          }
        );
      } else {
        query.teaInProgress = [];
        query.failedTea = [];
        const document = new UnitModel(query);
        await document.save();
      }
    } catch (error) {
      throw error;
    }
    i++;
  }
}
