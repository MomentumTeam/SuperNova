import path from 'path';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { config } from '../config';
import { logger } from '../logger';
import { Application, Response, Request } from 'express';
import { IUser } from '../kartoffel/kartoffel.interface';
import { NotFoundError } from '../utils/errors/user.error';
import { ApproverService } from '../approver/approver.service';
import { IShragaUser } from './auth.interface';
import { UsersRpc } from '../kartoffel/kartoffel.rpc';
import { ApproverType } from '../interfaces/protoc/proto/requestService';

const ShragaStrategy = require('passport-shraga').Strategy;

export class AuthenticationHandler {
    static initialize(app: Application) {
        app.use(passport.initialize());
        app.use(passport.session());

        passport.serializeUser(this.serialize);
        passport.deserializeUser(this.deserialize);

        this.configurePassport();
        return passport.initialize();
    }

    static serialize(user: { id: string }, done: (err?: Error, id?: string) => void) {
        done(undefined, jwt.sign({ ...user }, config.authentication.secret));
    }

    static deserialize(token: string, done: (err?: Error, user?: any) => void) {
        done(undefined, jwt.decode(token));
    }

    static configurePassport() {
        passport.use(
            new ShragaStrategy(config.authentication.shraga, async (profile: any, done: any) => {
                done(null, profile);
            })
        );
    }

    static async handleUser(req: Request, res: Response) {
        const millisecondsExpires = config.authentication.daysExpires * (1000 * 60 * 60 * 24);
        const iat = Math.floor(Date.now() / 1000);
        const exp = iat + millisecondsExpires;

        const user = { ...req.user, iat, exp };
        let shragaUser: IShragaUser = JSON.parse(JSON.stringify(user));
        if (!shragaUser) throw new NotFoundError();

        let userInformation;
        try {
            const kartoffelUser: IUser = await UsersRpc.getEntityById(shragaUser.genesisId);
            const userWithType = await AuthenticationHandler.addUserType(kartoffelUser);
            userInformation = { ...userWithType };
        } catch (error) {
            return res.redirect('/auth/unauthorized');
        }

        const userToken = jwt.sign(userInformation, config.authentication.secret);
        const constRedirectURI = req.user.RelayState || config.clientEndpoint;

        logger.info('successful handle user');
        res.cookie(config.authentication.token, userToken, { maxAge: exp });
        res.redirect(`${constRedirectURI}`);
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
}

export class ShragaAuthenticationHandler extends AuthenticationHandler {
    static authenticate() {
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
