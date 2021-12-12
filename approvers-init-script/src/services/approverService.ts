import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { findPath } from '../utils/path';
import * as C from '../config';
import { logger } from '../logger';
import { AddApproverReq, Approver } from '../interfaces/approverService';


const APS_PROTO_PATH = `./proto/approverService.proto`;

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
  C.approverServiceUrl,
  grpc.credentials.createInsecure()
);

export default class ApproverService {
  static async addApprover(
    addApproverReq: AddApproverReq
  ): Promise<Approver> {
    logger.info(`Call to addApprover in AIS`);

    return new Promise((resolve, reject) => {
      approverClient.AddApprover(
        addApproverReq,
        (error: any, approver: Approver) => {
          if (error) {
            logger.error(`addApprover ERROR in AIS`, {
              addApproverReq,
              error: { message: error.message },
            });
            reject(error);
          } else {
            logger.info("addApprover OK in AIS", {
              addApproverReq,
              approver,
            });
            resolve(approver);
          }
        }
      );
    });
  }
}