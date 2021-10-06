import path from 'path';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { config } from '../config';
import { logger } from '../logger';
import { Response, Request } from 'express';
import { IUser } from '../kartoffel/kartoffel.interface';
import { NotFoundError } from '../utils/errors/user.error';
import { ApproverService } from '../approver/approver.service';
import { IShragaUser } from './auth.interface';
import { UsersRpc } from '../kartoffel/kartoffel.rpc';
import { ApproverType } from '../interfaces/protoc/proto/requestService';

export class AuthenticationHandler {
    static async handleUser(req: Request, res: Response) {
        const { user } = req;
        
        // Get shragaUser
        let shragaUser: IShragaUser = JSON.parse(JSON.stringify(user));
        if (!shragaUser) throw new NotFoundError();

        // Add information to user
        let userInformation;
        try {
            const kartoffelUser: IUser = await UsersRpc.getEntityById(shragaUser.genesisId);
            const userWithType = await AuthenticationHandler.addUserType(kartoffelUser);
            userWithType.id = shragaUser.id;
            userWithType.genesisId = kartoffelUser.id;
            
            userInformation = { ...userWithType };
        } catch (error) {
            return res.redirect('/auth/unauthorized');
        }

        const userToken = jwt.sign(userInformation, config.authentication.secret, {expiresIn: config.authentication.expiresIn});
        const constRedirectURI = req.user.RelayState || config.clientEndpoint;

        logger.info('successful handle user');
        res.cookie(config.authentication.token, userToken);
        return res.redirect(constRedirectURI);
    }

    static async addUserType(user: IUser) {
        const userWithType = user;
        try {
            logger.info(`Call to addUserType in AS:`, user);
            const userResponse = await ApproverService.getUserType({
                entityId: user.id,
            });

            userWithType.types =
                userResponse.type.length > 0
                    ? userResponse.type.map((type) => ApproverType[type])
                    : config.defaultUserTypes;
        
            logger.info('addUserType OK in AS', { user: user });
        } catch (err) {
            logger.error(`addUserType Error in AS:`, {
                err,
                user: userWithType,
            });

            userWithType.types = config.defaultUserTypes;
        }

        return userWithType;
    }

    static authenticate() {
        console.log('heyyy')
        return passport.authenticate('shraga', {
            failureRedirect: '/failed',
            failureFlash: true,
        });
    }

    static sendUnauthorized(req: Request, res: Response) {
        res.sendFile(path.resolve(config.authentication.unauthorized));
    }

    static getSupportURL(req: Request, res: Response) {
        res.json(config.support);
    }
}
