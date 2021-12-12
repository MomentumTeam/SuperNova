import * as protoLoader from "@grpc/proto-loader";
import * as grpc from "@grpc/grpc-js";
import {
  Entity,
  GetEntityByRoleIdRequest,
} from "../interfaces/kartoffelService";
import * as C from "../config";
import { logger } from "../logger";
import { findPath } from "../utils/path";
import {ApproverType} from "../interfaces/requestService"


const PROTO_PATH = `${findPath('proto')}/kartoffelService.proto`;

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
  grpc.loadPackageDefinition(packageDefinition).Kartoffel;

const kartoffelClient: any = new protoDescriptor.Kartoffel(
  C.kartoffelServiceUrl,
  grpc.credentials.createInsecure(),
  { "grpc.keepalive_timeout_ms": 5000 }
);

export default class KartoffelService {
  static async getEntityByRoleId(
    getEntityByRoleId: GetEntityByRoleIdRequest,
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      kartoffelClient.GetEntityByRoleId(
        getEntityByRoleId,
        (error: any, entity: Entity) => {
          if (error) {
            logger.error("getEntityByRoleId in KartoffelService ERROR", {
              getEntityByRoleId,
              error: { message: error.message },
            });
            reject(error);
          } else {
            logger.info("getEntityByRoleId in KartoffelService", {
              getEntityByRoleId,
              entity,
            });
            
            const domainUsers= entity.digitalIdentities.map((di)=> di.mail)

            resolve({displayName: entity.displayName,
                     akaUnit: entity.akaUnit,
                     domainUsers: domainUsers,
                     id: entity.id,
                     personalNumber: entity.personalNumber,
                     identityCard: entity.identityCard,
                     directGroup: entity.directGroup});
          }
        }
      );
    });
  }
}

