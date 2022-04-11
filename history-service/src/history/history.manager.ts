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
    AreAllSubRequestsFinishedReq,
    AreAllSubRequestsFinishedRes,
    SendSubmissionMailReq,
    RemoveApproverFromApproversReq,
    HasSecurityAdminReq,
    GetDoneRequestsByRoleIdReq,
    GetDoneRequestsByGroupIdReq,
    GetDoneRequestsByEntityIdReq,
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



}