import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as C from './config';
import { logger } from './logger';
import {
  addApprover,
  deleteApprover,
  getAllApproverIds,
  getAllApprovers,
  getApproverByEntityId,
  getUserType,
  isApproverValidForOG,
  searchApproverByDisplayName,
  searchApproverByDomainUser,
  searchHighCommandersByDisplayName,
  syncApprover,
  updateApproverDecision,
  getAllMyApproverTypes,
} from './approver/approver.controller';
import { findPath } from './utils/path';
import { addHealthService } from './health';

const PROTO_PATH = `${findPath('proto')}/approverService.proto`;

export class Server {
  private server: grpc.Server;
  constructor() {
    this.server = new grpc.Server();
    addHealthService(this.server);
    this.initServer();
  }

  private getProtoDescriptor() {
    try {
      const packageDefinition: protoLoader.PackageDefinition =
        protoLoader.loadSync(PROTO_PATH, {
          keepCase: true,
          longs: String,
          enums: String,
          defaults: true,
          oneofs: true,
        });
      const protoDescriptor: grpc.GrpcObject =
        grpc.loadPackageDefinition(packageDefinition);
      const approverServiceDescriptor: any = protoDescriptor.ApproverService;
      logger.info(`Proto file ${PROTO_PATH} was loaded successfully`);
      return approverServiceDescriptor;
    } catch (error: any) {
      logger.error(`Error while loading the proto file`, {
        error: { message: error.message },
      });
      throw error;
    }
  }

  initServer() {
    try {
      const approverServiceDescriptor: any = this.getProtoDescriptor();
      logger.info(`Proto was loaded successfully from file: ${PROTO_PATH}`);
      this.server.addService(
        approverServiceDescriptor.ApproverService.service,
        {
          AddApprover: addApprover,
          GetUserType: getUserType,
          SearchApproverByDisplayName: searchApproverByDisplayName,
          SearchApproverByDomainUser: searchApproverByDomainUser,
          SearchHighCommandersByDisplayName: searchHighCommandersByDisplayName,
          UpdateApproverDecision: updateApproverDecision,
          GetAllApprovers: getAllApprovers,
          GetAllApproverIds: getAllApproverIds,
          SyncApprover: syncApprover,
          DeleteApprover: deleteApprover,
          IsApproverValidForOG: isApproverValidForOG,
          GetApproverByEntityId: getApproverByEntityId,
          GetAllMyApproverTypes: getAllMyApproverTypes,
        }
      );
      logger.info(`Grpc services were successfully added to the server`);
    } catch (error: any) {
      logger.error(`Error while initializing the server`, {
        error: { message: error.message },
      });
      throw error;
    }
  }

  async startServer(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.server.bindAsync(
        `${C.host}:${C.port}`,
        grpc.ServerCredentials.createInsecure(),
        (bindError) => {
          if (bindError) {
            logger.error(`Error while binding to ${C.host}:${C.port}`, {
              error: bindError,
            });
            reject(bindError);
          } else {
            try {
              this.server.start();
              logger.info(`Server was started successfully`);
              resolve();
            } catch (startError) {
              reject(startError);
            }
          }
        }
      );
    });
  }
}
