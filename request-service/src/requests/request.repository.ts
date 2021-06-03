import * as C from "../config";
import { logger } from "../logger";
import { CreateHierarchyRequest } from "../models/createHierarchy.model";
import { ICreateHierarchyRequestReq } from "../interfaces/createHierarchyRequest/createHierarchyRequestReq.interface";
import { IGetRequestByIdReq } from "../interfaces/getRequestById/getRequestByIdReq.interface";
import { ICreateHierarchyRequest } from "../interfaces/createHierarchyRequest/createHierarchyRequest.interface";
import { ICreateRoleRequestReq } from "../interfaces/createRoleRequest/createRoleRequestReq.interface";
import { ICreateRoleRequest } from "../interfaces/createRoleRequest/createRoleRequest.interface";
import { Request } from "../models/request.model";

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
  }

  async createHierarchyRequest(
    createHierarchyRequestReq: ICreateHierarchyRequestReq
  ): Promise<ICreateHierarchyRequest> {
    try {
      const createHierarchyRequest = new CreateHierarchyRequest(
        createHierarchyRequestReq
      );
      const createdCreateHierarchyRequest = await createHierarchyRequest.save();
      const document = createdCreateHierarchyRequest.toObject();
      this.turnObjectIdsToStrings(document);
      return document as ICreateHierarchyRequest;
    } catch (error) {
      throw error;
    }
  }

  async createRoleRequest(
    createRoleRequestReq: ICreateRoleRequestReq
  ): Promise<ICreateRoleRequest> {
    try {
      const createRoleRequest = new CreateHierarchyRequest(
        createRoleRequestReq
      );
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
      return request;
    } catch (error) {
      throw error;
    }
  }
}
