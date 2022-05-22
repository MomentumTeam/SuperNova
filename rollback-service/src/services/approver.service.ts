import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { cli } from 'winston/lib/winston/config';
import * as config from '../config';
import {
  Approver,
  GetApproverByEntityIdReq,
} from '../interfaces/protoc/proto/approverService';
import { logger } from '../logger';
import { findPath } from '../utils/path';

const PROTO_PATH = `${findPath('proto')}/approverService.proto`;

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
  grpc.loadPackageDefinition(packageDefinition).ApproverService;

const clients: any = [];
for (let i = 0; i < config.grpcPoolSize; i++) {
  clients.push(
    new protoDescriptor.ApproverService(
      config.approverServiceUrl,
      grpc.credentials.createInsecure(),
      { 'grpc.keeplive_timout_ms': 5000 }
    )
  );
}

function randomClient(): any {
  return clients[Math.floor(Math.random() * clients.length)];
}

export default class ApproverService {
  static async  getApproverByEntityId(
    getAllApproverTypesReq: GetApproverByEntityIdReq
  ): Promise<Approver> {
    return new Promise((resolve, reject) => {
      randomClient().GetAllMyApproverTypes(
        getAllApproverTypesReq,
        (err: any, response: Approver) => {
          if (err) {
              logger.info('getAllMyApproverTypes ERROR in ApproverService',
              {
                  err,
                  callRequest: getAllApproverTypesReq,
              })
            reject(err);
          }
          resolve(response);
        }
      );
    });
  }
}
