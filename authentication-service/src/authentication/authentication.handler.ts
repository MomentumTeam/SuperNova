import * as path from 'path';
import * as passport from 'passport';
import { config } from '../config';
import { Application, Response, Request } from 'express';
import { UsersRpc } from '../user/user.rpc';
import { IUser, Name } from '../user/user.interface';
import * as jwt from 'jsonwebtoken';
import { ApplicationError } from '../utils/errors/applicationError';
import { readFile } from 'fs';

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

    protected static serialize(user: { id: string }, done: (err?: Error, id?: string) => void) { }

    protected static deserialize(id: string, done: (err?: Error, user?: any) => void) { }

    protected static configurePassport() { }

    static handleUser(req: Request, res: Response) {
        const secret = "supeNova";

        const minute = 60;
        const hour = 60 * minute;
        const day = 24 * hour;
        const expiresIn = day * config.authentication.daysExpires;

        const iat = Math.floor(Date.now() / 1000);
        const exp = iat + expiresIn;

        const user: IUser = { ...req.user, iat, exp };

        try {
            const name = handleUserName(user);
            user.firstName = name.firstName;
            user.lastName = name.lastName;
        } catch (err) {
            console.log(`Error: ${err} \n User: ${user}; name: ${user.name}; id: ${user.id}`);
            return res.redirect('/auth/unauthorized');
        }

        const constRedirectURI = req.user.RelayState || config.clientEndpoint;
        const userToken = jwt.sign(JSON.parse(JSON.stringify(user)), config.authentication.secret);

        res.redirect(`${constRedirectURI}?token=${userToken}`);
    }
}

// handleUserName gets a user and returns the compiled user's firstName+lastName.
// In case there is no firstName inside the user.name it try to take the user's job instead as his firstName
export function handleUserName(user: IUser): Name {
    if (!user.name) {
        throw new Error('User has no name object');
    }

    const firstName = user.name.firstName || user.job;
    if (!firstName) {
        throw new Error('User has no first-name and no job');
    }
    const lastName = user.name.lastName || config.users.defaultLastName;
    return { firstName, lastName };
}

export class ShragaAuthenticationHandler extends AuthenticationHandler {

    protected static serialize(user: { id: string }, done: (err?: Error, id?: string) => void) {
        done(undefined, user.id);
    }

    protected static async deserialize(id: string, done: (err?: Error, id?: any) => void) {
        done(undefined, id);
    }

    protected static configurePassport() {
        const shragaURL = config.authentication.shragaURL;
        console.log('shragaURL', shragaURL)
        const useEnrichId = config.authentication.useEnrichId;
        const allowedProviders = [config.authentication.allowedProvider];
        passport.use(new ShragaStrategy({ shragaURL, useEnrichId, allowedProviders }, (profile: any, done: any) => {
            done(null, profile);
        }));
    }

    static authenticate() {
        return passport.authenticate('shraga', this.handleUser);
    }

    static sendUnauthorized(req: Request, res: Response) {
        res.sendFile(path.resolve(config.authentication.unauthorized));
    }

    static getSupportURL(req: Request, res: Response) {
        res.json(config.support);
    }
}
