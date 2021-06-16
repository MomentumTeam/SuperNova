import * as grpc from "@grpc/grpc-js";
import { IDigitalIdentity } from "../interfaces/kartoffelTypes/digitalIdentity.interface";
import { IEntity } from "../interfaces/kartoffelTypes/entity.interface";
import { IEntityArray } from "../interfaces/kartoffelTypes/entityArray.interface";
import { IOGArray } from "../interfaces/kartoffelTypes/ogArray.interface";
import { IOrganizationGroup } from "../interfaces/kartoffelTypes/organizationGroup.interface";
import { IRole } from "../interfaces/kartoffelTypes/role.interface";
import { IRoleArray } from "../interfaces/kartoffelTypes/roleArray.interface";
import { ISuccessMessage } from "../interfaces/kartoffelTypes/successMessage.interface";
import { ISearchOGRequest } from "../interfaces/searchOG/searchOGRequest.interface";
import { KartoffelManager } from "./kartoffel.manager";

const kartoffelManager: KartoffelManager = new KartoffelManager();

export async function searchOG(call: any, callback: any): Promise<void> {
  try {
    const ogArray: IOGArray = await kartoffelManager.searchOG(call.request);
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

export async function createOG(call: any, callback: any): Promise<void> {
  try {
    const organizationGroup: IOrganizationGroup =
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
    const digitalIdentity: IDigitalIdentity = await kartoffelManager.createDI(
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
    const createdRole: IRole = await kartoffelManager.createRole(call.request);
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
    const successMessage: ISuccessMessage =
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
    const entityArray: IEntityArray =
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
    const entity: IEntity = await kartoffelManager.getEntityByIdNumber(
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
    const roles: IRoleArray = await kartoffelManager.searchRolesByRoleId(
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
    const roleArray: IRoleArray = await kartoffelManager.getRolesUnderOG(
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
    const successMessage: ISuccessMessage =
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
    const entity: IEntity = await kartoffelManager.createEntity(call.request);
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
    const entity: IEntity = await kartoffelManager.getEntityByRoleId(
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
    const successMessage: ISuccessMessage =
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
    const entity: IEntity = await kartoffelManager.getEntityByMongoId(
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
    const successMessage: ISuccessMessage = await kartoffelManager.deleteOG(
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
    const children: IOGArray = await kartoffelManager.getChildrenOfOG(
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
    const successMessage: ISuccessMessage = await kartoffelManager.deleteRole(
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
    const successMessage: ISuccessMessage = await kartoffelManager.deleteDI(
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
    const entityArray: IEntityArray = await kartoffelManager.getEntitiesUnderOG(
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
