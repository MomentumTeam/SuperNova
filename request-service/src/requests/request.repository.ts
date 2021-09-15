import {
  ApproverType,
  approverTypeFromJSON,
  CanPushToQueueReq,
  CanPushToQueueRes,
  Decision,
  decisionFromJSON,
  DeleteReq,
  GetAllRequestsReq,
  GetRequestByIdReq,
  GetRequestBySerialNumberReq,
  GetRequestsByPersonReq,
  GetRequestsInProgressByDueReq,
  IncrementRetriesReq,
  IsRequestApprovedReq,
  IsRequestApprovedRes,
  PersonInfoType,
  PersonTypeInRequest,
  Request,
  RequestArray,
  RequestIdArray,
  RequestStatus,
  requestStatusToJSON,
  RequestType,
  requestTypeToJSON,
  SearchRequestsByDisplayNameReq,
  StageStatus,
  stageStatusFromJSON,
  SuccessMessage,
  UpdateADStatusReq,
  UpdateApproversReq,
  UpdateApproverDecisionReq,
  UpdateKartoffelStatusReq,
  stageStatusToJSON,
} from '../interfaces/protoc/proto/requestService';
import { createNotifications } from '../services/notificationHelper';
import * as C from '../config';
import { RequestModel } from '../models/request.model';
import {
  cleanUnderscoreFields,
  turnObjectIdsToStrings,
} from '../services/requestHelper';
import { NotificationType } from '../interfaces/protoc/proto/notificationService';
import { getIdentifierQuery, getIdQuery } from '../utils/query';
import {
  retrieveTeaByUnit,
  retrieveUPNByEntityId,
} from '../services/teaHelper';

export class RequestRepository {
  async createRequest(
    createRequestReq: any,
    type: RequestType
  ): Promise<Request> {
    try {
      if (
        type === RequestType.CREATE_ROLE &&
        createRequestReq.kartoffelParams.unit
      ) {
        const tea = await retrieveTeaByUnit(
          createRequestReq.kartoffelParams.unit
        );
        createRequestReq.kartoffelParams.roleId = tea;
        createRequestReq.kartoffelParams.uniqueId = tea;
        createRequestReq.kartoffelParams.mail = tea;
        createRequestReq.adParams.samAccountName = tea;
      } else if (
        type === RequestType.ASSIGN_ROLE_TO_ENTITY &&
        !createRequestReq.adParams.upn
      ) {
        createRequestReq.adParams.upn = await retrieveUPNByEntityId(
          createRequestReq.kartoffelParams.id
        );
      }
      const request: any = new RequestModel(createRequestReq);
      this.setNeedApproversDecisionsValues(request, type);
      request.type = requestTypeToJSON(type);
      const createdCreateRequest = await request.save();
      const document = createdCreateRequest.toObject();
      turnObjectIdsToStrings(document);
      await createNotifications(NotificationType.REQUEST_SUBMITTED, document);
      return document as Request;
    } catch (error) {
      throw error;
    }
  }

  async canPushToKartoffelQueue(
    canPushToQueueReq: CanPushToQueueReq
  ): Promise<CanPushToQueueRes> {
    try {
      const isRequestApprovedRes = await this.isRequestApproved({
        id: canPushToQueueReq.id,
      });
      const request = await this.getRequestById({ id: canPushToQueueReq.id });
      const due = request.due;
      let kartoffelFailedRetries = request.kartoffelStatus?.failedRetries;
      if (!kartoffelFailedRetries) {
        kartoffelFailedRetries = 0;
      }
      let kartoffelStatus: any = request.kartoffelStatus?.status;
      kartoffelStatus =
        typeof kartoffelStatus === typeof ''
          ? stageStatusFromJSON(kartoffelStatus)
          : kartoffelStatus;

      if (
        isRequestApprovedRes.isRequestApproved &&
        due <= new Date().getTime() &&
        kartoffelFailedRetries < C.maxQueueRetries &&
        kartoffelStatus != StageStatus.STAGE_FAILED
      ) {
        return { canPushToQueue: true };
      } else {
        return { canPushToQueue: false };
      }
    } catch (error) {
      throw error;
    }
  }

  async isRequestApproved(
    isRequestApprovedReq: IsRequestApprovedReq
  ): Promise<IsRequestApprovedRes> {
    try {
      const request = await this.getRequestById({
        id: isRequestApprovedReq.id,
      });
      const needSecurityDecision = request.needSecurityDecision;
      const needSuperSecurityDecision = request.needSuperSecurityDecision;
      let commanderDecision: any = request.commanderDecision?.decision;
      commanderDecision =
        typeof commanderDecision === typeof ''
          ? decisionFromJSON(commanderDecision)
          : commanderDecision;
      let securityDecision: any = request.securityDecision?.decision;
      securityDecision =
        typeof securityDecision === typeof ''
          ? decisionFromJSON(securityDecision)
          : securityDecision;
      let superSecurityDecision: any = request.superSecurityDecision?.decision;
      superSecurityDecision =
        typeof superSecurityDecision === typeof ''
          ? decisionFromJSON(superSecurityDecision)
          : superSecurityDecision;
      if (
        commanderDecision === Decision.APPROVED &&
        (!needSecurityDecision || securityDecision === Decision.APPROVED) &&
        (!needSuperSecurityDecision ||
          superSecurityDecision === Decision.APPROVED)
      ) {
        return { isRequestApproved: true };
      } else {
        return { isRequestApproved: false };
      }
    } catch (error) {
      throw error;
    }
  }

