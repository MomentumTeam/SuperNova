import { HistoryManager } from './history.manager';
import * as grpc from '@grpc/grpc-js';
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

export async function getEventsByGroupId(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to getEventsByGroupId`, {
      callRequest: call.request,
    });
    const response = await historyManager.getEventsOGByOGId(call.request);
    logger.info(`getEventsByGroupId OK`, {
      callRequest: call.request,
    });
    callback(null, response);
  } catch (error: any) {
    logger.error(`getEventsByGroupId ERROR`, {
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

export async function getEventsSubmmitedByEntityId(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to getEventsSubmmitedByEntityId`, {
      callRequest: call.request,
    });
    const response = await historyManager.getEventsBySubmittedEntityId(call.request);
    logger.info(`getEventsSubmmitedByEntityId OK`, {
      callRequest: call.request,
    });
    callback(null, response);
  } catch (error: any) {
    logger.error(`getEventsSubmmitedByEntityId ERROR`, {
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


