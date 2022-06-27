import path from 'path';
import { config } from '../config';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { logger } from '../utils/logger/logger';

import {
  DigitalIdentities,
  DigitalIdentity,
  Entity,
  EntityArray,
  ExportHierarchyDataRes,
  GetAllOGsRequest,
  GetAllRolesRequest,
  GetChildrenOfOGRequest,
  GetChildrenOfRootOGRequest,
  GetDIByUniqueIdRequest,
  GetEntitiesByHierarchyRequest,
  GetEntitiesUnderOGRequest,
  GetEntityByDIRequest,
  GetEntityByIdentifierRequest,
  GetEntityByIdRequest,
  GetEntityByRoleIdRequest,
  GetIsHealthyReq,
  GetIsHealthyRes,
  GetOGByHierarchyNameRequest,
  GetOGByIdRequest,
  GetOGTreeRequest,
  GetPictureByEntityIdentifierRequest,
  GetRoleByRoleIdRequest,
  GetRolesByHierarchyRequest,
  GetRolesUnderOGRequest,
  Image,
  IsJobTitleAlreadyTakenReq,
  IsJobTitleAlreadyTakenRes,
  IsOGNameAlreadyTakenReq,
  IsRoleAlreadyTakenReq,
  IsRoleAlreadyTakenRes,
  OGArray,
  OGTree,
  OrganizationGroup,
  Role,
  RoleArray,
  SearchDIByUniqueIdRequest,
  SearchEntitiesByFullNameRequest,
  SearchOGRequest,
  SearchRoleByRoleIdReq,
  SearchSamAccountNameReq,
  SearchSamAccountNameRes,
} from '../interfaces/protoc/proto/kartoffelService';

