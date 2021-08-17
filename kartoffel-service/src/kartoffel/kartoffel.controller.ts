import * as grpc from '@grpc/grpc-js';
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

export async function getPictureByEntityId(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to getPictureByEntityId`, { callRequest: call.request });
    const image: Image = await kartoffelManager.getPictureByEntityId(
      call.request
    );
    logger.info(`getPictureByEntityId OK`, {
      callRequest: call.request,
      response: image,
    });
    callback(null, image);
  } catch (error) {
    logger.error(`getPictureByEntityId ERROR`, {
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

export async function searchEntitiesByFullName(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to searchEntitiesByFullName`, {
      callRequest: call.request,
    });
    const entityArray: EntityArray =
      await kartoffelManager.searchEntitiesByFullName(call.request);
    logger.info(`searchEntitiesByFullName OK`, {
      callRequest: call.request,
      response: entityArray,
    });
    callback(null, entityArray);
  } catch (error) {
    logger.error(`searchEntitiesByFullName ERROR`, {
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

export async function getEntityByIdNumber(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to getEntityByIdNumber`, { callRequest: call.request });
    const entity: Entity = await kartoffelManager.getEntityByIdNumber(
      call.request
    );
    logger.info(`getEntityByIdNumber OK`, {
      callRequest: call.request,
      response: entity,
    });
    callback(null, entity);
  } catch (error) {
    logger.error(`getEntityByIdNumber ERROR`, {
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

export async function connectEntityAndDI(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to connectEntityAndDI`, { callRequest: call.request });
    const successMessage: SuccessMessage =
      await kartoffelManager.connectEntityAndDI(call.request);
    logger.info(`connectEntityAndDI OK`, {
      callRequest: call.request,
      response: successMessage,
    });
    callback(null, successMessage);
  } catch (error) {
    logger.error(`connectEntityAndDI ERROR`, {
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

export async function createEntity(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to createEntity`, { callRequest: call.request });
    const entity: Entity = await kartoffelManager.createEntity(call.request);
    logger.info(`createEntity OK`, {
      callRequest: call.request,
      response: entity,
    });
    callback(null, entity);
  } catch (error) {
    logger.error(`createEntity ERROR`, {
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

export async function getEntityByRoleId(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to getEntityByRoleId`, { callRequest: call.request });
    const entity: Entity = await kartoffelManager.getEntityByRoleId(
      call.request
    );
    logger.info(`getEntityByRoleId OK`, {
      callRequest: call.request,
      response: entity,
    });
    callback(null, entity);
  } catch (error) {
    logger.error(`getEntityByRoleId ERROR`, {
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

export async function disconnectDIFromEntity(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to disconnectDIFromEntity`, {
      callRequest: call.request,
    });
    const successMessage: SuccessMessage =
      await kartoffelManager.disconnectDIFromEntity(call.request);
    logger.info(`disconnectDIFromEntity OK`, {
      callRequest: call.request,
      response: successMessage,
    });
    callback(null, successMessage);
  } catch (error) {
    logger.error(`disconnectDIFromEntity OK`, {
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

export async function getEntityByMongoId(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to getEntityByMongoId`, { callRequest: call.request });
    const entity: Entity = await kartoffelManager.getEntityByMongoId(
      call.request
    );
    logger.info(`getEntityByMongoId OK`, {
      callRequest: call.request,
      response: entity,
    });
    callback(null, entity);
  } catch (error) {
    logger.error(`getEntityByMongoId ERROR`, {
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

export async function getEntitiesUnderOG(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to getEntitiesUnderOG`, { callRequest: call.request });
    const entityArray: EntityArray = await kartoffelManager.getEntitiesUnderOG(
      call.request
    );
    logger.info(`getEntitiesUnderOG OK`, {
      callRequest: call.request,
      response: entityArray,
    });
    callback(null, entityArray);
  } catch (error) {
    logger.error(`getEntitiesUnderOG ERROR`, {
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
