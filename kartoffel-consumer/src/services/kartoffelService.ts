import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { config } from '../config';
import {
  Entity,
  GetEntityByRoleIdRequest,
  OGArray,
  CreateOGRequest,
  OrganizationGroup,
  CreateDIRequest,
  DigitalIdentity,
  CreateRoleRequest,
  GetRoleByRoleIdRequest,
  Role,
  SuccessMessage,
  ConnectRoleAndDIRequest,
  GetRolesUnderOGRequest,
  RoleArray,
  ConnectEntityAndDIRequest,
  DisconnectDIFromEntityRequest,
  DeleteOGRequest,
  DeleteRoleRequest,
  DeleteDIRequest,
  GetOGTreeRequest,
  OGTree,
  GetChildrenOfOGRequest,
  GetEntityByDIRequest,
  RenameRoleRequest,
  RenameOGRequest,
  GetEntityByIdRequest,
  DisconnectRoleAndDIRequest,
  DeleteEntityRequest,
  ChangeRoleOGRequest,
} from '../interfaces/protoc/proto/kartoffelService';
import { logger } from '../utils/logger';
import { findPath } from '../utils/path';

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

const clients: any = [];
for (let i = 0; i < config.grpcPoolSize; i++) {
  clients.push(
    new protoDescriptor.Kartoffel(
      config.endpoints.kartoffel,
      grpc.credentials.createInsecure(),
      { 'grpc.keepalive_timeout_ms': 5000 }
    )
  );
}

function randomClient(): any {
  return clients[Math.floor(Math.random() * clients.length)];
}

export default class KartoffelService {
  static async createOG(
    createOGRequest: CreateOGRequest
  ): Promise<OrganizationGroup> {
    logger.info('CreateOG');
    return new Promise((resolve, reject) => {
      randomClient().CreateOG(
        createOGRequest,
        (err: any, organizationGroup: OrganizationGroup) => {
          if (err) {
            reject(err);
          } else {
            resolve(organizationGroup);
          }
        }
      );
    });
  }

  static async createDI(
    createDIRequest: CreateDIRequest
  ): Promise<DigitalIdentity> {
    logger.info('CreateDI');
    return new Promise((resolve, reject) => {
      randomClient().CreateDI(
        createDIRequest,
        (err: any, digitalIdentity: DigitalIdentity) => {
          if (err) {
            reject(err);
          } else {
            resolve(digitalIdentity);
          }
        }
      );
    });
  }

  static async createRole(createRoleRequest: CreateRoleRequest): Promise<Role> {
    logger.info('CreateRole');
    return new Promise((resolve, reject) => {
      randomClient().CreateRole(createRoleRequest, (err: any, role: Role) => {
        if (err) {
          reject(err);
        } else {
          resolve(role);
        }
      });
    });
  }

  static async renameRole(
    renameRoleRequest: RenameRoleRequest
  ): Promise<SuccessMessage> {
    logger.info('RenameRole');
    return new Promise((resolve, reject) => {
      randomClient().RenameRole(
        renameRoleRequest,
        (err: any, message: SuccessMessage) => {
          if (err) {
            reject(err);
          } else {
            resolve(message);
          }
        }
      );
    });
  }

  static async renameOG(
    renameOGRequest: RenameOGRequest
  ): Promise<SuccessMessage> {
    logger.info('RenameOG');
    return new Promise((resolve, reject) => {
      randomClient().RenameOG(
        renameOGRequest,
        (err: any, message: SuccessMessage) => {
          if (err) {
            reject(err);
          } else {
            resolve(message);
          }
        }
      );
    });
  }

  static async updateEntity(updateEntityRequest: any): Promise<SuccessMessage> {
    logger.info('UpdateEntity');
    return new Promise((resolve, reject) => {
      for (const key in updateEntityRequest.properties) {
        if (
          updateEntityRequest.properties[key] === undefined ||
          updateEntityRequest.properties[key] === null
        ) {
          delete updateEntityRequest.properties[key];
        }
      }
      randomClient().UpdateEntity(
        updateEntityRequest,
        (err: any, message: SuccessMessage) => {
          if (err) {
            reject(err);
          } else {
            resolve(message);
          }
        }
      );
    });
  }

