import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as C from './config';
import { logger } from './logger';
import {
  createNotification,
  getNotificationsByOwnerId,
  markAsRead,
} from './notification/notification.controller';
import { findPath } from './utils/path';

const PROTO_PATH = `${findPath('proto')}/notificationService.proto`;

export class Server {
  private server: grpc.Server;
  constructor() {
    this.server = new grpc.Server();
    this.initServer();
  }

  private getProtoDescriptor() {
    try {
      const packageDefinition: protoLoader.PackageDefinition =
        protoLoader.loadSync(PROTO_PATH, {
          keepCase: true,
          longs: String,
          enums: String,
          defaults: true,
          oneofs: true,
        });
      const protoDescriptor: grpc.GrpcObject =
        grpc.loadPackageDefinition(packageDefinition);
      const notificationServiceDescriptor: any =
        protoDescriptor.NotificationService;
      logger.info(`Proto file ${PROTO_PATH} was loaded successfully`);
      return notificationServiceDescriptor;
    } catch (error) {
      logger.error(`Error while loading the proto file`, { error: error });
      throw error;
    }
  }

  initServer() {
    try {
      const spikeServiceDescriptor: any = this.getProtoDescriptor();
      logger.info(`Proto was loaded successfully from file: ${PROTO_PATH}`);
      this.server.addService(
        spikeServiceDescriptor.NotificationService.service,
        {
          CreateNotification: createNotification,
          GetNotificationsByOwnerId: getNotificationsByOwnerId,
          MarkAsRead: markAsRead,
        }
      );
      logger.info(`Grpc services were successfully added to the server`);
    } catch (error) {
      logger.error(`Error while initializing the server: ${error.message}`);
    }
  }

  async startServer(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.server.bindAsync(
        `${C.host}:${C.port}`,
        grpc.ServerCredentials.createInsecure(),
        (bindError) => {
          if (bindError) {
            logger.error(`Error while binding to ${C.host}:${C.port}`, {
              error: bindError,
            });
            reject(bindError);
          } else {
            try {
              this.server.start();
              logger.info(`Server was started successfully`);
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
