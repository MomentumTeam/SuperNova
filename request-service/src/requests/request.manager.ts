import { RequestRepository } from "./request.repository";
import { ICreateOGRequestReq } from "../interfaces/createOGRequest/createOGRequestReq.interface";
import { IGetRequestByIdReq } from "../interfaces/getRequestById/getRequestByIdReq.interface";
import { ICreateOGRequest } from "../interfaces/createOGRequest/createOGRequest.interface";
import { ICreateRoleRequest } from "../interfaces/createRoleRequest/createRoleRequest.interface";
import { ICreateRoleRequestReq } from "../interfaces/createRoleRequest/createRoleRequestReq.interface";
import { IGetRequestsByPersonIdReq } from "../interfaces/getRequestsByPersonId/getRequestsByPersonIdReq.interface";
import { IAssignRoleToEntityRequestReq } from "../interfaces/assignRoleToEntityRequest/assignRoleToEntityRequestReq.interface";
import { IAssignRoleToEntityRequest } from "../interfaces/assignRoleToEntityRequest/assignRoleToEntityRequest.interface";
import { RequestType } from "../enums/requestType.enum";
import { ICreateEntityRequest } from "../interfaces/createEntityRequest/createEntityRequest.interface";
import { ICreateEntityRequestReq } from "../interfaces/createEntityRequest/createEntityRequestReq.interface";
import { PersonTypeInRequest } from "../enums/PersonTypeInRequest.enum";
import { IRenameOGRequestReq } from "../interfaces/renameOGRequest/renameOGRequestReq.interface";
import { IRenameOGRequest } from "../interfaces/renameOGRequest/renameOGRequest.interface";
import { IRenameRoleRequestReq } from "../interfaces/renameRoleRequest/renameRoleRequestReq.interface";
import { IRenameRoleRequest } from "../interfaces/renameRoleRequest/renameRoleRequest.interface";
import { IEditEntityRequestReq } from "../interfaces/editEntityRequest/editEntityRequestReq.interface";
import { IEditEntityRequest } from "../interfaces/editEntityRequest/editEntityRequest.interface";
import { IDeleteOGRequest } from "../interfaces/deleteOGRequest/deleteOGRequest.interface.ts";
import { IDeleteOGRequestReq } from "../interfaces/deleteOGRequest/deleteOGRequestReq.interface";
import { IDeleteRoleRequest } from "../interfaces/deleteRoleRequest/deleteRoleRequest.interface.ts";
import { IDeleteRoleRequestReq } from "../interfaces/deleteRoleRequest/deleteRoleRequestReq.interface";

export class RequestManager {
  private requestRepository: RequestRepository;
  constructor() {
    this.requestRepository = new RequestRepository();
  }

  async editEntityRequest(
    editEntityRequestReq: IEditEntityRequestReq
  ): Promise<IEditEntityRequest> {
    try {
      return (await this.requestRepository.createRequest(
        editEntityRequestReq,
        RequestType.EDIT_ENTITY
      )) as IEditEntityRequest;
    } catch (error) {
      throw error;
    }
  }

  async deleteRoleRequest(
    deleteRoleRequestReq: IDeleteRoleRequestReq
  ): Promise<IDeleteRoleRequest> {
    try {
      return (await this.requestRepository.createRequest(
        deleteRoleRequestReq,
        RequestType.DELETE_ROLE
      )) as IDeleteRoleRequest;
    } catch (error) {
      throw error;
    }
  }

  async deleteOGRequest(
    deleteOGRequestReq: IDeleteOGRequestReq
  ): Promise<IDeleteOGRequest> {
    try {
      return (await this.requestRepository.createRequest(
        deleteOGRequestReq,
        RequestType.DELETE_OG
      )) as IDeleteOGRequest;
    } catch (error) {
      throw error;
    }
  }

  async renameRoleRequest(
    renameRoleRequestReq: IRenameRoleRequestReq
  ): Promise<IRenameRoleRequest> {
    try {
      return (await this.requestRepository.createRequest(
        renameRoleRequestReq,
        RequestType.RENAME_ROLE
      )) as IRenameRoleRequest;
    } catch (error) {
      throw error;
    }
  }

  async renameOGRequest(
    renameOGRequestReq: IRenameOGRequestReq
  ): Promise<IRenameOGRequest> {
    try {
      return (await this.requestRepository.createRequest(
        renameOGRequestReq,
        RequestType.RENAME_OG
      )) as IRenameOGRequest;
    } catch (error) {
      throw error;
    }
  }

  async createEntityRequest(
    createEntityRequestReq: ICreateEntityRequestReq
  ): Promise<ICreateEntityRequest> {
    try {
      return (await this.requestRepository.createRequest(
        createEntityRequestReq,
        RequestType.CREATE_ENTITY
      )) as ICreateEntityRequest;
    } catch (error) {
      throw error;
    }
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

  async getRequestsByPersonId(
    getRequestsByPersonIdReq: IGetRequestsByPersonIdReq,
    personTypeInRequest: PersonTypeInRequest
  ) {
    try {
      return await this.requestRepository.getRequestsByPersonId(
        getRequestsByPersonIdReq,
        personTypeInRequest
      );
    } catch (error) {
      throw error;
    }
  }
}
