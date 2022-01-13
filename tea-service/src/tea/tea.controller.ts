import {
  Prefix,
  PrefixArray,
  SuccessMessage,
  TeaMessage,
  UPNMessage,
} from '../interfaces/protoc/proto/teaService';
import { TeaManager } from './tea.manager';
import * as grpc from '@grpc/grpc-js';
import { logger } from '../logger';

const teaManager: TeaManager = new TeaManager();

export async function retrieveBrol(call: any, callback: any): Promise<void> {
  try {
    logger.info('Call to retrieveBrol', { request: call.request });
    const upnMessage: UPNMessage = await teaManager.retrieveBrol(call.request);
    logger.info('retrieveBrol OK', {
      response: upnMessage,
      request: call.request,
    });
    callback(null, upnMessage);
  } catch (error: any) {
    logger.error('retrieveBrol ERROR', {
      error: { message: error.message },
      request: call.request,
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

export async function retrieveTeaByPrefix(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info('Call to retrieveTeaByPrefix', { request: call.request });
    const teaMessage: TeaMessage = await teaManager.retrieveTeaByPrefix(
      call.request
    );
    logger.info('retrieveTeaByPrefix OK', {
      response: teaMessage,
      request: call.request,
    });
    callback(null, teaMessage);
  } catch (error: any) {
    logger.error('retrieveTeaByPrefix ERROR', {
      error: { message: error.message },
      request: call.request,
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

export async function retrieveTeaByOGId(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info('Call to retrieveTeaByOGId', { request: call.request });
    const teaMessage: TeaMessage = await teaManager.retrieveTeaByOGId(
      call.request
    );
    logger.info('retrieveTeaByOGId OK', {
      response: teaMessage,
      request: call.request,
    });
    callback(null, teaMessage);
  } catch (error: any) {
    logger.error('retrieveTeaByOGId ERROR', {
      error: { message: error.message },
      request: call.request,
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

export async function retrieveUPNByEntity(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info('Call to retrieveUPNByEntity', { request: call.request });
    const upnMessage: UPNMessage = await teaManager.retrieveUPNByEntity(
      call.request
    );
    logger.info('retrieveUPNByEntity OK', {
      response: upnMessage,
      request: call.request,
    });
    callback(null, upnMessage);
  } catch (error: any) {
    logger.error('retrieveUPNByEntity ERROR', {
      error: { message: error.message },
      request: call.request,
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

export async function retrieveUPNByEntityId(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info('Call to RetrieveUPNByEntityId', { request: call.request });
    const upn: UPNMessage = await teaManager.retrieveUPNByEntityId(
      call.request
    );
    logger.info('RetrieveUPNByEntityId OK', {
      response: upn,
      request: call.request,
    });
    callback(null, upn);
  } catch (error: any) {
    logger.error('RetrieveUPNByEntityId ERROR', {
      error: { message: error.message },
      request: call.request,
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

export async function throwTea(call: any, callback: any): Promise<void> {
  try {
    logger.info('Call to throwTea', { request: call.request });
    const successMessage: SuccessMessage = await teaManager.reportTeaSuccess(
      call.request
    );
    logger.info('throwTea OK', {
      response: successMessage,
      request: call.request,
    });
    callback(null, successMessage);
  } catch (error: any) {
    logger.error('throwTea ERROR', {
      error: { message: error.message },
      request: call.request,
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

export async function reportTeaSuccess(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info('Call to reportTeaSuccess', { request: call.request });
    const successMessage: SuccessMessage = await teaManager.reportTeaSuccess(
      call.request
    );
    logger.info('reportTeaSuccess OK', {
      response: successMessage,
      request: call.request,
    });
    callback(null, successMessage);
  } catch (error: any) {
    logger.error('reportTeaSuccess ERROR', {
      error: { message: error.message },
      request: call.request,
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

export async function reportTeaFail(call: any, callback: any): Promise<void> {
  try {
    logger.info('Call to reportTeaFail', { request: call.request });
    const successMessage: SuccessMessage = await teaManager.reportTeaFail(
      call.request
    );
    logger.info('reportTeaFail OK', {
      response: successMessage,
      request: call.request,
    });
    callback(null, successMessage);
  } catch (error: any) {
    logger.error('reportTeaFail ERROR', {
      error: { message: error.message },
      request: call.request,
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

export async function getAllPrefixes(call: any, callback: any): Promise<void> {
  try {
    logger.info('Call to getAllPrefixes', { request: call.request });
    const prefixes: PrefixArray = await teaManager.getAllPrefixes(call.request);
    logger.info('getAllPrefixes OK', {
      response: prefixes,
      request: call.request,
    });
    callback(null, prefixes);
  } catch (error: any) {
    logger.error('getAllPrefixes ERROR', {
      error: { message: error.message },
      request: call.request,
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

export async function getPrefix(call: any, callback: any): Promise<void> {
  try {
    logger.info('Call to getPrefix', { request: call.request });
    const prefix: Prefix = await teaManager.getPrefix(call.request);
    logger.info('getPrefix OK', {
      response: prefix,
      request: call.request,
    });
    callback(null, prefix);
  } catch (error: any) {
    logger.error('getPrefix ERROR', {
      error: { message: error.message },
      request: call.request,
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

export async function addPrefix(call: any, callback: any): Promise<void> {
  try {
    logger.info('Call to addPrefix', { request: call.request });
    const prefix: Prefix = await teaManager.addPrefix(call.request);
    logger.info('addPrefix OK', {
      response: prefix,
      request: call.request,
    });
    callback(null, prefix);
  } catch (error: any) {
    logger.error('addPrefix ERROR', {
      error: { message: error.message },
      request: call.request,
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

export async function updatePrefix(call: any, callback: any): Promise<void> {
  try {
    logger.info('Call to updatePrefix', { request: call.request });
    const prefix: Prefix = await teaManager.updatePrefix(call.request);
    logger.info('updatePrefix OK', {
      response: prefix,
      request: call.request,
    });
    callback(null, prefix);
  } catch (error: any) {
    logger.error('updatePrefix ERROR', {
      error: { message: error.message },
      request: call.request,
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

export async function deletePrefix(call: any, callback: any): Promise<void> {
  try {
    logger.info('Call to deletePrefix', { request: call.request });
    const successMessage: SuccessMessage = await teaManager.deletePrefix(
      call.request
    );
    logger.info('deletePrefix OK', {
      response: successMessage,
      request: call.request,
    });
    callback(null, successMessage);
  } catch (error: any) {
    logger.error('deletePrefix ERROR', {
      error: { message: error.message },
      request: call.request,
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
