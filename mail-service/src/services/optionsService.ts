import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import path from "path";
import * as config from "../config";
import {
  GetOptionsByEntityIdReq,
  Options,
} from "../interfaces/protoc/proto/optionsService";
import { logger } from "../logger";
import { findPath } from "../utils/path";

const PROTO_PATH = `${findPath("proto")}/optionsService.proto`;

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
  grpc.loadPackageDefinition(packageDefinition).Options;

const optionsClient: any = new protoDescriptor.Options(
  config.optionsServiceUrl,
  grpc.credentials.createInsecure()
);

export default class OptionsService {
  static async getUserOptions(
    getOptionsByEntityId: GetOptionsByEntityIdReq
  ): Promise<Options> {
    return new Promise((resolve, reject) => {
      optionsClient.GetOptionsByEntityId(
        getOptionsByEntityId,
        (err: any, response: Options) => {
          if (err) {
            logger.error(`getUserOptions in OptionsService ERROR`, {
              err,
              callRequest: getOptionsByEntityId,
            });
            reject(err);
          }

          logger.info(`getOptionsByEntityId in OptionsService ERROR`, {
            callRequest: getOptionsByEntityId,
          });
          resolve(response);
        }
      );
    });
  }
}
