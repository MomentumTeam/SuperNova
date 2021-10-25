import {
  ReportTeaReq,
  GetUnitReq,
  Unit,
  SuccessMessage,
  UpdateUnitReq,
  DeleteUnitReq,
  AddUnitReq,
  EntityMin,
  RetrieveByEntityReq,
  RetrieveByEntityIdReq,
  UPNMessage,
  RetrieveTeaByUnitReq,
  TeaMessage,
  GetAllUnitsReq,
  MinUnitArray,
  SearchUnitReq,
} from '../interfaces/protoc/proto/teaService';
import { UnitModel } from '../models/unit.model';
import { getUPN } from '../utils/upn';
import { Entity } from '../interfaces/protoc/proto/kartoffelService';
import KartoffelService from '../services/kartoffelService';
import * as C from '../config';

export class TeaRepository {
  zeroPad(num: any, places: any) {
    return String(num).padStart(places, '0');
  }

  async retrieveTeaByUnit(
    retrieveTeaByUnitReq: RetrieveTeaByUnitReq
  ): Promise<TeaMessage> {
    try {
      let id = retrieveTeaByUnitReq.id;
      const unitAlreadyExists = await UnitModel.exists({
        id: id,
      });
      if (!unitAlreadyExists) {
        id = C.generalUnitId;
      }
      let tea;
      const documentBeforePop = await UnitModel.findOneAndUpdate(
        { id: id },
        { $pop: { failedTea: -1 } }
      );
      if (!documentBeforePop) {
        throw new Error(`Failed to get Unit with id=${id}`);
      }
      const unitBeforePop: any = documentBeforePop.toObject();

      if (unitBeforePop.failedTea && unitBeforePop.failedTea.length > 0) {
        tea = unitBeforePop.failedTea[0];
      } else {
        const documentAfterInc = await UnitModel.findOneAndUpdate(
          { id: id },
          { $inc: { currentCounter: 1 } }
        );
        if (!documentAfterInc) {
          throw new Error(`Failed to get Unit with id=${id}`);
        }
        const unitAfterInc: any = documentAfterInc.toObject();
        tea = `T${unitBeforePop.prefix}${this.zeroPad(
          unitAfterInc.currentCounter,
          4
        )}@${unitAfterInc.oldDomainSuffix}`;
      }
      await UnitModel.updateOne(
        { id: id },
        { $addToSet: { teaInProgress: tea } }
      );
      return { tea: tea };
    } catch (error) {
      throw error;
    }
  }

  async retrieveUPNByEntity(
    retrieveUPNByEntityReq: RetrieveByEntityReq
  ): Promise<UPNMessage> {
    try {
      if (!retrieveUPNByEntityReq.entity) {
        throw new Error('Entity must be inserted!');
      } else {
        const upn: string = getUPN(retrieveUPNByEntityReq.entity);
        return { upn: upn };
      }
    } catch (error) {
      throw error;
    }
  }

  async retrieveUPNByEntityId(
    retrieveByEntityIdReq: RetrieveByEntityIdReq
  ): Promise<UPNMessage> {
    try {
      const entity: Entity = await KartoffelService.getEntityById({
        id: retrieveByEntityIdReq.entityId,
      });
      return await this.retrieveUPNByEntity({
        domain: retrieveByEntityIdReq.domain,
        entity: entity as EntityMin,
      });
    } catch (error) {
      throw error;
    }
  }

  async reportTeaSuccess(reportTeaReq: ReportTeaReq): Promise<SuccessMessage> {
    try {
      await UnitModel.updateOne(
        {
          $or: [
            { teaInProgress: reportTeaReq.tea },
            { failedTea: reportTeaReq.tea },
          ],
        },
        {
          $pull: {
            teaInProgress: reportTeaReq.tea,
            failedTea: reportTeaReq.tea,
          },
        },
        { multi: true }
      );
      return { success: true };
    } catch (error) {
      throw error;
    }
  }

  async throwTea(throwTeaReq: ReportTeaReq): Promise<SuccessMessage> {
    try {
      await UnitModel.updateOne(
        {
          $or: [
            { teaInProgress: throwTeaReq.tea },
            { failedTea: throwTeaReq.tea },
          ],
        },
        {
          $pull: {
            teaInProgress: throwTeaReq.tea,
            failedTea: throwTeaReq.tea,
          },
        },
        { multi: true }
      );
      return { success: true };
    } catch (error) {
      throw error;
    }
  }

  async reportTeaFail(reportTeaReq: ReportTeaReq): Promise<SuccessMessage> {
    try {
      await UnitModel.updateOne(
        {
          $or: [
            { teaInProgress: reportTeaReq.tea },
            { failedTea: reportTeaReq.tea },
          ],
        },
        {
          $pull: {
            teaInProgress: reportTeaReq.tea,
          },
          $addToSet: {
            failedTea: reportTeaReq.tea,
          },
        },
        { multi: true }
      );
      return { success: true };
    } catch (error) {
      throw error;
    }
  }

  async getUnit(getUnitReq: GetUnitReq): Promise<Unit> {
    try {
      const document = await UnitModel.findOne({
        id: getUnitReq.id,
      });
      if (!document) {
        throw new Error(`A Unit with id=${getUnitReq.id} does not exist!`);
      } else {
        return document.toObject() as Unit;
      }
    } catch (error) {
      throw error;
    }
  }

  async getAllUnits(getAllUnitsReq: GetAllUnitsReq): Promise<MinUnitArray> {
    try {
      const totalCount = await UnitModel.count({});
      let units = [];
      const documents = await UnitModel.find({});

      if (!documents) {
        throw new Error(`problem in getting all units!`);
      } else {
        for (let i = 0; i < documents.length; i++) {
          const unit: any = documents[i].toObject();
          units.push({
            id: unit.id,
            name: unit.name,
            hierarchy: unit.hierarchy,
          });
        }
        return { units: units, totalCount: totalCount };
      }
    } catch (error) {
      throw error;
    }
  }

  async searchUnit(searchUnitReq: SearchUnitReq): Promise<MinUnitArray> {
    try {
      const query: any = {
        $text: { $search: searchUnitReq.nameAndHierarchy },
      };
      const totalCount = await UnitModel.count(query);
      let units = [];
      const documents = await UnitModel.find(query);

      if (!documents) {
        throw new Error(`problem in getting all units!`);
      } else {
        for (let i = 0; i < documents.length; i++) {
          const unit: any = documents[i].toObject();
          units.push({
            id: unit.id,
            name: unit.name,
            hierarchy: unit.hierarchy,
          });
        }
        return { units: units, totalCount: totalCount };
      }
    } catch (error) {
      throw error;
    }
  }

  async addUnit(addUnitReq: AddUnitReq): Promise<Unit> {
    try {
      const unitModel: any = new UnitModel(addUnitReq);
      unitModel.createdAt = new Date().getTime();
      await unitModel.save();
      const document = unitModel.toObject();
      return document as Unit;
    } catch (error) {
      throw error;
    }
  }

  async updateUnit(updateUnitReq: UpdateUnitReq): Promise<Unit> {
    try {
      const documentAfter: any = await UnitModel.findOneAndUpdate(
        { id: updateUnitReq.id },
        { $set: updateUnitReq.unitProperties },
        { new: true }
      );
      return documentAfter.toObject() as Unit;
    } catch (error) {
      throw error;
    }
  }

  async deleteUnit(deleteUnitReq: DeleteUnitReq): Promise<SuccessMessage> {
    try {
      await UnitModel.deleteOne({ id: deleteUnitReq.id });
      return { success: true };
    } catch (error) {
      throw error;
    }
  }
}
