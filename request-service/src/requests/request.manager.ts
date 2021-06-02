import { RequestRepository } from "./request.repository";
import { ICreateHierarchyRequestReq } from "../interfaces/createHierarchyRequest/createHierarchyRequestReq.interface";
import { IGetRequestByIdReq } from "../interfaces/getRequestByIdReq.interface";
import { ICreateHierarchyRequest } from "../interfaces/createHierarchyRequest/createHierarchyRequest.interface";

export class RequestManager {
  private requestRepository: RequestRepository;
  constructor() {
    this.requestRepository = new RequestRepository();
  }
  async createHierarchy(
    createHierarchyRequestReq: ICreateHierarchyRequestReq
  ): Promise<ICreateHierarchyRequest> {
    try {
      return await this.requestRepository.createHierarchy(
        createHierarchyRequestReq
      );
    } catch (error) {
      throw error;
    }
  }
  async getRequestById(getRequestByIdReq: IGetRequestByIdReq) {
    try {
      return await this.requestRepository.getRequestById(getRequestByIdReq);
    } catch (error) {
      throw error;
    }
  }
}
