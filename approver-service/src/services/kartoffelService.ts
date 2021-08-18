import * as grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import * as config from '../config';
import {
  EntityArray,
  Entity,
  SearchEntitiesByFullNameRequest,
  GetEntityByRoleIdRequest,
  GetEntityByMongoIdRequest,
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
  grpc.credentials.createInsecure()
);

export default class KartoffelService {
  static async searchEntitiesByFullName(
    searchEntitiesByFullName: SearchEntitiesByFullNameRequest
  ): Promise<EntityArray> {
    return new Promise((resolve, reject) => {
      kartoffelClient.SearchEntitiesByFullName(
        searchEntitiesByFullName,
        (err: any, entityArray: EntityArray) => {
          if (err) {
            logger.error('searchEntitiesByFullName in KartoffelService ERROR', {
              searchEntitiesByFullName,
              err,
            });
            throw reject(err);
          } else {
            logger.info('searchEntitiesByFullName in KartoffelService', {
              searchEntitiesByFullName,
              entityArray,
            });
            return resolve(entityArray);
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
        (err: any, entity: Entity) => {
          if (err) {
            logger.error('getEntityByRoleId in KartoffelService ERROR', {
              getEntityByRoleId,
              err,
            });
            reject(err);
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

  static async getEntityByMongoId(
    getEntityByMongoId: GetEntityByMongoIdRequest
  ): Promise<Entity> {
    console.log('getEntityByMongoId');
    return new Promise((resolve, reject) => {
      kartoffelClient.GetEntityByMongoId(
        getEntityByMongoId,
        (err: any, entity: Entity) => {
          if (err) {
            logger.error('getEntityByMongoId in KartoffelService ERROR', {
              getEntityByMongoId,
              err,
            });
            reject(err);
          } else {
            logger.info('getEntityByMongoId in KartoffelService', {
              getEntityByMongoId,
              entity,
            });
            resolve(entity);
          }
        }
      );
    });
  }
}
