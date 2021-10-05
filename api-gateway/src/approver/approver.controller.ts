import { Response } from 'express';
import { logger } from '../utils/logger/logger';
import {
  SearchByDisplayNameReq,
  GetAllApproversReq,
  SearchByDomainUserReq,
  GetUserTypeReq,
  AddApproverReq,
  DeleteApproverReq,
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
  EntityMin,
  RequestStatus,
  RequestType,
  requestTypeFromJSON,
  UpdateApproverDecisionReq,
} from '../interfaces/protoc/proto/requestService';
import { AuthenticationError } from '../utils/errors/userErrors';
import { statusCodeHandler } from '../utils/errors/errorHandlers';
import { RequestsService } from '../requests/requests.service';
import ProducerController from '../producer/producer.controller';
import TeaService from '../tea/tea.service';
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
    if (!req.user && !req.user.id) throw new AuthenticationError();

    const getUserTypeReq: GetUserTypeReq = {
      entityId: req.user.id,
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
      directGroup: entity.directGroup || ""
    };

    try {
      const approver = await ApproverService.addApprover(addApproverReq);
      res.send(approver);
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
      approverType: req.params.type,
    };

    try {
      const request = await ApproverService.updateApproverDecision(
        updateApproverDecisionReq
      );
      const requestType =
        typeof request.type === typeof ''
          ? requestTypeFromJSON(request.type)
          : request.type;

      if (requestType === RequestType.ADD_APPROVER) {
        try {
          await ApproverService.addApprover({
            entityId: request.additionalParams?.entityId || '',
            type: request.additionalParams?.type || ApproverType.UNRECOGNIZED,
            akaUnit: request.additionalParams?.akaUnit || '',
            displayName: request.additionalParams?.displayName || '',
            domainUsers: request.additionalParams?.domainUsers || [],
            directGroup: request.additionalParams?.directGroup || ""
          });
          await RequestsService.updateRequest({
            id: request.id,
            requestProperties: {
              status: RequestStatus.DONE,
            },
          } as any);
        } catch (addApproverError: any) {
          await RequestsService.updateRequest({
            id: request.id,
            requestProperties: {
              status: RequestStatus.FAILED,
            },
          } as any);
        }
      } else {
        const canPushToQueueRes = await RequestsService.canPushToADQueue({
          id: req.params.id,
        });

        if (canPushToQueueRes.canPushToQueue) {
          await ProducerController.produceToADQueue(req.params.id, res);
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
