import path from 'path';
import { config } from '../config';
import * as grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import { logger } from '../utils/logger/logger';
import {
    Entity,
    EntityArray,
    GetAllOGsRequest,
    GetAllRolesRequest,
    GetChildrenOfOGRequest,
    GetEntitiesByHierarchyRequest,
    GetEntitiesUnderOGRequest,
    GetEntityByDIRequest,
    GetEntityByIdentifierRequest,
    GetEntityByIdRequest,
    GetEntityByRoleIdRequest,
    GetOGByHierarchyNameRequest,
    GetOGByIdRequest,
    GetOGTreeRequest,
    GetPictureByEntityIdRequest,
    GetRoleByRoleIdRequest,
    GetRolesUnderOGRequest,
    Image,
    OGArray,
    OGTree,
    OrganizationGroup,
    Role,
    RoleArray,
    SearchEntitiesByFullNameRequest,
    SearchOGRequest,
} from '../interfaces/protoc/proto/kartoffelService';

const PROTO_PATH = __dirname.includes('dist')
    ? path.join(__dirname, '../../../proto/kartoffelService.proto')
    : path.join(__dirname, '../../proto/kartoffelService.proto');

const packageDefinition: protoLoader.PackageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});

const protoDescriptor: any = grpc.loadPackageDefinition(packageDefinition).Kartoffel;

const kartoffelClient: any = new protoDescriptor.Kartoffel(
    config.endpoints.kartoffel,
    grpc.credentials.createInsecure()
);

export class KartoffelService {
    // Entity
    static async getEntityById(getEntityByIdReq: GetEntityByIdRequest): Promise<Entity> {
        logger.info(`Call to getEntityById in GTW`, getEntityByIdReq);

        return new Promise((resolve, reject) => {
            kartoffelClient.GetEntityById(getEntityByIdReq, (err: any, response: Entity) => {
                if (err) {
                    logger.error(`getEntityById ERROR in GTW`, {
                        err,
                        callRequest: getEntityByIdReq,
                    });
                    reject(err);
                }

                logger.info(`getEntityById OK in GTW`, {
                    response: response,
                    callRequest: getEntityByIdReq,
                });
                resolve(response);
            });
        });
    }
    static async getPictureByEntityId(getPictureByEntityIdReq: GetPictureByEntityIdRequest) {
        logger.info(`Call to getPictureByEntityId in GTW`, getPictureByEntityIdReq);

        return new Promise((resolve, reject) => {
            kartoffelClient.GetPictureByEntityId(getPictureByEntityIdReq, (err: any, response: Image) => {
                if (err) {
                    logger.error(`getPictureByEntityId ERROR in GTW`, {
                        err,
                        callRequest: getPictureByEntityIdReq,
                    });
                    reject(err);
                }

                logger.info(`getPictureByEntityId OK in GTW`, {
                    response: response,
                    callRequest: getPictureByEntityIdReq,
                });
                resolve(response);
            });
        });
    }
    static async searchEntitiesByFullName(searchEntitiesByFullNameReq: SearchEntitiesByFullNameRequest) {
        logger.info(`Call to searchEntitiesByFullName in GTW`, searchEntitiesByFullNameReq);

        return new Promise((resolve, reject) => {
            kartoffelClient.SearchEntitiesByFullName(searchEntitiesByFullNameReq, (err: any, response: EntityArray) => {
                if (err) {
                    logger.error(`searchEntitiesByFullName ERROR in GTW`, {
                        err,
                        callRequest: searchEntitiesByFullNameReq,
                    });
                    reject(err);
                }

                logger.info(`searchEntitiesByFullName OK in GTW`, {
                    response: response,
                    callRequest: searchEntitiesByFullNameReq,
                });
                resolve(response);
            });
        });
    }
    static async getEntityByIdentifier(getEntityByIdentifierReq: GetEntityByIdentifierRequest) {
        logger.info(`Call to getEntityByIdentifier in GTW`, getEntityByIdentifierReq);

        return new Promise((resolve, reject) => {
            kartoffelClient.GetEntityByIdentifier(getEntityByIdentifierReq, (err: any, response: Entity) => {
                if (err) {
                    logger.error(`getEntityByIdentifier ERROR in GTW`, {
                        err,
                        callRequest: getEntityByIdentifierReq,
                    });
                    reject(err);
                }

                logger.info(`getEntityByIdentifier OK in GTW`, {
                    response: response,
                    callRequest: getEntityByIdentifierReq,
                });
                resolve(response);
            });
        });
    }
    static async getEntityByRoleId(getEntityByRoleIdReq: GetEntityByRoleIdRequest) {
        logger.info(`Call to getEntityByRoleId in GTW`, getEntityByRoleIdReq);

        return new Promise((resolve, reject) => {
            kartoffelClient.GetEntityByRoleId(getEntityByRoleIdReq, (err: any, response: Entity) => {
                if (err) {
                    logger.error(`getEntityByRoleId ERROR in GTW`, {
                        err,
                        callRequest: getEntityByRoleIdReq,
                    });
                    reject(err);
                }

                logger.info(`getEntityByRoleId OK in GTW`, {
                    response: response,
                    callRequest: getEntityByRoleIdReq,
                });
                resolve(response);
            });
        });
    }
    static async getEntitiesUnderOG(getEntitiesUnderOGReq: GetEntitiesUnderOGRequest) {
        logger.info(`Call to getEntitiesUnderOG in GTW`, getEntitiesUnderOGReq);

        return new Promise((resolve, reject) => {
            kartoffelClient.GetEntitiesUnderOG(getEntitiesUnderOGReq, (err: any, response: EntityArray) => {
                if (err) {
                    logger.error(`getEntitiesUnderOG ERROR in GTW`, {
                        err,
                        callRequest: getEntitiesUnderOGReq,
                    });
                    reject(err);
                }

                logger.info(`getEntitiesUnderOG OK in GTW`, {
                    response: response,
                    callRequest: getEntitiesUnderOGReq,
                });
                resolve(response);
            });
        });
    }
    static async getEntitiesByHierarchy(getEntitiesByHierarchyReq: GetEntitiesByHierarchyRequest) {
        logger.info(`Call to getEntitiesByHierarchy in GTW`, getEntitiesByHierarchyReq);

        return new Promise((resolve, reject) => {
            kartoffelClient.GetEntitiesByHierarchy(getEntitiesByHierarchyReq, (err: any, response: EntityArray) => {
                if (err) {
                    logger.error(`getEntitiesByHierarchy ERROR in GTW`, {
                        err,
                        callRequest: getEntitiesByHierarchyReq,
                    });
                    reject(err);
                }

                logger.info(`getEntitiesByHierarchy OK in GTW`, {
                    response: response,
                    callRequest: getEntitiesByHierarchyReq,
                });
                resolve(response);
            });
        });
    }
    static async getEntityByDI(getEntityByDIReq: GetEntityByDIRequest) {
        logger.info(`Call to getEntityByDI in GTW`, getEntityByDIReq);

        return new Promise((resolve, reject) => {
            kartoffelClient.GetEntityByDI(getEntityByDIReq, (err: any, response: EntityArray) => {
                if (err) {
                    logger.error(`getEntityByDI ERROR in GTW`, {
                        err,
                        callRequest: getEntityByDIReq,
                    });
                    reject(err);
                }

                logger.info(`getEntityByDI OK in GTW`, {
                    response: response,
                    callRequest: getEntityByDIReq,
                });
                resolve(response);
            });
        });
    }

