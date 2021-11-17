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
  RoleIdMessage,
} from "../interfaces/protoc/proto/kartoffelService";
import { KartoffelFaker } from "../mock/kartoffel.faker";
import { KartoffelUtils } from "../utils/kartoffel.utils";
import * as C from "../config";
import { getSuggestions, jobTitleExists } from "../utils/jobTitles.utils";
import { cleanUnderscoreFields } from "../utils/json.utils";

export class RolesRepository {
  private kartoffelFaker: KartoffelFaker;
  private kartoffelUtils: KartoffelUtils;
  constructor(kartoffelUtils: KartoffelUtils, kartoffelFaker: KartoffelFaker) {
    this.kartoffelFaker = kartoffelFaker;
    this.kartoffelUtils = kartoffelUtils;
  }

  async getAllRoles(getAllRolesRequest: GetAllRolesRequest): Promise<RoleArray> {
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

  async createRole(createRoleRequest: CreateRoleRequest): Promise<RoleIdMessage> {
    try {
      cleanUnderscoreFields(createRoleRequest);
      if (C.useFaker) {
        const role = this.kartoffelFaker.randomRole();
        return { roleId: role.roleId };
      } else {
        const res = await this.kartoffelUtils.kartoffelPost(`${C.kartoffelUrl}/api/roles`, createRoleRequest);

        if (res === C.kartoffelOK) {
          return { roleId: createRoleRequest.roleId };
        } else {
          throw new Error("res not ok");
        }
      }
    } catch (error) {
      throw error;
    }
  }

  async getRolesUnderOG(getRolesUnderOGRequest: GetRolesUnderOGRequest): Promise<RoleArray> {
    try {
      cleanUnderscoreFields(getRolesUnderOGRequest);
      if (C.useFaker) {
        return this.kartoffelFaker.randomRoleArray(getRolesUnderOGRequest.pageSize);
      } else {
        const groupId = getRolesUnderOGRequest.groupId;
        const req: any = getRolesUnderOGRequest;
        delete req.groupId;

        const roles: Role[] = await this.kartoffelUtils.kartoffelGet(
          `${C.kartoffelUrl}/api/roles/group/${groupId}`,
          req
        );
        return { roles: roles };
      }
    } catch (error) {
      throw error;
    }
  }

  async deleteRole(deleteRoleRequest: DeleteRoleRequest): Promise<SuccessMessage> {
    try {
      cleanUnderscoreFields(deleteRoleRequest);
      if (C.useFaker) {
        return { success: true };
      } else {
        const res: any = await this.kartoffelUtils.kartoffelDelete(
          `${C.kartoffelUrl}/api/roles/${encodeURIComponent(deleteRoleRequest.roleId)}`
        );

        if (res === C.kartoffelOK) {
          return { success: true };
        } else {
          throw new Error("res not ok");
        }
      }
    } catch (error) {
      throw error;
    }
  }

  async isRoleAlreadyTaken(isRoleAlreadyTakenRequest: IsRoleAlreadyTakenReq): Promise<IsRoleAlreadyTakenRes> {
    try {
      cleanUnderscoreFields(isRoleAlreadyTakenRequest);
      if (C.useFaker) {
        const isRoleAlradyTaken = Math.random() < 0.5;
        return { isRoleAlreadyTaken: isRoleAlradyTaken };
      } else {
        try {
          const entity = await this.kartoffelUtils.kartoffelGet(
            `${C.kartoffelUrl}/api/entities/role/${encodeURIComponent(isRoleAlreadyTakenRequest.roleId)}`,
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
        res.suggestions = ["Programmer 1", "Programmer 2", "Programmer 3"];
        return res as IsJobTitleAlreadyTakenRes;
      } else {
        const jobTitle = isJobTitleAlreadyTakenRequest.jobTitle;
        let roleArray: RoleArray;
        let pageCounter = 1;
        let isJobTitleExists = false;

        do {
          roleArray = await this.getRolesUnderOG({
            groupId: isJobTitleAlreadyTakenRequest.directGroup,
            direct: true,
            page: pageCounter,
            pageSize: 100,
          });
          isJobTitleExists = jobTitleExists(roleArray, jobTitle);

          pageCounter++;
        } while (roleArray.roles.length > 0 && !isJobTitleExists);

        return {
          isJobTitleAlreadyTaken: isJobTitleExists,
          suggestions: isJobTitleExists ? getSuggestions(roleArray, jobTitle) : [],
        };
      }
    } catch (error) {
      throw error;
    }
  }

  async ConnectRoleAndDI(connectRoleAndDIRequest: ConnectRoleAndDIRequest): Promise<SuccessMessage> {
    try {
      cleanUnderscoreFields(connectRoleAndDIRequest);
      if (C.useFaker) {
        return { success: true };
      } else {
        const res = await this.kartoffelUtils.kartoffelPut(
          `${C.kartoffelUrl}/api/roles/${encodeURIComponent(
            connectRoleAndDIRequest.roleId
          )}/digitalIdentity/${encodeURIComponent(connectRoleAndDIRequest.uniqueId)}`,
          ConnectRoleAndDIRequest
        );

        if (res === C.kartoffelOK) {
          return { success: true };
        } else {
          throw new Error("res not ok");
        }
      }
    } catch (error) {
      throw error;
    }
  }

  async getRoleByRoleId(getRoleByRoleIdRequest: GetRoleByRoleIdRequest): Promise<Role> {
    try {
      cleanUnderscoreFields(getRoleByRoleIdRequest);
      if (C.useFaker) {
        return this.kartoffelFaker.randomRole();
      } else {
        const data: Role = await this.kartoffelUtils.kartoffelGet(
          `${C.kartoffelUrl}/api/roles/${encodeURIComponent(getRoleByRoleIdRequest.roleId)}`
        );
        return data;
      }
    } catch (error) {
      throw error;
    }
  }

  async disconnectRoleAndDI(disconnectRoleAndDIRequest: DisconnectRoleAndDIRequest): Promise<SuccessMessage> {
    try {
      cleanUnderscoreFields(disconnectRoleAndDIRequest);
      if (C.useFaker) {
        return { success: true };
      } else {
        const res = await this.kartoffelUtils.kartoffelDelete(
          `${C.kartoffelUrl}/api/roles/${encodeURIComponent(
            disconnectRoleAndDIRequest.roleId
          )}/digitalIdentity/${encodeURIComponent(disconnectRoleAndDIRequest.uniqueId)}`
        );

        if (res === C.kartoffelOK) {
          return { success: true };
        } else {
          throw new Error("res not ok");
        }
      }
    } catch (error) {
      throw error;
    }
  }

  async renameRole(RenameRoleRequest: RenameRoleRequest): Promise<SuccessMessage> {
    try {
      cleanUnderscoreFields(RenameRoleRequest);
      if (C.useFaker) {
        return { success: true };
      } else {
        const res = await this.kartoffelUtils.kartoffelPatch(
          `${C.kartoffelUrl}/api/roles/${encodeURIComponent(RenameRoleRequest.roleId)}`,
          RenameRoleRequest
        );

        if (res === C.kartoffelOK) {
          return { success: true };
        } else {
          throw new Error("res not ok");
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
          `${C.kartoffelUrl}/api/roles/digitalIdentity/${encodeURIComponent(getRoleByDIRequest.uniqueId)}`,
          getRoleByDIRequest
        );
        return data;
      }
    } catch (error) {
      throw error;
    }
  }

  async getRolesByHierarchy(getRolesByHierarchy: GetRolesByHierarchyRequest): Promise<RoleArray> {
    try {
      cleanUnderscoreFields(getRolesByHierarchy);
      if (C.useFaker) {
        return this.kartoffelFaker.randomRoleArray(getRolesByHierarchy.pageSize);
      } else {
        const data: RoleArray = await this.kartoffelUtils.kartoffelGet(
          `${C.kartoffelUrl}/api/roles/hierarchy/${encodeURIComponent(getRolesByHierarchy.hierarchy)}`,
          getRolesByHierarchy
        );
        return data;
      }
    } catch (error) {
      throw error;
    }
  }

  async changeRoleOG(changeRoleOGRequest: ChangeRoleOGRequest): Promise<SuccessMessage> {
    try {
      cleanUnderscoreFields(changeRoleOGRequest);
      if (C.useFaker) {
        return { success: true };
      } else {
        const res = await this.kartoffelUtils.kartoffelPut(
          `${C.kartoffelUrl}/api/roles/${encodeURIComponent(changeRoleOGRequest.roleId)}/group/${
            changeRoleOGRequest.groupId
          }`,
          changeRoleOGRequest
        );

        if (res === C.kartoffelOK) {
          return { success: true };
        } else {
          throw new Error("res not ok");
        }
      }
    } catch (error) {
      throw error;
    }
  }
}
