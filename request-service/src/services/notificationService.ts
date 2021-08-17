import * as grpc from 'grpc';
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

const notificationClient: any = new protoDescriptor.NotificationService(
  config.notificationServiceUrl,
  grpc.credentials.createInsecure()
);

export default class NotificationService {
  static async createCustomNotification(
    createCustomNotificationReq: CreateCustomNotificationReq
  ): Promise<Notification> {
    console.log('createCustomNotification');
    return new Promise((resolve, reject) => {
      notificationClient.CreateCustomNotification(
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
      notificationClient.CreateNotifications(
        createNotificationsReq,
        (err: any, notificationArray: NotificationArray) => {
          if (err) {
            resolve({ notifications: [], totalCount: 0 });
            // reject(err);
          } else {
            resolve(notificationArray);
          }
        }
      );
    });
  }
}
