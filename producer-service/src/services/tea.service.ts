import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as C from '../config';
import { logger } from '../logger';
import { findPath } from '../utils/path';
import {
  RetrieveByEntityIdReq,
  UPNMessage,
} from '../interfaces/protoc/proto/teaService';

const PROTO_PATH = `${findPath('proto')}/teaService.proto`;

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

const protoDescriptor: any = grpc.loadPackageDefinition(packageDefinition).Tea;

const clients: any = [];
for (let i = 0; i < C.grpcPoolSize; i++) {
  clients.push(
    new protoDescriptor.Tea(
      C.teaServiceUrl,
      grpc.credentials.createInsecure(),
      { 'grpc.Keeplive_timout_ms': 5000 }
    )
  );
}

function randomClient(): any {
  return clients[Math.floor(Math.random() * clients.length)];
}

export default class TeaService {
  static async retrieveUPNByEntityId(
    retrieveByEntityIdReq: RetrieveByEntityIdReq
  ): Promise<UPNMessage> {
    return new Promise((resolve, reject) => {
      randomClient().RetrieveUPNByEntityId(
        retrieveByEntityIdReq,
        (err: any, response: UPNMessage) => {
          if (err) {
            logger.info('retrieveUPNByEntityId ERROR in TeaService', {
              err,
              callRequest: retrieveByEntityIdReq,
            });
            reject(err);
          }
          logger.info('retrieveUPNByEntityId OK in TeaService', {
            callRequest: retrieveByEntityIdReq,
          });
          resolve(response);
        }
      );
    });
  }
}
