import { Request, Response } from 'express';
import * as grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import { config } from '../config';
import { logger } from '../utils/logger/logger';
import ProducerController from '../producer/producer.controller';
import {
  UserType,
  userTypeFromJSON,
} from '../interfaces/protoc/proto/approverService';
import { SuccessMessage } from '../interfaces/protoc/proto/producerService';
import {
  Request as RequestS,
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
} from '../interfaces/protoc/proto/requestService';

const PROTO_PATH = __dirname.includes('dist')
  ? path.join(__dirname, '../../../proto/requestService.proto')
  : path.join(__dirname, '../../proto/requestService.proto');

const packageDefinition: protoLoader.PackageDefinition = protoLoader.loadSync(
  PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  }
);

const protoDescriptor: any =
  grpc.loadPackageDefinition(packageDefinition).RequestService;

const requestsClient: any = new protoDescriptor.RequestService(
  config.endpoints.request,
  grpc.credentials.createInsecure()
);

export default class RequestsController {
  static async getAllRequests(req: any, res: Response) {
    //only SECURITY Approvers can see all requests.
    const data = { from: req.query.from, to: req.query.to };

    logger.info(`Call to getAllRequests in GTW`, {
      callRequest: data,
    });

    if (
      userTypeFromJSON(req.user.userType.type) === UserType.SECURITY ||
      userTypeFromJSON(req.user.userType.type) === UserType.SUPER_SECURITY
    ) {
      requestsClient.GetAllRequests(
        data,
        (err: any, response: RequestArray) => {
          if (err) {
            logger.error(`getAllRequests ERROR in GTW`, {
              err,
              callRequest: data,
            });
            res.status(500).send(err.message);
          }

          logger.info(`getAllRequests OK in GTW`, {
            response: response,
            callRequest: data,
          });
          res.send(response);
        }
      );
    } else {
      res.send('You dont have permission to see all requests!');
    }
  }

  static async getRequestById(req: Request, res: Response) {
    logger.info(`Call to getRequestById in GTW`, {
      callRequest: { id: req.params.id },
    });

    requestsClient.GetRequestById(
      { id: req.params.id },
      (err: any, response: RequestS) => {
        if (err) {
          logger.error(`getRequestById ERROR in GTW`, {
            err,
            callRequest: { id: req.params.id },
          });
          res.status(500).send(err.message);
        }

        logger.info(`getRequestById OK in GTW`, {
          response: response,
          callRequest: { id: req.params.id },
        });
        res.send(response);
      }
    );
  }

  static async getMyRequests(req: any, res: Response) {
    const data = { id: req.user.id, from: req.query.from, to: req.query.to };

    logger.info(`Call to getMyRequests in GTW`, {
      callRequest: data,
    });

    requestsClient.GetRequestsSubmittedBy(
      data,
      (err: any, response: RequestArray) => {
        if (err) {
          logger.error(`getMyRequests ERROR in GTW`, {
            err,
            callRequest: data,
          });
          res.status(500).send(err.message);
        }

        logger.info(`getMyRequests OK in GTW`, {
          response: response,
          callRequest: data,
        });
        res.send(response);
      }
    );
  }

  static async getRequestsByCommander(req: any, res: Response) {
    const data = { id: req.user.id, from: req.query.from, to: req.query.to };

    logger.info(`Call to getRequestsByCommander in GTW`, {
      callRequest: data,
    });

    requestsClient.GetRequestsByCommander(
      data,
      (err: any, response: RequestArray) => {
        if (err) {
          logger.error(`getRequestsByCommander ERROR in GTW`, {
            err,
            callRequest: data,
          });
          res.status(500).send(err.message);
        }

        logger.info(`getRequestsByCommander OK in GTW`, {
          response: response,
          callRequest: data,
        });
        res.send(response);
      }
    );
  }

