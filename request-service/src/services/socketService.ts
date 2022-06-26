import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as config from '../config';
import { SendEventReq, SuccessMessage } from '../interfaces/protoc/proto/socketService';
import { logger } from '../logger';
import { findPath } from '../utils/path';

const PROTO_PATH = `${findPath('proto')}/socketService.proto`;

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
  grpc.loadPackageDefinition(packageDefinition).SocketService;

const clients: any = [];
for (let i = 0; i < config.grpcPoolSize; i++) {
  clients.push(
    new protoDescriptor.SocketService(
      config.socketServiceUrl,
      grpc.credentials.createInsecure(),
      { 'grpc.keepalive_timeout_ms': 5000 }
    )
  );
}

function randomClient(): any {
  return clients[Math.floor(Math.random() * clients.length)];
}

export class SocketService {
  static async SendEvent(sendEventReq: SendEventReq): Promise<SuccessMessage> {
    logger.info(`Call to SendEvent in SocketService`, sendEventReq);

    return new Promise((resolve, reject) => {
      randomClient().SendEvent(sendEventReq, (err: any, response: SuccessMessage) => {
        if (err) {
          logger.error(`SendEvent ERROR in SocketService`, {
            err,
            callRequest: sendEventReq,
          });
          reject(err);
        }

        logger.info(`SendEvent OK in SocketService`, {
          response: response,
          callRequest: sendEventReq,
        });
        resolve(response);
      });
    });
  }
}