  static async connectRoleAndDI(
    connectRoleAndDIRequest: ConnectRoleAndDIRequest
  ): Promise<SuccessMessage> {
    logger.info('ConnectRoleAndDI');
    return new Promise((resolve, reject) => {
      randomClient().ConnectRoleAndDI(
        connectRoleAndDIRequest,
        (err: any, successMessage: SuccessMessage) => {
          if (err) {
            reject(err);
          } else {
            resolve(successMessage);
          }
        }
      );
    });
  }

  static async disconnectRoleAndDI(
    disconnectRoleAndDIRequest: DisconnectRoleAndDIRequest
  ): Promise<SuccessMessage> {
    logger.info('DisconnectRoleAndDI');
    return new Promise((resolve, reject) => {
      randomClient().DisconnectRoleAndDI(
        disconnectRoleAndDIRequest,
        (err: any, successMessage: SuccessMessage) => {
          if (err) {
            reject(err);
          } else {
            resolve(successMessage);
          }
        }
      );
    });
  }

  static async getRoleByRoleId(
    getRoleByRoleIdRequest: GetRoleByRoleIdRequest
  ): Promise<Role> {
    logger.info('GetRoleByRoleId');
    return new Promise((resolve, reject) => {
      randomClient().GetRoleByRoleId(
        getRoleByRoleIdRequest,
        (err: any, role: Role) => {
          if (err) {
            reject(err);
          } else {
            resolve(role);
          }
        }
      );
    });
  }

  static async getRolesUnderOG(
    getRolesUnderOGRequest: GetRolesUnderOGRequest
  ): Promise<RoleArray> {
    logger.info('GetRolesUnderOG');
    return new Promise((resolve, reject) => {
      randomClient().GetRolesUnderOG(
        getRolesUnderOGRequest,
        (err: any, roleArray: RoleArray) => {
          if (err) {
            reject(err);
          } else {
            resolve(roleArray);
          }
        }
      );
    });
  }

  static async connectEntityAndDI(
    connectEntityAndDIRequest: ConnectEntityAndDIRequest
  ): Promise<SuccessMessage> {
    logger.info('connectEntityAndDI');
    return new Promise((resolve, reject) => {
      randomClient().ConnectEntityAndDI(
        connectEntityAndDIRequest,
        (err: any, successMessage: SuccessMessage) => {
          if (err) {
            reject(err);
          } else {
            resolve(successMessage);
          }
        }
      );
    });
  }

  static async createEntity(createEntityRequest: any): Promise<Entity> {
    logger.info('CreateEntity');
    return new Promise((resolve, reject) => {
      for (const key in createEntityRequest) {
        if (
          createEntityRequest[key] === undefined ||
          createEntityRequest[key] === null
        ) {
          delete createEntityRequest[key];
        }
      }
      randomClient().CreateEntity(
        createEntityRequest,
        (err: any, entity: Entity) => {
          if (err) {
            reject(err);
          } else {
            resolve(entity);
          }
        }
      );
    });
  }

  static async disconnectDIFromEntity(
    disconnectDIFromEntityRequest: DisconnectDIFromEntityRequest
  ): Promise<SuccessMessage> {
    logger.info('DisconnectDIFromEntity');
    return new Promise((resolve, reject) => {
      randomClient().DisconnectDIFromEntity(
        disconnectDIFromEntityRequest,
        (err: any, successMessage: SuccessMessage) => {
          if (err) {
            reject(err);
          } else {
            resolve(successMessage);
          }
        }
      );
    });
  }

  static async getEntityByRoleId(
    getEntityByRoleIdRequest: GetEntityByRoleIdRequest
  ): Promise<Entity> {
    logger.info('getEntityByRoleId');
    return new Promise((resolve, reject) => {
      randomClient().GetEntityByRoleId(
        getEntityByRoleIdRequest,
        (err: any, entity: Entity) => {
          if (err) {
            reject(err);
          } else {
            resolve(entity);
          }
        }
      );
    });
  }

