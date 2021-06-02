import { RequestRepository } from "./request.repository";
import { ICreateHierarchyRequestReq } from "../interfaces/createHierarchyRequest/createHierarchyRequestReq.interface";
import { IGetRequestByIdReq } from "../interfaces/getRequestById/getRequestByIdReq.interface";
import { ICreateHierarchyRequest } from "../interfaces/createHierarchyRequest/createHierarchyRequest.interface";
import { ICreateRoleRequest } from "../interfaces/createRoleRequest/createRoleRequest.interface";
import { ICreateRoleRequestReq } from "../interfaces/createRoleRequest/createRoleRequestReq.interface";

export class RequestManager {
  private requestRepository: RequestRepository;
  constructor() {
    this.requestRepository = new RequestRepository();
  }
  async createHierarchyRequest(
    createHierarchyRequestReq: ICreateHierarchyRequestReq
  ): Promise<ICreateHierarchyRequest> {
    try {
      return await this.requestRepository.createHierarchyRequest(
        createHierarchyRequestReq
      );
    } catch (error) {
      throw error;
    }
  }

  async createRoleRequest(
    createRoleRequestReq: ICreateRoleRequestReq
  ): Promise<ICreateRoleRequest> {
    try {
      return await this.requestRepository.createRoleRequest(
        createRoleRequestReq
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
