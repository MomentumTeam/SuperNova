import { Request, Response, NextFunction } from 'express';
import { AuthenticationError, NotPermittedError } from '../errors/userErrors';

export class PermissionHandler {
  static async securityUser(req: Request, res: Response, next: NextFunction) {
    if (!req.user) throw new AuthenticationError();
    const user = req.user as any;

    if (user.types.includes('SECURITY')) return next();

    next(
      new NotPermittedError('User is not authorized to perform this action')
    );
  }
}
