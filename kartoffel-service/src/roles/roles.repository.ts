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

  async getAllRoles(): Promise<Role> {
    if (C.useFaker) {
      return this.kartoffelFaker.randomRole();
    } else {
      const res = await this.kartoffelUtils.kartoffelGet(
        `${C.kartoffelUrl}/roles`
      );
      return res.data as Role;
    }
  }

  async createRole(createRoleRequest: CreateRoleRequest): Promise<Role> {
    if (C.useFaker) {
      return this.kartoffelFaker.randomRole();
    } else {
      const res = await this.kartoffelUtils.kartoffelPost(
        `${C.kartoffelUrl}/roles`,
        createRoleRequest
      );
      return res.data as Role;
    }
  }

  async deleteRole(
    deleteRoleRequest: DeleteRoleRequest
  ): Promise<SuccessMessage> {
    if (C.useFaker) {
      return { success: true };
    } else {
      await this.kartoffelUtils.kartoffelDelete(
        `${C.kartoffelUrl}/roles/${deleteRoleRequest.roleId}`
      );
      return { success: true };
    }
  }

  async getRolesUnderOGRequest(
    getRolesUnderOGRequest: GetRolesUnderOGRequest
  ): Promise<RoleArray> {
    if (C.useFaker) {
      return this.kartoffelFaker.randomRoleArray();
    } else {
      const res = await this.kartoffelUtils.kartoffelGet(
        `${C.kartoffelUrl}/roles/hierarchy/${getRolesUnderOGRequest.id}?direct=${getRolesUnderOGRequest.direct}`
      );
      return { roles: res.data as Role[] };
    }
  }

  async ConnectRoleAndDIRequest(
    connectRoleAndDIRequest: ConnectRoleAndDIRequest
  ): Promise<Role> {
    if (C.useFaker) {
      return this.kartoffelFaker.randomRole();
    } else {
      const res = await this.kartoffelUtils.kartoffelPatch(
        `${C.kartoffelUrl}/roles/${connectRoleAndDIRequest.id}/digitalIdentity/${connectRoleAndDIRequest.uniqueId}`,
        ConnectRoleAndDIRequest
      );
      return res.data as Role;
    }
  }

  async connectRoleAndDI(
    connectRoleAndDIRequest: ConnectRoleAndDIRequest
  ): Promise<SuccessMessage> {
    if (C.useFaker) {
      return { success: true };
    } else {
      await this.kartoffelUtils.kartoffelPatch(
        `${C.kartoffelUrl}/roles/${connectRoleAndDIRequest.id}/connectDigitalIdentity`,
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
      const res = await this.kartoffelUtils.kartoffelGet(
        `${C.kartoffelUrl}/roles/search?roleId=${getRoleByRoleIdRequest.roleId}`
      );
      return res.data as Role;
    }
  }

  async disconnectRoleAndDI(
    disconnectRoleAndDIRequest: DisconnectRoleAndDIRequest
  ): Promise<SuccessMessage> {
    if (C.useFaker) {
      return { success: true };
    } else {
      const res = await this.kartoffelUtils.kartoffelDelete(
        `${C.kartoffelUrl}/roles/${disconnectRoleAndDIRequest.roleId}/digitalIdentity/${disconnectRoleAndDIRequest.uniqueId}`
      );
      return res.data as SuccessMessage;
    }
  }

  async updateRole(
    updateRoleRequest: UpdateRoleRequest
  ): Promise<SuccessMessage> {
    try {
      if (C.useFaker) {
        return { success: true };
      } else {
        const res = await this.kartoffelUtils.kartoffelPatch(
          `${C.kartoffelUrl}/roles/${updateRoleRequest.roleId}`,
          updateRoleRequest
        );
        return res.data as SuccessMessage;
      }
    } catch (error) {
      throw error;
    }
  }
}
