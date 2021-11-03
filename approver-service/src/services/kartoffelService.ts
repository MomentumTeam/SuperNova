import * as grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import * as config from '../config';
import {
  EntityArray,
  Entity,
  SearchEntitiesByFullNameRequest,
  GetEntityByRoleIdRequest,
  GetEntityByIdRequest,
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

const kartoffelClient: any = new protoDescriptor.Kartoffel(
  config.kartoffelServiceUrl,
  grpc.credentials.createInsecure(),
  { 'grpc.keepalive_timeout_ms': 5000 }
);

export default class KartoffelService {
  static async searchEntitiesByFullName(
    searchEntitiesByFullName: SearchEntitiesByFullNameRequest
  ): Promise<EntityArray> {
    return new Promise((resolve, reject) => {
      kartoffelClient.SearchEntitiesByFullName(
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
              entityArray,
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
      kartoffelClient.SearchCommandersByFullName(
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
              entityArray,
            });
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
      kartoffelClient.SearchHighCommandersByFullName(
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
            logger.info('searchHighCommandersByFullName in KartoffelService', {
              searchCommandersByFullName,
              entityArray,
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
      kartoffelClient.GetEntityByRoleId(
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
              entity,
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
      kartoffelClient.GetEntityById(
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
              entity,
            });
            resolve(entity);
          }
        }
      );
    });
  }
}
