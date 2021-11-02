import {
  CanPushToQueueReq,
  CanPushToQueueRes,
  DeleteReq,
  GetRequestByIdReq,
  GetRequestBySerialNumberReq,
  GetRequestsByPersonReq,
  GetRequestsInProgressByDueReq,
  IncrementRetriesReq,
  PersonTypeInRequest,
  personTypeInRequestFromJSON,
  Request,
  RequestArray,
  RequestIdArray,
  RequestReq,
  RequestType,
  SuccessMessage,
  UpdateADStatusReq,
  UpdateApproversReq,
  UpdateApproverDecisionReq,
  UpdateKartoffelStatusReq,
  IsRequestApprovedRes,
  IsRequestApprovedReq,
  PushErrorReq,
  SyncBulkRequestReq,
  GetRequestsUnderBulkReq,
  TransferRequestToApproversReq,
} from '../interfaces/protoc/proto/requestService';
import { RequestRepository } from './request.repository';
export class RequestManager {
  private requestRepository: RequestRepository;
  constructor() {
    this.requestRepository = new RequestRepository();
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

  async getRequestsUnderBulk(
    getRequestsUnderBulkReq: GetRequestsUnderBulkReq
  ): Promise<RequestArray> {
    try {
      return (await this.requestRepository.getRequestsUnderBulk(
        getRequestsUnderBulkReq
      )) as RequestArray;
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

  async transferRequestToApprovers(
    transferRequestToApproverReq: TransferRequestToApproversReq
  ): Promise<Request> {
    try {
      return (await this.requestRepository.transferRequestToApprovers(
        transferRequestToApproverReq
      )) as Request;
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

  async isRequestApproved(
    isRequestApprovedReq: IsRequestApprovedReq
  ): Promise<IsRequestApprovedRes> {
    return (await this.requestRepository.isRequestApproved(
      isRequestApprovedReq
    )) as IsRequestApprovedRes;
  }

  async updateApproverDecision(
    updateDecisionReq: UpdateApproverDecisionReq
  ): Promise<Request> {
    try {
      const approverType: PersonTypeInRequest =
        typeof updateDecisionReq.approverType === typeof ''
          ? personTypeInRequestFromJSON(updateDecisionReq.approverType)
          : updateDecisionReq.approverType;
      return (await this.requestRepository.updateApproverDecision(
        updateDecisionReq,
        approverType
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

  async deleteRequest(deleteRequestReq: DeleteReq): Promise<SuccessMessage> {
    try {
      return (await this.requestRepository.deleteRequest(
        deleteRequestReq
      )) as SuccessMessage;
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

  async updateSuperSecurityApprovers(
    updateApproversReq: UpdateApproversReq
  ): Promise<Request> {
    try {
      return (await this.requestRepository.updateSuperSecurityApprovers(
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

  async pushError(pushErrorReq: PushErrorReq) {
    try {
      return await this.requestRepository.pushError(pushErrorReq);
    } catch (error) {
      throw error;
    }
  }

  async syncBulkRequest(syncBulkRequestReq: SyncBulkRequestReq) {
    try {
      return await this.requestRepository.syncBulkRequest(syncBulkRequestReq);
    } catch (error) {
      throw error;
    }
  }

  async getRequestsByPerson(getRequestsByPersonReq: GetRequestsByPersonReq) {
    try {
      return await this.requestRepository.getRequestsByPerson(
        getRequestsByPersonReq
      );
    } catch (error) {
      throw error;
    }
  }
}
