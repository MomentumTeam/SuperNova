import path from 'path';
import { config } from '../config';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import {
  IsRollbackValidReq,
  IsRollbackValidRes,
  RollbackReq,
  RollbackRes,
} from '../interfaces/protoc/proto/rollbackService';
import { logger } from '../utils/logger/logger';

const PROTO_PATH = __dirname.includes('dist')
  ? path.join(__dirname, '../../../proto/rollbackService.proto')
  : path.join(__dirname, '../../proto/rollbackService.proto');

const packageDefinition: protoLoader.PackageDefinition = protoLoader.loadSync(
  PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  }
);

const protoDescriptor: any =
  grpc.loadPackageDefinition(packageDefinition).RollbackService;

const clients: any = [];
for (let i = 0; i < config.fields.grpcPoolSize; i++) {
  clients.push(
    new protoDescriptor.RollbackService(
      config.endpoints.rollback,
      grpc.credentials.createInsecure(),
      {
        'grpc.keepalive_timeout_ms': 5000,
      }
    )
  );
}

function randomClient(): any {
  return clients[Math.floor(Math.random() * clients.length)];
}

export class RollbackService {
  static async isRollbackValid(isRollbackValidReq: IsRollbackValidReq) {
    logger.info('Call to isRollbackValid in GTW', isRollbackValidReq);
    return new Promise((resolve, reject) => {
      randomClient().IsRollbackValid(
        isRollbackValidReq,
        (error: any, response: IsRollbackValidRes) => {
          if (error) {
            logger.error('isRollbackValid ERROR in GTW', {
              error,
              callRequest: isRollbackValidReq,
            });
            reject(error);
          }
          logger.info('isRollbackValid OK in GTW', {
            callRequest: isRollbackValidReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async rollbackInAD(rollbackReq: RollbackReq) {
    logger.info('Call to rollbackInAD in GWT', rollbackReq);
    return new Promise((resolve, reject) => {
      randomClient().RollbackInAD(
        rollbackReq,
        (error: any, response: RollbackRes) => {
          if (error) {
            logger.error('rollbackInAD ERROR in GWT', {
              error,
              callRequest: rollbackReq,
            });
            reject(error);
          }
          logger.info('rollbackInAD OK in GWT', {
            callRequest: rollbackReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async rollbackInKartoffel(rollbackReq: RollbackReq) {
    logger.info('Call to rollbackInKartoffel in GWT', rollbackReq);
    return new Promise((resolve, reject) => {
      randomClient().RollbackInKartoffel(
        rollbackReq,
        (error: any, response: RollbackRes) => {
          if (error) {
            logger.error('rollbackInKartoffel ERROR in GWT', {
              error,
              callRequest: rollbackReq,
            });
            reject(error);
          }
          logger.info('rollbackInKartoffel OK in GWT', {
            callRequest: rollbackReq,
          });
          resolve(response);
        }
      );
    });
  }
}