    // Group
    static async searchOG(searchOGReq: SearchOGRequest) {
        logger.info(`Call to searchOG in GTW`, searchOGReq);

        return new Promise((resolve, reject) => {
            kartoffelClient.SearchOG(searchOGReq, (err: any, response: OGArray) => {
                if (err) {
                    logger.error(`searchOG ERROR in GTW`, {
                        err,
                        callRequest: searchOGReq,
                    });
                    reject(err);
                }

                logger.info(`searchOG OK in GTW`, {
                    response: response,
                    callRequest: searchOGReq,
                });
                resolve(response);
            });
        });
    }

    static async getOGChildren(getOGChildrenReq: GetChildrenOfOGRequest) {
        logger.info(`Call to getOGChildren in GTW`, getOGChildrenReq);

        return new Promise((resolve, reject) => {
            kartoffelClient.GetChildrenOfOG(getOGChildrenReq, (err: any, response: OGArray) => {
                if (err) {
                    logger.error(`getOGChildren ERROR in GTW`, {
                        err,
                        callRequest: getOGChildrenReq,
                    });
                    reject(err);
                }

                logger.info(`getOGChildren OK in GTW`, {
                    response: response,
                    callRequest: getOGChildrenReq,
                });
                resolve(response);
            });
        });
    }

