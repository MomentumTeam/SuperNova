import { HistoryManager } from './history.manager';
import * as grpc from '@grpc/grpc-js';
import {
  IsRequestApprovedRes,
  Request,
  RequestReq,
  RequestType,
  requestTypeToJSON,
  SuccessMessage,
  UpdateApproverDecisionReq,
} from '../interfaces/protoc/proto/requestService';
import { logger } from '../logger';

const historyManager: HistoryManager = new HistoryManager();

export async function getEventsByRoleId(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to getEventsByRoleId`, {
      callRequest: call.request,
    });
    const response = await historyManager.getEventsByRoleId(call.request);
    logger.info(`getEventsByRoleId OK`, {
      callRequest: call.request,
    });
    callback(null, response);
  } catch (error: any) {
    logger.error(`getEventsByRoleId ERROR`, {
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

export async function getOGByOGId(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to getOGByOGId`, {
      callRequest: call.request,
    });
    const response = await historyManager.getOGByOGId(call.request);
    logger.info(`getOGByOGId OK`, {
      callRequest: call.request,
    });
    callback(null, response);
  } catch (error: any) {
    logger.error(`getOGByOGId ERROR`, {
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

export async function getEventsByEntityId(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to getEventsByEntityId`, {
      callRequest: call.request,
    });
    const response = await historyManager.getEventsByEntityId(call.request);
    logger.info(`getEventsByEntityId OK`, {
      callRequest: call.request,
    });
    callback(null, response);
  } catch (error: any) {
    logger.error(`getEventsByEntityId ERROR`, {
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

export async function getEventsBySubmittedEntityId(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to getEventsBySubmittedEntityId`, {
      callRequest: call.request,
    });
    const response = await historyManager.getEventsBySubmittedEntityId(call.request);
    logger.info(`getEventsBySubmittedEntityId OK`, {
      callRequest: call.request,
    });
    callback(null, response);
  } catch (error: any) {
    logger.error(`getEventsBySubmittedEntityId ERROR`, {
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


