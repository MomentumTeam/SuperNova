import * as grpc from '@grpc/grpc-js';
import {
  DigitalIdentities,
  DigitalIdentity,
  SuccessMessage,
} from '../interfaces/protoc/proto/kartoffelService';
import { logger } from '../logger';
import { KartoffelFaker } from '../mock/kartoffel.faker';
import { getErrorMessage, getStatusCode } from '../utils/errors.utils';
import { KartoffelUtils } from '../utils/kartoffel.utils';
import { DiManager } from './di.manager';

const kartoffelFaker: KartoffelFaker = new KartoffelFaker();
const kartoffelUtils: KartoffelUtils = new KartoffelUtils();

const diManager: DiManager = new DiManager(kartoffelUtils, kartoffelFaker);

export async function getAllDIs(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to getAllDIs`, { callRequest: call.request });
    const digitalIdentities: DigitalIdentities = await diManager.getAllDIs(
      call.request
    );
    logger.info(`getAllDIs OK`, {
      callRequest: call.request,
      response: digitalIdentities,
    });
    callback(null, { digitalIdentities: digitalIdentities });
  } catch (error: any) {
    const status = getStatusCode(error);
    const message = getErrorMessage(error);

    logger.error(`getAllDIs ERROR`, {
      callRequest: call.request,
      error: { message },
    });
    callback(
      {
        code: status,
        message,
        status: grpc.status.CANCELLED,
      },
      null
    );
  }
}

export async function createDI(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to createDI`, { callRequest: call.request });
    const newDI: DigitalIdentity = await diManager.createDI(call.request);
    logger.info(`createDI OK`, {
      callRequest: call.request,
      response: newDI,
    });
    callback(null, newDI);
  } catch (error: any) {
    const status = getStatusCode(error);
    const message = getErrorMessage(error);

    logger.error(`createDI ERROR`, {
      callRequest: call.request,
      error: { message },
    });
    callback(
      {
        code: status,
        message,
        status: grpc.status.CANCELLED,
      },
      null
    );
  }
}

export async function getDIByRoleId(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to getDIByRoleId`, { callRequest: call.request });
    const di: DigitalIdentity = await diManager.getDIByRoleId(call.request);
    logger.info(`getDIByRoleId OK`, {
      callRequest: call.request,
      response: di,
    });
    callback(null, di);
  } catch (error: any) {
    const status = getStatusCode(error);
    const message = getErrorMessage(error);

    logger.error(`getDIByRoleId ERROR`, {
      callRequest: call.request,
      error: { message },
    });
    callback(
      {
        code: status,
        error: { message },
        status: grpc.status.CANCELLED,
      },
      null
    );
  }
}

export async function searchDIOrUniqueId(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to searchDIOrUniqueId`, { callRequest: call.request });
    const DigitalIdentities: DigitalIdentities =
      await diManager.searchDIOrUniqueId(call.request);
    logger.info(`searchDIOrUniqueId OK`, {
      callRequest: call.request,
      response: DigitalIdentities,
    });
    callback(null, { DigitalIdentities: DigitalIdentities });
  } catch (error: any) {
    const status = getStatusCode(error);
    const message = getErrorMessage(error);

    logger.error(`searchDIOrUniqueId ERROR`, {
      callRequest: call.request,
      error: { message },
    });
    callback(
      {
        code: status,
        message,
        status: grpc.status.CANCELLED,
      },
      null
    );
  }
}

export async function deleteDI(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to deleteDI`, { callRequest: call.request });
    const successMessage: SuccessMessage = await diManager.deleteDI(
      call.request
    );
    logger.info(`deleteDI OK`, {
      callRequest: call.request,
      response: successMessage,
    });
    callback(null, successMessage);
  } catch (error: any) {
    const status = getStatusCode(error);
    const message = getErrorMessage(error);

    logger.error(`deleteDI ERROR`, {
      callRequest: call.request,
      error: { message },
    });
    callback(
      {
        code: status,
        message,
        status: grpc.status.CANCELLED,
      },
      null
    );
  }
}

export async function getDIByUniqueId(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to getDIByUniqueId`, { callRequest: call.request });
    const di: DigitalIdentity = await diManager.getDIByUniqueId(call.request);
    logger.info(`getDIByUniqueId OK`, {
      callRequest: call.request,
      response: di,
    });
    callback(null, di);
  } catch (error: any) {
    const status = getStatusCode(error);
    const message = getErrorMessage(error);

    logger.error(`getDIByUniqueId ERROR`, {
      callRequest: call.request,
      error: { message },
    });
    callback(
      {
        code: status,
        message,
        status: grpc.status.CANCELLED,
      },
      null
    );
  }
}

export async function updateDI(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to updateDI`, { callRequest: call.request });
    const digitalIdentity: DigitalIdentity = await diManager.updateDI(
      call.request
    );
    logger.info(`updateDI OK`, {
      callRequest: call.request,
      response: digitalIdentity,
    });
    callback(null, { success: true });
  } catch (error: any) {
    const status = getStatusCode(error);
    const message = getErrorMessage(error);

    logger.error(`updateDI ERROR`, {
      callRequest: call.request,
      error: { message },
    });
    callback(
      {
        code: status,
        message,
        status: grpc.status.CANCELLED,
      },
      null
    );
  }
}
