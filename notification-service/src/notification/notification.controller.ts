import * as grpc from 'grpc';
import { logger } from '../logger';
import { NotificationManager } from './notification.manager';

const notificationManager: NotificationManager = new NotificationManager();

export async function markAllAsRead(call: any, callback: any): Promise<void> {
  try {
    logger.info('Call to markAllAsRead', {
      callRequest: call.request,
    });
    const successMessage = await notificationManager.markAllAsRead(
      call.request
    );
    logger.info('markAllAsRead OK', {
      callRequest: call.request,
      successMessage,
    });
    callback(null, successMessage);
  } catch (error: any) {
    logger.error('markAllAsRead ERROR', {
      callRequest: call.request,
      error: { message: error.message },
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

export async function createNotifications(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info('Call to createNotifications', {
      callRequest: call.request,
    });
    const notifications = await notificationManager.createNotifications(
      call.request
    );
    logger.info('createNotifications OK', {
      callRequest: call.request,
      notifications,
    });
    callback(null, notifications);
  } catch (error: any) {
    logger.error('createNotifications ERROR', {
      callRequest: call.request,
      error: { message: error.message },
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

export async function createCustomNotification(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info('Call to createCustomNotification', {
      callRequest: call.request,
    });
    const notification = await notificationManager.createCustomNotification(
      call.request
    );
    logger.info('createCustomNotification OK', {
      callRequest: call.request,
      notification,
    });
    callback(null, notification);
  } catch (error: any) {
    logger.error('createCustomNotification ERROR', {
      callRequest: call.request,
      error: { message: error.message },
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
  } catch (error: any) {
    logger.error('markAsRead ERROR', {
      callRequest: call.request,
      error: { message: error.message },
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
  } catch (error: any) {
    logger.error('getNotificationsByOwnerId ERROR', {
      callRequest: call.request,
      error: { message: error.message },
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
