import { PersonTypeInRequest } from '../enums/personTypeInRequest.enum';
import {
  CreateApproverReq,
  DeleteReq,
  GetAllRequestsReq,
  GetRequestByIdReq,
  GetRequestBySerialNumberReq,
  GetRequestsByPersonIdReq,
  Request,
  RequestArray,
  RequestStatus,
  RequestType,
  requestTypeToJSON,
  StageStatus,
  SuccessMessage,
  UpdateADStatusReq,
  UpdateKartoffelStatusReq,
  UpdateReq,
} from '../interfaces/protoc/proto/requestService';
import { RequestModel } from '../models/request.model';

export class RequestRepository {
  private cleanUnderscoreFields(document: any): void {
    let keys: any = Object.keys(document);

    for (let key of keys) {
      if (key.startsWith('_') && key !== '_id') {
        delete document[key];
      }
    }
  }

  private cleanNullFields(document: any): void {
    let keys: any = Object.keys(document);

    for (let key of keys) {
      if (!document[key] || document[key] == null) {
        delete document[key];
      }
    }
    if (document.kartoffelParams) {
      keys = Object.keys(document.kartoffelParams);

      for (let key of keys) {
        if (
          !document.kartoffelParams[key] ||
          document.kartoffelParams[key] == null
        ) {
          delete document.kartoffelParams[key];
        }
      }
    }
    if (document.adParams) {
      keys = Object.keys(document.adParams);

      for (let key of keys) {
        if (!document.adParams[key] || document.adParams[key] == null) {
          delete document.adParams[key];
        }
      }
    }
  }

  private turnIdOfApproverToString(approver: any) {
    if (approver.id) {
      approver.id = approver.id.toString();
    }
    return approver;
  }

  private turnObjectIdsToStrings(document: any): void {
    //_id
    if (document._id) {
      document._id = document._id.toString();
      document.id = document._id;
    }

    //submittedBy
    if (document.submittedBy) {
      this.turnIdOfApproverToString(document.submittedBy);
    }

    //commanderDecision
    if (document.commanderDecision && document.commanderDecision.approver) {
      this.turnIdOfApproverToString(document.commanderDecision.approver);
    }

    //securityDecision
    if (document.securityDecision && document.securityDecision.approver) {
      this.turnIdOfApproverToString(document.securityDecision.approver);
    }

    //commanders
    if (document.commanders) {
      document.commanders = document.commanders.map((commander: any) =>
        this.turnIdOfApproverToString(commander)
      );
    }

    if (document.kartoffelProperties && document.kartoffelProperties.id) {
      document.kartoffelProperties.id =
        document.kartoffelProperties.id.toString();
    }
    this.cleanUnderscoreFields(document);
    this.cleanNullFields(document);
  }

  async deleteRequest(deleteReq: DeleteReq): Promise<SuccessMessage> {
    try {
      await RequestModel.deleteOne({ _id: deleteReq.id });
      const res: SuccessMessage = {
        success: true,
        message: `Request ${deleteReq.id} was deleted successfully`,
      };
      return res;
    } catch (error) {
      throw error;
    }
  }

  async updateRequest(updateReq: UpdateReq): Promise<Request> {
    try {
      let requestUpdate: any = { ...updateReq.requestProperties };
      if (requestUpdate.commanders && requestUpdate.commanders.length == 0) {
        delete requestUpdate['commanders'];
      }
      this.cleanUnderscoreFields(requestUpdate);
      const document: any = await RequestModel.findOneAndUpdate(
        { _id: updateReq.id },
        { $set: requestUpdate },
        { new: true }
      );
      if (document) {
        const documentObj = document.toObject();
        this.turnObjectIdsToStrings(documentObj);
        return documentObj as Request;
      } else {
        throw new Error(`A request with {_id: ${updateReq.id}} was not found!`);
      }
    } catch (error) {
      throw error;
    }
  }

  async updateKartoffelStatus(
    updateKartoffelStatusReq: UpdateKartoffelStatusReq
  ): Promise<Request> {
    try {
      this.cleanUnderscoreFields(updateKartoffelStatusReq);
      let requestUpdate: any = {
        id: updateKartoffelStatusReq.requestId,
        requestProperties: {
          kartoffelStatus: {
            status: updateKartoffelStatusReq.status,
            message: updateKartoffelStatusReq.message,
            createdId: updateKartoffelStatusReq.createdId,
          },
        },
      };
      if (updateKartoffelStatusReq.status === StageStatus.STAGE_DONE) {
        requestUpdate.requestProperties.status = RequestStatus.DONE;
      } else {
        requestUpdate.requestProperties.status = RequestStatus.FAILED;
      }
      return await this.updateRequest(requestUpdate);
    } catch (error) {
      throw error;
    }
  }

