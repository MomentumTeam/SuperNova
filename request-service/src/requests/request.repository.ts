import { PersonTypeInRequest } from '../enums/personTypeInRequest.enum';
import {
  CanPushToQueueReq,
  CanPushToQueueRes,
  Decision,
  decisionFromJSON,
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
  RequestStatus,
  requestStatusToJSON,
  RequestType,
  requestTypeToJSON,
  SearchRequestsByDisplayNameReq,
  StageStatus,
  stageStatusFromJSON,
  stageStatusToJSON,
  SuccessMessage,
  UpdateADStatusReq,
  UpdateDecisionReq,
  UpdateKartoffelStatusReq,
} from '../interfaces/protoc/proto/requestService';
import * as C from '../config';
import { RequestModel } from '../models/request.model';
import { logger } from '../logger';

export class RequestRepository {
  private cleanUnderscoreFields(document: any): void {
    let keys: any = Object.keys(document);

    for (let key of keys) {
      if (key.startsWith('_') && key !== '_id') {
        delete document[key];
      }
    }
  }

  private cleanNullFields(document: any): void {
    let keys: any = Object.keys(document);

    for (let key of keys) {
      if (
        typeof document[key] !== typeof true &&
        (!document[key] || document[key] == null)
      ) {
        delete document[key];
      }
    }
    if (document.kartoffelParams) {
      keys = Object.keys(document.kartoffelParams);

      for (let key of keys) {
        if (
          typeof document.kartoffelParams[key] !== typeof true &&
          (!document.kartoffelParams[key] ||
            document.kartoffelParams[key] == null)
        ) {
          delete document.kartoffelParams[key];
        }
      }
    }
    if (document.adParams) {
      keys = Object.keys(document.adParams);

      for (let key of keys) {
        if (
          typeof document.adParams[key] !== typeof true &&
          (!document.adParams[key] || document.adParams[key] == null)
        ) {
          delete document.adParams[key];
        }
      }
    }
  }

  private turnIdOfApproverToString(approver: any) {
    if (approver.id) {
      approver.id = approver.id.toString();
    }
    return approver;
  }

  private turnObjectIdsToStrings(document: any): void {
    //_id
    if (document._id) {
      document._id = document._id.toString();
      document.id = document._id;
    }

    //submittedBy
    if (document.submittedBy) {
      this.turnIdOfApproverToString(document.submittedBy);
    }

    //commanderDecision
    if (document.commanderDecision && document.commanderDecision.approver) {
      this.turnIdOfApproverToString(document.commanderDecision.approver);
    }

    //securityDecision
    if (document.securityDecision && document.securityDecision.approver) {
      this.turnIdOfApproverToString(document.securityDecision.approver);
    }

    //superSecurityDecision
    if (
      document.superSecurityDecision &&
      document.superSecurityDecision.approver
    ) {
      this.turnIdOfApproverToString(document.superSecurityDecision.approver);
    }

    //commanders
    if (document.commanders) {
      document.commanders.forEach((commander: any) => {
        this.turnIdOfApproverToString(commander);
      });
    }

    //securityApprovers
    if (document.securityApprovers) {
      document.securityApprovers.forEach((securityApprover: any) => {
        this.turnIdOfApproverToString(securityApprover);
      });
    }

    if (document.kartoffelProperties && document.kartoffelProperties.id) {
      document.kartoffelProperties.id =
        document.kartoffelProperties.id.toString();
    }
    this.cleanUnderscoreFields(document);
    this.cleanNullFields(document);
  }

