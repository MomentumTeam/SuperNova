import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { config } from '../config';
import { logger } from '../utils/logger';
import { findPath } from '../utils/path';
import {
  ReportTeaReq,
  SuccessMessage,
} from '../interfaces/protoc/proto/teaService';

const PROTO_PATH = `${findPath('proto')}/teaService.proto`;

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

const protoDescriptor: any = grpc.loadPackageDefinition(packageDefinition).Tea;

const teaClient: any = new protoDescriptor.Tea(
  config.endpoints.tea,
  grpc.credentials.createInsecure(),
  { 'grpc.keepalive_timeout_ms': 5000 }
);

export default class TeaService {
  static async throwTea(throwTeaReq: ReportTeaReq): Promise<SuccessMessage> {
    return new Promise((resolve, reject) => {
      logger.info(`Call to throwTea in KC`, throwTeaReq);
      teaClient.ThrowTea(throwTeaReq, (err: any, response: SuccessMessage) => {
        if (err) {
          logger.error(`throwTea ERROR in KC`, {
            err,
            callRequest: throwTeaReq,
          });
          reject(err);
        } else {
          logger.info(`throwTea OK in KC`, {
            response: response,
            callRequest: throwTeaReq,
          });
          resolve(response);
        }
      });
    });
  }

  static async reportTeaSuccess(
    reportTeaSuccessReq: ReportTeaReq
  ): Promise<SuccessMessage> {
    return new Promise((resolve, reject) => {
      logger.info(`Call to reportTeaSuccess in KC`, reportTeaSuccessReq);
      teaClient.ReportTeaSuccess(
        reportTeaSuccessReq,
        (err: any, response: SuccessMessage) => {
          if (err) {
            logger.error(`reportTeaSuccess ERROR in KC`, {
              err,
              callRequest: reportTeaSuccessReq,
            });
            reject(err);
          } else {
            logger.info(`reportTeaSuccess OK in KC`, {
              response: response,
              callRequest: reportTeaSuccessReq,
            });
            resolve(response);
          }
        }
      );
    });
  }

  static async reportTeaFail(
    reportTeaFailReq: ReportTeaReq
  ): Promise<SuccessMessage> {
    return new Promise((resolve, reject) => {
      logger.info(`Call to reportTeaFail in KC`, reportTeaFailReq);
      teaClient.ReportTeaFail(
        reportTeaFailReq,
        (err: any, response: SuccessMessage) => {
          if (err) {
            logger.error(`reportTeaFail ERROR in KC`, {
              err,
              callRequest: reportTeaFailReq,
            });
            reject(err);
          } else {
            logger.info(`reportTeaFail OK in KC`, {
              response: response,
              callRequest: reportTeaFailReq,
            });
            resolve(response);
          }
        }
      );
    });
  }
}
