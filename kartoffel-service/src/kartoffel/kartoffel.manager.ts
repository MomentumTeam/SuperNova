import { IConnectEntityAndDIRequest } from "../interfaces/connectEntityAndDI/connectEntityAndDIRequest.interface";
import { IConnectRoleAndDIRequest } from "../interfaces/connectRoleAndDI/connectRoleAndDIRequest.interface";
import { ICreateDIRequest } from "../interfaces/createDI/createDIRequest.interface";
import { ICreateEntityRequest } from "../interfaces/createEntity/createEntityRequest.interface";
import { ICreateOGRequest } from "../interfaces/createOG/crateOGRequest.interface";
import { ICreateRoleRequest } from "../interfaces/createRole/createRoleRequest.interface";
import { IDeleteDIRequest } from "../interfaces/deleteDI/deleteDIRequest.interface";
import { IDeleteOGRequest } from "../interfaces/deleteOG/deleteOGRequest.interface";
import { IDeleteRoleRequest } from "../interfaces/deleteRole/deleteRoleRequest.interface";
import { IDisconnectDIFromEntityRequest } from "../interfaces/disconnectDIFromEntity/disconnectDIFromEntityRequest.interface";
import { IGetChildrenOfOGRequest } from "../interfaces/getChildrenOfOG/getChildrenOfOGRequest.interface";
import { IGetEntitiesUnderOGRequest } from "../interfaces/getEntitiesUnderOG/getEntitiesUnderOGRequest.interface";
import { IGetEntityByIdNumberRequest } from "../interfaces/getEntityByIdNumber/getEntityByIdNumber.interface";
import { IGetEntityByMongoIdRequest } from "../interfaces/getEntityByMongoId/getEntityByMongoIdRequest.interface";
import { IGetEntityByRoleIdRequest } from "../interfaces/getEntityByRoleId/getEntityByRoleIdRequest.interface";
import { ISearchRolesByRoleIdRequest } from "../interfaces/searchRolesByRoleId/searchRolesByRoleId.interface";
import { IGetRolesUnderOGRequest } from "../interfaces/getRolesUnderOG/getRolesUnderOGRequest.interface";
import {
  DigitalIdentity,
  IDigitalIdentity,
} from "../interfaces/kartoffelTypes/digitalIdentity.interface";
import { Entity, IEntity } from "../interfaces/kartoffelTypes/entity.interface";
import {
  EntityArray,
  IEntityArray,
} from "../interfaces/kartoffelTypes/entityArray.interface";
import {
  IOGArray,
  OGArray,
} from "../interfaces/kartoffelTypes/ogArray.interface";
import {
  IOrganizationGroup,
  OrganizationGroup,
} from "../interfaces/kartoffelTypes/organizationGroup.interface";
import { IRole, Role } from "../interfaces/kartoffelTypes/role.interface";
import {
  IRoleArray,
  RoleArray,
} from "../interfaces/kartoffelTypes/roleArray.interface";
import {
  ISuccessMessage,
  SuccessMessage,
} from "../interfaces/kartoffelTypes/successMessage.interface";
import { ISearchEntitiesByFullNameRequest } from "../interfaces/searchEntitiesByFullName/searchEntitiesByFullNameRequest.interface";
import { ISearchOGRequest } from "../interfaces/searchOG/searchOGRequest.interface";
import { KartoffelRepository } from "./kartoffel.repository";

export class KartoffelManager {
  private kartoffelRepository: KartoffelRepository;
  constructor() {
    this.kartoffelRepository = new KartoffelRepository();
  }

  async searchOG(searchOGRequest: ISearchOGRequest): Promise<IOGArray> {
    try {
      return await this.kartoffelRepository.searchOG(searchOGRequest);
    } catch (error) {
      throw error;
    }
  }

  async createOG(
    createOGRequest: ICreateOGRequest
  ): Promise<IOrganizationGroup> {
    try {
      return await this.kartoffelRepository.createOG(createOGRequest);
    } catch (error) {
      throw error;
    }
  }

  async createDI(createDIRequest: ICreateDIRequest): Promise<IDigitalIdentity> {
    try {
      return await this.kartoffelRepository.createDI(createDIRequest);
    } catch (error) {
      throw error;
    }
  }

  async createRole(createRoleRequest: ICreateRoleRequest): Promise<IRole> {
    try {
      return await this.kartoffelRepository.createRole(createRoleRequest);
    } catch (error) {
      throw error;
    }
  }

