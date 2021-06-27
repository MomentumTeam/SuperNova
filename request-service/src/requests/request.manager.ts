import { PersonTypeInRequest } from "../enums/personTypeInRequest.enum";
import {
  DeleteReq,
  GetAllRequestsReq,
  GetRequestByIdReq,
  GetRequestsByPersonIdReq,
  Request,
  RequestArray,
  RequestReq,
  RequestType,
  SuccessMessage,
  UpdateADStatusReq,
  UpdateKartoffelStatusReq,
} from "../interfaces/protoc/proto/requestService";
import { RequestRepository } from "./request.repository";
export class RequestManager {
  private requestRepository: RequestRepository;
  constructor() {
    this.requestRepository = new RequestRepository();
  }

  async updateRequest(updateRequestReq: any): Promise<Request> {
    try {
      return (await this.requestRepository.updateRequest(
        updateRequestReq
      )) as Request;
    } catch (error) {
      throw error;
    }
  }

  async updateKartoffelStatus(
    updateKartoffelStatusReq: UpdateKartoffelStatusReq
  ): Promise<Request> {
    try {
      return (await this.requestRepository.updateKartoffelStatus(
        updateKartoffelStatusReq
      )) as Request;
    } catch (error) {
      throw error;
    }
  }

  async updateADStatus(updateADStatusReq: UpdateADStatusReq): Promise<Request> {
    try {
      return (await this.requestRepository.updateADStatus(
        updateADStatusReq
      )) as Request;
    } catch (error) {
      throw error;
    }
  }

  async deleteRequest(deleteRequestReq: DeleteReq): Promise<SuccessMessage> {
    try {
      return (await this.requestRepository.deleteRequest(
        deleteRequestReq
      )) as SuccessMessage;
    } catch (error) {
      throw error;
    }
  }

  async createRequest(
    createRequest: RequestReq,
    type: RequestType
  ): Promise<Request> {
    try {
      return (await this.requestRepository.createRequest(
        createRequest,
        type
      )) as Request;
    } catch (error) {
      throw error;
    }
  }

  async getAllRequests(
    getAllRequestsReq: GetAllRequestsReq
  ): Promise<RequestArray> {
    try {
      return await this.requestRepository.getAllRequests(getAllRequestsReq);
    } catch (error) {
      throw error;
    }
  }

  async getRequestById(getRequestByIdReq: GetRequestByIdReq): Promise<Request> {
    try {
      return await this.requestRepository.getRequestById(getRequestByIdReq);
    } catch (error) {
      throw error;
    }
  }

  async getRequestsByPersonId(
    getRequestsByPersonIdReq: GetRequestsByPersonIdReq,
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
