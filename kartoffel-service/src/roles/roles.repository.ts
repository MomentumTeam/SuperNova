import {
  CreateRoleRequest,
  DeleteRoleRequest,
  ConnectRoleAndDIRequest,
  GetRoleByRoleIdRequest,
  GetRolesUnderOGRequest,
  Role,
  RoleArray,
  SuccessMessage,
  RenameRoleRequest,
  DisconnectRoleAndDIRequest,
  GetAllRolesRequest,
  GetRoleByDIRequest,
  GetRolesByHierarchyRequest,
  ChangeRoleOGRequest,
} from '../interfaces/protoc/proto/kartoffelService';
import { KartoffelFaker } from '../mock/kartoffel.faker';
import { KartoffelUtils } from '../utils/kartoffel.utils';
import * as C from '../config';

export class RolesRepository {
  private kartoffelFaker: KartoffelFaker;
  private kartoffelUtils: KartoffelUtils;
  constructor(kartoffelUtils: KartoffelUtils, kartoffelFaker: KartoffelFaker) {
    this.kartoffelFaker = kartoffelFaker;
    this.kartoffelUtils = kartoffelUtils;
  }

  async getAllRoles(
    getAllRolesRequest: GetAllRolesRequest
  ): Promise<RoleArray> {
    if (C.useFaker) {
      return this.kartoffelFaker.randomRoleArray();
    } else {
      const roles: RoleArray = await this.kartoffelUtils.kartoffelGet(
        `${C.kartoffelUrl}/api/roles`,
        getAllRolesRequest
      );
      return roles;
    }
  }

  async createRole(createRoleRequest: CreateRoleRequest): Promise<Role> {
    if (C.useFaker) {
      return this.kartoffelFaker.randomRole();
    } else {
      const role: Role = await this.kartoffelUtils.kartoffelPost(
        `${C.kartoffelUrl}/api/roles`,
        createRoleRequest
      );
      return role;
    }
  }

  async getRolesUnderOGRequest(
    getRolesUnderOGRequest: GetRolesUnderOGRequest
  ): Promise<RoleArray> {
    if (C.useFaker) {
      return this.kartoffelFaker.randomRoleArray();
    } else {
      const roles: Role[] = await this.kartoffelUtils.kartoffelGet(
        `${C.kartoffelUrl}/api/roles/group/${getRolesUnderOGRequest.groupId}`,
        getRolesUnderOGRequest
      );
      return { roles: roles };
    }
  }

  async deleteRole(deleteRoleRequest: DeleteRoleRequest): Promise<Role> {
    if (C.useFaker) {
      return this.kartoffelFaker.randomRole();
    } else {
      return this.kartoffelUtils.kartoffelDelete(
        `${C.kartoffelUrl}/api/roles/${deleteRoleRequest.roleId}`
      );
    }
  }

  async ConnectRoleAndDI(
    connectRoleAndDIRequest: ConnectRoleAndDIRequest
  ): Promise<SuccessMessage> {
    if (C.useFaker) {
      return { success: true };
    } else {
      const data: SuccessMessage = await this.kartoffelUtils.kartoffelPut(
        `${C.kartoffelUrl}/api/roles/${connectRoleAndDIRequest.id}/digitalIdentity/${connectRoleAndDIRequest.uniqueId}`,
        ConnectRoleAndDIRequest
      );
      return data;
    }
  }

  async getRoleByRoleId(
    getRoleByRoleIdRequest: GetRoleByRoleIdRequest
  ): Promise<Role> {
    if (C.useFaker) {
      return this.kartoffelFaker.randomRole();
    } else {
      const data: Role = await this.kartoffelUtils.kartoffelGet(
        `${C.kartoffelUrl}/api/roles/${getRoleByRoleIdRequest.roleId}`
      );
      return data;
    }
  }

  async disconnectRoleAndDI(
    disconnectRoleAndDIRequest: DisconnectRoleAndDIRequest
  ): Promise<SuccessMessage> {
    if (C.useFaker) {
      return { success: true };
    } else {
      const data: SuccessMessage = await this.kartoffelUtils.kartoffelDelete(
        `${C.kartoffelUrl}/api/roles/${disconnectRoleAndDIRequest.roleId}/digitalIdentity/${disconnectRoleAndDIRequest.uniqueId}`
      );
      return data;
    }
  }

  async renameRole(RenameRoleRequest: RenameRoleRequest): Promise<Role> {
    if (C.useFaker) {
      return this.kartoffelFaker.randomRole();
    } else {
      const data: Role = await this.kartoffelUtils.kartoffelPatch(
        `${C.kartoffelUrl}/api/roles/${RenameRoleRequest.roleId}`,
        RenameRoleRequest
      );
      return data;
    }
  }

  async getRoleByDI(getRoleByDIRequest: GetRoleByDIRequest): Promise<Role> {
    if (C.useFaker) {
      return this.kartoffelFaker.randomRole();
    } else {
      const data: Role = await this.kartoffelUtils.kartoffelGet(
        `${C.kartoffelUrl}/api/roles/digitalIdentity/${getRoleByDIRequest.uniqueId}`,
        getRoleByDIRequest
      );
      return data;
    }
  }

  async getRolesByHierarchy(
    getRolesByHierarchy: GetRolesByHierarchyRequest
  ): Promise<Role> {
    if (C.useFaker) {
      return this.kartoffelFaker.randomRole();
    } else {
      const data: Role = await this.kartoffelUtils.kartoffelGet(
        `${C.kartoffelUrl}/api/roles/hierarchy/${getRolesByHierarchy.hierarchy}`,
        getRolesByHierarchy
      );
      return data;
    }
  }

    async changeRoleHierarchy(
    changeRoleHierarchy: ChangeRoleHierarchyRequest
  ): Promise<Role> {
    if (C.useFaker) {
      return this.kartoffelFaker.randomRole();
    } else {
      const data: Role = await this.kartoffelUtils.kartoffelPatch(
          `${C.kartoffelUrl}/api/roles/${changeRoleHierarchy.roleId}/moveToGroup`,
          changeRoleHierarchy
      );
      return data;
    }
  }

  async changeRoleOG(changeRoleOGRequest: ChangeRoleOGRequest): Promise<Role> {
    if (C.useFaker) {
      return this.kartoffelFaker.randomRole();
    } else {
      const data: Role = await this.kartoffelUtils.kartoffelPut(
        `${C.kartoffelUrl}/api/roles/${changeRoleOGRequest.roleId}/group/${changeRoleOGRequest.groupId}`,
        changeRoleOGRequest
      );
      return data;
    }
  }
}
