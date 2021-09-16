import * as grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import * as config from '../config';
import {
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

const requestClient: any = new protoDescriptor.RequestService(
  config.requestServiceUrl,
  grpc.credentials.createInsecure()
);

export default class RequestService {
  static async updateRequest(updateReq: UpdateReq): Promise<Request> {
    return new Promise((resolve, reject) => {
      requestClient.UpdateRequest(updateReq, (error: any, request: Request) => {
        if (error) {
          logger.error('updateRequest in RequestService ERROR', {
            updateReq,
            error: { message: error.message },
          });
          reject(error);
        } else {
          logger.info('updateRequest in RequestService', {
            updateReq,
            request,
          });
          resolve(request);
        }
      });
    });
  }

  static async updateApproverDecision(
    updateApproverDecisionReq: UpdateApproverDecisionReq
  ): Promise<Request> {
    console.log('updateApproverDecision');
    return new Promise((resolve, reject) => {
      requestClient.UpdateApproverDecision(
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
              request,
            });
            resolve(request);
          }
        }
      );
    });
  }
}
