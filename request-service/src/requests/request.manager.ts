import { PersonTypeInRequest } from "../enums/personTypeInRequest.enum";
import { RequestType } from "../enums/requestType.enum";
import { IDeleteRequestReq } from "../interfaces/deleteRequest/deleteRequestReq.interface";
import { IGetAllRequestsReq } from "../interfaces/getAllRequests/getAllRequestsReq.interface";
import { IGetRequestByIdReq } from "../interfaces/getRequestById/getRequestByIdReq.interface";
import { IGetRequestsByPersonIdReq } from "../interfaces/getRequestsByPersonId/getRequestsByPersonIdReq.interface";
import { IRequest } from "../interfaces/request.interface";
import { IRequestArray } from "../interfaces/requestArray.interface";
import { IRequestReq } from "../interfaces/requestReq.interface";
import { ISuccessMessage } from "../interfaces/successMessage.interface";
import { IUpdateADStatusReq } from "../interfaces/updateADStatus/updateADStatus.interface";
import { IUpdateKartoffelStatusReq } from "../interfaces/updateKartoffelStatus/updateKartoffelStatusReq.interface";
import { RequestRepository } from "./request.repository";
export class RequestManager {
  private requestRepository: RequestRepository;
  constructor() {
    this.requestRepository = new RequestRepository();
  }

  async updateRequest(updateRequestReq: any): Promise<IRequest> {
    try {
      return (await this.requestRepository.updateRequest(
        updateRequestReq
      )) as IRequest;
    } catch (error) {
      throw error;
    }
  }

  async updateKartoffelStatus(
    updateKartoffelStatusReq: IUpdateKartoffelStatusReq
  ): Promise<IRequest> {
    try {
      return (await this.requestRepository.updateKartoffelStatus(
        updateKartoffelStatusReq
      )) as IRequest;
    } catch (error) {
      throw error;
    }
  }

  async updateADStatus(
    updateADStatusReq: IUpdateADStatusReq
  ): Promise<IRequest> {
    try {
      return (await this.requestRepository.updateADStatus(
        updateADStatusReq
      )) as IRequest;
    } catch (error) {
      throw error;
    }
  }

  async deleteRequest(
    deleteRequestReq: IDeleteRequestReq
  ): Promise<ISuccessMessage> {
    try {
      return (await this.requestRepository.deleteRequest(
        deleteRequestReq
      )) as ISuccessMessage;
    } catch (error) {
      throw error;
    }
  }

  async createRequest(
    createRequest: IRequestReq,
    type: RequestType
  ): Promise<IRequest> {
    try {
      return (await this.requestRepository.createRequest(
        createRequest,
        type
      )) as IRequest;
    } catch (error) {
      throw error;
    }
  }

  async getAllRequests(
    getAllRequestsReq: IGetAllRequestsReq
  ): Promise<IRequestArray> {
    try {
      return await this.requestRepository.getAllRequests(getAllRequestsReq);
    } catch (error) {
      throw error;
    }
  }

  async getRequestById(
    getRequestByIdReq: IGetRequestByIdReq
  ): Promise<IRequest> {
    try {
      return await this.requestRepository.getRequestById(getRequestByIdReq);
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
