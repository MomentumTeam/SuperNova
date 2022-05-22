import { RollbackService } from './rollback.service';
import { Request, Response } from 'express';
import { logger } from '../utils/logger/logger';
import { statusCodeHandler } from '../utils/errors/errorHandlers';
import {
  IsRollbackValidReq,
  RollbackReq,
} from '../interfaces/protoc/proto/rollbackService';
export default class RollbackController {
  static async isRollbackValid(req: any, res: Response) {
    const isRollbackValidReq: IsRollbackValidReq = {
      id: req.params.id,
    };
    try {
      const isRollbackValid = await RollbackService.isRollbackValid(
        isRollbackValidReq
      );
      res.send(isRollbackValid);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async rollbackInAD(req: any, res: Response) {
    const rollbackInAD: RollbackReq = {
      id: req.params.id,
    };
    try {
      const rollback = await RollbackService.rollbackInAD(rollbackInAD);
      res.send(rollback);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async rollbackInKartoffel(req: any, res: Response) {
    const rollbackInKartoffelReq: RollbackReq = {
      id: req.params.id,
    };
    try {
      const rollback = await RollbackService.rollbackInKartoffel(
        rollbackInKartoffelReq
      );
      res.send(rollback);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }
}
