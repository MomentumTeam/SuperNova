import { KartoffelFaker } from '../mock/kartoffel.faker';
import { KartoffelUtils } from '../utils/kartoffel.utils';
import * as C from '../config';
import {
  CreateEntityRequest,
  Entity,
  GetPictureByEntityIdRequest,
  Image,
  GetEntitiesUnderOGRequest,
  EntityArray,
  SearchEntitiesByFullNameRequest,
  GetEntityByRoleIdRequest,
  ConnectEntityAndDIRequest,
  SuccessMessage,
  GetEntityByDIRequest,
  GetEntitiesByHierarchyRequest,
  GetEntityByIdRequest,
  DeleteEntityRequest,
  UpdateEntityRequest,
  DisconnectDIFromEntityRequest,
  GetEntityByIdentifierRequest,
  SearchCommandersByFullNameRequest,
} from '../interfaces/protoc/proto/kartoffelService';
import { cleanUnderscoreFields } from '../utils/json.utils';
import { logger } from '../logger';

export class EntitiesRepository {
  private kartoffelFaker: KartoffelFaker;
  private kartoffelUtils: KartoffelUtils;
  constructor(kartoffelUtils: KartoffelUtils, kartoffelFaker: KartoffelFaker) {
    this.kartoffelFaker = kartoffelFaker;
    this.kartoffelUtils = kartoffelUtils;
  }

  async createEntity(
    createEntityRequest: CreateEntityRequest
  ): Promise<Entity> {
    try {
      cleanUnderscoreFields(createEntityRequest);
      if (C.useFaker) {
        const entity: Entity = await this.kartoffelFaker.randomEntity(false);
        return entity;
      } else {
        const data = await this.kartoffelUtils.kartoffelPost(
          `${C.kartoffelUrl}/api/entities`,
          createEntityRequest
        );
        const entity = await this.getEntityById({ id: data.id });
        return entity as Entity;
      }
    } catch (error) {
      throw error;
    }
  }

  async getEntityByDI(
    getEntityByDIRequest: GetEntityByDIRequest
  ): Promise<Entity> {
    try {
      cleanUnderscoreFields(getEntityByDIRequest);
      if (C.useFaker) {
        const entity: Entity = await this.kartoffelFaker.randomEntity(false);
        return entity;
      } else {
        const data = await this.kartoffelUtils.kartoffelGet(
          `${C.kartoffelUrl}/api/entities/digitalIdentity/${getEntityByDIRequest.uniqueId}`,
          { expanded: true }
        );
        return data as Entity;
      }
    } catch (error) {
      throw error;
    }
  }

  async getEntityByRoleId(
    getEntityByRoleIdRequest: GetEntityByRoleIdRequest
  ): Promise<Entity> {
    try {
      cleanUnderscoreFields(getEntityByRoleIdRequest);
      if (C.useFaker) {
        const entity: Entity = await this.kartoffelFaker.randomEntity(false);
        return entity;
      } else {
        const data = await this.kartoffelUtils.kartoffelGet(
          `${C.kartoffelUrl}/api/entities/role/${getEntityByRoleIdRequest.roleId}`,
          { expanded: true }
        );
        return data as Entity;
      }
    } catch (error) {
      throw error;
    }
  }

  async getEntitiesUnderOG(
    getEntitiesUnderOGRequest: GetEntitiesUnderOGRequest
  ): Promise<EntityArray> {
    try {
      cleanUnderscoreFields(getEntitiesUnderOGRequest);
      if (C.useFaker) {
        const entityArray: EntityArray =
          await this.kartoffelFaker.randomEntityArray(
            false,
            getEntitiesUnderOGRequest.pageSize
          );
        return entityArray;
      } else {
        getEntitiesUnderOGRequest.page = getEntitiesUnderOGRequest.page
          ? getEntitiesUnderOGRequest.page
          : 1;
        getEntitiesUnderOGRequest.pageSize = getEntitiesUnderOGRequest.pageSize
          ? getEntitiesUnderOGRequest.pageSize
          : 20;
        getEntitiesUnderOGRequest.direct =
          getEntitiesUnderOGRequest.direct != undefined
            ? getEntitiesUnderOGRequest.direct
            : true;
        const data = await this.kartoffelUtils.kartoffelGet(
          `${C.kartoffelUrl}/api/entities/group/${getEntitiesUnderOGRequest.id}`,
          {
            expanded: true,
            direct: getEntitiesUnderOGRequest.direct,
            page: getEntitiesUnderOGRequest.page,
            pageSize: getEntitiesUnderOGRequest.pageSize,
          }
        );
        return { entities: data as Entity[] };
      }
    } catch (error) {
      throw error;
    }
  }