  async updateApproverDecision(
    updateDecisionReq: UpdateApproverDecisionReq,
    approverType: PersonTypeInRequest
  ): Promise<Request> {
    try {
      let updateQuery: any = {
        id: updateDecisionReq.id,
        requestProperties: {},
      };
      let approverField;
      switch (approverType) {
        case PersonTypeInRequest.COMMANDER_APPROVER:
          approverField = 'commanderDecision';
          break;
        case PersonTypeInRequest.SECURITY_APPROVER:
          approverField = 'securityDecision';
          break;
        default:
          // PersonTypeInRequest.SUPER_SECURITY_APPROVER
          approverField = 'superSecurityDecision';
          break;
      }
      updateQuery.requestProperties[approverField] =
        updateDecisionReq.approverDecision;
      let updatedRequest = await this.updateRequest(updateQuery);

      let approvingNotificationType: any = undefined,
        requestStatusNotificationType: any = undefined;
      let newRequestStatus: any = undefined;
      let decision =
        typeof updateDecisionReq.approverDecision?.decision === typeof ''
          ? decisionFromJSON(updateDecisionReq.approverDecision?.decision)
          : updateDecisionReq.approverDecision?.decision;

      if (decision === Decision.DENIED) {
        newRequestStatus = RequestStatus.DECLINED;
      } else if (await this.isRequestApproved({ id: updateDecisionReq.id })) {
        newRequestStatus = RequestStatus.IN_PROGRESS;
      }
      if (newRequestStatus) {
        updatedRequest = await this.updateRequest({
          id: updateDecisionReq.id,
          requestProperties: { status: requestStatusToJSON(newRequestStatus) },
        });
      }

      if (decision === Decision.APPROVED) {
        if (approverType === PersonTypeInRequest.COMMANDER_APPROVER) {
          approvingNotificationType = NotificationType.REQUEST_APPROVED_1;
        } else if (approverType === PersonTypeInRequest.SECURITY_APPROVER) {
          approvingNotificationType = NotificationType.REQUEST_APPROVED_2;
        } else {
          approvingNotificationType = NotificationType.REQUEST_APPROVED_3;
        }
      } else if (decision === Decision.DENIED) {
        if (approverType === PersonTypeInRequest.COMMANDER_APPROVER) {
          approvingNotificationType = NotificationType.REQUEST_DECLINED_1;
        } else if (approverType === PersonTypeInRequest.SECURITY_APPROVER) {
          approvingNotificationType = NotificationType.REQUEST_DECLINED_2;
        } else {
          approvingNotificationType = NotificationType.REQUEST_DECLINED_3;
        }
      }
      if (approvingNotificationType) {
        await createNotifications(approvingNotificationType, updatedRequest);
        if (newRequestStatus) {
          requestStatusNotificationType =
            newRequestStatus === RequestStatus.IN_PROGRESS
              ? NotificationType.REQUEST_IN_PROGRESS
              : NotificationType.REQUEST_DECLINED;
          await createNotifications(
            requestStatusNotificationType,
            updatedRequest
          );
        }
      }
      return updatedRequest;
    } catch (error) {
      throw error;
    }
  }

  async incrementKartoffelRetries(
    incrementRetriesReq: IncrementRetriesReq
  ): Promise<Request> {
    try {
      let request: Request = await this.getRequestById(
        incrementRetriesReq as GetRequestByIdReq
      );
      let kartoffelStatus: any = request.kartoffelStatus;
      if (!kartoffelStatus) {
        kartoffelStatus = {
          status: stageStatusToJSON(StageStatus.STAGE_IN_PROGRESS),
          message: '',
          failedRetries: 0,
          createdId: '',
        };
      } else if (!kartoffelStatus.failedRetries) {
        kartoffelStatus.failedRetries = 0;
      }
      if (kartoffelStatus.failedRetries > C.maxQueueRetries) {
        throw new Error(
          `request reached the highest allowed number of retries`
        );
      } else {
        kartoffelStatus.failedRetries = kartoffelStatus.failedRetries + 1;
        const updateQuery = {
          id: incrementRetriesReq.id,
          requestProperties: { kartoffelStatus: kartoffelStatus },
        };
        const updatedRequest = await this.updateRequest(updateQuery);
        return updatedRequest;
      }
    } catch (error) {
      throw error;
    }
  }

