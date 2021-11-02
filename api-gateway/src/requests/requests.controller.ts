import { Response } from 'express';
import { logger } from '../utils/logger/logger';
import ProducerController from '../producer/producer.controller';
import { SuccessMessage } from '../interfaces/protoc/proto/producerService';
import {
  StageStatus,
  EntityMin,
  GetRequestByIdReq,
  GetRequestsByPersonReq,
  GetRequestBySerialNumberReq,
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
  DeleteEntityReq,
  ChangeRoleHierarchyReq,
  PersonTypeInRequest,
  PersonInfoType,
  ApprovementStatus,
  TransferRequestToApproversReq,
} from '../interfaces/protoc/proto/requestService';
import { RequestsService } from './requests.service';
import { AuthenticationError } from '../utils/errors/userErrors';
import { KartoffelService } from '../kartoffel/kartoffel.service';
import { statusCodeHandler } from '../utils/errors/errorHandlers';
import { approveUserRequest } from './requests.utils';

export default class RequestsController {
  static async getRequestById(req: any, res: Response) {
    const getRequestByIdReq: GetRequestByIdReq = { id: req.params.id };

    try {
      const request = await RequestsService.getRequestById(getRequestByIdReq);
      res.send(request);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async getMyRequests(req: any, res: Response) {
    const getRequestsByPersonReq: GetRequestsByPersonReq = {
      id: req.user.id,
      personType: PersonTypeInRequest.SUBMITTER,
      from: req.query.from,
      to: req.query.to,
      userType: req.user.types,
      approvementStatus: ApprovementStatus.ANY,
    };

    if (req.query.searchQuery) {
      getRequestsByPersonReq.searchQuery = req.query.searchQuery;
    }
    if (req.query.status) {
      getRequestsByPersonReq.status = req.query.status;
    }
    if (req.query.type) {
      getRequestsByPersonReq.type = req.query.type;
    }
    if (req.query.sortField) {
      getRequestsByPersonReq.sortField = req.query.sortField;
    }
    if (req.query.sortOrder) {
      getRequestsByPersonReq.sortOrder = req.query.sortOrder;
    }

    try {
      const requests = await RequestsService.getRequestsByPerson(
        getRequestsByPersonReq
      );
      res.send(requests);
    } catch (error: any) {
      // TODO : ask barak if we need to return the service's error or always 500
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async getAllRequestsToApprove(req: any, res: Response) {
    const getRequestsByPersonReq: GetRequestsByPersonReq = {
      id: req.user.id,
      personType: PersonTypeInRequest.GET_ALL,
      from: req.query.from,
      to: req.query.to,
      userType: req.user.types,
      approvementStatus: ApprovementStatus.BY_USER_TYPE,
    };

    if (req.query.searchQuery) {
      getRequestsByPersonReq.searchQuery = req.query.searchQuery;
    }
    if (req.query.status) {
      getRequestsByPersonReq.status = req.query.status;
    }
    if (req.query.type) {
      getRequestsByPersonReq.type = req.query.type;
    }
    if (req.query.sortField) {
      getRequestsByPersonReq.sortField = req.query.sortField;
    }
    if (req.query.sortOrder) {
      getRequestsByPersonReq.sortOrder = req.query.sortOrder;
    }
    try {
      const requests = await RequestsService.getRequestsByPerson(
        getRequestsByPersonReq
      );
      res.send(requests);
    } catch (error: any) {
      // TODO : ask barak if we need to return the service's error or always 500
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async getMyRequestsToApprove(req: any, res: Response) {
    const getRequestsByPersonReq: GetRequestsByPersonReq = {
      id: req.user.id,
      personType: PersonTypeInRequest.APPROVER,
      from: req.query.from,
      to: req.query.to,
      userType: req.user.types,
      approvementStatus: ApprovementStatus.BY_USER_TYPE,
    };

    if (req.query.searchQuery) {
      getRequestsByPersonReq.searchQuery = req.query.searchQuery;
    }
    if (req.query.status) {
      getRequestsByPersonReq.status = req.query.status;
    }
    if (req.query.type) {
      getRequestsByPersonReq.type = req.query.type;
    }
    if (req.query.sortField) {
      getRequestsByPersonReq.sortField = req.query.sortField;
    }
    if (req.query.sortOrder) {
      getRequestsByPersonReq.sortOrder = req.query.sortOrder;
    }

    try {
      const requests = await RequestsService.getRequestsByPerson(
        getRequestsByPersonReq
      );
      res.send(requests);
    } catch (error: any) {
      // TODO : ask barak if we need to return the service's error or always 500
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async getRequestsByPerson(req: any, res: Response) {
    const getRequestsByPersonReq: GetRequestsByPersonReq = {
      id: req.params.id,
      personType: req.query.personType,
      from: req.query.from,
      to: req.query.to,
      userType: req.user.types,
    };

    if (req.query.searchQuery) {
      getRequestsByPersonReq.searchQuery = req.query.searchQuery;
    }
    if (req.query.status) {
      getRequestsByPersonReq.status = req.query.status;
    }
    if (req.query.type) {
      getRequestsByPersonReq.type = req.query.type;
    }
    if (req.query.sortField) {
      getRequestsByPersonReq.sortField = req.query.sortField;
    }
    if (req.query.sortOrder) {
      getRequestsByPersonReq.sortOrder = req.query.sortOrder;
    }
    try {
      const requests = await RequestsService.getRequestsByPerson(
        getRequestsByPersonReq
      );
      res.send(requests);
    } catch (error: any) {
      // TODO : ask barak if we need to return the service's error or always 500
      const statusCode = statusCodeHandler(error);
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
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  // PUT

  static async transferRequestToApprovers(req: any, res: Response) {
    let transferRequestToApproversReq: TransferRequestToApproversReq = {
      id: req.params.id,
      approvers: req.body.approvers,
      type: req.body.type,
    };
    if (req.body.commentForApprovers) {
      transferRequestToApproversReq.commentForApprovers =
        req.body.commentForApprovers;
    }
    try {
      const request = await RequestsService.transferRequestToApprovers(
        transferRequestToApproversReq
      );
      res.send(request);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

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
            const statusCode = statusCodeHandler(error);
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
        const statusCode = statusCodeHandler(error);
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
      const statusCode = statusCodeHandler(error);
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
      const statusCode = statusCodeHandler(error);
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
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async updateApproverDecision(req: any, res: Response) {
    const updateApproverDecisionReq: UpdateApproverDecisionReq = {
      id: req.params.id,
      approverDecision: req.body.approverDecision, //TODO
      approverType: req.body.approverType, // ASK : liora if she returns person in type request
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
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async createRoleRequest(req: any, res: Response) {
    if (!req.user && !req.user.id) throw new AuthenticationError();

    logger.info(`Call to createRoleRequest in GTW`, {
      callRequest: { submittedBy: req.user.id },
    });

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
      const request: any = await approveUserRequest(req, createRoleReq);
      const createRole = await RequestsService.createRoleRequest(request);

      res.status(200).send(createRole);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async assignRoleToEntityRequest(req: any, res: Response) {
    if (!req.user && !req.user.id) throw new AuthenticationError();

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
      const request: any = await approveUserRequest(req, assignRoleToEntityReq);
      const assignRole = await RequestsService.assignRoleToEntityRequest(
        request
      );

      res.status(200).send(assignRole);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async createOGRequest(req: any, res: Response) {
    if (!req.user && !req.user.id) throw new AuthenticationError();

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
      const request: any = await approveUserRequest(req, createOGReq);
      const createOGres = await RequestsService.createOGRequest(request);

      res.status(200).send(createOGres);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async createNewApproverRequest(req: any, res: Response) {
    if (!req.user && !req.user.id) throw new AuthenticationError();

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
      const request: any = await approveUserRequest(req, createNewApproverReq);
      const newApprover = await RequestsService.createNewApproverRequest(
        request
      );

      res.status(200).send(newApprover);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async createEntityRequest(req: any, res: Response) {
    if (!req.user && !req.user.id) throw new AuthenticationError();

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
      const request: any = await approveUserRequest(req, createEntityReq);
      const entity = await RequestsService.createEntityRequest(request);

      res.status(200).send(entity);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async renameOGRequest(req: any, res: Response) {
    if (!req.user && !req.user.id) throw new AuthenticationError();

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
      const request: any = await approveUserRequest(req, renameOGReq);
      const og = await RequestsService.renameOGRequest(request);

      res.status(200).send(og);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async renameRoleRequest(req: any, res: Response) {
    if (!req.user && !req.user.id) throw new AuthenticationError();

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
      const request: any = await approveUserRequest(req, renameRoleReq);
      const entity = await RequestsService.renameRoleRequest(request);

      res.status(200).send(entity);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async editEntityRequest(req: any, res: Response) {
    if (!req.user && !req.user.id) throw new AuthenticationError();

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
      const request: any = await approveUserRequest(req, editEntityReq);
      const entity = await RequestsService.editEntityRequest(request);

      res.status(200).send(entity);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async deleteRoleRequest(req: any, res: Response) {
    if (!req.user && !req.user.id) throw new AuthenticationError();

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
      const request: any = await approveUserRequest(req, deleteRoleReq);
      const deletedRole = await RequestsService.deleteRoleRequest(request);

      res.status(200).send(deletedRole);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async deleteOGRequest(req: any, res: Response) {
    if (!req.user && !req.user.id) throw new AuthenticationError();

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
      const request: any = await approveUserRequest(req, deleteOGReq);
      const deletedOG = await RequestsService.deleteOGRequest(request);

      res.status(200).send(deletedOG);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async deleteEntityRequest(req: any, res: Response) {
    if (!req.user && !req.user.id) throw new AuthenticationError();

    logger.info(`Call to deleteEntityRequest in GTW`, {
      callRequest: { submittedBy: req.user.id },
    });

    const submittedBy: EntityMin = {
      id: req.user.id,
      displayName: req.user.displayName,
      identityCard: req.user.identityCard,
      personalNumber: req.user.personalNumber,
    };

    const deleteEntityReq: DeleteEntityReq = {
      submittedBy: submittedBy,
      ...req.body,
    };

    try {
      const request: any = await approveUserRequest(req, deleteEntityReq);
      const deletedEntity = await RequestsService.deleteEntityRequest(request);

      res.status(200).send(deletedEntity);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
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
      const request: any = await approveUserRequest(
        req,
        disconectRoleFromEntityReq
      );
      const disconectRole =
        await RequestsService.disconectRoleFromEntityRequest(request);

      res.status(200).send(disconectRole);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
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
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async changeRoleHierarchyRequest(req: any, res: Response) {
    if (!req.user && !req.user.id) throw new AuthenticationError();

    logger.info(`Call to changeRoleHierarchyRequest in GTW`, {
      callRequest: { submittedBy: req.user.id },
    });

    const submittedBy: EntityMin = {
      id: req.user.id,
      displayName: req.user.displayName,
      identityCard: req.user.identityCard,
      personalNumber: req.user.personalNumber,
    };

    const changeRoleHierarchyReq: ChangeRoleHierarchyReq = {
      submittedBy: submittedBy,
      ...req.body,
    };

    try {
      const request: any = await approveUserRequest(
        req,
        changeRoleHierarchyReq
      );
      const roleHierarchy = await RequestsService.changeRoleHierarchyRequest(
        request
      );

      res.status(200).send(roleHierarchy);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }
}
