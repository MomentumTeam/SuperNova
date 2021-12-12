import * as protoLoader from '@grpc/proto-loader';
import * as grpc from '@grpc/grpc-js';
import {
  Entity,
  GetEntityByDIRequest,
  GetEntityByRoleIdRequest,
} from '../interfaces/protoc/proto/kartoffelService';
import * as C from '../config';
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
  C.kartoffelServiceUrl,
  grpc.credentials.createInsecure(),
  { 'grpc.keepalive_timeout_ms': 5000 }
);

export default class KartoffelService {
  static async getEntityByDI(
    getEntityByDI: GetEntityByDIRequest
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      kartoffelClient.GetEntityByDI(
        getEntityByDI,
        (error: any, entity: Entity) => {
          if (error) {
            logger.error('getEntityByDI in KartoffelService ERROR', {
              getEntityByDI,
              error: { message: error.message },
            });
            reject(error);
          } else {
            logger.info('getEntityByDI in KartoffelService', {
              getEntityByDI,
              entity,
            });

            const domainUsers = entity.digitalIdentities.map(
              (di) => di.uniqueId
            );

            resolve({
              displayName: entity.displayName,
              akaUnit: entity.akaUnit,
              domainUsers: domainUsers,
              entityId: entity.id,
              personalNumber: entity.personalNumber,
              identityCard: entity.identityCard,
              directGroup: entity.directGroup,
            });
          }
        }
      );
    });
  }
}
