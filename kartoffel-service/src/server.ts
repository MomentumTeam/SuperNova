import * as grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import * as C from './config';
import { logger } from './logger';
import {
  createDI,
  deleteDI,
  getOGTree,
} from './kartoffel/kartoffel.controller';
import { findPath } from './utils/path';
import { addHealthService } from './health';
import {
  connectEntityAndDI,
  createEntity,
  deleteEntity,
  disconnectDIFromEntity,
  getEntitiesByHierarchy,
  getEntitiesUnderOG,
  getEntityByDI,
  getEntityById,
  getEntityByIdentifier,
  getEntityByRoleId,
  getPictureByEntityId,
  searchEntitiesByFullName,
  updateEntity,
} from './entities/entities.controller';
import {
  searchOG,
  createOG,
  getOGByHierarchyName,
  deleteOG,
  getOGById,
  getChildrenOfOG,
  updateOGParent,
  renameOG,
} from './groups/groups.controller';

import {
  connectRoleAndDI,
  disconnectRoleAndDI,
  createRole,
  deleteRole,
  getRolesUnderOG,
  getRoleByRoleId,
  updateRole,
} from './roles/roles.controller';

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
        //entities
        CreateEntity: createEntity,
        GetEntityByDI: getEntityByDI,
        GetEntityByRoleId: getEntityByRoleId,
        GetEntitiesUnderOG: getEntitiesUnderOG,
        GetEntitiesByHierarchy: getEntitiesByHierarchy,
        GetEntityByIdentifier: getEntityByIdentifier,
        SearchEntitiesByFullName: searchEntitiesByFullName,
        GetEntityById: getEntityById,
        DeleteEntity: deleteEntity,
        DisconnectDIFromEntity: disconnectDIFromEntity,
        GetPictureByEntityId: getPictureByEntityId,
        ConnectEntityAndDI: connectEntityAndDI,
        UpdateEntity: updateEntity,

        //groups
        SearchOG: searchOG,
        CreateOG: createOG,
        getOGByHierarchyName: getOGByHierarchyName,
        DeleteOG: deleteOG,
        GetOGById: getOGById,
        GetChildrenOfOG: getChildrenOfOG,
        UpdateOGParent: updateOGParent,
        RenameOG: renameOG,
        GetOGTree: getOGTree,

        CreateDI: createDI,
        DeleteDI: deleteDI,

        // roles
        CreateRole: createRole,
        ConnectRoleAndDI: connectRoleAndDI,
        DisconnectRoleAndDI: disconnectRoleAndDI,
        GetRoleByRoleId: getRoleByRoleId,
        GetRolesUnderOG: getRolesUnderOG,
        DeleteRole: deleteRole,
        UpdateRole: updateRole,
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
