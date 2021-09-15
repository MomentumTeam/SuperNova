import { NextFunction, Request, Response } from 'express';
import { transformRequest, validateObject } from '../utils/validations/validations';
import { getEntitiesByHierarchySchema, getEntitiesUnderOGSchema, getEntityByDIRequestSchema, getEntityByIdentifierSchema, getEntityByMongoIdSchema, getEntityByRoleIdSchema, searchEntitiesByFullNameSchema } from './kartoffel.schema';
export class KartoffelValidator {
    // Entities
    static isGetEntityByMongoIdValid(req: Request, res: Response, next: NextFunction) {
        transformRequest(req, validateObject(req, getEntityByMongoIdSchema, { allowUnknown: true }));
        next();
    }

    static isSearchEntitiesByFullNameValid(req: Request, res: Response, next: NextFunction) {
        transformRequest(req, validateObject(req, searchEntitiesByFullNameSchema, { allowUnknown: true }));
        next();
    }

    static isGetEntityByIdentifierValid(req: Request, res: Response, next: NextFunction) {
        transformRequest(req, validateObject(req, getEntityByIdentifierSchema, { allowUnknown: true }));
        next();
    }

    static isGetEntityByRoleIdValid(req: Request, res: Response, next: NextFunction) {
        transformRequest(req, validateObject(req, getEntityByRoleIdSchema, { allowUnknown: true }));
        next();
    }

    static isGetEntitiesUnderOGValid(req: Request, res: Response, next: NextFunction) {
        transformRequest(req, validateObject(req, getEntitiesUnderOGSchema, { allowUnknown: true }));
        next();
    }

    static isGetEntitiesByHierarchyValid(req: Request, res: Response, next: NextFunction) {
        transformRequest(req, validateObject(req, getEntitiesByHierarchySchema, { allowUnknown: true }));
        next();
    }

    static isGetEntityByDIRequestValid(req: Request, res: Response, next: NextFunction) {
        transformRequest(req, validateObject(req, getEntityByDIRequestSchema, { allowUnknown: true }));
        next();
    }

    // TODO: Groups
    // TODO: Role
}
