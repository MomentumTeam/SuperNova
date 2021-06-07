import * as C from "../config";
import { logger } from "../logger";
import * as mongoose from "mongoose";
import { CreateOGRequest } from "../models/createOG.model";
import { ICreateOGRequestReq } from "../interfaces/createOGRequest/createOGRequestReq.interface";
import { IGetRequestByIdReq } from "../interfaces/getRequestById/getRequestByIdReq.interface";
import { ICreateOGRequest } from "../interfaces/createOGRequest/createOGRequest.interface";
import { ICreateRoleRequestReq } from "../interfaces/createRoleRequest/createRoleRequestReq.interface";
import { ICreateRoleRequest } from "../interfaces/createRoleRequest/createRoleRequest.interface";
import { Request } from "../models/baseRequest.model";
import { GeneralRequest } from "../models/generalRequest.model";
import { CreateRoleRequest } from "../models/createRole.model";
import { IGetRequestsByPersonIdReq } from "../interfaces/getRequestsByPersonId/getRequestsByPersonIdReq.interface";
import { IRequest } from "../interfaces/request.interface";
import { RequestType } from "../enums/requestType.enum";
import { PersonTypeInRequest } from "../enums/PersonTypeInRequest.enum";
import { EntityType } from "../enums/entityType.enum";
import { ServiceType } from "../enums/serviceType.enum";

export class RequestRepository {
  private turnObjectIdsToStrings(document: any): void {
    if (document._id) {
      document._id = document._id.toString();
    }
    if (document.parent && document.parent.id) {
      document.parent.id = document.parent.id.toString();
    }
    if (document.submittedBy) {
      document.submittedBy = document.submittedBy.toString();
    }
    if (document.commanders) {
      document.commanders = document.commanders.map((commander: any) =>
        commander.toString()
      );
    }
    if (document.commanderDecision && document.commanderDecision.approverId) {
      document.commanderDecision.approverId =
        document.commanderDecision.approverId.toString();
    }
    if (document.securityDecision && document.securityDecision.approverId) {
      document.securityDecision.approverId =
        document.securityDecision.approverId.toString();
    }
    if (document.entity && document.entity.id) {
      document.entity.id = document.entity.id.toString();
    }
    if (document.generatedKartoffelId) {
      document.generatedKartoffelId = document.generatedKartoffelId.toString();
    }
    for (let key in document) {
      if (key.startsWith("_") && key !== "_id") {
        delete document[key];
      }
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

  async createHierarchyRequest(
    createHierarchyRequestReq: ICreateOGRequestReq
  ): Promise<ICreateOGRequest> {
    try {
      const createHierarchyRequest = new CreateOGRequest(
        createHierarchyRequestReq
      );
      const createdCreateHierarchyRequest = await createHierarchyRequest.save();
      const document = createdCreateHierarchyRequest.toObject();
      this.turnObjectIdsToStrings(document);
      return document as ICreateOGRequest;
    } catch (error) {
      throw error;
    }
  }

  async createRoleRequest(
    createRoleRequestReq: ICreateRoleRequestReq
  ): Promise<ICreateRoleRequest> {
    try {
      const createRoleRequest = new CreateRoleRequest(createRoleRequestReq);
      const createdCreateRoleRequest = await createRoleRequest.save();
      const document = createdCreateRoleRequest.toObject();
      this.turnObjectIdsToStrings(document);
      return document as ICreateRoleRequest;
    } catch (error) {
      throw error;
    }
  }

  async getRequestById(getRequestByIdReq: IGetRequestByIdReq) {
    try {
      const request = await Request.findOne(getRequestByIdReq);
      if (request) {
        const document = request.toObject();
        this.turnObjectIdsToStrings(document);
        return document;
      } else {
        return null;
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
      );
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
