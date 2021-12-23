import {
  ConnectEntityAndDIRequest,
  CreateEntityRequest,
  DeleteEntityRequest,
  DisconnectDIFromEntityRequest,
  Entity,
  EntityArray,
  GetEntitiesByHierarchyRequest,
  GetEntitiesUnderOGRequest,
  GetEntityByDIRequest,
  GetEntityByIdentifierRequest,
  GetEntityByIdRequest,
  GetEntityByRoleIdRequest,
  GetPictureByEntityIdentifierRequest,
  IdMessage,
  Image,
  SearchCommandersByFullNameRequest,
  SearchEntitiesByFullNameRequest,
  SuccessMessage,
  UpdateEntityRequest,
} from '../interfaces/protoc/proto/kartoffelService';
import { KartoffelFaker } from '../mock/kartoffel.faker';
import { KartoffelUtils } from '../utils/kartoffel.utils';
import { EntitiesRepository } from './entities.repository';

export class EntitiesManager {
  private entitiesRepository: EntitiesRepository;
  constructor(kartoffelUtils: KartoffelUtils, kartoffelFaker: KartoffelFaker) {
    this.entitiesRepository = new EntitiesRepository(
      kartoffelUtils,
      kartoffelFaker
    );
  }

  async getPictureByEntityIdentifier(
    getPictureByEntityIdentifierRequest: GetPictureByEntityIdentifierRequest
  ): Promise<Image> {
    try {
      return await this.entitiesRepository.getPictureByEntityIdentifier(getPictureByEntityIdentifierRequest);
    } catch (error) {
      throw error;
    }
  }

  async createEntity(
    createEntityRequest: CreateEntityRequest
  ): Promise<IdMessage> {
    try {
      return await this.entitiesRepository.createEntity(createEntityRequest);
    } catch (error) {
      throw error;
    }
  }

  async getEntityByDI(
    getEntityByDIRequest: GetEntityByDIRequest
  ): Promise<Entity> {
    try {
      return await this.entitiesRepository.getEntityByDI(getEntityByDIRequest);
    } catch (error) {
      throw error;
    }
  }

  async getEntityByRoleId(
    getEntityByRoleIdRequest: GetEntityByRoleIdRequest
  ): Promise<Entity> {
    try {
      return await this.entitiesRepository.getEntityByRoleId(
        getEntityByRoleIdRequest
      );
    } catch (error) {
      throw error;
    }
  }

  async getEntitiesUnderOG(
    getEntitiesUnderOGRequest: GetEntitiesUnderOGRequest
  ): Promise<EntityArray> {
    try {
      return await this.entitiesRepository.getEntitiesUnderOG(
        getEntitiesUnderOGRequest
      );
    } catch (error) {
      throw error;
    }
  }

  async getEntitiesByHierarchy(
    getEntitiesByHierarchyRequest: GetEntitiesByHierarchyRequest
  ): Promise<EntityArray> {
    try {
      return await this.entitiesRepository.getEntitiesByHierarchy(
        getEntitiesByHierarchyRequest
      );
    } catch (error) {
      throw error;
    }
  }

  async getEntityByIdentifier(
    getEntityByIndetifierRequest: GetEntityByIdentifierRequest
  ): Promise<Entity> {
    try {
      return await this.entitiesRepository.getEntityByIdentifier(
        getEntityByIndetifierRequest
      );
    } catch (error) {
      throw error;
    }
  }

  async searchCommandersByFullName(
    searchCommandersByFullNameRequest: SearchCommandersByFullNameRequest
  ): Promise<EntityArray> {
    try {
      return await this.entitiesRepository.searchCommandersByFullName(
        searchCommandersByFullNameRequest
      );
    } catch (error) {
      throw error;
    }
  }

  async searchHighCommandersByFullName(
    searchCommandersByFullNameRequest: SearchCommandersByFullNameRequest
  ): Promise<EntityArray> {
    try {
      return await this.entitiesRepository.searchHighCommandersByFullName(
        searchCommandersByFullNameRequest
      );
    } catch (error) {
      throw error;
    }
  }

  async searchEntitiesByFullName(
    searchEntitiesByFullNameRequest: SearchEntitiesByFullNameRequest
  ): Promise<EntityArray> {
    try {
      return await this.entitiesRepository.searchEntitiesByFullName(
        searchEntitiesByFullNameRequest
      );
    } catch (error) {
      throw error;
    }
  }

  async getEntityById(
    getEntityByIdRequest: GetEntityByIdRequest
  ): Promise<Entity> {
    try {
      return await this.entitiesRepository.getEntityById(getEntityByIdRequest);
    } catch (error) {
      throw error;
    }
  }

  async deleteEntity(
    deleteEntityRequest: DeleteEntityRequest
  ): Promise<SuccessMessage> {
    try {
      return await this.entitiesRepository.deleteEntity(deleteEntityRequest);
    } catch (error) {
      throw error;
    }
  }

  async updateEntity(
    updateEntityRequest: UpdateEntityRequest
  ): Promise<Entity> {
    try {
      return await this.entitiesRepository.updateEntity(updateEntityRequest);
    } catch (error) {
      throw error;
    }
  }

  async disconnectDIFromEntity(
    disconnectDIFromEntityRequest: DisconnectDIFromEntityRequest
  ): Promise<SuccessMessage> {
    try {
      return await this.entitiesRepository.disconnectDIFromEntity(
        disconnectDIFromEntityRequest
      );
    } catch (error) {
      throw error;
    }
  }

  async connectEntityAndDI(
    connectEntityAndDIRequest: ConnectEntityAndDIRequest
  ): Promise<SuccessMessage> {
    try {
      return await this.entitiesRepository.connectEntityAndDI(
        connectEntityAndDIRequest
      );
    } catch (error) {
      throw error;
    }
  }
}
