import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as config from '../config';
import {
  GetRequestByIdReq,
  Request,
} from '../interfaces/protoc/proto/requestService';
import { logger } from '../logger';
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
      config.requestServiceUrl,
      grpc.credentials.createInsecure(),
      { 'grpc.keepalive_timeout_ms': 5000 }
    )
  );
}

function randomClient(): any {
  return clients[Math.floor(Math.random() * clients.length)];
}

export default class RequestService {
  static async getRequestById(
    getRequestByIdReq: GetRequestByIdReq
  ): Promise<Request> {
    return new Promise((resolve, reject) => {
      randomClient().getRequestById(
        getRequestByIdReq,
        (error: any, request: Request) => {
          if (error) {
            logger.info('getRequestByIdReq in RequestService ERROR', {
              getRequestByIdReq,
              error: { message: error.message },
            });
            reject(error);
          }
          logger.info('getRequestByIdReq in RequestService', {
            getRequestByIdReq,
          });
          resolve(request);
        }
      );
    });
  }
}
