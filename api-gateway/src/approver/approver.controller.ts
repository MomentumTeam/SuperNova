import { Request, Response } from 'express';
import * as grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import { logger } from '../logger';
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

  static async addCommanderApprover(req: any, res: Response) {
    logger.info(`Call to AddCommanderApprover in GTW`, {
      entityId: req.body.entityId,
    });

    approverClient.AddCommanderApprover(
      req.body,
      (err: any, response: Approver) => {
        if (err) {
          logger.error(`AddCommanderApprover ERROR in GTW`, {
            err,
            callRequest: { entityId: req.body.entityId },
          });
          res.status(500).send(err.message);
        }

        logger.info(`AddCommanderApprover OK in GTW`, {
          response: response,
          callRequest: { entityId: req.body.entityId },
        });
        res.send(response);
      }
    );
  }

  static async addSecurityApprover(req: any, res: Response) {
    logger.info(`Call to AddSecurityApprover in GTW`, {
      entityId: req.body.entityId,
    });

    approverClient.AddSecurityApprover(
      req.body,
      (err: any, response: Approver) => {
        if (err) {
          logger.error(`AddSecurityApprover ERROR in GTW`, {
            err,
            callRequest: { entityId: req.body.entityId },
          });
          res.status(500).send(err.message);
        }

        logger.info(`AddSecurityApprover OK in GTW`, {
          response: response,
          callRequest: { entityId: req.body.entityId },
        });
        res.send(response);
      }
    );
  }

  static async addSuperSecurityApprover(req: any, res: Response) {
    logger.info(`Call to AddSuperSecurityApprover in GTW`, {
      entityId: req.body.entityId,
    });

    approverClient.AddSuperSecurityApprover(
      req.body,
      (err: any, response: Approver) => {
        if (err) {
          logger.error(`AddSuperSecurityApprover ERROR in GTW`, {
            err,
            callRequest: { entityId: req.body.entityId },
          });
          res.status(500).send(err.message);
        }

        logger.info(`AddSuperSecurityApprover OK in GTW`, {
          response: response,
          callRequest: { entityId: req.body.entityId },
        });
        res.send(response);
      }
    );
  }

  static async getUserType(req: any, res: Response) {
    logger.info(`Call to GetUserType in GTW`, {
      callRequest: { entityId: req.query.id },
    });

    approverClient.GetUserType(
      { entityId: req.params.id },
      (err: any, response: GetUserTypeRes) => {
        if (err) {
          logger.error(`GetUserType ERROR in GTW`, {
            err,
            callRequest: { entityId: req.query.id },
          });
          res.status(500).send(err.message);
        }
        logger.info(`GetUserType OK in GTW`, {
          response: response,
          callRequest: { entityId: req.query.id },
        });
        res.send(response);
      }
    );
  }

  static async searchApproverByDisplayName(req: any, res: Response) {
    logger.info(`Call to SearchApproverByDisplayName in GTW`);

    approverClient.SearchApproverByDisplayName(
      req.body,
      (err: any, response: ApproverArray) => {
        if (err) {
          logger.error(`SearchApproverByDisplayName ERROR in GTW`, {
            err,
          });
          res.status(500).send(err.message);
        }
        logger.info(`SearchApproverByDisplayName OK in GTW`, {
          response: response,
        });
        res.send(response);
      }
    );
  }

  static async searchApproverByDomainUser(req: any, res: Response) {
    logger.info(`Call to SearchApproverByDomainUser in GTW`);

    approverClient.SearchApproverByDomainUser(
      req.body,
      (err: any, response: ApproverArray) => {
        if (err) {
          logger.error(`SearchApproverByDomainUser ERROR in GTW`, {
            err,
          });
          res.status(500).send(err.message);
        }
        logger.info(`SearchApproverByDomainUser OK in GTW`, {
          response: response,
        });
        res.send(response);
      }
    );
  }

  static async getAllSecurityApprovers(req: any, res: Response) {
    logger.info(`Call to GetAllSecurityApprovers in GTW`);

    approverClient.GetAllSecurityApprovers(
      {},
      (err: any, response: ApproverArray) => {
        if (err) {
          logger.error(`GetAllSecurityApprovers ERROR in GTW`, {
            err,
          });
          res.status(500).send(err.message);
        }
        logger.info(`GetAllSecurityApprovers OK in GTW`, {
          response: response,
        });
        res.send(response);
      }
    );
  }

  static async getAllSuperSecurityApprovers(req: any, res: Response) {
    logger.info(`Call to GetAllSuperSecurityApprovers in GTW`);

    approverClient.GetAllSuperSecurityApprovers(
      {},
      (err: any, response: ApproverArray) => {
        if (err) {
          logger.error(`GetAllSuperSecurityApprovers ERROR in GTW`, {
            err,
          });
          res.status(500).send(err.message);
        }
        logger.info(`GetAllSuperSecurityApprovers OK in GTW`, {
          response: response,
        });
        res.send(response);
      }
    );
  }

  static async getAllCommanderApprovers(req: any, res: Response) {
    logger.info(`Call to GetAllCommanderApprovers in GTW`);

    approverClient.GetAllCommanderApprovers(
      {},
      (err: any, response: ApproverArray) => {
        if (err) {
          logger.error(`GetAllCommanderApprovers ERROR in GTW`, {
            err,
          });
          res.status(500).send(err.message);
        }
        logger.info(`GetAllCommanderApprovers OK in GTW`, {
          response: response,
        });
        res.send(response);
      }
    );
  }

  static async updateCommanderDecision(req: any, res: Response) {
    const data = {
      requestId: req.params.requestId,
      approverDecision: req.body.approverDecision,
    };

    logger.info(`Call to UpdateCommanderDecision in GTW`, {
      callRequest: data,
    });

    approverClient.UpdateCommanderDecision(
      {
        requestId: req.params.requestId,
        approverDecision: req.body.approverDecision,
      },
      (err: any, response: ApproverArray) => {
        if (err) {
          logger.error(`UpdateCommanderDecision ERROR in GTW`, {
            err,
            callRequest: data,
          });
          res.status(500).send(err.message);
        }
        logger.info(`UpdateCommanderDecision OK in GTW`, {
          response: response,
          callRequest: data,
        });
        res.send(response);
      }
    );
  }

  static async updateSecurityDecision(req: any, res: Response) {
    const data = {
      requestId: req.params.requestId,
      approverDecision: req.body.approverDecision,
    };

    logger.info(`Call to UpdateCommanderDecision in GTW`, {
      callRequest: data,
    });

    approverClient.UpdateSecurityDecision(
      {
        requestId: req.params.requestId,
        approverDecision: req.body.approverDecision,
      },
      (err: any, response: ApproverArray) => {
        if (err) {
          logger.error(`UpdateCommanderDecision ERROR in GTW`, {
            err,
            callRequest: data,
          });
          res.status(500).send(err.message);
        }
        logger.info(`UpdateCommanderDecision OK in GTW`, {
          response: response,
          callRequest: data,
        });
        res.send(response);
      }
    );
  }

  static async updateSuperSecurityDecision(req: any, res: Response) {
    const data = {
      requestId: req.params.requestId,
      approverDecision: req.body.approverDecision,
    };

    logger.info(`Call to UpdateCommanderDecision in GTW`, {
      callRequest: data,
    });

    approverClient.UpdateSecurityDecision(
      {
        requestId: req.params.requestId,
        approverDecision: req.body.approverDecision,
      },
      (err: any, response: ApproverArray) => {
        if (err) {
          logger.error(`UpdateCommanderDecision ERROR in GTW`, {
            err,
            callRequest: data,
          });
          res.status(500).send(err.message);
        }
        logger.info(`UpdateCommanderDecision OK in GTW`, {
          response: response,
          callRequest: data,
        });
        res.send(response);
      }
    );
  }
}
