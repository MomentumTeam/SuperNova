import { Request, Response } from 'express';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import * as config from '../config';
import {
  Approver,
  GetUserTypeRes,
  ApproverArray,
  SuccessMessage,
} from '../interfaces/protoc/proto/approverService';

const PROTO_PATH = __dirname.includes('dist')
  ? path.join(__dirname, '../../../proto/approverService.proto')
  : path.join(__dirname, '../../proto/approverService.proto');

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
  grpc.loadPackageDefinition(packageDefinition).ApproverService;

export const approverClient: any = new protoDescriptor.ApproverService(
  config.approverServiceUrl,
  grpc.credentials.createInsecure()
);

export default class ApproverController {
  static async AddCommanderApprover(req: any, res: Response) {
    console.log('AddCommanderApprover');
    req.body['entityId'] = req.user.id;

    approverClient.AddCommanderApprover(
      req.body,
      (err: any, response: Approver) => {
        if (err) {
          res.send(err);
        }
        res.send(response);
      }
    );
  }

  static async AddSecurityApprover(req: any, res: Response) {
    console.log('AddSecurityApprover');
    req.body['entityId'] = req.user.id;

    approverClient.AddSecurityApprover(
      req.body,
      (err: any, response: Approver) => {
        if (err) {
          res.send(err);
        }
        res.send(response);
      }
    );
  }

  static async AddSuperSecurityApprover(req: any, res: Response) {
    console.log('AddSuperSecurityApprover');
    req.body['entityId'] = req.user.id;

    approverClient.AddSuperSecurityApprover(
      req.body,
      (err: any, response: Approver) => {
        if (err) {
          res.send(err);
        }
        res.send(response);
      }
    );
  }

  static async GetUserType(req: any, res: Response) {
    console.log('GetUserType');

    approverClient.GetUserType(
      { entityId: req.query.id },
      (err: any, response: GetUserTypeRes) => {
        if (err) {
          res.send(err);
        }
        res.send(response);
      }
    );
  }

  static async SearchApproverByDisplayName(req: any, res: Response) {
    console.log('SearchApproverByDisplayName');

    approverClient.SearchApproverByDisplayName(
      {
        displayName: req.body.displayName,
        type: req.body.type,
        from: req.body.from,
        to: req.body.to,
      },
      (err: any, response: ApproverArray) => {
        if (err) {
          res.send(err);
        }
        res.send(response);
      }
    );
  }

  static async SearchApproverByDomainUser(req: any, res: Response) {
    console.log('SearchApproverByDomainUser');

    approverClient.SearchApproverByDomainUser(
      {
        domainUser: req.body.domainUser,
        type: req.body.type,
      },
      (err: any, response: ApproverArray) => {
        if (err) {
          res.send(err);
        }
        res.send(response);
      }
    );
  }

  static async GetAllSecurityApprovers(req: any, res: Response) {
    console.log('GetAllSecurityApprovers');

    approverClient.GetAllSecurityApprovers(
      {
        //TODO
      },
      (err: any, response: ApproverArray) => {
        if (err) {
          res.send(err);
        }
        res.send(response);
      }
    );
  }

  static async GetAllSuperSecurityApprovers(req: any, res: Response) {
    console.log('GetAllSuperSecurityApprovers');

    approverClient.GetAllSuperSecurityApprovers(
      {
        //TODO
      },
      (err: any, response: ApproverArray) => {
        if (err) {
          res.send(err);
        }
        res.send(response);
      }
    );
  }

  static async GetAllCommanderApprovers(req: any, res: Response) {
    console.log('GetAllCommanderApprovers');

    approverClient.GetAllCommanderApprovers(
      {
        //TODO
      },
      (err: any, response: ApproverArray) => {
        if (err) {
          res.send(err);
        }
        res.send(response);
      }
    );
  }

  static async UpdateCommanderDecision(req: any, res: Response) {
    console.log('UpdateCommanderDecision');

    approverClient.UpdateCommanderDecision(
      {
        requestId: req.params.requestId,
        approverDecision: req.body.approverDecision,
      },
      (err: any, response: ApproverArray) => {
        if (err) {
          res.send(err);
        }
        res.send(response);
      }
    );
  }
    
  static async UpdateSecurityDecision(req: any, res: Response) {
    console.log('UpdateSecurityDecision');

    approverClient.UpdateSecurityDecision(
      {
        requestId: req.params.requestId,
        approverDecision: req.body.approverDecision,
      },
      (err: any, response: ApproverArray) => {
        if (err) {
          res.send(err);
        }
        res.send(response);
      }
    );
  }
}
