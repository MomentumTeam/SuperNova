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
  personTypeInRequestFromJSON,
  GetRequestsUnderBulkReq,
  decisionToJSON,
  RowError,
  TransferRequestToApproversReq,
  SortOrder,
  AreAllSubRequestsFinishedReq,
  AreAllSubRequestsFinishedRes,
  SendSubmissionMailReq,
  RemoveApproverFromApproversReq,
} from '../interfaces/protoc/proto/requestService';
import { createNotifications } from '../services/notificationHelper';
import { sendMail } from '../services/mailHelper';
import * as C from '../config';
import { RequestModel } from '../models/request.model';
import {
  cleanUnderscoreFields,
  turnObjectIdsToStrings,
} from '../services/requestHelper';
import { NotificationType } from '../interfaces/protoc/proto/notificationService';
import {
  getAncestorsQuery,
  getPersonQuery,
  getRequestTypeQuery,
  getSearchQuery,
  getSortQuery,
  getStatusQuery,
  getWaitingForApproveCountQuery,
  removeApproverFromArray,
} from '../utils/query';
import {
  reportTeaFail,
  retrieveBrol,
  retrieveTeaByOGId,
  retrieveUPNByEntityId,
} from '../services/teaHelper';
import { logger } from '../logger';
import { MailType } from '../interfaces/protoc/proto/mailService';
import ApproverService from '../services/approverService';

export class RequestRepository {
  async createRequest(
    createRequestReq: any,
    type: RequestType
  ): Promise<Request> {
    try {
      if (type === RequestType.CREATE_ROLE) {
        const tea = await retrieveTeaByOGId(
          createRequestReq.kartoffelParams.directGroup
        );
        createRequestReq.kartoffelParams.roleId = tea.roleId;
        createRequestReq.kartoffelParams.uniqueId = tea.uniqueId;
        createRequestReq.kartoffelParams.mail = tea.mail;
        createRequestReq.adParams.samAccountName = tea.samAccountName;
        if (
          createRequestReq.kartoffelParams.roleEntityType &&
          createRequestReq.kartoffelParams.roleEntityType === C.goalUser
        ) {
          createRequestReq.adParams.upn = await retrieveBrol();
          createRequestReq.kartoffelParams.upn = createRequestReq.adParams.upn;
        }
      } else if (type === RequestType.ASSIGN_ROLE_TO_ENTITY) {
        createRequestReq.adParams.upn = await retrieveUPNByEntityId(
          createRequestReq.kartoffelParams.id
        );
        createRequestReq.kartoffelParams.upn = createRequestReq.adParams.upn;
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
        const approverDecision = {
          approver: createRequestReq.submittedBy
            ? createRequestReq.submittedBy
            : { id: '', displayName: '', personalNumber: '', identityCard: '' },
          decision: decisionToJSON(Decision.APPROVED),
        };
        createRequestReq.commanderDecision = approverDecision;
        createRequestReq.securityDecision = approverDecision;
        createRequestReq.superSecurityDecision = approverDecision;
        createRequestReq.adminDecision = approverDecision;
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
      const groupIds: string[] = [
        request.submittedBy.directGroup,
        ...request.submittedBy.ancestors,
      ];
      const needAdminDecision = await ApproverService.includesSpecialGroup({groupIds: groupIds})
      this.setNeedApproversDecisionsValues(request, type, needAdminDecision.includes);
      request.type = requestTypeToJSON(type);
      const createdCreateRequest = await request.save();
      const document = createdCreateRequest.toObject();
      turnObjectIdsToStrings(document);

      // TODO: ask baraks if i need to add admin check to here?
      // Get current status of the request
      if (this.isRequestApprovedBySecurity(request)) {
        await this.updateRequest({
          id: document.id,
          requestProperties: {
            status: requestStatusToJSON(RequestStatus.APPROVED_BY_SECURITY),
          },
        });
      } else if (this.isRequestApprovedByCommander(request)) {
        await this.updateRequest({
          id: document.id,
          requestProperties: {
            status: requestStatusToJSON(RequestStatus.APPROVED_BY_COMMANDER),
          },
        });
      }

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
        if (
          type !== RequestType.CHANGE_ROLE_HIERARCHY_BULK &&
          type !== RequestType.CREATE_ROLE_BULK
        ) {
          try {
            await createNotifications(
              NotificationType.REQUEST_IN_PROGRESS,
              document
            );
          } catch (notificationError: any) {
            logger.error('Notification error', {
              error: { message: notificationError.message },
            });
          }
        }
      } else {
        if (
          type !== RequestType.CHANGE_ROLE_HIERARCHY_BULK &&
          type !== RequestType.CREATE_ROLE_BULK
        ) {
          try {
            await createNotifications(
              NotificationType.REQUEST_SUBMITTED,
              document
            );
            sendMail(MailType.REQUEST_SUBMITTED, document).then().catch();
          } catch (notificationError: any) {
            logger.error('Notification error', {
              error: { message: notificationError.message },
            });
          }
        }
      }
      return document as Request;
    } catch (error) {
      throw error;
    }
  }

