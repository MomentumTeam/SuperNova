import { IGetRequestByIdReq } from "../interfaces/getRequestById/getRequestByIdReq.interface";
import { Request } from "../models/request.model";
import { IRequest } from "../interfaces/request.interface";
import { RequestType } from "../enums/requestType.enum";
import { PersonTypeInRequest } from "../enums/personTypeInRequest.enum";
import { IDeleteRequestReq } from "../interfaces/deleteRequest/deleteRequestReq.interface";
import { IGetAllRequestsReq } from "../interfaces/getAllRequests/getAllRequestsReq.interface";
import {
  IRequestArray,
  RequestArray,
} from "../interfaces/requestArray.interface";
import {
  ISuccessMessage,
  SuccessMessage,
} from "../interfaces/successMessage.interface";
import { IUpdateRequestReq } from "../interfaces/updateRequest/updateRequestReq.interface";
import { IGetRequestsByPersonIdReq } from "../interfaces/getRequestsByPersonId/getRequestsByPersonIdReq.interface";

export class RequestRepository {
  private cleanUnderscoreFields(document: any): void {
    let keys: any = Object.keys(document);

    for (let key of keys) {
      if (key.startsWith("_") && key !== "_id") {
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

  private turnObjectIdsToStrings(document: any): void {
    //_id
    if (document._id) {
      document._id = document._id.toString();
      document.id = document._id;
    }

    //submittedBy
    if (document.submittedBy) {
      document.submittedBy = document.submittedBy.toString();
    }

    //commanderDecision
    if (document.commanderDecision && document.commanderDecision.approverId) {
      document.commanderDecision.approverId =
        document.commanderDecision.approverId.toString();
    }

    //securityDecision
    if (document.securityDecision && document.securityDecision.approverId) {
      document.securityDecision.approverId =
        document.securityDecision.approverId.toString();
    }

    //commanders
    if (document.commanders) {
      document.commanders = document.commanders.map((commander: any) =>
        commander.toString()
      );
    }

    if (document.kartoffelProperties && document.kartoffelProperties.id) {
      document.kartoffelProperties.id =
        document.kartoffelProperties.id.toString();
    }
    this.cleanUnderscoreFields(document);
    this.cleanNullFields(document);
  }

  async deleteRequest(
    deleteRequestReq: IDeleteRequestReq
  ): Promise<ISuccessMessage> {
    try {
      await Request.deleteOne({ _id: deleteRequestReq.id });
      return new SuccessMessage(true);
    } catch (error) {
      throw error;
    }
  }

  async updateRequest(updateRequestReq: IUpdateRequestReq): Promise<IRequest> {
    try {
      let requestUpdate: any = { ...updateRequestReq.requestProperties };
      if (requestUpdate.commanders && requestUpdate.commanders.length == 0) {
        delete requestUpdate["commanders"];
      }
      this.cleanUnderscoreFields(requestUpdate);
      const document: any = await Request.findOneAndUpdate(
        { _id: updateRequestReq.id },
        { $set: requestUpdate },
        { new: true }
      );
      if (document) {
        const documentObj = document.toObject();
        this.turnObjectIdsToStrings(documentObj);
        return documentObj as IRequest;
      } else {
        throw new Error(
          `A request with {_id: ${updateRequestReq.id}} was not found!`
        );
      }
    } catch (error) {
      throw error;
    }
  }

  async createRequest(
    createRequestReq: any,
    type: RequestType
  ): Promise<IRequest> {
    try {
      const request: any = new Request(createRequestReq);
      request.type = type;
      request.createdAt = new Date().getTime();
      const createdCreateRequest = await request.save();
      const document = createdCreateRequest.toObject();
      this.turnObjectIdsToStrings(document);
      return document as IRequest;
    } catch (error) {
      throw error;
    }
  }

  async getAllRequests(
    getAllRequestsReq: IGetAllRequestsReq
  ): Promise<IRequestArray> {
    try {
      const totalCount = await Request.count({});
      const requests: any = await Request.find(
        {},
        {},
        {
          skip: getAllRequestsReq.from - 1,
          limit: getAllRequestsReq.to - getAllRequestsReq.from + 1,
        }
      ).sort([["updatedAt", -1]]);
      if (requests) {
        let documents: any = [];
        for (let i = 0; i < requests.length; i++) {
          const requestObj: any = requests[i].toObject();
          this.turnObjectIdsToStrings(requestObj);
          documents.push(requestObj);
        }
        return new RequestArray(documents, totalCount);
      } else {
        return new RequestArray([], 0);
      }
    } catch (error) {
      throw error;
    }
  }

  async getRequestById(
    getRequestByIdReq: IGetRequestByIdReq
  ): Promise<IRequest> {
    try {
      const request = await Request.findOne({ _id: getRequestByIdReq.id });
      if (request) {
        const document = request.toObject();
        this.turnObjectIdsToStrings(document);
        return document as IRequest;
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
    getRequestsByPersonIdReq: IGetRequestsByPersonIdReq,
    personTypeInRequest: PersonTypeInRequest
  ) {
    try {
      const field =
        personTypeInRequest === PersonTypeInRequest.COMMANDER
          ? "commanders"
          : "submittedBy";
      const totalCount = await Request.count({
        [field]: getRequestsByPersonIdReq.id,
      });
      const requests: any = await Request.find(
        {
          [field]: getRequestsByPersonIdReq.id,
        },
        {},
        {
          skip: getRequestsByPersonIdReq.from - 1,
          limit:
            getRequestsByPersonIdReq.to - getRequestsByPersonIdReq.from + 1,
        }
      ).sort([["updatedAt", -1]]);
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
