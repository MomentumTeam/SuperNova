import { Request, Response } from 'express';
import { logger } from '../utils/logger/logger';
import {
  Approver,
  GetUserTypeRes,
  ApproverArray,
  SearchByDisplayNameReq,
  GetAllApproversReq,
  SearchByDomainUserReq,
  GetUserTypeReq,
  AddApproverReq,
  DeleteApproverReq,
} from '../interfaces/protoc/proto/approverService';
import { approverClient } from './approver.service';
export default class ApproverController {
  // GET
  static async getAllApprovers(req: any, res: Response) {
    const getAllApproversReq: GetAllApproversReq = {
      type: req.query?.type ? req.query.type : {},
    };
    logger.info(`Call to GetAllApprovers in GTW`, getAllApproversReq);

    approverClient.GetAllApprovers(
      getAllApproversReq,
      (err: any, response: ApproverArray) => {
        if (err) {
          logger.error(`getAllApprovers ERROR in GTW`, {
            err,
            callRequest: getAllApproversReq,
          });
          res.status(500).send(err.message);
        }
        logger.info(`getAllApprovers OK in GTW`, {
          response: response,
          callRequest: getAllApproversReq,
        });
        res.send(response);
      }
    );
  }

  static async searchApproverByDisplayName(req: any, res: Response) {
    const searchByDisplayNameReq: SearchByDisplayNameReq = {
      displayName: req.params.displayName,
      type: req.query.type,
      from: req.query.from,
      to: req.query.to,
    };

    logger.info(
      `Call to SearchApproverByDisplayName in GTW`,
      searchByDisplayNameReq
    );

    approverClient.SearchApproverByDisplayName(
      searchByDisplayNameReq,
      (err: any, response: ApproverArray) => {
        if (err) {
          logger.error(`SearchApproverByDisplayName ERROR in GTW`, {
            err,
            callRequest: searchByDisplayNameReq,
          });
          res.status(500).send(err.message);
        }
        logger.info(`SearchApproverByDisplayName OK in GTW`, {
          response: response,
          callRequest: searchByDisplayNameReq,
        });
        res.send(response);
      }
    );
  }

  static async searchApproverByDomainUser(req: any, res: Response) {
    const searchByDomainUserReq: SearchByDomainUserReq = {
      domainUser: req.params.displayName,
      type: req.query.type,
    };
    logger.info(
      `Call to SearchApproverByDomainUser in GTW`,
      searchByDomainUserReq
    );

    approverClient.SearchApproverByDomainUser(
      searchByDomainUserReq,
      (err: any, response: ApproverArray) => {
        if (err) {
          logger.error(`SearchApproverByDomainUser ERROR in GTW`, {
            err,
            callRequest: searchByDomainUserReq,
          });
          res.status(500).send(err.message);
        }
        logger.info(`SearchApproverByDomainUser OK in GTW`, {
          response: response,
          callRequest: searchByDomainUserReq,
        });
        res.send(response);
      }
    );
  }

  static async getUserType(req: any, res: Response) {
    const getUserTypeReq: GetUserTypeReq = {
      entityId: req.params.entityId,
    };
    logger.info(`Call to GetUserType in GTW`, {
      callRequest: getUserTypeReq,
    });

    approverClient.GetUserType(
      getUserTypeReq,
      (err: any, response: GetUserTypeRes) => {
        if (err) {
          logger.error(`GetUserType ERROR in GTW`, {
            err,
            callRequest: getUserTypeReq,
          });
          res.status(500).send(err.message);
        }
        logger.info(`GetUserType OK in GTW`, {
          response: response,
          callRequest: getUserTypeReq,
        });
        res.send(response);
      }
    );
  }

  // POST
  static async addApprover(req: any, res: Response) {
    let addApproverReq: Partial<AddApproverReq> = {
      entityId: req.body.entityId,
      type: req.body.type,
    };
    logger.info(`Call to AddApprover in GTW`, addApproverReq);

    // TODO: call kartoffel service and search for domainUsers, akaunit and displayname
    // add the findings to the body req
    addApproverReq.akaUnit = 'TODO';
    addApproverReq.displayName = 'TODO';
    addApproverReq.domainUsers = ['TODO'];

    approverClient.AddApprover(
      addApproverReq,
      (err: any, response: Approver) => {
        if (err) {
          logger.error(`AddApprover ERROR in GTW`, {
            err,
            callRequest: addApproverReq,
          });
          res.status(500).send(err.message);
        }

        logger.info(`AddApprover OK in GTW`, {
          response: response,
          callRequest: addApproverReq,
        });
        res.send(response);
      }
    );
  }

  // PUT
  static async updateApproverDecision(req: any, res: Response) {
    // TODO

    const data = {
      requestId: req.params.requestId,
      approverDecision: req.body.approverDecision,
    };

    logger.info(`Call to updateApproverDecision in GTW`, {
      callRequest: data,
    });

    approverClient.UpdateApproverDecision(
      {
        requestId: req.params.requestId,
        approverDecision: req.body.approverDecision,
      },
      (err: any, response: ApproverArray) => {
        if (err) {
          logger.error(`updateApproverDecision ERROR in GTW`, {
            err,
            callRequest: data,
          });
          res.status(500).send(err.message);
        }
        logger.info(`updateApproverDecision OK in GTW`, {
          response: response,
          callRequest: data,
        });
        res.send(response);
      }
    );
  }

  // DELETE
  static async deleteApprover(req: any, res: Response) {
    let deleteApproverReq: DeleteApproverReq = {
      approverId: req.params.id,
    };
    logger.info(`Call to deleteApprover in GTW`, deleteApproverReq);

    //TODO: ADD get user by id to check if the user exists

    approverClient.DeleteApprover(
      deleteApproverReq,
      (err: any, response: Approver) => {
        if (err) {
          logger.error(`deleteApprover ERROR in GTW`, {
            err,
            callRequest: deleteApproverReq,
          });
          res.status(500).send(err.message);
        }

        logger.info(`deleteApprover OK in GTW`, {
          response: response,
          callRequest: deleteApproverReq,
        });
        res.send(response);
      }
    );
  }
}
