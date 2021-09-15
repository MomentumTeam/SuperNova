import {config} from '../../config';
import { sign } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

const validTokenMock = () => {
    const user = {
        id: '613fd3abca55fb8bc7f1bd1f',
    };

    return `Bearer ${sign(user, config.authentication.secret)}`;
}

export const addMockToken = (req: Request, res: Response, next: NextFunction) => {
    req.headers.authorization = validTokenMock();
    return next();
};