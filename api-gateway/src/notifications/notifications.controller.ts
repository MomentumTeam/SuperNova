import { Request, Response } from 'express';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import * as config from '../config';
import { SuccessMessage } from '../interfaces/protoc/proto/producerService';
import { NotificationArray } from '../interfaces/protoc/proto/notificationService';

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

export const notificationsClient: any = new protoDescriptor.NotificationService(
  config.notificationsUrl,
  grpc.credentials.createInsecure()
);

export default class NotificationController {
  static async getMyNotifications(req: any, res: Response) {
    const weekAgo: number = Date.now() - 86400000 * 7;
    const from: string = req.query.from ? req.query.from.toString() : '1';
    const to: string = req.query.to ? req.query.to.toString() : '10';
    const startTime: string = req.query.startTime
      ? req.query.startTime.toString()
      : weekAgo.toString();
    notificationsClient.GetNotificationsByOwnerId(
      { ownerId: req.user.id, startTime: startTime, from: from, to: to },
      (err: any, response: NotificationArray) => {
        if (err) {
          res.send(null);
        }
        res.send(response);
      }
    );
  }

  static async markAsRead(req: any, res: Response) {
    const notificationIds = req.body.notificationIds
      ? req.body.notificationIds
      : [];
    notificationsClient.GetNotificationsByOwnerId(
      { notificationIds: notificationIds },
      (err: any, response: NotificationArray) => {
        if (err) {
          res.send(null);
        }
        res.send(response);
      }
    );
  }
}
