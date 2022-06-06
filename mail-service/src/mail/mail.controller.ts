import * as grpc from '@grpc/grpc-js';
import { logger } from '../logger';
import { MailManager } from './mail.manager';
import OptionsService from '../services/optionsService';

const mailManager: MailManager = new MailManager();

export async function sendMail(call: any, callback: any): Promise<void> {
  try {
    logger.info('Call to sendMail', { callRequest: call.request });
    const mailNotificationsEnabled = await checkIfUserHasMailNotificationsEnabled(call.request.request.id);
    if(!mailNotificationsEnabled) callback(null, {success: true, message: 'Mail notifications are disabled for this user'});

    const mail = await mailManager.sendMail(call.request);
    logger.info('sendMail OK', {
      callRequest: call.request,
      mail,
    });
    callback(null, mail);
  } catch (error: any) {
    logger.error('sendMail OK', {
      callRequest: call.request,
      error: { message: error.message },
    });
    callback(
      {
        code: 400,
        message: error,
        status: grpc.status.CANCELLED,
      },
      null
    );
  }
}

export async function sendCustomMail(call: any, callback: any): Promise<void> {
  try {
    logger.info('Call to sendCustomMail', { callRequest: call.request });
    const mailNotificationsEnabled = await checkIfUserHasMailNotificationsEnabled(call.request.request.id);
    if(!mailNotificationsEnabled) return;

    const mail = await mailManager.sendCustomMail(call.request);
    logger.info('sendCustomMail OK', {
      callRequest: call.request,
      mail,
    });
    callback(null, mail);
  } catch (error: any) {
    logger.error('sendCustomMail OK', {
      callRequest: call.request,
      error: { message: error.message },
    });
    callback(
      {
        code: 400,
        message: error,
        status: grpc.status.CANCELLED,
      },
      null
    );
  }
}

async function checkIfUserHasMailNotificationsEnabled(entityId: string): Promise<boolean> {
    const userOptions = await OptionsService.getUserOptions({ entityId });
    return userOptions.getMailNotifications;
}
