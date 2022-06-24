import { NextFunction, Request, Response } from 'express';
import {
  transformRequest,
  validateObject,
} from '../utils/validations/validations';
import {
  getEventsByRoleIdSchema,
  getEventsByGroupIdSchema,
  getEventsByEntityIdSchema,
  getEventsSubmmitedByEntityIdSchema,
} from './history.schema';

export class HistoryValidator {
  // GET
  static isGetEventsByRoleIdValid(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    transformRequest(
      req,
      validateObject(req, getEventsByRoleIdSchema, { allowUnknown: true })
    );
    next();
  }

  static isGetEventsByGroupIdSchemaValid(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    transformRequest(
      req,
      validateObject(req, getEventsByGroupIdSchema, {
        allowUnknown: true,
      })
    );
    next();
  }

  static isGetEventsByEntityIdValid(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    transformRequest(
      req,
      validateObject(req, getEventsByEntityIdSchema, { allowUnknown: true })
    );
    next();
  }

  static isGetEventsSubmmitedByEntityIdValid(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    transformRequest(
      req,
      validateObject(req, getEventsSubmmitedByEntityIdSchema, { allowUnknown: true })
    );
    next();
  }

  
}