    static async getOGTree(getOGTreeReq: GetOGTreeRequest) {
        logger.info(`Call to getOGTree in GTW`, getOGTreeReq);

        return new Promise((resolve, reject) => {
            kartoffelClient.GetOGTree(getOGTreeReq, (err: any, response: OGTree) => {
                if (err) {
                    logger.error(`getOGTree ERROR in GTW`, {
                        err,
                        callRequest: getOGTreeReq,
                    });
                    reject(err);
                }

                logger.info(`getOGTree OK in GTW`, {
                    response: response,
                    callRequest: getOGTreeReq,
                });
                resolve(response);
            });
        });
    }

    static async getAllOGs(getAllOGsReq: GetAllOGsRequest) {
        logger.info(`Call to getAllOGs in GTW`, getAllOGsReq);

        return new Promise((resolve, reject) => {
            kartoffelClient.GetAllOGs(getAllOGsReq, (err: any, response: OGArray) => {
                if (err) {
                    logger.error(`getAllOGs ERROR in GTW`, {
                        err,
                        callRequest: getAllOGsReq,
                    });
                    reject(err);
                }

                logger.info(`getAllOGs OK in GTW`, {
                    response: response,
                    callRequest: getAllOGsReq,
                });
                resolve(response);
            });
        });
    }

    static async getOGById(getOGByIdReq: GetOGByIdRequest) {
        logger.info(`Call to getOGById in GTW`, getOGByIdReq);

        return new Promise((resolve, reject) => {
            kartoffelClient.GetOGById(getOGByIdReq, (err: any, response: OrganizationGroup) => {
                if (err) {
                    logger.error(`getOGById ERROR in GTW`, {
                        err,
                        callRequest: getOGByIdReq,
                    });
                    reject(err);
                }

                logger.info(`getOGById OK in GTW`, {
                    response: response,
                    callRequest: getOGByIdReq,
                });
                resolve(response);
            });
        });
    }

    static async getOGByHierarchyName(getOGByHierarchyNameReq: GetOGByHierarchyNameRequest) {
        logger.info(`Call to getOGByHierarchyName in GTW`, getOGByHierarchyNameReq);

        return new Promise((resolve, reject) => {
            kartoffelClient.GetOGByHierarchyName(getOGByHierarchyNameReq, (err: any, response: OrganizationGroup) => {
                if (err) {
                    logger.error(`getOGByHierarchyName ERROR in GTW`, {
                        err,
                        callRequest: getOGByHierarchyNameReq,
                    });
                    reject(err);
                }

                logger.info(`getOGByHierarchyName OK in GTW`, {
                    response: response,
                    callRequest: getOGByHierarchyNameReq,
                });
                resolve(response);
            });
        });
    }

    // Roles
    static async getRoleById(getRoleByIdReq: GetRoleByRoleIdRequest) {
        logger.info(`Call to getRoleById in GTW`, getRoleByIdReq);

        return new Promise((resolve, reject) => {
            kartoffelClient.GetRoleByRoleId(getRoleByIdReq, (err: any, response: Role) => {
                if (err) {
                    logger.error(`getRoleById ERROR in GTW`, {
                        err,
                        callRequest: getRoleByIdReq,
                    });
                    reject(err);
                }

                logger.info(`getRoleById OK in GTW`, {
                    response: response,
                    callRequest: getRoleByIdReq,
                });
                resolve(response);
            });
        });
    }

    static async getRolesUnderOG(getRolesUnderOGReq: GetRolesUnderOGRequest) {
        logger.info(`Call to getRolesUnderOG in GTW`, getRolesUnderOGReq);

        return new Promise((resolve, reject) => {
            kartoffelClient.GetRolesUnderOG(getRolesUnderOGReq, (err: any, response: RoleArray) => {
                if (err) {
                    logger.error(`getRolesUnderOG ERROR in GTW`, {
                        err,
                        callRequest: getRolesUnderOGReq,
                    });
                    reject(err);
                }

                logger.info(`getRolesUnderOG OK in GTW`, {
                    response: response,
                    callRequest: getRolesUnderOGReq,
                });
                resolve(response);
            });
        });
    }

    static async getAllRoles(getAllRolesReq: GetAllRolesRequest) {
        logger.info(`Call to getAllRoles in GTW`, getAllRolesReq);

        return new Promise((resolve, reject) => {
            kartoffelClient.GetAllRoles(getAllRolesReq, (err: any, response: RoleArray) => {
                if (err) {
                    logger.error(`getAllRoles ERROR in GTW`, {
                        err,
                        callRequest: getAllRolesReq,
                    });
                    reject(err);
                }

                logger.info(`getAllRoles OK in GTW`, {
                    response: response,
                    callRequest: getAllRolesReq,
                });
                resolve(response);
            });
        });
    }
}
