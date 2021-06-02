import * as C from "../config";
import { logger } from "../logger";
import { CreateHierarchyRequest } from "../models/createHierarchy.model";
import { ICreateHierarchyRequestReq } from "../interfaces/createHierarchyRequest/createHierarchyRequestReq.interface";
import { IGetRequestByIdReq } from "../interfaces/getRequestByIdReq.interface";
import { ICreateHierarchyRequest } from "../interfaces/createHierarchyRequest/createHierarchyRequest.interface";

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
  }

  async createHierarchy(
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
  async getRequestById(getRequestByIdReq: IGetRequestByIdReq) {
    try {
      const request = await CreateHierarchyRequest.findOne(getRequestByIdReq);
      return request;
    } catch (error) {
      throw error;
    }
  }
}
