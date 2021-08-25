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

  async createRole(createRoleRequest: CreateRoleRequest): Promise<Role> {
    if (C.useFaker) {
      return this.kartoffelFaker.randomRole();
    } else {
      const data: Role = await this.kartoffelUtils.kartoffelPost(
        `${C.kartoffelUrl}/api/roles`,
        createRoleRequest
      );
      return data;
    }
  }

  async getRolesUnderOGRequest(
    getRolesUnderOGRequest: GetRolesUnderOGRequest
  ): Promise<RoleArray> {
    if (C.useFaker) {
      return this.kartoffelFaker.randomRoleArray();
    } else {
      const data: Role[] = await this.kartoffelUtils.kartoffelGet(
        `${C.kartoffelUrl}/api/roles/group/${getRolesUnderOGRequest.groupId}`,
        getRolesUnderOGRequest
      );
      return { roles: data };
    }
  }

  async deleteRole(
    deleteRoleRequest: DeleteRoleRequest
  ): Promise<SuccessMessage> {
    if (C.useFaker) {
      return { success: true };
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
}