  async getPictureByEntityId(
    getPictureByEntityIdRequest: GetPictureByEntityIdRequest
  ): Promise<Image> {
    try {
      cleanUnderscoreFields(getPictureByEntityIdRequest);
      if (C.useFaker) {
        const image: Image = await this.kartoffelFaker.randomPicture();
        return image;
      } else {
        const image: string =
          await this.kartoffelUtils.kartoffelGetBufferStream(
            `${C.kartoffelUrl}/api/entities/${getPictureByEntityIdRequest.id}/pictures/profile`
          );
        return { image: image };
      }
    } catch (error: any) {
      logger.error(
        `Error while downloading image for id=${getPictureByEntityIdRequest.id}`,
        { error: { message: error.message } }
      );
      return { image: C.defaultImage };
    }
  }

  async getEntitiesByHierarchy(
    getEntitiesByHierarchyRequest: GetEntitiesByHierarchyRequest
  ): Promise<EntityArray> {
    try {
      cleanUnderscoreFields(getEntitiesByHierarchyRequest);
      if (C.useFaker) {
        const entityArray: EntityArray =
          await this.kartoffelFaker.randomEntityArray(
            false,
            getEntitiesByHierarchyRequest.pageSize
          );
        return entityArray;
      } else {
        getEntitiesByHierarchyRequest.page = getEntitiesByHierarchyRequest.page
          ? getEntitiesByHierarchyRequest.page
          : 1;
        getEntitiesByHierarchyRequest.pageSize =
          getEntitiesByHierarchyRequest.pageSize
            ? getEntitiesByHierarchyRequest.pageSize
            : 20;
        getEntitiesByHierarchyRequest.direct =
          getEntitiesByHierarchyRequest.direct
            ? getEntitiesByHierarchyRequest.direct
            : true;
        const data = await this.kartoffelUtils.kartoffelGet(
          `${C.kartoffelUrl}/api/entities/hierarchy/${getEntitiesByHierarchyRequest.hierarchy}`,
          {
            expanded: true,
            direct: getEntitiesByHierarchyRequest.direct,
            page: getEntitiesByHierarchyRequest.page,
            pageSize: getEntitiesByHierarchyRequest.pageSize,
          }
        );
        return { entities: data as Entity[] };
      }
    } catch (error) {
      throw error;
    }
  }

  async getEntityByIdentifier(
    getEntityByIndetifierRequest: GetEntityByIdentifierRequest
  ): Promise<Entity> {
    try {
      cleanUnderscoreFields(getEntityByIndetifierRequest);
      if (C.useFaker) {
        const entity: Entity = await this.kartoffelFaker.randomEntity(true);
        return entity;
      } else {
        const data = await this.kartoffelUtils.kartoffelGet(
          `${C.kartoffelUrl}/api/entities/identifier/${getEntityByIndetifierRequest.identifier}`,
          { expanded: true }
        );
        return data as Entity;
      }
    } catch (error) {
      throw error;
    }
  }

  async searchCommandersByFullName(
    searchCommandersByFullNameRequest: SearchCommandersByFullNameRequest
  ): Promise<EntityArray> {
    try {
      cleanUnderscoreFields(searchCommandersByFullNameRequest);
      if (C.useFaker) {
        const entityArray: EntityArray =
          await this.kartoffelFaker.randomEntityArray(false);
        return entityArray;
      } else {
        let url = `${C.kartoffelUrl}/api/entities/search?fullName=${searchCommandersByFullNameRequest.fullName}`;
        for (let rank of C.commanderRanks) {
          url = url + `&rank=${rank}`;
        }
        if (searchCommandersByFullNameRequest.source) {
          url = url + `&source=${searchCommandersByFullNameRequest.source}`;
        } else {
          url = url + `&source=oneTree`;
        }
        const data = await this.kartoffelUtils.kartoffelGet(url);
        return { entities: data as Entity[] };
      }
    } catch (error) {
      throw error;
    }
  }

  async searchHighCommandersByFullName(
    searchCommandersByFullNameRequest: SearchCommandersByFullNameRequest
  ): Promise<EntityArray> {
    try {
      cleanUnderscoreFields(searchCommandersByFullNameRequest);
      if (C.useFaker) {
        const entityArray: EntityArray =
          await this.kartoffelFaker.randomEntityArray(false);
        return entityArray;
      } else {
        let url = `${C.kartoffelUrl}/api/entities/search?fullName=${searchCommandersByFullNameRequest.fullName}`;
        for (let rank of C.highCommanderRanks) {
          url = url + `&rank=${rank}`;
        }
        if (searchCommandersByFullNameRequest.source) {
          url = url + `&source=${searchCommandersByFullNameRequest.source}`;
        } else {
          url = url + `&source=oneTree`;
        }
        const data = await this.kartoffelUtils.kartoffelGet(url);
        return { entities: data as Entity[] };
      }
    } catch (error) {
      throw error;
    }
  }

