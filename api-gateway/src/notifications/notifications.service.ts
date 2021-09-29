import path from 'path';
import * as grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import { config } from '../config';
import { GetNotificationsByOwnerIdReq, MarkAllAsReadReq, NotificationArray, NotificationIdArray, SuccessMessage } from '../interfaces/protoc/proto/notificationService';
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

const notificationsClient: any = new protoDescriptor.NotificationService(
  config.endpoints.notification,
  grpc.credentials.createInsecure()
);

export class NotificationService {
    static async getNotificationsByOwnerId(getNotificationsByOwnerIdReq: GetNotificationsByOwnerIdReq) {
        logger.info(`Call to getNotificationsByOwnerId in GTW`, getNotificationsByOwnerIdReq);

        return new Promise((resolve, reject) => {
            notificationsClient.GetNotificationsByOwnerId(
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
                        response: response,
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
            notificationsClient.MarkAsRead(markAsReadReq, (err: any, response: SuccessMessage) => {
                if (err) {
                    logger.error(`markAsRead ERROR in GTW`, {
                        err,
                        callRequest: markAsReadReq,
                    });
                    reject(err);
                }

                logger.info(`markAsRead OK in GTW`, {
                    response: response,
                    callRequest: markAsReadReq,
                });
                resolve(response);
            });
        });
    }

    static async markAllAsRead(markAllAsReadReq: MarkAllAsReadReq) {
        logger.info(`Call to markAllAsRead in GTW`, markAllAsReadReq);

        return new Promise((resolve, reject) => {
            notificationsClient.MarkAllAsRead(markAllAsReadReq, (err: any, response: SuccessMessage) => {
                if (err) {
                    logger.error(`markAllAsRead ERROR in GTW`, {
                        err,
                        callRequest: markAllAsReadReq,
                    });
                    reject(err);
                }

                logger.info(`markAllAsRead OK in GTW`, {
                    response: response,
                    callRequest: markAllAsReadReq,
                });
                resolve(response);
            });
        });
    }
}