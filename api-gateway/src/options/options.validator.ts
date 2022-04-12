import { NextFunction, Request, Response } from 'express';
import { transformRequest, validateObject } from '../utils/validations/validations';
import { getUserOptionsSchema, updateUserOptionsSchema, modifyFavoriteCommandersSchema } from './options.schema';

export class OptionsValidator {
    // GET
    static isGetUserOptionsValid(req: Request, res: Response, next: NextFunction) {
        transformRequest(req, validateObject(req, getUserOptionsSchema, { allowUnknown: true }));
        next();
    }
    // PUT
    static isUpdateUserOptionsValid(req: Request, res: Response, next: NextFunction) {
        transformRequest(req, validateObject(req, updateUserOptionsSchema, { allowUnknown: true }));
        next();
    }

    static isModifyFavoriteCommandersValid(req: Request, res: Response, next: NextFunction) {
        transformRequest(req, validateObject(req, modifyFavoriteCommandersSchema, { allowUnknown: true }));
        next();
    }


}
