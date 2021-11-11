import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { findPath } from '../utils/path';
import * as config from '../config';
import { logger } from '../logger';
import { Approver } from '../interfaces/protoc/proto/approverService';
import {
  AdditionalParams,
  RequestStatus,
} from '../interfaces/protoc/proto/requestService';
import RequestService from '../services/requestService';

const APS_PROTO_PATH = `${findPath('proto')}/approverService.proto`;

const apsPackageDefinition: protoLoader.PackageDefinition =
  protoLoader.loadSync(APS_PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  });

const apsProtoDescriptor: any =
  grpc.loadPackageDefinition(apsPackageDefinition).ApproverService;

const approverClient: any = new apsProtoDescriptor.ApproverService(
  config.approverServiceUrl,
  grpc.credentials.createInsecure()
);

export default class ApproverService {
  static async addApprover(
    requestId: string,
    additionalParams: AdditionalParams
  ): Promise<Approver> {
    logger.info(`Call to addApprover in EXS`);

    return new Promise((resolve, reject) => {
      approverClient.AddApprover(
        additionalParams,
        (error: any, response: Approver) => {
          if (error) {
            logger.error(`addApprover ERROR in EXS`, {
              error: { message: error.message },
            });
            RequestService.updateRequest(requestId, {
              status: RequestStatus.FAILED,
            })
              .then((request) => {
                reject(error);
              })
              .catch((error) => {
                reject(error);
              });
            reject(error);
          } else {
            logger.info(`addApprover OK in EXS`, {
              response: response,
            });

            RequestService.updateRequest(requestId, {
              status: RequestStatus.DONE,
            })
              .then((request) => {
                resolve(response);
              })
              .catch((error) => {
                reject(error);
              });
          }
        }
      );
    });
  }
}
