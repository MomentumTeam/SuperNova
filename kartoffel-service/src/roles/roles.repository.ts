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
    try {
      if (C.useFaker) {
        return this.kartoffelFaker.randomRole();
      } else {
        const res = await this.kartoffelUtils.kartoffelGet(
          `${C.kartoffelUrl}/roles`
        );
        return res.data as Role;
      }
    } catch (error) {
      throw error;
    }
  }

  async createRole(createRoleRequest: CreateRoleRequest): Promise<Role> {
    try {
      if (C.useFaker) {
        return this.kartoffelFaker.randomRole();
      } else {
        const res = await this.kartoffelUtils.kartoffelPost(
          `${C.kartoffelUrl}/roles`,
          createRoleRequest
        );
        return res.data as Role;
      }
    } catch (error) {
      throw error;
    }
  }

  async deleteRole(
    deleteRoleRequest: DeleteRoleRequest
  ): Promise<SuccessMessage> {
    try {
      if (C.useFaker) {
        return { success: true };
      } else {
        await this.kartoffelUtils.kartoffelDelete(
          `${C.kartoffelUrl}/roles/${deleteRoleRequest.roleId}`
        );
        return { success: true };
      }
    } catch (error) {
      throw error;
    }
  }

  async getRolesUnderOGRequest(
    getRolesUnderOGRequest: GetRolesUnderOGRequest
  ): Promise<RoleArray> {
    try {
      if (C.useFaker) {
        return this.kartoffelFaker.randomRoleArray();
      } else {
        const res = await this.kartoffelUtils.kartoffelGet(
          `${C.kartoffelUrl}/roles/hierarchy/${getRolesUnderOGRequest.id}?direct=${getRolesUnderOGRequest.direct}`
        );
        return { roles: res.data as Role[] };
      }
    } catch (error) {
      throw error;
    }
  }

  async ConnectRoleAndDIRequest(
    connectRoleAndDIRequest: ConnectRoleAndDIRequest
  ): Promise<Role> {
    try {
      if (C.useFaker) {
        return this.kartoffelFaker.randomRole();
      } else {
        const res = await this.kartoffelUtils.kartoffelPatch(
          `${C.kartoffelUrl}/roles/${connectRoleAndDIRequest.id}/digitalIdentity/${connectRoleAndDIRequest.uniqueId}`,
          ConnectRoleAndDIRequest
        );
        return res.data as Role;
      }
    } catch (error) {
      throw error;
    }
  }

  async connectRoleAndDI(
    connectRoleAndDIRequest: ConnectRoleAndDIRequest
  ): Promise<SuccessMessage> {
    try {
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
    } catch (error) {
      throw error;
    }
  }

  async getRoleByRoleId(
    getRoleByRoleIdRequest: GetRoleByRoleIdRequest
  ): Promise<Role> {
    try {
      if (C.useFaker) {
        return this.kartoffelFaker.randomRole();
      } else {
        const res = await this.kartoffelUtils.kartoffelGet(
          `${C.kartoffelUrl}/roles/search?roleId=${getRoleByRoleIdRequest.roleId}`
        );
        return res.data as Role;
      }
    } catch (error) {
      throw error;
    }
  }

  //   async UpdateRole(UpdateRole: UpdateRoleRequest): Promise<SuccessMessage> {
  //     try {
  //       if (C.useFaker) {
  //         const successMessage: SuccessMessage =
  //           await this.kartoffelFaker.randomRole();
  //         return successMessage;
  //       } else {
  //         const res = await this.kartoffelUtils.kartoffelGet(
  //           `${C.kartoffelUrl}/entities/role/${getEntityByRoleIdRequest.roleId}`
  //         );
  //         return res.data as Entity;
  //       }
  //     } catch (error) {
  //       throw error;
  //     }
  //   }
}
