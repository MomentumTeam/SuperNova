import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { findPath } from '../utils/path';
import * as config from '../config';
import { logger } from '../logger';
import {
  RequestIdArray,
  CanPushToQueueRes,
} from '../interfaces/protoc/proto/requestService';

//requestClient

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
  grpc.credentials.createInsecure()
);




export default class RequestService {
  static async getRequestIdsInProgress(): Promise<RequestIdArray> {
    logger.info(`Call to getRequestIdsInProgress in EXS`);

    return new Promise((resolve, reject) => {
      requestClient.GetRequestIdsInProgressByDue(
        (err: any, response: RequestIdArray) => {
          if (err) {
            logger.error(`getRequestIdsInProgress ERROR in EXS`, { err });
            reject(err);
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
        (err: any, response: CanPushToQueueRes) => {
          if (err) {
            logger.error(`CanPushToKartoffelQueue ERROR in EXS`, {
              err,
              callRequest: { id: requestId },
            });
            reject(err);
          }

          logger.info(`CanPushToKartoffelQueue OK in EXS`, {
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

        (err: any, response: CanPushToQueueRes) => {
          if (err) {
            logger.error(`CanPushToADQueue ERROR in EXS`, {
              err,
              callRequest: { id: requestId },
            });
            reject(err);
          }

          logger.info(`CanPushToADQueue OK in EXS`, {
            response: response,
          });
          resolve(response);
        }
      );
    });
  }
}
