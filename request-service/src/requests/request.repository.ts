import {
  ApproverType,
  approverTypeFromJSON,
  CanPushToQueueReq,
  CanPushToQueueRes,
  Decision,
  decisionFromJSON,
  DeleteReq,
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
  StageStatus,
  stageStatusFromJSON,
  SuccessMessage,
  UpdateADStatusReq,
  UpdateApproversReq,
  UpdateApproverDecisionReq,
  UpdateKartoffelStatusReq,
  stageStatusToJSON,
  ApprovementStatus,
  approvementStatusFromJSON,
  PushErrorReq,
  errorTypeToJSON,
  ErrorType,
  requestTypeFromJSON,
  requestStatusFromJSON,
  SyncBulkRequestReq,
  personInfoTypeFromJSON,
  personTypeInRequestFromJSON,
  GetRequestsUnderBulkReq,
  decisionToJSON,
  RowError,
} from '../interfaces/protoc/proto/requestService';
import { createNotifications } from '../services/notificationHelper';
import * as C from '../config';
import { RequestModel } from '../models/request.model';
import {
  cleanUnderscoreFields,
  turnObjectIdsToStrings,
} from '../services/requestHelper';
import { NotificationType } from '../interfaces/protoc/proto/notificationService';
import {
  getApprovementQuery,
  getIdentifierQuery,
  getIdQuery,
  getQuery,
} from '../utils/query';
import {
  reportTeaFail,
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
      } else if (type === RequestType.ASSIGN_ROLE_TO_ENTITY) {
        createRequestReq.adParams.upn = await retrieveUPNByEntityId(
          createRequestReq.kartoffelParams.id
        );
      } else if (
        type === RequestType.CREATE_ENTITY ||
        type === RequestType.DELETE_ENTITY ||
        type === RequestType.DELETE_OG
      ) {
        // CASES WITH NO NEED FOR AD UPDATE
        createRequestReq.adStatus = {
          status: stageStatusToJSON(StageStatus.STAGE_DONE),
          message: 'No need for AD update in this case',
          failedRetries: 0,
        };

        createRequestReq.kartoffelStatus = {
          status: stageStatusToJSON(StageStatus.STAGE_WAITING_FOR_AD),
          message: 'Waiting for push, request type does not require AD update',
          failedRetries: 0,
        };
      } else if (type === RequestType.EDIT_ENTITY) {
        //automatically approved
        const submittedById = createRequestReq.submittedBy.id;
        const approverDecision = {
          approver: createRequestReq.submittedBy
            ? createRequestReq.submittedBy
            : { id: '', displayName: '', personalNumber: '', identityCard: '' },
          decision: decisionToJSON(Decision.APPROVED),
        };
        createRequestReq.commanderDecision = approverDecision;
        createRequestReq.securityDecision = approverDecision;
        createRequestReq.superSecurityDecision = approverDecision;
        createRequestReq.adStatus = {
          status: stageStatusToJSON(StageStatus.STAGE_WAITING_FOR_PUSH),
          message: '',
          failedRetries: 0,
        };
        createRequestReq.kartoffelStatus = {
          status: stageStatusToJSON(StageStatus.STAGE_WAITING_FOR_AD),
          message: '',
          failedRetries: 0,
        };
        createRequestReq.status = requestStatusToJSON(
          RequestStatus.IN_PROGRESS
        );
      }
      const request: any = new RequestModel(createRequestReq);
      this.setNeedApproversDecisionsValues(request, type);
      request.type = requestTypeToJSON(type);
      const createdCreateRequest = await request.save();
      const document = createdCreateRequest.toObject();
      turnObjectIdsToStrings(document);
      const isRequestApproved = await this.isRequestApproved({
        id: document.id,
      });
      if (isRequestApproved.isRequestApproved) {
        await this.updateRequest({
          id: document.id,
          requestProperties: {
            status: requestStatusToJSON(RequestStatus.IN_PROGRESS),
          },
        });
      }
      await createNotifications(NotificationType.REQUEST_SUBMITTED, document);
      return document as Request;
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
      const requestType =
        typeof request.type === typeof ''
          ? requestTypeFromJSON(request.type)
          : request.type;
      if (requestType === RequestType.EDIT_ENTITY) {
        return { isRequestApproved: true };
      } else {
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
        let superSecurityDecision: any =
          request.superSecurityDecision?.decision;
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
        case PersonTypeInRequest.APPROVER:
        case PersonTypeInRequest.SUPER_SECURITY_APPROVER:
          approverField = 'superSecurityDecision';
        default:
          break;
      }

      if (approverField) {
        // Update request
        updateQuery.requestProperties[approverField] =
          updateDecisionReq.approverDecision;
        let updatedRequest = await this.updateRequest(updateQuery);

        // Get decision
        let decision =
          typeof updateDecisionReq.approverDecision?.decision === typeof ''
            ? decisionFromJSON(updateDecisionReq.approverDecision?.decision)
            : updateDecisionReq.approverDecision?.decision;

        let newRequestStatus: any = undefined;
        if (decision === Decision.DENIED) {
          newRequestStatus = RequestStatus.DECLINED;
        } else {
          // Check if request approved
          const isRequestApprovedObj = await this.isRequestApproved({
            id: updateDecisionReq.id,
          });
          if (isRequestApprovedObj.isRequestApproved)
            newRequestStatus = RequestStatus.IN_PROGRESS;
        }

        const requestType =
          typeof updatedRequest.type === typeof ''
            ? requestTypeFromJSON(updatedRequest.type)
            : updatedRequest.type;

        if (newRequestStatus) {
          let requestProperties: any = {
            status: requestStatusToJSON(newRequestStatus),
          };

          if (newRequestStatus === RequestStatus.IN_PROGRESS) {
            let adStatus = StageStatus.STAGE_WAITING_FOR_PUSH;
            let kartoffelStatus = StageStatus.STAGE_WAITING_FOR_AD;
            if (
              requestType === RequestType.CREATE_ENTITY ||
              requestType === RequestType.DELETE_ENTITY ||
              requestType === RequestType.DELETE_OG
            ) {
              // NO NEED FOR AD PUSH
              adStatus = StageStatus.STAGE_DONE;
              kartoffelStatus = StageStatus.STAGE_WAITING_FOR_PUSH;
            }
            requestProperties['adStatus.status'] = stageStatusToJSON(adStatus);
            requestProperties['kartoffelStatus.status'] =
              stageStatusToJSON(kartoffelStatus);
          }

          // Update request
          updatedRequest = await this.updateRequest({
            id: updateDecisionReq.id,
            requestProperties: requestProperties,
          });

          if (
            newRequestStatus === RequestStatus.DECLINED &&
            requestType === RequestType.CREATE_ROLE
          ) {
            if (updatedRequest.kartoffelParams?.roleId)
              await reportTeaFail(updatedRequest.kartoffelParams?.roleId);
          }
        }

        // Create notification
        let approvingNotificationType: any = undefined,
          requestStatusNotificationType: any = undefined;

        // Get notification type
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

        // Send notification
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
      } else {
        throw new Error('user has no permission');
      }
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
          status: stageStatusToJSON(StageStatus.STAGE_NEED_RETRY),
          message: '',
          failedRetries: 0,
          createdId: '',
        };
      } else if (!kartoffelStatus.failedRetries) {
        kartoffelStatus.failedRetries = 0;
      }
      let properties: any = {};
      if (kartoffelStatus.failedRetries + 1 > C.maxQueueRetries) {
        kartoffelStatus.status = stageStatusToJSON(StageStatus.STAGE_FAILED);
        properties.status = requestStatusToJSON(RequestStatus.FAILED);
      } else {
        kartoffelStatus.failedRetries = kartoffelStatus.failedRetries + 1;
        kartoffelStatus.status = stageStatusToJSON(
          StageStatus.STAGE_NEED_RETRY
        );
      }
      properties.kartoffelStatus = kartoffelStatus;

      const updateQuery = {
        id: incrementRetriesReq.id,
        requestProperties: properties,
      };
      const updatedRequest = await this.updateRequest(updateQuery);
      return updatedRequest;
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
          status: stageStatusToJSON(StageStatus.STAGE_NEED_RETRY),
          message: '',
          failedRetries: 0,
        };
      } else if (!adStatus.failedRetries) {
        adStatus.failedRetries = 0;
      }
      let properties: any = {};
      if (adStatus.failedRetries + 1 > C.maxQueueRetries) {
        adStatus.status = stageStatusToJSON(StageStatus.STAGE_FAILED);
        properties.status = requestStatusToJSON(RequestStatus.FAILED);
      } else {
        adStatus.failedRetries = adStatus.failedRetries + 1;
        adStatus.status = stageStatusToJSON(StageStatus.STAGE_NEED_RETRY);
      }
      properties.adStatus = adStatus;
      const updateQuery = {
        id: incrementRetriesReq.id,
        requestProperties: properties,
      };
      const updatedRequest = await this.updateRequest(updateQuery);
      return updatedRequest;
    } catch (error) {
      throw error;
    }
  }

  async canPushToKartoffelQueue(
    canPushToQueueReq: CanPushToQueueReq
  ): Promise<CanPushToQueueRes> {
    try {
      const request = await this.getRequestById({ id: canPushToQueueReq.id });
      let kartoffelFailedRetries = request.kartoffelStatus?.failedRetries;
      if (!kartoffelFailedRetries) {
        kartoffelFailedRetries = 0;
      }
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
      let requestStatus: any = request.status;
      requestStatus =
        typeof requestStatus === typeof ''
          ? requestStatusFromJSON(requestStatus)
          : requestStatus;

      if (
        adStatus === StageStatus.STAGE_DONE &&
        kartoffelFailedRetries <= C.maxQueueRetries &&
        kartoffelStatus !== StageStatus.STAGE_FAILED &&
        kartoffelStatus !== StageStatus.STAGE_IN_PROGRESS &&
        kartoffelStatus !== StageStatus.STAGE_DONE &&
        requestStatus !== RequestStatus.FAILED
      ) {
        return { canPushToQueue: true };
      } else {
        return { canPushToQueue: false };
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
      const isRequestApprovedRes = await this.isRequestApproved({
        id: canPushToQueueReq.id,
      });
      const due = request.due;
      let adStatus: any = request.adStatus?.status;
      adStatus =
        typeof adStatus === typeof ''
          ? stageStatusFromJSON(adStatus)
          : adStatus;
      let adFailedRetries = request.adStatus?.failedRetries;
      if (!adFailedRetries) {
        adFailedRetries = 0;
      }
      let requestStatus: any = request.status;
      requestStatus =
        typeof requestStatus === typeof ''
          ? requestStatusFromJSON(requestStatus)
          : requestStatus;

      if (
        adStatus !== StageStatus.STAGE_FAILED &&
        adStatus !== StageStatus.STAGE_IN_PROGRESS &&
        adStatus !== StageStatus.STAGE_DONE &&
        adFailedRetries <= C.maxQueueRetries &&
        requestStatus !== RequestStatus.FAILED &&
        isRequestApprovedRes.isRequestApproved &&
        due <= new Date().getTime()
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

  async getRequestsUnderBulk(
    getRequestsUnderBulkReq: GetRequestsUnderBulkReq
  ): Promise<RequestArray> {
    try {
      const bulkRequestId = getRequestsUnderBulkReq.id;
      const requestArray = await this.getRequestsByQuery(
        {
          bulkRequestId: bulkRequestId,
        },
        true
      );
      return requestArray as RequestArray;
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
          // $and: [
          //   { type: { $ne: requestTypeToJSON(RequestType.CREATE_ROLE_BULK) } },
          //   {
          //     type: {
          //       $ne: requestTypeToJSON(RequestType.CHANGE_ROLE_HIERARCHY_BULK),
          //     },
          //   },
          // ],
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
          // $and: [
          //   { type: { $ne: requestTypeToJSON(RequestType.CREATE_ROLE_BULK) } },
          //   {
          //     type: {
          //       $ne: requestTypeToJSON(RequestType.CHANGE_ROLE_HIERARCHY_BULK),
          //     },
          //   },
          // ],
        },
        false
      );
      return requestIdArray as RequestIdArray;
    } catch (error) {
      throw error;
    }
  }

  async deleteRequest(deleteReq: DeleteReq): Promise<SuccessMessage> {
    try {
      await RequestModel.deleteMany({
        $or: [{ _id: deleteReq.id }, { bulkRequestId: deleteReq.id }],
      });
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
    try {
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
        // if bulk
        const requestType: RequestType =
          typeof documentObj.type === typeof ''
            ? requestTypeFromJSON(documentObj.type)
            : documentObj.type;
        if (
          (requestType === RequestType.CREATE_ROLE_BULK ||
            requestType === RequestType.CHANGE_ROLE_HIERARCHY_BULK) &&
          (requestUpdate.commanderDecision ||
            requestUpdate.securityDecision ||
            requestUpdate.superSecurityDecision)
        ) {
          const requestIds: string[] = documentObj.requestIds;
          await RequestModel.updateMany(
            { bulkRequestId: updateReq.id },
            { $set: requestUpdate }
          );
        }
        // Moved to execution-script instead
        // else if (
        //   documentObj.isPartOfBulk &&
        //   (requestUpdate['kartoffelStatus.status'] ||
        //     requestUpdate['kartoffelStatus.failedRetries'] ||
        //     requestUpdate['adStatus.status'] ||
        //     requestUpdate['adStatus.failedRetries'] ||
        //     requestUpdate.kartoffelStatus ||
        //     requestUpdate.adStatus ||
        //     requestUpdate.status)
        // ) {
        //   // IF PART OF BULK
        //   const bulkRequestId = documentObj.bulkRequestId;
        //   await this.syncBulkRequest({ id: bulkRequestId });
        // }

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
        'kartoffelStatus.status': updateKartoffelStatusReq.status,
        'kartoffelStatus.message': updateKartoffelStatusReq.message,
        'kartoffelStatus.createdId': updateKartoffelStatusReq.createdId,
      };
      if (updateKartoffelStatusReq.failedRetries) {
        requestProperties['kartoffelStatus.failedRetries'] =
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
        let properties: any = {
          status: requestStatusToJSON(requestStatus),
        };
        updatedRequest = await this.updateRequest({
          id: updateKartoffelStatusReq.requestId,
          requestProperties: properties,
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

      case RequestType.DELETE_ENTITY:
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
      case RequestType.CHANGE_ROLE_HIERARCHY:
        request.needSecurityDecision = true;
        request.needSuperSecurityDecision = false;
        break;
      case RequestType.CREATE_ROLE_BULK:
        request.needSecurityDecision = false;
        request.needSuperSecurityDecision = false;
        break;
      case RequestType.CHANGE_ROLE_HIERARCHY_BULK:
        request.needSecurityDecision = true;
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

  async getRequestsByPerson(getRequestsByPersonReq: GetRequestsByPersonReq) {
    try {
      let query: any = {};
      const personTypeInRequest: PersonTypeInRequest =
        typeof getRequestsByPersonReq.personType === typeof ''
          ? personTypeInRequestFromJSON(getRequestsByPersonReq.personType)
          : getRequestsByPersonReq.personType;
      const personInfoType: PersonInfoType =
        typeof getRequestsByPersonReq.personInfoType === typeof ''
          ? personInfoTypeFromJSON(getRequestsByPersonReq.personInfoType)
          : getRequestsByPersonReq.personInfoType;
      getRequestsByPersonReq.approvementStatus =
        getRequestsByPersonReq.approvementStatus
          ? getRequestsByPersonReq.approvementStatus
          : ApprovementStatus.ANY;
      const approvementStatus: ApprovementStatus =
        typeof getRequestsByPersonReq.approvementStatus === typeof ''
          ? approvementStatusFromJSON(getRequestsByPersonReq.approvementStatus)
          : getRequestsByPersonReq.approvementStatus;
      let userType: any[] = getRequestsByPersonReq.userType
        ? getRequestsByPersonReq.userType
        : [];
      userType = userType.map((type) => {
        return typeof type === typeof '' ? approverTypeFromJSON(type) : type;
      });

      query = getQuery(
        getRequestsByPersonReq.id,
        personInfoType,
        personTypeInRequest,
        approvementStatus,
        userType
      );
      query.isPartOfBulk = false;
      if (getRequestsByPersonReq.status) {
        const status =
          typeof getRequestsByPersonReq.status === typeof ''
            ? getRequestsByPersonReq.status
            : requestStatusToJSON(getRequestsByPersonReq.status);
        query.status = status;
      }
      if (getRequestsByPersonReq.type) {
        const type =
          typeof getRequestsByPersonReq.type === typeof ''
            ? getRequestsByPersonReq.type
            : requestTypeToJSON(getRequestsByPersonReq.type);
        query.type = type;
      }
      if (getRequestsByPersonReq.displayName) {
        query['$text'] = { $search: getRequestsByPersonReq.displayName };
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
        return { requests: [], totalCount: 0 };
      }
    } catch (error) {
      throw error;
    }
  }

  async pushError(pushErrorReq: PushErrorReq): Promise<Request> {
    try {
      let errorType: any = pushErrorReq.errorType
        ? pushErrorReq.errorType
        : errorTypeToJSON(ErrorType.UNKNOWN_STAGE);
      errorType =
        typeof errorType === typeof '' ? errorType : errorTypeToJSON(errorType);
      const document: any = await RequestModel.findOne({
        _id: pushErrorReq.id,
      });
      if (!document) {
        throw new Error(
          `A request with {_id: ${pushErrorReq.id}} was not found!`
        );
      } else {
        if (!document.rowErrors) {
          document.rowErrors = [];
        }
        document.rowErrors.push({
          rowNumber: pushErrorReq.rowNumber,
          error: pushErrorReq.error,
          errorType: errorType,
        });
        await document.save();
        const documentObj = document.toObject();
        turnObjectIdsToStrings(documentObj);
        return documentObj as Request;
      }
    } catch (error) {
      throw error;
    }
  }

  getRowErrors(rowRequest: Request): RowError[] {
    try {
      let rowErrors: any = [];
      let adStatus = StageStatus.STAGE_DONE;
      let adMessage = '';
      let kartoffelStatus = StageStatus.STAGE_DONE;
      let kartoffelMessage = '';
      if (rowRequest.adStatus) {
        adStatus =
          typeof rowRequest.adStatus.status === typeof ''
            ? stageStatusFromJSON(rowRequest.adStatus.status)
            : rowRequest.adStatus.status;
        adMessage = rowRequest.adStatus.message;
        if (adStatus === StageStatus.STAGE_FAILED) {
          rowErrors.push({
            rowNumber: rowRequest.rowNumber,
            error: adMessage,
            errorType: errorTypeToJSON(ErrorType.AD_ERROR),
          });
        }
      }
      if (rowRequest.kartoffelStatus) {
        kartoffelStatus =
          typeof rowRequest.kartoffelStatus.status === typeof ''
            ? stageStatusFromJSON(rowRequest.kartoffelStatus.status)
            : rowRequest.kartoffelStatus.status;
        kartoffelMessage = rowRequest.kartoffelStatus.message;
        if (kartoffelStatus === StageStatus.STAGE_FAILED) {
          rowErrors.push({
            rowNumber: rowRequest.rowNumber,
            error: kartoffelMessage,
            errorType: errorTypeToJSON(ErrorType.KARTOFFEL_ERROR),
          });
        }
      }
      return rowErrors;
    } catch (error: any) {
      throw error;
    }
  }

  async syncBulkRequest(
    syncBulkRequestReq: SyncBulkRequestReq
  ): Promise<Request> {
    try {
      let rowErrors: any = [];
      let allDone = true;
      let newStatus: any = undefined;
      const documents: any = await RequestModel.find({
        bulkRequestId: syncBulkRequestReq.id,
      });
      if (documents) {
        let smallRequests: any = [];
        for (let i = 0; i < documents.length; i++) {
          const requestObj: any = documents[i].toObject();
          turnObjectIdsToStrings(requestObj);
          smallRequests.push(requestObj);
        }
        for (let smallRequest of smallRequests) {
          const smallRequestStatus =
            typeof smallRequest.status === typeof ''
              ? requestStatusFromJSON(smallRequest.status)
              : smallRequest.status;
          if (smallRequestStatus !== RequestStatus.DONE) {
            allDone = false;
          }
          if (smallRequestStatus === RequestStatus.FAILED) {
            newStatus = RequestStatus.FAILED;
            rowErrors = [...rowErrors, ...this.getRowErrors(smallRequest)];
          }
        }
        if (allDone) {
          newStatus = RequestStatus.DONE;
        }
        const requestProperties: any = newStatus
          ? { status: requestStatusToJSON(newStatus), rowErrors: rowErrors }
          : {};
        const updatedBulkRequest = await this.updateRequest({
          id: syncBulkRequestReq.id,
          requestProperties: requestProperties,
        });
        return updatedBulkRequest;
      } else {
        throw new Error(`No bulk request with id=${syncBulkRequestReq.id}`);
      }
    } catch (error) {
      throw error;
    }
  }
}
