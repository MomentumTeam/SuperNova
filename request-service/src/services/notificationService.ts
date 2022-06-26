import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as config from '../config';
import {
  CreateCustomNotificationReq,
  CreateNotificationsReq,
  Notification,
  NotificationArray,
} from '../interfaces/protoc/proto/notificationService';
import { findPath } from '../utils/path';

const PROTO_PATH = `${findPath('proto')}/notificationService.proto`;

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
for (let i = 0; i < config.grpcPoolSize; i++) {
  clients.push(
    new protoDescriptor.NotificationService(
      config.notificationServiceUrl,
      grpc.credentials.createInsecure(),
      { 'grpc.keepalive_timeout_ms': 5000 }
    )
  );
}

function randomClient(): any {
  return clients[Math.floor(Math.random() * clients.length)];
}

export default class NotificationService {
  static async createCustomNotification(
    createCustomNotificationReq: CreateCustomNotificationReq
  ): Promise<Notification> {
    console.log('createCustomNotification');
    return new Promise((resolve, reject) => {
      randomClient().CreateCustomNotification(
        createCustomNotificationReq,
        (err: any, notification: Notification) => {
          if (err) {
            reject(err);
          } else {
            resolve(notification);
          }
        }
      );
    });
  }

  static async createNotifications(
    createNotificationsReq: CreateNotificationsReq
  ): Promise<NotificationArray> {
    console.log('createNotifications');
    return new Promise((resolve, reject) => {
      randomClient().CreateNotifications(
        createNotificationsReq,
        (err: any, notificationArray: NotificationArray) => {
          if (err) {
            resolve({ notifications: [], totalCount: 0 });
          } else {
            resolve(notificationArray);
          }
        }
      );
    });
  }
}
