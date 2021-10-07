import passport from 'passport';
import { Router } from 'express';
import { AuthenticationHandler } from './auth.handler';
import { wrapAsync } from '../utils/wrapper';

const AuthRouter = Router();

AuthRouter.get('/login', passport.authenticate('shraga'));
AuthRouter.post('/callback', passport.authenticate('shraga'), wrapAsync(AuthenticationHandler.createTokenAndRedirect));
AuthRouter.get('/unauthorized', AuthenticationHandler.sendUnauthorized);

export { AuthRouter };
