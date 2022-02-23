import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { config } from '../config';
import { GetAdminsByGroupIdsReq, ApproverArray } from "../interfaces/protoc/proto/approverService";
import { logger } from '../utils/logger/logger';
import { findPath } from "../utils/path";

const PROTO_PATH = `${findPath("proto")}/approverService.proto`;

const packageDefinition: protoLoader.PackageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const protoDescriptor: any = grpc.loadPackageDefinition(packageDefinition).ApproverService;

const approverClient: any = new protoDescriptor.ApproverService(
  config.approver.endpoint,
  grpc.credentials.createInsecure()
);

export class ApproverService {
  static async getAdminsByGroupIds(getAdminsByGroupIdsReq: GetAdminsByGroupIdsReq): Promise<ApproverArray> {
    logger.info(`Call to getAdminsByGroupIds in AS`, getAdminsByGroupIdsReq);

    return new Promise((resolve, reject) => {
      approverClient.GetAdminsByGroupIds(getAdminsByGroupIdsReq, (err: any, response: ApproverArray) => {
        if (err) {
          logger.error(`getAdminsByGroupIds ERROR in AS`, {
            err,
            callRequest: getAdminsByGroupIdsReq,
          });
          reject(err);
        }

        logger.info(`getAdminsByGroupIds OK in AS`, {
          response: response,
          callRequest: getAdminsByGroupIdsReq,
        });
        resolve(response);
      });
    });
  }
}