  async canPushToKartoffelQueue(
    canPushToQueueReq: CanPushToQueueReq
  ): Promise<CanPushToQueueRes> {
    try {
      const request = await RequestModel.findOne({
        _id: canPushToQueueReq.id,
      });
      if (request) {
        const document: any = request.toObject();
        this.turnObjectIdsToStrings(document);
        const commanderDecision: Decision = document.commanderDecision
          ? decisionFromJSON(document.commanderDecision.decision)
          : Decision.DECISION_UNKNOWN;
        const securityDecision: Decision = document.securityDecision
          ? decisionFromJSON(document.securityDecision.decision)
          : Decision.DECISION_UNKNOWN;
        const superSecurityDecision: Decision = document.superSecurityDecision
          ? decisionFromJSON(document.superSecurityDecision.decision)
          : Decision.DECISION_UNKNOWN;
        const needSuperSecurityDecision = document.needSuperSecurityDecision;
        const due: number = document.due;
        const kartoffelFailedRetries = document.kartoffelStatus.failedRetries;
        const now = new Date().getTime();
        let canPushToQueue: boolean = false;
        if (
          commanderDecision === Decision.APPROVED &&
          securityDecision === Decision.APPROVED &&
          (!needSuperSecurityDecision ||
            superSecurityDecision === Decision.APPROVED) &&
          due <= now &&
          kartoffelFailedRetries < C.maxQueueRetries
        ) {
          canPushToQueue = true;
        } else {
          canPushToQueue = false;
        }
        logger.info(`canPushToKartoffelQueue for id=${canPushToQueueReq.id}`, {
          canPushToQueueReq,
          commanderDecision,
          securityDecision,
          superSecurityDecision,
          needSuperSecurityDecision,
          due,
          kartoffelFailedRetries,
          now,
          canPushToQueue,
        });
        return {
          canPushToQueue: canPushToQueue,
        };
      } else {
        logger.error(`canPushToKartoffelQueue ERROR`, {
          error: `A request with {id: ${canPushToQueueReq.id}} was not found!`,
        });
        throw new Error(
          `A request with {id: ${canPushToQueueReq.id}} was not found!`
        );
      }
    } catch (error) {
      logger.error(`canPushToKartoffelQueue ERROR`, {
        error,
      });
      throw error;
    }
  }

  async canPushToADQueue(
    canPushToQueueReq: CanPushToQueueReq
  ): Promise<CanPushToQueueRes> {
    try {
      const request = await RequestModel.findOne({
        _id: canPushToQueueReq.id,
      });
      if (request) {
        const document: any = request.toObject();
        this.turnObjectIdsToStrings(document);
        const kartoffelStageStatus = stageStatusFromJSON(
          document.kartoffelStatus.status
        );
        const adFailedRetries = document.adStatus.failedRetries;
        let canPushToQueue: boolean = false;
        if (
          kartoffelStageStatus === StageStatus.STAGE_DONE &&
          adFailedRetries < C.maxQueueRetries
        ) {
          canPushToQueue = true;
        } else {
          canPushToQueue = false;
        }
        logger.info(`canPushToADQueue for id=${canPushToQueueReq.id}`, {
          canPushToQueueReq,
          adFailedRetries,
          kartoffelStageStatus,
          canPushToQueue,
        });
        return {
          canPushToQueue: canPushToQueue,
        };
      } else {
        logger.error(`canPushToADQueue ERROR`, {
          error: `A request with {id: ${canPushToQueueReq.id}} was not found!`,
        });
        throw new Error(
          `A request with {id: ${canPushToQueueReq.id}} was not found!`
        );
      }
    } catch (error) {
      logger.error(`canPushToADQueue ERROR`, {
        error,
      });
      throw error;
    }
  }

