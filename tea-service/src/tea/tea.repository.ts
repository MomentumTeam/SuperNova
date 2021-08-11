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
} from '../interfaces/protoc/proto/teaService';
import { UnitModel } from '../models/unit.model';
import { getUPN } from '../utils/upn';

export class TeaRepository {
  async retrieveTeaAndUPNByEntity(
    retrieveTeaAndUPNByEntityReq: RetrieveTeaAndUPNByEntityReq
  ): Promise<TeaAndUPN> {
    try {
      if (!retrieveTeaAndUPNByEntityReq.entity) {
        throw new Error('Entity not included in the request!');
      }
      const unit: Unit = await this.getUnit({
        kartoffelId: retrieveTeaAndUPNByEntityReq.kartoffelId,
      });
      const upn = getUPN(retrieveTeaAndUPNByEntityReq.entity);
      let tea = 0;
      if (unit.failedTea && unit.failedTea.length > 0) {
      }

      //TODO
    } catch (error) {
      throw error;
    }
  }

  async retrieveTeaAndUPNByEntityId(
    retrieveTeaAndUPNByEntityIdReq: RetrieveTeaAndUPNByEntityIdReq
  ): Promise<TeaAndUPN> {
    try {
      //TODO
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
          `Unit with kartoffelId=${getUnitReq.kartoffelId} does not exist!`
        );
      } else {
        return document.toObject() as Unit;
      }
    } catch (error) {
      throw error;
    }
  }

  async addUnit(unit: Unit): Promise<Unit> {
    try {
      const unitModel: any = new UnitModel(unit);
      unitModel.createdAt = new Date().getTime();
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
