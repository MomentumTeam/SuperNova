import passport from 'passport';
import passportJwt from 'passport-jwt';
import { Request, Response, NextFunction } from 'express';
import { config } from '../../config';
import { validateSpikeWriteScope } from '../spike';
export class Authenticator {
  private static readonly jwtOptions: passportJwt.StrategyOptions = {
    jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.authentication.secret,
  };

  private static readonly publiclyAvailablePaths: string[] = [
    '/isAlive',
    '/auth/login',
    '/api-docs'
  ];

  private static isPubliclyAvailablePath(req:Request): boolean {
    return this.publiclyAvailablePaths.filter(path => req.path.indexOf(path) > -1).length > 0
  };

  private static spikeProtectedPaths: string[] = [
    '/adStatus'
  ];

  private static isSpikeProtectedPath(req:Request): boolean {
    return this.spikeProtectedPaths.filter(path => req.path.indexOf(path) > -1).length > 0
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
    if (this.isPubliclyAvailablePath(req)) return next();

    return this.isSpikeProtectedPath(req) ? validateSpikeWriteScope : passport.authenticate('jwt', { session: false })(req, res, next);
  }
}