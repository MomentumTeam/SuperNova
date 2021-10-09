import * as grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import { findPath } from '../utils/path';
import * as config from '../config';
import { logger } from '../logger';
import {
  RequestIdArray,
  CanPushToQueueRes,
  RequestArray,
  Request,
} from '../interfaces/protoc/proto/requestService';

const RS_PROTO_PATH = `${findPath('proto')}/requestService.proto`;

const rsPackageDefinition: protoLoader.PackageDefinition = protoLoader.loadSync(
  RS_PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  }
);

const rsProtoDescriptor: any =
  grpc.loadPackageDefinition(rsPackageDefinition).RequestService;

const requestClient: any = new rsProtoDescriptor.RequestService(
  config.requestServiceUrl,
  grpc.credentials.createInsecure(),
  { 'grpc.keepalive_timeout_ms': 5000 }
);

export default class RequestService {
  static async getRequestsInProgress(): Promise<RequestArray> {
    logger.info(`Call to getRequestsInProgress in EXS`);

    return new Promise((resolve, reject) => {
      requestClient.GetRequestsInProgressByDue(
        { due: Date.now() },
        (error: any, response: RequestArray) => {
          if (error) {
            logger.error(`getRequestsInProgress ERROR in EXS`, {
              error: { message: error.message },
            });
            reject(error);
          }

          logger.info(`getRequestsInProgress OK in EXS`, {
            response: response,
          });
          resolve(response);
        }
      );
    });
  }

  static async getRequestIdsInProgress(): Promise<RequestIdArray> {
    logger.info(`Call to getRequestIdsInProgress in EXS`);

    return new Promise((resolve, reject) => {
      requestClient.GetRequestIdsInProgressByDue(
        { due: Date.now() },
        (error: any, response: RequestIdArray) => {
          if (error) {
            logger.error(`getRequestIdsInProgress ERROR in EXS`, {
              error: { message: error.message },
            });
            reject(error);
          }

          logger.info(`getRequestIdsInProgress OK in EXS`, {
            response: response,
          });
          resolve(response);
        }
      );
    });
  }

  static async canPushToKartoffelQueue(
    requestId: string
  ): Promise<CanPushToQueueRes> {
    logger.info(`Call to CanPushToKartoffelQueue in EXS`);

    return new Promise((resolve, reject) => {
      requestClient.CanPushToKartoffelQueue(
        { id: requestId },
        (error: any, response: CanPushToQueueRes) => {
          if (error) {
            logger.error(`CanPushToKartoffelQueue ERROR in EXS`, {
              error: { message: error.message },
              callRequest: { id: requestId },
            });
            reject(error);
          }

          logger.info(`CanPushToKartoffelQueue OK in EXS`, {
            response: response,
          });
          resolve(response);
        }
      );
    });
  }

  static async syncBulkRequest(requestId: string): Promise<Request> {
    logger.info(`Call to SyncBulkRequest in EXS`);

    return new Promise((resolve, reject) => {
      requestClient.SyncBulkRequest(
        { id: requestId },
        (error: any, response: Request) => {
          if (error) {
            logger.error(`SyncBulkRequest ERROR in EXS`, {
              error: { message: error.message },
              callRequest: { id: requestId },
            });
            reject(error);
          }

          logger.info(`SyncBulkRequest OK in EXS`, {
            response: response,
          });
          resolve(response);
        }
      );
    });
  }

  static async canPushToADQueue(requestId: string): Promise<CanPushToQueueRes> {
    logger.info(`Call to CanPushToADQueue in EXS`);

    return new Promise((resolve, reject) => {
      requestClient.CanPushToADQueue(
        { id: requestId },
        (error: any, response: CanPushToQueueRes) => {
          if (error) {
            logger.error(`CanPushToADQueue ERROR in EXS`, {
              error: { message: error.message },
              callRequest: { id: requestId },
            });
            reject(error);
          }

          logger.info(`CanPushToADQueue OK in EXS`, {
            response: response,
          });
          resolve(response);
        }
      );
    });
  }

  static async updateRequest(
    id: string,
    requestProperties: any
  ): Promise<CanPushToQueueRes> {
    logger.info(`Call to updateRequest in EXS`);

    return new Promise((resolve, reject) => {
      requestClient.UpdateRequest(
        { id, requestProperties },
        (error: any, response: CanPushToQueueRes) => {
          if (error) {
            logger.error(`updateRequest ERROR in EXS`, {
              error: { message: error.message },
              callRequest: { id: id },
            });
            reject(error);
          }

          logger.info(`updateRequest OK in EXS`, {
            response: response,
          });
          resolve(response);
        }
      );
    });
  }
}
