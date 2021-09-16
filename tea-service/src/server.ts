import * as grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import * as C from './config';
import { logger } from './logger';
import {
  addUnit,
  deleteUnit,
  getUnit,
  reportTeaFail,
  reportTeaSuccess,
  retrieveTeaAndUPNByEntity,
  retrieveTeaAndUPNByEntityId,
  retrieveTeaByUnit,
  retrieveUPNByEntity,
  retrieveUPNByEntityId,
  updateUnit,
} from './tea/tea.controller';
import { findPath } from './utils/path';
import { addHealthService } from './health';

const PROTO_PATH = `${findPath('proto')}/teaService.proto`;

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
      const teaServiceDescriptor: any = protoDescriptor.Tea;
      return teaServiceDescriptor;
    } catch (error) {
      logger.error(`Error while loading the proto file`, { error: error });
      throw error;
    }
  }

  initServer() {
    try {
      const teaServiceDescriptor: any = this.getProtoDescriptor();
      logger.info(`Proto was loaded successfully from file: ${PROTO_PATH}`);
      this.server.addService(teaServiceDescriptor.Tea.service, {
        RetrieveTeaByUnit: retrieveTeaByUnit,
        RetrieveUPNByEntity: retrieveUPNByEntity,
        RetrieveUPNByEntityId: retrieveUPNByEntityId,
        RetrieveTeaAndUPNByEntity: retrieveTeaAndUPNByEntity,
        RetrieveTeaAndUPNByEntityId: retrieveTeaAndUPNByEntityId,
        ReportTeaSuccess: reportTeaSuccess,
        ReportTeaFail: reportTeaFail,
        GetUnit: getUnit,
        AddUnit: addUnit,
        UpdateUnit: updateUnit,
        DeleteUnit: deleteUnit,
      });
      logger.info(`Grpc services were successfully added to the server`);
    } catch (error) {
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
