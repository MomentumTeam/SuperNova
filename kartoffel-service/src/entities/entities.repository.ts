import { KartoffelFaker } from '../mock/kartoffel.faker';
import { KartoffelUtils } from '../utils/kartoffel.utils';
import * as C from '../config';
import {
  CreateEntityRequest,
  Entity,
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
  IdMessage,
  GetPictureByEntityIdentifierRequest,
} from '../interfaces/protoc/proto/kartoffelService';
import { cleanUnderscoreFields } from '../utils/json.utils';
import { logger } from '../logger';
import { fillEntityFields } from '../utils/entities.utils';

export class EntitiesRepository {
  private kartoffelFaker: KartoffelFaker;
  private kartoffelUtils: KartoffelUtils;
  constructor(kartoffelUtils: KartoffelUtils, kartoffelFaker: KartoffelFaker) {
    this.kartoffelFaker = kartoffelFaker;
    this.kartoffelUtils = kartoffelUtils;
  }

  async createEntity(
    createEntityRequest: CreateEntityRequest
  ): Promise<IdMessage> {
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
        return { id: data.id } as IdMessage;
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
          `${C.kartoffelUrl}/api/entities/digitalIdentity/${encodeURIComponent(
            getEntityByDIRequest.uniqueId
          )}`,
          { expanded: true }
        );
        fillEntityFields(data);
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
          `${C.kartoffelUrl}/api/entities/role/${encodeURIComponent(
            getEntityByRoleIdRequest.roleId
          )}`,
          { expanded: true }
        );
        fillEntityFields(data);
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
        const queryParams: any = { ...getEntitiesUnderOGRequest };
        queryParams.expanded = true;
        delete queryParams.id;
        if (!queryParams.page || !queryParams.pageSize) {
          //get all children
          let page = 1;
          let entities: Entity[] = [];
          while (true) {
            const currentPage = await this.getEntitiesUnderOG({
              id: getEntitiesUnderOGRequest.id,
              direct: getEntitiesUnderOGRequest.direct,
              page: page,
              pageSize: 100,
            });
            if (!currentPage.entities || currentPage.entities.length === 0) {
              break;
            }
            entities.push(...currentPage.entities);
            page++;
          }
          entities.map((entity: any) => fillEntityFields(entity));
          return { entities: entities } as EntityArray;
        } else {
          const data = await this.kartoffelUtils.kartoffelGet(
            `${C.kartoffelUrl}/api/entities/group/${getEntitiesUnderOGRequest.id}`,
            queryParams
          );
          data.map((entity: any) => fillEntityFields(entity));
          return { entities: data as Entity[] };
        }
      }
    } catch (error) {
      throw error;
    }
  }

  async getPictureByEntityIdentifier(
    getPictureByEntityIdentifierRequest: GetPictureByEntityIdentifierRequest
  ): Promise<Image> {
    try {
      cleanUnderscoreFields(getPictureByEntityIdentifierRequest);
      if (C.useFaker) {
        const image: Image = await this.kartoffelFaker.randomPicture();
        return image;
      } else {
        const image: string =
          await this.kartoffelUtils.kartoffelGetBufferStream(
            `${C.kartoffelUrl}/api/entities/${getPictureByEntityIdentifierRequest.identifier}/pictures/profile`
          );
        return { image: image };
      }
    } catch (error: any) {
      logger.error(
        `Error while downloading image for id=${getPictureByEntityIdentifierRequest.identifier}`,
        {
          error: { message: error.message },
        }
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
        const queryParams: any = { ...getEntitiesByHierarchyRequest };
        queryParams.expanded = true;
        delete queryParams.hierarchy;
        if (!queryParams.page || !queryParams.pageSize) {
          //get all groups by hierarchy
          let page = 1;
          let entities: Entity[] = [];
          while (true) {
            const currentPage = await this.getEntitiesByHierarchy({
              hierarchy: getEntitiesByHierarchyRequest.hierarchy,
              direct: getEntitiesByHierarchyRequest.direct,
              page: page,
              pageSize: 100,
            });
            if (!currentPage.entities || currentPage.entities.length === 0) {
              break;
            }
            entities.push(...currentPage.entities);
            page++;
          }
          entities.map((entity) => {
            fillEntityFields(entity);
          });
          return { entities: entities } as EntityArray;
        } else {
          const data = await this.kartoffelUtils.kartoffelGet(
            `${C.kartoffelUrl}/api/entities/hierarchy/${encodeURIComponent(
              getEntitiesByHierarchyRequest.hierarchy
            )}`,
            queryParams
          );
          data.map((entity: any) => {
            fillEntityFields(entity);
          });
          return { entities: data as Entity[] };
        }
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
        fillEntityFields(data);
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
        let url = `${
          C.kartoffelUrl
        }/api/entities/search?fullName=${encodeURIComponent(
          searchCommandersByFullNameRequest.fullName
        )}`;
        if (C.searchWithRanks) {
          for (let rank of C.commanderRanks) {
            url = url + `&rank=${encodeURIComponent(rank)}`;
          }
        }
        if (searchCommandersByFullNameRequest.source) {
          url =
            url +
            `&digitalIdentity.source=${searchCommandersByFullNameRequest.source}`;
        } else {
          url = url + `&digitalIdentity.source=${C.defaultDISource}`;
        }
        url = url + '&expanded=true';
        const data = await this.kartoffelUtils.kartoffelGet(url);
        data.map((entity: any) => {
          fillEntityFields(entity);
        });
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
        let url = `${
          C.kartoffelUrl
        }/api/entities/search?fullName=${encodeURIComponent(
          searchCommandersByFullNameRequest.fullName
        )}`;
        if (C.searchWithRanks) {
          for (let rank of C.highCommanderRanks) {
            url = url + `&rank=${encodeURIComponent(rank)}`;
          }
        }
        if (searchCommandersByFullNameRequest.source) {
          url =
            url +
            `&digitalIdentity.source=${searchCommandersByFullNameRequest.source}`;
        } else {
          url = url + `&digitalIdentity.source=${C.defaultDISource}`;
        }
        url = url + '&expanded=true';
        const data = await this.kartoffelUtils.kartoffelGet(url);
        data.map((entity: any) => {
          fillEntityFields(entity);
        });
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
        let url = `${C.kartoffelUrl}/api/entities/search`;
        const queryParams: any = { ...searchEntitiesByFullNameRequest };
        queryParams.expanded = true;
        if (searchEntitiesByFullNameRequest.source) {
          queryParams['digitalIdentity.source'] = queryParams.source;
        }
        delete queryParams.source;
        const data = await this.kartoffelUtils.kartoffelGet(url, queryParams);
        data.map((entity: any) => {
          fillEntityFields(entity);
        });
        return { entities: data as Entity[] } as EntityArray;
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
          const picture = await this.getPictureByEntityIdentifier({
            identifier: data.personalNumber || data.identityCard,
          });
          data.picture = picture.image;
        }
        fillEntityFields(data);
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
          `${C.kartoffelUrl}/api/entities/${
            disconnectDIFromEntityRequest.id
          }/digitalIdentity/${encodeURIComponent(
            disconnectDIFromEntityRequest.uniqueId
          )}`
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
        const body: any = {};
        if (connectEntityAndDIRequest.upn !== undefined) {
          body.upn = connectEntityAndDIRequest.upn;
        }

        const data = await this.kartoffelUtils.kartoffelPut(
          `${C.kartoffelUrl}/api/entities/${
            connectEntityAndDIRequest.id
          }/digitalIdentity/${encodeURIComponent(
            connectEntityAndDIRequest.uniqueId
          )}`,
          body
        );
        return { success: true };
      }
    } catch (error) {
      throw error;
    }
  }
}
