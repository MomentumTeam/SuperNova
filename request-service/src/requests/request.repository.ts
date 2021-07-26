import { PersonTypeInRequest } from '../enums/personTypeInRequest.enum';
import {
  Decision,
  decisionFromJSON,
  decisionToJSON,
  DeleteReq,
  GetAllRequestsReq,
  GetRequestByIdReq,
  GetRequestBySerialNumberReq,
  GetRequestsByPersonIdReq,
  Request,
  RequestArray,
  RequestStatus,
  requestStatusToJSON,
  RequestType,
  requestTypeToJSON,
  StageStatus,
  stageStatusFromJSON,
  SuccessMessage,
  UpdateADStatusReq,
  UpdateKartoffelStatusReq,
} from '../interfaces/protoc/proto/requestService';
import { RequestModel } from '../models/request.model';

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
      if (!document[key] || document[key] == null) {
        delete document[key];
      }
    }
    if (document.kartoffelParams) {
      keys = Object.keys(document.kartoffelParams);

      for (let key of keys) {
        if (
          !document.kartoffelParams[key] ||
          document.kartoffelParams[key] == null
        ) {
          delete document.kartoffelParams[key];
        }
      }
    }
    if (document.adParams) {
      keys = Object.keys(document.adParams);

      for (let key of keys) {
        if (!document.adParams[key] || document.adParams[key] == null) {
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
        commanderApproverDecisionInUpdate: any = undefined,
        securityApproverDecisionInUpdate: any = undefined,
        kartoffelStageStatusInUpdate: any = undefined,
        adStageStatusInUpdate: any = undefined;

      let commanderApproverDecisionInDocument: Decision =
          Decision.DECISION_UNKNOWN,
        securityApproverDecisionInDocument: Decision =
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

          if (
            (commanderApproverIdInUpdate &&
              (!documentBeforeObj.commanders ||
                !documentBeforeObj.commanders.some(
                  (commander: any) =>
                    commander.id === commanderApproverIdInUpdate
                ))) ||
            (securityApproverIdInUpdate &&
              (!documentBeforeObj.securityApprovers ||
                (securityApproverIdInUpdate &&
                  !documentBeforeObj.securityApprovers.some(
                    (securityApprover: any) =>
                      securityApprover.id === securityApproverIdInUpdate
                  ))))
          ) {
            //if one of the approvers does not exist in commanders or securityApprovers, so it is not allowed
            throw new Error(
              `Commander or security approver is not allowed to decide on this request!`
            );
          }

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
            commanderApproverDecisionInUpdate ||
            securityApproverDecisionInUpdate
          ) {
            if (
              commanderApproverDecisionInUpdate === Decision.DENIED ||
              (!commanderApproverDecisionInUpdate &&
                commanderApproverDecisionInDocument === Decision.DENIED) ||
              securityApproverDecisionInUpdate === Decision.DENIED ||
              (!securityApproverDecisionInUpdate &&
                securityApproverDecisionInDocument === Decision.DENIED)
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
      const totalCount = await RequestModel.count({});
      const requests: any = await RequestModel.find(
        {},
        {},
        {
          skip: getAllRequestsReq.from - 1,
          limit: getAllRequestsReq.to - getAllRequestsReq.from + 1,
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
        return {
          requests: [],
          totalCount: 0,
        };
      }
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
          ? 'commanders'
          : 'submittedBy';
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
function decisionFromJson(decision: any) {
  throw new Error('Function not implemented.');
}
