import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as C from './config';
import { logger } from './logger';
import { findPath } from './utils/path';
import {
  changeRoleHierarchyBulkRequest,
  createRoleBulkRequest,
  getBulkRequestExample,
  getChangeRoleHierarchyBulkRequestById,
  getCreateRoleBulkRequestById,
  isBulkFileValid,
} from './bulk/bulk.controller';
import { addHealthService } from './health';

const PROTO_PATH = `${findPath('proto')}/bulkService.proto`;

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
          // defaults: true,
          oneofs: true,
        });
      const protoDescriptor: grpc.GrpcObject =
        grpc.loadPackageDefinition(packageDefinition);
      const bulkServiceDescriptor: any = protoDescriptor.BulkService;
      return bulkServiceDescriptor;
    } catch (error: any) {
      logger.error(`Error while loading the proto file`, {
        error: { message: error.message },
      });
      throw error;
    }
  }

  initServer() {
    try {
      const bulkServiceDescriptor: any = this.getProtoDescriptor();
      logger.info(`Proto was loaded successfully from file: ${PROTO_PATH}`);
      this.server.addService(bulkServiceDescriptor.BulkService.service, {
        CreateRoleBulkRequest: createRoleBulkRequest,
        ChangeRoleHierarchyBulkRequest: changeRoleHierarchyBulkRequest,
        GetBulkRequestExample: getBulkRequestExample,
        GetCreateRoleBulkRequestById: getCreateRoleBulkRequestById,
        GetChangeRoleHierarchyBulkRequestById:
          getChangeRoleHierarchyBulkRequestById,
        IsBulkFileValid: isBulkFileValid,
      });
      logger.info(`Grpc services were successfully added to the server`);
    } catch (error: any) {
      logger.error(`Error while initializing the server: ${error.message}`);
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
