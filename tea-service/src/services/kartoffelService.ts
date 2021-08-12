import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as config from '../config';
import {
  Entity,
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
