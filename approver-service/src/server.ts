import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as C from './config';
import { logger } from './logger';
import {
  addCommanderApprover,
  addSecurityApprover,
  addSuperSecurityApprover,
  deleteApprover,
  getAllApproverIds,
  getAllApprovers,
  getAllCommanderApprovers,
  getAllSecurityApprovers,
  getAllSuperSecurityApprovers,
  getUserType,
  searchApproverByDisplayName,
  searchApproverByDomainUser,
  syncApprover,
  updateCommanderDecision,
  updateSecurityDecision,
  updateSuperSecurityDecision,
} from './approver/approver.controller';
import { findPath } from './utils/path';

const PROTO_PATH = `${findPath('proto')}/approverService.proto`;

export class Server {
  private server: grpc.Server;
  constructor() {
    this.server = new grpc.Server();
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
    } catch (error) {
      logger.error(`Error while loading the proto file`, { error: error });
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
          AddCommanderApprover: addCommanderApprover,
          AddSecurityApprover: addSecurityApprover,
          GetUserType: getUserType,
          SearchApproverByDisplayName: searchApproverByDisplayName,
          SearchApproverByDomainUser: searchApproverByDomainUser,
          GetAllSecurityApprovers: getAllSecurityApprovers,
          GetAllCommanderApprovers: getAllCommanderApprovers,
          GetAllSuperSecurityApprovers: getAllSuperSecurityApprovers,
          AddSuperSecurityApprover: addSuperSecurityApprover,
          UpdateCommanderDecision: updateCommanderDecision,
          UpdateSecurityDecision: updateSecurityDecision,
          UpdateSuperSecurityDecision: updateSuperSecurityDecision,
          GetAllApprovers: getAllApprovers,
          GetAllApproverIds: getAllApproverIds,
          SyncApprover: syncApprover,
          DeleteApprover: deleteApprover,
        }
      );
      logger.info(`Grpc services were successfully added to the server`);
    } catch (error) {
      logger.error(`Error while initializing the server`, { error: error });
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
