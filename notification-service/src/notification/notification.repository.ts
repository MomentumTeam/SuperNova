import {
  CreateCustomNotificationReq,
  CreateNotificationsReq,
  GetNotificationsByOwnerIdReq,
  MarkAllAsReadReq,
  Notification,
  NotificationArray,
  NotificationIdArray,
  SuccessMessage,
} from '../interfaces/protoc/proto/notificationService';
import { SocketEventType } from '../interfaces/protoc/proto/socketService';
import { NotificationModel } from '../models/notification.model';
import { SocketService } from '../services/socket.service';
import {
  generateNotifications,
  turnObjectIdsToStrings,
} from '../utils/notificationHelper';
import { logger } from '../logger';
export class NotificationRepository {
  async markAsRead(notificationIdArray: NotificationIdArray): Promise<SuccessMessage> {
    try {
      await NotificationModel.updateMany(
        {
          _id: notificationIdArray.notificationIds,
        },
        { $set: { read: true } }
      );

      return { success: true };
    } catch (error) {
      throw error;
    }
  }

  async markAllAsRead(markAllAsReadReq: MarkAllAsReadReq): Promise<SuccessMessage> {
    try {
      await NotificationModel.updateMany(
        {
          ownerId: markAllAsReadReq.ownerId,
        },
        { $set: { read: true } }
      );

      try {
        SocketService.SendEvent({
          eventType: SocketEventType.READ_NOTIFICATION,
          eventData: {additionalDests: [markAllAsReadReq.ownerId]}
        });
      } catch (error) {
        logger.error("can't send socket info", error);
      }

      return { success: true };
    } catch (error) {
      throw error;
    }
  }

  async createNotifications(createNotificationsReq: CreateNotificationsReq): Promise<NotificationArray> {
    return new Promise<NotificationArray>((resolve, reject) => {
      try {
        let promises: Promise<Notification>[] = [];
        if (createNotificationsReq.request) {
          if (createNotificationsReq.request.isPartOfBulk) {
            throw new Error("Do not create notifications for requests which are parts of bulk!");
          }
          const createNotificationRequests: CreateCustomNotificationReq[] = generateNotifications(
            createNotificationsReq.type,
            createNotificationsReq.request
          );
          for (let createNotificationReq of createNotificationRequests) {
            promises.push(
              new Promise<Notification>((createResolve, createReject) => {
                this.createCustomNotification(createNotificationReq)
                  .then((createdNotification: Notification) => {
                    createResolve(createdNotification);
                  })
                  .catch((error) => createReject(error));
              })
            );
          }

          Promise.all(promises)
            .then((createdNotifications: Notification[]) => {
              resolve({
                notifications: createdNotifications,
                totalCount: createdNotifications.length,
              });
            })
            .catch((error) => {
              reject(error);
            });
        } else {
          reject(new Error("Request must be inserted!"));
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  async createCustomNotification(createCustomNotificationReq: CreateCustomNotificationReq): Promise<Notification> {
    try {
      const notification: any = new NotificationModel(createCustomNotificationReq);
      notification.createdAt = new Date().getTime();
      const createdNotification = await notification.save();
      const document = createdNotification.toObject();
      turnObjectIdsToStrings(document);
      try {
        SocketService.SendEvent({
          eventType: SocketEventType.NEW_NOTIFICATION,
          eventData: { notification: document as Notification, additionalDests: [] },
        });
      } catch (error) {
        logger.error("can't send socket info", error);
      }

      return document as Notification;
    } catch (error) {
      throw error;
    }
  }

  async getNotificationsByOwnerId(
    getNotificationsByOwnerIdReq: GetNotificationsByOwnerIdReq
  ): Promise<NotificationArray> {
    try {
      let query: any = {
        ownerId: getNotificationsByOwnerIdReq.ownerId,
        createdAt: { $gte: getNotificationsByOwnerIdReq.startTime },
      };
      if (getNotificationsByOwnerIdReq.read !== undefined) {
        query.read = getNotificationsByOwnerIdReq.read;
      }
      const totalCount = await NotificationModel.countDocuments(query);
      const notifications: any = await NotificationModel.find(
        query,
        {},
        {
          skip: getNotificationsByOwnerIdReq.from - 1,
          limit: getNotificationsByOwnerIdReq.to - getNotificationsByOwnerIdReq.from + 1,
        }
      ).sort([["createdAt", -1]]);

      if (notifications) {
        let documents: any = [];
        for (let i = 0; i < notifications.length; i++) {
          const notificationObj: any = notifications[i].toObject();
          turnObjectIdsToStrings(notificationObj);
          documents.push(notificationObj);
        }
        return {
          notifications: documents,
          totalCount: totalCount,
        };
      } else {
        return { notifications: [], totalCount: 0 };
      }
    } catch (error) {
      throw error;
    }
  }
}
