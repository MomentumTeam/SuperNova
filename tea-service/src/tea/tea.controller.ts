import {
  MinUnitArray,
  SuccessMessage,
  TeaMessage,
  Unit,
  UPNMessage,
} from '../interfaces/protoc/proto/teaService';
import { TeaManager } from './tea.manager';
import * as grpc from 'grpc';
import { logger } from '../logger';

const teaManager: TeaManager = new TeaManager();

export async function retrieveTeaByUnit(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info('Call to retrieveTeaByUnit', { request: call.request });
    const teaMessage: TeaMessage = await teaManager.retrieveTeaByUnit(
      call.request
    );
    logger.info('retrieveTeaByUnit OK', {
      response: teaMessage,
      request: call.request,
    });
    callback(null, teaMessage);
  } catch (error: any) {
    logger.error('retrieveTeaByUnit ERROR', {
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

export async function getAllUnits(call: any, callback: any): Promise<void> {
  try {
    logger.info('Call to getAllUnits', { request: call.request });
    const units: MinUnitArray = await teaManager.getAllUnits(call.request);
    logger.info('getAllUnits OK', {
      response: units,
      request: call.request,
    });
    callback(null, units);
  } catch (error: any) {
    logger.error('getAllUnits ERROR', {
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

export async function searchUnit(call: any, callback: any): Promise<void> {
  try {
    logger.info('Call to searchUnit', { request: call.request });
    const units: MinUnitArray = await teaManager.searchUnit(call.request);
    logger.info('searchUnit OK', {
      response: units,
      request: call.request,
    });
    callback(null, units);
  } catch (error: any) {
    logger.error('searchUnit ERROR', {
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

export async function getUnit(call: any, callback: any): Promise<void> {
  try {
    logger.info('Call to getUnit', { request: call.request });
    const unit: Unit = await teaManager.getUnit(call.request);
    logger.info('getUnit OK', {
      response: unit,
      request: call.request,
    });
    callback(null, unit);
  } catch (error: any) {
    logger.error('getUnit ERROR', {
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

export async function addUnit(call: any, callback: any): Promise<void> {
  try {
    logger.info('Call to addUnit', { request: call.request });
    const unit: Unit = await teaManager.addUnit(call.request);
    logger.info('addUnit OK', {
      response: unit,
      request: call.request,
    });
    callback(null, unit);
  } catch (error: any) {
    logger.error('addUnit ERROR', {
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

export async function updateUnit(call: any, callback: any): Promise<void> {
  try {
    logger.info('Call to updateUnit', { request: call.request });
    const unit: Unit = await teaManager.updateUnit(call.request);
    logger.info('updateUnit OK', {
      response: unit,
      request: call.request,
    });
    callback(null, unit);
  } catch (error: any) {
    logger.error('updateUnit ERROR', {
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

export async function deleteUnit(call: any, callback: any): Promise<void> {
  try {
    logger.info('Call to deleteUnit', { request: call.request });
    const successMessage: SuccessMessage = await teaManager.deleteUnit(
      call.request
    );
    logger.info('deleteUnit OK', {
      response: successMessage,
      request: call.request,
    });
    callback(null, successMessage);
  } catch (error: any) {
    logger.error('deleteUnit ERROR', {
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