  async sendSubmissionMail(
    sendSubmissionMailReq: SendSubmissionMailReq
  ): Promise<Request> {
    try {
      const request: Request = await this.getRequestById({
        id: sendSubmissionMailReq.id,
      });
      await createNotifications(NotificationType.REQUEST_SUBMITTED, request);
      await sendMail(MailType.REQUEST_SUBMITTED, request);
      return request;
    } catch (error) {
      throw error;
    }
  }

  isRequestApprovedByCommander(request: Request) {
    let commanderDecision: any = request.commanderDecision?.decision;
    commanderDecision =
      typeof commanderDecision === typeof ''
        ? decisionFromJSON(commanderDecision)
        : commanderDecision;

    return commanderDecision === Decision.APPROVED;
  }

  isRequestApprovedBySecurity(request: Request) {
    let securityDecision: any = request.securityDecision?.decision;
    securityDecision =
      typeof securityDecision === typeof ''
        ? decisionFromJSON(securityDecision)
        : securityDecision;
    const needSecurityDecision = request.needSecurityDecision;

    return securityDecision === Decision.APPROVED;
  }

  isRequestApprovedBySuperSecurity(request: Request) {
    let superSecurityDecision: any = request.superSecurityDecision?.decision;
    superSecurityDecision =
      typeof superSecurityDecision === typeof ''
        ? decisionFromJSON(superSecurityDecision)
        : superSecurityDecision;

    return superSecurityDecision === Decision.APPROVED;
  }

    isRequestApprovedByAdmin(request: Request) {
    let adminDecision: any = request.adminDecision?.decision;
    adminDecision =
      typeof adminDecision === typeof ''
        ? decisionFromJSON(adminDecision)
        : adminDecision;

    return adminDecision === Decision.APPROVED;
  }

