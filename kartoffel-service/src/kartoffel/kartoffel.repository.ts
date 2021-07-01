import { SpikeService } from "../spike/spikeService";
import axios, { AxiosInstance } from "axios";
import https from "https";
import * as C from "../config";
import { KartoffelFaker } from "../mock/kartoffel.faker";
import {
  ConnectEntityAndDIRequest,
  ConnectRoleAndDIRequest,
  CreateDIRequest,
  CreateEntityRequest,
  CreateOGRequest,
  CreateRoleRequest,
  DeleteDIRequest,
  DeleteOGRequest,
  DeleteRoleRequest,
  DigitalIdentity,
  DisconnectDIFromEntityRequest,
  Entity,
  EntityArray,
  GetChildrenOfOGRequest,
  GetEntitiesUnderOGRequest,
  GetEntityByIdNumberRequest,
  GetEntityByMongoIdRequest,
  GetEntityByRoleIdRequest,
  GetRolesUnderOGRequest,
  OGArray,
  OrganizationGroup,
  Role,
  RoleArray,
  SearchEntitiesByFullNameRequest,
  SearchOGRequest,
  SearchRolesByRoleIdRequest,
  SuccessMessage,
} from "../interfaces/protoc/proto/kartoffelService";

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
  async searchOG(searchOGRequest: SearchOGRequest): Promise<OGArray> {
    try {
      if (C.useFaker) {
        return this.kartoffelFaker.randomOGArray();
      } else {
        const res = await this.axiosKartoffel.get(
          `${C.kartoffelUrl}/organizationGroup/search?hierarchyAndName=${searchOGRequest.hierarchyAndName}`
        );
        return { groups: res.data };
      }
    } catch (error) {
      throw error;
    }
  }
  async createOG(createOGRequest: CreateOGRequest): Promise<OrganizationGroup> {
    try {
      if (C.useFaker) {
        return this.kartoffelFaker.randomOG();
      } else {
        const res = await this.axiosKartoffel.post(
          `${C.kartoffelUrl}/organizationGroup`,
          createOGRequest
        );
        return res.data as OrganizationGroup;
      }
    } catch (error) {
      throw error;
    }
  }

  async createDI(createDIRequest: CreateDIRequest): Promise<DigitalIdentity> {
    try {
      if (C.useFaker) {
        return this.kartoffelFaker.randomDI();
      } else {
        const res = await this.axiosKartoffel.post(
          `${C.kartoffelUrl}/digitalIdentities`,
          createDIRequest
        );
        return res.data as DigitalIdentity;
      }
    } catch (error) {
      throw error;
    }
  }

  async createRole(createRoleRequest: CreateRoleRequest): Promise<Role> {
    try {
      if (C.useFaker) {
        return this.kartoffelFaker.randomRole();
      } else {
        const res = await this.axiosKartoffel.post(
          `${C.kartoffelUrl}/roles`,
          createRoleRequest
        );
        return res.data as Role;
      }
    } catch (error) {
      throw error;
    }
  }

  async connectRoleAndDI(
    connectRoleAndDIRequest: ConnectRoleAndDIRequest
  ): Promise<SuccessMessage> {
    try {
      if (C.useFaker) {
        return { success: true };
      } else {
        await this.axiosKartoffel.patch(
          `${C.kartoffelUrl}/roles/${connectRoleAndDIRequest.id}/connectDigitalIdentity`,
          {
            digitalIdentityUniqueId: connectRoleAndDIRequest.uniqueId,
          }
        );
        return { success: true };
      }
    } catch (error) {
      throw error;
    }
  }

  async searchEntitiesByFullName(
    searchEntitiesByFullNameRequest: SearchEntitiesByFullNameRequest
  ): Promise<EntityArray> {
    try {
      if (C.useFaker) {
        return this.kartoffelFaker.randomEntityArray();
      } else {
        const res = await this.axiosKartoffel.get(
          `${C.kartoffelUrl}/entities/search?fullName=${searchEntitiesByFullNameRequest.fullName}`
        );
        return { entities: res.data as Entity[] };
      }
    } catch (error) {
      throw error;
    }
  }

  async getEntityByIdNumber(
    getEntityByIdNumberRequest: GetEntityByIdNumberRequest
  ): Promise<Entity> {
    try {
      if (C.useFaker) {
        return this.kartoffelFaker.randomEntity();
      } else {
        const res = await this.axiosKartoffel.get(
          `${C.kartoffelUrl}/entities/identifier/${getEntityByIdNumberRequest.idNumber}`
        );
        return res.data as Entity;
      }
    } catch (error) {
      throw error;
    }
  }

  async searchRolesByRoleId(
    searchRolesByRoleIdRequest: SearchRolesByRoleIdRequest
  ): Promise<RoleArray> {
    try {
      if (C.useFaker) {
        return this.kartoffelFaker.randomRoleArray();
      } else {
        const res = await this.axiosKartoffel.get(
          `${C.kartoffelUrl}/roles/search?roleId=${searchRolesByRoleIdRequest.roleId}`
        );
        return { roles: res.data as Role[] };
      }
    } catch (error) {
      throw error;
    }
  }

  async getRolesUnderOG(
    getRolesUnderOGRequest: GetRolesUnderOGRequest
  ): Promise<RoleArray> {
    try {
      if (C.useFaker) {
        return this.kartoffelFaker.randomRoleArray();
      } else {
        const res = await this.axiosKartoffel.get(
          `${C.kartoffelUrl}/roles/hierarchy/${getRolesUnderOGRequest.id}?direct=${getRolesUnderOGRequest.direct}`
        );
        return { roles: res.data as Role[] };
      }
    } catch (error) {
      throw error;
    }
  }

  async connectEntityAndDI(
    connectEntityAndDIRequest: ConnectEntityAndDIRequest
  ): Promise<SuccessMessage> {
    try {
      if (C.useFaker) {
        return { success: true };
      } else {
        const res = await this.axiosKartoffel.patch(
          `${C.kartoffelUrl}/entities/${connectEntityAndDIRequest.id}/connectDigitalIdentity`,
          {
            digitalIdentityUniqueId: connectEntityAndDIRequest.uniqueId,
          }
        );
        return { success: true };
      }
    } catch (error) {
      throw error;
    }
  }

  async createEntity(
    createEntityRequest: CreateEntityRequest
  ): Promise<Entity> {
    try {
      if (C.useFaker) {
        return this.kartoffelFaker.randomEntity();
      } else {
        const res = await this.axiosKartoffel.post(
          `${C.kartoffelUrl}/entities`,
          createEntityRequest
        );
        return res.data as Entity;
      }
    } catch (error) {
      throw error;
    }
  }

  async getEntityByRoleId(
    getEntityByRoleIdRequest: GetEntityByRoleIdRequest
  ): Promise<Entity> {
    try {
      if (C.useFaker) {
        return this.kartoffelFaker.randomEntity();
      } else {
        const res = await this.axiosKartoffel.get(
          `${C.kartoffelUrl}/entities/role/${getEntityByRoleIdRequest.roleId}`
        );
        return res.data as Entity;
      }
    } catch (error) {
      throw error;
    }
  }

  async disconnectDIFromEntity(
    disconnectDIFromEntityRequest: DisconnectDIFromEntityRequest
  ): Promise<SuccessMessage> {
    try {
      if (C.useFaker) {
        return { success: true };
      } else {
        await this.axiosKartoffel.patch(
          `${C.kartoffelUrl}/entities/${disconnectDIFromEntityRequest.id}/disconnectDIgitalIdentity`,
          {
            digitalIdentityUniqueId: disconnectDIFromEntityRequest.uniqueId,
          }
        );
        return { success: true };
      }
    } catch (error) {
      throw error;
    }
  }

  async getEntityByMongoId(
    getEntityByMongoIdRequest: GetEntityByMongoIdRequest
  ): Promise<Entity> {
    try {
      if (C.useFaker) {
        return this.kartoffelFaker.randomEntity();
      } else {
        const res = await this.axiosKartoffel.get(
          `${C.kartoffelUrl}/entities/${getEntityByMongoIdRequest.id}`
        );
        return res.data as Entity;
      }
    } catch (error) {
      throw error;
    }
  }

  async deleteOG(deleteOGRequest: DeleteOGRequest): Promise<SuccessMessage> {
    try {
      if (C.useFaker) {
        return { success: true };
      } else {
        await this.axiosKartoffel.delete(
          `${C.kartoffelUrl}/groups/${deleteOGRequest.id}`
        );
        return { success: true };
      }
    } catch (error) {
      throw error;
    }
  }

  async getChildrenOfOG(
    getChildrenOfOGRequest: GetChildrenOfOGRequest
  ): Promise<OGArray> {
    try {
      if (C.useFaker) {
        return this.kartoffelFaker.randomOGArray();
      } else {
        const res = await this.axiosKartoffel.get(
          `${C.kartoffelUrl}/groups/${getChildrenOfOGRequest.id}/children?expanded=true`
        );
        return { groups: res.data as OrganizationGroup[] };
      }
    } catch (error) {
      throw error;
    }
  }

  async deleteRole(
    deleteRoleRequest: DeleteRoleRequest
  ): Promise<SuccessMessage> {
    try {
      if (C.useFaker) {
        return { success: true };
      } else {
        await this.axiosKartoffel.delete(
          `${C.kartoffelUrl}/roles/${deleteRoleRequest.roleId}`
        );
        return { success: true };
      }
    } catch (error) {
      throw error;
    }
  }

  async deleteDI(deleteDIRequest: DeleteDIRequest): Promise<SuccessMessage> {
    try {
      if (C.useFaker) {
        return { success: true };
      } else {
        await this.axiosKartoffel.delete(
          `${C.kartoffelUrl}/digitalIdentities/${deleteDIRequest.uniqueId}`
        );
        return { success: true };
      }
    } catch (error) {
      throw error;
    }
  }

  async getEntitiesUnderOG(
    getEntitiesUnderOGRequest: GetEntitiesUnderOGRequest
  ): Promise<EntityArray> {
    try {
      if (C.useFaker) {
        return this.kartoffelFaker.randomEntityArray();
      } else {
        const res = await this.axiosKartoffel.get(
          `${C.kartoffelUrl}/entities/group/${getEntitiesUnderOGRequest.id}?direct=${getEntitiesUnderOGRequest.direct}`
        );
        return { entities: res.data as Entity[] };
      }
    } catch (error) {
      throw error;
    }
  }
}
