import { Request, Response } from 'express';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import * as config from '../config';
import ProducerController from '../producer/producer.controller';
import {
  UserType,
  userTypeFromJSON,
} from '../interfaces/protoc/proto/approverService';
import {
  Request as RequestS,
  RequestArray,
  SuccessMessage,
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
  canPushToQueueRes,
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
    console.log('GetRequestById');

    requestsClient.GetRequestById(
      { id: req.params.id },
      (err: any, response: RequestS) => {
        if (err) {
          res.send(err);
        }
        res.send(response);
      }
    );
  }

  static async getAllRequests(req: any, res: Response) {
    //only SECURITY Approvers can see all requests.
    console.log('GetAllRequests');

    if (
      userTypeFromJSON(req.user.userType.type) === UserType.SECURITY ||
      userTypeFromJSON(req.user.userType.type) === UserType.SUPER_SECURITY
    ) {
      requestsClient.GetAllRequests(
        { from: req.query.from, to: req.query.to },
        (err: any, response: RequestArray) => {
          if (err) {
            res.send(err);
          }
          res.send(response);
        }
      );
    } else {
      res.send('You dont have access to see all requests!');
    }
  }

  static async getMyRequests(req: any, res: Response) {
    console.log('getMyRequests');

    requestsClient.GetRequestsSubmittedBy(
      { id: req.user.id, from: req.query.from, to: req.query.to },
      (err: any, response: RequestArray) => {
        if (err) {
          console.log('err', err);
          res.send(err);
        }
        console.log('response', response);
        res.send(response);
      }
    );
  }

  static async getRequestsAsCommander(req: any, res: Response) {
    console.log('getRequestsAsCommander');

    requestsClient.GetRequestsByCommander(
      { id: req.user.id, from: req.query.from, to: req.query.to },
      (err: any, response: RequestArray) => {
        if (err) {
          res.send(err);
        }
        res.send(response);
      }
    );
  }

  static async getRequestsSubmittedBy(req: Request, res: Response) {
    console.log('GetRequestsSubmittedBy');

    requestsClient.GetRequestsSubmittedBy(
      { id: req.params.id, from: req.query.from, to: req.query.to },
      (err: any, response: RequestArray) => {
        if (err) {
          res.send(err);
        }
        res.send(response);
      }
    );
  }

  static async getRequestsByCommander(req: Request, res: Response) {
    console.log('GetRequestsByCommander');

    requestsClient.GetRequestsByCommander(
      { id: req.params.id, from: req.query.from, to: req.query.to },
      (err: any, response: RequestArray) => {
        if (err) {
          res.send(err);
        }
        res.send(response);
      }
    );
  }

  static async updateADStatus(req: Request, res: Response) {
    console.log('UpdateADStatus');

    const retry: boolean = req.body.retry;
    const status: boolean = req.body.success;
    let stageStatus: StageStatus = StageStatus.STAGE_IN_PROGRESS;

    if (retry === false) {
      if (status === true) {
        stageStatus = StageStatus.STAGE_DONE;

        const produceRes = (await ProducerController.produceToKartoffelQueue(
          req.body.requestId
        )) as SuccessMessage;

        if (produceRes.success === true) {
          //if produce was successful update Kartoffel Status
          await RequestsController.updateKartoffelStatus(req.body.requestId);
        }
      } else if (status === false) {
        stageStatus = StageStatus.STAGE_FAILED;
      }

      requestsClient.UpdateADStatus(
        {
          requestId: req.body.requestId,
          status: stageStatus,
          message: req.body.errorCode,
        },
        (err: any, response: RequestS) => {
          if (err) {
            res.status(500).end(err.message);
          }
          res.status(200).send();
        }
      );
    } else {
      await ProducerController.produceToADQueue(req, res);
    }
  }

  static async updateKartoffelStatus(requestId: string) {
    console.log('UpdateKartoffelStatus');

    return new Promise((resolve, reject) => {
      requestsClient.UpdateKartoffelStatus(
        {
          requestId: requestId,
          status: StageStatus.STAGE_IN_PROGRESS,
        },
        (err: any, response: RequestS) => {
          if (err) {
            resolve(err);
          }
          resolve(response);
        }
      );
    });
  }

  static async updateRequest(req: Request, res: Response) {
    console.log('UpdateRequest');

    requestsClient.UpdateRequest(req.body, (err: any, response: RequestS) => {
      if (err) {
        res.send(err);
      }
      res.send(response);
    });
  }

  static async renameOGRequest(req: any, res: Response) {
    console.log('RenameOGRequest');

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
          res.send(err);
        }
        res.send(response);
      }
    );
  }

  static async renameRoleRequest(req: any, res: Response) {
    console.log('RenameRoleRequest');

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
          res.send(err);
        }
        res.send(response);
      }
    );
  }

  static async createOGRequest(req: any, res: Response) {
    console.log('createOGRequest');

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
          res.send(err);
        }
        res.send(response);
      }
    );
  }

  static async createRoleRequest(req: any, res: Response) {
    console.log('createRoleRequest');

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
          res.send(err);
        }
        res.send(response);
      }
    );
  }

  static async createEntityRequest(req: any, res: Response) {
    console.log('CreateEntityRequest');

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
          res.send(err);
        }
        res.send(response);
      }
    );
  }

  static async assignRoleToEntityRequest(req: any, res: Response) {
    console.log('AssignRoleToEntityRequest');

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
          res.send(err);
        }
        res.send(response);
      }
    );
  }

  static async editEntityRequest(req: any, res: Response) {
    console.log('EditEntityRequest');

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
          res.send(err);
        }
        res.send(response);
      }
    );
  }

  static async disconectRoleFromEntityRequest(req: any, res: Response) {
    console.log('DisconectRoleFromEntityRequest');

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
          res.send(err);
        }
        res.send(response);
      }
    );
  }

  static async deleteRoleRequest(req: Request, res: Response) {
    console.log('DeleteRoleRequest');

    requestsClient.DeleteRoleRequest(
      req.body,
      (err: any, response: DeleteRoleRes) => {
        if (err) {
          res.send(err);
        }
        res.send(response);
      }
    );
  }

  static async deleteOGRequest(req: Request, res: Response) {
    console.log('DeleteOGRequest');

    requestsClient.DeleteOGRequest(
      req.body,
      (err: any, response: DeleteOGRes) => {
        if (err) {
          res.send(err);
        }
        res.send(response);
      }
    );
  }

  static async deleteRequest(req: Request, res: Response) {
    console.log('DeleteRequest');

    requestsClient.DeleteRequest(
      req.body,
      (err: any, response: SuccessMessage) => {
        if (err) {
          res.send(err);
        }
        res.send(response);
      }
    );
  }

  static async updateApproverDecision(req: any, res: Response) {
    console.log('updateApproverDecision');

    //TODO(barak)- in requestService make one generic function for updateDecision.

    let response;

    switch (req.userType) {
      case UserType.COMMANDER: {
        requestsClient.UpdateCommanderDecision(
          {
            id: req.params.id,
            //TODO- ApproverDecision
          },
          (err: any, response: Request) => {
            if (err) {
              res.send(err);
            }
            res.send(response);
          }
        );
        break;
      }
      case UserType.SECURITY: {
        response = requestsClient.UpdateCommanderDecision(
          {
            id: req.params.id,
            //TODO- ApproverDecision
          },
          (err: any, response: Request) => {
            if (err) {
              res.send(err);
            }
            return response;
          }
        );
        break;
      }
      case UserType.SUPER_SECURITY: {
        response = requestsClient.updateSecurityDecision(
          {
            id: req.params.id,
            //TODO- ApproverDecision
          },
          (err: any, response: Request) => {
            if (err) {
              res.send(err);
            }
            return response;
          }
        );
        break;
      }
    }

    const canPushToQueueRes = requestsClient.CanPushToADQueue(
      {
        id: req.params.id,
      },
      (err: any, response: canPushToQueueRes) => {
        if (err) {
          res.send(err);
        }
        return response;
      }
    );

    if (canPushToQueueRes.canPushToQueue === true) {
      await ProducerController.produceToADQueue(req, res);
    } else {
      res.send(response);
    }
  }
}
