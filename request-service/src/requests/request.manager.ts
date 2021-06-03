import { RequestRepository } from "./request.repository";
import { ICreateOGRequestReq } from "../interfaces/createOGRequest/createOGRequestReq.interface";
import { IGetRequestByIdReq } from "../interfaces/getRequestById/getRequestByIdReq.interface";
import { ICreateOGRequest } from "../interfaces/createOGRequest/createOGRequest.interface";
import { ICreateRoleRequest } from "../interfaces/createRoleRequest/createRoleRequest.interface";
import { ICreateRoleRequestReq } from "../interfaces/createRoleRequest/createRoleRequestReq.interface";
import { IGetRequestsByCommanderReq } from "../interfaces/getRequestsByCommander/getRequestsByCommanderReq.interface";

export class RequestManager {
  private requestRepository: RequestRepository;
  constructor() {
    this.requestRepository = new RequestRepository();
  }
  async createHierarchyRequest(
    createHierarchyRequestReq: ICreateOGRequestReq
  ): Promise<ICreateOGRequest> {
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

  async getRequestsByCommander(
    getRequestsByCommanderReq: IGetRequestsByCommanderReq
  ) {
    try {
      return await this.requestRepository.getRequestsByCommander(
        getRequestsByCommanderReq
      );
    } catch (error) {
      throw error;
    }
  }
}
