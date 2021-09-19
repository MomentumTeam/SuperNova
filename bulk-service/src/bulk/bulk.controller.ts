import { BulkManager } from './bulk.manager';
import * as grpc from 'grpc';
import {
  ChangeRoleHierarchyBulkRes,
  CreateRoleBulkRes,
  Request,
} from '../interfaces/protoc/proto/requestService';
import { logger } from '../logger';
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
