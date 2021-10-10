import * as grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import { config } from '../config';
import { logger } from '../utils/logger/logger';
import { findPath } from '../utils/path';
import {
  GetAllUnitsReq,
  MinUnitArray,
  ReportTeaReq,
  SearchUnitReq,
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
  {
    'grpc.keepalive_timeout_ms': 5000,
  }
);

export default class TeaService {
  static async reportTeaSuccess(
    reportTeaSuccessReq: ReportTeaReq
  ): Promise<SuccessMessage> {
    logger.info(`Call to reportTeaSuccess in Gateway`, reportTeaSuccessReq);
    return new Promise((resolve, reject) => {
      teaClient.ReportTeaSuccess(
        reportTeaSuccessReq,
        (err: any, response: SuccessMessage) => {
          if (err) {
            logger.error(`reportTeaSuccess ERROR in Gateway`, {
              err,
              callRequest: reportTeaSuccessReq,
            });
            reject(err);
          } else {
            logger.info(`reportTeaSuccess OK in Gateway`, {
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
    logger.info(`Call to reportTeaFail in Gateway`, reportTeaFailReq);
    return new Promise((resolve, reject) => {
      teaClient.ReportTeaFail(
        reportTeaFailReq,
        (err: any, response: SuccessMessage) => {
          if (err) {
            logger.error(`reportTeaFail ERROR in Gateway`, {
              err,
              callRequest: reportTeaFailReq,
            });
            reject(err);
          } else {
            logger.info(`reportTeaFail OK in Gateway`, {
              response: response,
              callRequest: reportTeaFailReq,
            });
            resolve(response);
          }
        }
      );
    });
  }

  static async getAllUnits(
    getAllUnitsReq: GetAllUnitsReq
  ): Promise<MinUnitArray> {
    logger.info(`Call to getAllUnits in Gateway`, getAllUnitsReq);
    return new Promise((resolve, reject) => {
      teaClient.GetAllUnits(
        getAllUnitsReq,
        (err: any, response: MinUnitArray) => {
          if (err) {
            logger.error(`getAllUnits ERROR in Gateway`, {
              err,
              callRequest: getAllUnitsReq,
            });
            reject(err);
          } else {
            logger.info(`getAllUnits OK in Gateway`, {
              response: response,
              callRequest: getAllUnitsReq,
            });
            resolve(response);
          }
        }
      );
    });
  }

  static async searchUnit(searchUnitReq: SearchUnitReq): Promise<MinUnitArray> {
    logger.info(`Call to searchUnit in Gateway`, searchUnitReq);
    return new Promise((resolve, reject) => {
      teaClient.SearchUnit(
        searchUnitReq,
        (err: any, response: MinUnitArray) => {
          if (err) {
            logger.error(`searchUnit ERROR in Gateway`, {
              err,
              callRequest: searchUnitReq,
            });
            reject(err);
          } else {
            logger.info(`searchUnit OK in Gateway`, {
              response: response,
              callRequest: searchUnitReq,
            });
            resolve(response);
          }
        }
      );
    });
  }
}
