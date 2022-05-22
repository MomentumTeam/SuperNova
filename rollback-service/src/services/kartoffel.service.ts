import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { rejects } from 'assert';
import { resolve } from 'path';
import * as config from '../config';
import {
  GetDIByUniqueIdRequest,
  DigitalIdentity,
  GetOGByIdRequest,
  OrganizationGroup,
  Entity,
  GetEntityByIdentifierRequest,
  IsJobTitleAlreadyTakenReq,
  IsJobTitleAlreadyTakenRes,
  GetEntityByRoleIdRequest,
  Role,
  GetRoleByRoleIdRequest,
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

const clients: any = [];
for (let i = 0; i < config.grpcPoolSize; i++) {
  clients.push(
    new protoDescriptor.Kartoffel(
      config.kartoffelServiceUrl,
      grpc.credentials.createInsecure(),
      { 'grpc.Keepalive_timeout_ms': 5000 }
    )
  );
}

function randomClient(): any {
  return clients[Math.floor(Math.random() * clients.length)];
}

export default class KartoffelService {
  static async getDIByUniqueId(
    getDIByUniqueIdRequest: GetDIByUniqueIdRequest
  ): Promise<DigitalIdentity> {
    return new Promise((resolve, reject) => {
      randomClient().GetDIByUniqueId(
        getDIByUniqueIdRequest,
        (err: any, response: DigitalIdentity) => {
          if (err) {
            logger.info('getDIByUniqueId ERROR in KartoffelService', {
              err,
              calRequest: getDIByUniqueIdRequest,
            });
            reject(err);
          }
          logger.info('getDIByUniqueId OK in KartoffelService', {
            callRequest: getDIByUniqueIdRequest,
          });
          resolve(response);
        }
      );
    });
  }

  static async getOGById(
    getOGByIdRequest: GetOGByIdRequest
  ): Promise<OrganizationGroup> {
    return new Promise((resolve, reject) => {
      randomClient().GetOGById(
        getOGByIdRequest,
        (err: any, response: OrganizationGroup) => {
          if (err) {
            logger.info('getOGById ERROR in KartoffelService', {
              err,
              callRequest: getOGByIdRequest,
            });
            reject(err);
          }
          logger.info('getOGById OK in KartoffelService', {
            callRequest: getOGByIdRequest,
          });
          resolve(response);
        }
      );
    });
  }

  static async getEntityByIdentifier(
    getEntityByIdentifierRequest: GetEntityByIdentifierRequest
  ): Promise<Entity> {
    return new Promise((resolve, reject) => {
      randomClient().GetEntityByIdentifier(
        getEntityByIdentifierRequest,
        (err: any, response: any) => {
          if (err) {
            logger.info('getEntityByIdentifier ERROR in KartoffelService', {
              err,
              callRequest: getEntityByIdentifierRequest,
            });
            reject(err);
          }
          logger.info('getEntityByIdentifier OK in KartoffelService', {
            callRequest: getEntityByIdentifierRequest,
          });
          resolve(response);
        }
      );
    });
  }

  static async isJobTitleAlreadyTaken(
    isJobTitleAlreadyTakenReq: IsJobTitleAlreadyTakenReq
  ): Promise<IsJobTitleAlreadyTakenRes> {
    return new Promise((resolve, reject) => {
      randomClient().IsJobTitleAlreadyTaken(
        isJobTitleAlreadyTakenReq,
        (err: any, response: IsJobTitleAlreadyTakenRes) => {
          if (err) {
            logger.info('isJobTitleAlreadyTaken ERROR is KartoffelService', {
              err,
              callRequest: isJobTitleAlreadyTakenReq,
            });
            reject(err);
          }
          logger.info('isJobTitleAlreadyTaken OK is KartoffelService', {
            callRequest: isJobTitleAlreadyTakenReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async getEntityByRoleId(
    getEntityByRoleIdRequest: GetEntityByRoleIdRequest
  ): Promise<Entity> {
    return new Promise((resolve, reject) => {
      randomClient().GetEntityByRoleId(
        getEntityByRoleIdRequest,
        (err: any, response: Entity) => {
          if (err) {
            logger.info('getEntityByRoleId ERROR is KartoffelService', {
              err,
              callRequest: getEntityByRoleIdRequest,
            });
            reject(err);
          }
          logger.info('getEntityByRoleId OK is KartoffelService', {
            callRequest: getEntityByRoleIdRequest,
          });
          resolve(response);
        }
      );
    });
  }

  static async getRoleByRoleId(
    getRoleByRoleIdRequest: GetRoleByRoleIdRequest
  ): Promise<Role> {
    return new Promise((resolve, reject) => {
      randomClient().GetRoleByRoleId(
        getRoleByRoleIdRequest,
        (err: any, response: Role) => {
          if (err) {
            logger.info('getRoleByRoleId ERROR is KartoffelService', {
              err,
              callRequest: getRoleByRoleIdRequest,
            });
            reject(err);
          }
          logger.info('getRoleByRoleId OK is KartoffelService', {
            callRequest: getRoleByRoleIdRequest,
          });
          resolve(response);
        }
      );
    });
  }

  static async getEntityById(
    getEntityByIdRequest: GetEntityByIdRequest
  ): Promise<Entity> {
    return new Promise((resolve, reject) => {
      randomClient().GetEntityByRoleId(
        getEntityByIdRequest,
        (err: any, response: Entity) => {
          if (err) {
            logger.info('getEntityById ERROR is KartoffelService', {
              err,
              callRequest: getEntityByIdRequest,
            });
            reject(err);
          }
          logger.info('getEntityById OK is KartoffelService', {
            callRequest: getEntityByIdRequest,
          });
          resolve(response);
        }
      );
    });
  }
}