  async incrementADRetries(
    incrementRetriesReq: IncrementRetriesReq
  ): Promise<Request> {
    try {
      let request: Request = await this.getRequestById(
        incrementRetriesReq as GetRequestByIdReq
      );
      let adStatus: any = request.adStatus;
      if (!adStatus) {
        adStatus = {
          status: stageStatusToJSON(StageStatus.STAGE_IN_PROGRESS),
          message: '',
          failedRetries: 0,
        };
      } else if (!adStatus.failedRetries) {
        adStatus.failedRetries = 0;
      }
      if (adStatus.failedRetries > C.maxQueueRetries) {
        throw new Error(
          `request reached the highest allowed number of retries`
        );
      } else {
        adStatus.failedRetries = adStatus.failedRetries + 1;
        const updateQuery = {
          id: incrementRetriesReq.id,
          requestProperties: { adStatus: adStatus },
        };
        const updatedRequest = await this.updateRequest(updateQuery);
        return updatedRequest;
      }
    } catch (error) {
      throw error;
    }
  }

  async canPushToADQueue(
    canPushToQueueReq: CanPushToQueueReq
  ): Promise<CanPushToQueueRes> {
    try {
      const request = await this.getRequestById({ id: canPushToQueueReq.id });
      let kartoffelStatus: any = request.kartoffelStatus?.status;
      kartoffelStatus =
        typeof kartoffelStatus === typeof ''
          ? stageStatusFromJSON(kartoffelStatus)
          : kartoffelStatus;
      let adStatus: any = request.adStatus?.status;
      adStatus =
        typeof adStatus === typeof ''
          ? stageStatusFromJSON(adStatus)
          : adStatus;
      let adFailedRetries = request.adStatus?.failedRetries;
      if (!adFailedRetries) {
        adFailedRetries = 0;
      }

      if (
        kartoffelStatus === StageStatus.STAGE_DONE &&
        adStatus != StageStatus.STAGE_FAILED &&
        adFailedRetries < C.maxQueueRetries
      ) {
        return { canPushToQueue: true };
      } else {
        return { canPushToQueue: false };
      }
    } catch (error) {
      throw error;
    }
  }

  async getRequestsByQuery(
    query: any,
    expanded: boolean,
    from?: number,
    to?: number
  ): Promise<any> {
    try {
      const pagination =
        from && to
          ? {
              skip: from - 1,
              limit: to - from + 1,
            }
          : {};

      const totalCount = await RequestModel.count(query);
      let requests: any;
      if (!expanded) {
        requests = await RequestModel.find(query, {}, pagination)
          .sort([['updatedAt', -1]])
          .distinct('_id');
        requests = requests.map((requestId: any) => requestId.toString());
        return { requestIds: requests, count: totalCount };
      } else {
        requests = await RequestModel.find(query, {}, pagination).sort([
          ['updatedAt', -1],
        ]);
      }

      if (requests) {
        let documents: any = [];
        for (let i = 0; i < requests.length; i++) {
          const requestObj: any = requests[i].toObject();
          turnObjectIdsToStrings(requestObj);
          documents.push(requestObj);
        }

        return {
          requests: documents,
          totalCount: totalCount,
        };
      } else {
        return {
          requests: [],
          totalCount: 0,
        };
      }
    } catch (error) {
      throw error;
    }
  }

  async getRequestsInProgressByDue(
    getRequestsInProgressByDueReq: GetRequestsInProgressByDueReq
  ): Promise<RequestArray> {
    try {
      const due: number = getRequestsInProgressByDueReq.due;
      const requestArray = await this.getRequestsByQuery(
        {
          due: { $lte: due },
          status: requestStatusToJSON(RequestStatus.IN_PROGRESS),
        },
        true
      );
      return requestArray as RequestArray;
    } catch (error) {
      throw error;
    }
  }

  async getRequestIdsInProgressByDue(
    getRequestsInProgressByDueReq: GetRequestsInProgressByDueReq
  ): Promise<RequestIdArray> {
    try {
      const due: number = getRequestsInProgressByDueReq.due;
      let requestIdArray = await this.getRequestsByQuery(
        {
          due: { $lte: due },
          status: requestStatusToJSON(RequestStatus.IN_PROGRESS),
        },
        false
      );
      return requestIdArray as RequestIdArray;
    } catch (error) {
      throw error;
    }
  }

