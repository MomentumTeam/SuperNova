import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as config from '../config';
import {
  Entity,
  GetEntityByIdRequest,
  GetPrefixByOGIdRequest,
  GetRoleIdSuffixByOGReq,
  OGPrefix,
  RoleIdSuffix,
} from '../interfaces/protoc/proto/kartoffelService';
import { findPath } from '../utils/path';

const PROTO_PATH = `${findPath('proto')}/kartoffelService.proto`;

const packageDefinition: protoLoader.PackageDefinition = protoLoader.loadSync(
  PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    // defaults: true,
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
  static async getRoleIdSuffixByOG(
    getRoleIdSuffixByOGReq: GetRoleIdSuffixByOGReq
  ): Promise<RoleIdSuffix> {
    console.log('getRoleIdSuffixByOG');
    return new Promise((resolve, reject) => {
      kartoffelClient.GetRoleIdSuffixByOG(
        getRoleIdSuffixByOGReq,
        (err: any, roleIdSuffix: RoleIdSuffix) => {
          if (err) {
            reject(err);
          } else {
            resolve(roleIdSuffix);
          }
        }
      );
    });
  }

  static async getEntityById(
    getEntityById: GetEntityByIdRequest
  ): Promise<Entity> {
    console.log('getEntityById');
    return new Promise((resolve, reject) => {
      kartoffelClient.GetEntityById(
        getEntityById,
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

  static async getPrefixByOGId(
    getPrefixByOGIdRequest: GetPrefixByOGIdRequest
  ): Promise<OGPrefix> {
    console.log('getPrefixByOGId');
    return new Promise((resolve, reject) => {
      kartoffelClient.GetPrefixByOGId(
        getPrefixByOGIdRequest,
        (err: any, prefix: OGPrefix) => {
          if (err) {
            reject(err);
          } else {
            resolve(prefix);
          }
        }
      );
    });
  }
}
