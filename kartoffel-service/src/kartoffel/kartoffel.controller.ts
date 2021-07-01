import * as grpc from "@grpc/grpc-js";
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
} from "../interfaces/protoc/proto/kartoffelService";
import { KartoffelManager } from "./kartoffel.manager";

const kartoffelManager: KartoffelManager = new KartoffelManager();

export async function searchOG(call: any, callback: any): Promise<void> {
  try {
    const ogArray: OGArray = await kartoffelManager.searchOG(call.request);
    callback(null, ogArray);
  } catch (error) {
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
    const ogTree: OGTree = await kartoffelManager.getOGTree(call.request);
    callback(null, ogTree);
  } catch (error) {
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
    const organizationGroup: OrganizationGroup =
      await kartoffelManager.createOG(call.request);
    callback(null, organizationGroup);
  } catch (error) {
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
    const digitalIdentity: DigitalIdentity = await kartoffelManager.createDI(
      call.request
    );
    callback(null, digitalIdentity);
  } catch (error) {
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
    const createdRole: Role = await kartoffelManager.createRole(call.request);
    callback(null, createdRole);
  } catch (error) {
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
    const successMessage: SuccessMessage =
      await kartoffelManager.connectRoleAndDI(call.request);
    callback(null, successMessage);
  } catch (error) {
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
    const entityArray: EntityArray =
      await kartoffelManager.searchEntitiesByFullName(call.request);
    callback(null, entityArray);
  } catch (error) {
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
    const entity: Entity = await kartoffelManager.getEntityByIdNumber(
      call.request
    );
    callback(null, entity);
  } catch (error) {
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

export async function searchRolesByRoleId(
  call: any,
  callback: any
): Promise<void> {
  try {
    const roles: RoleArray = await kartoffelManager.searchRolesByRoleId(
      call.request
    );
    callback(null, roles);
  } catch (error) {
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
    const roleArray: RoleArray = await kartoffelManager.getRolesUnderOG(
      call.request
    );
    callback(null, roleArray);
  } catch (error) {
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
    const successMessage: SuccessMessage =
      await kartoffelManager.connectEntityAndDI(call.request);
    callback(null, successMessage);
  } catch (error) {
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
    const entity: Entity = await kartoffelManager.createEntity(call.request);
    callback(null, entity);
  } catch (error) {
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
    const entity: Entity = await kartoffelManager.getEntityByRoleId(
      call.request
    );
    callback(null, entity);
  } catch (error) {
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
    const successMessage: SuccessMessage =
      await kartoffelManager.disconnectDIFromEntity(call.request);
    callback(null, successMessage);
  } catch (error) {
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
    const entity: Entity = await kartoffelManager.getEntityByMongoId(
      call.request
    );
    callback(null, entity);
  } catch (error) {
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
    const successMessage: SuccessMessage = await kartoffelManager.deleteOG(
      call.request
    );
    callback(null, successMessage);
  } catch (error) {
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
    const children: OGArray = await kartoffelManager.getChildrenOfOG(
      call.request
    );
    callback(null, children);
  } catch (error) {
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
    const successMessage: SuccessMessage = await kartoffelManager.deleteRole(
      call.request
    );
    callback(null, successMessage);
  } catch (error) {
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
    const successMessage: SuccessMessage = await kartoffelManager.deleteDI(
      call.request
    );
    callback(null, successMessage);
  } catch (error) {
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
    const entityArray: EntityArray = await kartoffelManager.getEntitiesUnderOG(
      call.request
    );
    callback(null, entityArray);
  } catch (error) {
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