  async updateApproverDecision(
    updateDecisionReq: UpdateDecisionReq,
    personType: PersonTypeInRequest
  ): Promise<Request> {
    try {
      let updateQuery: any = {
        id: updateDecisionReq.id,
        requestProperties: {},
      };
      let approverField;
      if (personType === PersonTypeInRequest.COMMANDER) {
        approverField = 'commanderDecision';
      } else if (personType === PersonTypeInRequest.SECURITY_APPROVER) {
        approverField = 'securityDecision';
      } else {
        approverField = 'superSecurityDecision';
        // PersonTypeInRequest.SUPER_SECURITY_APPROVER
      }
      updateQuery.requestProperties[approverField] =
        updateDecisionReq.approverDecision;
      const updatedRequest = await this.updateRequest(updateQuery);
      logger.info(`updateApproverDecision`, {
        updateDecisionReq,
        personType,
        updateQuery,
      });
      return updatedRequest;
    } catch (error) {
      logger.error(`updateApproverDecision ERROR`, {
        error,
      });
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
      let kartoffelStatus = request.kartoffelStatus;
      if (kartoffelStatus) {
        if (kartoffelStatus.failedRetries >= C.maxQueueRetries) {
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
          logger.info(`incrementKartoffelRetries`, {
            incrementRetriesReq,
            updateQuery,
          });
          return updatedRequest;
        }
      } else {
        logger.error(`incrementKartoffelRetries ERROR`, {
          request,
          error: `kartoffel status is null for requestId ${incrementRetriesReq.id}`,
        });
        throw new Error(
          `kartoffel status is null for requestId ${incrementRetriesReq.id}`
        );
      }
    } catch (error) {
      logger.error(`incrementKartoffelRetries ERROR`, {
        error,
      });
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
      let adStatus = request.adStatus;
      if (adStatus) {
        if (adStatus.failedRetries >= C.maxQueueRetries) {
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
          logger.info(`incrementADRetries`, {
            incrementRetriesReq,
            updateQuery,
          });
          return updatedRequest;
        }
      } else {
        logger.error(`incrementADRetries ERROR`, {
          error: `AD status is null for requestId ${incrementRetriesReq.id}`,
          request,
        });
        throw new Error(
          `AD status is null for requestId ${incrementRetriesReq.id}`
        );
      }
    } catch (error) {
      logger.error(`incrementADRetries ERROR`, {
        error,
      });
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
          this.turnObjectIdsToStrings(requestObj);
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
      } else if (personType === PersonTypeInRequest.COMMANDER) {
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

  async getRequestsByIdentifier(
    getRequestsByIdentifierReq: GetRequestsByIdentifierReq,
    personType: PersonTypeInRequest
  ): Promise<RequestArray> {
    try {
      let query: any = {};
      const identifier = getRequestsByIdentifierReq.identifier;
      if (personType === PersonTypeInRequest.SUBMITTER) {
        query = {
          $or: [
            { 'submittedBy.personalNumber': identifier },
            { 'submittedBy.identityCard': identifier },
          ],
        };
      } else if (personType === PersonTypeInRequest.COMMANDER) {
        query = {
          $or: [
            { 'commanders.personalNumber': identifier },
            { 'commanders.identityCard': identifier },
          ],
        };
      } else if (personType === PersonTypeInRequest.SECURITY_APPROVER) {
        query = {
          $or: [
            { 'securityApprovers.personalNumber': identifier },
            { 'securityApprovers.identityCard': identifier },
          ],
        };
      } else {
        //approver
        query = {
          $or: [
            { 'submittedBy.personalNumber': identifier },
            { 'submittedBy.identityCard': identifier },
            { 'commanders.personalNumber': identifier },
            { 'commanders.identityCard': identifier },
            { 'securityApprovers.personalNumber': identifier },
            { 'securityApprovers.identityCard': identifier },
          ],
        };
      }
      const requestArray = await this.getRequestsByQuery(
        query,
        true,
        getRequestsByIdentifierReq.from,
        getRequestsByIdentifierReq.to
      );
      return requestArray;
    } catch (error) {
      throw error;
    }
  }

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
      let requestUpdate: any = { ...updateReq.requestProperties };
      this.cleanUnderscoreFields(requestUpdate);

      let commanderApproverIdInUpdate: any = undefined,
        securityApproverIdInUpdate: any = undefined,
        superSecurityApproverIdInUpdate: any = undefined,
        commanderApproverDecisionInUpdate: any = undefined,
        securityApproverDecisionInUpdate: any = undefined,
        superSecurityApproverDecisionInUpdate: any = undefined,
        kartoffelStageStatusInUpdate: any = undefined,
        adStageStatusInUpdate: any = undefined;

      let commanderApproverDecisionInDocument: Decision =
          Decision.DECISION_UNKNOWN,
        securityApproverDecisionInDocument: Decision =
          Decision.DECISION_UNKNOWN,
        superSecurityApproverDecisionInDocument: Decision =
          Decision.DECISION_UNKNOWN,
        kartoffelStageStatusInDocument: StageStatus = StageStatus.STAGE_UNKNOWN,
        adStageStatusInDocument: StageStatus = StageStatus.STAGE_UNKNOWN;

      if (
        updateReq &&
        updateReq.requestProperties &&
        updateReq.requestProperties.kartoffelStatus &&
        updateReq.requestProperties.kartoffelStatus.status
      ) {
        // kartoffel status in update
        kartoffelStageStatusInUpdate = stageStatusFromJSON(
          updateReq.requestProperties.kartoffelStatus.status
        );
      }

      if (
        updateReq &&
        updateReq.requestProperties &&
        updateReq.requestProperties.adStatus &&
        updateReq.requestProperties.adStatus.status
      ) {
        // ad status in update
        adStageStatusInUpdate = stageStatusFromJSON(
          updateReq.requestProperties.adStatus.status
        );
      }

      if (
        updateReq &&
        updateReq.requestProperties &&
        updateReq.requestProperties.commanderDecision &&
        updateReq.requestProperties.commanderDecision.approver
      ) {
        // commander decision in update
        commanderApproverIdInUpdate =
          updateReq.requestProperties.commanderDecision.approver.id;
        commanderApproverDecisionInUpdate = decisionFromJSON(
          updateReq.requestProperties.commanderDecision.decision
        );
      }

      if (
        updateReq &&
        updateReq.requestProperties &&
        updateReq.requestProperties.superSecurityDecision &&
        updateReq.requestProperties.superSecurityDecision.approver
      ) {
        // commander decision in update
        superSecurityApproverIdInUpdate =
          updateReq.requestProperties.superSecurityDecision.approver.id;
        superSecurityApproverDecisionInUpdate = decisionFromJSON(
          updateReq.requestProperties.superSecurityDecision.decision
        );
      }

      if (
        updateReq &&
        updateReq.requestProperties &&
        updateReq.requestProperties.securityDecision &&
        updateReq.requestProperties.securityDecision.approver
      ) {
        // security decision in update
        securityApproverIdInUpdate =
          updateReq.requestProperties.securityDecision.approver.id;
        securityApproverDecisionInUpdate = decisionFromJSON(
          updateReq.requestProperties.securityDecision.decision
        );
      }

      if (
        commanderApproverIdInUpdate ||
        securityApproverIdInUpdate ||
        kartoffelStageStatusInUpdate ||
        adStageStatusInUpdate
      ) {
        //update includes decision/stage update
        const documentBefore = await RequestModel.findOne({
          _id: updateReq.id,
        });
        if (documentBefore) {
          const documentBeforeObj: any = documentBefore.toObject();
          this.turnObjectIdsToStrings(documentBeforeObj);
          const needSuperSecurityDecision =
            documentBeforeObj.needSuperSecurityDecision;

          // if (
          //   (commanderApproverIdInUpdate &&
          //     (!documentBeforeObj.commanders ||
          //       !documentBeforeObj.commanders.some(
          //         (commander: any) =>
          //           commander.id === commanderApproverIdInUpdate
          //       ))) ||
          //   (securityApproverIdInUpdate &&
          //     (!documentBeforeObj.securityApprovers ||
          //       (securityApproverIdInUpdate &&
          //         !documentBeforeObj.securityApprovers.some(
          //           (securityApprover: any) =>
          //             securityApprover.id === securityApproverIdInUpdate
          //         ))))
          // ) {
          //   //if one of the approvers does not exist in commanders or securityApprovers, so it is not allowed
          //   throw new Error(
          //     `Commander or security approver is not allowed to decide on this request!`
          //   );
          // }

          if (
            documentBeforeObj.commanderDecision &&
            documentBeforeObj.commanderDecision.decision
          ) {
            // commander decision in document
            commanderApproverDecisionInDocument = decisionFromJSON(
              documentBeforeObj.commanderDecision.decision
            );
          }

          if (
            documentBeforeObj.securityDecision &&
            documentBeforeObj.securityDecision.decision
          ) {
            // commander decision in document
            securityApproverDecisionInDocument = decisionFromJSON(
              documentBeforeObj.securityDecision.decision
            );
          }

          if (
            documentBeforeObj.superSecurityDecision &&
            documentBeforeObj.superSecurityDecision.decision
          ) {
            // commander decision in document
            superSecurityApproverDecisionInDocument = decisionFromJSON(
              documentBeforeObj.superSecurityDecision.decision
            );
          }

          if (
            commanderApproverDecisionInUpdate ||
            securityApproverDecisionInUpdate ||
            superSecurityApproverDecisionInUpdate
          ) {
            if (
              commanderApproverDecisionInUpdate === Decision.DENIED ||
              (!commanderApproverDecisionInUpdate &&
                commanderApproverDecisionInDocument === Decision.DENIED) ||
              securityApproverDecisionInUpdate === Decision.DENIED ||
              (!securityApproverDecisionInUpdate &&
                securityApproverDecisionInDocument === Decision.DENIED) ||
              (needSuperSecurityDecision &&
                (superSecurityApproverDecisionInUpdate === Decision.DENIED ||
                  (!superSecurityApproverDecisionInUpdate &&
                    superSecurityApproverDecisionInDocument ===
                      Decision.DENIED)))
            ) {
              // if one of the approvers denied the request
              requestUpdate.status = requestStatusToJSON(
                RequestStatus.DECLINED
              );
            } else if (
              (commanderApproverDecisionInUpdate === Decision.APPROVED ||
                (!commanderApproverDecisionInUpdate &&
                  commanderApproverDecisionInDocument === Decision.APPROVED)) &&
              (securityApproverDecisionInUpdate === Decision.APPROVED ||
                (!securityApproverDecisionInUpdate &&
                  securityApproverDecisionInDocument === Decision.APPROVED))
            ) {
              // if both approvers approved the request
              requestUpdate.status = requestStatusToJSON(
                RequestStatus.IN_PROGRESS
              );
            }
          }

          if (
            documentBeforeObj.kartoffelStatus &&
            documentBeforeObj.kartoffelStatus.status
          ) {
            // kartoffel status in document
            kartoffelStageStatusInDocument = stageStatusFromJSON(
              documentBeforeObj.kartoffelStatus.status
            );
          }

          if (documentBeforeObj.adStatus && documentBeforeObj.adStatus.status) {
            // ad status in document
            adStageStatusInDocument = stageStatusFromJSON(
              documentBeforeObj.adStatus.status
            );
          }

          if (kartoffelStageStatusInUpdate || adStageStatusInUpdate) {
            if (
              ((!kartoffelStageStatusInUpdate &&
                kartoffelStageStatusInDocument === StageStatus.STAGE_DONE) ||
                kartoffelStageStatusInUpdate === StageStatus.STAGE_DONE) &&
              ((!adStageStatusInUpdate &&
                adStageStatusInDocument === StageStatus.STAGE_DONE) ||
                adStageStatusInUpdate === StageStatus.STAGE_DONE)
            ) {
              // if both stages are done
              requestUpdate.status = requestStatusToJSON(RequestStatus.DONE);
            } else if (
              (!kartoffelStageStatusInUpdate &&
                kartoffelStageStatusInDocument === StageStatus.STAGE_FAILED) ||
              kartoffelStageStatusInUpdate === StageStatus.STAGE_FAILED ||
              (!adStageStatusInUpdate &&
                adStageStatusInDocument === StageStatus.STAGE_FAILED) ||
              adStageStatusInUpdate === StageStatus.STAGE_FAILED
            ) {
              // if both stages are failed
              requestUpdate.status = requestStatusToJSON(RequestStatus.FAILED);
            }
          }
        } else {
          throw new Error(
            `A request with {_id: ${updateReq.id}} was not found!`
          );
        }
      }

      const documentAfter: any = await RequestModel.findOneAndUpdate(
        { _id: updateReq.id },
        { $set: requestUpdate },
        { new: true }
      );
      if (documentAfter) {
        const documentObj = documentAfter.toObject();
        this.turnObjectIdsToStrings(documentObj);
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
    try {
      this.cleanUnderscoreFields(updateKartoffelStatusReq);
      let requestUpdate: any = {
        id: updateKartoffelStatusReq.requestId,
        requestProperties: {
          kartoffelStatus: {
            status: updateKartoffelStatusReq.status,
            message: updateKartoffelStatusReq.message,
            createdId: updateKartoffelStatusReq.createdId,
          },
        },
      };
      return await this.updateRequest(requestUpdate);
    } catch (error) {
      throw error;
    }
  }

  async updateADStatus(updateADStatusReq: UpdateADStatusReq): Promise<Request> {
    try {
      this.cleanUnderscoreFields(updateADStatusReq);
      let requestUpdate: any = {
        id: updateADStatusReq.requestId,
        requestProperties: {
          adStatus: {
            status: updateADStatusReq.status,
            message: updateADStatusReq.message,
          },
        },
      };
      if (updateADStatusReq.status === StageStatus.STAGE_FAILED) {
        requestUpdate.requestProperties.status = requestStatusToJSON(
          RequestStatus.FAILED
        );
      }
      return await this.updateRequest(requestUpdate);
    } catch (error) {
      throw error;
    }
  }

  async createRequest(
    createRequestReq: any,
    type: RequestType
  ): Promise<Request> {
    try {
      const request: any = new RequestModel(createRequestReq);
      request.type = requestTypeToJSON(type);
      request.createdAt = new Date().getTime();

      const createdCreateRequest = await request.save();
      const document = createdCreateRequest.toObject();
      this.turnObjectIdsToStrings(document);
      return document as Request;
    } catch (error) {
      throw error;
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
        this.turnObjectIdsToStrings(document);
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
        this.turnObjectIdsToStrings(document);
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

  async getRequestsByPersonId(
    getRequestsByPersonIdReq: GetRequestsByPersonIdReq,
    personTypeInRequest: PersonTypeInRequest
  ) {
    try {
      const field =
        personTypeInRequest === PersonTypeInRequest.COMMANDER
          ? 'commanders.id'
          : 'submittedBy.id';
      const totalCount = await RequestModel.count({
        [field]: getRequestsByPersonIdReq.id,
      });
      const requests: any = await RequestModel.find(
        {
          [field]: getRequestsByPersonIdReq.id,
        },
        {},
        {
          skip: getRequestsByPersonIdReq.from - 1,
          limit:
            getRequestsByPersonIdReq.to - getRequestsByPersonIdReq.from + 1,
        }
      ).sort([['updatedAt', -1]]);
      if (requests) {
        let documents: any = [];
        for (let i = 0; i < requests.length; i++) {
          const requestObj: any = requests[i].toObject();
          this.turnObjectIdsToStrings(requestObj);
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