  async isRequestApproved(
    isRequestApprovedReq: IsRequestApprovedReq
  ): Promise<IsRequestApprovedRes> {
    try {
      const request: Request = await this.getRequestById({
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
        const needAdminDecision = request.needAdminDecision;
        
        if (
          this.isRequestApprovedByCommander(request) &&
          (!needSecurityDecision ||
            this.isRequestApprovedBySecurity(request)) &&
          (!needSuperSecurityDecision ||
            this.isRequestApprovedBySuperSecurity(request)) &&
          (!needAdminDecision || 
            this.isRequestApprovedByAdmin(request))
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

  async removeApproverFromApprovers(
    removeApproverFromApproversReq: RemoveApproverFromApproversReq
  ): Promise<Request> {
    try {
      const request: any = await this.getRequestById({
        id: removeApproverFromApproversReq.id,
      });
      let updateSetQuery: any = {};
      const type =
        typeof removeApproverFromApproversReq.type === typeof ''
          ? approverTypeFromJSON(removeApproverFromApproversReq.type)
          : removeApproverFromApproversReq.type;
      const commanderDecision =
        typeof request.commanderDecision.decision === typeof ''
          ? decisionFromJSON(request.commanderDecision.decision)
          : request.commanderDecision.decision;
      const commanderAlreadyDecided =
        commanderDecision !== Decision.DECISION_UNKNOWN;
      const adminDecision =
        typeof request.adminDecision.decision === typeof ''
          ? decisionFromJSON(request.adminDecision.decision)
          : request.adminDecision.decision;
      const adminAlreadyDecided =
        adminDecision !== Decision.DECISION_UNKNOWN;
      const securityDecision =
        typeof request.securityDecision.decision === typeof ''
          ? decisionFromJSON(request.securityDecision.decision)
          : request.securityDecision.decision;
      const securityAlreadyDecided =
        securityDecision !== Decision.DECISION_UNKNOWN;
      const superSecurityDecision =
        typeof request.superSecurityDecision.decision === typeof ''
          ? decisionFromJSON(request.superSecurityDecision.decision)
          : request.superSecurityDecision.decision;
      const superSecurityAlreadyDecided =
        superSecurityDecision !== Decision.DECISION_UNKNOWN;
      const needSecurityDecision = request.needSecurityDecision;
      const needSuperSecurityDecision = request.needSuperSecurityDecision;
      const needAdminDecision = request.needAdminDecision;

      switch (type) {
        case ApproverType.ADMIN:
          if (!adminAlreadyDecided && needAdminDecision) {
            updateSetQuery = {
              adminApprovers: removeApproverFromArray(
                removeApproverFromApproversReq.approverId,
                request.securityApprovers
              ),
            };
          }
          break;
        case ApproverType.COMMANDER:
          if (!commanderAlreadyDecided) {
            updateSetQuery = {
              commanders: removeApproverFromArray(
                removeApproverFromApproversReq.approverId,
                request.commanders
              ),
            };
          }
          break;
        case ApproverType.SECURITY:
          if (!securityAlreadyDecided && needSecurityDecision) {
            updateSetQuery = {
              securityApprovers: removeApproverFromArray(
                removeApproverFromApproversReq.approverId,
                request.securityApprovers
              ),
            };
          }
          break;
        case ApproverType.SUPER_SECURITY:
          if (!superSecurityAlreadyDecided && needSuperSecurityDecision) {
            updateSetQuery = {
              superSecurityApprovers: removeApproverFromArray(
                removeApproverFromApproversReq.approverId,
                request.superSecurityApprovers
              ),
            };
          }
          break;
        default:
          throw new Error('ApproverType is not supported!');
      }
      const documentAfter: any = await RequestModel.findOneAndUpdate(
        { _id: removeApproverFromApproversReq.id },
        { $set: updateSetQuery },
        { new: true }
      );
      if (documentAfter) {
        const documentObj = documentAfter.toObject();
        turnObjectIdsToStrings(documentObj);
        return documentObj as Request;
      } else {
        throw new Error(
          `RequestId=${removeApproverFromApproversReq.id} does not exist!`
        );
      }
    } catch (error) {
      throw error;
    }
  }

  async transferRequestToApprovers(
    transferRequestToApproverReq: TransferRequestToApproversReq
  ): Promise<Request> {
    try {
      let updateSetQuery: any = {};
      const type =
        typeof transferRequestToApproverReq.type === typeof ''
          ? approverTypeFromJSON(transferRequestToApproverReq.type)
          : transferRequestToApproverReq.type;
      const commentForApprovers =
        transferRequestToApproverReq.commentForApprovers
          ? transferRequestToApproverReq.commentForApprovers
          : '';
      const overrideApprovers = transferRequestToApproverReq.overrideApprovers
        ? transferRequestToApproverReq.overrideApprovers
        : false;
      const request: any = await this.getRequestById({
        id: transferRequestToApproverReq.id,
      });
      const commanderDecision =
        typeof request.commanderDecision.decision === typeof ''
          ? decisionFromJSON(request.commanderDecision.decision)
          : request.commanderDecision.decision;
      const commanderAlreadyDecided =
        commanderDecision !== Decision.DECISION_UNKNOWN;
      const adminDecision =
        typeof request.adminDecision.decision === typeof ''
          ? decisionFromJSON(request.adminDecision.decision)
          : request.adminDecision.decision;
      const adminAlreadyDecided =
        adminDecision !== Decision.DECISION_UNKNOWN;
      const securityDecision =
        typeof request.securityDecision.decision === typeof ''
          ? decisionFromJSON(request.securityDecision.decision)
          : request.securityDecision.decision;
      const securityAlreadyDecided =
        securityDecision !== Decision.DECISION_UNKNOWN;
      const superSecurityDecision =
        typeof request.superSecurityDecision.decision === typeof ''
          ? decisionFromJSON(request.superSecurityDecision.decision)
          : request.superSecurityDecision.decision;
      const superSecurityAlreadyDecided =
        superSecurityDecision !== Decision.DECISION_UNKNOWN;
      const needSecurityDecision = request.needSecurityDecision;
      const needSuperSecurityDecision = request.needSuperSecurityDecision;
      const needAdminDecision = request.needAdminDecision;
      switch (type) {
        case ApproverType.COMMANDER:
          if (!commanderAlreadyDecided) {
            updateSetQuery = {
              commanders: overrideApprovers
                ? transferRequestToApproverReq.approvers
                : [
                    ...new Map(
                      [
                        ...request.commanders,
                        ...transferRequestToApproverReq.approvers,
                      ].map((item: any) => [item.id, item])
                    ).values(),
                  ],
              'approversComments.commanderComment': commentForApprovers,
            };
          }
          break;
        case ApproverType.SECURITY:
          if (!securityAlreadyDecided && needSecurityDecision) {
            updateSetQuery = {
              securityApprovers: overrideApprovers
                ? transferRequestToApproverReq.approvers
                : [
                    ...new Map(
                      [
                        ...request.securityApprovers,
                        ...transferRequestToApproverReq.approvers,
                      ].map((item: any) => [item.id, item])
                    ).values(),
                  ],
              'approversComments.securityComment': commentForApprovers,
            };
          }
          break;
        case ApproverType.SUPER_SECURITY:
          if (!superSecurityAlreadyDecided && needSuperSecurityDecision) {
            updateSetQuery = {
              superSecurityApprovers: overrideApprovers
                ? transferRequestToApproverReq.approvers
                : [
                    ...new Map(
                      [
                        ...request.superSecurityApprovers,
                        ...transferRequestToApproverReq.approvers,
                      ].map((item: any) => [item.id, item])
                    ).values(),
                  ],
              'approversComments.superSecurityComment': commentForApprovers,
            };
          }
          break;
        case ApproverType.ADMIN:
          if (!adminAlreadyDecided && needAdminDecision) {
            updateSetQuery = {
              adminApprovers: overrideApprovers
                ? transferRequestToApproverReq.approvers
                : [
                    ...new Map(
                      [
                        ...request.commanders,
                        ...transferRequestToApproverReq.approvers,
                      ].map((item: any) => [item.id, item])
                    ).values(),
                  ],
              'approversComments.adminComment': commentForApprovers,
            };
          }
        break;
        default:
          throw new Error('ApproverType is not supported!');
      }
      const documentAfter: any = await RequestModel.findOneAndUpdate(
        { _id: transferRequestToApproverReq.id },
        { $set: updateSetQuery },
        { new: true }
      );
      if (documentAfter) {
        const documentObj = documentAfter.toObject();
        turnObjectIdsToStrings(documentObj);
        return documentObj as Request;
      } else {
        throw new Error(
          `RequestId=${transferRequestToApproverReq.id} does not exist!`
        );
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
      if (updateDecisionReq.approverDecision) {
        updateDecisionReq.approverDecision.date = new Date().getTime();
      }

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
        case PersonTypeInRequest.ADMIN_APPROVER:
          approverField = 'adminDecision';
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
        let oldRequestStatus: any = updatedRequest.status;
        oldRequestStatus =
          typeof oldRequestStatus === typeof ''
            ? requestStatusFromJSON(oldRequestStatus)
            : oldRequestStatus;

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
          // TODO: ask baraks about this if - why update to in progress when request approved?
          if (isRequestApprovedObj.isRequestApproved) {
            newRequestStatus = RequestStatus.IN_PROGRESS;
          } else if (approverType === PersonTypeInRequest.COMMANDER_APPROVER) {
            newRequestStatus = RequestStatus.APPROVED_BY_COMMANDER;
          } else if (approverType === PersonTypeInRequest.SECURITY_APPROVER) {
            newRequestStatus = RequestStatus.APPROVED_BY_SECURITY;
          } else if (approverType === PersonTypeInRequest.ADMIN_APPROVER) {
            newRequestStatus = RequestStatus.APPROVED_BY_ADMIN;
          }
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
            } else if (requestType === RequestType.ADD_APPROVER) {
              adStatus = StageStatus.STAGE_DONE;
              kartoffelStatus = StageStatus.STAGE_DONE;
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
          requestStatusNotificationType: any = undefined,
          approvingMailType: any = undefined;

        // Get notification type
        if (decision === Decision.APPROVED) {
          if (approverType === PersonTypeInRequest.COMMANDER_APPROVER ||
              approverType === PersonTypeInRequest.ADMIN_APPROVER) {
            approvingNotificationType = NotificationType.REQUEST_APPROVED_1;
            approvingMailType = MailType.REQUEST_APPROVED_1;
          } else if (approverType === PersonTypeInRequest.SECURITY_APPROVER) {
            approvingNotificationType = NotificationType.REQUEST_APPROVED_2;
            approvingMailType = MailType.REQUEST_APPROVED_2;
          } else {
            approvingNotificationType = NotificationType.REQUEST_APPROVED_3;
            approvingMailType = MailType.REQUEST_APPROVED_3;
          }
        } else if (decision === Decision.DENIED) {
          if (approverType === PersonTypeInRequest.COMMANDER_APPROVER) {
            approvingNotificationType = NotificationType.REQUEST_DECLINED_1;
            approvingMailType = MailType.REQUEST_DECLINED_1;
          } else if (approverType === PersonTypeInRequest.SECURITY_APPROVER) {
            approvingNotificationType = NotificationType.REQUEST_DECLINED_2;
            approvingMailType = MailType.REQUEST_DECLINED_2;
          } else {
            approvingNotificationType = NotificationType.REQUEST_DECLINED_3;
            approvingMailType = MailType.REQUEST_DECLINED_3;
          }
        }

        try {
          // Send notification
          if (approvingNotificationType) {
            if (
              oldRequestStatus !== RequestStatus.IN_PROGRESS &&
              oldRequestStatus !== RequestStatus.DECLINED
            ) {
              await createNotifications(
                approvingNotificationType,
                updatedRequest
              );
              sendMail(approvingMailType, updatedRequest).then().catch();

              if (newRequestStatus === RequestStatus.IN_PROGRESS) {
                requestStatusNotificationType =
                  NotificationType.REQUEST_IN_PROGRESS;
                await createNotifications(
                  requestStatusNotificationType,
                  updatedRequest
                );
              } else if (newRequestStatus === RequestStatus.DECLINED) {
                requestStatusNotificationType =
                  NotificationType.REQUEST_DECLINED;
                await createNotifications(
                  requestStatusNotificationType,
                  updatedRequest
                );
              }
            }
          }
        } catch (notificationError: any) {
          logger.error('Notification error', {
            error: { message: notificationError.message },
          });
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
        if (incrementRetriesReq.message) {
          kartoffelStatus.message = incrementRetriesReq.message;
        }
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

      try {
        if (properties.status) {
          const status =
            typeof properties.status === typeof ''
              ? requestStatusFromJSON(properties.status)
              : properties.status;
          if (status === RequestStatus.FAILED) {
            await createNotifications(NotificationType.REQUEST_FAILED, request);
            sendMail(MailType.REQUEST_FAILED, request).then().catch();
          }
        }
      } catch (notificationError: any) {
        logger.error('Notification error', {
          error: { message: notificationError.message },
        });
      }

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
        if (incrementRetriesReq.message) {
          adStatus.message = incrementRetriesReq.message;
        }
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
      try {
        if (properties.status) {
          const status =
            typeof properties.status === typeof ''
              ? requestStatusFromJSON(properties.status)
              : properties.status;
          if (status === RequestStatus.FAILED) {
            await createNotifications(NotificationType.REQUEST_FAILED, request);
            sendMail(MailType.REQUEST_FAILED, request).then().catch();
          }
        }
      } catch (notificationError: any) {
        logger.error('Notification error', {
          error: { message: notificationError.message },
        });
      }
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
      const requestBefore = await this.getRequestById({ id: deleteReq.id });
      await RequestModel.deleteMany({
        $or: [{ _id: deleteReq.id }, { bulkRequestId: deleteReq.id }],
      });
      const res: SuccessMessage = {
        success: true,
        message: `Request ${deleteReq.id} was deleted successfully`,
      };
      await createNotifications(
        NotificationType.REQUEST_DELETED,
        requestBefore
      );
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
        const requestType: RequestType =
          typeof documentObj.type === typeof ''
            ? requestTypeFromJSON(documentObj.type)
            : documentObj.type;
        
        // TODO: ask baraks about bulk requests in case of hierarchy needing admin approval
        // if bulk
        if (
          (requestType === RequestType.CREATE_ROLE_BULK ||
            requestType === RequestType.CHANGE_ROLE_HIERARCHY_BULK) &&
          (requestUpdate.commanderDecision ||
            requestUpdate.securityDecision ||
            requestUpdate.superSecurityDecision ||
            requestUpdate.admin ||
            requestUpdate.status)
        ) {
          if (
            requestUpdate.status === undefined ||
            requestUpdate.status === null ||
            (requestUpdate.status !== requestStatusToJSON(RequestStatus.DONE) &&
              requestUpdate.status !==
                requestStatusToJSON(RequestStatus.FAILED) &&
              requestUpdate.status !== RequestStatus.DONE &&
              requestUpdate.status !== RequestStatus.FAILED)
          ) {
            await RequestModel.updateMany(
              { bulkRequestId: updateReq.id },
              { $set: requestUpdate }
            );
          }
        } else if (
          documentObj.isPartOfBulk &&
          documentObj.bulkRequestId &&
          requestUpdate.status !== undefined
        ) {
          // Sync bulk request if all sub-requests are finished
          const bulkRequestId = documentObj.bulkRequestId;
          const areAllSubRequestsFinishedRes =
            await this.areAllSubRequestsFinished({ id: bulkRequestId });
          if (areAllSubRequestsFinishedRes.areAllSubRequestsFinished) {
            await this.syncBulkRequest({ id: bulkRequestId });
          }
        }
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

      // if (
      //   (kartoffelStatus === StageStatus.STAGE_DONE ||
      //     kartoffelStatus === StageStatus.STAGE_FAILED) &&
      //   updatedRequest.submittedBy
      // ) {
      //   const stageNotificationType: NotificationType =
      //     kartoffelStatus === StageStatus.STAGE_DONE
      //       ? NotificationType.KARTOFFEL_STAGE_DONE
      //       : NotificationType.KARTOFFEL_STAGE_FAILED;
      //   await createNotifications(stageNotificationType, updatedRequest);
      // }
      if (
        (requestStatus === RequestStatus.DONE ||
          requestStatus === RequestStatus.FAILED) &&
        updatedRequest.submittedBy
      ) {
        const notificationType: NotificationType =
          requestStatus === RequestStatus.DONE
            ? NotificationType.REQUEST_DONE
            : NotificationType.REQUEST_FAILED;
        const mailType: MailType =
          requestStatus === RequestStatus.DONE
            ? MailType.REQUEST_DONE
            : MailType.REQUEST_FAILED;
        try {
          await createNotifications(notificationType, updatedRequest);
          sendMail(mailType, updatedRequest).then().catch();
        } catch (notificationError: any) {
          logger.error('Notification error', {
            error: { message: notificationError.message },
          });
        }
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
      // if (
      //   (adStatus === StageStatus.STAGE_DONE ||
      //     adStatus === StageStatus.STAGE_FAILED) &&
      //   updatedRequest.submittedBy
      // ) {
      //   const stageNotificationType: NotificationType =
      //     adStatus === StageStatus.STAGE_DONE
      //       ? NotificationType.AD_STAGE_DONE
      //       : NotificationType.AD_STAGE_FAILED;
      //   await createNotifications(stageNotificationType, updatedRequest);
      // }
      if (
        requestStatus === RequestStatus.FAILED &&
        updatedRequest.submittedBy
      ) {
        const notificationType: NotificationType =
          NotificationType.REQUEST_FAILED;
        const mailType: MailType = MailType.REQUEST_FAILED;
        try {
          await createNotifications(notificationType, updatedRequest);
          sendMail(mailType, updatedRequest).then().catch();
        } catch (notificationError: any) {
          logger.error('Notification error', {
            error: { message: notificationError.message },
          });
        }
      }
      return updatedRequest;
    } catch (error) {
      throw error;
    }
  }

  setNeedApproversDecisionsValues(request: any, type: RequestType, needAdminDecision = false): void {
    // TODO: I think add here function call to liora's function to know if admin decision needed
    switch (type) {
      case RequestType.CREATE_OG:
        request.needAdminDecision = needAdminDecision;
        request.needSecurityDecision = false;
        request.needSuperSecurityDecision = false;
        break;

      case RequestType.CREATE_ROLE:
        request.needAdminDecision = needAdminDecision;
        request.needSecurityDecision = true;
        request.needSuperSecurityDecision = false;
        break;
      case RequestType.ASSIGN_ROLE_TO_ENTITY:
        request.needAdminDecision = needAdminDecision;
        request.needSecurityDecision = true;
        request.needSuperSecurityDecision = false;
        break;

      case RequestType.CREATE_ENTITY:
        request.needAdminDecision = needAdminDecision;
        request.needSecurityDecision = false;
        request.needSuperSecurityDecision = false;
        break;

      case RequestType.DELETE_ENTITY:
        request.needAdminDecision = needAdminDecision;
        request.needSecurityDecision = false;
        request.needSuperSecurityDecision = false;
        break;

      case RequestType.RENAME_OG:
        request.needAdminDecision = needAdminDecision;
        request.needSecurityDecision = true;
        request.needSuperSecurityDecision = true;
        break;

      case RequestType.RENAME_ROLE:
        request.needAdminDecision = needAdminDecision;
        request.needSecurityDecision = true;
        request.needSuperSecurityDecision = true;
        break;

      case RequestType.EDIT_ENTITY:
        request.needAdminDecision = needAdminDecision;
        request.needSecurityDecision = false;
        request.needSuperSecurityDecision = false;
        break;

      case RequestType.DELETE_OG:
        request.needAdminDecision = needAdminDecision;
        request.needSecurityDecision = false;
        request.needSuperSecurityDecision = false;
        break;

      case RequestType.DELETE_ROLE:
        request.needAdminDecision = needAdminDecision;
        request.needSecurityDecision = false;
        request.needSuperSecurityDecision = false;
        break;

      case RequestType.DISCONNECT_ROLE:
        request.needAdminDecision = needAdminDecision;
        request.needSecurityDecision = false;
        request.needSuperSecurityDecision = false;
        break;
      case RequestType.CHANGE_ROLE_HIERARCHY:
        request.needAdminDecision = needAdminDecision;
        request.needSecurityDecision = true;
        request.needSuperSecurityDecision = true;
        break;
      case RequestType.CREATE_ROLE_BULK:
        request.needAdminDecision = needAdminDecision;
        request.needSecurityDecision = true;
        request.needSuperSecurityDecision = false;
        break;
      case RequestType.CHANGE_ROLE_HIERARCHY_BULK:
        request.needAdminDecision = needAdminDecision;
        request.needSecurityDecision = true;
        request.needSuperSecurityDecision = true;
        break;

      case RequestType.ADD_APPROVER:
        const approverType = approverTypeFromJSON(
          request.additionalParams.type
        );
        if (approverType === ApproverType.COMMANDER) {
        request.needAdminDecision = needAdminDecision;
          request.needSecurityDecision = false;
          request.needSuperSecurityDecision = false;
        } else if (approverType === ApproverType.ADMIN) {
        request.needAdminDecision = needAdminDecision;
          request.needSecurityDecision = false;
          request.needSuperSecurityDecision = false;
        } else if (approverType === ApproverType.BULK) {
        request.needAdminDecision = needAdminDecision;
          request.needSecurityDecision = false;
          request.needSuperSecurityDecision = false;
        } else if (approverType === ApproverType.SECURITY) {
        request.needAdminDecision = needAdminDecision;
          request.needSecurityDecision = true;
          request.needSuperSecurityDecision = false;
        } else if (approverType === ApproverType.SUPER_SECURITY) {
          request.needAdminDecision = needAdminDecision;
          request.needSecurityDecision = false;
          request.needSuperSecurityDecision = true;
        } else if (approverType === ApproverType.SPECIAL_GROUP) {
          request.needAdminDecision = needAdminDecision;
          request.needSecurityDecision = false;
          request.needSuperSecurityDecision = false;
        } else {
          request.needAdminDecision = needAdminDecision;
          request.needSecurityDecision = true;
          request.needSuperSecurityDecision = false;
        }
        break;
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

  async updateAdminApprovers(
    updateApproversReq: UpdateApproversReq
  ): Promise<Request> {
    try {
      const request: Request = await this.updateRequest({
        id: updateApproversReq.id,
        requestProperties: { adminApprovers: updateApproversReq.approvers },
      });
      return request;
    } catch (error) {
      throw error;
    }
  }

  async getRequestsByPerson(getRequestsByPersonReq: GetRequestsByPersonReq) {
    try {
      let query: any = {};
      let sortQuery: any = {
        sortStatusId: 1,
        createdAt: 1,
      };

      let waitingForApproveCount = 0;

      const personTypeInRequest: PersonTypeInRequest =
        typeof getRequestsByPersonReq.personType === typeof ''
          ? personTypeInRequestFromJSON(getRequestsByPersonReq.personType)
          : getRequestsByPersonReq.personType;
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

      query = getPersonQuery(
        getRequestsByPersonReq.id,
        personTypeInRequest,
        approvementStatus,
        userType
      );
      query.isPartOfBulk = false;
      if (getRequestsByPersonReq.status) {
        const statusQuery = getStatusQuery(getRequestsByPersonReq.status);
        query = { ...query, ...statusQuery };
      }
      if (getRequestsByPersonReq.type) {
        const requestTypeQuery = getRequestTypeQuery(
          getRequestsByPersonReq.type
        );
        query = { ...query, ...requestTypeQuery };
      }
      if (getRequestsByPersonReq.sortField) {
        sortQuery = getSortQuery(
          getRequestsByPersonReq.sortField,
          getRequestsByPersonReq.sortOrder
            ? getRequestsByPersonReq.sortOrder
            : SortOrder.DEC
        );
      }

      if (getRequestsByPersonReq.searchQuery) {
        const searchQuery = getSearchQuery(getRequestsByPersonReq.searchQuery);
        if (query['$or']) {
          query['$and'] = [{ $or: query['$or'] }, searchQuery];
          delete query['$or'];
        } else {
          query = { ...query, ...searchQuery };
        }
      }

      if (
        approvementStatus === ApprovementStatus.BY_USER_TYPE &&
        getRequestsByPersonReq.groupsInCharge &&
        userType.includes(ApproverType.ADMIN)
      ) {
        const ancestorsQuery = getAncestorsQuery(
          getRequestsByPersonReq.groupsInCharge
        );
        if (query['$or']) {
          query['$and'] = [{ $or: query['$or'] }, ancestorsQuery];
          delete query['$or'];
        } else {
          query = { ...query, ...ancestorsQuery };
        }
      }

      const addFields: any = {
        serialNumberStr: { $toString: '$serialNumber' },
        sortStatusId: {
          $switch: {
            branches: [
              { case: { $eq: ['$status', 'SUBMITTED'] }, then: 0 },
              {
                case: { $eq: ['$status', 'APPROVED_BY_COMMANDER'] },
                then: 1,
              },
              {
                case: { $eq: ['$status', 'APPROVED_BY_SECURITY'] },
                then: 2,
              },
               {
                case: { $eq: ['$status', 'APPROVED_BY_ADMIN'] },
                then: 3,
              },
              { case: { $eq: ['$status', 'IN_PROGRESS'] }, then: 4 },
              { case: { $eq: ['$status', 'FAILED'] }, then: 5 },
              { case: { $eq: ['$status', 'DECLINED'] }, then: 6 },
              { case: { $eq: ['$status', 'DONE'] }, then: 7 },
            ],
            default: 0,
          },
        },
      };

      const totalCount = await RequestModel.count(query);
      const requests: any = await RequestModel.aggregate([
        {
          $addFields: addFields,
        },
        { $match: query },
        { $sort: sortQuery },
        { $skip: getRequestsByPersonReq.from - 1 },
        { $limit: getRequestsByPersonReq.to - getRequestsByPersonReq.from + 1 },
      ]);

      const waitingForApproveCountQuery =
        getWaitingForApproveCountQuery(userType);
      if (query['$or']) {
        if (!query['$and']) {
          query['$and'] = [];
        }
        query['$and'].push({ $or: query['$or'] });
        query['$and'].push(waitingForApproveCountQuery);
        delete query['$or'];
      } else {
        query = { ...query, ...waitingForApproveCountQuery };
      }
      waitingForApproveCount = await RequestModel.count(query);
      if (requests) {
        let documents: any = [];
        for (let i = 0; i < requests.length; i++) {
          const requestObj: any = requests[i];
          turnObjectIdsToStrings(requestObj);
          documents.push(requestObj);
        }
        return {
          requests: documents,
          totalCount: totalCount,
          waitingForApproveCount: waitingForApproveCount,
        };
      } else {
        return { requests: [], totalCount: 0, waitingForApproveCount: 0 };
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

  async areAllSubRequestsFinished(
    areAllSubRequestsFinishedReq: AreAllSubRequestsFinishedReq
  ): Promise<AreAllSubRequestsFinishedRes> {
    try {
      const documents: any = await RequestModel.find({
        bulkRequestId: areAllSubRequestsFinishedReq.id,
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
          if (
            smallRequestStatus !== RequestStatus.DONE &&
            smallRequestStatus !== RequestStatus.FAILED
          ) {
            return { areAllSubRequestsFinished: false };
          }
        }
        return { areAllSubRequestsFinished: true };
      } else {
        throw new Error(
          `No bulk request with id=${areAllSubRequestsFinishedReq.id}`
        );
      }
    } catch (error) {
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
          : { rowErrors: rowErrors };
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
