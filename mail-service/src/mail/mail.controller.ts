import * as grpc from '@grpc/grpc-js';
import { logger } from '../logger';
import { MailManager } from './mail.manager';

const mailManager: MailManager = new MailManager();

export async function sendMail(call: any, callback: any): Promise<void> {
  try {
    logger.info('Call to sendMail', { callRequest: call.request });
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



export async function sendHierarchyDataMail(call: any, callback: any): Promise<void> {
  try {
    logger.info('Call to sendHierarchyDataMail', { callRequest: call.request });
    const mail = await mailManager.sendHierarchyDataMail(call.request);
    logger.info('sendHierarchyDataMail OK', {
      callRequest: call.request,
      mail,
    });
    callback(null, mail);
  } catch (error: any) {
    logger.error('sendHierarchyDataMail OK', {
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
