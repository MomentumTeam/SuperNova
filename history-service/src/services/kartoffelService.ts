import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import * as config from '../config';
import {
  Entity,
  OrganizationGroup,
  GetEntityByIdRequest,
  GetRoleByRoleIdRequest,
  GetOGByIdRequest,
  Role,
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
  static async getEntityById(
    getEntityById: GetEntityByIdRequest
  ): Promise<Entity> {
    return new Promise((resolve, reject) => {
      kartoffelClient.GetEntityById(
        getEntityById,
        (err: any, entity: Entity) => {
          if (err) {
            logger.error('getEntityById in KartoffelService ERROR', {
              getEntityById,
              err,
            });
            reject(err);
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

  static async GetOGById(
    getOGByIdReq: GetOGByIdRequest
  ): Promise<OrganizationGroup> {
    return new Promise((resolve, reject) => {
      kartoffelClient.GetOGById(
        getOGByIdReq,
        (err: any, organizationGroup: OrganizationGroup) => {
          if (err) {
            logger.error('GetOGById in KartoffelService ERROR', {
              getOGByIdReq,
              err,
            });
            reject(err);
          } else {
            logger.info('GetOGById in KartoffelService', {
              getOGByIdReq,
              organizationGroup,
            });
            resolve(organizationGroup);
          }
        }
      );
    });
  }

  static async GetRoleByRoleId(
    getRoleByRoleIdReq: GetRoleByRoleIdRequest
  ): Promise<Role> {
    return new Promise((resolve, reject) => {
      kartoffelClient.GetRoleByRoleId(
        getRoleByRoleIdReq,
        (err: any, role: Role) => {
          if (err) {
            logger.error('GetRoleByRoleId in KartoffelService ERROR', {
              getRoleByRoleIdReq,
              err,
            });
            reject(err);
          } else {
            logger.info('GetRoleByRoleId in KartoffelService', {
              getRoleByRoleIdReq,
              role,
            });
            resolve(role);
          }
        }
      );
    });
  }
}
