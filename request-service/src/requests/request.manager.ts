import { RequestRepository } from "./request.repository";
import { ICreateOGRequestReq } from "../interfaces/createOGRequest/createOGRequestReq.interface";
import { IGetRequestByIdReq } from "../interfaces/getRequestById/getRequestByIdReq.interface";
import { ICreateOGRequest } from "../interfaces/createOGRequest/createOGRequest.interface";
import { ICreateRoleRequest } from "../interfaces/createRoleRequest/createRoleRequest.interface";
import { ICreateRoleRequestReq } from "../interfaces/createRoleRequest/createRoleRequestReq.interface";
import { IGetRequestsByCommanderReq } from "../interfaces/getRequestsByCommander/getRequestsByCommanderReq.interface";
import { IAssignRoleToEntityRequestReq } from "../interfaces/assignRoleToEntityRequest/createOGRequestReq.interface";
import { IAssignRoleToEntityRequest } from "../interfaces/assignRoleToEntityRequest/assignRoleToEntityRequest.interface";
import { RequestType } from "../enums/requestType.enum";

export class RequestManager {
  private requestRepository: RequestRepository;
  constructor() {
    this.requestRepository = new RequestRepository();
  }
  async createOGRequest(
    createOGRequestReq: ICreateOGRequestReq
  ): Promise<ICreateOGRequest> {
    try {
      return (await this.requestRepository.createRequest(
        createOGRequestReq,
        RequestType.CREATE_OG
      )) as ICreateOGRequest;
    } catch (error) {
      throw error;
    }
  }

  async createRoleRequest(
    createRoleRequestReq: ICreateRoleRequestReq
  ): Promise<ICreateRoleRequest> {
    try {
      // return await this.requestRepository.createRoleRequest(
      //   createRoleRequestReq
      // );
      return (await this.requestRepository.createRequest(
        createRoleRequestReq,
        RequestType.CREATE_ROLE
      )) as ICreateRoleRequest;
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

  async assignRoleToEntityRequest(
    assignRoleToEntityRequestReq: IAssignRoleToEntityRequestReq
  ): Promise<IAssignRoleToEntityRequest> {
    try {
      return (await this.requestRepository.createRequest(
        assignRoleToEntityRequestReq,
        RequestType.ASSIGN_ROLE_TO_ENTITY
      )) as IAssignRoleToEntityRequest;
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
