import { RequestManager } from './producer.manager';
import * as grpc from 'grpc';
import { SuccessMessage } from '../interfaces/protoc/proto/producerService';
import { logger } from '../logger';
const requestManager: RequestManager = new RequestManager();

export async function produceToKartoffelQueue(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info('Call to produceToKartoffelQueue', {
      callRequest: call.request,
    });
    const successMessage: SuccessMessage =
      await requestManager.produceToKartoffelQueue(call.request);
    logger.info('produceToKartoffelQueue OK', {
      callRequest: call.request,
      successMessage,
    });
    callback(null, successMessage);
  } catch (error: any) {
    logger.error('produceToKartoffelQueue ERROR', {
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

export async function produceToADQueue(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info('Call to produceToADQueue', {
      callRequest: call.request,
    });
    const successMessage: SuccessMessage =
      await requestManager.produceToADQueue(call.request);
    logger.info('produceToADQueue OK', {
      callRequest: call.request,
      successMessage,
    });
    callback(null, successMessage);
  } catch (error: any) {
    logger.error('produceToADQueue ERROR', {
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
