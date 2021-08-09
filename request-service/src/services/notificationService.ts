import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as config from '../config';
import {
  CreateNotificationReq,
  Notification,
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
  static async createNotification(
    createNotificationReq: CreateNotificationReq
  ): Promise<Notification> {
    console.log('createNotification');
    return new Promise((resolve, reject) => {
      notificationClient.CreateNotification(
        createNotificationReq,
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
}
