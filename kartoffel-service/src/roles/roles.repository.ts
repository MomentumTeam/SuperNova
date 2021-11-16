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
import { cleanUnderscoreFields } from '../utils/json.utils';

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
      cleanUnderscoreFields(getAllRolesRequest);
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
      cleanUnderscoreFields(createRoleRequest);
      if (C.useFaker) {
        return this.kartoffelFaker.randomRole();
      } else {
        const res = await this.kartoffelUtils.kartoffelPost(
          `${C.kartoffelUrl}/api/roles`,
          createRoleRequest
        );

        if (res === C.kartoffelOK) {
          const role = await this.getRoleByRoleId({
            roleId: createRoleRequest.roleId,
          });
          return role as Role;
        } else {
          throw new Error('res not ok');
        }
      }
    } catch (error) {
      throw error;
    }
  }

  async getRolesUnderOG(
    getRolesUnderOGRequest: GetRolesUnderOGRequest
  ): Promise<RoleArray> {
    try {
      cleanUnderscoreFields(getRolesUnderOGRequest);
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
      cleanUnderscoreFields(deleteRoleRequest);
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
      cleanUnderscoreFields(isRoleAlreadyTakenRequest);
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
      cleanUnderscoreFields(isJobTitleAlreadyTakenRequest);
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
          pageSize: 100,
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
      cleanUnderscoreFields(connectRoleAndDIRequest);
      if (C.useFaker) {
        return { success: true };
      } else {
        const data: SuccessMessage = await this.kartoffelUtils.kartoffelPut(
          `${C.kartoffelUrl}/api/roles/${encodeURIComponent(
            connectRoleAndDIRequest.roleId
          )}/digitalIdentity/${encodeURIComponent(
            connectRoleAndDIRequest.uniqueId
          )}`,
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
      cleanUnderscoreFields(getRoleByRoleIdRequest);
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
      cleanUnderscoreFields(disconnectRoleAndDIRequest);
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
      cleanUnderscoreFields(RenameRoleRequest);
      if (C.useFaker) {
        return this.kartoffelFaker.randomRole();
      } else {
        const res = await this.kartoffelUtils.kartoffelPatch(
          `${C.kartoffelUrl}/api/roles/${RenameRoleRequest.roleId}`,
          RenameRoleRequest
        );

        if (res === C.kartoffelOK) {
          const role = await this.getRoleByRoleId({
            roleId: RenameRoleRequest.roleId,
          });
          return role as Role;
        } else {
          throw new Error('res not ok');
        }
      }
    } catch (error) {
      throw error;
    }
  }

  async getRoleByDI(getRoleByDIRequest: GetRoleByDIRequest): Promise<Role> {
    try {
      cleanUnderscoreFields(getRoleByDIRequest);
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
      cleanUnderscoreFields(getRolesByHierarchy);
      if (C.useFaker) {
        return this.kartoffelFaker.randomRole();
      } else {
        const data: Role = await this.kartoffelUtils.kartoffelGet(
          `${C.kartoffelUrl}/api/roles/hierarchy/${encodeURIComponent(
            getRolesByHierarchy.hierarchy
          )}`,
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
      cleanUnderscoreFields(changeRoleOGRequest);
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
