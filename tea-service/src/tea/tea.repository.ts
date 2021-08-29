import {
  RetrieveTeaAndUPNByEntityReq,
  TeaAndUPN,
  RetrieveTeaAndUPNByEntityIdReq,
  ReportTeaReq,
  GetUnitReq,
  Unit,
  SuccessMessage,
  UpdateUnitReq,
  DeleteUnitReq,
  Domain,
  AddUnitReq,
  domainToJSON,
  domainFromJSON,
  EntityMin,
} from '../interfaces/protoc/proto/teaService';
import { UnitModel } from '../models/unit.model';
import { getUnitKartoffelIdOfEntity } from '../utils/unit';
import { getUPN } from '../utils/upn';
import * as C from '../config';
import { Entity } from '../interfaces/protoc/proto/kartoffelService';
import KartoffelService from '../services/kartoffelService';

export class TeaRepository {
  zeroPad(num: any, places: any) {
    return String(num).padStart(places, '0');
  }

  async retrieveTeaAndUPNByEntity(
    retrieveTeaAndUPNByEntityReq: RetrieveTeaAndUPNByEntityReq
  ): Promise<TeaAndUPN> {
    const domain =
      typeof retrieveTeaAndUPNByEntityReq.domain == typeof ''
        ? domainFromJSON(retrieveTeaAndUPNByEntityReq.domain.toString())
        : retrieveTeaAndUPNByEntityReq.domain;
    if (!retrieveTeaAndUPNByEntityReq.entity) {
      throw new Error('Entity must be included in the request!');
    }
    let tea: string, upn: string, unitExists: boolean, kartoffelId: string;
    try {
      upn = getUPN(retrieveTeaAndUPNByEntityReq.entity);
    } catch (error) {
      throw error;
    }
    try {
      kartoffelId = getUnitKartoffelIdOfEntity(
        retrieveTeaAndUPNByEntityReq.entity
      );
      unitExists = await UnitModel.exists({
        kartoffelId: kartoffelId,
      });
      if (!unitExists) {
        kartoffelId = C.generalUnitId;
      }
    } catch (error) {
      throw error;
    }
    if (domain === Domain.OLD) {
      //oldDomain
      try {
        const documentBeforePop = await UnitModel.findOneAndUpdate(
          { kartoffelId: kartoffelId },
          { $pop: { failedTea: -1 } }
        );
        if (!documentBeforePop) {
          throw new Error(`Failed to get Unit with kartoffelId=${kartoffelId}`);
        }
        const unitBeforePop: any = documentBeforePop.toObject();

        if (unitBeforePop.failedTea && unitBeforePop.failedTea.length > 0) {
          tea = unitBeforePop.failedTea[0];
        } else {
          const documentAfterInc = await UnitModel.findOneAndUpdate(
            { kartoffelId: kartoffelId },
            { $inc: { currentCounter: 1 } }
          );
          if (!documentAfterInc) {
            throw new Error(
              `Failed to get Unit with kartoffelId=${kartoffelId}`
            );
          }
          const unitAfterInc: any = documentAfterInc.toObject();
          tea = `T${unitBeforePop.prefix}${this.zeroPad(
            unitAfterInc.currentCounter,
            4
          )}@${unitAfterInc.oldDomainSuffix}`;
        }
        await UnitModel.updateOne(
          { kartoffelId: kartoffelId },
          { $addToSet: { teaInProgress: tea } }
        );
      } catch (error) {
        throw error;
      }
    } else {
      //newDomain
      try {
        const unit = await this.getUnit({ kartoffelId: kartoffelId });
        tea = `${retrieveTeaAndUPNByEntityReq.entity.lastName}${retrieveTeaAndUPNByEntityReq.entity.firstName}@${unit.newDomainSuffix}`;
      } catch (error) {
        throw error;
      }
    }
    return { tea: tea, upn: upn };
  }

  async retrieveTeaAndUPNByEntityId(
    retrieveTeaAndUPNByEntityIdReq: RetrieveTeaAndUPNByEntityIdReq
  ): Promise<TeaAndUPN> {
    try {
      const entity: Entity = await KartoffelService.getEntityByMongoId({
        id: retrieveTeaAndUPNByEntityIdReq.entityId,
      });
      return await this.retrieveTeaAndUPNByEntity({
        domain: retrieveTeaAndUPNByEntityIdReq.domain,
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
            failedTea: reportTeaReq.tea,
            teaInProgress: reportTeaReq.tea,
          },
        }
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
        }
      );
      return { success: true };
    } catch (error) {
      throw error;
    }
  }

  async getUnit(getUnitReq: GetUnitReq): Promise<Unit> {
    try {
      const document = await UnitModel.findOne({
        kartoffelId: getUnitReq.kartoffelId,
      });
      if (!document) {
        throw new Error(
          `A Unit with kartoffelId=${getUnitReq.kartoffelId} does not exist!`
        );
      } else {
        return document.toObject() as Unit;
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
        { kartoffelId: updateUnitReq.kartoffelId },
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
      await UnitModel.deleteOne({ kartoffelId: deleteUnitReq.kartoffelId });
      return { success: true };
    } catch (error) {
      throw error;
    }
  }
}
