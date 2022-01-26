import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import * as config from '../config';
import {
  EntityArray,
  Entity,
  SearchEntitiesByFullNameRequest,
  GetEntityByRoleIdRequest,
  GetEntityByIdRequest,
  OrganizationGroup,
  GetOGByIdRequest,
} from '../interfaces/protoc/proto/kartoffelService';
import { logger } from '../logger';
import { findPath } from '../utils/path';

const PROTO_PATH = `${findPath('proto')}/kartoffelService.proto`;

const packageDefinition: protoLoader.PackageDefinition = protoLoader.loadSync(
  PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  }
);

const protoDescriptor: any =
  grpc.loadPackageDefinition(packageDefinition).Kartoffel;

const clients: any = [];
for (let i = 0; i < config.grpcPoolSize; i++) {
  clients.push(
    new protoDescriptor.Kartoffel(
      config.kartoffelServiceUrl,
      grpc.credentials.createInsecure(),
      { 'grpc.keepalive_timeout_ms': 5000 }
    )
  );
}

function randomClient(): any {
  return clients[Math.floor(Math.random() * clients.length)];
}

export default class KartoffelService {
  static async searchEntitiesByFullName(
    searchEntitiesByFullName: SearchEntitiesByFullNameRequest
  ): Promise<EntityArray> {
    return new Promise((resolve, reject) => {
      randomClient().SearchEntitiesByFullName(
        searchEntitiesByFullName,
        (error: any, entityArray: EntityArray) => {
          if (error) {
            logger.error('searchEntitiesByFullName in KartoffelService ERROR', {
              searchEntitiesByFullName,
              error: { message: error.message },
            });
            reject(error);
          } else {
            logger.info('searchEntitiesByFullName in KartoffelService', {
              searchEntitiesByFullName,
            });
            resolve(entityArray);
          }
        }
      );
    });
  }

  static async searchCommandersByFullName(
    searchCommandersByFullName: SearchEntitiesByFullNameRequest
  ): Promise<EntityArray> {
    return new Promise((resolve, reject) => {
      randomClient().SearchCommandersByFullName(
        searchCommandersByFullName,
        (error: any, entityArray: EntityArray) => {
          if (error) {
            logger.error(
              'searchCommandersByFullName in KartoffelService ERROR',
              {
                searchCommandersByFullName,
                error: { message: error.message },
              }
            );
            reject(error);
          } else {
            logger.info('searchCommandersByFullName in KartoffelService', {
              searchCommandersByFullName,
            });
            entityArray.entities = entityArray.entities.filter(
              (entity) =>
                entity.digitalIdentities && entity.digitalIdentities.length > 0
            );
            resolve(entityArray);
          }
        }
      );
    });
  }

  static async searchHighCommandersByFullName(
    searchCommandersByFullName: SearchEntitiesByFullNameRequest
  ): Promise<EntityArray> {
    return new Promise((resolve, reject) => {
      randomClient().SearchHighCommandersByFullName(
        searchCommandersByFullName,
        (error: any, entityArray: EntityArray) => {
          if (error) {
            logger.error(
              'searchHighCommandersByFullName in KartoffelService ERROR',
              {
                searchCommandersByFullName,
                error: { message: error.message },
              }
            );
            reject(error);
          } else {
            entityArray.entities = entityArray.entities.filter(
              (entity) =>
                entity.digitalIdentities && entity.digitalIdentities.length > 0
            );
            logger.info('searchHighCommandersByFullName in KartoffelService', {
              searchCommandersByFullName,
            });
            resolve(entityArray);
          }
        }
      );
    });
  }

  static async getEntityByRoleId(
    getEntityByRoleId: GetEntityByRoleIdRequest
  ): Promise<Entity> {
    return new Promise((resolve, reject) => {
      randomClient().GetEntityByRoleId(
        getEntityByRoleId,
        (error: any, entity: Entity) => {
          if (error) {
            logger.error('getEntityByRoleId in KartoffelService ERROR', {
              getEntityByRoleId,
              error: { message: error.message },
            });
            reject(error);
          } else {
            logger.info('getEntityByRoleId in KartoffelService', {
              getEntityByRoleId,
            });
            resolve(entity);
          }
        }
      );
    });
  }

  static async getEntityById(
    getEntityById: GetEntityByIdRequest
  ): Promise<Entity> {
    return new Promise((resolve, reject) => {
      randomClient().GetEntityById(
        getEntityById,
        (error: any, entity: Entity) => {
          if (error) {
            logger.error('getEntityById in KartoffelService ERROR', {
              getEntityById,
              error: { message: error.message },
            });
            reject(error);
          } else {
            logger.info('getEntityById in KartoffelService', {
              getEntityById,
            });
            resolve(entity);
          }
        }
      );
    });
  }

  static async getOGById(
    getOGByIdReq: GetOGByIdRequest
  ): Promise<OrganizationGroup> {
    return new Promise((resolve, reject) => {
      randomClient().GetOGById(
        getOGByIdReq,
        (error: any, group: OrganizationGroup) => {
          if (error) {
            logger.error('getOGById in KartoffelService ERROR', {
              getOGByIdReq,
              error: { message: error.message },
            });
            reject(error);
          } else {
            logger.info('getOGById in KartoffelService', {
              getOGByIdReq,
            });
            resolve(group);
          }
        }
      );
    });
  }
}
