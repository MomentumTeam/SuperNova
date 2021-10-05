import { NextFunction, Request, Response } from 'express';
import { transformRequest, validateObject } from '../utils/validations/validations';
import { getAllOGsSchema, getAllRolesSchema, getEntitiesByHierarchySchema, getEntitiesUnderOGSchema, getEntityByDIRequestSchema, getEntityByIdentifierSchema, getEntityByMongoIdSchema, getEntityByRoleIdSchema, GetOGByHierarchyNameSchema, GetOGByIdSchema, GetOGChildrenSchema, GetOGTreeSchema, GetRoleByIdSchema, GetRolesUnderOGSchema, IsJobTitleAlreadyTakenSchema, IsRoleAlreadyTakenSchema, searchEntitiesByFullNameSchema, searchOGSchema } from './kartoffel.schema';
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

    // Groups
    static isGetAllOGsValid(req: Request, res: Response, next: NextFunction) {
        transformRequest(req, validateObject(req, getAllOGsSchema, { allowUnknown: true }));
        next();
    }

    static isSearchOGValid(req: Request, res: Response, next: NextFunction) {
        transformRequest(req, validateObject(req, searchOGSchema, { allowUnknown: true }));
        next();
    }

    static isGetOGByIdValid(req: Request, res: Response, next: NextFunction) {
        transformRequest(req, validateObject(req, GetOGByIdSchema, { allowUnknown: true }));
        next();
    }

    static isGetOGByHierarchyNameValid(req: Request, res: Response, next: NextFunction) {
        transformRequest(req, validateObject(req, GetOGByHierarchyNameSchema, { allowUnknown: true }));
        next();
    }

    static isGetOGChildrenValid(req: Request, res: Response, next: NextFunction) {
        transformRequest(req, validateObject(req, GetOGChildrenSchema, { allowUnknown: true }));
        next();
    }

    static isGetOGTreeValid(req: Request, res: Response, next: NextFunction) {
        transformRequest(req, validateObject(req, GetOGTreeSchema, { allowUnknown: true }));
        next();
    }

    // Role
    static isGetAllRolesValid(req: Request, res: Response, next: NextFunction) {
        transformRequest(req, validateObject(req, getAllRolesSchema, { allowUnknown: true }));
        next();
    }

    static isGetRoleByIdValid(req: Request, res: Response, next: NextFunction) {
        transformRequest(req, validateObject(req, GetRoleByIdSchema, { allowUnknown: true }));
        next();
    }

    static isGetRolesUnderOGdValid(req: Request, res: Response, next: NextFunction) {
        transformRequest(req, validateObject(req, GetRolesUnderOGSchema, { allowUnknown: true }));
        next();
    }

    static isRoleAlreadyTakenValid(req: Request, res: Response, next: NextFunction) {
        transformRequest(req, validateObject(req, IsRoleAlreadyTakenSchema, { allowUnknown: true }));
        next();
    }

       static isJobTitleAlreadyTakenValid(req: Request, res: Response, next: NextFunction) {
        transformRequest(req, validateObject(req, IsJobTitleAlreadyTakenSchema, { allowUnknown: true }));
        next();
    }
}
