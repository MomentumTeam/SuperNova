import { Response } from 'express';
import { NotificationService } from './notifications.service';
import { logger } from '../utils/logger/logger';
import {
  GetNotificationsByOwnerIdReq,
  MarkAllAsReadReq,
  NotificationIdArray,
} from '../interfaces/protoc/proto/notificationService';
import { AuthenticationError } from '../utils/errors/userErrors';
import { statusCodeHandler } from '../utils/errors/errorHandlers';

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

    try {
      const notifications = await NotificationService.getNotificationsByOwnerId(
        getNotificationsByOwnerIdReq
      );
      res.send(notifications);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  // PUT
  static async markAsRead(req: any, res: Response) {
    // TODO: check if the user has priviliges (that the notification belong to him)
    if (!req.user && !req.user.id) throw new AuthenticationError();

    const markAsReadReq: NotificationIdArray = {
      notificationIds: req.body.notificationIds,
    };

    try {
      const response = await NotificationService.markAsRead(markAsReadReq);
      res.send(response);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async markAllAsRead(req: any, res: Response) {
    if (!req.user && !req.user.id) throw new AuthenticationError();
    const markAllAsReadReq: MarkAllAsReadReq = { ownerId: req.user.id };

    try {
      const response = await NotificationService.markAllAsRead(
        markAllAsReadReq
      );
      res.send(response);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }
}
