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
    let tea: string, upn: string, unit: Unit, kartoffelId: string;
    try {
      upn = getUPN(retrieveTeaAndUPNByEntityReq.entity);
    } catch (error) {
      throw error;
    }
    try {
      kartoffelId = getUnitKartoffelIdOfEntity(
        retrieveTeaAndUPNByEntityReq.entity
      );
      unit = await this.getUnit({
        kartoffelId: kartoffelId,
      });
    } catch (error) {
      try {
        kartoffelId = C.generalUnitId;
        unit = await this.getUnit({
          kartoffelId: kartoffelId,
        });
      } catch (error) {
        throw error;
      }
    }
    if (domain === Domain.OLD) {
      //oldDomain
      try {
        if (unit.failedTea && unit.failedTea.length > 0) {
          tea = unit.failedTea[0];
          await UnitModel.updateOne(
            { kartoffelId: kartoffelId },
            { $pull: { failedTea: tea }, $addToSet: { teaInProgress: tea } }
          );
        } else {
          tea = `T${unit.prefix}${this.zeroPad(unit.currentCounter, 4)}@${
            unit.oldDomainSuffix
          }`;
          await UnitModel.updateOne(
            { kartoffelId: kartoffelId },
            { $inc: { currentCounter: 1 }, $addToSet: { teaInProgress: tea } }
          );
        }
      } catch (error) {
        throw error;
      }
    } else {
      //newDomain
      try {
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
        entity: entity,
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