  async searchRequestsByDisplayName(
    searchRequestsByDisplayNameReq: SearchRequestsByDisplayNameReq,
    personType: PersonTypeInRequest
  ): Promise<RequestArray> {
    //TODO Check how to search on specific fields
    try {
      let query: any = {};
      const displayName = searchRequestsByDisplayNameReq.displayName;
      if (personType === PersonTypeInRequest.SUBMITTER) {
        query = {
          $text: { $search: displayName },
        };
      } else if (personType === PersonTypeInRequest.COMMANDER_APPROVER) {
        query = {
          $text: { $search: displayName },
        };
      } else if (personType === PersonTypeInRequest.SECURITY_APPROVER) {
        query = {
          $text: { $search: displayName },
        };
      } else {
        //approver
        query = {
          $text: { $search: displayName },
        };
      }
      const requestArray = await this.getRequestsByQuery(
        query,
        true,
        searchRequestsByDisplayNameReq.from,
        searchRequestsByDisplayNameReq.to
      );
      return requestArray;
    } catch (error) {
      throw error;
    }
  }

  // async getRequestsByIdentifier(
  //   getRequestsByIdentifierReq: GetRequestsByIdentifierReq,
  //   personType: PersonTypeInRequest
  // ): Promise<RequestArray> {
  //   try {
  //     let query: any = {};
  //     const identifier = getRequestsByIdentifierReq.identifier;
  //     if (personType === PersonTypeInRequest.SUBMITTER) {
  //       query = {
  //         $or: [
  //           { 'submittedBy.personalNumber': identifier },
  //           { 'submittedBy.identityCard': identifier },
  //         ],
  //       };
  //     } else if (personType === PersonTypeInRequest.COMMANDER_APPROVER) {
  //       query = {
  //         $or: [
  //           { 'commanders.personalNumber': identifier },
  //           { 'commanders.identityCard': identifier },
  //         ],
  //       };
  //     } else if (personType === PersonTypeInRequest.SECURITY_APPROVER) {
  //       query = {
  //         $or: [
  //           { 'securityApprovers.personalNumber': identifier },
  //           { 'securityApprovers.identityCard': identifier },
  //         ],
  //       };
  //     } else {
  //       //approver
  //       query = {
  //         $or: [
  //           { 'submittedBy.personalNumber': identifier },
  //           { 'submittedBy.identityCard': identifier },
  //           { 'commanders.personalNumber': identifier },
  //           { 'commanders.identityCard': identifier },
  //           { 'securityApprovers.personalNumber': identifier },
  //           { 'securityApprovers.identityCard': identifier },
  //         ],
  //       };
  //     }
  //     const requestArray = await this.getRequestsByQuery(
  //       query,
  //       true,
  //       getRequestsByIdentifierReq.from,
  //       getRequestsByIdentifierReq.to
  //     );
  //     return requestArray;
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  async deleteRequest(deleteReq: DeleteReq): Promise<SuccessMessage> {
    try {
      await RequestModel.deleteOne({ _id: deleteReq.id });
      const res: SuccessMessage = {
        success: true,
        message: `Request ${deleteReq.id} was deleted successfully`,
      };
      return res;
    } catch (error) {
      throw error;
    }
  }

