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
import { NotificationRepository } from './notification.repository';
export class NotificationManager {
  private notificationRepository: NotificationRepository;
  constructor() {
    this.notificationRepository = new NotificationRepository();
  }

  async createCustomNotification(
    createNotificationReq: CreateCustomNotificationReq
  ): Promise<Notification> {
    try {
      return await this.notificationRepository.createCustomNotification(
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

  async createNotifications(
    createNotificationsReq: CreateNotificationsReq
  ): Promise<NotificationArray> {
    try {
      return await this.notificationRepository.createNotifications(
        createNotificationsReq
      );
    } catch (error) {
      throw error;
    }
  }
  async markAllAsRead(
    markAllAsReadReq: MarkAllAsReadReq
  ): Promise<SuccessMessage> {
    try {
      return await this.notificationRepository.markAllAsRead(markAllAsReadReq);
    } catch (error) {
      throw error;
    }
  }
}
