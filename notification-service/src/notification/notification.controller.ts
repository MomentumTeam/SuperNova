import * as grpc from 'grpc';
import { logger } from '../logger';
import { NotificationManager } from './notification.manager';

const notificationManager: NotificationManager = new NotificationManager();

export async function markAllAsRead(call: any, callback: any): Promise<void> {
  try {
    const successMessage = await notificationManager.markAllAsRead(
      call.request
    );
    callback(null, successMessage);
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

export async function createNotifications(
  call: any,
  callback: any
): Promise<void> {
  try {
    const notifications = await notificationManager.createNotifications(
      call.request
    );
    callback(null, notifications);
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

export async function createCustomNotification(
  call: any,
  callback: any
): Promise<void> {
  try {
    const notification = await notificationManager.createCustomNotification(
      call.request
    );
    callback(null, notification);
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
    logger.info('Call to markAsRead', { callRequest: call.request });
    const notifications = await notificationManager.markAsRead(call.request);
    logger.info('markAsRead OK', {
      callRequest: call.request,
      notifications,
    });
    callback(null, notifications);
  } catch (error) {
    logger.error('markAsRead ERROR', {
      callRequest: call.request,
      error,
    });
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
    logger.info('Call to getNotificationsByOwnerId', {
      callRequest: call.request,
    });
    const notifications = await notificationManager.getNotificationsByOwnerId(
      call.request
    );
    logger.info('getNotificationsByOwnerId OK', {
      callRequest: call.request,
      notifications,
    });
    callback(null, notifications);
  } catch (error) {
    logger.error('getNotificationsByOwnerId ERROR', {
      callRequest: call.request,
      error,
    });
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
