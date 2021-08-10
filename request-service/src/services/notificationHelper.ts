import {
  CreateNotificationsReq,
  NotificationType,
  OwnerType,
} from '../interfaces/protoc/proto/notificationService';
import { Request } from '../interfaces/protoc/proto/requestService';
import NotificationService from './notificationService';

export async function createNotifications(
  type: NotificationType,
  request: Request
) {
  let createNotificationsReq: CreateNotificationsReq = {
    type: type,
    request: request,
  };
  const notificationArray = await NotificationService.createNotifications(
    createNotificationsReq
  );
  return notificationArray;
}