  static async getRequestsSubmittedBy(req: Request, res: Response) {
    const data = { id: req.params.id, from: req.query.from, to: req.query.to };

    logger.info(`Call to getRequestsSubmittedBy in GTW`, {
      callRequest: data,
    });

    requestsClient.GetRequestsSubmittedBy(
      data,
      (err: any, response: RequestArray) => {
        if (err) {
          logger.error(`getRequestsSubmittedBy ERROR in GTW`, {
            err,
            callRequest: data,
          });
          res.status(500).send(err.message);
        }

        logger.info(`getRequestsSubmittedBy OK in GTW`, {
          response: response,
          callRequest: data,
        });
        res.send(response);
      }
    );
  }

  static async getRequestBySerialNumber(req: Request, res: Response) {
    logger.info(`Call to getRequestBySerialNumber in GTW`, {
      callRequest: { serialNumber: req.params.serialNumber },
    });

    requestsClient.GetRequestBySerialNumber(
      { serialNumber: req.params.serialNumber },
      (err: any, response: RequestArray) => {
        if (err) {
          logger.error(`getRequestBySerialNumber ERROR in GTW`, {
            err,
            callRequest: { serialNumber: req.params.serialNumber },
          });
          res.status(500).send(err.message);
        }

        logger.info(`getRequestBySerialNumber OK in GTW`, {
          response: response,
          callRequest: { serialNumber: req.params.serialNumber },
        });
        res.send(response);
      }
    );
  }

  static async getRequestsBySubmitterIdentifier(req: Request, res: Response) {
    const data = {
      identifier: req.params.identifier,
      from: req.query.from,
      to: req.query.to,
    };

    logger.info(`Call to getRequestsBySubmitterIdentifier in GTW`, {
      callRequest: data,
    });

    requestsClient.GetRequestsBySubmitterIdentifier(
      data,
      (err: any, response: RequestS) => {
        if (err) {
          logger.error(`getRequestsBySubmitterIdentifier ERROR in GTW`, {
            err,
            callRequest: data,
          });
          res.status(500).send(err.message);
        }

        logger.info(`getRequestsBySubmitterIdentifier OK in GTW`, {
          response: response,
          callRequest: data,
        });
        res.send(response);
      }
    );
  }

  static async getRequestsByCommanderIdentifier(req: Request, res: Response) {
    const data = {
      identifier: req.params.identifier,
      from: req.query.from,
      to: req.query.to,
    };

    logger.info(`Call to getRequestsByCommanderIdentifier in GTW`, {
      callRequest: data,
    });

    requestsClient.GetRequestsByCommanderIdentifier(
      data,
      (err: any, response: RequestS) => {
        if (err) {
          logger.error(`getRequestsByCommanderIdentifier ERROR in GTW`, {
            err,
            callRequest: data,
          });
          res.status(500).send(err.message);
        }

        logger.info(`getRequestsByCommanderIdentifier OK in GTW`, {
          response: response,
          callRequest: data,
        });
        res.send(response);
      }
    );
  }

  static async getRequestsBySecurityIdentifier(req: Request, res: Response) {
    const data = {
      identifier: req.params.identifier,
      from: req.query.from,
      to: req.query.to,
    };

    logger.info(`Call to getRequestsBySecurityIdentifier in GTW`, {
      callRequest: data,
    });

    requestsClient.GetRequestsBySecurityIdentifier(
      data,
      (err: any, response: RequestS) => {
        if (err) {
          logger.error(`getRequestsBySecurityIdentifier ERROR in GTW`, {
            err,
            callRequest: data,
          });
          res.status(500).send(err.message);
        }

        logger.info(`getRequestsBySecurityIdentifier OK in GTW`, {
          response: response,
          callRequest: data,
        });
        res.send(response);
      }
    );
  }

  static async getRequestsByApproverIdentifier(req: Request, res: Response) {
    const data = {
      identifier: req.params.identifier,
      from: req.query.from,
      to: req.query.to,
    };

    logger.info(`Call to getRequestsByApproverIdentifier in GTW`, {
      callRequest: data,
    });

    requestsClient.GetRequestsByApproverIdentifier(
      data,
      (err: any, response: RequestS) => {
        if (err) {
          logger.error(`getRequestsByApproverIdentifier ERROR in GTW`, {
            err,
            callRequest: data,
          });
          res.status(500).send(err.message);
        }

        logger.info(`getRequestsByApproverIdentifier OK in GTW`, {
          response: response,
          callRequest: data,
        });
        res.send(response);
      }
    );
  }

