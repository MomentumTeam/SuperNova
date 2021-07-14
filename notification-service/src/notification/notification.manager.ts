import {
  CreateNotificationReq,
  GetNotificationsByOwnerIdReq,
  Notification,
  NotificationArray,
  NotificationIdArray,
  SuccessMessage,
} from '../interfaces/protoc/proto/notificationService';
import { NotificationRepository } from './notification.repository';
export class NotificationManager {
  private notificationRepository: NotificationRepository;
  constructor() {
    this.notificationRepository = new NotificationRepository();
  }

  async createNotification(
    createNotificationReq: CreateNotificationReq
  ): Promise<Notification> {
    try {
      return await this.notificationRepository.createNotification(
        createNotificationReq
      );
    } catch (error) {
      throw error;
    }
  }

  async markAsRead(
    notificationIdArray: NotificationIdArray
  ): Promise<SuccessMessage> {
    try {
      return await this.notificationRepository.markAsRead(notificationIdArray);
    } catch (error) {
      throw error;
    }
  }

  async getNotificationsByOwnerId(
    getNotificationsByOwnerIdReq: GetNotificationsByOwnerIdReq
  ): Promise<NotificationArray> {
    try {
      return await this.notificationRepository.getNotificationsByOwnerId(
        getNotificationsByOwnerIdReq
      );
    } catch (error) {
      throw error;
    }
  }
}
