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

const kartoffelClient: any = new protoDescriptor.Kartoffel(
  config.endpoints.kartoffel,
  grpc.credentials.createInsecure(),
  { 'grpc.keepalive_timeout_ms': 5000 }
);

export default class KartoffelService {
  static async createOG(
    createOGRequest: CreateOGRequest
  ): Promise<OrganizationGroup> {
    logger.info('CreateOG');
    return new Promise((resolve, reject) => {
      kartoffelClient.CreateOG(
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
      kartoffelClient.CreateDI(
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
      kartoffelClient.CreateRole(createRoleRequest, (err: any, role: Role) => {
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
      kartoffelClient.RenameRole(
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
      kartoffelClient.RenameOG(
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
        if (updateEntityRequest.properties[key] === undefined) {
          delete updateEntityRequest.properties[key];
        }
      }
      kartoffelClient.UpdateEntity(
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
      kartoffelClient.ConnectRoleAndDI(
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
      kartoffelClient.DisconnectRoleAndDI(
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
      kartoffelClient.GetRoleByRoleId(
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
      kartoffelClient.GetRolesUnderOG(
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
      kartoffelClient.ConnectEntityAndDI(
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
        if (createEntityRequest[key] === undefined) {
          delete createEntityRequest[key];
        }
      }
      kartoffelClient.CreateEntity(
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
      kartoffelClient.DisconnectDIFromEntity(
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
      kartoffelClient.GetEntityByRoleId(
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
      kartoffelClient.GetEntityById(
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
      kartoffelClient.DeleteOG(
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
      kartoffelClient.GetChildrenOfOG(
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
      kartoffelClient.DeleteRole(
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
      kartoffelClient.DeleteEntity(
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
      kartoffelClient.DeleteDI(
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
      kartoffelClient.GetOGTree(
        getOGTreeRequest,
        (err: any, ogTree: OGTree) => {
          if (err) {
            reject(err);
          } else {
            resolve(ogTree);
          }
        }
      );
    });
  }

  static async getEntityByDI(
    getEntityByDIRequest: GetEntityByDIRequest
  ): Promise<Entity> {
    logger.info('getEntityByDI');
    return new Promise((resolve, reject) => {
      kartoffelClient.GetEntityByDI(
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
      kartoffelClient.ChangeRoleOG(
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