const PROTO_PATH = __dirname.includes('dist')
  ? path.join(__dirname, '../../../proto/kartoffelService.proto')
  : path.join(__dirname, '../../proto/kartoffelService.proto');

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
for (let i = 0; i < config.fields.grpcPoolSize; i++) {
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

export class KartoffelService {
  // Entity
  static async getEntityById(
    getEntityByIdReq: GetEntityByIdRequest
  ): Promise<Entity> {
    logger.info(`Call to getEntityById in GTW`, getEntityByIdReq);

    return new Promise((resolve, reject) => {
      randomClient().GetEntityById(
        getEntityByIdReq,
        (err: any, response: Entity) => {
          if (err) {
            logger.error(`getEntityById ERROR in GTW`, {
              err,
              callRequest: getEntityByIdReq,
            });
            reject(err);
          }

          logger.info(`getEntityById OK in GTW`, {
            callRequest: getEntityByIdReq,
          });
          resolve(response);
        }
      );
    });
  }
  static async getPictureByEntityIdentifier(
    getPictureByEntityIdentifierReq: GetPictureByEntityIdentifierRequest
  ) {
    logger.info(
      `Call to getPictureByEntityIdentifier in GTW`,
      getPictureByEntityIdentifierReq
    );

    return new Promise((resolve, reject) => {
      randomClient().GetPictureByEntityIdentifier(
        getPictureByEntityIdentifierReq,
        (err: any, response: Image) => {
          if (err) {
            logger.error(`getPictureByEntityIdentifier ERROR in GTW`, {
              err,
              callRequest: getPictureByEntityIdentifierReq,
            });
            reject(err);
          }

          logger.info(`getPictureByEntityIdentifier OK in GTW`, {
            // response: response,
            callRequest: getPictureByEntityIdentifierReq,
          });
          resolve(response);
        }
      );
    });
  }
  static async searchEntitiesByFullName(
    searchEntitiesByFullNameReq: SearchEntitiesByFullNameRequest
  ) {
    logger.info(
      `Call to searchEntitiesByFullName in GTW`,
      searchEntitiesByFullNameReq
    );

    return new Promise((resolve, reject) => {
      randomClient().SearchEntitiesByFullName(
        searchEntitiesByFullNameReq,
        (err: any, response: EntityArray) => {
          if (err) {
            logger.error(`searchEntitiesByFullName ERROR in GTW`, {
              err,
              callRequest: searchEntitiesByFullNameReq,
            });
            reject(err);
          }

          logger.info(`searchEntitiesByFullName OK in GTW`, {
            callRequest: searchEntitiesByFullNameReq,
          });
          resolve(response);
        }
      );
    });
  }
  static async getEntityByIdentifier(
    getEntityByIdentifierReq: GetEntityByIdentifierRequest
  ) {
    logger.info(
      `Call to getEntityByIdentifier in GTW`,
      getEntityByIdentifierReq
    );

    return new Promise((resolve, reject) => {
      randomClient().GetEntityByIdentifier(
        getEntityByIdentifierReq,
        (err: any, response: Entity) => {
          if (err) {
            logger.error(`getEntityByIdentifier ERROR in GTW`, {
              err,
              callRequest: getEntityByIdentifierReq,
            });
            reject(err);
          }

          logger.info(`getEntityByIdentifier OK in GTW`, {
            callRequest: getEntityByIdentifierReq,
          });
          resolve(response);
        }
      );
    });
  }
  static async getEntityByRoleId(
    getEntityByRoleIdReq: GetEntityByRoleIdRequest
  ) {
    logger.info(`Call to getEntityByRoleId in GTW`, getEntityByRoleIdReq);

    return new Promise((resolve, reject) => {
      randomClient().GetEntityByRoleId(
        getEntityByRoleIdReq,
        (err: any, response: Entity) => {
          if (err) {
            logger.error(`getEntityByRoleId ERROR in GTW`, {
              err,
              callRequest: getEntityByRoleIdReq,
            });
            reject(err);
          }

          logger.info(`getEntityByRoleId OK in GTW`, {
            callRequest: getEntityByRoleIdReq,
          });
          resolve(response);
        }
      );
    });
  }
  static async getEntitiesUnderOG(
    getEntitiesUnderOGReq: GetEntitiesUnderOGRequest
  ) {
    logger.info(`Call to getEntitiesUnderOG in GTW`, getEntitiesUnderOGReq);

    return new Promise((resolve, reject) => {
      randomClient().GetEntitiesUnderOG(
        getEntitiesUnderOGReq,
        (err: any, response: EntityArray) => {
          if (err) {
            logger.error(`getEntitiesUnderOG ERROR in GTW`, {
              err,
              callRequest: getEntitiesUnderOGReq,
            });
            reject(err);
          }

          logger.info(`getEntitiesUnderOG OK in GTW`, {
            callRequest: getEntitiesUnderOGReq,
          });
          resolve(response);
        }
      );
    });
  }
  static async getEntitiesByHierarchy(
    getEntitiesByHierarchyReq: GetEntitiesByHierarchyRequest
  ) {
    logger.info(
      `Call to getEntitiesByHierarchy in GTW`,
      getEntitiesByHierarchyReq
    );

    return new Promise((resolve, reject) => {
      randomClient().GetEntitiesByHierarchy(
        getEntitiesByHierarchyReq,
        (err: any, response: EntityArray) => {
          if (err) {
            logger.error(`getEntitiesByHierarchy ERROR in GTW`, {
              err,
              callRequest: getEntitiesByHierarchyReq,
            });
            reject(err);
          }

          logger.info(`getEntitiesByHierarchy OK in GTW`, {
            callRequest: getEntitiesByHierarchyReq,
          });
          resolve(response);
        }
      );
    });
  }
  static async getEntityByDI(getEntityByDIReq: GetEntityByDIRequest) {
    logger.info(`Call to getEntityByDI in GTW`, getEntityByDIReq);

    return new Promise((resolve, reject) => {
      randomClient().GetEntityByDI(
        getEntityByDIReq,
        (err: any, response: EntityArray) => {
          if (err) {
            logger.error(`getEntityByDI ERROR in GTW`, {
              err,
              callRequest: getEntityByDIReq,
            });
            reject(err);
          }

          logger.info(`getEntityByDI OK in GTW`, {
            callRequest: getEntityByDIReq,
          });
          resolve(response);
        }
      );
    });
  }

  // Group
  static async searchOG(searchOGReq: SearchOGRequest) {
    logger.info(`Call to searchOG in GTW`, searchOGReq);

    return new Promise((resolve, reject) => {
      randomClient().SearchOG(searchOGReq, (err: any, response: OGArray) => {
        if (err) {
          logger.error(`searchOG ERROR in GTW`, {
            err,
            callRequest: searchOGReq,
          });
          reject(err);
        }

        logger.info(`searchOG OK in GTW`, {
          callRequest: searchOGReq,
        });
        resolve(response);
      });
    });
  }

  static async isOGNameAlreadyTaken(
    isOGNameAlreadyTakenReq: IsOGNameAlreadyTakenReq
  ) {
    logger.info(`Call to isOGNameAlreadyTaken in GTW`, isOGNameAlreadyTakenReq);

    return new Promise((resolve, reject) => {
      randomClient().IsOGNameAlreadyTaken(
        isOGNameAlreadyTakenReq,
        (err: any, response: OGArray) => {
          if (err) {
            logger.error(`isOGNameAlreadyTaken ERROR in GTW`, {
              err,
              callRequest: isOGNameAlreadyTakenReq,
            });
            reject(err);
          }

          logger.info(`isOGNameAlreadyTaken OK in GTW`, {
            response: response,
            callRequest: isOGNameAlreadyTakenReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async getOGRootChildren(
    getOGRootChildrenReq: GetChildrenOfRootOGRequest
  ) {
    logger.info(`Call to getOGRootChildren in GTW`, getOGRootChildrenReq);

    return new Promise((resolve, reject) => {
      randomClient().GetChildrenOfRootOG(
        getOGRootChildrenReq,
        (err: any, response: OGArray) => {
          if (err) {
            logger.error(`getOGChildren ERROR in GTW`, {
              err,
              callRequest: getOGRootChildrenReq,
            });
            reject(err);
          }

          logger.info(`getOGChildren OK in GTW`, {
            callRequest: getOGRootChildrenReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async getOGChildren(getOGChildrenReq: GetChildrenOfOGRequest) {
    logger.info(`Call to getOGChildren in GTW`, getOGChildrenReq);

    return new Promise((resolve, reject) => {
      randomClient().GetChildrenOfOG(
        getOGChildrenReq,
        (err: any, response: OGArray) => {
          if (err) {
            logger.error(`getOGChildren ERROR in GTW`, {
              err,
              callRequest: getOGChildrenReq,
            });
            reject(err);
          }

          logger.info(`getOGChildren OK in GTW`, {
            callRequest: getOGChildrenReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async getOGTree(getOGTreeReq: GetOGTreeRequest) {
    logger.info(`Call to getOGTree in GTW`, getOGTreeReq);

    return new Promise((resolve, reject) => {
      randomClient().GetOGTree(getOGTreeReq, (err: any, response: OGTree) => {
        if (err) {
          logger.error(`getOGTree ERROR in GTW`, {
            err,
            callRequest: getOGTreeReq,
          });
          reject(err);
        }

        logger.info(`getOGTree OK in GTW`, {
          callRequest: getOGTreeReq,
        });
        resolve(response);
      });
    });
  }

  static async getAllOGs(getAllOGsReq: GetAllOGsRequest) {
    logger.info(`Call to getAllOGs in GTW`, getAllOGsReq);

    return new Promise((resolve, reject) => {
      randomClient().GetAllOGs(getAllOGsReq, (err: any, response: OGArray) => {
        if (err) {
          logger.error(`getAllOGs ERROR in GTW`, {
            err,
            callRequest: getAllOGsReq,
          });
          reject(err);
        }

        logger.info(`getAllOGs OK in GTW`, {
          callRequest: getAllOGsReq,
        });
        resolve(response);
      });
    });
  }

  static async getOGById(getOGByIdReq: GetOGByIdRequest) {
    logger.info(`Call to getOGById in GTW`, getOGByIdReq);

    return new Promise((resolve, reject) => {
      randomClient().GetOGById(
        getOGByIdReq,
        (err: any, response: OrganizationGroup) => {
          if (err) {
            logger.error(`getOGById ERROR in GTW`, {
              err,
              callRequest: getOGByIdReq,
            });
            reject(err);
          }

          logger.info(`getOGById OK in GTW`, {
            callRequest: getOGByIdReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async getOGByHierarchyName(
    getOGByHierarchyNameReq: GetOGByHierarchyNameRequest
  ) {
    logger.info(`Call to getOGByHierarchyName in GTW`, getOGByHierarchyNameReq);

    return new Promise((resolve, reject) => {
      randomClient().GetOGByHierarchyName(
        getOGByHierarchyNameReq,
        (err: any, response: OrganizationGroup) => {
          if (err) {
            logger.error(`getOGByHierarchyName ERROR in GTW`, {
              err,
              callRequest: getOGByHierarchyNameReq,
            });
            reject(err);
          }

          logger.info(`getOGByHierarchyName OK in GTW`, {
            callRequest: getOGByHierarchyNameReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async exportHierarchyData(
    exportHierarchyDataReq: ExportHierarchyDataRes
  ) {
    logger.info(`Call to exportHierarchyData in GTW`, exportHierarchyDataReq);

    return new Promise((resolve, reject) => {
      randomClient().ExportHierarchyData(
        exportHierarchyDataReq,
        (err: any, response: ExportHierarchyDataRes) => {
          if (err) {
            logger.error(`exportHierarchyData ERROR in GTW`, {
              err,
              callRequest: exportHierarchyDataReq,
            });
            reject(err);
          }

          logger.info(`exportHierarchyData OK in GTW`, {
            callRequest: exportHierarchyDataReq,
          });
          resolve(response);
        }
      );
    });
  }

  // Roles
  static async getRoleById(getRoleByIdReq: GetRoleByRoleIdRequest) {
    logger.info(`Call to getRoleById in GTW`, getRoleByIdReq);

    return new Promise((resolve, reject) => {
      randomClient().GetRoleByRoleId(
        getRoleByIdReq,
        (err: any, response: Role) => {
          if (err) {
            logger.error(`getRoleById ERROR in GTW`, {
              err,
              callRequest: getRoleByIdReq,
            });
            reject(err);
          }

          logger.info(`getRoleById OK in GTW`, {
            callRequest: getRoleByIdReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async getRolesUnderOG(getRolesUnderOGReq: GetRolesUnderOGRequest) {
    logger.info(`Call to getRolesUnderOG in GTW`, getRolesUnderOGReq);

    return new Promise((resolve, reject) => {
      randomClient().GetRolesUnderOG(
        getRolesUnderOGReq,
        (err: any, response: RoleArray) => {
          if (err) {
            logger.error(`getRolesUnderOG ERROR in GTW`, {
              err,
              callRequest: getRolesUnderOGReq,
            });
            reject(err);
          }

          logger.info(`getRolesUnderOG OK in GTW`, {
            callRequest: getRolesUnderOGReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async getAllRoles(getAllRolesReq: GetAllRolesRequest) {
    logger.info(`Call to getAllRoles in GTW`, getAllRolesReq);

    return new Promise((resolve, reject) => {
      randomClient().GetAllRoles(
        getAllRolesReq,
        (err: any, response: RoleArray) => {
          if (err) {
            logger.error(`getAllRoles ERROR in GTW`, {
              err,
              callRequest: getAllRolesReq,
            });
            reject(err);
          }

          logger.info(`getAllRoles OK in GTW`, {
            callRequest: getAllRolesReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async getRolesByHierarchy(
    getRolesByHierarchyReq: GetRolesByHierarchyRequest
  ) {
    logger.info(`Call to getRolesByHierarchy in GTW`, getRolesByHierarchyReq);

    return new Promise((resolve, reject) => {
      randomClient().GetRolesByHierarchy(
        getRolesByHierarchyReq,
        (err: any, response: RoleArray) => {
          if (err) {
            logger.error(`getRolesByHierarchy ERROR in GTW`, {
              err,
              callRequest: getRolesByHierarchyReq,
            });
            reject(err);
          }

          logger.info(`getRolesByHierarchy OK in GTW`, {
            callRequest: getRolesByHierarchyReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async isRoleAlreadyTaken(
    isRoleAlreadyTakenReq: IsRoleAlreadyTakenReq
  ) {
    logger.info(`Call to isRoleAlreadyTaken in GTW`, isRoleAlreadyTakenReq);

    return new Promise((resolve, reject) => {
      randomClient().IsRoleAlreadyTaken(
        isRoleAlreadyTakenReq,
        (err: any, response: IsRoleAlreadyTakenRes) => {
          if (err) {
            logger.error(`isRoleAlreadyTaken ERROR in GTW`, {
              err,
              callRequest: isRoleAlreadyTakenReq,
            });
            reject(err);
          }

          logger.info(`isRoleAlreadyTaken OK in GTW`, {
            callRequest: isRoleAlreadyTakenReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async isJobTitleAlreadyTaken(
    isJobTitleAlreadyTakenReq: IsJobTitleAlreadyTakenReq
  ) {
    logger.info(
      `Call to isJobTitleAlreadyTaken in GTW`,
      isJobTitleAlreadyTakenReq
    );

    return new Promise((resolve, reject) => {
      randomClient().IsJobTitleAlreadyTaken(
        isJobTitleAlreadyTakenReq,
        (err: any, response: IsJobTitleAlreadyTakenRes) => {
          if (err) {
            logger.error(`isJobTitleAlreadyTaken ERROR in GTW`, {
              err,
              callRequest: isJobTitleAlreadyTakenReq,
            });
            reject(err);
          }

          logger.info(`isJobTitleAlreadyTaken OK in GTW`, {
            response: response,
            callRequest: isJobTitleAlreadyTakenReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async searchRolesByRoleId(
    searchRoleByRoleIdReq: SearchRoleByRoleIdReq
  ) {
    logger.info(`Call to searchRoleByRoleIdReq in GTW`, searchRoleByRoleIdReq);

    return new Promise((resolve, reject) => {
      randomClient().SearchRoleByRoleId(
        searchRoleByRoleIdReq,
        (err: any, response: RoleArray) => {
          if (err) {
            logger.error(`searchRoleByRoleIdReq ERROR in GTW`, {
              err,
              callRequest: searchRoleByRoleIdReq,
            });
            reject(err);
          }

          logger.info(`searchRoleByRoleIdReq OK in GTW`, {
            callRequest: searchRoleByRoleIdReq,
          });
          resolve(response);
        }
      );
    });
  }

  // DI
  static async searchDIsByUniqueId(
    searchDIsByUniqueIdRequest: SearchDIByUniqueIdRequest
  ) {
    logger.info(
      `Call to searchDIsByUniqueId in GTW`,
      searchDIsByUniqueIdRequest
    );

    return new Promise((resolve, reject) => {
      randomClient().SearchDIByUniqueId(
        searchDIsByUniqueIdRequest,
        (err: any, response: DigitalIdentities) => {
          if (err) {
            logger.error(`searchDIsByUniqueId ERROR in GTW`, {
              err,
              callRequest: searchDIsByUniqueIdRequest,
            });
            reject(err);
          }

          logger.info(`searchDIsByUniqueId OK in GTW`, {
            callRequest: searchDIsByUniqueIdRequest,
          });
          resolve(response);
        }
      );
    });
  }

  static async getDIByUniqueId(getDIByUniqueIdRequest: GetDIByUniqueIdRequest) {
    logger.info(`Call to getDIByUniqueId in GTW`, getDIByUniqueIdRequest);

    return new Promise((resolve, reject) => {
      randomClient().GetDIByUniqueId(
        getDIByUniqueIdRequest,
        (err: any, response: DigitalIdentity) => {
          if (err) {
            logger.error(`getDIByUniqueId ERROR in GTW`, {
              err,
              callRequest: getDIByUniqueIdRequest,
            });
            reject(err);
          }

          logger.info(`getDIByUniqueId OK in GTW`, {
            callRequest: getDIByUniqueIdRequest,
          });
          resolve(response);
        }
      );
    });
  }

  static async getIsHealthy(getIsHealthyReq: GetIsHealthyReq) {
    logger.info(`Call to getIsHealthy in GTW`, getIsHealthyReq);

    return new Promise((resolve, reject) => {
      randomClient().GetIsHealthy(
        getIsHealthyReq,
        (err: any, response: GetIsHealthyRes) => {
          if (err) {
            logger.error(`getIsHealthy ERROR in GTW`, {
              err,
              callRequest: getIsHealthyReq,
            });
            reject(err);
          }

          logger.info(`getIsHealthy OK in GTW`, {
            response: response,
            callRequest: getIsHealthyReq,
          });
          resolve(response);
        }
      );
    });
  }

  // LDAP
  static async searchSamAccountName(searchSamAccountNameReq: SearchSamAccountNameReq) {
    logger.info(`Call to searchSamAccountName in GTW`, searchSamAccountNameReq);

    return new Promise((resolve, reject) => {
      randomClient().SearchSamAccountName(searchSamAccountNameReq, (err: any, response: SearchSamAccountNameRes) => {
        if (err) {
          logger.error(`searchSamAccountName ERROR in GTW`, {
            err,
            callRequest: searchSamAccountNameReq,
          });
          reject(err);
        }

        logger.info(`searchSamAccountName OK in GTW`, {
          response: response,
          callRequest: searchSamAccountNameReq,
        });
        resolve(response);
      });
    });
  }
}
