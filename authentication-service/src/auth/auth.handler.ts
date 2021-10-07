import path from 'path';
import { config } from '../config';
import { logger } from '../logger';
import { Response, Request } from 'express';
import { AuthManager } from './auth.manager';
import { IShragaUser } from './auth.interface';

export class AuthenticationHandler {
    static async createTokenAndRedirect(req: Request, res: Response) {
        try {
           const token = await AuthManager.createToken(req.user as IShragaUser);
           
           res.cookie(config.authentication.token, token);
           logger.info('successful handle user');
           return res.redirect(config.clientEndpoint);
        } catch (error) {
            logger.error(error)
            return res.redirect('/auth/unauthorized');
        }
    }

    static sendUnauthorized(req: Request, res: Response) {
        res.sendFile(path.resolve(config.authentication.unauthorized));
    }
}
