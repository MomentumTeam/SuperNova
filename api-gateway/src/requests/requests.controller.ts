import { Response } from 'express';
import { logger } from '../utils/logger/logger';
import ProducerController from '../producer/producer.controller';
import { SuccessMessage } from '../interfaces/protoc/proto/producerService';
import {
  RequestArray,
  StageStatus,
  EntityMin,
  GetRequestByIdReq,
  GetRequestsByPersonReq,
  GetRequestBySerialNumberReq,
  SearchRequestsByDisplayNameReq,
  UpdateADStatusReq,
  UpdateReq,
  UpdateApproversReq,
  UpdateApproverDecisionReq,
  CreateRoleReq,
  AssignRoleToEntityReq,
  CreateOGReq,
  CreateNewApproverReq,
  CreateEntityReq,
  RenameOGReq,
  RenameRoleReq,
  EditEntityReq,
  DeleteRoleReq,
  DeleteOGReq,
  DisconectRoleFromEntityReq,
  DeleteReq,
  GetAllRequestsReq,
} from '../interfaces/protoc/proto/requestService';
import { RequestsService } from './requests.service';
import { AuthenticationError } from '../utils/errors/userErrors';
import { KartoffelService } from '../kartoffel/kartoffel.service';

export default class RequestsController {
  //GET
  static async getAllRequests(req: any, res: Response) {
    const getAllRequestsReq: GetAllRequestsReq = {
      approvementStatus: req.params.approvementStatus,
      from: req.query.from,
      to: req.query.to,
    };

    try {
      const requests = await RequestsService.getAllRequests(getAllRequestsReq);
      res.send(requests);
    } catch (error: any) {
      const statusCode = error.code ? error.code : 500;
      res.status(statusCode).send(error.message);
    }
  }

  static async getRequestById(req: any, res: Response) {
    const getRequestByIdReq: GetRequestByIdReq = { id: req.params.id };

    try {
      const request = await RequestsService.getRequestById(getRequestByIdReq);
      res.send(request);
    } catch (error: any) {
      const statusCode = error.code ? error.code : 500;
      res.status(statusCode).send(error.message);
    }
  }

  static async getRequestsByPerson(req: any, res: Response) {
    const getRequestsByPersonReq: GetRequestsByPersonReq = {
      id: req.params.id,
      personType: req.query.personType,
      personInfoType: req.query.personInfoType,
      from: req.query.from,
      to: req.query.to,
    };

    try {
      const requests = await RequestsService.getRequestsByPerson(
        getRequestsByPersonReq
      );
      res.send(requests);
    } catch (error: any) {
      // TODO : ask barak if we need to return the service's error or always 500
      const statusCode = error.code ? error.code : 500;
      res.status(statusCode).send(error.message);
    }
  }

  static async getRequestBySerialNumber(req: any, res: Response) {
    const getRequestBySerialNumberReq: GetRequestBySerialNumberReq = {
      serialNumber: req.params.serialNumber,
    };

    try {
      const requests = await RequestsService.getRequestBySerialNumber(
        getRequestBySerialNumberReq
      );
      res.send(requests);
    } catch (error: any) {
      const statusCode = error.code ? error.code : 500;
      res.status(statusCode).send(error.message);
    }
  }

  static async searchRequestsByDisplayName(req: any, res: Response) {
    const searchRequestsByDisplayNameReq: SearchRequestsByDisplayNameReq = {
      displayName: req.params.displayName,
      personType: req.params.personType,
      from: req.query.from,
      to: req.query.to,
    };

    try {
      const requests = await RequestsService.searchRequestsByDisplayName(
        searchRequestsByDisplayNameReq
      );
      res.send(requests);
    } catch (error: any) {
      const statusCode = error.code ? error.code : 500;
      res.status(statusCode).send(error.message);
    }
  }

