import * as C from '../config';
import { UnitModel } from '../models/unit.model';
import { TeaRepository } from '../tea/tea.repository';
const teaRepository: TeaRepository = new TeaRepository();
export async function initUnits() {
  let i = 0;
  for (let id of C.idsInitArray) {
    try {
      let query: any = {
        id: id,
        name: C.unitNamesArray[i],
        prefix: C.prefixesInitArray[i],
        oldDomainSuffix: C.suffixesInOldDomain[i],
        newDomainSuffix: C.suffixesInNewDomain[i],
        currentCounter: C.countersInitArray[i],
        hierarchy: C.unitHierarchiesArray[i],
      };
      if (C.initEmptyArrays) {
        query.teaInProgress = [];
        query.failedTea = [];
      }
      const unitAlreadyExists = await UnitModel.exists({
        id: id,
      });
      if (unitAlreadyExists) {
        await UnitModel.updateOne(
          { id: id },
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
