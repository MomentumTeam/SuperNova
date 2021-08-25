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
} from '../interfaces/protoc/proto/kartoffelService';
import { KartoffelFaker } from '../mock/kartoffel.faker';
import { KartoffelUtils } from '../utils/kartoffel.utils';
import { RolesRepository } from './roles.repository';

export class RolesManager {
  private rolesRepository: RolesRepository;
  constructor(kartoffelUtils: KartoffelUtils, kartoffelFaker: KartoffelFaker) {
    this.rolesRepository = new RolesRepository(kartoffelUtils, kartoffelFaker);
  }

  async getAllRoles(
    getAllRolesRequest: GetAllRolesRequest
  ): Promise<RoleArray> {
    return await this.rolesRepository.getAllRoles(getAllRolesRequest);
  }

  async createRole(createRoleRequest: CreateRoleRequest): Promise<Role> {
    return await this.rolesRepository.createRole(createRoleRequest);
  }

  async deleteRole(deleteRoleRequest: DeleteRoleRequest): Promise<Role> {
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
    return await this.rolesRepository.getRolesUnderOGRequest(
      getRolesUnderOGRequest
    );
  }

  async renameRole(RenameRoleRequest: RenameRoleRequest): Promise<Role> {
    return await this.rolesRepository.renameRole(RenameRoleRequest);
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
  ): Promise<Role> {
    return await this.rolesRepository.getRolesByHierarchy(getRolesByHierarchy);
  }

  async changeRoleOG(changeRoleOGRequest: ChangeRoleOGRequest): Promise<Role> {
    return await this.rolesRepository.changeRoleOG(changeRoleOGRequest);
  }
}
