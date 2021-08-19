import {
  ConnectRoleAndDIRequest,
  CreateRoleRequest,
  DeleteRoleRequest,
  GetRoleByRoleIdRequest,
  GetRolesUnderOGRequest,
  Role,
  RoleArray,
  SuccessMessage,
} from '../interfaces/protoc/proto/kartoffelService';
import { KartoffelFaker } from '../mock/kartoffel.faker';
import { KartoffelUtils } from '../utils/kartoffel.utils';
import { RolesRepository } from './roles.repository';

export class RolesManager {
  private rolesRepository: RolesRepository;
  constructor(kartoffelUtils: KartoffelUtils, kartoffelFaker: KartoffelFaker) {
    this.rolesRepository = new RolesRepository(kartoffelUtils, kartoffelFaker);
  }

  async createRole(createRoleRequest: CreateRoleRequest): Promise<Role> {
    try {
      return await this.rolesRepository.createRole(createRoleRequest);
    } catch (error) {
      throw error;
    }
  }

  async deleteRole(
    deleteRoleRequest: DeleteRoleRequest
  ): Promise<SuccessMessage> {
    try {
      return await this.rolesRepository.deleteRole(deleteRoleRequest);
    } catch (error) {
      throw error;
    }
  }

  async connectRoleAndDI(
    connectRoleAndDIRequest: ConnectRoleAndDIRequest
  ): Promise<SuccessMessage> {
    try {
      return await this.rolesRepository.connectRoleAndDI(
        connectRoleAndDIRequest
      );
    } catch (error) {
      throw error;
    }
  }

  async getRoleByRoleId(
    getRoleByRoleIdRequest: GetRoleByRoleIdRequest
  ): Promise<Role> {
    try {
      return await this.rolesRepository.getRoleByRoleId(getRoleByRoleIdRequest);
    } catch (error) {
      throw error;
    }
  }

  async getRolesUnderOG(
    getRolesUnderOGRequest: GetRolesUnderOGRequest
  ): Promise<RoleArray> {
    try {
      return await this.rolesRepository.getRolesUnderOGRequest(
        getRolesUnderOGRequest
      );
    } catch (error) {
      throw error;
    }
  }
}
