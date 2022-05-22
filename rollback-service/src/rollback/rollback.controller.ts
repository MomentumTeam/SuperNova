import * as grpc from '@grpc/grpc-js';
import {
  IsRollbackValidRes,
  RollbackRes,
} from '../interfaces/protoc/proto/rollbackService';
import { logger } from '../logger';
import { RollbackManager } from './rollback.manager';

const roolbackManager: RollbackManager = new RollbackManager();

export async function isRollbackValid(call: any, callback: any) {
  try {
    logger.info('Call to isRollbackValid', {
      callRequest: call.request,
    });
    const request: IsRollbackValidRes = await roolbackManager.isRollbackValid(
      call.request
    );
    logger.info('isRollbackValid OK', {
      callRequest: call.request,
      request: request,
    });
    callback(null, request);
  } catch (error: any) {
    logger.info('isRollbackValid ERROR', {
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

export async function rollbackInAD(call: any, callback: any) {
  try {
    logger.info('Call to rollbackInAD', {
      callRequest: call.request,
    });
    const request: RollbackRes = await roolbackManager.rollbackInAD(
      call.request
    );
    logger.info('rollbackInAD OK', {
      callRequest: call.request,
      request: request,
    });
    callback(null, request);
  } catch (error: any) {
    logger.info('rollbackInAD ERROR', {
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

export async function rollbackInKartoffel(call: any, callback: any) {
  try {
    logger.info('Call to rollbackInKartoffel', {
      callRequest: call.request,
    });
    const request: RollbackRes =
      await roolbackManager.rollbackInKartoffel(call.request);
    logger.info('rollbackInKartoffel OK', {
      callRequest: call.request,
      request: request,
    });
    callback(null, request);
  } catch (error: any) {
    logger.info('rollbackInKartoffel ERROR', {
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