  async updateRequest(updateReq: any): Promise<Request> {
    //TODO CHECK MORE
    try {
      // let commanderApproverIdInUpdate: any = undefined,
      //   securityApproverIdInUpdate: any = undefined,
      //   superSecurityApproverIdInUpdate: any = undefined,
      //   commanderApproverDecisionInUpdate: any = undefined,
      //   securityApproverDecisionInUpdate: any = undefined,
      //   superSecurityApproverDecisionInUpdate: any = undefined,
      //   kartoffelStageStatusInUpdate: any = undefined,
      //   adStageStatusInUpdate: any = undefined;

      // let commanderApproverDecisionInDocument: Decision =
      //     Decision.DECISION_UNKNOWN,
      //   securityApproverDecisionInDocument: Decision =
      //     Decision.DECISION_UNKNOWN,
      //   superSecurityApproverDecisionInDocument: Decision =
      //     Decision.DECISION_UNKNOWN,
      //   kartoffelStageStatusInDocument: StageStatus = StageStatus.STAGE_UNKNOWN,
      //   adStageStatusInDocument: StageStatus = StageStatus.STAGE_UNKNOWN;

      // if (
      //   updateReq &&
      //   updateReq.requestProperties &&
      //   updateReq.requestProperties.kartoffelStatus &&
      //   updateReq.requestProperties.kartoffelStatus.status
      // ) {
      //   // kartoffel status in update
      //   kartoffelStageStatusInUpdate = stageStatusFromJSON(
      //     updateReq.requestProperties.kartoffelStatus.status
      //   );
      // }

      // if (
      //   updateReq &&
      //   updateReq.requestProperties &&
      //   updateReq.requestProperties.adStatus &&
      //   updateReq.requestProperties.adStatus.status
      // ) {
      //   // ad status in update
      //   adStageStatusInUpdate = stageStatusFromJSON(
      //     updateReq.requestProperties.adStatus.status
      //   );
      // }

      // if (
      //   updateReq &&
      //   updateReq.requestProperties &&
      //   updateReq.requestProperties.commanderDecision &&
      //   updateReq.requestProperties.commanderDecision.approver
      // ) {
      //   // commander decision in update
      //   commanderApproverIdInUpdate =
      //     updateReq.requestProperties.commanderDecision.approver.id;
      //   commanderApproverDecisionInUpdate = decisionFromJSON(
      //     updateReq.requestProperties.commanderDecision.decision
      //   );
      // }

      // if (
      //   updateReq &&
      //   updateReq.requestProperties &&
      //   updateReq.requestProperties.securityDecision &&
      //   updateReq.requestProperties.securityDecision.approver
      // ) {
      //   // security decision in update
      //   securityApproverIdInUpdate =
      //     updateReq.requestProperties.securityDecision.approver.id;
      //   securityApproverDecisionInUpdate = decisionFromJSON(
      //     updateReq.requestProperties.securityDecision.decision
      //   );
      // }

      // if (
      //   updateReq &&
      //   updateReq.requestProperties &&
      //   updateReq.requestProperties.superSecurityDecision &&
      //   updateReq.requestProperties.superSecurityDecision.approver
      // ) {
      //   // superSecurity decision in update
      //   superSecurityApproverIdInUpdate =
      //     updateReq.requestProperties.superSecurityDecision.approver.id;
      //   superSecurityApproverDecisionInUpdate = decisionFromJSON(
      //     updateReq.requestProperties.superSecurityDecision.decision
      //   );
      // }

      // if (
      //   commanderApproverIdInUpdate ||
      //   securityApproverIdInUpdate ||
      //   superSecurityApproverIdInUpdate ||
      //   kartoffelStageStatusInUpdate ||
      //   adStageStatusInUpdate
      // ) {
      //   //update includes decision/stage update
      //   const documentBefore = await RequestModel.findOne({
      //     _id: updateReq.id,
      //   });
      //   if (documentBefore) {
      //     const documentBeforeObj: any = documentBefore.toObject();
      //     turnObjectIdsToStrings(documentBeforeObj);
      //     const needSuperSecurityDecision =
      //       documentBeforeObj.needSuperSecurityDecision;
      //     const needSecurityDecision = documentBeforeObj.needSecurityDecision;

      //     // if (
      //     //   (commanderApproverIdInUpdate &&
      //     //     (!documentBeforeObj.commanders ||
      //     //       !documentBeforeObj.commanders.some(
      //     //         (commander: any) =>
      //     //           commander.id === commanderApproverIdInUpdate
      //     //       ))) ||
      //     //   (securityApproverIdInUpdate &&
      //     //     (!documentBeforeObj.securityApprovers ||
      //     //       (securityApproverIdInUpdate &&
      //     //         !documentBeforeObj.securityApprovers.some(
      //     //           (securityApprover: any) =>
      //     //             securityApprover.id === securityApproverIdInUpdate
      //     //         ))))
      //     // ) {
      //     //   //if one of the approvers does not exist in commanders or securityApprovers, so it is not allowed
      //     //   throw new Error(
      //     //     `Commander or security approver is not allowed to decide on this request!`
      //     //   );
      //     // }

      //     if (
      //       documentBeforeObj.commanderDecision &&
      //       documentBeforeObj.commanderDecision.decision
      //     ) {
      //       // commander decision in document
      //       commanderApproverDecisionInDocument = decisionFromJSON(
      //         documentBeforeObj.commanderDecision.decision
      //       );
      //     }

      //     if (
      //       documentBeforeObj.securityDecision &&
      //       documentBeforeObj.securityDecision.decision
      //     ) {
      //       // commander decision in document
      //       securityApproverDecisionInDocument = decisionFromJSON(
      //         documentBeforeObj.securityDecision.decision
      //       );
      //     }

      //     if (
      //       documentBeforeObj.superSecurityDecision &&
      //       documentBeforeObj.superSecurityDecision.decision
      //     ) {
      //       // commander decision in document
      //       superSecurityApproverDecisionInDocument = decisionFromJSON(
      //         documentBeforeObj.superSecurityDecision.decision
      //       );
      //     }

      //     if (
      //       commanderApproverDecisionInUpdate ||
      //       securityApproverDecisionInUpdate ||
      //       superSecurityApproverDecisionInUpdate
      //     ) {
      //       if (
      //         commanderApproverDecisionInUpdate === Decision.DENIED ||
      //         (!commanderApproverDecisionInUpdate &&
      //           commanderApproverDecisionInDocument === Decision.DENIED) ||
      //         (needSecurityDecision &&
      //           (securityApproverDecisionInUpdate === Decision.DENIED ||
      //             (!securityApproverDecisionInUpdate &&
      //               securityApproverDecisionInDocument === Decision.DENIED))) ||
      //         (needSuperSecurityDecision &&
      //           (superSecurityApproverDecisionInUpdate === Decision.DENIED ||
      //             (!superSecurityApproverDecisionInUpdate &&
      //               superSecurityApproverDecisionInDocument ===
      //                 Decision.DENIED)))
      //       ) {
      //         // if one of the approvers denied the request
      //         requestUpdate.status = requestStatusToJSON(
      //           RequestStatus.DECLINED
      //         );
      //       } else if (
      //         (commanderApproverDecisionInUpdate === Decision.APPROVED ||
      //           (!commanderApproverDecisionInUpdate &&
      //             commanderApproverDecisionInDocument === Decision.APPROVED)) &&
      //         (!needSecurityDecision ||
      //           securityApproverDecisionInUpdate === Decision.APPROVED ||
      //           (!securityApproverDecisionInUpdate &&
      //             securityApproverDecisionInDocument === Decision.APPROVED)) &&
      //         (!needSuperSecurityDecision ||
      //           superSecurityApproverDecisionInUpdate === Decision.APPROVED ||
      //           (!superSecurityApproverDecisionInUpdate &&
      //             superSecurityApproverDecisionInDocument ===
      //               Decision.APPROVED))
      //       ) {
      //         // if both approvers approved the request
      //         requestUpdate.status = requestStatusToJSON(
      //           RequestStatus.IN_PROGRESS
      //         );
      //       }
      //     }

      //     if (
      //       documentBeforeObj.kartoffelStatus &&
      //       documentBeforeObj.kartoffelStatus.status
      //     ) {
      //       // kartoffel status in document
      //       kartoffelStageStatusInDocument = stageStatusFromJSON(
      //         documentBeforeObj.kartoffelStatus.status
      //       );
      //     }

      //     if (documentBeforeObj.adStatus && documentBeforeObj.adStatus.status) {
      //       // ad status in document
      //       adStageStatusInDocument = stageStatusFromJSON(
      //         documentBeforeObj.adStatus.status
      //       );
      //     }

      //     if (kartoffelStageStatusInUpdate || adStageStatusInUpdate) {
      //       if (
      //         ((!kartoffelStageStatusInUpdate &&
      //           kartoffelStageStatusInDocument === StageStatus.STAGE_DONE) ||
      //           kartoffelStageStatusInUpdate === StageStatus.STAGE_DONE) &&
      //         ((!adStageStatusInUpdate &&
      //           adStageStatusInDocument === StageStatus.STAGE_DONE) ||
      //           adStageStatusInUpdate === StageStatus.STAGE_DONE)
      //       ) {
      //         // if both stages are done
      //         requestUpdate.status = requestStatusToJSON(RequestStatus.DONE);
      //       } else if (
      //         (!kartoffelStageStatusInUpdate &&
      //           kartoffelStageStatusInDocument === StageStatus.STAGE_FAILED) ||
      //         kartoffelStageStatusInUpdate === StageStatus.STAGE_FAILED ||
      //         (!adStageStatusInUpdate &&
      //           adStageStatusInDocument === StageStatus.STAGE_FAILED) ||
      //         adStageStatusInUpdate === StageStatus.STAGE_FAILED
      //       ) {
      //         // if both stages are failed
      //         requestUpdate.status = requestStatusToJSON(RequestStatus.FAILED);
      //       }
      //     }
      //   } else {
      //     throw new Error(
      //       `A request with {_id: ${updateReq.id}} was not found!`
      //     );
      //   }
      // }

      let requestUpdate: any = { ...updateReq.requestProperties };
      cleanUnderscoreFields(requestUpdate);

      const documentAfter: any = await RequestModel.findOneAndUpdate(
        { _id: updateReq.id },
        { $set: requestUpdate },
        { new: true }
      );
      if (documentAfter) {
        const documentObj = documentAfter.toObject();
        turnObjectIdsToStrings(documentObj);
        return documentObj as Request;
      } else {
        throw new Error(`A request with {_id: ${updateReq.id}} was not found!`);
      }
    } catch (error) {
      throw error;
    }
  }