  // PUT
  static async updateADStatus(req: any, res: Response) {
    const retry: boolean = req.body.Retry;
    const status: boolean = req.body.Status;
    let stageStatus: StageStatus = StageStatus.STAGE_IN_PROGRESS;

    if (retry === false) {
      if (status === true) {
        stageStatus = StageStatus.STAGE_DONE;

        const produceRes = (await ProducerController.produceToKartoffelQueue(
          req.body.RequestID
        )) as SuccessMessage;

        if (produceRes.success === true) {
          //if produce was successful update Kartoffel Status
          try {
            const request = await RequestsService.updateKartoffelStatus(
              req.body.RequestID
            );
            res.status(200).send(request);
          } catch (error: any) {
            const statusCode = error.code ? error.code : 500;
            return res.status(statusCode).send(error.message);
          }
        }
      } else if (status === false) {
        stageStatus = StageStatus.STAGE_FAILED;
      }

      const updateADStatus: UpdateADStatusReq = {
        requestId: req.body.RequestID,
        status: stageStatus,
        message: req.body.ErrorID,
      };

      try {
        const request = await RequestsService.updateADStatus(updateADStatus);
        res.status(200).send(request);
      } catch (error: any) {
        const statusCode = error.code ? error.code : 500;
        res.status(statusCode).send(error.message);
      }
    } else {
      await ProducerController.produceToADQueue(req.body.RequestID, res);
    }
  }

  static async updateRequest(req: any, res: Response) {
    const updateReq: UpdateReq = {
      id: req.params.id,
      requestProperties: req.body,
    };

    try {
      const request = await RequestsService.updateRequest(updateReq);
      res.status(200).send(request);
    } catch (error: any) {
      const statusCode = error.code ? error.code : 500;
      res.status(statusCode).send(error.message);
    }
  }

  static async updateCommanders(req: any, res: Response) {
    const updateCommandersReq: UpdateApproversReq = {
      id: req.params.id,
      approvers: req.body.approvers,
    };

    try {
      const request = await RequestsService.updateCommanders(
        updateCommandersReq
      );
      res.status(200).send(request);
    } catch (error: any) {
      const statusCode = error.code ? error.code : 500;
      res.status(statusCode).send(error.message);
    }
  }

  static async updateSecurityApprovers(req: any, res: Response) {
    const updateSecurityApproversReq: UpdateApproversReq = {
      id: req.params.id,
      approvers: req.body.approvers,
    };

    try {
      const request = await RequestsService.updateSecurityApprovers(
        updateSecurityApproversReq
      );
      res.status(200).send(request);
    } catch (error: any) {
      const statusCode = error.code ? error.code : 500;
      res.status(statusCode).send(error.message);
    }
  }

  static async updateApproverDecision(req: any, res: Response) {
    const updateApproverDecisionReq: UpdateApproverDecisionReq = {
      id: req.params.id,
      approverDecision: req.body.approverDecision, //TODO
      approverType: req.body.approverType, //TODO
    };

    logger.info(`Call to updateApproverDecision in GTW`, {
      callRequest: updateApproverDecisionReq,
    });

    try {
      const request = await RequestsService.updateApproverDecision(
        updateApproverDecisionReq
      );

      const canPushToQueueRes = await RequestsService.canPushToADQueue({
        id: req.params.id,
      });

      if (canPushToQueueRes.canPushToQueue) {
        await ProducerController.produceToADQueue(req.params.id, res);
      }

      res.status(200).send(request);
    } catch (error: any) {
      const statusCode = error.code ? error.code : 500;
      res.status(statusCode).send(error.message);
    }
  }

  static async createRoleRequest(req: any, res: Response) {
    if (!req.user && !req.user.id) throw new AuthenticationError();

    logger.info(`Call to createRoleRequest in GTW`, {
      callRequest: { submittedBy: req.user.id },
    });

    // TODO: ask liora and barak about identity card, why we need all this fields? it is just make the request very complicated
    // if we do want this, we need to add kartoffel fields to authentication.
    // see example - https://gitlab.com/yesodot/selenium/censorship-systems/common/blue-authenticator/-/tree/develop

    const submittedBy: EntityMin = {
      id: req.user.id,
      displayName: req.user.displayName,
      identityCard: req.user.identityCard,
      personalNumber: req.user.personalNumber,
    };

    const createRoleReq: CreateRoleReq = {
      submittedBy: submittedBy,
      ...req.body,
    };

    try {
      const createRole = await RequestsService.createRoleRequest(createRoleReq);
      res.status(200).send(createRole);
    } catch (error: any) {
      const statusCode = error.code ? error.code : 500;
      res.status(statusCode).send(error.message);
    }
  }

