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
  GetEntityByMongoIdRequest,
  GetEntityByIdNumberRequest,
} from '../interfaces/protoc/proto/kartoffelService';

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
      if (C.useFaker) {
        const entity: Entity = await this.kartoffelFaker.randomEntity(false);
        return entity;
      } else {
        const res = await this.kartoffelUtils.kartoffelPost(
          `${C.kartoffelUrl}/entities`,
          createEntityRequest
        );
        return res.data as Entity;
      }
    } catch (error) {
      throw error;
    }
  }

  async getPictureByEntityId(
    getPictureByEntityIdRequest: GetPictureByEntityIdRequest
  ): Promise<Image> {
    try {
      if (C.useFaker) {
        const image: Image = await this.kartoffelFaker.randomPicture();
        return image;
      } else {
        const image: string =
          await this.kartoffelUtils.kartoffelGetBufferStream(
            `${C.kartoffelUrl}/entities/${getPictureByEntityIdRequest.id}/pictures/profile`
          );
        return { image: image };
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
        const res = await this.kartoffelUtils.kartoffelGet(
          `${C.kartoffelUrl}/entities/group/${getEntitiesUnderOGRequest.id}?direct=${getEntitiesUnderOGRequest.direct}`
        );
        return { entities: res.data as Entity[] };
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
        const res = await this.kartoffelUtils.kartoffelGet(
          `${C.kartoffelUrl}/entities/search?fullName=${searchEntitiesByFullNameRequest.fullName}`
        );
        return { entities: res.data as Entity[] };
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
        const entity: Entity = await this.kartoffelFaker.randomEntity(true);
        return entity;
      } else {
        const res = await this.kartoffelUtils.kartoffelGet(
          `${C.kartoffelUrl}/entities/${getEntityByMongoIdRequest.id}`
        );
        return res.data as Entity;
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
        const entity: Entity = await this.kartoffelFaker.randomEntity(true);
        return entity;
      } else {
        const res = await this.kartoffelUtils.kartoffelGet(
          `${C.kartoffelUrl}/entities/identifier/${getEntityByIdNumberRequest.idNumber}`
        );
        return res.data as Entity;
      }
    } catch (error) {
      throw error;
    }
  }
}
