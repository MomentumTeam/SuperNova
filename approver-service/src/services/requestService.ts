import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as config from '../config';
import {
  CanPushToQueueReq,
  CanPushToQueueRes,
  Request,
  UpdateApproverDecisionReq,
  UpdateReq,
} from '../interfaces/protoc/proto/requestService';
import { logger } from '../logger';
import { findPath } from '../utils/path';

const PROTO_PATH = `${findPath('proto')}/requestService.proto`;

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
  grpc.loadPackageDefinition(packageDefinition).RequestService;

const clients: any = [];
for (let i = 0; i < config.grpcPoolSize; i++) {
  clients.push(
    new protoDescriptor.RequestService(
      config.requestServiceUrl,
      grpc.credentials.createInsecure(),
      { 'grpc.keepalive_timeout_ms': 5000 }
    )
  );
}

function randomClient(): any {
  return clients[Math.floor(Math.random() * clients.length)];
}

export default class RequestService {
  static async updateRequest(updateReq: UpdateReq): Promise<Request> {
    return new Promise((resolve, reject) => {
      randomClient().UpdateRequest(
        updateReq,
        (error: any, request: Request) => {
          if (error) {
            logger.error('updateRequest in RequestService ERROR', {
              updateReq,
              error: { message: error.message },
            });
            reject(error);
          } else {
            logger.info('updateRequest in RequestService', {
              updateReq,
            });
            resolve(request);
          }
        }
      );
    });
  }

  static async updateApproverDecision(
    updateApproverDecisionReq: UpdateApproverDecisionReq
  ): Promise<Request> {
    console.log('updateApproverDecision');
    return new Promise((resolve, reject) => {
      randomClient().UpdateApproverDecision(
        updateApproverDecisionReq,
        (error: any, request: Request) => {
          if (error) {
            logger.error('updateApproverDecision in RequestService ERROR', {
              updateApproverDecisionReq,
              error: { message: error.message },
            });
            reject(error);
          } else {
            logger.info('updateApproverDecision in RequestService', {
              updateApproverDecisionReq,
            });
            resolve(request);
          }
        }
      );
    });
  }

  static async canPushToADQueue(
    canPushToADQueueReq: CanPushToQueueReq
  ): Promise<CanPushToQueueRes> {
    return new Promise((resolve, reject) => {
      randomClient().CanPushToADQueue(
        canPushToADQueueReq,
        (error: any, request: CanPushToQueueRes) => {
          if (error) {
            logger.error('CanPushToADQueue in RequestService ERROR', {
              canPushToADQueueReq,
              error: { message: error.message },
            });
            reject(error);
          } else {
            logger.info('CanPushToADQueue in RequestService', {
              canPushToADQueueReq,
            });
            resolve(request);
          }
        }
      );
    });
  }
}
