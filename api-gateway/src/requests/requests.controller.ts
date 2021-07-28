import { Request, Response } from 'express';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import * as config from '../config';
import { UserType, userTypeFromJSON } from '../interfaces/protoc/proto/approverService';
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

    const status: string = req.body.Status;
    let stageStatus: StageStatus = StageStatus.STAGE_IN_PROGRESS;

    if (status === 'true') {
      stageStatus = StageStatus.STAGE_DONE;
    } else if (status === 'false') {
      stageStatus = StageStatus.STAGE_FAILED;
    }

    requestsClient.UpdateADStatus(
      {
        requestId: req.body.RequestID,
        status: stageStatus,
        message: req.body.ErrorID,
      },
      (err: any, response: RequestS) => {
        if (err) {
          res.status(500).end(err.message);
        }
        res.status(200).send();
      }
    );
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

  static async renameOGRequest(req: Request, res: Response) {
    console.log('RenameOGRequest');

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

  static async renameRoleRequest(req: Request, res: Response) {
    console.log('RenameRoleRequest');

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

  static async createOGRequest(req: Request, res: Response) {
    console.log('createOGRequest');

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

  static async createRoleRequest(req: Request, res: Response) {
    console.log('createRoleRequest');

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

  static async createEntityRequest(req: Request, res: Response) {
    console.log('CreateEntityRequest');

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

  static async assignRoleToEntityRequest(req: Request, res: Response) {
    console.log('AssignRoleToEntityRequest');

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

  static async editEntityRequest(req: Request, res: Response) {
    console.log('EditEntityRequest');

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

  static async disconectRoleFromEntityRequest(req: Request, res: Response) {
    console.log('DisconectRoleFromEntityRequest');

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
}
