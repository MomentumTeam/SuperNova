import { Response } from 'express';
import { logger } from '../utils/logger/logger';
import ProducerController from '../producer/producer.controller';
import { SuccessMessage } from '../interfaces/protoc/proto/producerService';
import { ApproverService } from '../approver/approver.service';
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
  approverTypeFromJSON,
  ApproverType,
  ApproversComments,
  ApproverDecision,
} from '../interfaces/protoc/proto/requestService';
import { RequestsService } from './requests.service';
import { AuthenticationError } from '../utils/errors/userErrors';
import { KartoffelService } from '../kartoffel/kartoffel.service';
import { statusCodeHandler } from '../utils/errors/errorHandlers';
import { approveUserRequest, getApprovedDecision, getEntityFromConnectedUser } from './requests.utils';
import { GetUserTypeRes } from '../interfaces/protoc/proto/approverService';
import { config } from '../config';

export default class RequestsController {
  static async getSupportLink(req: any, res: Response) {
    try {
      res.send({ supportGroupLink: config.endpoints.supportLink });
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

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

  static async updateApproversComments(req: any, res: Response) {
    const request: any = await RequestsService.getRequestById({
      id: req.params.id,
    });
    const approversComments: ApproversComments = request.approversComments;
    const type = approverTypeFromJSON(req.body.type);
    switch (type) {
      case ApproverType.SUPER_SECURITY:
        approversComments.superSecurityComment = req.body.commentForApprovers;
        break;
      case ApproverType.SECURITY:
        approversComments.securityComment = req.body.commentForApprovers;
        break;
      case ApproverType.COMMANDER:
        approversComments.commanderComment = req.body.commentForApprovers;
        break;
      case ApproverType.ADMIN:
        approversComments.commanderComment = req.body.commentForApprovers;
        break;
      default:
        return res.status(500).send('Approver type not supported!');
    }

    const updateRequestReq: any = {
      id: req.params.id,
      requestProperties: { approversComments: approversComments },
    };
    try {
      const updatedRequest = await RequestsService.updateRequest(
        updateRequestReq
      );
      res.send(updatedRequest);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

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
    let updateADStatus: UpdateADStatusReq = {
      requestId: req.body.RequestID,
      status: StageStatus.STAGE_UNKNOWN,
      message: req.body.ErrorID ? req.body.ErrorID : '',
    };
    let request: any;
    try {
      if (!retry) {
        updateADStatus.status = status
          ? StageStatus.STAGE_DONE
          : StageStatus.STAGE_FAILED;
        request = await RequestsService.updateADStatus(updateADStatus);
        if (status) {
          const produceRes = (await ProducerController.produceToKartoffelQueue(
            req.body.RequestID
          )) as SuccessMessage;
          if (produceRes.success) {
            //if produce was successful update Kartoffel Status
            request = await RequestsService.updateKartoffelStatus(
              req.body.RequestID
            );
            return res.send(request);
          }
        }

        return res.send(request);
      } else {
        await ProducerController.produceToADQueue(req.body.RequestID, res);
      }
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      return res.status(statusCode).send(error.message);
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

  //   static async updateApproverDecision(req: any, res: Response) {
  //     const updateApproverDecisionReq: UpdateApproverDecisionReq = {
  //       id: req.params.id,
  //       approverDecision: req.body.approverDecision, //TODO
  //       approverType: req.body.approverType, 
  //     };
  //
  //     logger.info(`Call to updateApproverDecision in GTW`, {
  //       callRequest: updateApproverDecisionReq,
  //     });
  //
  //     try {
  //       const request = await RequestsService.updateApproverDecision(
  //         updateApproverDecisionReq
  //       );
  //
  //       const canPushToQueueRes = await RequestsService.canPushToADQueue({
  //         id: req.params.id,
  //       });
  //
  //       if (canPushToQueueRes.canPushToQueue) {
  //         await ProducerController.produceToADQueue(req.params.id, res);
  //       }
  //
  //       res.status(200).send(request);
  //     } catch (error: any) {
  //       const statusCode = statusCodeHandler(error);
  //       res.status(statusCode).send(error.message);
  //     }
  //   }

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
      const request: any = await approveUserRequest(req, createRoleReq, createRoleReq.kartoffelParams?.directGroup);
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
      if (assignRoleToEntityReq.kartoffelParams?.needDisconnect) {
        const entityWithRole: any = await KartoffelService.getEntityByDI({
          uniqueId: assignRoleToEntityReq.kartoffelParams?.uniqueId,
        });
        const entityUserTypeRes: GetUserTypeRes =
          await ApproverService.getUserType({
            entityId: entityWithRole.id,
          });
        const entityUserType = entityUserTypeRes.type.map((type) => {
          return typeof type === typeof '' ? approverTypeFromJSON(type) : type;
        });
        if (entityUserType.includes(ApproverType.COMMANDER)) {
          assignRoleToEntityReq.commanders = [
            {
              id: entityWithRole.id,
              displayName: entityWithRole.displayName,
              identityCard: entityWithRole.identityCard
                ? entityWithRole.identityCard
                : '',
              personalNumber: entityWithRole.personalNumber
                ? entityWithRole.personalNumber
                : '',
            },
          ];
        }
      }

      const approveReq = async() => {
        if (assignRoleToEntityReq.commanders.find(commander => commander.id === req.user.id)) {
           const response: any = await ApproverService.isApproverValidForOG({
             approverId: req.user.id,
             groupId: assignRoleToEntityReq.kartoffelParams?.directGroup || "",
           });
          
           if (response.isValid) {
             const entityUser = getEntityFromConnectedUser(req);
             const decision = getApprovedDecision(entityUser);
             assignRoleToEntityReq.commanderDecision = decision;
           }
        }

        return assignRoleToEntityReq;
      }

      const request: any = assignRoleToEntityReq.kartoffelParams?.needDisconnect
        ? await approveReq()
        : await approveUserRequest(req, assignRoleToEntityReq, assignRoleToEntityReq.kartoffelParams?.directGroup);
      
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
      const request: any = await approveUserRequest(req, createOGReq, createOGReq.kartoffelParams?.parent);
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
      const request: any = await approveUserRequest(req, createNewApproverReq, undefined, true);
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
      const request: any = await approveUserRequest(req, renameOGReq, renameOGReq.kartoffelParams?.id);
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
      const userId = req.user.id;
      const request: any = await RequestsService.getRequestById({
        id: deleteReq.id,
      });
      if (request.submittedBy.id === userId) {
        const msg = await RequestsService.deleteRequest(deleteReq);
        res.status(200).send(msg);
      } else {
        res.status(403).send('You do not have the enough permissions!');
      }
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
        changeRoleHierarchyReq,
        changeRoleHierarchyReq.kartoffelParams?.directGroup
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
