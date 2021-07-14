import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as C from './config';
import { logger } from './logger';
import {
  createNotification,
  getNotificationsByOwnerId,
  markAsRead,
} from './notification/notification.controller';

const PROTO_PATH = __dirname.includes('dist')
  ? path.join(__dirname, '../../proto/notificationService.proto')
  : path.join(__dirname, '../proto/notificationService.proto');

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
      return notificationServiceDescriptor;
    } catch (err) {
      logger.error(`Error while loading the proto file`, { err: err });
      throw err;
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
            reject(bindError);
          } else {
            try {
              this.server.start();
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
