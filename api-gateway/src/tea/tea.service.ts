import * as grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import { config } from '../config';
import { logger } from '../utils/logger/logger';
import { findPath } from '../utils/path';
import { ReportTeaReq, SuccessMessage } from '../interfaces/protoc/proto/teaService';

const PROTO_PATH = `${findPath('proto')}/teaService.proto`;

const packageDefinition: protoLoader.PackageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const protoDescriptor: any = grpc.loadPackageDefinition(packageDefinition).Tea;

const teaClient: any = new protoDescriptor.Tea(config.endpoints.tea, grpc.credentials.createInsecure(), {
  'grpc.keepalive_timeout_ms': 5000,
});

export default class TeaService {
  static async reportTeaSuccess(reportTeaSuccessReq: ReportTeaReq): Promise<SuccessMessage> {
    logger.info(`Call to reportTeaSuccess in KC`, reportTeaSuccessReq);
    return new Promise((resolve, reject) => {
      teaClient.ReportTeaSuccess(reportTeaSuccessReq, (err: any, response: SuccessMessage) => {
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
      });
    });
  }

  static async reportTeaFail(reportTeaFailReq: ReportTeaReq): Promise<SuccessMessage> {
    logger.info(`Call to reportTeaFail in KC`, reportTeaFailReq);
    return new Promise((resolve, reject) => {
      teaClient.ReportTeaFail(reportTeaFailReq, (err: any, response: SuccessMessage) => {
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
      });
    });
  }
}
