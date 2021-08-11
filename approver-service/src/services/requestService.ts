import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as config from '../config';
import {
  Request,
  UpdateDecisionReq,
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
      requestClient.UpdateRequest(updateReq, (err: any, request: Request) => {
        if (err) {
          logger.error('updateRequest in RequestService ERROR', {
            updateReq,
            err,
          });
          reject(err);
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

  static async updateCommanderDecision(
    updateDecisionReq: UpdateDecisionReq
  ): Promise<Request> {
    console.log('updateCommanderDecision');
    return new Promise((resolve, reject) => {
      requestClient.UpdateCommanderDecision(
        updateDecisionReq,
        (err: any, request: Request) => {
          if (err) {
            logger.error('updateCommanderDecision in RequestService ERROR', {
              updateDecisionReq,
              err,
            });
            reject(err);
          } else {
            logger.info('updateCommanderDecision in RequestService', {
              updateDecisionReq,
              request,
            });
            resolve(request);
          }
        }
      );
    });
  }

  static async updateSecurityDecision(
    updateDecisionReq: UpdateDecisionReq
  ): Promise<Request> {
    return new Promise((resolve, reject) => {
      requestClient.updateSecurityDecision(
        updateDecisionReq,
        (err: any, request: Request) => {
          if (err) {
            logger.error('updateSecurityDecision in RequestService ERROR', {
              updateDecisionReq,
              err,
            });
            reject(err);
          } else {
            logger.info('updateSecurityDecision in RequestService', {
              updateDecisionReq,
              request,
            });
            resolve(request);
          }
        }
      );
    });
  }

  static async updateSuperSecurityDecision(
    updateDecisionReq: UpdateDecisionReq
  ): Promise<Request> {
    return new Promise((resolve, reject) => {
      requestClient.updateSuperSecurityDecision(
        updateDecisionReq,
        (err: any, request: Request) => {
          if (err) {
            logger.error(
              'updateSuperSecurityDecision in RequestService ERROR',
              {
                updateDecisionReq,
                err,
              }
            );
            reject(err);
          } else {
            logger.info('updateSuperSecurityDecision in RequestService', {
              updateDecisionReq,
              request,
            });
            resolve(request);
          }
        }
      );
    });
  }
}
