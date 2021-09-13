import { Request, Response } from 'express';
import { notificationsClient } from './notifications.service';
import { logger } from '../utils/logger/logger';
import { SuccessMessage } from '../interfaces/protoc/proto/producerService';
import {
  CreateNotificationsReq,
  NotificationArray,
} from '../interfaces/protoc/proto/notificationService';

export default class NotificationController {
  // GET
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
      data,
      (err: any, response: NotificationArray) => {
        if (err) {
          logger.error(`getMyNotifications ERROR in GTW`, {
            err,
            callRequest: data,
          });
          res.status(500).send(err.message);
        }

        logger.info(`getMyNotifications OK in GTW`, {
          response: response,
          callRequest: data,
        });
        res.send(response);
      }
    );
  }

  // POST
  static async createNotifications(req: any, res: Response) {
    // TODO
    let createNotificationsReq: Partial<CreateNotificationsReq> = {};
    logger.info(`Call to createNotifications in GTW`, createNotificationsReq);

    notificationsClient.CreateNotifications(
      { createNotificationsReq },
      (err: any, response: SuccessMessage) => {
        if (err) {
          logger.error(`createNotifications ERROR in GTW`, {
            err,
            callRequest: createNotificationsReq,
          });
          res.status(500).send(err.message);
        }

        logger.info(`createNotifications OK in GTW`, {
          response: response,
          callRequest: createNotificationsReq,
        });
        res.send(response);
      }
    );
  }

  // POST
  static async createCustomNotifications(req: any, res: Response) {
    // TODO
    let createCustomNotificationsReq: CreateCustomNotificationsReq = {};
    logger.info(
      `Call to createNotifications in GTW`,
      createCustomNotificationsReq
    );

    notificationsClient.CreateNotifications(
      { createCustomNotificationsReq },
      (err: any, response: SuccessMessage) => {
        if (err) {
          logger.error(`createNotifications ERROR in GTW`, {
            err,
            callRequest: createCustomNotificationsReq,
          });
          res.status(500).send(err.message);
        }

        logger.info(`createNotifications OK in GTW`, {
          response: response,
          callRequest: createCustomNotificationsReq,
        });
        res.send(response);
      }
    );
  }

  // PUT
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
          res.status(500).send(err.message);
        }

        logger.info(`markAsRead OK in GTW`, {
          response: response,
          callRequest: { notificationIds: notificationIds },
        });
        res.send(response);
      }
    );
  }

  static async markAllAsRead(req: any, res: Response) {
    logger.info(`Call to markAllAsRead in GTW`, {
      callRequest: { ownerId: req.user.id },
    });

    notificationsClient.MarkAllAsRead(
      { ownerId: req.user.id },
      (err: any, response: SuccessMessage) => {
        if (err) {
          logger.error(`markAllAsRead ERROR in GTW`, {
            err,
            callRequest: { ownerId: req.user.id },
          });
          res.status(500).send(err.message);
        }

        logger.info(`markAsRead OK in GTW`, {
          response: response,
          callRequest: { ownerId: req.user.id },
        });
        res.send(response);
      }
    );
  }
}
