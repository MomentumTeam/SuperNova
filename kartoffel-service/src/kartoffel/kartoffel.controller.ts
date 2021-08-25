import * as grpc from 'grpc';
import {
  OGArray,
  OrganizationGroup,
  DigitalIdentity,
  Role,
  SuccessMessage,
  EntityArray,
  Entity,
  RoleArray,
  OGTree,
  Image,
} from '../interfaces/protoc/proto/kartoffelService';
import { logger } from '../logger';
import { KartoffelManager } from './kartoffel.manager';

const kartoffelManager: KartoffelManager = new KartoffelManager();

export async function searchOG(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to searchOG`, { callRequest: call.request });
    const ogArray: OGArray = await kartoffelManager.searchOG(call.request);
    logger.info(`searchOG OK`, {
      callRequest: call.request,
      response: ogArray,
    });
    callback(null, ogArray);
  } catch (error) {
    logger.error(`searchOG ERROR`, {
      callRequest: call.request,
      error: error.message,
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

export async function getOGTree(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to getOGTree`, { callRequest: call.request });
    const ogTree: OGTree = await kartoffelManager.getOGTree(call.request);
    logger.info(`getOGTree OK`, {
      callRequest: call.request,
      response: ogTree,
    });
    callback(null, ogTree);
  } catch (error) {
    logger.error(`getOGTree ERROR`, {
      callRequest: call.request,
      error: error.message,
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

export async function createOG(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to createOG`, { callRequest: call.request });
    const organizationGroup: OrganizationGroup =
      await kartoffelManager.createOG(call.request);
    logger.info(`createOG OK`, {
      callRequest: call.request,
      response: organizationGroup,
    });
    callback(null, organizationGroup);
  } catch (error) {
    logger.error(`createOG ERROR`, {
      callRequest: call.request,
      error: error.message,
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

export async function createDI(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to createDI`, { callRequest: call.request });
    const digitalIdentity: DigitalIdentity = await kartoffelManager.createDI(
      call.request
    );
    logger.info(`createDI OK`, {
      callRequest: call.request,
      response: digitalIdentity,
    });
    callback(null, digitalIdentity);
  } catch (error) {
    logger.info(`createDI ERROR`, {
      callRequest: call.request,
      error: error,
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
    const createdRole: Role = await kartoffelManager.createRole(call.request);
    logger.info(`createRole OK`, {
      callRequest: call.request,
      response: createdRole,
    });
    callback(null, createdRole);
  } catch (error) {
    logger.error(`createRole OK`, {
      callRequest: call.request,
      error: error.message,
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
    const successMessage: SuccessMessage =
      await kartoffelManager.connectRoleAndDI(call.request);
    logger.info(`connectRoleAndDI OK`, {
      callRequest: call.request,
      response: successMessage,
    });
    callback(null, successMessage);
  } catch (error) {
    logger.error(`connectRoleAndDI ERROR`, {
      callRequest: call.request,
      error: error.message,
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
    const role: Role = await kartoffelManager.getRoleByRoleId(call.request);
    logger.info(`getRoleByRoleId OK`, {
      callRequest: call.request,
      response: role,
    });
    callback(null, role);
  } catch (error) {
    logger.error(`getRoleByRoleId ERROR`, {
      callRequest: call.request,
      error: error.message,
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
    const roleArray: RoleArray = await kartoffelManager.getRolesUnderOG(
      call.request
    );
    logger.info(`getRolesUnderOG OK`, {
      callRequest: call.request,
      response: roleArray,
    });
    callback(null, roleArray);
  } catch (error) {
    logger.error(`getRolesUnderOG ERROR`, {
      callRequest: call.request,
      error: error.message,
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

export async function deleteOG(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to deleteOG`, { callRequest: call.request });
    const successMessage: SuccessMessage = await kartoffelManager.deleteOG(
      call.request
    );
    logger.info(`getOGTree OK`, {
      callRequest: call.request,
      response: successMessage,
    });
    callback(null, successMessage);
  } catch (error) {
    logger.error(`getOGTree ERROR`, {
      callRequest: call.request,
      error: error.message,
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

export async function getChildrenOfOG(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to getChildrenOfOG`, { callRequest: call.request });
    const children: OGArray = await kartoffelManager.getChildrenOfOG(
      call.request
    );
    logger.info(`getChildrenOfOG OK`, {
      callRequest: call.request,
      response: children,
    });
    callback(null, children);
  } catch (error) {
    logger.error(`getChildrenOfOG ERROR`, {
      callRequest: call.request,
      error: error.message,
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
    const successMessage: SuccessMessage = await kartoffelManager.deleteRole(
      call.request
    );
    logger.info(`deleteRole OK`, {
      callRequest: call.request,
      response: successMessage,
    });
    callback(null, successMessage);
  } catch (error) {
    logger.error(`deleteRole ERROR`, {
      callRequest: call.request,
      error: error.message,
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

export async function deleteDI(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to deleteDI`, { callRequest: call.request });
    const successMessage: SuccessMessage = await kartoffelManager.deleteDI(
      call.request
    );
    logger.info(`deleteDI OK`, {
      callRequest: call.request,
      response: successMessage,
    });
    callback(null, successMessage);
  } catch (error) {
    logger.info(`deleteDI ERROR`, {
      callRequest: call.request,
      error: error,
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
