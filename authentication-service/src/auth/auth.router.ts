import passport from 'passport';
import { Router } from 'express';
import { AuthenticationHandler } from './auth.handler';
import { wrapAsync } from '../utils/wrapper';

const ShragaAuthenticationRouter = Router();

ShragaAuthenticationRouter.get('/login', AuthenticationHandler.authenticate());
ShragaAuthenticationRouter.post(
  '/callback',
  passport.authenticate('shraga', { failureRedirect: '/auth/unauthorized' }),
  wrapAsync(AuthenticationHandler.handleUser)
);
ShragaAuthenticationRouter.get('/unauthorized', AuthenticationHandler.sendUnauthorized);
ShragaAuthenticationRouter.get('/support', AuthenticationHandler.getSupportURL);

export { ShragaAuthenticationRouter };