  async updateKartoffelStatus(
    updateKartoffelStatusReq: UpdateKartoffelStatusReq
  ): Promise<Request> {
    let requestStatus: any = RequestStatus.UNRECOGNIZED;
    let updatedRequest;
    try {
      cleanUnderscoreFields(updateKartoffelStatusReq);
      let requestProperties: any = {
        kartoffelStatus: {
          status: updateKartoffelStatusReq.status,
          message: updateKartoffelStatusReq.message,
          createdId: updateKartoffelStatusReq.createdId,
        },
      };
      if (updateKartoffelStatusReq.failedRetries) {
        requestProperties.kartoffelStatus.failedRetries =
          updateKartoffelStatusReq.failedRetries;
      }
      let requestUpdate: any = {
        id: updateKartoffelStatusReq.requestId,
        requestProperties: requestProperties,
      };
      updatedRequest = await this.updateRequest(requestUpdate);
      let kartoffelStatus: any =
        typeof updatedRequest.kartoffelStatus?.status === typeof ''
          ? stageStatusFromJSON(updatedRequest.kartoffelStatus?.status)
          : updatedRequest.kartoffelStatus?.status;
      if (
        kartoffelStatus === StageStatus.STAGE_DONE ||
        kartoffelStatus === StageStatus.STAGE_FAILED
      ) {
        requestStatus =
          kartoffelStatus === StageStatus.STAGE_DONE
            ? RequestStatus.DONE
            : RequestStatus.FAILED;
        updatedRequest = await this.updateRequest({
          id: updateKartoffelStatusReq.requestId,
          requestProperties: {
            status: requestStatusToJSON(requestStatus),
          },
        });
      }

      if (
        (kartoffelStatus === StageStatus.STAGE_DONE ||
          kartoffelStatus === StageStatus.STAGE_FAILED) &&
        updatedRequest.submittedBy
      ) {
        const stageNotificationType: NotificationType =
          kartoffelStatus === StageStatus.STAGE_DONE
            ? NotificationType.KARTOFFEL_STAGE_DONE
            : NotificationType.KARTOFFEL_STAGE_FAILED;
        await createNotifications(stageNotificationType, updatedRequest);
      }
      if (
        (requestStatus === RequestStatus.DONE ||
          requestStatus === RequestStatus.FAILED) &&
        updatedRequest.submittedBy
      ) {
        const notificationType: NotificationType =
          requestStatus === RequestStatus.DONE
            ? NotificationType.REQUEST_DONE
            : NotificationType.REQUEST_FAILED;
        await createNotifications(notificationType, updatedRequest);
      }
      return updatedRequest;
    } catch (error) {
      throw error;
    }
  }