  async searchEntitiesByFullName(
    searchEntitiesByFullNameRequest: SearchEntitiesByFullNameRequest
  ): Promise<EntityArray> {
    try {
      cleanUnderscoreFields(searchEntitiesByFullNameRequest);
      if (C.useFaker) {
        const entityArray: EntityArray =
          await this.kartoffelFaker.randomEntityArray(false);
        return entityArray;
      } else {
        let url = `${C.kartoffelUrl}/api/entities/search?fullName=${searchEntitiesByFullNameRequest.fullName}&expanded=true`;
        if (searchEntitiesByFullNameRequest.rank) {
          url = url + `&rank=${searchEntitiesByFullNameRequest.rank}`;
        }
        if (searchEntitiesByFullNameRequest.entityType) {
          url =
            url + `&entityType=${searchEntitiesByFullNameRequest.entityType}`;
        }
        if (searchEntitiesByFullNameRequest.underGroupId) {
          url =
            url +
            `&underGroupId=${searchEntitiesByFullNameRequest.underGroupId}`;
        }
        if (searchEntitiesByFullNameRequest.status) {
          url = url + `&status=${searchEntitiesByFullNameRequest.status}`;
        }
        // if (searchEntitiesByFullNameRequest.source) {
        //   url = url + `&source=${searchEntitiesByFullNameRequest.source}`;
        // } else {
        //   url = url + `&source=oneTree`;
        // }
        url = encodeURI(url);
        const data = await this.kartoffelUtils.kartoffelGet(url);
        return { entities: data as Entity[] };
      }
    } catch (error) {
      throw error;
    }
  }

  async getEntityById(
    getEntityByIdRequest: GetEntityByIdRequest
  ): Promise<Entity> {
    try {
      cleanUnderscoreFields(getEntityByIdRequest);
      const withPicture =
        getEntityByIdRequest.withPicture != undefined
          ? getEntityByIdRequest.withPicture
          : false;
      if (C.useFaker) {
        let entity: Entity = await this.kartoffelFaker.randomEntity(
          withPicture
        );
        entity.id = getEntityByIdRequest.id;
        return entity;
      } else {
        const data = await this.kartoffelUtils.kartoffelGet(
          `${C.kartoffelUrl}/api/entities/${getEntityByIdRequest.id}`,
          { expanded: true }
        );
        delete data.picture;
        if (withPicture) {
          const picture = await this.getPictureByEntityId({
            id: getEntityByIdRequest.id,
          });
          data.picture = picture.image;
        }
        return data as Entity;
      }
    } catch (error) {
      throw error;
    }
  }

  async deleteEntity(
    deleteEntityRequest: DeleteEntityRequest
  ): Promise<SuccessMessage> {
    try {
      cleanUnderscoreFields(deleteEntityRequest);
      if (C.useFaker) {
        return { success: true };
      } else {
        const data = await this.kartoffelUtils.kartoffelDelete(
          `${C.kartoffelUrl}/api/entities/${deleteEntityRequest.id}`
        );
        return { success: true };
      }
    } catch (error) {
      throw error;
    }
  }

  async updateEntity(
    updateEntityRequest: UpdateEntityRequest
  ): Promise<Entity> {
    try {
      cleanUnderscoreFields(updateEntityRequest);
      if (C.useFaker) {
        const entity: Entity = await this.kartoffelFaker.randomEntity(true);
        return entity;
      } else {
        let updateReq = updateEntityRequest.properties;
        cleanUnderscoreFields(updateReq);
        //TODO update date fields
        const data = await this.kartoffelUtils.kartoffelPatch(
          `${C.kartoffelUrl}/api/entities/${updateEntityRequest.id}`,
          { ...updateReq }
        );
        const entity = await this.getEntityById({ id: updateEntityRequest.id });
        return entity as Entity;
      }
    } catch (error) {
      throw error;
    }
  }

  async disconnectDIFromEntity(
    disconnectDIFromEntityRequest: DisconnectDIFromEntityRequest
  ): Promise<SuccessMessage> {
    try {
      cleanUnderscoreFields(disconnectDIFromEntityRequest);
      if (C.useFaker) {
        return { success: true };
      } else {
        await this.kartoffelUtils.kartoffelDelete(
          `${C.kartoffelUrl}/api/entities/${disconnectDIFromEntityRequest.id}/digitalIdentity/${disconnectDIFromEntityRequest.uniqueId}`
        );
        return { success: true };
      }
    } catch (error) {
      throw error;
    }
  }

  async connectEntityAndDI(
    connectEntityAndDIRequest: ConnectEntityAndDIRequest
  ): Promise<SuccessMessage> {
    try {
      cleanUnderscoreFields(connectEntityAndDIRequest);
      if (C.useFaker) {
        return { success: true };
      } else {
        const data = await this.kartoffelUtils.kartoffelPut(
          `${C.kartoffelUrl}/api/entities/${connectEntityAndDIRequest.id}/digitalIdentity/${connectEntityAndDIRequest.uniqueId}`,
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
}
