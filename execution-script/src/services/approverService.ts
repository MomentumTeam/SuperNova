import * as grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import { findPath } from '../utils/path';
import * as config from '../config';
import { logger } from '../logger';
import { Approver } from '../interfaces/protoc/proto/approverService';
import {
  AdditionalParams,
} from '../interfaces/protoc/proto/requestService';

//approverClient

const APS_PROTO_PATH = `${findPath('proto')}/approverService.proto`;

const apsPackageDefinition: protoLoader.PackageDefinition = protoLoader.loadSync(
    APS_PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  }
);

const apsProtoDescriptor: any =
  grpc.loadPackageDefinition(apsPackageDefinition).ApproverService;

const approverClient: any = new apsProtoDescriptor.ApproverService(
  config.approverServiceUrl,
  grpc.credentials.createInsecure()
);

export default class ApproverService {

  static async addApprover(additionalParams:AdditionalParams): Promise<Approver> {
    logger.info(`Call to addApprover in EXS`);

    return new Promise((resolve, reject) => {
        approverClient.AddApprover(
            additionalParams,
        (error: any, response: Approver) => {
          if (error) {
            logger.error(`addApprover ERROR in EXS`, {
              error: { message: error.message },
            });
            reject(error);
          }

          logger.info(`addApprover OK in EXS`, {
            response: response,
          });
          resolve(response);
        }
      );
    });
  }
}
