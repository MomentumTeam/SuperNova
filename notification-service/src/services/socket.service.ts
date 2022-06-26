import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import * as C from "../config";
import { SendEventReq, SuccessMessage } from "../interfaces/protoc/proto/socketService";
import { logger } from "../logger";
import { findPath } from "../utils/path";

const PROTO_PATH = `${findPath("proto")}/socketService.proto`;

const packageDefinition: protoLoader.PackageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const protoDescriptor: any = grpc.loadPackageDefinition(packageDefinition).SocketService;

const clients: any = [];
for (let i = 0; i < C.grpcPoolSize; i++) {
  clients.push(
    new protoDescriptor.SocketService(C.socketServiceUrl, grpc.credentials.createInsecure(), {
      "grpc.keepalive_timeout_ms": 5000,
    })
  );
}

function randomClient(): any {
  return clients[Math.floor(Math.random() * clients.length)];
}

export class SocketService {
  static async SendEvent(sendEventReq: SendEventReq): Promise<void> {
    logger.info(`Call to SendEvent in SocketService`, sendEventReq);
    try {
      await randomClient().SendEvent(sendEventReq, (err: any, response: SuccessMessage) => {
        if (err) {
          logger.error(`SendEvent ERROR in SocketService`, {
            err,
            callRequest: sendEventReq,
          });
        }
        logger.info(`SendEvent OK in SocketService`, {
          response: response,
          callRequest: sendEventReq,
        });
      });
    } catch (error) {
      logger.error(`SendEvent ERROR in SocketService`, {
        err: error,
        callRequest: sendEventReq,
      });
    }
  }
}
