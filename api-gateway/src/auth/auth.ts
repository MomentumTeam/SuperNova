import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import * as config from '../config';
import { approverClient } from '../approver/approver.controller';
import { GetUserTypeRes } from '../interfaces/protoc/proto/approverService';

module.exports = (req: any, res: Response, next: NextFunction) => {
  try {
    console.log('req.cookie', req.cookies);
    const cookie = req.cookies[`${config.authentication.token}`];

    // console.log('cookie', cookie);

    const authorization = req.headers.authorization as string;
    console.log('authorization', authorization);

    if (authorization) {
      console.log('authorization');

      jwt.verify(
        authorization as string,
        config.authentication.secret,
        async function (err, decoded) {
          if (err) {
            // console.log('err', err.message)
            console.log('err');
            res.redirect(
              `http://${config.authentication.authServiceUrl}/auth/login`
            );
          } else {
            console.log('decoded', decoded);
            req.user = decoded;
            const userType = await getUserType(req.user.id);
            req.user['userType'] = userType;
            next();
          }
        }
      );
    } else {
      if (cookie) {
        console.log('cookie');

        jwt.verify(cookie as string, 'superNova', async function (err, decoded) {
          if (err) {
            // console.log('err', err.message)
            console.log('err');
            res.redirect(
              `http://${config.authentication.authServiceUrl}/auth/login`
            );
          } else {
            console.log('decoded', decoded);
            req.user = decoded;
            const userType = await getUserType(req.user.id);
            req.user['userType'] = userType;
            next();
          }
        });
      } else {
        res.redirect(
          `http://${config.authentication.authServiceUrl}/auth/login`
        );
      }
    }
  } catch (err) {
    console.log('catch', err);
    res.status(401).json({
      error: new Error('Invalid request!'),
    });
  }
};


function getUserType(id: string) {
  console.log('getUserType')

  return new Promise((resolve, reject) => {

  approverClient.GetUserType(
    //get userType
    { entityId: id },
    (err: any, response: GetUserTypeRes) => {
      if (err) {
        console.log('err', err)
        resolve({
          entityId: id,
          type: 'SOLDIER', //default value incase of error
        }) ;
      }
      console.log('response', response)
      resolve(response);
    }
  );
});

}
