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
import { IGetRoleByRoleIdRequest } from "../interfaces/getRoleByRoleId/getRoleByRoleId.interface";
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
import { SpikeService } from "../spike/spikeService";
import axios, { AxiosInstance } from "axios";
import https from "https";
import * as C from "../config";
import * as KartoffelMock from "../mock/kartoffel.mock";

export class KartoffelRepository {
  private spikeService: SpikeService;
  private axiosKartoffel: AxiosInstance;

  constructor() {
    this.spikeService = new SpikeService();
    this.axiosKartoffel = axios.create();
    this.axiosKartoffel.defaults.httpsAgent = new https.Agent({
      rejectUnauthorized: false,
    });
    this.axiosKartoffel.interceptors.request.use(async (config) => {
      config.headers.Authorization = await this.spikeService.getSpikeToken();
      return config;
    });
  }
  async searchOG(searchOGRequest: ISearchOGRequest): Promise<IOGArray> {
    try {
      if (C.devMode) {
        return new OGArray([KartoffelMock.organizationGroup]);
      } else {
      }
    } catch (error) {
      throw error;
    }
  }
  async createOG(
    createOGRequest: ICreateOGRequest
  ): Promise<IOrganizationGroup> {
    try {
      if (C.devMode) {
        return KartoffelMock.organizationGroup;
      } else {
      }
    } catch (error) {
      throw error;
    }
  }

  async createDI(createDIRequest: ICreateDIRequest): Promise<IDigitalIdentity> {
    try {
      if (C.devMode) {
        return KartoffelMock.digitalIdentity;
      } else {
      }
    } catch (error) {
      throw error;
    }
  }

  async createRole(createRoleRequest: ICreateRoleRequest): Promise<IRole> {
    try {
      if (C.devMode) {
        return KartoffelMock.role;
      } else {
      }
    } catch (error) {
      throw error;
    }
  }

  async connectRoleAndDI(
    connectRoleAndDIRequest: IConnectRoleAndDIRequest
  ): Promise<ISuccessMessage> {
    try {
      if (C.devMode) {
        return new SuccessMessage(true);
      } else {
      }
    } catch (error) {
      throw error;
    }
  }

  async searchEntitiesByFullName(
    searchEntitiesByFullNameRequest: ISearchEntitiesByFullNameRequest
  ): Promise<IEntityArray> {
    try {
      if (C.devMode) {
        return new EntityArray([KartoffelMock.entity]);
      } else {
      }
    } catch (error) {
      throw error;
    }
  }

  async getEntityByIdNumber(
    getEntityByIdNumberRequest: IGetEntityByIdNumberRequest
  ): Promise<IEntity> {
    try {
      if (C.devMode) {
        return KartoffelMock.entity;
      } else {
      }
    } catch (error) {
      throw error;
    }
  }

  async getRoleByRoleId(
    getRoleByRoleIdRequest: IGetRoleByRoleIdRequest
  ): Promise<IRole> {
    try {
      if (C.devMode) {
        return KartoffelMock.role;
      } else {
      }
    } catch (error) {
      throw error;
    }
  }

  async getRolesUnderOG(
    getRolesUnderOGRequest: IGetRolesUnderOGRequest
  ): Promise<IRoleArray> {
    try {
      if (C.devMode) {
        return new RoleArray([KartoffelMock.role]);
      } else {
      }
    } catch (error) {
      throw error;
    }
  }

  async connectEntityAndDI(
    connectEntityAndDIRequest: IConnectEntityAndDIRequest
  ): Promise<ISuccessMessage> {
    try {
      if (C.devMode) {
        return new SuccessMessage(true);
      } else {
      }
    } catch (error) {
      throw error;
    }
  }

  async createEntity(
    createEntityRequest: ICreateEntityRequest
  ): Promise<IEntity> {
    try {
      if (C.devMode) {
        return KartoffelMock.entity;
      } else {
      }
    } catch (error) {
      throw error;
    }
  }

  async getEntityByRoleId(
    getEntityByRoleIdRequest: IGetEntityByRoleIdRequest
  ): Promise<IEntity> {
    try {
      if (C.devMode) {
        return KartoffelMock.entity;
      } else {
      }
    } catch (error) {
      throw error;
    }
  }

  async disconnectDIFromEntity(
    disconnectDIFromEntityRequest: IDisconnectDIFromEntityRequest
  ): Promise<ISuccessMessage> {
    try {
      if (C.devMode) {
        return new SuccessMessage(true);
      } else {
      }
    } catch (error) {
      throw error;
    }
  }

  async getEntityByMongoId(
    getEntityByMongoIdRequest: IGetEntityByMongoIdRequest
  ): Promise<IEntity> {
    try {
      if (C.devMode) {
        return KartoffelMock.entity;
      } else {
      }
    } catch (error) {
      throw error;
    }
  }

  async deleteOG(deleteOGRequest: IDeleteOGRequest): Promise<ISuccessMessage> {
    try {
      if (C.devMode) {
        return new SuccessMessage(true);
      } else {
      }
    } catch (error) {
      throw error;
    }
  }

  async getChildrenOfOG(
    getChildrenOfOGRequest: IGetChildrenOfOGRequest
  ): Promise<IOGArray> {
    try {
      if (C.devMode) {
        return new OGArray([KartoffelMock.organizationGroup]);
      } else {
      }
    } catch (error) {
      throw error;
    }
  }

  async deleteRole(
    deleteRoleRequest: IDeleteRoleRequest
  ): Promise<ISuccessMessage> {
    try {
      if (C.devMode) {
        return new SuccessMessage(true);
      } else {
      }
    } catch (error) {
      throw error;
    }
  }

  async deleteDI(deleteDIRequest: IDeleteDIRequest): Promise<ISuccessMessage> {
    try {
      if (C.devMode) {
        return new SuccessMessage(true);
      } else {
      }
    } catch (error) {
      throw error;
    }
  }

  async getEntitiesUnderOG(
    getEntitiesUnderOGRequest: IGetEntitiesUnderOGRequest
  ): Promise<IEntityArray> {
    try {
      if (C.devMode) {
        return new EntityArray([KartoffelMock.entity]);
      } else {
      }
    } catch (error) {
      throw error;
    }
  }
}
