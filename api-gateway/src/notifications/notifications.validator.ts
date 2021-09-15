import { NextFunction, Request, Response } from 'express';
import { transformRequest, validateObject } from '../utils/validations/validations';
import { getMyNotificationsSchema, markAsReadSchema } from './notifications.schema';

export class NotificationValidator {
    // GET
    static isGetMyNotificationsValid(req: Request, res: Response, next: NextFunction) {
        transformRequest(req, validateObject(req, getMyNotificationsSchema, { allowUnknown: true }));
        next();
    }
    // PUT
    static isMarkAsReadValid(req: Request, res: Response, next: NextFunction) {
        transformRequest(req, validateObject(req, markAsReadSchema, { allowUnknown: true }));
        next();
    }
}
