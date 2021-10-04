import {config} from '../../config';
import { sign } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

const validTokenMock = () => {
    const user = {
      id: '613dd84b8fff9d5a703e2b37',
      types: ['COMMANDER', 'SUPER_SECURITY', 'SECURITY'],
      displayName: 'root/father/child - John Doe',
      personalNumber: '3456712',
      identityCard: '234567891',
    };

    return `Bearer ${sign(user, config.authentication.secret)}`;
}

export const addMockToken = (req: Request, res: Response, next: NextFunction) => {
    req.headers.authorization = validTokenMock();
    return next();
};