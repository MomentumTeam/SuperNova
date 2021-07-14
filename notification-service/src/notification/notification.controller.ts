import * as grpc from '@grpc/grpc-js';
import { NotificationManager } from './notification.manager';

const notificationManager: NotificationManager = new NotificationManager();

export async function createNotification(
  call: any,
  callback: any
): Promise<void> {
  try {
    const requests = await notificationManager.createNotification(call.request);
    callback(null, requests);
  } catch (error) {
    callback(
      {
        code: 400,
        message: error.message,
        status: grpc.status.CANCELLED,
      },
      null
    );
  }
}

export async function markAsRead(call: any, callback: any): Promise<void> {
  try {
    const requests = await notificationManager.markAsRead(call.request);
    callback(null, requests);
  } catch (error) {
    callback(
      {
        code: 400,
        message: error.message,
        status: grpc.status.CANCELLED,
      },
      null
    );
  }
}

export async function getNotificationsByOwnerId(
  call: any,
  callback: any
): Promise<void> {
  try {
    const requests = await notificationManager.getNotificationsByOwnerId(
      call.request
    );
    callback(null, requests);
  } catch (error) {
    callback(
      {
        code: 400,
        message: error.message,
        status: grpc.status.CANCELLED,
      },
      null
    );
  }
}
