import passport from 'passport';
import passportJwt from 'passport-jwt';
import {config} from '../../config';
import { Request, Response, NextFunction } from 'express';

export class Authenticator {
  private static readonly jwtOptions: passportJwt.StrategyOptions = {
    jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.authentication.secret,
  };

  public static initialize(verifyCallback?: passportJwt.VerifiedCallback) {
    const strategy = new passportJwt.Strategy(
      Authenticator.jwtOptions,
      (jwtPayload, next: passportJwt.VerifiedCallback) => {
        if (verifyCallback) {
          verifyCallback(jwtPayload, next);
        } else {
          next(null, jwtPayload);
        }
      }
    );

    passport.use(strategy);

    return passport.initialize();
  }

  public static middleware(req: Request, res: Response, next: NextFunction) {
    if (req.path === '/isAlive' || req.path === '/api-docs') return next();
    return passport.authenticate('jwt', { session: false })(req, res, next);
  }
}