  static async getEntityById(
    getEntityByIdRequest: GetEntityByIdRequest
  ): Promise<Entity> {
    logger.info('getEntityById');
    return new Promise((resolve, reject) => {
      randomClient().GetEntityById(
        getEntityByIdRequest,
        (err: any, entity: Entity) => {
          if (err) {
            reject(err);
          } else {
            resolve(entity);
          }
        }
      );
    });
  }
  static async deleteOG(
    deleteOGRequest: DeleteOGRequest
  ): Promise<SuccessMessage> {
    logger.info('DeleteOG');
    return new Promise((resolve, reject) => {
      randomClient().DeleteOG(
        deleteOGRequest,
        (err: any, successMessage: SuccessMessage) => {
          if (err) {
            reject(err);
          } else {
            resolve(successMessage);
          }
        }
      );
    });
  }

  static async getChildrenOfOG(
    getChildrenOfOGRequest: GetChildrenOfOGRequest
  ): Promise<OGArray> {
    logger.info('GetChildrenOfOG');
    return new Promise((resolve, reject) => {
      randomClient().GetChildrenOfOG(
        getChildrenOfOGRequest,
        (err: any, ogArray: OGArray) => {
          if (err) {
            reject(err);
          } else {
            resolve(ogArray);
          }
        }
      );
    });
  }

  static async deleteRole(
    deleteRoleRequest: DeleteRoleRequest
  ): Promise<SuccessMessage> {
    logger.info('DeleteRole');
    return new Promise((resolve, reject) => {
      randomClient().DeleteRole(
        deleteRoleRequest,
        (err: any, successMessage: SuccessMessage) => {
          if (err) {
            reject(err);
          } else {
            resolve(successMessage);
          }
        }
      );
    });
  }

  static async deleteEntity(
    deleteEntityRequest: DeleteEntityRequest
  ): Promise<SuccessMessage> {
    logger.info('deleteEntity');
    return new Promise((resolve, reject) => {
      randomClient().DeleteEntity(
        deleteEntityRequest,
        (err: any, successMessage: SuccessMessage) => {
          if (err) {
            reject(err);
          } else {
            resolve(successMessage);
          }
        }
      );
    });
  }

  static async deleteDI(
    deleteDIRequest: DeleteDIRequest
  ): Promise<SuccessMessage> {
    logger.info('DeleteDI');
    return new Promise((resolve, reject) => {
      randomClient().DeleteDI(
        deleteDIRequest,
        (err: any, successMessage: SuccessMessage) => {
          if (err) {
            reject(err);
          } else {
            resolve(successMessage);
          }
        }
      );
    });
  }

  static async getOGTree(getOGTreeRequest: GetOGTreeRequest): Promise<OGTree> {
    logger.info('GetOGTree');
    return new Promise((resolve, reject) => {
      randomClient().GetOGTree(getOGTreeRequest, (err: any, ogTree: OGTree) => {
        if (err) {
          reject(err);
        } else {
          resolve(ogTree);
        }
      });
    });
  }

  static async getEntityByDI(
    getEntityByDIRequest: GetEntityByDIRequest
  ): Promise<Entity> {
    logger.info('getEntityByDI');
    return new Promise((resolve, reject) => {
      randomClient().GetEntityByDI(
        getEntityByDIRequest,
        (err: any, entity: Entity) => {
          if (err) {
            reject(err);
          } else {
            resolve(entity);
          }
        }
      );
    });
  }
  static async changeRoleOG(
    changeRoleOG: ChangeRoleOGRequest
  ): Promise<SuccessMessage> {
    logger.info('changeRoleOG');
    return new Promise((resolve, reject) => {
      randomClient().ChangeRoleOG(
        changeRoleOG,
        (err: any, message: SuccessMessage) => {
          if (err) {
            reject(err);
          } else {
            resolve(message);
          }
        }
      );
    });
  }
}
