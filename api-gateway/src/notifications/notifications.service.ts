import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { config } from '../config';
import {
  GetNotificationsByOwnerIdReq,
  MarkAllAsReadReq,
  NotificationArray,
  NotificationIdArray,
  SuccessMessage,
} from '../interfaces/protoc/proto/notificationService';
import { logger } from '../utils/logger/logger';

const PROTO_PATH = __dirname.includes('dist')
  ? path.join(__dirname, '../../../proto/notificationService.proto')
  : path.join(__dirname, '../../proto/notificationService.proto');

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
  grpc.loadPackageDefinition(packageDefinition).NotificationService;

const clients: any = [];
for (let i = 0; i < config.fields.grpcPoolSize; i++) {
  clients.push(
    new protoDescriptor.NotificationService(
      config.endpoints.notification,
      grpc.credentials.createInsecure(),
      { 'grpc.keepalive_timeout_ms': 5000 }
    )
  );
}

function randomClient(): any {
  return clients[Math.floor(Math.random() * clients.length)];
}

export class NotificationService {
  static async getNotificationsByOwnerId(
    getNotificationsByOwnerIdReq: GetNotificationsByOwnerIdReq
  ) {
    logger.info(
      `Call to getNotificationsByOwnerId in GTW`,
      getNotificationsByOwnerIdReq
    );

    return new Promise((resolve, reject) => {
      randomClient().GetNotificationsByOwnerId(
        getNotificationsByOwnerIdReq,
        (err: any, response: NotificationArray) => {
          if (err) {
            logger.error(`getNotificationsByOwnerId ERROR in GTW`, {
              err,
              callRequest: getNotificationsByOwnerIdReq,
            });
            reject(err);
          }

          logger.info(`getNotificationsByOwnerId OK in GTW`, {
            callRequest: getNotificationsByOwnerIdReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async markAsRead(markAsReadReq: NotificationIdArray) {
    logger.info(`Call to markAsRead in GTW`, markAsReadReq);

    return new Promise((resolve, reject) => {
      randomClient().MarkAsRead(
        markAsReadReq,
        (err: any, response: SuccessMessage) => {
          if (err) {
            logger.error(`markAsRead ERROR in GTW`, {
              err,
              callRequest: markAsReadReq,
            });
            reject(err);
          }

          logger.info(`markAsRead OK in GTW`, {
            callRequest: markAsReadReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async markAllAsRead(markAllAsReadReq: MarkAllAsReadReq) {
    logger.info(`Call to markAllAsRead in GTW`, markAllAsReadReq);

    return new Promise((resolve, reject) => {
      randomClient().MarkAllAsRead(
        markAllAsReadReq,
        (err: any, response: SuccessMessage) => {
          if (err) {
            logger.error(`markAllAsRead ERROR in GTW`, {
              err,
              callRequest: markAllAsReadReq,
            });
            reject(err);
          }

          logger.info(`markAllAsRead OK in GTW`, {
            callRequest: markAllAsReadReq,
          });
          resolve(response);
        }
      );
    });
  }
}
