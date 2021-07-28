import * as grpc from '@grpc/grpc-js';
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
    console.log('SearchEntitiesByFullName');
    return new Promise((resolve, reject) => {
      kartoffelClient.SearchEntitiesByFullName(
        searchEntitiesByFullName,
        (err: any, entityArray: EntityArray) => {
          if (err) {
            throw reject(err);
          } else {
            return resolve(entityArray);
          }
        }
      );
    });
  }

  static async getEntityByRoleId(
    getEntityByRoleId: GetEntityByRoleIdRequest
  ): Promise<Entity> {
    console.log('getEntityByRoleId');
    return new Promise((resolve, reject) => {
      kartoffelClient.GetEntityByRoleId(
        getEntityByRoleId,
        (err: any, entity: Entity) => {
          if (err) {
            reject(err);
          } else {
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
            reject(err);
          } else {
            resolve(entity);
          }
        }
      );
    });
  }
}
