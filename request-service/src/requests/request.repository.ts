import { IGetRequestByIdReq } from "../interfaces/getRequestById/getRequestByIdReq.interface";
import { Request } from "../models/baseRequest.model";
import { GeneralRequest } from "../models/generalRequest.model";
import { IGetRequestsByPersonIdReq } from "../interfaces/getRequestsByPersonId/getRequestsByPersonIdReq.interface";
import { IRequest } from "../interfaces/request.interface";
import { RequestType } from "../enums/requestType.enum";
import { PersonTypeInRequest } from "../enums/PersonTypeInRequest.enum";
import { EntityType } from "../enums/entityType.enum";
import { ServiceType } from "../enums/serviceType.enum";
import { IDeleteRequestReq } from "../interfaces/deleteRequest/deleteRequestReq.interface";
import {
  DeleteRequestRes,
  IDeleteRequestRes,
} from "../interfaces/deleteRequest/deleteRequestRes.interface";
import { IGetAllRequestsReq } from "../interfaces/getAllRequests/getAllRequestsReq.interface";

export class RequestRepository {
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

    //ogProperties
    if (document.ogProperties && document.ogProperties.id) {
      document.ogProperties.id = document.ogProperties.id.toString();
    }

    if (
      document.ogProperties &&
      document.ogProperties.parent &&
      document.ogProperties.parent.id
    ) {
      document.ogProperties.parent.id =
        document.ogProperties.parent.id.toString();
    }

    //createdOG
    if (document.createdOG && document.createdOG.id) {
      document.createdOG.id = document.createdOG.id.toString();
    }
    if (
      document.createdOG &&
      document.createdOG.parent &&
      document.createdOG.parent.id
    ) {
      document.createdOG.parent.id = document.createdOG.parent.id.toString();
    }
    //roleProperties - no need
    //cratedRole - no need
    //createdDI - no need

    //entity
    if (document.entity && document.entity.id) {
      document.entity.id = document.entity.id.toString();
    }
    //role - no need
    //needToDisconnectDI - no need
    //digitalIdentityToDisconnect - no need

    //entityProperties
    if (document.entityProperties && document.entityProperties.id) {
      document.entityProperties.id = document.entityProperties.id.toString();
    }

    //createdEntity
    if (document.entityProperties && document.entityProperties.id) {
      document.entityProperties.id = document.entityProperties.id.toString();
    }

    //organizationGroup

    if (document.organizationGroup && document.organizationGroup.id) {
      document.organizationGroup.id = document.organizationGroup.id.toString();
    }

    //newName and newRole - no need

    let keys: any = Object.keys(document);

    for (let key of keys) {
      if (key.startsWith("_") && key !== "_id") {
        delete document[key];
      }
    }

    if (document.ogProperties) {
      keys = Object.keys(document.ogProperties);

      for (let key of keys) {
        if (key.startsWith("_") && key !== "_id") {
          delete document["ogProperties"][key];
        }
      }
    }
  }

  async deleteRequest(
    deleteRequestReq: IDeleteRequestReq
  ): Promise<IDeleteRequestRes> {
    try {
      await GeneralRequest.deleteOne({ _id: deleteRequestReq.id });
      return new DeleteRequestRes(true);
    } catch (error) {
      throw error;
    }
  }

  async updateRequest(updateRequestReq: any): Promise<IRequest> {
    try {
      const document: any = await GeneralRequest.findOneAndUpdate(
        { _id: updateRequestReq.id },
        { $set: updateRequestReq.requestProperties },
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
      if (type == RequestType.CREATE_ENTITY) {
        if (!createRequestReq.entityType) {
          createRequestReq.entityType = EntityType.CIVILIAN;
        }
        if (!createRequestReq.serviceType) {
          createRequestReq.serviceType = ServiceType.CIVILIAN;
        }
      }
      const request: any = new GeneralRequest(createRequestReq);
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

  async getAllRequests(getAllRequestsReq: IGetAllRequestsReq) {
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

  async getRequestById(getRequestByIdReq: IGetRequestByIdReq) {
    try {
      const request = await Request.findOne({ _id: getRequestByIdReq.id });
      if (request) {
        const document = request.toObject();
        this.turnObjectIdsToStrings(document);
        return document;
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
