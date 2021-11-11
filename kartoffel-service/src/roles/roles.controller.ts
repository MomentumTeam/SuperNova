import * as grpc from '@grpc/grpc-js';
import {
  IsJobTitleAlreadyTakenRes,
  IsRoleAlreadyTakenRes,
  Role,
  RoleArray,
  SuccessMessage,
} from '../interfaces/protoc/proto/kartoffelService';
import { logger } from '../logger';
import { KartoffelFaker } from '../mock/kartoffel.faker';
import { KartoffelUtils } from '../utils/kartoffel.utils';
import { RolesManager } from './roles.manager';

const kartoffelFaker: KartoffelFaker = new KartoffelFaker();
const kartoffelUtils: KartoffelUtils = new KartoffelUtils();

const rolesManager: RolesManager = new RolesManager(
  kartoffelUtils,
  kartoffelFaker
);

export async function getAllRoles(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to getAllRoles`, { callRequest: call.request });
    const roles: RoleArray = await rolesManager.getAllRoles(call.request);
    logger.info(`getAllRoles OK`, {
      callRequest: call.request,
      response: roles,
    });
    callback(null, { roles: roles });
  } catch (error: any) {
    logger.error(`getAllRoles ERROR`, {
      callRequest: call.request,
      error: { message: error.message },
    });
    callback(
      {
        code: 400,
        error: error.message,
        status: grpc.status.CANCELLED,
      },
      null
    );
  }
}

export async function isJobTitleAlreadyTaken(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to isJobTitleAlreadyTaken`, {
      callRequest: call.request,
    });
    const res: IsJobTitleAlreadyTakenRes =
      await rolesManager.isJobTitleAlreadyTaken(call.request);
    logger.info(`isJobTitleAlreadyTaken OK`, {
      callRequest: call.request,
      res: res,
    });
    callback(null, res);
  } catch (error: any) {
    logger.error(`isJobTitleAlreadyTaken ERROR`, {
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

export async function isRoleAlreadyTaken(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to isRoleAlreadyTaken`, {
      callRequest: call.request,
    });
    const res: IsRoleAlreadyTakenRes = await rolesManager.isRoleAlreadyTaken(
      call.request
    );
    logger.info(`isRoleAlreadyTaken OK`, {
      callRequest: call.request,
      res: res,
    });
    callback(null, res);
  } catch (error: any) {
    logger.error(`isRoleAlreadyTaken ERROR`, {
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

export async function createRole(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to createRole`, { callRequest: call.request });
    const createdRole: Role = await rolesManager.createRole(call.request);
    logger.info(`createRole OK`, {
      callRequest: call.request,
      response: createdRole,
    });
    callback(null, createdRole);
  } catch (error: any) {
    logger.error(`createRole OK`, {
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

export async function connectRoleAndDI(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to connectRoleAndDI`, { callRequest: call.request });
    const successMessage: SuccessMessage = await rolesManager.connectRoleAndDI(
      call.request
    );
    logger.info(`connectRoleAndDI OK`, {
      callRequest: call.request,
      response: successMessage,
    });
    callback(null, successMessage);
  } catch (error: any) {
    logger.error(`connectRoleAndDI ERROR`, {
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

export async function disconnectRoleAndDI(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to disconnectRoleAndDI`, { callRequest: call.request });
    const successMessage: SuccessMessage =
      await rolesManager.disconnectRoleAndDI(call.request);
    logger.info(`disconnectRoleAndDI OK`, {
      callRequest: call.request,
      response: successMessage,
    });
    callback(null, successMessage);
  } catch (error: any) {
    logger.error(`disconnectRoleAndDI ERROR`, {
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

export async function deleteRole(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to deleteRole`, { callRequest: call.request });
    const role: Role = await rolesManager.deleteRole(call.request);
    logger.info(`deleteRole OK`, {
      callRequest: call.request,
      response: { success: true },
    });
    callback(null, role);
  } catch (error: any) {
    logger.error(`deleteRole ERROR`, {
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

export async function getRoleByRoleId(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to getRoleByRoleId`, { callRequest: call.request });
    const role: Role = await rolesManager.getRoleByRoleId(call.request);
    logger.info(`getRoleByRoleId OK`, {
      callRequest: call.request,
      response: role,
    });
    callback(null, role);
  } catch (error: any) {
    logger.error(`getRoleByRoleId ERROR`, {
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

export async function getRolesByHierarchy(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to getRolesByHierarchy`, { callRequest: call.request });
    const role: Role = await rolesManager.getRolesByHierarchy(call.request);
    logger.info(`getRolesByHierarchy OK`, {
      callRequest: call.request,
      response: { success: true },
    });
    callback(null, { success: true });
  } catch (error: any) {
    logger.error(`getRolesByHierarchy ERROR`, {
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

export async function changeRoleOG(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to changeRoleOG`, { callRequest: call.request });
    const role: Role = await rolesManager.changeRoleOG(call.request);
    logger.info(`changeRoleOG OK`, {
      callRequest: call.request,
      response: { success: true },
    });
    callback(null, { success: true });
  } catch (error: any) {
    logger.error(`changeRoleOG ERROR`, {
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

export async function getRolesUnderOG(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to getRolesUnderOG`, { callRequest: call.request });
    const roleArray: RoleArray = await rolesManager.getRolesUnderOG(
      call.request
    );
    logger.info(`getRolesUnderOG OK`, {
      callRequest: call.request,
      response: roleArray,
    });
    callback(null, roleArray);
  } catch (error: any) {
    logger.error(`getRolesUnderOG ERROR`, {
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

export async function renameRole(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to renameRole`, { callRequest: call.request });
    const role: Role = await rolesManager.renameRole(call.request);
    logger.info(`renameRole OK`, {
      callRequest: call.request,
      response: { success: true },
    });
    callback(null, { success: true });
  } catch (error: any) {
    logger.error(`renameRole ERROR`, {
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
