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
  IsJobTitleAlreadyTakenReq,
  IsJobTitleAlreadyTakenRes,
  IsRoleAlreadyTakenReq,
  IsRoleAlreadyTakenRes,
} from '../interfaces/protoc/proto/kartoffelService';
import { KartoffelFaker } from '../mock/kartoffel.faker';
import { KartoffelUtils } from '../utils/kartoffel.utils';
import * as C from '../config';
import { getSuggestions, jobTitleExists } from '../utils/jobTitles.utils';

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
    try {
      if (C.useFaker) {
        return this.kartoffelFaker.randomRoleArray(getAllRolesRequest.pageSize);
      } else {
        const roles: RoleArray = await this.kartoffelUtils.kartoffelGet(
          `${C.kartoffelUrl}/api/roles`,
          getAllRolesRequest
        );
        return roles;
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
        const role: Role = await this.kartoffelUtils.kartoffelPost(
          `${C.kartoffelUrl}/api/roles`,
          createRoleRequest
        );
        return role;
      }
    } catch (error) {
      throw error;
    }
  }

  async getRolesUnderOG(
    getRolesUnderOGRequest: GetRolesUnderOGRequest
  ): Promise<RoleArray> {
    try {
      if (C.useFaker) {
        return this.kartoffelFaker.randomRoleArray(
          getRolesUnderOGRequest.pageSize
        );
      } else {
        const roles: Role[] = await this.kartoffelUtils.kartoffelGet(
          `${C.kartoffelUrl}/api/roles/group/${getRolesUnderOGRequest.groupId}`,
          getRolesUnderOGRequest
        );
        return { roles: roles };
      }
    } catch (error) {
      throw error;
    }
  }

  async deleteRole(deleteRoleRequest: DeleteRoleRequest): Promise<Role> {
    try {
      if (C.useFaker) {
        return this.kartoffelFaker.randomRole();
      } else {
        return this.kartoffelUtils.kartoffelDelete(
          `${C.kartoffelUrl}/api/roles/${deleteRoleRequest.roleId}`
        );
      }
    } catch (error) {
      throw error;
    }
  }

  async isRoleAlreadyTaken(
    isRoleAlreadyTakenRequest: IsRoleAlreadyTakenReq
  ): Promise<IsRoleAlreadyTakenRes> {
    try {
      if (C.useFaker) {
        const isRoleAlradyTaken = Math.random() < 0.5;
        return { isRoleAlreadyTaken: isRoleAlradyTaken };
      } else {
        try {
          const entity = await this.kartoffelUtils.kartoffelGet(
            `${C.kartoffelUrl}/api/entities/role/${isRoleAlreadyTakenRequest.roleId}`,
            { expanded: true }
          );
          if (entity) {
            return { isRoleAlreadyTaken: true };
          } else {
            return { isRoleAlreadyTaken: false };
          }
        } catch (error: any) {
          if (error.response.status === 404) {
            return { isRoleAlreadyTaken: false };
          } else {
            throw error;
          }
        }
      }
    } catch (error) {
      throw error;
    }
  }

  async isJobTitleAlreadyTaken(
    isJobTitleAlreadyTakenRequest: IsJobTitleAlreadyTakenReq
  ): Promise<IsJobTitleAlreadyTakenRes> {
    try {
      if (C.useFaker) {
        const isJobTitleAlreadyTaken = Math.random() < 0.5;
        let res: any = { isJobTitleAlreadyTaken: isJobTitleAlreadyTaken };
        res.suggestions = ['Programmer 1', 'Programmer 2', 'Programmer 3'];
        return res as IsJobTitleAlreadyTakenRes;
      } else {
        let roleArray: RoleArray = await this.getRolesUnderOG({
          groupId: isJobTitleAlreadyTakenRequest.directGroup,
          direct: true,
          page: 1,
          pageSize: 1000,
        });
        const jobTitle = isJobTitleAlreadyTakenRequest.jobTitle;
        if (!jobTitleExists(roleArray, jobTitle)) {
          return { isJobTitleAlreadyTaken: false, suggestions: [] };
        } else {
          return {
            isJobTitleAlreadyTaken: true,
            suggestions: getSuggestions(roleArray, jobTitle),
          };
        }
      }
    } catch (error) {
      throw error;
    }
  }

  async ConnectRoleAndDI(
    connectRoleAndDIRequest: ConnectRoleAndDIRequest
  ): Promise<SuccessMessage> {
    try {
      if (C.useFaker) {
        return { success: true };
      } else {
        const data: SuccessMessage = await this.kartoffelUtils.kartoffelPut(
          `${C.kartoffelUrl}/api/roles/${connectRoleAndDIRequest.roleId}/digitalIdentity/${connectRoleAndDIRequest.uniqueId}`,
          ConnectRoleAndDIRequest
        );
        return data;
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
        const data: Role = await this.kartoffelUtils.kartoffelGet(
          `${C.kartoffelUrl}/api/roles/${getRoleByRoleIdRequest.roleId}`
        );
        return data;
      }
    } catch (error) {
      throw error;
    }
  }

  async disconnectRoleAndDI(
    disconnectRoleAndDIRequest: DisconnectRoleAndDIRequest
  ): Promise<SuccessMessage> {
    try {
      if (C.useFaker) {
        return { success: true };
      } else {
        const data: SuccessMessage = await this.kartoffelUtils.kartoffelDelete(
          `${C.kartoffelUrl}/api/roles/${disconnectRoleAndDIRequest.roleId}/digitalIdentity/${disconnectRoleAndDIRequest.uniqueId}`
        );
        return data;
      }
    } catch (error) {
      throw error;
    }
  }

  async renameRole(RenameRoleRequest: RenameRoleRequest): Promise<Role> {
    try {
      if (C.useFaker) {
        return this.kartoffelFaker.randomRole();
      } else {
        const data: Role = await this.kartoffelUtils.kartoffelPatch(
          `${C.kartoffelUrl}/api/roles/${RenameRoleRequest.roleId}`,
          RenameRoleRequest
        );
        return data;
      }
    } catch (error) {
      throw error;
    }
  }

  async getRoleByDI(getRoleByDIRequest: GetRoleByDIRequest): Promise<Role> {
    try {
      if (C.useFaker) {
        return this.kartoffelFaker.randomRole();
      } else {
        const data: Role = await this.kartoffelUtils.kartoffelGet(
          `${C.kartoffelUrl}/api/roles/digitalIdentity/${getRoleByDIRequest.uniqueId}`,
          getRoleByDIRequest
        );
        return data;
      }
    } catch (error) {
      throw error;
    }
  }

  async getRolesByHierarchy(
    getRolesByHierarchy: GetRolesByHierarchyRequest
  ): Promise<Role> {
    try {
      if (C.useFaker) {
        return this.kartoffelFaker.randomRole();
      } else {
        const data: Role = await this.kartoffelUtils.kartoffelGet(
          `${C.kartoffelUrl}/api/roles/hierarchy/${getRolesByHierarchy.hierarchy}`,
          getRolesByHierarchy
        );
        return data;
      }
    } catch (error) {
      throw error;
    }
  }

  async changeRoleOG(changeRoleOGRequest: ChangeRoleOGRequest): Promise<Role> {
    try {
      if (C.useFaker) {
        return this.kartoffelFaker.randomRole();
      } else {
        const data: Role = await this.kartoffelUtils.kartoffelPut(
          `${C.kartoffelUrl}/api/roles/${changeRoleOGRequest.roleId}/group/${changeRoleOGRequest.groupId}`,
          changeRoleOGRequest
        );
        return data;
      }
    } catch (error) {
      throw error;
    }
  }
}
