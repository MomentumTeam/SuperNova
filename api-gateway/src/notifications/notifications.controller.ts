import { Request, Response } from 'express';
import * as grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import * as config from '../config';
import { logger } from '../logger';
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

    const data = {
      ownerId: req.user.id,
      startTime: startTime,
      from: from,
      to: to,
    };

    logger.info(`Call to getMyNotifications in GTW`, {
      callRequest: data,
    });

    notificationsClient.GetNotificationsByOwnerId(
      { ownerId: req.user.id, startTime: startTime, from: from, to: to },
      (err: any, response: NotificationArray) => {
        if (err) {
          logger.error(`getMyNotifications ERROR in GTW`, {
            err,
            callRequest: data,
          });
          res.send(null);
        }

        logger.info(`getMyNotifications OK in GTW`, {
          response: response,
          callRequest: data,
        });
        res.send(response);
      }
    );
  }

  static async markAsRead(req: any, res: Response) {
    const notificationIds = req.body.notificationIds
      ? req.body.notificationIds
      : [];

    logger.info(`Call to markAsRead in GTW`, {
      callRequest: { notificationIds: notificationIds },
    });

    notificationsClient.MarkAsRead(
      { notificationIds: notificationIds },
      (err: any, response: SuccessMessage) => {
        if (err) {
          logger.error(`markAsRead ERROR in GTW`, {
            err,
            callRequest: { notificationIds: notificationIds },
          });
          res.send(null);
        }

        logger.info(`markAsRead OK in GTW`, {
          response: response,
          callRequest: { notificationIds: notificationIds },
        });
        res.send(response);
      }
    );
  }
}