  async updateADStatus(updateADStatusReq: UpdateADStatusReq): Promise<Request> {
    let updatedRequest;
    let requestStatus: any = RequestStatus.UNRECOGNIZED;
    try {
      cleanUnderscoreFields(updateADStatusReq);
      let requestProperties: any = {
        adStatus: {
          status: updateADStatusReq.status,
          message: updateADStatusReq.message,
        },
      };
      if (updateADStatusReq.failedRetries) {
        requestProperties.adStatus.failedRetries =
          updateADStatusReq.failedRetries;
      }
      let requestUpdate: any = {
        id: updateADStatusReq.requestId,
        requestProperties: requestProperties,
      };
      updatedRequest = await this.updateRequest(requestUpdate);
      let adStatus: any =
        typeof updatedRequest.adStatus?.status === typeof ''
          ? stageStatusFromJSON(updatedRequest.adStatus?.status)
          : updatedRequest.adStatus?.status;
      if (adStatus === StageStatus.STAGE_FAILED) {
        requestStatus = RequestStatus.FAILED;
        updatedRequest = await this.updateRequest({
          id: updateADStatusReq.requestId,
          requestProperties: {
            status: requestStatusToJSON(requestStatus),
          },
        });
      }
      if (
        (adStatus === StageStatus.STAGE_DONE ||
          adStatus === StageStatus.STAGE_FAILED) &&
        updatedRequest.submittedBy
      ) {
        const stageNotificationType: NotificationType =
          adStatus === StageStatus.STAGE_DONE
            ? NotificationType.AD_STAGE_DONE
            : NotificationType.AD_STAGE_FAILED;
        await createNotifications(stageNotificationType, updatedRequest);
      }
      if (
        (requestStatus === RequestStatus.DONE ||
          requestStatus === RequestStatus.FAILED) &&
        updatedRequest.submittedBy
      ) {
        const notificationType: NotificationType =
          requestStatus === RequestStatus.DONE
            ? NotificationType.REQUEST_DONE
            : NotificationType.REQUEST_FAILED;
        await createNotifications(notificationType, updatedRequest);
      }
      return updatedRequest;
    } catch (error) {
      throw error;
    }
  }

