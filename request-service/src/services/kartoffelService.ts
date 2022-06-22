import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as config from '../config';
import { findPath } from '../utils/path';
import {
  GetEntityByIdRequest,
  Entity,
} from '../interfaces/protoc/proto/kartoffelService';

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
  for(let i = 0; i < config.grpcPoolSize; i++) {
    clients.push(
      new protoDescriptor.Kartoffel(
        config.kartoffelSericeUrl,
        grpc.credentials.createInsecure(),
        { 'grpc.Keepalive_timeout_ms': 5000 }
      )
    );
  }

  function randomClient(): any {
    return clients[Math.floor(Math.random() * clients.length)];
  }

    export default class KartoffelService {
        static async getEntityById(
            getEntityByIdRequest: GetEntityByIdRequest
        ): Promise<Entity> {
            return new Promise((resolve, reject) => {
            randomClient().GetEntityById(
                getEntityByIdRequest,
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