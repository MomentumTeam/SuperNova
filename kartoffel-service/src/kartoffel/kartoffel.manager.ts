import {
  SearchOGRequest,
  OGArray,
  CreateOGRequest,
  OrganizationGroup,
  CreateDIRequest,
  DigitalIdentity,
  CreateRoleRequest,
  Role,
  ConnectRoleAndDIRequest,
  SuccessMessage,
  SearchEntitiesByFullNameRequest,
  EntityArray,
  GetEntityByIdNumberRequest,
  Entity,
  RoleArray,
  GetRolesUnderOGRequest,
  ConnectEntityAndDIRequest,
  CreateEntityRequest,
  GetEntityByRoleIdRequest,
  DisconnectDIFromEntityRequest,
  GetEntityByMongoIdRequest,
  DeleteOGRequest,
  GetChildrenOfOGRequest,
  DeleteRoleRequest,
  DeleteDIRequest,
  GetEntitiesUnderOGRequest,
  GetOGTreeRequest,
  OGTree,
  GetPictureByEntityIdRequest,
  Image,
  GetRoleByRoleIdRequest,
} from '../interfaces/protoc/proto/kartoffelService';
import { KartoffelRepository } from './kartoffel.repository';

export class KartoffelManager {
  private kartoffelRepository: KartoffelRepository;
  constructor() {
    this.kartoffelRepository = new KartoffelRepository();
  }

  async getPictureByEntityId(
    getPictureByEntityIdRequest: GetPictureByEntityIdRequest
  ): Promise<Image> {
    try {
      return await this.kartoffelRepository.getPictureByEntityId(
        getPictureByEntityIdRequest
      );
    } catch (error) {
      throw error;
    }
  }

  async searchOG(searchOGRequest: SearchOGRequest): Promise<OGArray> {
    try {
      return await this.kartoffelRepository.searchOG(searchOGRequest);
    } catch (error) {
      throw error;
    }
  }

  async createOG(createOGRequest: CreateOGRequest): Promise<OrganizationGroup> {
    try {
      return await this.kartoffelRepository.createOG(createOGRequest);
    } catch (error) {
      throw error;
    }
  }

  async createDI(createDIRequest: CreateDIRequest): Promise<DigitalIdentity> {
    try {
      return await this.kartoffelRepository.createDI(createDIRequest);
    } catch (error) {
      throw error;
    }
  }

  async createRole(createRoleRequest: CreateRoleRequest): Promise<Role> {
    try {
      return await this.kartoffelRepository.createRole(createRoleRequest);
    } catch (error) {
      throw error;
    }
  }

  async connectRoleAndDI(
    connectRoleAndDIRequest: ConnectRoleAndDIRequest
  ): Promise<SuccessMessage> {
    try {
      return await this.kartoffelRepository.connectRoleAndDI(
        connectRoleAndDIRequest
      );
    } catch (error) {
      throw error;
    }
  }

  async searchEntitiesByFullName(
    searchEntitiesByFullNameRequest: SearchEntitiesByFullNameRequest
  ): Promise<EntityArray> {
    try {
      return await this.kartoffelRepository.searchEntitiesByFullName(
        searchEntitiesByFullNameRequest
      );
    } catch (error) {
      throw error;
    }
  }

  async getEntityByIdNumber(
    getEntityByIdNumberRequest: GetEntityByIdNumberRequest
  ): Promise<Entity> {
    try {
      return await this.kartoffelRepository.getEntityByIdNumber(
        getEntityByIdNumberRequest
      );
    } catch (error) {
      throw error;
    }
  }

  async getRoleByRoleId(
    getRoleByRoleIdRequest: GetRoleByRoleIdRequest
  ): Promise<Role> {
    try {
      return await this.kartoffelRepository.getRoleByRoleId(
        getRoleByRoleIdRequest
      );
    } catch (error) {
      throw error;
    }
  }

  async getRolesUnderOG(
    getRolesUnderOGRequest: GetRolesUnderOGRequest
  ): Promise<RoleArray> {
    try {
      return await this.kartoffelRepository.getRolesUnderOG(
        getRolesUnderOGRequest
      );
    } catch (error) {
      throw error;
    }
  }

  async connectEntityAndDI(
    connectEntityAndDIRequest: ConnectEntityAndDIRequest
  ): Promise<SuccessMessage> {
    try {
      return await this.kartoffelRepository.connectEntityAndDI(
        connectEntityAndDIRequest
      );
    } catch (error) {
      throw error;
    }
  }

  async createEntity(
    createEntityRequest: CreateEntityRequest
  ): Promise<Entity> {
    try {
      return await this.kartoffelRepository.createEntity(createEntityRequest);
    } catch (error) {
      throw error;
    }
  }

  async getEntityByRoleId(
    getEntityByRoleIdRequest: GetEntityByRoleIdRequest
  ): Promise<Entity> {
    try {
      return await this.kartoffelRepository.getEntityByRoleId(
        getEntityByRoleIdRequest
      );
    } catch (error) {
      throw error;
    }
  }

  async disconnectDIFromEntity(
    disconnectDIFromEntityRequest: DisconnectDIFromEntityRequest
  ): Promise<SuccessMessage> {
    try {
      return await this.kartoffelRepository.disconnectDIFromEntity(
        disconnectDIFromEntityRequest
      );
    } catch (error) {
      throw error;
    }
  }

  async getEntityByMongoId(
    getEntityByMongoIdRequest: GetEntityByMongoIdRequest
  ): Promise<Entity> {
    try {
      return await this.kartoffelRepository.getEntityByMongoId(
        getEntityByMongoIdRequest
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteOG(deleteOGRequest: DeleteOGRequest): Promise<SuccessMessage> {
    try {
      return await this.kartoffelRepository.deleteOG(deleteOGRequest);
    } catch (error) {
      throw error;
    }
  }

  async getOGTree(getOGTreeRequest: GetOGTreeRequest): Promise<OGTree> {
    try {
      return await this.kartoffelRepository.getOGTree(getOGTreeRequest);
    } catch (error) {
      throw error;
    }
  }

  async getChildrenOfOG(
    getChildrenOfOGRequest: GetChildrenOfOGRequest
  ): Promise<OGArray> {
    try {
      return await this.kartoffelRepository.getChildrenOfOG(
        getChildrenOfOGRequest
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteRole(
    deleteRoleRequest: DeleteRoleRequest
  ): Promise<SuccessMessage> {
    try {
      return await this.kartoffelRepository.deleteRole(deleteRoleRequest);
    } catch (error) {
      throw error;
    }
  }

  async deleteDI(deleteDIRequest: DeleteDIRequest): Promise<SuccessMessage> {
    try {
      return await this.kartoffelRepository.deleteDI(deleteDIRequest);
    } catch (error) {
      throw error;
    }
  }

  async getEntitiesUnderOG(
    getEntitiesUnderOGRequest: GetEntitiesUnderOGRequest
  ): Promise<EntityArray> {
    try {
      return await this.kartoffelRepository.getEntitiesUnderOG(
        getEntitiesUnderOGRequest
      );
    } catch (error) {
      throw error;
    }
  }
}