  static async assignRoleToEntityRequest(req: any, res: Response) {
    const submittedBy: EntityMin = {
      id: req.user.id,
      displayName: req.user.displayName,
      identityCard: req.user.identityCard,
      personalNumber: req.user.personalNumber,
    };

    const assignRoleToEntityReq: AssignRoleToEntityReq = {
      submittedBy: submittedBy,
      ...req.body,
    };

    try {
      const assignRole = await RequestsService.assignRoleToEntityRequest(
        assignRoleToEntityReq
      );
      res.status(200).send(assignRole);
    } catch (error: any) {
      const statusCode = error.code ? error.code : 500;
      res.status(statusCode).send(error.message);
    }
  }

  static async createOGRequest(req: any, res: Response) {
    const submittedBy: EntityMin = {
      id: req.user.id,
      displayName: req.user.displayName,
      identityCard: req.user.identityCard,
      personalNumber: req.user.personalNumber,
    };

    const createOGReq: CreateOGReq = {
      submittedBy: submittedBy,
      ...req.body,
    };

    try {
      const createOGres = await RequestsService.createOGRequest(createOGReq);
      res.status(200).send(createOGres);
    } catch (error: any) {
      const statusCode = error.code ? error.code : 500;
      res.status(statusCode).send(error.message);
    }
  }

  static async createNewApproverRequest(req: any, res: Response) {
    const submittedBy: EntityMin = {
      id: req.user.id,
      displayName: req.user.displayName,
      identityCard: req.user.identityCard,
      personalNumber: req.user.personalNumber,
    };

    const createNewApproverReq: CreateNewApproverReq = {
      submittedBy: submittedBy,
      ...req.body,
    };

    try {
      const newApprover = await RequestsService.createNewApproverRequest(
        createNewApproverReq
      );
      res.status(200).send(newApprover);
    } catch (error: any) {
      const statusCode = error.code ? error.code : 500;
      res.status(statusCode).send(error.message);
    }
  }

  static async createEntityRequest(req: any, res: Response) {
    const submittedBy: EntityMin = {
      id: req.user.id,
      displayName: req.user.displayName,
      identityCard: req.user.identityCard,
      personalNumber: req.user.personalNumber,
    };

    const createEntityReq: CreateEntityReq = {
      submittedBy: submittedBy,
      ...req.body,
    };

    try {
      const entity = await RequestsService.createEntityRequest(createEntityReq);
      res.status(200).send(entity);
    } catch (error: any) {
      const statusCode = error.code ? error.code : 500;
      res.status(statusCode).send(error.message);
    }
  }

  static async renameOGRequest(req: any, res: Response) {
    const submittedBy: EntityMin = {
      id: req.user.id,
      displayName: req.user.displayName,
      identityCard: req.user.identityCard,
      personalNumber: req.user.personalNumber,
    };

    const renameOGReq: RenameOGReq = {
      submittedBy: submittedBy,
      ...req.body,
    };

    try {
      const og = await RequestsService.renameOGRequest(renameOGReq);
      res.status(200).send(og);
    } catch (error: any) {
      const statusCode = error.code ? error.code : 500;
      res.status(statusCode).send(error.message);
    }
  }

  static async renameRoleRequest(req: any, res: Response) {
    const submittedBy: EntityMin = {
      id: req.user.id,
      displayName: req.user.displayName,
      identityCard: req.user.identityCard,
      personalNumber: req.user.personalNumber,
    };

    const renameRoleReq: RenameRoleReq = {
      submittedBy: submittedBy,
      ...req.body,
    };

    try {
      const entity = await RequestsService.renameRoleRequest(renameRoleReq);
      res.status(200).send(entity);
    } catch (error: any) {
      const statusCode = error.code ? error.code : 500;
      res.status(statusCode).send(error.message);
    }
  }

