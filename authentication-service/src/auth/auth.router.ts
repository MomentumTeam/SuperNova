import passport from 'passport';
import { Router } from 'express';
import { AuthenticationHandler } from './auth.handler';
import { wrapAsync } from '../utils/wrapper';

const ShragaAuthenticationRouter = Router();

ShragaAuthenticationRouter.get('/login', passport.authenticate('shraga'));
ShragaAuthenticationRouter.post(
  '/callback',
  passport.authenticate('shraga'),
  wrapAsync(AuthenticationHandler.handleUser)
);
ShragaAuthenticationRouter.get('/unauthorized', AuthenticationHandler.sendUnauthorized);
ShragaAuthenticationRouter.get('/support', AuthenticationHandler.getSupportURL);

export { ShragaAuthenticationRouter };
