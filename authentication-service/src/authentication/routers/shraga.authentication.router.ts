import { Router } from 'express';
import { ShragaAuthenticationHandler as AuthenticationHandler } from '../authentication.handler';
import * as passport from 'passport';

const ShragaAuthenticationRouter = Router();

ShragaAuthenticationRouter.get('/login', AuthenticationHandler.authenticate());
ShragaAuthenticationRouter.post('/callback', passport.authenticate('shraga', { failureRedirect: '/auth/unauthorized' }), AuthenticationHandler.handleUser);
ShragaAuthenticationRouter.get('/unauthorized', AuthenticationHandler.sendUnauthorized);
ShragaAuthenticationRouter.get('/support', AuthenticationHandler.getSupportURL);

export { ShragaAuthenticationRouter };
