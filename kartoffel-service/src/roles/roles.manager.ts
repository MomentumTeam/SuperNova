import {
  ConnectRoleAndDIRequest,
  CreateRoleRequest,
  DeleteRoleRequest,
  DisconnectRoleAndDIRequest,
  GetRoleByRoleIdRequest,
  GetRolesUnderOGRequest,
  Role,
  RoleArray,
  SuccessMessage,
  RenameRoleRequest,
  GetAllRolesRequest,
  GetRolesByHierarchyRequest,
  ChangeRoleOGRequest,
  IsJobTitleAlreadyTakenReq,
  IsJobTitleAlreadyTakenRes,
  IsRoleAlreadyTakenReq,
  IsRoleAlreadyTakenRes,
  RoleIdMessage,
  GetRoleIdSuffixByOGReq,
  RoleIdSuffix,
  SearchRoleByRoleIdReq,
} from "../interfaces/protoc/proto/kartoffelService";
import { KartoffelFaker } from '../mock/kartoffel.faker';
import { KartoffelUtils } from '../utils/kartoffel.utils';
import { RolesRepository } from './roles.repository';

export class RolesManager {
  private rolesRepository: RolesRepository;
  constructor(kartoffelUtils: KartoffelUtils, kartoffelFaker: KartoffelFaker) {
    this.rolesRepository = new RolesRepository(kartoffelUtils, kartoffelFaker);
  }

  async getRoleIdSuffixByOG(
    getRoleIdSuffixByOGReq: GetRoleIdSuffixByOGReq
  ): Promise<RoleIdSuffix> {
    return await this.rolesRepository.getRoleIdSuffixByOG(
      getRoleIdSuffixByOGReq
    );
  }

  async getAllRoles(
    getAllRolesRequest: GetAllRolesRequest
  ): Promise<RoleArray> {
    return await this.rolesRepository.getAllRoles(getAllRolesRequest);
  }

  async createRole(
    createRoleRequest: CreateRoleRequest
  ): Promise<RoleIdMessage> {
    return await this.rolesRepository.createRole(createRoleRequest);
  }

  async deleteRole(
    deleteRoleRequest: DeleteRoleRequest
  ): Promise<SuccessMessage> {
    return await this.rolesRepository.deleteRole(deleteRoleRequest);
  }

  async connectRoleAndDI(
    connectRoleAndDIRequest: ConnectRoleAndDIRequest
  ): Promise<SuccessMessage> {
    return this.rolesRepository.ConnectRoleAndDI(connectRoleAndDIRequest);
  }

  async getRoleByRoleId(
    getRoleByRoleIdRequest: GetRoleByRoleIdRequest
  ): Promise<Role> {
    return await this.rolesRepository.getRoleByRoleId(getRoleByRoleIdRequest);
  }

  async getRolesUnderOG(
    getRolesUnderOGRequest: GetRolesUnderOGRequest
  ): Promise<RoleArray> {
    return await this.rolesRepository.getRolesUnderOG(getRolesUnderOGRequest);
  }

  async renameRole(
    RenameRoleRequest: RenameRoleRequest
  ): Promise<SuccessMessage> {
    return await this.rolesRepository.renameRole(RenameRoleRequest);
  }

  async isJobTitleAlreadyTaken(
    isJobTitleAlreadyTakenRequest: IsJobTitleAlreadyTakenReq
  ): Promise<IsJobTitleAlreadyTakenRes> {
    try {
      return await this.rolesRepository.isJobTitleAlreadyTaken(
        isJobTitleAlreadyTakenRequest
      );
    } catch (error) {
      throw error;
    }
  }

  async isRoleAlreadyTaken(
    isRoleAlreadyTakenRequest: IsRoleAlreadyTakenReq
  ): Promise<IsRoleAlreadyTakenRes> {
    try {
      return await this.rolesRepository.isRoleAlreadyTaken(
        isRoleAlreadyTakenRequest
      );
    } catch (error) {
      throw error;
    }
  }

  async disconnectRoleAndDI(
    disconnectRoleAndDIRequest: DisconnectRoleAndDIRequest
  ): Promise<SuccessMessage> {
    return await this.rolesRepository.disconnectRoleAndDI(
      disconnectRoleAndDIRequest
    );
  }

  async getRolesByHierarchy(
    getRolesByHierarchy: GetRolesByHierarchyRequest
  ): Promise<RoleArray> {
    return await this.rolesRepository.getRolesByHierarchy(getRolesByHierarchy);
  }

  async changeRoleOG(
    changeRoleOGRequest: ChangeRoleOGRequest
  ): Promise<SuccessMessage> {
    return await this.rolesRepository.changeRoleOG(changeRoleOGRequest);
  }

  async searchRolesByRoleId(
    searchRoleByRoleIdReq: SearchRoleByRoleIdReq
  ): Promise<RoleArray> {
    return await this.rolesRepository.searchRolesByRoleId(searchRoleByRoleIdReq);
  }
}
