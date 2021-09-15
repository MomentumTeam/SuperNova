import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import * as config from '../config';
import {
  EntityArray,
  Entity,
  GetEntityByRoleIdRequest,
  OGArray,
  SearchOGRequest,
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
  CreateEntityRequest,
  DisconnectDIFromEntityRequest,
  DeleteOGRequest,
  DeleteRoleRequest,
  DeleteDIRequest,
  GetOGTreeRequest,
  OGTree,
  GetEntitiesUnderOGRequest,
  GetPictureByEntityIdRequest,
  Image,
  GetChildrenOfOGRequest,
  GetEntityByIdentifierRequest,
  GetEntityByDIRequest,
  RenameRoleRequest,
  RenameOGRequest,
  GetEntityByIdRequest,
  UpdateEntityRequest,
  DisconnectRoleAndDIRequest,
} from '../interfaces/protoc/proto/kartoffelService';
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
  config.kartoffelServiceUrl,
  grpc.credentials.createInsecure()
);

export default class KartoffelService {
  static async searchOG(searchOGRequest: SearchOGRequest): Promise<OGArray> {
    console.log('searchOG');
    return new Promise((resolve, reject) => {
      kartoffelClient.searchOG(
        searchOGRequest,
        (err: any, ogArray: OGArray) => {
          if (err) {
            throw reject(err);
          } else {
            return resolve(ogArray);
          }
        }
      );
    });
  }

  static async createOG(
    createOGRequest: CreateOGRequest
  ): Promise<OrganizationGroup> {
    console.log('CreateOG');
    return new Promise((resolve, reject) => {
      kartoffelClient.createOG(
        createOGRequest,
        (err: any, organizationGroup: OrganizationGroup) => {
          if (err) {
            throw reject(err);
          } else {
            return resolve(organizationGroup);
          }
        }
      );
    });
  }

  static async createDI(
    createDIRequest: CreateDIRequest
  ): Promise<DigitalIdentity> {
    console.log('CreateDI');
    return new Promise((resolve, reject) => {
      kartoffelClient.createDI(
        createDIRequest,
        (err: any, digitalIdentity: DigitalIdentity) => {
          if (err) {
            throw reject(err);
          } else {
            return resolve(digitalIdentity);
          }
        }
      );
    });
  }

  static async createRole(createRoleRequest: CreateRoleRequest): Promise<Role> {
    console.log('CreateRole');
    return new Promise((resolve, reject) => {
      kartoffelClient.createRole(createRoleRequest, (err: any, role: Role) => {
        if (err) {
          throw reject(err);
        } else {
          return resolve(role);
        }
      });
    });
  }

  static async renameRole(
    renameRoleRequest: RenameRoleRequest
  ): Promise<SuccessMessage> {
    console.log('RenameRole');
    return new Promise((resolve, reject) => {
      kartoffelClient.renameRole(
        renameRoleRequest,
        (err: any, message: SuccessMessage) => {
          if (err) {
            throw reject(err);
          } else {
            return resolve(message);
          }
        }
      );
    });
  }

  static async renameOG(
    renameOGRequest: RenameOGRequest
  ): Promise<SuccessMessage> {
    console.log('RenameOG');
    return new Promise((resolve, reject) => {
      kartoffelClient.renameOG(
        renameOGRequest,
        (err: any, message: SuccessMessage) => {
          if (err) {
            throw reject(err);
          } else {
            return resolve(message);
          }
        }
      );
    });
  }

  static async updateEntity(
    updateEntityRequest: UpdateEntityRequest
  ): Promise<SuccessMessage> {
    console.log('UpdateEntity');
    return new Promise((resolve, reject) => {
      kartoffelClient.updateEntity(
        updateEntityRequest,
        (err: any, message: SuccessMessage) => {
          if (err) {
            throw reject(err);
          } else {
            return resolve(message);
          }
        }
      );
    });
  }

  static async connectRoleAndDI(
    connectRoleAndDIRequest: ConnectRoleAndDIRequest
  ): Promise<SuccessMessage> {
    console.log('ConnectRoleAndDI');
    return new Promise((resolve, reject) => {
      kartoffelClient.connectRoleAndDI(
        connectRoleAndDIRequest,
        (err: any, successMessage: SuccessMessage) => {
          if (err) {
            throw reject(err);
          } else {
            return resolve(successMessage);
          }
        }
      );
    });
  }

  static async disconnectRoleAndDI(
    disconnectRoleAndDIRequest: DisconnectRoleAndDIRequest
  ): Promise<SuccessMessage> {
    console.log('ConnectRoleAndDI');
    return new Promise((resolve, reject) => {
      kartoffelClient.connectRoleAndDI(
        disconnectRoleAndDIRequest,
        (err: any, successMessage: SuccessMessage) => {
          if (err) {
            throw reject(err);
          } else {
            return resolve(successMessage);
          }
        }
      );
    });
  }

