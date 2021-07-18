import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as C from './config';
import { logger } from './logger';
import {
  addCommanderApprover,
  addSecurityApprover,
  getAllSecurityApprovers,
  getUserType,
  searchApproverByDisplayName,
  searchApproverByDomainUser,
  updateCommanderDecision,
  updateSecurityDecision,
} from './approver/approver.controller';

const PROTO_PATH = __dirname.includes('dist')
  ? path.join(__dirname, '../../proto/approverService.proto')
  : path.join(__dirname, '../proto/approverService.proto');

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
      return approverServiceDescriptor;
    } catch (error) {
      throw error;
    }
  }

  initServer() {
    try {
      const approverServiceDescriptor: any = this.getProtoDescriptor();
      logger.log({
        level: 'info',
        message: `Proto was loaded successfully from file: ${PROTO_PATH}`,
        label: 'initServer',
      });
      this.server.addService(
        approverServiceDescriptor.ApproverService.service,
        {
          AddCommanderApprover: addCommanderApprover,
          AddSecurityApprover: addSecurityApprover,
          GetUserType: getUserType,
          SearchApproverByDisplayName: searchApproverByDisplayName,
          SearchApproverByDomainUser: searchApproverByDomainUser,
          GetAllSecurityApprovers: getAllSecurityApprovers,
          UpdateCommanderDecision: updateCommanderDecision,
          UpdateSecurityDecision: updateSecurityDecision,
        }
      );
      logger.log({
        level: 'info',
        message: `Grpc services were successfully added to the server`,
        label: 'initServer',
      });
    } catch (error) {
      logger.log({
        level: 'error',
        message: `Error while initializing the server: ${error.message}`,
        label: 'initServer',
      });
    }
  }

  async startServer(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.server.bindAsync(
        `${C.host}:${C.port}`,
        grpc.ServerCredentials.createInsecure(),
        (bindError) => {
          if (bindError) {
            reject(bindError);
          } else {
            try {
              this.server.start();
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
