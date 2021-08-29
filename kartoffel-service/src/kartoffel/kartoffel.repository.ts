import { SpikeService } from '../spike/spikeService';
import axios, { AxiosInstance } from 'axios';
import https from 'https';
import * as C from '../config';
import { KartoffelFaker } from '../mock/kartoffel.faker';
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
  GetEntityByRoleIdRequest,
  GetOGTreeRequest,
  GetPictureByEntityIdRequest,
  GetRoleByRoleIdRequest,
  GetRolesUnderOGRequest,
  Image,
  OGArray,
  OGTree,
  OrganizationGroup,
  Role,
  RoleArray,
  SearchEntitiesByFullNameRequest,
  SearchOGRequest,
  SuccessMessage,
} from '../interfaces/protoc/proto/kartoffelService';
import { logger } from '../logger';

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

  async kartoffelGet(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.axiosKartoffel
        .get(url)
        .then((res) => {
          logger.info(`Kartoffel GET Request OK`, {
            url: url,
            response: res,
          });
          resolve(res);
        })
        .catch((error) => {
          logger.error(`Kartoffel GET Request ERROR`, {
            url: url,
            error: error.message,
          });
          reject(error);
        });
    });
  }

  async kartoffelDelete(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.axiosKartoffel
        .delete(url)
        .then((res) => {
          logger.info(`Kartoffel DELETE Request OK`, {
            url: url,
            response: res,
          });
          resolve(res);
        })
        .catch((error) => {
          logger.error(`Kartoffel DELETE Request ERROR`, {
            url: url,
            error: error.message,
          });
          reject(error);
        });
    });
  }

  async kartoffelPost(url: string, body: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.axiosKartoffel
        .post(url, body)
        .then((res) => {
          logger.info(`Kartoffel POST Request OK`, {
            url: url,
            requestBoody: body,
            response: res,
          });
          resolve(res);
        })
        .catch((error) => {
          logger.error(`Kartoffel POST Request ERROR`, {
            url: url,
            requestBoody: body,
            error: error.message,
          });
          reject(error);
        });
    });
  }

  async kartoffelPatch(url: string, body: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.axiosKartoffel
        .patch(url, body)
        .then((res) => {
          logger.info(`Kartoffel PATCH Request OK`, {
            url: url,
            requestBoody: body,
            response: res,
          });
          resolve(res);
        })
        .catch((error) => {
          logger.error(`Kartoffel PATCH Request ERROR`, {
            url: url,
            requestBoody: body,
            error: error.message,
          });
          reject(error);
        });
    });
  }

  async getPictureByEntityId(
    getPictureByEntityIdRequest: GetPictureByEntityIdRequest
  ): Promise<Image> {
    try {
      if (C.useFaker) {
        const image: Image = await this.kartoffelFaker.randomPicture();
        return image;
      } else {
        //TODO
        const image: Image = await this.kartoffelFaker.randomPicture();
        return image;
      }
    } catch (error) {
      throw error;
    }
  }

  async getOGTree(getOGTreeRequest: GetOGTreeRequest): Promise<OGTree> {
    try {
      if (C.useFaker) {
        return this.kartoffelFaker.randomOGTree();
      } else {
        //TODO
        return this.kartoffelFaker.randomOGTree();
      }
    } catch (error) {
      throw error;
    }
  }

  async searchOG(searchOGRequest: SearchOGRequest): Promise<OGArray> {
    try {
      if (C.useFaker) {
        return this.kartoffelFaker.randomOGArray();
      } else {
        const res = await this.kartoffelGet(
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
        const res = await this.kartoffelPost(
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
        const res = await this.kartoffelPost(
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
        const res = await this.kartoffelPost(
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
        await this.kartoffelPatch(
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
        const entityArray: EntityArray =
          await this.kartoffelFaker.randomEntityArray(false);
        return entityArray;
      } else {
        const res = await this.kartoffelGet(
          `${C.kartoffelUrl}/entities/search?fullName=${searchEntitiesByFullNameRequest.fullName}`
        );
        return { entities: res.data as Entity[] };
      }
    } catch (error) {
      throw error;
    }
  }

  async getRoleByRoleId(
    getRoleByRoleIdRequest: GetRoleByRoleIdRequest
  ): Promise<Role> {
    try {
      if (C.useFaker) {
        return this.kartoffelFaker.randomRole();
      } else {
        const res = await this.kartoffelGet(
          `${C.kartoffelUrl}/roles/search?roleId=${getRoleByRoleIdRequest.roleId}`
        );
        return res.data as Role;
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
        const res = await this.kartoffelGet(
          `${C.kartoffelUrl}/roles/hierarchy/${getRolesUnderOGRequest.groupId}?direct=${getRolesUnderOGRequest.direct}`
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
        const res = await this.kartoffelPatch(
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
        const entity: Entity = await this.kartoffelFaker.randomEntity(false);
        return entity;
      } else {
        const res = await this.kartoffelPost(
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
        const entity: Entity = await this.kartoffelFaker.randomEntity(true);
        return entity;
      } else {
        const res = await this.kartoffelGet(
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
        await this.kartoffelPatch(
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

  async deleteOG(deleteOGRequest: DeleteOGRequest): Promise<SuccessMessage> {
    try {
      if (C.useFaker) {
        return { success: true };
      } else {
        await this.kartoffelDelete(
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
        const res = await this.kartoffelGet(
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
        await this.kartoffelDelete(
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
        await this.kartoffelDelete(
          `${C.kartoffelUrl}/digitalIdentities/${deleteDIRequest.id}`
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
        const entityArray: EntityArray =
          await this.kartoffelFaker.randomEntityArray(false);
        return entityArray;
      } else {
        const res = await this.kartoffelGet(
          `${C.kartoffelUrl}/entities/group/${getEntitiesUnderOGRequest.id}?direct=${getEntitiesUnderOGRequest.direct}`
        );
        return { entities: res.data as Entity[] };
      }
    } catch (error) {
      throw error;
    }
  }
}