  static async getRoleByRoleId(
    getRoleByRoleIdRequest: GetRoleByRoleIdRequest
  ): Promise<Role> {
    console.log('GetRoleByRoleId');
    return new Promise((resolve, reject) => {
      kartoffelClient.getRoleByRoleId(
        getRoleByRoleIdRequest,
        (err: any, role: Role) => {
          if (err) {
            throw reject(err);
          } else {
            return resolve(role);
          }
        }
      );
    });
  }

  static async getRolesUnderOG(
    getRolesUnderOGRequest: GetRolesUnderOGRequest
  ): Promise<RoleArray> {
    console.log('GetRolesUnderOG');
    return new Promise((resolve, reject) => {
      kartoffelClient.getRolesUnderOG(
        getRolesUnderOGRequest,
        (err: any, roleArray: RoleArray) => {
          if (err) {
            throw reject(err);
          } else {
            return resolve(roleArray);
          }
        }
      );
    });
  }

  static async connectEntityAndDI(
    connectEntityAndDIRequest: ConnectEntityAndDIRequest
  ): Promise<SuccessMessage> {
    console.log('connectEntityAndDI');
    return new Promise((resolve, reject) => {
      kartoffelClient.connectEntityAndDI(
        connectEntityAndDIRequest,
        (err: any, successMessage: SuccessMessage) => {
          if (err) {
            throw reject(err);
          } else {
            return resolve(successMessage);
          }
        }
      );
    });
  }

  static async createEntity(
    createEntityRequest: CreateEntityRequest
  ): Promise<Entity> {
    console.log('CreateEntity');
    return new Promise((resolve, reject) => {
      kartoffelClient.createEntity(
        createEntityRequest,
        (err: any, entity: Entity) => {
          if (err) {
            throw reject(err);
          } else {
            return resolve(entity);
          }
        }
      );
    });
  }

  static async disconnectDIFromEntity(
    disconnectDIFromEntityRequest: DisconnectDIFromEntityRequest
  ): Promise<SuccessMessage> {
    console.log('DisconnectDIFromEntity');
    return new Promise((resolve, reject) => {
      kartoffelClient.disconnectDIFromEntity(
        DisconnectDIFromEntityRequest,
        (err: any, successMessage: SuccessMessage) => {
          if (err) {
            throw reject(err);
          } else {
            return resolve(successMessage);
          }
        }
      );
    });
  }

  static async getEntityByRoleId(
    getEntityByRoleIdRequest: GetEntityByRoleIdRequest
  ): Promise<Entity> {
    console.log('getEntityByRoleId');
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
    console.log('getEntityById');
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
    console.log('DeleteOG');
    return new Promise((resolve, reject) => {
      kartoffelClient.deleteOG(
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
    console.log('GetChildrenOfOG');
    return new Promise((resolve, reject) => {
      kartoffelClient.getChildrenOfOG(
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
    console.log('DeleteRole');
    return new Promise((resolve, reject) => {
      kartoffelClient.deleteRole(
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

  static async deleteDI(
    deleteDIRequest: DeleteDIRequest
  ): Promise<SuccessMessage> {
    console.log('DeleteDI');
    return new Promise((resolve, reject) => {
      kartoffelClient.deleteDI(
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
    console.log('GetOGTree');
    return new Promise((resolve, reject) => {
      kartoffelClient.getOGTree(
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

  static async getEntityByIdNumber(
    getEntityByIdNumberRequest: GetEntityByIdentifierRequest
  ): Promise<Entity> {
    console.log('GetEntityByIdNumber');
    return new Promise((resolve, reject) => {
      kartoffelClient.getEntityByIdNumber(
        getEntityByIdNumberRequest,
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

  static async getEntitiesUnderOG(
    getEntitiesUnderOGRequest: GetEntitiesUnderOGRequest
  ): Promise<EntityArray> {
    console.log('GetEntitiesUnderOG');
    return new Promise((resolve, reject) => {
      kartoffelClient.getEntitiesUnderOG(
        getEntitiesUnderOGRequest,
        (err: any, entityArray: EntityArray) => {
          if (err) {
            reject(err);
          } else {
            resolve(entityArray);
          }
        }
      );
    });
  }

  static async getEntityByDigitalIdentity(
    getEntityByDIRequest: GetEntityByDIRequest
  ): Promise<Entity> {
    console.log('GetEntityByDigitalIdentity');
    return new Promise((resolve, reject) => {
      kartoffelClient.getEntityByDigitalIdentity(
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

  static async getPictureByEntityId(
    getPictureByEntityIdRequest: GetPictureByEntityIdRequest
  ): Promise<Image> {
    console.log('GetPictureByEntityId');
    return new Promise((resolve, reject) => {
      kartoffelClient.getPictureByEntityId(
        getPictureByEntityIdRequest,
        (err: any, image: Image) => {
          if (err) {
            reject(err);
          } else {
            resolve(image);
          }
        }
      );
    });
  }
}
