import { Response } from 'express';
import { logger } from '../utils/logger/logger';
import ProducerController from '../producer/producer.controller';
import {
  GetAllApproversReq,
  SearchByDisplayNameReq,
  UserType,
  userTypeFromJSON,
} from '../interfaces/protoc/proto/approverService';
import { SuccessMessage } from '../interfaces/protoc/proto/producerService';
import {
  Request,
  RequestArray,
  CreateOGRes,
  CreateRoleRes,
  CreateEntityRes,
  AssignRoleToEntityRes,
  RenameOGRes,
  EditEntityRes,
  DeleteOGRes,
  DeleteRoleRes,
  DisconectRoleFromEntityRes,
  StageStatus,
  EntityMin,
  CanPushToQueueRes,
  GetRequestByIdReq,
  GetRequestsByPersonReq,
  GetRequestBySerialNumberReq,
  SearchRequestsByDisplayNameReq,
  UpdateADStatusReq,
  UpdateKartoffelStatusReq,
  UpdateReq,
  UpdateApproversReq,
  UpdateApproverDecisionReq,
  CanPushToQueueReq,
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
import { requestsClient, RequestsService } from './requests.service';

export default class RequestsController {
  //GET
  static async getAllRequests(req: any, res: Response) {
    //only SECURITY Approvers can see all requests.
    const getAllRequestsReq: GetAllRequestsReq = {
      approvementStatus: req.params.approvementStatus,
      from: req.query.from,
      to: req.query.to,
    };

    logger.info(`Call to getAllRequests in GTW`, {
      callRequest: getAllRequestsReq,
    });

    requestsClient.GetAllRequests(
      getAllRequestsReq,
      (err: any, response: RequestArray) => {
        if (err) {
          logger.error(`getAllRequests ERROR in GTW`, {
            err,
            callRequest: getAllRequestsReq,
          });
          res.status(500).send(err.message);
        }

        logger.info(`getAllRequests OK in GTW`, {
          response: response,
          callRequest: getAllRequestsReq,
        });
        res.send(response);
      }
    );
  }

  static async getRequestById(req: any, res: Response) {
    const getRequestByIdReq: GetRequestByIdReq = { id: req.params.id };

    try {
      const request = await RequestsService.getRequestById(getRequestByIdReq);
      res.send(request);
    } catch (error: any) {
      res.status(500).send(error.message);
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
      res.status(500).send(error.message);
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
      res.status(500).send(error.message);
    }
  }

  static async searchRequestsBySubmitterDisplayName(req: any, res: Response) {
    const searchRequestsBySubmitterDisplayNameReq: SearchRequestsByDisplayNameReq =
      {
        displayName: req.params.displayName,
        from: req.query.from,
        to: req.query.to,
      };

    try {
      const requests =
        await RequestsService.searchRequestsBySubmitterDisplayName(
          searchRequestsBySubmitterDisplayNameReq
        );
      res.send(requests);
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }

  static async searchRequestsByCommanderDisplayName(req: any, res: Response) {
    const searchRequestsByCommanderDisplayNameReq: SearchRequestsByDisplayNameReq =
      {
        displayName: req.params.displayName,
        from: req.query.from,
        to: req.query.to,
      };

    try {
      const requests =
        await RequestsService.searchRequestsByCommanderDisplayName(
          searchRequestsByCommanderDisplayNameReq
        );
      res.send(requests);
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }

  static async searchRequestsBySecurityDisplayName(req: any, res: Response) {
    const searchRequestsBySecurityDisplayNameReq: SearchRequestsByDisplayNameReq =
      {
        displayName: req.params.displayName,
        from: req.query.from,
        to: req.query.to,
      };

    try {
      const requests =
        await RequestsService.searchRequestsBySecurityDisplayName(
          searchRequestsBySecurityDisplayNameReq
        );
      res.send(requests);
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }

  static async searchRequestsByApproverDisplayName(req: any, res: Response) {
    const searchRequestsByApproverDisplayNameReq: SearchRequestsByDisplayNameReq =
      {
        displayName: req.params.displayName,
        from: req.query.from,
        to: req.query.to,
      };

    try {
      const requests =
        await RequestsService.searchRequestsByApproverDisplayName(
          searchRequestsByApproverDisplayNameReq
        );
      res.send(requests);
    } catch (error: any) {
      res.status(500).send(error.message);
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
            return res.status(500).send(error.message);
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
        res.status(500).send(error.message);
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
      res.status(500).send(error.message);
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
      res.status(500).send(error.message);
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
      res.status(500).send(error.message);
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
      res.status(500).send(error.message);
    }
  }

  static async createRoleRequest(req: any, res: Response) {
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
      const createRole = await RequestsService.createRoleRequest(createRoleReq);
      res.status(200).send(createRole);
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }

  // TODO: continue change and add to service
  static async assignRoleToEntityRequest(req: any, res: Response) {
    logger.info(`Call to assignRoleToEntityRequest in GTW`, {
      callRequest: { submittedBy: req.user.id },
    });

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

    requestsClient.AssignRoleToEntityRequest(
      assignRoleToEntityReq,
      (err: any, response: AssignRoleToEntityRes) => {
        if (err) {
          logger.error(`assignRoleToEntityRequest ERROR in GTW`, {
            err,
            callRequest: { submittedBy: req.user.id },
          });
          res.status(500).send(err.message);
        }

        logger.info(`assignRoleToEntityRequest OK in GTW`, {
          response: response,
          callRequest: { submittedBy: req.user.id },
        });
        res.send(response);
      }
    );
  }

  static async createOGRequest(req: any, res: Response) {
    logger.info(`Call to createOGRequest in GTW`, {
      callRequest: { submittedBy: req.user.id },
    });

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

    requestsClient.CreateOGRequest(
      createOGReq,
      (err: any, response: CreateOGRes) => {
        if (err) {
          logger.error(`createOGRequest ERROR in GTW`, {
            err,
            callRequest: { submittedBy: req.user.id },
          });
          res.status(500).send(err.message);
        }

        logger.info(`createOGRequest OK in GTW`, {
          response: response,
          callRequest: { submittedBy: req.user.id },
        });
        res.send(response);
      }
    );
  }

  static async createNewApproverRequest(req: any, res: Response) {
    logger.info(`Call to createNewApproverRequest in GTW`, {
      callRequest: { submittedBy: req.user.id },
    });

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

    requestsClient.CreateNewApproverRequest(
      createNewApproverReq,
      (err: any, response: CreateOGRes) => {
        if (err) {
          logger.error(`createNewApproverRequest ERROR in GTW`, {
            err,
            callRequest: { submittedBy: req.user.id },
          });
          res.status(500).send(err.message);
        }

        logger.info(`createNewApproverRequest OK in GTW`, {
          response: response,
          callRequest: { submittedBy: req.user.id },
        });
        res.send(response);
      }
    );
  }

  static async createEntityRequest(req: any, res: Response) {
    logger.info(`Call to createEntityRequest in GTW`, {
      callRequest: { submittedBy: req.user.id },
    });

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

    requestsClient.CreateEntityRequest(
      createEntityReq,
      (err: any, response: CreateEntityRes) => {
        if (err) {
          logger.error(`createEntityRequest ERROR in GTW`, {
            err,
            callRequest: { submittedBy: req.user.id },
          });
          res.status(500).send(err.message);
        }

        logger.info(`createEntityRequest OK in GTW`, {
          response: response,
          callRequest: { submittedBy: req.user.id },
        });
        res.send(response);
      }
    );
  }

  static async renameOGRequest(req: any, res: Response) {
    logger.info(`Call to renameOGRequest in GTW`, {
      callRequest: { submittedBy: req.user.id },
    });

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

    requestsClient.RenameOGRequest(
      renameOGReq,
      (err: any, response: RenameOGRes) => {
        if (err) {
          logger.error(`renameOGRequest ERROR in GTW`, {
            err,
            callRequest: { submittedBy: req.user.id },
          });
          res.status(500).send(err.message);
        }

        logger.info(`renameOGRequest OK in GTW`, {
          response: response,
          callRequest: { submittedBy: req.user.id },
        });
        res.send(response);
      }
    );
  }

  static async renameRoleRequest(req: any, res: Response) {
    logger.info(`Call to renameRoleRequest in GTW`, {
      callRequest: { submittedBy: req.user.id },
    });

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

    requestsClient.RenameRoleRequest(
      renameRoleReq,
      (err: any, response: EditEntityRes) => {
        if (err) {
          logger.error(`renameRoleRequest ERROR in GTW`, {
            err,
            callRequest: { submittedBy: req.user.id },
          });
          res.status(500).send(err.message);
        }

        logger.info(`renameRoleRequest OK in GTW`, {
          response: response,
          callRequest: { submittedBy: req.user.id },
        });
        res.send(response);
      }
    );
  }

  static async editEntityRequest(req: any, res: Response) {
    logger.info(`Call to editEntityRequest in GTW`, {
      callRequest: { submittedBy: req.user.id },
    });

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

    requestsClient.EditEntityRequest(
      editEntityReq,
      (err: any, response: EditEntityRes) => {
        if (err) {
          logger.error(`editEntityRequest ERROR in GTW`, {
            err,
            callRequest: { submittedBy: req.user.id },
          });
          res.status(500).send(err.message);
        }

        logger.info(`editEntityRequest OK in GTW`, {
          response: response,
          callRequest: { submittedBy: req.user.id },
        });
        res.send(response);
      }
    );
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

    requestsClient.DeleteRoleRequest(
      deleteRoleReq,
      (err: any, response: DeleteRoleRes) => {
        if (err) {
          logger.error(`deleteRoleRequest ERROR in GTW`, {
            err,
            callRequest: { submittedBy: req.user.id },
          });
          res.status(500).send(err.message);
        }

        logger.info(`deleteRoleRequest OK in GTW`, {
          response: response,
          callRequest: { submittedBy: req.user.id },
        });
        res.send(response);
      }
    );
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

    requestsClient.DeleteOGRequest(
      deleteOGReq,
      (err: any, response: DeleteOGRes) => {
        if (err) {
          logger.error(`deleteOGRequest ERROR in GTW`, {
            err,
            callRequest: { submittedBy: req.user.id },
          });
          res.status(500).send(err.message);
        }

        logger.info(`deleteOGRequest OK in GTW`, {
          response: response,
          callRequest: { submittedBy: req.user.id },
        });
        res.send(response);
      }
    );
  }

  static async disconectRoleFromEntityRequest(req: any, res: Response) {
    logger.info(`Call to disconectRoleFromEntityRequest in GTW`, {
      callRequest: { submittedBy: req.user.id },
    });

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

    requestsClient.DisconectRoleFromEntityRequest(
      disconectRoleFromEntityReq,
      (err: any, response: DisconectRoleFromEntityRes) => {
        if (err) {
          logger.error(`disconectRoleFromEntityRequest ERROR in GTW`, {
            err,
            callRequest: { submittedBy: req.user.id },
          });
          res.status(500).send(err.message);
        }

        logger.info(`disconectRoleFromEntityRequest OK in GTW`, {
          response: response,
          callRequest: { submittedBy: req.user.id },
        });
        res.send(response);
      }
    );
  }

  static async deleteRequest(req: any, res: Response) {
    const deleteReq: DeleteReq = { id: req.params.id };

    logger.info(`Call to deleteRequest in GTW`, {
      callRequest: deleteReq,
    });

    requestsClient.DeleteRequest(
      deleteReq,
      (err: any, response: SuccessMessage) => {
        if (err) {
          logger.error(`deleteRequest ERROR in GTW`, {
            err,
            callRequest: deleteReq,
          });
          res.status(500).send(err.message);
        }

        logger.info(`deleteRequest OK in GTW`, {
          response: response,
          callRequest: deleteReq,
        });
        res.send(response);
      }
    );
  }
}
