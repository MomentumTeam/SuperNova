import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as C from './config';
import { logger } from './logger';
import {
  connectEntityAndDI,
  connectRoleAndDI,
  createDI,
  createEntity,
  createOG,
  createRole,
  deleteDI,
  deleteOG,
  deleteRole,
  disconnectDIFromEntity,
  getChildrenOfOG,
  getEntitiesUnderOG,
  getEntityByIdNumber,
  getEntityByMongoId,
  getEntityByRoleId,
  getRolesUnderOG,
  searchEntitiesByFullName,
  searchOG,
  getOGTree,
  getPictureByEntityId,
  getRoleByRoleId,
} from './kartoffel/kartoffel.controller';

const PROTO_PATH = __dirname.includes('dist')
  ? path.join(__dirname, '../../proto/kartoffelService.proto')
  : path.join(__dirname, '../proto/kartoffelService.proto');

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
      const kartoffelServiceDescriptor: any = protoDescriptor.Kartoffel;
      return kartoffelServiceDescriptor;
    } catch (error) {
      throw error;
    }
  }

  initServer() {
    try {
      const kartoffelServiceDescriptor: any = this.getProtoDescriptor();
      logger.log({
        level: 'info',
        message: `Proto was loaded successfully from file: ${PROTO_PATH}`,
        label: 'initServer',
      });
      this.server.addService(kartoffelServiceDescriptor.Kartoffel.service, {
        SearchOG: searchOG,
        CreateOG: createOG,
        CreateDI: createDI,
        CreateRole: createRole,
        ConnectRoleAndDI: connectRoleAndDI,
        SearchEntitiesByFullName: searchEntitiesByFullName,
        GetEntityByIdNumber: getEntityByIdNumber,
        GetRoleByRoleId: getRoleByRoleId,
        GetRolesUnderOG: getRolesUnderOG,
        ConnectEntityAndDI: connectEntityAndDI,
        CreateEntity: createEntity,
        GetEntityByRoleId: getEntityByRoleId,
        DisconnectDIFromEntity: disconnectDIFromEntity,
        GetEntityByMongoId: getEntityByMongoId,
        DeleteOG: deleteOG,
        GetChildrenOfOG: getChildrenOfOG,
        DeleteRole: deleteRole,
        DeleteDI: deleteDI,
        GetEntitiesUnderOG: getEntitiesUnderOG,
        GetOGTree: getOGTree,
        GetPictureByEntityId: getPictureByEntityId,
      });
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