  static async searchRequestsBySubmitterDisplayName(
    req: Request,
    res: Response
  ) {
    const data = {
      displayName: req.params.displayName,
      from: req.query.from,
      to: req.query.to,
    };

    logger.info(`Call to searchRequestsBySubmitterDisplayName in GTW`, {
      callRequest: data,
    });

    requestsClient.SearchRequestsBySubmitterDisplayName(
      data,
      (err: any, response: RequestS) => {
        if (err) {
          logger.error(`searchRequestsBySubmitterDisplayName ERROR in GTW`, {
            err,
            callRequest: data,
          });
          res.status(500).send(err.message);
        }

        logger.info(`searchRequestsBySubmitterDisplayName OK in GTW`, {
          response: response,
          callRequest: data,
        });
        res.send(response);
      }
    );
  }

  static async searchRequestsByCommanderDisplayName(
    req: Request,
    res: Response
  ) {
    const data = {
      displayName: req.params.displayName,
      from: req.query.from,
      to: req.query.to,
    };

    logger.info(`Call to searchRequestsByCommanderDisplayName in GTW`, {
      callRequest: data,
    });

    requestsClient.SearchRequestsByCommanderDisplayName(
      data,
      (err: any, response: RequestS) => {
        if (err) {
          logger.error(`searchRequestsByCommanderDisplayName ERROR in GTW`, {
            err,
            callRequest: data,
          });
          res.status(500).send(err.message);
        }

        logger.info(`searchRequestsByCommanderDisplayName OK in GTW`, {
          response: response,
          callRequest: data,
        });
        res.send(response);
      }
    );
  }

  static async searchRequestsBySecurityDisplayName(
    req: Request,
    res: Response
  ) {
    const data = {
      displayName: req.params.displayName,
      from: req.query.from,
      to: req.query.to,
    };

    logger.info(`Call to searchRequestsBySecurityDisplayName in GTW`, {
      callRequest: data,
    });

    requestsClient.searchRequestsBySecurityDisplayName(
      data,
      (err: any, response: RequestS) => {
        if (err) {
          logger.error(`searchRequestsBySecurityDisplayName ERROR in GTW`, {
            err,
            callRequest: data,
          });
          res.status(500).send(err.message);
        }

        logger.info(`searchRequestsBySecurityDisplayName OK in GTW`, {
          response: response,
          callRequest: data,
        });
        res.send(response);
      }
    );
  }

  static async searchRequestsByApproverDisplayName(
    req: Request,
    res: Response
  ) {
    const data = {
      displayName: req.params.displayName,
      from: req.query.from,
      to: req.query.to,
    };

    logger.info(`Call to searchRequestsByApproverDisplayName in GTW`, {
      callRequest: data,
    });

    requestsClient.SearchRequestsByApproverDisplayName(
      data,
      (err: any, response: RequestS) => {
        if (err) {
          logger.error(`searchRequestsByApproverDisplayName ERROR in GTW`, {
            err,
            callRequest: data,
          });
          res.status(500).send(err.message);
        }

        logger.info(`searchRequestsByApproverDisplayName OK in GTW`, {
          response: response,
          callRequest: data,
        });
        res.send(response);
      }
    );
  }

