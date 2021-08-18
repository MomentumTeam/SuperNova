import * as grpc from 'grpc';
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
import { findPath } from './utils/path';
import { addHealthService } from './health';

const PROTO_PATH = `${findPath('proto')}/kartoffelService.proto`;
export class Server {
  private server: grpc.Server;
  constructor() {
    this.server = new grpc.Server();
    addHealthService(this.server);
    logger.info(`gRPC server created`);
    try {
      this.initServer();
      logger.info(`gRPC server has been initialized successfully`);
    } catch (error) {
      logger.error(`Error while creating gRPC server`, { error: error });
    }
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
      logger.info(`Proto file ${PROTO_PATH} was loaded successfully`);
      return kartoffelServiceDescriptor;
    } catch (error) {
      throw error;
    }
  }

  initServer() {
    try {
      const kartoffelServiceDescriptor: any = this.getProtoDescriptor();
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
