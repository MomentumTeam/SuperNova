import { NextFunction, Request, Response } from 'express';
import { transformRequest, validateObject } from '../utils/validations/validations';
import { changeRoleHierarchyBulkRequestSchema, createRoleBulkRequestSchema} from './bulk.schema';

export class BulkValidator {
    // POST
    static isUploadBulkFileValid(req: Request, res: Response, next: NextFunction) {
        transformRequest(req, validateObject(req, createRoleBulkRequestSchema, { allowUnknown: true }));
        next();
    }

    static isCreateRoleBulkRequestValid(req: Request, res: Response, next: NextFunction) {
        transformRequest(req, validateObject(req, createRoleBulkRequestSchema, { allowUnknown: true }));
        next();
    }
    // PUT
    static isChangeRoleHierarchyBulkRequestValid(req: Request, res: Response, next: NextFunction) {
        transformRequest(req, validateObject(req, changeRoleHierarchyBulkRequestSchema, { allowUnknown: true }));
        next();
    }
}