  static async updateADStatus(req: Request, res: Response) {
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
          await RequestsController.updateKartoffelStatus(req.body.RequestID);
        }
      } else if (status === false) {
        stageStatus = StageStatus.STAGE_FAILED;
      }

      const data = {
        requestId: req.body.RequestID,
        status: stageStatus,
        message: req.body.ErrorID,
      };

      logger.info(`Call to updateADStatus in GTW`, {
        callRequest: data,
      });

      requestsClient.UpdateADStatus(data, (err: any, response: RequestS) => {
        if (err) {
          logger.error(`updateADStatus ERROR in GTW`, {
            err,
            callRequest: data,
          });
          res.status(500).end(err.message);
        }

        logger.info(`updateADStatus OK in GTW`, {
          response: response,
          callRequest: data,
        });
        res.status(200).send();
      });
    } else {
      await ProducerController.produceToADQueue(req.body.RequestID);
    }
  }

  static async updateKartoffelStatus(requestId: string) {
    const data = {
      requestId: requestId,
      status: StageStatus.STAGE_IN_PROGRESS,
    };

    logger.info(`Call to updateKartoffelStatus in GTW`, {
      callRequest: data,
    });

    return new Promise((resolve, reject) => {
      requestsClient.UpdateKartoffelStatus(
        {
          requestId: requestId,
          status: StageStatus.STAGE_IN_PROGRESS,
        },
        (err: any, response: RequestS) => {
          if (err) {
            logger.error(`updateKartoffelStatus ERROR in GTW`, {
              err,
              callRequest: data,
            });
            resolve(err);
          }

          logger.info(`updateKartoffelStatus OK in GTW`, {
            response: response,
            callRequest: data,
          });
          resolve(response);
        }
      );
    });
  }

  static async updateRequest(req: Request, res: Response) {
    logger.info(`Call to updateRequest in GTW`, {
      callRequest: { id: req.params.id },
    });

    requestsClient.UpdateRequest(
      { id: req.params.id, requestProperties: req.body },
      (err: any, response: RequestS) => {
        if (err) {
          logger.error(`updateRequest ERROR in GTW`, {
            err,
            callRequest: { id: req.params.id },
          });

          res.status(500).send(err.message);
        }

        logger.info(`updateRequest OK in GTW`, {
          response: response,
          callRequest: { id: req.params.id },
        });
        res.send(response);
      }
    );
  }

  static async updateCommanders(req: Request, res: Response) {
    const data = { id: req.params.id, approvers: req.body.approvers };

    logger.info(`Call to updateCommanders in GTW`, {
      callRequest: data,
    });

    requestsClient.UpdateCommanders(data, (err: any, response: RequestS) => {
      if (err) {
        logger.error(`updateCommanders ERROR in GTW`, {
          err,
          callRequest: data,
        });

        res.status(500).send(err.message);
      }

      logger.info(`updateCommanders OK in GTW`, {
        response: response,
        callRequest: data,
      });
      res.send(response);
    });
  }

  static async updateSecurityApprovers(req: Request, res: Response) {
    const data = { id: req.params.id, approvers: req.body.approvers };

    logger.info(`Call to updateSecurityApprovers in GTW`, {
      callRequest: data,
    });

    requestsClient.UpdateSecurityApprovers(
      data,
      (err: any, response: RequestS) => {
        if (err) {
          logger.error(`updateSecurityApprovers ERROR in GTW`, {
            err,
            callRequest: data,
          });

          res.status(500).send(err.message);
        }

        logger.info(`updateSecurityApprovers OK in GTW`, {
          response: response,
          callRequest: data,
        });
        res.send(response);
      }
    );
  }

  static async updateApproverDecision(req: any, res: Response) {
    const data = {
      id: req.params.id,
      //TODO- ApproverDecision
    };

    logger.info(`Call to updateApproverDecision in GTW`, {
      callRequest: data,
    });
    //TODO(barak)- in requestService make one generic function for updateDecision.

    let response;

    switch (userTypeFromJSON(req.userType)) {
      case UserType.COMMANDER: {
        response = requestsClient.UpdateCommanderDecision(
          data,
          (err: any, response: Request) => {
            if (err) {
              logger.error(`updateCommanderDecision ERROR in GTW`, {
                err,
                callRequest: data,
              });
              res.status(500).send(err.message);
            }

            logger.info(`updateCommanderDecision OK in GTW`, {
              response: response,
              callRequest: data,
            });
            return response;
          }
        );
        break;
      }
      case UserType.SECURITY: {
        response = requestsClient.UpdateSecurityDecision(
          data,
          (err: any, response: Request) => {
            if (err) {
              logger.error(`updateSecurityDecision ERROR in GTW`, {
                err,
                callRequest: data,
              });
              res.status(500).send(err.message);
            }

            logger.info(`updateSecurityDecision OK in GTW`, {
              response: response,
              callRequest: data,
            });
            return response;
          }
        );
        break;
      }
      case UserType.SUPER_SECURITY: {
        response = requestsClient.UpdateSuperSecurityDecision(
          data,
          (err: any, response: Request) => {
            if (err) {
              logger.error(`updateSuperSecurityDecision ERROR in GTW`, {
                err,
                callRequest: data,
              });
              res.status(500).send(err.message);
            }

            logger.info(`updateSuperSecurityDecision OK in GTW`, {
              response: response,
              callRequest: data,
            });
            return response;
          }
        );
        break;
      }
    }

    const canPushToQueueRes = (await RequestsController.canPushToADQueue(
      req.params.id
    )) as CanPushToQueueRes;

    if (canPushToQueueRes.canPushToQueue === true) {
      await ProducerController.produceToADQueue(req.params.id);
    }

    res.send(response);
  }

  static async canPushToADQueue(requestId: string) {
    logger.info(`Call to CanPushToADQueue in GTW`, {
      callRequest: { id: requestId },
    });

    return new Promise((resolve, reject) => {
      requestsClient.CanPushToADQueue(
        {
          id: requestId,
        },
        (err: any, response: CanPushToQueueRes) => {
          if (err) {
            logger.error(`CanPushToADQueue ERROR in GTW`, {
              err,
              callRequest: { id: requestId },
            });
            resolve({
              canPushToQueue: false, //defalut in case of an error
            });
          }

          logger.info(`CanPushToADQueue OK in GTW`, {
            response: response,
            callRequest: { id: requestId },
          });
          resolve(response);
        }
      );
    });
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

    req.body.submittedBy = submittedBy;

    requestsClient.CreateRoleRequest(
      req.body,
      (err: any, response: CreateRoleRes) => {
        if (err) {
          logger.error(`createRoleRequest ERROR in GTW`, {
            err,
            callRequest: { submittedBy: req.user.id },
          });
          res.status(500).send(err.message);
        }

        logger.info(`createRoleRequest OK in GTW`, {
          response: response,
          callRequest: { submittedBy: req.user.id },
        });
        res.send(response);
      }
    );
  }

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

    req.body.submittedBy = submittedBy;

    requestsClient.AssignRoleToEntityRequest(
      req.body,
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

    req.body.submittedBy = submittedBy;

    requestsClient.CreateOGRequest(
      req.body,
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

    req.body.submittedBy = submittedBy;

    requestsClient.CreateOGRequest(
      req.body,
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

    req.body.submittedBy = submittedBy;

    requestsClient.CreateEntityRequest(
      req.body,
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

    req.body.submittedBy = submittedBy;

    requestsClient.RenameOGRequest(
      req.body,
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

    req.body.submittedBy = submittedBy;

    requestsClient.RenameRoleRequest(
      req.body,
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

    req.body.submittedBy = submittedBy;

    requestsClient.EditEntityRequest(
      req.body,
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

    requestsClient.DeleteRoleRequest(
      req.body,
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

    requestsClient.DeleteOGRequest(
      req.body,
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

    req.body.submittedBy = submittedBy;

    requestsClient.DisconectRoleFromEntityRequest(
      req.body,
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

  static async deleteRequest(req: Request, res: Response) {
    logger.info(`Call to deleteRequest in GTW`, {
      callRequest: { id: req.params.id },
    });

    requestsClient.DeleteRequest(
      { id: req.params.id },
      (err: any, response: SuccessMessage) => {
        if (err) {
          logger.error(`deleteRequest ERROR in GTW`, {
            err,
            callRequest: { id: req.params.id },
          });
          res.status(500).send(err.message);
        }

        logger.info(`deleteRequest OK in GTW`, {
          response: response,
          callRequest: { id: req.params.id },
        });
        res.send(response);
      }
    );
  }
}
