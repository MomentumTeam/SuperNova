import { Request, Response, NextFunction } from 'express';
import jwt, { Jwt, JwtPayload } from 'jsonwebtoken';
import { config } from '../config';
import { logger } from '../utils/logger/logger';
import { approverClient } from '../approver/approver.service';
import { GetUserTypeRes } from '../interfaces/protoc/proto/approverService';

module.exports = (req: any, res: Response, next: NextFunction) => {
  try {
    const cookie = req.cookies[`${config.authentication.token}`];

    const authorization = req.headers.authorization as string;

    if (authorization) {
      jwt.verify(
        authorization as string,
        config.authentication.secret as any,
        async function (err: any, decoded: any) {
          if (err) {
            logger.error(`jwt.verify ERROR in GTW`, {
              err,
              authorization: authorization,
            });
            res.redirect(
              `http://${config.authentication.authServiceUrl}/auth/login`
            );
          } else {
            req.user = decoded;
            logger.info(`user was extracted successfully: `, {
              userId: req.user.id,
            });
            const userType = await getMyUserType(req.user.id);
            req.user['userType'] = userType;
            next();
          }
        }
      );
    } else {
      if (cookie) {
        jwt.verify(
          cookie as string,
          'superNova',
          async function (err, decoded) {
            if (err) {
              logger.error(`jwt.verify ERROR in GTW`, {
                err,
                cookie: cookie,
              });
              res.redirect(
                `http://${config.authentication.authServiceUrl}/auth/login`
              );
            } else {
              req.user = decoded;
              logger.info(`user was extracted successfully!`, {
                userId: req.user.id,
              });
              const userType = await getMyUserType(req.user.id);
              req.user['userType'] = userType;
              next();
            }
          }
        );
      } else {
        res.redirect(
          `http://${config.authentication.authServiceUrl}/auth/login`
        );
      }
    }
  } catch (err) {
    logger.error(`jwt.verify ERROR in GTW`, {
      err,
    });

    res.status(401).json({
      error: new Error('Invalid request!'),
    });
  }
};

function getMyUserType(id: string) {
  logger.info(`Call to getMyUserType in GTW`, {
    id: id,
  });

  return new Promise((resolve, reject) => {
    approverClient.GetUserType(
      { entityId: id },
      (err: any, response: GetUserTypeRes) => {
        if (err) {
          logger.error(`getMyUserType ERROR in GTW`, {
            err,
            id: id,
          });

          resolve({
            entityId: id,
            type: 'SOLDIER', //default value incase of error
          });
        }

        logger.info(`getMyUserType OK in GTW`, {
          response: response,
          id: id,
        });

        resolve(response);
      }
    );
  });
}
