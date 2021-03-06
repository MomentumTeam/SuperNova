import { Response } from 'express';
import { logger } from '../utils/logger/logger';
import {
  SearchByDisplayNameReq,
  GetAllApproversReq,
  SearchByDomainUserReq,
  GetUserTypeReq,
  AddApproverReq,
  DeleteApproverReq,
  SearchHighCommandersByDisplayNameReq,
  UpdateApproverDecisionReq,
  IsApproverValidForOGReq,
} from '../interfaces/protoc/proto/approverService';
import { ApproverService } from './approver.service';
import { KartoffelService } from '../kartoffel/kartoffel.service';
import {
  Entity,
  GetEntityByIdRequest,
} from '../interfaces/protoc/proto/kartoffelService';
import {
  ApproverDecision,
  ApproverType,
  Decision,
  decisionFromJSON,
  EntityMin,
  IsRequestApprovedRes,
  RequestStatus,
  RequestType,
  requestTypeFromJSON,
} from '../interfaces/protoc/proto/requestService';
import { AuthenticationError } from '../utils/errors/userErrors';
import { statusCodeHandler } from '../utils/errors/errorHandlers';
import { RequestsService } from '../requests/requests.service';
import ProducerController from '../producer/producer.controller';
import { config } from '../config';

export default class ApproverController {
  // GET
  static async getAllApprovers(req: any, res: Response) {
    const getAllApproversReq: GetAllApproversReq = {
      type: req.query?.type ? req.query.type : {},
    };

    try {
      const approvers = await ApproverService.getAllApprovers(
        getAllApproversReq
      );
      res.send(approvers);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async searchHighCommandersByDisplayName(req: any, res: Response) {
    const searchHighCommandersByDisplayNameReq: SearchHighCommandersByDisplayNameReq =
      {
        displayName: req.params.displayName,
      };

    try {
      const approvers = await ApproverService.searchHighCommandersByDisplayName(
        searchHighCommandersByDisplayNameReq
      );
      res.send(approvers);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async searchApproverByDisplayName(req: any, res: Response) {
    const searchByDisplayNameReq: SearchByDisplayNameReq = {
      displayName: req.params.displayName,
      type: req.query.type,
      from: req.query.from,
      to: req.query.to,
    };

    try {
      const approvers = await ApproverService.searchApproverByDisplayName(
        searchByDisplayNameReq
      );
      res.send(approvers);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async searchApproverByDomainUser(req: any, res: Response) {
    const searchByDomainUserReq: SearchByDomainUserReq = {
      domainUser: req.params.displayName,
      type: req.query.type,
    };

    try {
      const approvers = await ApproverService.searchApproverByDomainUser(
        searchByDomainUserReq
      );
      res.send(approvers);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async getUserType(req: any, res: Response) {
    const getUserTypeReq: GetUserTypeReq = {
      entityId: req.params.id,
    };

    try {
      const userType = await ApproverService.getUserType(getUserTypeReq);
      res.send(userType);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  // POST
  static async addApprover(req: any, res: Response) {
    //NOT IN USE
    logger.info(`Call to AddApprover in GTW`, {
      entityId: req.body.entityId,
      type: req.body.type,
    });

    let entity: Entity;
    try {
      // Call kartoffel service and search
      // for domainUsers, akaunit and displayname
      const getUserReq: GetEntityByIdRequest = { id: req.user.id };
      entity = await KartoffelService.getEntityById(getUserReq);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
      return;
    }

    // add the findings to the body req
    const addApproverReq: AddApproverReq = {
      entityId: req.body.entityId,
      type: req.body.type,
      akaUnit: entity.akaUnit,
      displayName: entity.displayName,
      domainUsers: entity.digitalIdentities.map(
        (digitalIdentity) => digitalIdentity.uniqueId
      ),
      directGroup: req.body.directGroup,
      groupInChargeId: req.body.groupInChargeId || config.fields.rootId,
    };

    try {
      const approver = await ApproverService.addApprover(addApproverReq);
      res.send(approver);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async isApproverValid(req: any, res: Response) {
    const isApproverValidReq: IsApproverValidForOGReq = {
      approverId: req.body.approverId,
      groupId: req.body.groupId,
    };

    try {
      const isApproverValidRes = await ApproverService.isApproverValidForOG(
        isApproverValidReq
      );
      res.send(isApproverValidRes);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  // PUT
  static async updateApproverDecision(req: any, res: Response) {
    // Get the current approver
    if (!req.user && !req.user.id) throw new AuthenticationError();

    const approver: EntityMin = {
      id: req.user.id,
      displayName: req.user.displayName,
      identityCard: req.user.identityCard,
      personalNumber: req.user.personalNumber,
      ancestors: [],
    };

    const { decision, reason, date } = req.body.decision;
    // build approver decision object
    const approverDecision: ApproverDecision = {
      decision,
      reason,
      date,
      approver,
    };

    // build updateApproverDecisionReq
    const updateApproverDecisionReq: UpdateApproverDecisionReq = {
      id: req.params.requestId,
      approverDecision: approverDecision,
    };

    try {
      const request = await ApproverService.updateApproverDecision(
        updateApproverDecisionReq
      );
      const requestType =
        typeof request.type === typeof ''
          ? requestTypeFromJSON(request.type)
          : request.type;

      const decisionType = decisionFromJSON(decision);
      if (
        requestType === RequestType.ADD_APPROVER &&
        decisionType !== Decision.DENIED
      ) {
        const isRequestApproved = (await RequestsService.isRequestApproved({
          id: request.id,
        })) as IsRequestApprovedRes;

        if (isRequestApproved.isRequestApproved) {
          try {
            await ApproverService.addApprover({
              entityId: request.additionalParams?.entityId || '',
              type: request.additionalParams?.type || ApproverType.UNRECOGNIZED,
              akaUnit: request.additionalParams?.akaUnit || '',
              displayName: request.additionalParams?.displayName || '',
              domainUsers: request.additionalParams?.domainUsers || [],
              directGroup: request.additionalParams?.directGroup || '',
              identityCard: request.additionalParams?.identityCard || '',
              personalNumber: request.additionalParams?.personalNumber || '',
              groupInChargeId:
                request.additionalParams?.groupInChargeId ||
                config.fields.rootId,
            });
            await RequestsService.updateRequest({
              id: request.id,
              requestProperties: {
                status: RequestStatus.DONE,
              },
            } as any);
            // await ProducerController.produceToADQueue(req.params.id, res); // TODO: ASK BARAK
          } catch (addApproverError: any) {
            await RequestsService.updateRequest({
              id: request.id,
              requestProperties: {
                status: RequestStatus.FAILED,
              },
            } as any);
          }
        }
      } else {
        const canPushToKartoffelRes =
          await RequestsService.canPushToKartoffelQueue({
            id: req.params.requestId,
          });
        if (canPushToKartoffelRes.canPushToQueue) {
          await ProducerController.produceToKartoffelQueue(
            req.params.requestId
          );
        } else {
          const canPushToADQueueRes = await RequestsService.canPushToADQueue({
            id: req.params.requestId,
          });

          if (canPushToADQueueRes.canPushToQueue) {
            await ProducerController.produceToADQueue(
              req.params.requestId,
              res
            );
          }
        }
      }
      res.send(request);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  // DELETE
  static async deleteApprover(req: any, res: Response) {
    let deleteApproverReq: DeleteApproverReq = {
      approverId: req.params.id,
    };

    try {
      const approver = await ApproverService.deleteApprover(deleteApproverReq);
      res.send(approver);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }
}
