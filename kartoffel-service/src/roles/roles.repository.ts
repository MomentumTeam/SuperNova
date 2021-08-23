import {
  CreateRoleRequest,
  DeleteRoleRequest,
  ConnectRoleAndDIRequest,
  GetRoleByRoleIdRequest,
  GetRolesUnderOGRequest,
  Role,
  RoleArray,
  SuccessMessage,
  UpdateRoleRequest,
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

  async getAllRoles(): Promise<RoleArray> {
    if (C.useFaker) {
      return this.kartoffelFaker.randomRoleArray();
    } else {
      const data = await this.kartoffelUtils.kartoffelGet(
        `${C.kartoffelUrl}/api/roles`
      );
      return data as RoleArray;
    }
  }

  async createRole(createRoleRequest: CreateRoleRequest): Promise<Role> {
    if (C.useFaker) {
      return this.kartoffelFaker.randomRole();
    } else {
      const data = await this.kartoffelUtils.kartoffelPost(
        `${C.kartoffelUrl}/api/roles`,
        createRoleRequest
      );
      return data as Role;
    }
  }

  async getRolesUnderOGRequest(
    getRolesUnderOGRequest: GetRolesUnderOGRequest
  ): Promise<RoleArray> {
    if (C.useFaker) {
      return this.kartoffelFaker.randomRoleArray();
    } else {
      const data = await this.kartoffelUtils.kartoffelGet(
        `${C.kartoffelUrl}/api/roles/group/${getRolesUnderOGRequest.id}`
      );
      return { roles: data as Role[] };
    }
  }

  async deleteRole(
    deleteRoleRequest: DeleteRoleRequest
  ): Promise<SuccessMessage> {
    if (C.useFaker) {
      return { success: true };
    } else {
      const data = await this.kartoffelUtils.kartoffelDelete(
        `${C.kartoffelUrl}/api/roles/${deleteRoleRequest.roleId}`
      );
      return { success: true };
    }
  }

  async ConnectRoleAndDIRequest(
    connectRoleAndDIRequest: ConnectRoleAndDIRequest
  ): Promise<Role> {
    if (C.useFaker) {
      return this.kartoffelFaker.randomRole();
    } else {
      const data = await this.kartoffelUtils.kartoffelPatch(
        `${C.kartoffelUrl}/api/roles/${connectRoleAndDIRequest.id}/digitalIdentity/${connectRoleAndDIRequest.uniqueId}`,
        ConnectRoleAndDIRequest
      );
      return data as Role;
    }
  }

  async connectRoleAndDI(
    connectRoleAndDIRequest: ConnectRoleAndDIRequest
  ): Promise<SuccessMessage> {
    if (C.useFaker) {
      return { success: true };
    } else {
      await this.kartoffelUtils.kartoffelPatch(
        `${C.kartoffelUrl}/api/roles/${connectRoleAndDIRequest.id}/connectDigitalIdentity`,
        {
          digitalIdentityUniqueId: connectRoleAndDIRequest.uniqueId,
        }
      );
      return { success: true };
    }
  }

  async getRoleByRoleId(
    getRoleByRoleIdRequest: GetRoleByRoleIdRequest
  ): Promise<Role> {
    if (C.useFaker) {
      return this.kartoffelFaker.randomRole();
    } else {
      const data = await this.kartoffelUtils.kartoffelGet(
        `${C.kartoffelUrl}/api/roles/${getRoleByRoleIdRequest.roleId}`
      );
      return data as Role;
    }
  }

  async disconnectRoleAndDI(
    disconnectRoleAndDIRequest: DisconnectRoleAndDIRequest
  ): Promise<SuccessMessage> {
    if (C.useFaker) {
      return { success: true };
    } else {
      const data = await this.kartoffelUtils.kartoffelDelete(
        `${C.kartoffelUrl}/api/roles/${disconnectRoleAndDIRequest.roleId}/digitalIdentity/${disconnectRoleAndDIRequest.uniqueId}`
      );
      return data as SuccessMessage;
    }
  }

  async updateRole(
    updateRoleRequest: UpdateRoleRequest
  ): Promise<SuccessMessage> {
    if (C.useFaker) {
      return { success: true };
    } else {
      const data = await this.kartoffelUtils.kartoffelPatch(
        `${C.kartoffelUrl}/api/roles/${updateRoleRequest.roleId}`,
        updateRoleRequest
      );
      return data as SuccessMessage;
    }
  }
}
