import { NextFunction, Request, Response } from 'express';
import {
  transformRequest,
  validateObject,
} from '../utils/validations/validations';
import { searchUnitSchema } from './tea.schema';

export class TeaValidator {
  // GET
  static isSearchUnitValid(req: Request, res: Response, next: NextFunction) {
    transformRequest(
      req,
      validateObject(req, searchUnitSchema, { allowUnknown: true })
    );
    next();
  }
}
