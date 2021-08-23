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
  UpdateRoleRequest,
} from '../interfaces/protoc/proto/kartoffelService';
import { KartoffelFaker } from '../mock/kartoffel.faker';
import { KartoffelUtils } from '../utils/kartoffel.utils';
import { RolesRepository } from './roles.repository';

export class RolesManager {
  private rolesRepository: RolesRepository;
  constructor(kartoffelUtils: KartoffelUtils, kartoffelFaker: KartoffelFaker) {
    this.rolesRepository = new RolesRepository(kartoffelUtils, kartoffelFaker);
  }

  async getAllRoles(): Promise<RoleArray> {
    return await this.rolesRepository.getAllRoles();
  }

  async createRole(createRoleRequest: CreateRoleRequest): Promise<Role> {
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
    return await this.rolesRepository.connectRoleAndDI(connectRoleAndDIRequest);
  }

  async getRoleByRoleId(
    getRoleByRoleIdRequest: GetRoleByRoleIdRequest
  ): Promise<Role> {
    return await this.rolesRepository.getRoleByRoleId(getRoleByRoleIdRequest);
  }

  async getRolesUnderOG(
    getRolesUnderOGRequest: GetRolesUnderOGRequest
  ): Promise<RoleArray> {
    return await this.rolesRepository.getRolesUnderOGRequest(
      getRolesUnderOGRequest
    );
  }

  async updateRole(
    updateRoleRequest: UpdateRoleRequest
  ): Promise<SuccessMessage> {
    return await this.rolesRepository.updateRole(updateRoleRequest);
  }

  async disconnectRoleAndDI(
    disconnectRoleAndDIRequest: DisconnectRoleAndDIRequest
  ): Promise<SuccessMessage> {
    return await this.rolesRepository.disconnectRoleAndDI(
      disconnectRoleAndDIRequest
    );
  }
}
