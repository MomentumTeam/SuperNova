import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { config } from '../config';
import {
  Request,
  UpdateKartoffelStatusReq,
  IncrementRetriesReq,
} from '../interfaces/protoc/proto/requestService';
import { logger } from '../utils/logger';
import { findPath } from '../utils/path';

const PROTO_PATH = `${findPath('proto')}/requestService.proto`;

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
  grpc.loadPackageDefinition(packageDefinition).RequestService;

const clients: any = [];
for (let i = 0; i < config.grpcPoolSize; i++) {
  clients.push(
    new protoDescriptor.RequestService(
      config.endpoints.request,
      grpc.credentials.createInsecure(),
      { 'grpc.keepalive_timeout_ms': 5000 }
    )
  );
}

function randomClient(): any {
  return clients[Math.floor(Math.random() * clients.length)];
}

export default class RequestService {
  static async UpdateKartoffelStatus(
    updateKartoffelStatusReq: UpdateKartoffelStatusReq
  ): Promise<Request> {
    return new Promise((resolve, reject) => {
      logger.info(
        `Call to UpdateKartoffelStatus in KC`,
        updateKartoffelStatusReq
      );
      randomClient().UpdateKartoffelStatus(
        updateKartoffelStatusReq,
        (err: any, response: Request) => {
          if (err) {
            logger.error(`updateKartoffelStatus ERROR in KC`, {
              err,
              callRequest: updateKartoffelStatusReq,
            });
            reject(err);
          } else {
            logger.info(`updateKartoffelStatus OK in KC`, {
              response: response,
              callRequest: updateKartoffelStatusReq,
            });
            resolve(response);
          }
        }
      );
    });
  }

  static async IncrementKartoffelRetries(
    incrementKartoffelRetries: IncrementRetriesReq
  ): Promise<Request> {
    return new Promise((resolve, reject) => {
      logger.info(
        `Call to IncrementKartoffelRetries in KC`,
        incrementKartoffelRetries
      );
      randomClient().IncrementKartoffelRetries(
        incrementKartoffelRetries,
        (err: any, response: Request) => {
          if (err) {
            logger.error(`IncrementKartoffelRetries ERROR in KC`, {
              err,
              callRequest: incrementKartoffelRetries,
            });
            reject(err);
          } else {
            logger.info(`updateKartoffelStatus OK in KC`, {
              response: response,
              callRequest: IncrementRetriesReq,
            });
            resolve(response);
          }
        }
      );
    });
  }
}