  async connectRoleAndDI(
    connectRoleAndDIRequest: IConnectRoleAndDIRequest
  ): Promise<ISuccessMessage> {
    try {
      return await this.kartoffelRepository.connectRoleAndDI(
        connectRoleAndDIRequest
      );
    } catch (error) {
      throw error;
    }
  }

  async searchEntitiesByFullName(
    searchEntitiesByFullNameRequest: ISearchEntitiesByFullNameRequest
  ): Promise<IEntityArray> {
    try {
      return await this.kartoffelRepository.searchEntitiesByFullName(
        searchEntitiesByFullNameRequest
      );
    } catch (error) {
      throw error;
    }
  }

  async getEntityByIdNumber(
    getEntityByIdNumberRequest: IGetEntityByIdNumberRequest
  ): Promise<IEntity> {
    try {
      return await this.kartoffelRepository.getEntityByIdNumber(
        getEntityByIdNumberRequest
      );
    } catch (error) {
      throw error;
    }
  }

  async searchRolesByRoleId(
    searchRolesByRoleIdRequest: ISearchRolesByRoleIdRequest
  ): Promise<IRoleArray> {
    try {
      return await this.kartoffelRepository.searchRolesByRoleId(
        searchRolesByRoleIdRequest
      );
    } catch (error) {
      throw error;
    }
  }

  async getRolesUnderOG(
    getRolesUnderOGRequest: IGetRolesUnderOGRequest
  ): Promise<IRoleArray> {
    try {
      return await this.kartoffelRepository.getRolesUnderOG(
        getRolesUnderOGRequest
      );
    } catch (error) {
      throw error;
    }
  }

  async connectEntityAndDI(
    connectEntityAndDIRequest: IConnectEntityAndDIRequest
  ): Promise<ISuccessMessage> {
    try {
      return await this.kartoffelRepository.connectEntityAndDI(
        connectEntityAndDIRequest
      );
    } catch (error) {
      throw error;
    }
  }

  async createEntity(
    createEntityRequest: ICreateEntityRequest
  ): Promise<IEntity> {
    try {
      return await this.kartoffelRepository.createEntity(createEntityRequest);
    } catch (error) {
      throw error;
    }
  }

  async getEntityByRoleId(
    getEntityByRoleIdRequest: IGetEntityByRoleIdRequest
  ): Promise<IEntity> {
    try {
      return await this.kartoffelRepository.getEntityByRoleId(
        getEntityByRoleIdRequest
      );
    } catch (error) {
      throw error;
    }
  }

  async disconnectDIFromEntity(
    disconnectDIFromEntityRequest: IDisconnectDIFromEntityRequest
  ): Promise<ISuccessMessage> {
    try {
      return await this.kartoffelRepository.disconnectDIFromEntity(
        disconnectDIFromEntityRequest
      );
    } catch (error) {
      throw error;
    }
  }

  async getEntityByMongoId(
    getEntityByMongoIdRequest: IGetEntityByMongoIdRequest
  ): Promise<IEntity> {
    try {
      return await this.kartoffelRepository.getEntityByMongoId(
        getEntityByMongoIdRequest
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteOG(deleteOGRequest: IDeleteOGRequest): Promise<ISuccessMessage> {
    try {
      return await this.kartoffelRepository.deleteOG(deleteOGRequest);
    } catch (error) {
      throw error;
    }
  }

  async getChildrenOfOG(
    getChildrenOfOGRequest: IGetChildrenOfOGRequest
  ): Promise<IOGArray> {
    try {
      return await this.kartoffelRepository.getChildrenOfOG(
        getChildrenOfOGRequest
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteRole(
    deleteRoleRequest: IDeleteRoleRequest
  ): Promise<ISuccessMessage> {
    try {
      return await this.kartoffelRepository.deleteRole(deleteRoleRequest);
    } catch (error) {
      throw error;
    }
  }

  async deleteDI(deleteDIRequest: IDeleteDIRequest): Promise<ISuccessMessage> {
    try {
      return await this.kartoffelRepository.deleteDI(deleteDIRequest);
    } catch (error) {
      throw error;
    }
  }

  async getEntitiesUnderOG(
    getEntitiesUnderOGRequest: IGetEntitiesUnderOGRequest
  ): Promise<IEntityArray> {
    try {
      return await this.kartoffelRepository.getEntitiesUnderOG(
        getEntitiesUnderOGRequest
      );
    } catch (error) {
      throw error;
    }
  }
}
