import * as grpc from '@grpc/grpc-js';
import { logger } from '../logger';
import { NotificationManager } from './notification.manager';

const notificationManager: NotificationManager = new NotificationManager();

export async function createNotification(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info('Call to createNotification', { callRequest: call.request });
    const notification = await notificationManager.createNotification(
      call.request
    );
    logger.info('createNotification OK', {
      callRequest: call.request,
      notification,
    });
    callback(null, notification);
  } catch (error) {
    logger.error('createNotification ERROR', {
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