  async updateADStatus(updateADStatusReq: UpdateADStatusReq): Promise<Request> {
    try {
      this.cleanUnderscoreFields(updateADStatusReq);
      let requestUpdate: any = {
        id: updateADStatusReq.requestId,
        requestProperties: {
          adStatus: {
            status: updateADStatusReq.status,
            message: updateADStatusReq.message,
          },
        },
      };
      if (updateADStatusReq.status === StageStatus.STAGE_FAILED) {
        requestUpdate.requestProperties.status = RequestStatus.FAILED;
      }
      return await this.updateRequest(requestUpdate);
    } catch (error) {
      throw error;
    }
  }

  async createRequest(
    createRequestReq: any,
    type: RequestType
  ): Promise<Request> {
    try {
      const request: any = new RequestModel(createRequestReq);
      request.type = requestTypeToJSON(type);
      request.createdAt = new Date().getTime();
      const createdCreateRequest = await request.save();
      const document = createdCreateRequest.toObject();
      this.turnObjectIdsToStrings(document);
      return document as Request;
    } catch (error) {
      throw error;
    }
  }

  async getAllRequests(
    getAllRequestsReq: GetAllRequestsReq
  ): Promise<RequestArray> {
    try {
      const totalCount = await RequestModel.count({});
      const requests: any = await RequestModel.find(
        {},
        {},
        {
          skip: getAllRequestsReq.from - 1,
          limit: getAllRequestsReq.to - getAllRequestsReq.from + 1,
        }
      ).sort([['updatedAt', -1]]);
      if (requests) {
        let documents: any = [];
        for (let i = 0; i < requests.length; i++) {
          const requestObj: any = requests[i].toObject();
          this.turnObjectIdsToStrings(requestObj);
          documents.push(requestObj);
        }

        return {
          requests: documents,
          totalCount: totalCount,
        };
      } else {
        return {
          requests: [],
          totalCount: 0,
        };
      }
    } catch (error) {
      throw error;
    }
  }

  async getRequestBySerialNumber(
    getRequestBySerialNumberReq: GetRequestBySerialNumberReq
  ): Promise<Request> {
    try {
      const request = await RequestModel.findOne({
        serialNumber: getRequestBySerialNumberReq.serialNumber,
      });
      if (request) {
        const document = request.toObject();
        this.turnObjectIdsToStrings(document);
        return document as Request;
      } else {
        throw new Error(
          `A request with {serialNumber: ${getRequestBySerialNumberReq.serialNumber}} was not found!`
        );
      }
    } catch (error) {
      throw error;
    }
  }

  async getRequestById(getRequestByIdReq: GetRequestByIdReq): Promise<Request> {
    try {
      const request = await RequestModel.findOne({ _id: getRequestByIdReq.id });
      if (request) {
        const document = request.toObject();
        this.turnObjectIdsToStrings(document);
        return document as Request;
      } else {
        throw new Error(
          `A request with {_id: ${getRequestByIdReq.id}} was not found!`
        );
      }
    } catch (error) {
      throw error;
    }
  }

  async getRequestsByPersonId(
    getRequestsByPersonIdReq: GetRequestsByPersonIdReq,
    personTypeInRequest: PersonTypeInRequest
  ) {
    try {
      const field =
        personTypeInRequest === PersonTypeInRequest.COMMANDER
          ? 'commanders'
          : 'submittedBy';
      const totalCount = await RequestModel.count({
        [field]: getRequestsByPersonIdReq.id,
      });
      const requests: any = await RequestModel.find(
        {
          [field]: getRequestsByPersonIdReq.id,
        },
        {},
        {
          skip: getRequestsByPersonIdReq.from - 1,
          limit:
            getRequestsByPersonIdReq.to - getRequestsByPersonIdReq.from + 1,
        }
      ).sort([['updatedAt', -1]]);
      if (requests) {
        let documents: any = [];
        for (let i = 0; i < requests.length; i++) {
          const requestObj: any = requests[i].toObject();
          this.turnObjectIdsToStrings(requestObj);
          documents.push(requestObj);
        }
        return {
          requests: documents,
          totalCount: totalCount,
        };
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  }
}
