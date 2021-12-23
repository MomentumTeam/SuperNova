import {
  ReportTeaReq,
  SuccessMessage,
  EntityMin,
  RetrieveByEntityReq,
  RetrieveByEntityIdReq,
  UPNMessage,
  TeaMessage,
  RetrieveTeaByPrefixReq,
  AddPrefixReq,
  Prefix,
  GetPrefixReq,
  GetAllPrefixesReq,
  PrefixArray,
  UpdatePrefixReq,
  DeletePrefixReq,
  RetrieveTeaByOGIdReq,
} from '../interfaces/protoc/proto/teaService';
import { getUPN } from '../utils/upn';
import { Entity } from '../interfaces/protoc/proto/kartoffelService';
import KartoffelService from '../services/kartoffelService';
import * as C from '../config';
import { PrefixModel } from '../models/prefix.model';

export class TeaRepository {
  zeroPad(num: any, places: any) {
    return String(num).padStart(places, '0');
  }

  async retrieveTeaByPrefix(
    retrieveTeaByPrefixReq: RetrieveTeaByPrefixReq
  ): Promise<TeaMessage> {
    try {
      let prefix = retrieveTeaByPrefixReq.prefix;
      const prefixAlreadyExists = await PrefixModel.exists({
        prefix: prefix,
      });
      if (!prefixAlreadyExists) {
        await this.addPrefix({ prefix: prefix, currentCounter: 1 });
      }
      let tea;
      const documentBeforePop = await PrefixModel.findOneAndUpdate(
        { prefix: prefix },
        { $pop: { failedTea: -1 } }
      );
      if (!documentBeforePop) {
        throw new Error(`Failed to get prefix=${prefix}`);
      }
      const prefixBeforePop: any = documentBeforePop.toObject();

      if (prefixBeforePop.failedTea && prefixBeforePop.failedTea.length > 0) {
        tea = prefixBeforePop.failedTea[0];
      } else {
        const documentAfterInc = await PrefixModel.findOneAndUpdate(
          { prefix: prefix },
          { $inc: { currentCounter: 1 } }
        );
        if (!documentAfterInc) {
          throw new Error(`Failed to get prefix=${prefix}`);
        }
        const prefixAfterInc: any = documentAfterInc.toObject();
        tea = `T${this.zeroPad(prefixBeforePop.prefix, 4)}${this.zeroPad(
          prefixAfterInc.currentCounter,
          4
        )}`;
      }
      await PrefixModel.updateOne(
        { prefix: prefix },
        { $addToSet: { teaInProgress: tea } }
      );
      return { tea: tea };
    } catch (error) {
      throw error;
    }
  }

  async retrieveTeaByOGId(
    retrieveTeaByOGIdReq: RetrieveTeaByOGIdReq
  ): Promise<TeaMessage> {
    try {
      const ogPrefixObj = await KartoffelService.getPrefixByOGId({
        id: retrieveTeaByOGIdReq.id,
      });
      const roleIdSuffix = await KartoffelService.getRoleIdSuffixByOG({
        id: retrieveTeaByOGIdReq.id,
      });
      const prefix = ogPrefixObj.prefix;
      const teaObj = await this.retrieveTeaByPrefix({ prefix: prefix });
      const tea = teaObj.tea;
      return {
        tea: tea,
        roleId: `${tea}@${roleIdSuffix.suffix}`,
        uniqueId: `${tea}@${C.oldSuffix}`,
        samAccountName: tea,
        mail: `${tea}@${C.oldSuffix}`,
      };
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
        const upn: string = await getUPN(retrieveUPNByEntityReq.entity);
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
      await PrefixModel.updateOne(
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
      await PrefixModel.updateOne(
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
      await PrefixModel.updateOne(
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

  async getPrefix(getPrefixReq: GetPrefixReq): Promise<Prefix> {
    try {
      const document = await PrefixModel.findOne({
        prefix: getPrefixReq.prefix,
      });
      if (!document) {
        throw new Error(`Prefix=${getPrefixReq.prefix} does not exist!`);
      } else {
        return document.toObject() as Prefix;
      }
    } catch (error) {
      throw error;
    }
  }

  async getAllPrefixes(
    getAllPrefixesReq: GetAllPrefixesReq
  ): Promise<PrefixArray> {
    try {
      const totalCount = await PrefixModel.count({});
      let prefixes = [];
      const documents = await PrefixModel.find({});

      if (!documents) {
        throw new Error(`problem in getting all prefixes!`);
      } else {
        for (let i = 0; i < documents.length; i++) {
          const prefix: Prefix = documents[i].toObject() as Prefix;
          prefixes.push(prefix);
        }
        return { prefixes: prefixes, totalCount: totalCount };
      }
    } catch (error) {
      throw error;
    }
  }

  async addPrefix(addPrefixReq: AddPrefixReq): Promise<Prefix> {
    try {
      const prefixModel: any = new PrefixModel(addPrefixReq);
      prefixModel.createdAt = new Date().getTime();
      await prefixModel.save();
      const document = prefixModel.toObject();
      return document as Prefix;
    } catch (error) {
      throw error;
    }
  }

  async updatePrefix(updatePrefixReq: UpdatePrefixReq): Promise<Prefix> {
    try {
      const documentAfter: any = await PrefixModel.findOneAndUpdate(
        { prefix: updatePrefixReq.prefix },
        { $set: updatePrefixReq.properties },
        { new: true }
      );
      return documentAfter.toObject() as Prefix;
    } catch (error) {
      throw error;
    }
  }

  async deletePrefix(
    deletePrefixReq: DeletePrefixReq
  ): Promise<SuccessMessage> {
    try {
      await PrefixModel.deleteOne({ prefix: deletePrefixReq.prefix });
      return { success: true };
    } catch (error) {
      throw error;
    }
  }
}
