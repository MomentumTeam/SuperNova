import { Request, Response } from 'express';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import * as config from '../config';
import { logger } from '../logger';
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
  config.requestServiceUrl,
  grpc.credentials.createInsecure()
);

export default class RequestsController {
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
          res.send(err);
        }

        logger.info(`getRequestById OK in GTW`, {
          response: response,
          callRequest: { id: req.params.id },
        });
        res.send(response);
      }
    );
  }

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
        { from: req.query.from, to: req.query.to },
        (err: any, response: RequestArray) => {
          if (err) {
            logger.error(`getAllRequests ERROR in GTW`, {
              err,
              callRequest: data,
            });
            res.send(err);
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
          res.send(err);
        }

        logger.info(`getMyRequests OK in GTW`, {
          response: response,
          callRequest: data,
        });
        res.send(response);
      }
    );
  }

  static async getRequestsAsCommander(req: any, res: Response) {
    const data = { id: req.user.id, from: req.query.from, to: req.query.to };

    logger.info(`Call to getRequestsAsCommander in GTW`, {
      callRequest: data,
    });

    requestsClient.GetRequestsByCommander(
      data,
      (err: any, response: RequestArray) => {
        if (err) {
          logger.error(`getRequestsAsCommander ERROR in GTW`, {
            err,
            callRequest: data,
          });
          res.send(err);
        }

        logger.info(`getRequestsAsCommander OK in GTW`, {
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
          res.send(err);
        }

        logger.info(`getRequestsSubmittedBy OK in GTW`, {
          response: response,
          callRequest: data,
        });
        res.send(response);
      }
    );
  }

  static async getRequestsByCommander(req: Request, res: Response) {
    const data = { id: req.params.id, from: req.query.from, to: req.query.to };

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
          res.send(err);
        }

        logger.info(`getRequestsByCommander OK in GTW`, {
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

          res.send(err);
        }

        logger.info(`updateRequest OK in GTW`, {
          response: response,
          callRequest: { id: req.params.id },
        });
        res.send(response);
      }
    );
  }

  static async updateApproverDecision(req: any, res: Response) {
    logger.info(`Call to updateApproverDecision in GTW`, {
      callRequest: { id: req.params.id },
    });
    //TODO(barak)- in requestService make one generic function for updateDecision.

    let response;

    switch (userTypeFromJSON(req.userType)) {
      case UserType.COMMANDER: {
        response = requestsClient.UpdateCommanderDecision(
          {
            id: req.params.id,
            //TODO- ApproverDecision
          },
          (err: any, response: Request) => {
            if (err) {
              logger.error(`updateRequest ERROR in GTW`, {
                err,
                callRequest: { id: req.params.id },
              });
              res.send(err);
            }
            return response;
          }
        );
        break;
      }
      case UserType.SECURITY: {
        response = requestsClient.UpdateSecurityDecision(
          {
            id: req.params.id,
            //TODO- ApproverDecision
          },
          (err: any, response: Request) => {
            if (err) {
              logger.error(`updateRequest ERROR in GTW`, {
                err,
                callRequest: { id: req.params.id },
              });
              res.send(err);
            }
            return response;
          }
        );
        break;
      }
      case UserType.SUPER_SECURITY: {
        response = requestsClient.UpdateSuperSecurityDecision(
          {
            id: req.params.id,
            //TODO- ApproverDecision
          },
          (err: any, response: Request) => {
            if (err) {
              logger.error(`updateRequest ERROR in GTW`, {
                err,
                callRequest: { id: req.params.id },
              });
              res.send(err);
            }
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
          res.send(err);
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
          res.send(err);
        }

        logger.info(`renameRoleRequest OK in GTW`, {
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
          res.send(err);
        }

        logger.info(`createOGRequest OK in GTW`, {
          response: response,
          callRequest: { submittedBy: req.user.id },
        });
        res.send(response);
      }
    );
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
    console.log('submittedBy', submittedBy);

    req.body.submittedBy = submittedBy;

    requestsClient.CreateRoleRequest(
      req.body,
      (err: any, response: CreateRoleRes) => {
        if (err) {
          logger.error(`createRoleRequest ERROR in GTW`, {
            err,
            callRequest: { submittedBy: req.user.id },
          });
          res.send(err);
        }

        logger.info(`createRoleRequest OK in GTW`, {
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
          res.send(err);
        }

        logger.info(`createEntityRequest OK in GTW`, {
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
          res.send(err);
        }

        logger.info(`assignRoleToEntityRequest OK in GTW`, {
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
          res.send(err);
        }

        logger.info(`editEntityRequest OK in GTW`, {
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
          res.send(err);
        }

        logger.info(`disconectRoleFromEntityRequest OK in GTW`, {
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
          res.send(err);
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
          res.send(err);
        }

        logger.info(`deleteOGRequest OK in GTW`, {
          response: response,
          callRequest: { submittedBy: req.user.id },
        });
        res.send(response);
      }
    );
  }

  // static async deleteRequest(req: Request, res: Response) {
  //   logger.info(`Call to deleteRequest in GTW`);

  //   requestsClient.DeleteRequest(
  //     req.body,
  //     (err: any, response: SuccessMessage) => {
  //       if (err) {
  //         logger.error(`deleteRequest ERROR in GTW`, {
  //           err,
  //         });
  //         res.send(err);
  //       }

  //       logger.info(`deleteRequest OK in GTW`, {
  //         response: response,
  //       });
  //       res.send(response);
  //     }
  //   );
  // }
}
