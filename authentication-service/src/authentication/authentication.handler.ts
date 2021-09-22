import path from 'path';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { config } from '../config';
import { logger } from '../logger';
import { Application, Response, Request } from 'express';
import { IUser, Name } from '../user/user.interface';
import { NotFoundError } from '../utils/errors/user.error';
import { ApproverService } from '../approver/approver.service';
import { UserType } from '../interfaces/protoc/proto/approverService';

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

    protected static serialize(
        user: { id: string },
        done: (err?: Error, id?: string) => void
    ) {}

    protected static deserialize(
        id: string,
        done: (err?: Error, user?: any) => void
    ) {}

    protected static configurePassport() {}

    static async handleUser(req: Request, res: Response) {
        const millisecondsExpires =
            config.authentication.daysExpires * (1000 * 60 * 60 * 24);
        const iat = Math.floor(Date.now() / 1000);
        const exp = iat + millisecondsExpires;

        const user = { ...req.user, iat, exp };
        let parsedUser: IUser = JSON.parse(JSON.stringify(user));
        if (!parsedUser) throw new NotFoundError();

        try {
            logger.info(`Call to handleUserName in AS:`, parsedUser);
            const name = handleUserName(parsedUser);
            logger.info('handleUserName OK in AS', { userName: name });
            parsedUser.firstName = name.firstName;
            parsedUser.lastName = name.lastName;
        } catch (err) {
            logger.error(`handleUserName Error in AS:`, {
                err,
                user: user,
            });
            return res.redirect('/auth/unauthorized');
        }

        const userWithType = await AuthenticationHandler.addUserType(
            parsedUser
        );

        const constRedirectURI = req.user.RelayState || config.clientEndpoint;
        const userToken = jwt.sign(userWithType, config.authentication.secret);

        res.cookie(config.authentication.token, userToken, { maxAge: exp });
        res.redirect(`${constRedirectURI}`);
    }

    static async addUserType(user: IUser) {
        try {
            const userResponse = await ApproverService.getUserType({
                entityId: user.id,
            });
            user.types = userResponse.type.map((type) => UserType[type]);
        } catch (err) {
            logger.error(`addUserType Error in AS:`, {
                err,
                user: user,
            });

            user.types = ['SOLDIER'];
        }

        return user;
    }
}

export class ShragaAuthenticationHandler extends AuthenticationHandler {
    protected static serialize(
        user: any,
        done: (err?: Error, id?: string) => void
    ) {
        done(undefined, jwt.sign({ ...user }, config.authentication.secret));
    }

    protected static async deserialize(
        token: string,
        done: (err?: Error, id?: any) => void
    ) {
        done(undefined, jwt.decode(token));
    }

    protected static configurePassport() {
        passport.use(
            new ShragaStrategy(
                config.authentication.shraga,
                async (profile: any, done: any) => {
                    done(null, profile);
                }
            )
        );
    }

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

// handleUserName gets a user and returns the compiled user's firstName+lastName.
// In case there is no firstName inside the user.name it try to take the user's job instead as his firstName
export function handleUserName(user: IUser): Name {
    if (!user.name) throw new Error('User has no name object');

    const firstName = user.name.firstName || user.job;
    if (!firstName) throw new Error('User has no first-name and no job');

    const lastName = user.name.lastName || config.users.defaultLastName;
    return { firstName, lastName };
}
