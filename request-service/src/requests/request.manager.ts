import { PersonTypeInRequest } from '../enums/personTypeInRequest.enum';
import {
  CanPushToQueueReq,
  CanPushToQueueRes,
  DeleteReq,
  GetAllRequestsReq,
  GetRequestByIdReq,
  GetRequestBySerialNumberReq,
  GetRequestsByIdentifierReq,
  GetRequestsByPersonIdReq,
  GetRequestsInProgressByDueReq,
  IncrementRetriesReq,
  Request,
  RequestArray,
  RequestIdArray,
  RequestReq,
  RequestType,
  SearchRequestsByDisplayNameReq,
  SuccessMessage,
  UpdateADStatusReq,
  UpdateApproversReq,
  UpdateDecisionReq,
  UpdateKartoffelStatusReq,
} from '../interfaces/protoc/proto/requestService';
import { RequestRepository } from './request.repository';
export class RequestManager {
  private requestRepository: RequestRepository;
  constructor() {
    this.requestRepository = new RequestRepository();
  }

  async canPushToKartoffelQueue(
    CanPushToQueueReq: CanPushToQueueReq
  ): Promise<CanPushToQueueRes> {
    try {
      return (await this.requestRepository.canPushToKartoffelQueue(
        CanPushToQueueReq
      )) as CanPushToQueueRes;
    } catch (error) {
      throw error;
    }
  }

  async incrementKartoffelRetries(
    incrementRetriesReq: IncrementRetriesReq
  ): Promise<Request> {
    try {
      return (await this.requestRepository.incrementKartoffelRetries(
        incrementRetriesReq
      )) as Request;
    } catch (error) {
      throw error;
    }
  }

  async getRequestsInProgressByDue(
    getRequestsInProgressByDueReq: GetRequestsInProgressByDueReq
  ): Promise<RequestArray> {
    try {
      return (await this.requestRepository.getRequestsInProgressByDue(
        getRequestsInProgressByDueReq
      )) as RequestArray;
    } catch (error) {
      throw error;
    }
  }

  async getRequestIdsInProgressByDue(
    getRequestsInProgressByDueReq: GetRequestsInProgressByDueReq
  ): Promise<RequestIdArray> {
    try {
      return (await this.requestRepository.getRequestIdsInProgressByDue(
        getRequestsInProgressByDueReq
      )) as RequestIdArray;
    } catch (error) {
      throw error;
    }
  }

  async incrementADRetries(
    incrementRetriesReq: IncrementRetriesReq
  ): Promise<Request> {
    try {
      return (await this.requestRepository.incrementADRetries(
        incrementRetriesReq
      )) as Request;
    } catch (error) {
      throw error;
    }
  }

  async updateApproverDecision(
    updateDecisionReq: UpdateDecisionReq,
    personType: PersonTypeInRequest
  ): Promise<Request> {
    try {
      return (await this.requestRepository.updateApproverDecision(
        updateDecisionReq,
        personType
      )) as Request;
    } catch (error) {
      throw error;
    }
  }

  async canPushToADQueue(
    CanPushToQueueReq: CanPushToQueueReq
  ): Promise<CanPushToQueueRes> {
    try {
      return (await this.requestRepository.canPushToADQueue(
        CanPushToQueueReq
      )) as CanPushToQueueRes;
    } catch (error) {
      throw error;
    }
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

  async searchRequestsByDisplayName(
    searchRequestsByDisplayName: SearchRequestsByDisplayNameReq,
    personType: PersonTypeInRequest
  ): Promise<RequestArray> {
    try {
      return (await this.requestRepository.searchRequestsByDisplayName(
        searchRequestsByDisplayName,
        personType
      )) as RequestArray;
    } catch (error) {
      throw error;
    }
  }

  async getRequestsByIdentifier(
    getRequestsByIdentifier: GetRequestsByIdentifierReq,
    personType: PersonTypeInRequest
  ): Promise<RequestArray> {
    try {
      return (await this.requestRepository.getRequestsByIdentifier(
        getRequestsByIdentifier,
        personType
      )) as RequestArray;
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

  async updateCommanders(
    updateApproversReq: UpdateApproversReq
  ): Promise<Request> {
    try {
      return (await this.requestRepository.updateCommanders(
        updateApproversReq
      )) as Request;
    } catch (error) {
      throw error;
    }
  }

  async updateSecurityApprovers(
    updateApproversReq: UpdateApproversReq
  ): Promise<Request> {
    try {
      return (await this.requestRepository.updateSecurityApprovers(
        updateApproversReq
      )) as Request;
    } catch (error) {
      throw error;
    }
  }

  async getRequestBySerialNumber(
    getRequestBySerialNumberReq: GetRequestBySerialNumberReq
  ) {
    try {
      return await this.requestRepository.getRequestBySerialNumber(
        getRequestBySerialNumberReq
      );
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
