import {
  CreateNotificationsReq,
  CreateCustomNotificationReq,
  NotificationType,
  OwnerType,
} from '../interfaces/protoc/proto/notificationService';
import { Request } from '../interfaces/protoc/proto/requestService';
import { logger } from '../logger';
import NotificationService from './notificationService';

export async function createNotifications(
  type: NotificationType,
  request: Request
) {
  try {
    let createNotificationsReq: CreateNotificationsReq = {
      type: type,
      request: request,
    };
    const notificationArray = await NotificationService.createNotifications(
      createNotificationsReq
    );
    return notificationArray;
  } catch (error: any) {
    logger.error('Error while creating notifications', {
      error: { message: error.message },
    });
  }
}

export async function createCustomNotification(
  type: NotificationType,
  ownerId: string,
  ownerType: OwnerType,
  requestId: string,
  message: string,
  reason: string
) {
  try {
    let createCustomNotificationReq: CreateCustomNotificationReq = {
      type: type,
      ownerId: ownerId,
      ownerType: ownerType,
      requestId: requestId,
      message: message,
      reason: reason,
    };
    const notification = await NotificationService.createCustomNotification(
      createCustomNotificationReq
    );
    return notification;
  } catch (error: any) {
    logger.error('Error while creating notifications', {
      error: { message: error.message },
    });
  }
}