  static async editEntityRequest(req: any, res: Response) {
    const submittedBy: EntityMin = {
      id: req.user.id,
      displayName: req.user.displayName,
      identityCard: req.user.identityCard,
      personalNumber: req.user.personalNumber,
    };

    const editEntityReq: EditEntityReq = {
      submittedBy: submittedBy,
      ...req.body,
    };

    try {
      const entity = await RequestsService.editEntityRequest(editEntityReq);
      res.status(200).send(entity);
    } catch (error: any) {
      const statusCode = error.code ? error.code : 500;
      res.status(statusCode).send(error.message);
    }
  }

  static async deleteRoleRequest(req: any, res: Response) {
    logger.info(`Call to deleteRoleRequest in GTW`, {
      callRequest: { submittedBy: req.user.id },
    });

    const submittedBy: EntityMin = {
      id: req.user.id,
      displayName: req.user.displayName,
      identityCard: req.user.identityCard,
      personalNumber: req.user.personalNumber,
    };

    const deleteRoleReq: DeleteRoleReq = {
      submittedBy: submittedBy,
      ...req.body,
    };

    try {
      const deletedRole = await RequestsService.deleteRoleRequest(
        deleteRoleReq
      );
      res.status(200).send(deletedRole);
    } catch (error: any) {
      const statusCode = error.code ? error.code : 500;
      res.status(statusCode).send(error.message);
    }
  }

  static async deleteOGRequest(req: any, res: Response) {
    logger.info(`Call to deleteOGRequest in GTW`, {
      callRequest: { submittedBy: req.user.id },
    });

    const submittedBy: EntityMin = {
      id: req.user.id,
      displayName: req.user.displayName,
      identityCard: req.user.identityCard,
      personalNumber: req.user.personalNumber,
    };

    const deleteOGReq: DeleteOGReq = {
      submittedBy: submittedBy,
      ...req.body,
    };

    try {
      const deletedOG = await RequestsService.deleteOGRequest(deleteOGReq);
      res.status(200).send(deletedOG);
    } catch (error: any) {
      const statusCode = error.code ? error.code : 500;
      res.status(statusCode).send(error.message);
    }
  }

  static async disconectRoleFromEntityRequest(req: any, res: Response) {
    if (!req.user && !req.user.id) throw new AuthenticationError();

    logger.info(`Call to disconectRoleFromEntityRequest in GTW`, {
      callRequest: { submittedBy: req.user.id },
    });

    try {
      const kUser = await KartoffelService.getEntityById({ id: req.user.id });
    } catch (error) {
      logger;
    }
    const submittedBy: EntityMin = {
      id: req.user.id,
      displayName: req.user.displayName,
      identityCard: req.user.identityCard,
      personalNumber: req.user.personalNumber,
    };

    const disconectRoleFromEntityReq: DisconectRoleFromEntityReq = {
      submittedBy: submittedBy,
      ...req.body,
    };

    try {
      const disconectRole =
        await RequestsService.disconectRoleFromEntityRequest(
          disconectRoleFromEntityReq
        );
      res.status(200).send(disconectRole);
    } catch (error: any) {
      const statusCode = error.code ? error.code : 500;
      res.status(statusCode).send(error.message);
    }
  }

  static async deleteRequest(req: any, res: Response) {
    const deleteReq: DeleteReq = { id: req.params.id };

    logger.info(`Call to deleteRequest in GTW`, {
      callRequest: deleteReq,
    });

    try {
      const msg = await RequestsService.deleteRequest(deleteReq);
      res.status(200).send(msg);
    } catch (error: any) {
      const statusCode = error.code ? error.code : 500;
      res.status(statusCode).send(error.message);
    }
  }
}