  setNeedApproversDecisionsValues(request: any, type: RequestType): void {
    switch (type) {
      case RequestType.CREATE_OG:
        request.needSecurityDecision = false;
        request.needSuperSecurityDecision = false;
        break;

      case RequestType.CREATE_ROLE:
        request.needSecurityDecision = true;
        request.needSuperSecurityDecision = true;
        break;

      case RequestType.ASSIGN_ROLE_TO_ENTITY:
        request.needSecurityDecision = true;
        request.needSuperSecurityDecision = false;
        break;

      case RequestType.CREATE_ENTITY:
        request.needSecurityDecision = false;
        request.needSuperSecurityDecision = false;
        break;

      case RequestType.RENAME_OG:
        request.needSecurityDecision = false;
        request.needSuperSecurityDecision = true;
        break;

      case RequestType.RENAME_ROLE:
        request.needSecurityDecision = false;
        request.needSuperSecurityDecision = false;
        break;

      case RequestType.EDIT_ENTITY:
        request.needSecurityDecision = false;
        request.needSuperSecurityDecision = false;
        break;

      case RequestType.DELETE_OG:
        request.needSecurityDecision = false;
        request.needSuperSecurityDecision = false;
        break;

      case RequestType.DELETE_ROLE:
        request.needSecurityDecision = false;
        request.needSuperSecurityDecision = false;
        break;

      case RequestType.DISCONNECT_ROLE:
        request.needSecurityDecision = false;
        request.needSuperSecurityDecision = false;
        break;

      case RequestType.ADD_APPROVER:
        const approverType: ApproverType = approverTypeFromJSON(
          request.additionalParams.type
        );

        switch (approverType) {
          case ApproverType.COMMANDER:
            request.needSecurityDecision = true;
            request.needSuperSecurityDecision = false;
            break;
          case ApproverType.SECURITY:
            request.needSecurityDecision = true;
            request.needSuperSecurityDecision = false;
            break;
          case ApproverType.SUPER_SECURITY:
            request.needSecurityDecision = false;
            request.needSuperSecurityDecision = true;
            break;
        }
    }
  }

  async getAllRequests(
    getAllRequestsReq: GetAllRequestsReq
  ): Promise<RequestArray> {
    try {
      const requestArray = await this.getRequestsByQuery(
        {},
        true,
        getAllRequestsReq.from,
        getAllRequestsReq.to
      );
      return requestArray;
    } catch (error) {
      throw error;
    }
  }

  async getRequestBySerialNumber(
    getRequestBySerialNumberReq: GetRequestBySerialNumberReq
  ): Promise<Request> {
    try {
      const request = await RequestModel.findOne({
        serialNumber: getRequestBySerialNumberReq.serialNumber,
      });
      if (request) {
        const document = request.toObject();
        turnObjectIdsToStrings(document);
        return document as Request;
      } else {
        throw new Error(
          `A request with {serialNumber: ${getRequestBySerialNumberReq.serialNumber}} was not found!`
        );
      }
    } catch (error) {
      throw error;
    }
  }

  async getRequestById(getRequestByIdReq: GetRequestByIdReq): Promise<Request> {
    try {
      const request = await RequestModel.findOne({ _id: getRequestByIdReq.id });
      if (request) {
        const document = request.toObject();
        turnObjectIdsToStrings(document);
        return document as Request;
      } else {
        throw new Error(
          `A request with {_id: ${getRequestByIdReq.id}} was not found!`
        );
      }
    } catch (error) {
      throw error;
    }
  }

  async updateCommanders(
    updateApproversReq: UpdateApproversReq
  ): Promise<Request> {
    try {
      const request: Request = await this.updateRequest({
        id: updateApproversReq.id,
        requestProperties: { commanders: updateApproversReq.approvers },
      });
      return request;
    } catch (error) {
      throw error;
    }
  }

  async updateSuperSecurityApprovers(
    updateApproversReq: UpdateApproversReq
  ): Promise<Request> {
    try {
      const request: Request = await this.updateRequest({
        id: updateApproversReq.id,
        requestProperties: {
          superSecurityApprovers: updateApproversReq.approvers,
        },
      });
      return request;
    } catch (error) {
      throw error;
    }
  }

  async updateSecurityApprovers(
    updateApproversReq: UpdateApproversReq
  ): Promise<Request> {
    try {
      const request: Request = await this.updateRequest({
        id: updateApproversReq.id,
        requestProperties: { securityApprovers: updateApproversReq.approvers },
      });
      return request;
    } catch (error) {
      throw error;
    }
  }

  async getRequestsByPerson(
    getRequestsByPersonReq: GetRequestsByPersonReq,
    personTypesInRequest: PersonTypeInRequest,
    personInfoType: PersonInfoType
  ) {
    try {
      let query = {};
      if (personInfoType === PersonInfoType.ID) {
        query = getIdQuery(getRequestsByPersonReq.id, personTypesInRequest);
      } else {
        query = getIdentifierQuery(
          getRequestsByPersonReq.id,
          personTypesInRequest
        );
      }
      const totalCount = await RequestModel.count(query);
      const requests: any = await RequestModel.find(
        query,
        {},
        {
          skip: getRequestsByPersonReq.from - 1,
          limit: getRequestsByPersonReq.to - getRequestsByPersonReq.from + 1,
        }
      ).sort([['updatedAt', -1]]);
      if (requests) {
        let documents: any = [];
        for (let i = 0; i < requests.length; i++) {
          const requestObj: any = requests[i].toObject();
          turnObjectIdsToStrings(requestObj);
          documents.push(requestObj);
        }
        return {
          requests: documents,
          totalCount: totalCount,
        };
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  }
}
