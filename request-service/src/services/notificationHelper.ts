import {
  CreateNotificationsReq,
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
  } catch (error) {
    logger.error('Error while creating notifications', {
      error: { message: error.message },
    });
  }
}
