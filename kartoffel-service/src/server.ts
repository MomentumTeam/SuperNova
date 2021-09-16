import * as grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import * as C from './config';
import { logger } from './logger';
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
  getAllOGs,
  createOG,
  getOGByHierarchyName,
  searchOG,
  deleteOG,
  getOGById,
  getChildrenOfOG,
  updateOGParent,
  renameOG,
  getOGTree,
} from './groups/groups.controller';
import {
  getAllDIs,
  createDI,
  getDIByRoleId,
  searchDIOrUniqueId,
  deleteDI,
  getDIByUniqueId,
  updateDI,
} from './digitalIdentities/di.controller';

import {
  connectRoleAndDI,
  disconnectRoleAndDI,
  createRole,
  deleteRole,
  getRolesUnderOG,
  getRoleByRoleId,
  renameRole,
  getAllRoles,
  getRolesByHierarchy,
  changeRoleOG,
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
    } catch (error: any) {
      logger.error(`Error while creating gRPC server`, {
        error: { message: error.message },
      });
    }
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
        GetAllOGs: getAllOGs,
        CreateOG: createOG,
        GetOGByHierarchyName: getOGByHierarchyName,
        SearchOG: searchOG,
        DeleteOG: deleteOG,
        GetOGById: getOGById,
        GetChildrenOfOG: getChildrenOfOG,
        UpdateOGParent: updateOGParent,
        RenameOG: renameOG,
        GetOGTree: getOGTree,

        //digitalIdentities
        GetAllDIs: getAllDIs,
        CreateDI: createDI,
        DeleteDI: deleteDI,
        GetDIByRoleId: getDIByRoleId,
        SearchDIOrUniqueId: searchDIOrUniqueId,
        GetDIByUniqueId: getDIByUniqueId,
        UpdateDI: updateDI,

        // roles
        GetAllRoles: getAllRoles,
        CreateRole: createRole,
        ConnectRoleAndDI: connectRoleAndDI,
        DisconnectRoleAndDI: disconnectRoleAndDI,
        GetRoleByRoleId: getRoleByRoleId,
        GetRolesUnderOG: getRolesUnderOG,
        DeleteRole: deleteRole,
        RenameRole: renameRole,
        GetRolesByHierarchy: getRolesByHierarchy,
        ChangeRoleOG: changeRoleOG,
      });
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
