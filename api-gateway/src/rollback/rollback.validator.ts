import { NextFunction, Request, Response } from 'express';
import { valid } from 'joi';
import {
  transformRequest,
  validateObject,
} from '../utils/validations/validations';
import {
  isRollbackValidSchema,
  rollbackInADSchema,
  rollbackInKartoffelSchema,
} from './rollback.schema';
export class RollbackValidator {
  static isRollbackValidValid(req: Request, res: Response, next: NextFunction) {
    transformRequest(
      req,
      validateObject(req, isRollbackValidSchema, { allowUnknown: true })
    );
    next();
  }

  static rollbackInADValid(req: Request, res: Response, next: NextFunction) {
    transformRequest(
      req,
      validateObject(req, rollbackInADSchema, { allowUnknown: true })
    );
    next();
  }

  static rollbackInKartoffelValid(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    transformRequest(
      req,
      validateObject(req, rollbackInKartoffelSchema, { allowUnknown: true })
    );
    next();
  }
}
