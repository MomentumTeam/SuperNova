import {
  CreateNotificationReq,
  GetNotificationsByOwnerIdReq,
  Notification,
  NotificationArray,
  NotificationIdArray,
  SuccessMessage,
} from '../interfaces/protoc/proto/notificationService';
import { NotificationModel } from '../models/notification.model';

export class NotificationRepository {
  private cleanUnderscoreFields(document: any): void {
    let keys: any = Object.keys(document);

    for (let key of keys) {
      if (key.startsWith('_') && key !== '_id') {
        delete document[key];
      }
    }
  }

  async turnObjectIdsToStrings(document: any) {
    if (document._id) {
      document.id = document._id.toString();
    }
    if (document.requestId) {
      document.requestId = document.requestId.toString();
    }
    this.cleanUnderscoreFields(document);
  }

  async markAsRead(
    notificationIdArray: NotificationIdArray
  ): Promise<SuccessMessage> {
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

  async createNotification(
    createNotificationReq: CreateNotificationReq
  ): Promise<Notification> {
    try {
      const notification: any = new NotificationModel(createNotificationReq);
      notification.createdAt = new Date().getTime();
      const createdNotification = await notification.save();
      const document = createdNotification.toObject();
      this.turnObjectIdsToStrings(document);
      return document as Notification;
    } catch (error) {
      throw error;
    }
  }

  async getNotificationsByOwnerId(
    getNotificationsByOwnerIdReq: GetNotificationsByOwnerIdReq
  ): Promise<NotificationArray> {
    try {
      const query: any = {
        ownerId: getNotificationsByOwnerIdReq.ownerId,
        createdAt: { $gte: getNotificationsByOwnerIdReq.startTime },
      };
      const totalCount = await NotificationModel.countDocuments(query);
      const notifications: any = await NotificationModel.find(
        query,
        {},
        {
          skip: getNotificationsByOwnerIdReq.from - 1,
          limit:
            getNotificationsByOwnerIdReq.to -
            getNotificationsByOwnerIdReq.from +
            1,
        }
      ).sort([['createdAt', -1]]);

      if (notifications) {
        let documents: any = [];
        for (let i = 0; i < notifications.length; i++) {
          const notificationObj: any = notifications[i].toObject();
          this.turnObjectIdsToStrings(notificationObj);
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
