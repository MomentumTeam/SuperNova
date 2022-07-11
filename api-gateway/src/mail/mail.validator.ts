import { NextFunction, Request, Response } from 'express';
import {
  transformRequest,
  validateObject,
} from '../utils/validations/validations';
import { sendHierarchyDataMailSchema } from './mail.schema';

export class MailValidator {
  static sendHierarchyDataMailValid(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    transformRequest(
      req,
      validateObject(req, sendHierarchyDataMailSchema, { allowUnknown: true })
    );
    next();
  }
}
