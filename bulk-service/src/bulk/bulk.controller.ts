import { BulkManager } from './bulk.manager';
import * as grpc from '@grpc/grpc-js';
import {
  ChangeRoleHierarchyBulkRes,
  CreateRoleBulkRes,
} from '../interfaces/protoc/proto/requestService';
import { logger } from '../logger';
import {
  DetailedChangeRoleHierarchyBulkRequest,
  DetailedCreateRoleBulkRequest,
  GetBulkRequestExampleRes,
  IsBulkFileValidRes,
} from '../interfaces/protoc/proto/bulkService';
const bulkManager: BulkManager = new BulkManager();

export async function createRoleBulkRequest(call: any, callback: any) {
  try {
    logger.info(`Call to createRoleBulkRequest`, {
      callRequest: call.request,
    });
    const request: CreateRoleBulkRes = await bulkManager.createRoleBulkRequest(
      call.request
    );
    logger.info(`createRoleBulkRequest OK`, {
      callRequest: call.request,
      request: request,
    });
    callback(null, request);
  } catch (error: any) {
    logger.info(`createRoleBulkRequest ERROR`, {
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

export async function isBulkFileValid(call: any, callback: any) {
  try {
    logger.info(`Call to isBulkFileValid`, {
      callRequest: call.request,
    });
    const isBulkFileValidRes: IsBulkFileValidRes =
      await bulkManager.isBulkFileValid(call.request);
    logger.info(`isBulkFileValid OK`, {
      callRequest: call.request,
      isBulkFileValidRes: isBulkFileValidRes,
    });
    callback(null, isBulkFileValidRes);
  } catch (error: any) {
    logger.info(`isBulkFileValid ERROR`, {
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

export async function changeRoleHierarchyBulkRequest(call: any, callback: any) {
  try {
    logger.info(`Call to changeRoleHierarchyBulkRequest`, {
      callRequest: call.request,
    });
    const request: ChangeRoleHierarchyBulkRes =
      await bulkManager.changeRoleHierarchyBulkRequest(call.request);
    logger.info(`changeRoleHierarchyBulkRequest OK`, {
      callRequest: call.request,
      request: request,
    });
    callback(null, request);
  } catch (error: any) {
    logger.info(`changeRoleHierarchyBulkRequest ERROR`, {
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

export async function getBulkRequestExample(call: any, callback: any) {
  try {
    logger.info(`Call to getBulkRequestExample`, {
      callRequest: call.request,
    });
    const request: GetBulkRequestExampleRes =
      await bulkManager.getBulkRequestExample(call.request);
    logger.info(`getBulkRequestExample OK`, {
      callRequest: call.request,
      request: request,
    });
    callback(null, request);
  } catch (error: any) {
    logger.info(`getBulkRequestExample ERROR`, {
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

export async function getCreateRoleBulkRequestById(call: any, callback: any) {
  try {
    logger.info(`Call to getCreateRoleBulkRequestById`, {
      callRequest: call.request,
    });
    const request: DetailedCreateRoleBulkRequest =
      await bulkManager.getCreateRoleBulkRequestById(call.request);
    logger.info(`getCreateRoleBulkRequestById OK`, {
      callRequest: call.request,
      request: request,
    });
    callback(null, request);
  } catch (error: any) {
    logger.info(`getCreateRoleBulkRequestById ERROR`, {
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

export async function getChangeRoleHierarchyBulkRequestById(
  call: any,
  callback: any
) {
  try {
    logger.info(`Call to getChangeRoleHierarchyBulkRequestById`, {
      callRequest: call.request,
    });
    const request: DetailedChangeRoleHierarchyBulkRequest =
      await bulkManager.getChangeRoleHierarchyBulkRequestById(call.request);
    logger.info(`getChangeRoleHierarchyBulkRequestById OK`, {
      callRequest: call.request,
      request: request,
    });
    callback(null, request);
  } catch (error: any) {
    logger.info(`getChangeRoleHierarchyBulkRequestById ERROR`, {
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
