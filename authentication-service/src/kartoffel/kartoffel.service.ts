import { config } from '../config';
import { logger } from '../logger';
import {
  GetEntityByIdRequest,
  GetEntityByRoleIdRequest,
  GetOGByIdRequest,
} from '../interfaces/protoc/proto/kartoffelService';
import { findPath } from '../utils/path';

const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = `${findPath('proto')}/kartoffelService.proto`;

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition).Kartoffel;
const kartoffelClient: any = new protoDescriptor.Kartoffel(
  config.kartoffel.endpoint,
  grpc.credentials.createInsecure()
);

export class KartoffelService {
  static async getEntityById(id: string): Promise<any> {
    logger.info(`Call to getEntityById in AS`, {
      callRequest: { id },
    });

    const getEntityByIdRequest: GetEntityByIdRequest = {
      id,
      withPicture: false,
    };
    return new Promise((resolve, reject) => {
      kartoffelClient.GetEntityById(getEntityByIdRequest, (err: any, res: any) => {
        if (err) {
          logger.error(`getEntityById ERROR in AS`, {
            err,
            callRequest: getEntityByIdRequest,
          });
          reject(err);
          return;
        }

        logger.info(`getEntityById OK in AS`, {
          response: res,
          callRequest: getEntityByIdRequest,
        });

        resolve(res);
      });
    });
  }

  static async getEntityByRoleId(roleId: string): Promise<any> {
    logger.info(`Call to getEntityByRoleId in AS`, {
      callRequest: { roleId },
    });

    const getEntityByRoleIdRequest: GetEntityByRoleIdRequest = {roleId};
    return new Promise((resolve, reject) => {
      kartoffelClient.GetEntityByRoleId(getEntityByRoleIdRequest, (err: any, res: any) => {
        if (err) {
          logger.error(`getEntityByRoleId ERROR in AS`, {
            err,
            callRequest: getEntityByRoleIdRequest,
          });
          reject(err);
          return;
        }

        logger.info(`getEntityByRoleId OK in AS`, {
          response: res,
          callRequest: getEntityByRoleIdRequest,
        });

        resolve(res);
      });
    });
  }

  static async getOGById(id: string): Promise<any> {
    logger.info(`Call to getOGById in AS`, {
      callRequest: { id: id },
    });

    const getOGByIdReq: GetOGByIdRequest = {
      id,
    };
    return new Promise((resolve, reject) => {
      kartoffelClient.GetOGById(getOGByIdReq, (err: any, res: any) => {
        if (err) {
          logger.error(`getOGById ERROR in AS`, {
            err,
            callRequest: getOGByIdReq,
          });
          reject(err);
          return;
        }

        logger.info(`getOGById OK in AS`, {
          response: res,
          callRequest: getOGByIdReq,
        });

        resolve(res);
      });
    });
  }
}
