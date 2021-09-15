import { Request, Response } from 'express';
import { notificationsClient } from './notifications.service';
import { logger } from '../utils/logger/logger';
import { SuccessMessage } from '../interfaces/protoc/proto/producerService';
import {
    GetNotificationsByOwnerIdReq,
    MarkAllAsReadReq,
    NotificationArray,
    NotificationIdArray,
} from '../interfaces/protoc/proto/notificationService';
import { AuthenticationError } from '../utils/errors/userErrors';

export default class NotificationController {
    // GET
    static async getMyNotifications(req: any, res: Response) {
        if (!req.user && !req.user.id) throw new AuthenticationError();

        const getNotificationsByOwnerIdReq: GetNotificationsByOwnerIdReq = {
            ownerId: req.user.id,
            startTime: req.query.startTime.toString(),
            from: req.query.from,
            to: req.query.to,
        };

        logger.info(`Call to getMyNotifications in GTW`, {
            callRequest: getNotificationsByOwnerIdReq,
        });

        notificationsClient.GetNotificationsByOwnerId(
            getNotificationsByOwnerIdReq,
            (err: any, response: NotificationArray) => {
                if (err) {
                    logger.error(`getMyNotifications ERROR in GTW`, {
                        err,
                        callRequest: getNotificationsByOwnerIdReq,
                    });
                    res.status(500).send(err.message);
                }

                logger.info(`getMyNotifications OK in GTW`, {
                    response: response,
                    callRequest: getNotificationsByOwnerIdReq,
                });
                res.send(response);
            }
        );
    }

    // PUT
    static async markAsRead(req: any, res: Response) {
        // TODO: check if the user has priviliges (that the notification belong to him)
        if (!req.user && !req.user.id) throw new AuthenticationError();

        const markAsReadReq: NotificationIdArray = { notificationIds: req.body.notificationIds };
        logger.info(`Call to markAsRead in GTW`, {
            callRequest: markAsReadReq,
        });

        notificationsClient.MarkAsRead(markAsReadReq, (err: any, response: SuccessMessage) => {
            if (err) {
                logger.error(`markAsRead ERROR in GTW`, {
                    err,
                    callRequest: markAsReadReq,
                });
                res.status(500).send(err.message);
            }

            logger.info(`markAsRead OK in GTW`, {
                response: response,
                callRequest: markAsReadReq,
            });
            res.send(response);
        });
    }

    static async markAllAsRead(req: any, res: Response) {
        if (!req.user && !req.user.id) throw new AuthenticationError();
        const markAllAsReadReq: MarkAllAsReadReq = { ownerId: req.user.id };

        logger.info(`Call to markAllAsRead in GTW`, {callRequest: markAllAsReadReq});
        notificationsClient.MarkAllAsRead(markAllAsReadReq, (err: any, response: SuccessMessage) => {
            if (err) {
                logger.error(`markAllAsRead ERROR in GTW`, {
                    err,
                    callRequest: markAllAsReadReq,
                });
                res.status(500).send(err.message);
            }

            logger.info(`markAsRead OK in GTW`, {
                response: response,
                callRequest: markAllAsReadReq,
            });
            res.send(response);
        });
    }
}
