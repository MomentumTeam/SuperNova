import { NextFunction, Request, Response } from 'express';
import { GetBulkRequestByIdReq } from '../interfaces/protoc/proto/bulkService';
import {
  transformRequest,
  validateObject,
} from '../utils/validations/validations';
import {
  changeRoleHierarchyBulkRequestSchema,
  createRoleBulkRequestSchema,
  getBulkRequestByIdReqSchema,
  getBulkRequestExampleSchema,
  uploadBulkFileSchema
} from './bulk.schema';

export class BulkValidator {
  // POST
  static isUploadBulkFileValid(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    transformRequest(
      req,
      validateObject(req, uploadBulkFileSchema, { allowUnknown: true })
    );
    next();
  }


  static isCreateRoleBulkRequestValid(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    transformRequest(
      req,
      validateObject(req, createRoleBulkRequestSchema, { allowUnknown: true })
    );
    next();
  }
  // PUT
  static isChangeRoleHierarchyBulkRequestValid(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    transformRequest(
      req,
      validateObject(req, changeRoleHierarchyBulkRequestSchema, {
        allowUnknown: true,
      })
    );
    next();
  }

  // GET
  static isGetBulkRequestExampleValid(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    transformRequest(
      req,
      validateObject(req, getBulkRequestExampleSchema, { allowUnknown: true })
    );
    next();
  }

  // GET
  static isGetBulkRequestByIdReqValid(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    transformRequest(
      req,
      validateObject(req, getBulkRequestByIdReqSchema, { allowUnknown: true })
    );
    next();
  }
}
