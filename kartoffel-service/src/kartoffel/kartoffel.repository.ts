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
import { IDigitalIdentity } from "../interfaces/kartoffelTypes/digitalIdentity.interface";
import { IEntity } from "../interfaces/kartoffelTypes/entity.interface";
import {
  EntityArray,
  IEntityArray,
} from "../interfaces/kartoffelTypes/entityArray.interface";
import {
  IOGArray,
  OGArray,
} from "../interfaces/kartoffelTypes/ogArray.interface";
import { IOrganizationGroup } from "../interfaces/kartoffelTypes/organizationGroup.interface";
import { IRole } from "../interfaces/kartoffelTypes/role.interface";
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
import { KartoffelFaker } from "../mock/kartoffel.faker";

export class KartoffelRepository {
  private spikeService: SpikeService;
  private axiosKartoffel: AxiosInstance;
  private kartoffelFaker: KartoffelFaker;

  constructor() {
    this.kartoffelFaker = new KartoffelFaker();
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
        return this.kartoffelFaker.randomOGArray();
      } else {
        const res = await this.axiosKartoffel.get(
          `${C.kartoffelUrl}/organizationGroup/search?hierarchyAndName=${searchOGRequest.hierarchyAndName}`
        );
        return new OGArray(res.data as IOrganizationGroup[]);
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
        return this.kartoffelFaker.randomOG();
      } else {
        const res = await this.axiosKartoffel.post(
          `${C.kartoffelUrl}/organizationGroup`,
          createOGRequest
        );
        return res.data as IOrganizationGroup;
      }
    } catch (error) {
      throw error;
    }
  }

  async createDI(createDIRequest: ICreateDIRequest): Promise<IDigitalIdentity> {
    try {
      if (C.devMode) {
        return this.kartoffelFaker.randomDI();
      } else {
        const res = await this.axiosKartoffel.post(
          `${C.kartoffelUrl}/digitalIdentities`,
          createDIRequest
        );
        return res.data as IDigitalIdentity;
      }
    } catch (error) {
      throw error;
    }
  }

  async createRole(createRoleRequest: ICreateRoleRequest): Promise<IRole> {
    try {
      if (C.devMode) {
        return this.kartoffelFaker.randomRole();
      } else {
        const res = await this.axiosKartoffel.post(
          `${C.kartoffelUrl}/roles`,
          createRoleRequest
        );
        return res.data as IRole;
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
        await this.axiosKartoffel.patch(
          `${C.kartoffelUrl}/roles/${connectRoleAndDIRequest.id}/connectDigitalIdentity`,
          {
            digitalIdentityUniqueId: connectRoleAndDIRequest.uniqueId,
          }
        );
        return new SuccessMessage(true);
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
        return this.kartoffelFaker.randomEntityArray();
      } else {
        const res = await this.axiosKartoffel.get(
          `${C.kartoffelUrl}/entities/search?fullName=${searchEntitiesByFullNameRequest.fullName}`
        );
        return new EntityArray(res.data as IEntity[]);
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
        return this.kartoffelFaker.randomEntity();
      } else {
        const res = await this.axiosKartoffel.get(
          `${C.kartoffelUrl}/entities/identifier/${getEntityByIdNumberRequest.idNumber}`
        );
        return res.data as IEntity;
      }
    } catch (error) {
      throw error;
    }
  }

  async searchRolesByRoleId(
    searchRolesByRoleIdRequest: ISearchRolesByRoleIdRequest
  ): Promise<IRoleArray> {
    try {
      if (C.devMode) {
        return this.kartoffelFaker.randomRoleArray();
      } else {
        const res = await this.axiosKartoffel.get(
          `${C.kartoffelUrl}/roles/search?roleId=${searchRolesByRoleIdRequest.roleId}`
        );
        return new RoleArray([res.data as IRole]);
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
        return this.kartoffelFaker.randomRoleArray();
      } else {
        const res = await this.axiosKartoffel.get(
          `${C.kartoffelUrl}/roles/hierarchy/${getRolesUnderOGRequest.id}?direct=${getRolesUnderOGRequest.direct}`
        );
        return new RoleArray(res.data as IRole[]);
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
        const res = await this.axiosKartoffel.patch(
          `${C.kartoffelUrl}/entities/${connectEntityAndDIRequest.id}/connectDigitalIdentity`,
          {
            digitalIdentityUniqueId: connectEntityAndDIRequest.uniqueId,
          }
        );
        return new SuccessMessage(true);
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
        return this.kartoffelFaker.randomEntity();
      } else {
        const res = await this.axiosKartoffel.post(
          `${C.kartoffelUrl}/entities`,
          createEntityRequest
        );
        return res.data as IEntity;
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
        return this.kartoffelFaker.randomEntity();
      } else {
        const res = await this.axiosKartoffel.get(
          `${C.kartoffelUrl}/entities/role/${getEntityByRoleIdRequest.roleId}`
        );
        return res.data as IEntity;
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
        await this.axiosKartoffel.patch(
          `${C.kartoffelUrl}/entities/${disconnectDIFromEntityRequest.id}/disconnectDIgitalIdentity`,
          {
            digitalIdentityUniqueId: disconnectDIFromEntityRequest.uniqueId,
          }
        );
        return new SuccessMessage(true);
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
        return this.kartoffelFaker.randomEntity();
      } else {
        const res = await this.axiosKartoffel.get(
          `${C.kartoffelUrl}/entities/${getEntityByMongoIdRequest.id}`
        );
        return res.data as IEntity;
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
        await this.axiosKartoffel.delete(
          `${C.kartoffelUrl}/groups/${deleteOGRequest.id}`
        );
        return new SuccessMessage(true);
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
        return this.kartoffelFaker.randomOGArray();
      } else {
        const res = await this.axiosKartoffel.get(
          `${C.kartoffelUrl}/groups/${getChildrenOfOGRequest.id}/children?expanded=true`
        );
        return new OGArray(res.data as IOrganizationGroup[]);
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
        await this.axiosKartoffel.delete(
          `${C.kartoffelUrl}/roles/${deleteRoleRequest.roleId}`
        );
        return new SuccessMessage(true);
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
        await this.axiosKartoffel.delete(
          `${C.kartoffelUrl}/digitalIdentities/${deleteDIRequest.uniqueId}`
        );
        return new SuccessMessage(true);
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
        return this.kartoffelFaker.randomEntityArray();
      } else {
        const res = await this.axiosKartoffel.get(
          `${C.kartoffelUrl}/entities/group/${getEntitiesUnderOGRequest.id}?direct=${getEntitiesUnderOGRequest.direct}`
        );
        return new EntityArray(res.data as IEntity[]);
      }
    } catch (error) {
      throw error;
    }
  }
}
