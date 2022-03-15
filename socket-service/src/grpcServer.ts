import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import * as socketIO from "socket.io";
import { config } from "./config";
import { findPath } from "./utils/path";
import { addHealthService } from "./health";
import { logger } from "./utils/logger/logger";
import { sendEventWithIo } from "./socket/socket.controller";

const PROTO_PATH = `${findPath("proto")}/socketService.proto`;

export class GrpcServer {
  io: socketIO.Server;
  private server: grpc.Server;

  constructor(io: socketIO.Server) {
    this.io = io;
    this.server = new grpc.Server();
    addHealthService(this.server);
    this.initServer();
  }

  private getProtoDescriptor() {
    try {
      const packageDefinition: protoLoader.PackageDefinition = protoLoader.loadSync(PROTO_PATH, {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
      });
      const protoDescriptor: grpc.GrpcObject = grpc.loadPackageDefinition(packageDefinition);
      const socketServiceDescriptor: any = protoDescriptor.SocketService;
      logger.info(`Proto file ${PROTO_PATH} was loaded successfully`);
      return socketServiceDescriptor;
    } catch (error: any) {
      logger.error(`Error while loading the proto file`, {
        error: { message: error.message },
      });
      throw error;
    }
  }

  initServer() {
    try {
      const socketServiceDescriptor: any = this.getProtoDescriptor();
      logger.info(`Proto was loaded successfully from file: ${PROTO_PATH}`);
      this.server.addService(socketServiceDescriptor.SocketService.service, {
        SendEvent: sendEventWithIo(this.io),
      });
      logger.info(`Grpc services were successfully added to the server`);
    } catch (error: any) {
      logger.error(`Error while initializing the server: ${error.message}`);
    }
  }

  async startServer(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.server.bindAsync(
        `${config.server.host}:${config.server.grpcPort}`,
        grpc.ServerCredentials.createInsecure(),
        (bindError) => {
          if (bindError) {
            logger.error(`Error while binding to ${config.server.host}:${config.server.grpcPort}`, {
              error: bindError,
            });
            reject(bindError);
          } else {
            try {
              this.server.start();
              logger.info(`GRPC Server was started successfully ${config.server.host}:${config.server.grpcPort}`);
              resolve();
            } catch (startError) {
              reject(startError);
            }
          }
        }
      );
    });
  }
}
