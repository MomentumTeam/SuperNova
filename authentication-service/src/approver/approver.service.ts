import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { config } from '../config';
import {
  GetUserTypeReq,
  GetUserTypeRes,
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

const approverClient: any = new protoDescriptor.ApproverService(
  config.approver.endpoint,
  grpc.credentials.createInsecure()
);

export class ApproverService {
  static async getUserType(
    getUserTypeReq: GetUserTypeReq
  ): Promise<GetUserTypeRes> {
    logger.info(`Call to getUserTypeReq in AS`, getUserTypeReq);

    return new Promise((resolve, reject) => {
      approverClient.GetUserType(
        getUserTypeReq,
        (err: any, response: GetUserTypeRes) => {
          if (err) {
            logger.error(`getUserTypeReq ERROR in AS`, {
              err,
              callRequest: getUserTypeReq,
            });
            reject(err);
          }

          logger.info(`getUserTypeReq OK in AS`, {
            response: response,
            callRequest: getUserTypeReq,
          });
          resolve(response);
        }
      );
    });
  }
}
