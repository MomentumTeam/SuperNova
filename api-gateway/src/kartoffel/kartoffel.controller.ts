import { Request, Response } from 'express';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import * as config from '../config';
import { logger } from '../logger';
import {
  OGArray,
  EntityArray,
  Entity,
  RoleArray,
  Role,
  Image,
} from '../interfaces/protoc/proto/kartoffelService';
import { OGTree } from '../interfaces/protoc/proto/kartoffelService';

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

const kartoffelClient: any = new protoDescriptor.Kartoffel(
  config.kartoffelUrl,
  grpc.credentials.createInsecure()
);

export default class KartoffelController {
  static async getPictureByEntityId(req: any, res: Response) {
    logger.info(`Call to getPictureByEntityId in GTW`, {
      callRequest: { id: req.user.id },
    });

    kartoffelClient.GetPictureByEntityId(
      { id: req.user.id },
      (err: any, response: Image) => {
        if (err) {
          logger.error(`getPictureByEntityId ERROR in GTW`, {
            err,
            callRequest: { id: req.user.id },
          });
          res.send(null);
        }

        logger.info(`getPictureByEntityId OK in GTW`, {
          response: response,
          callRequest: { id: req.user.id },
        });
        res.send(response);
      }
    );
  }

  static async getRoleByRoleId(req: Request, res: Response) {
    logger.info(`Call to getRoleByRoleId in GTW`, {
      callRequest: { roleId: req.params.roleId },
    });

    kartoffelClient.GetRoleByRoleId(
      { roleId: req.params.roleId },
      (err: any, response: Role) => {
        if (err) {
          logger.error(`getRoleByRoleId ERROR in GTW`, {
            err,
            callRequest: { roleId: req.params.roleId },
          });
          res.send(null);
        }

        logger.info(`getRoleByRoleId OK in GTW`, {
          response: response,
          callRequest: { roleId: req.params.roleId },
        });
        res.send(response);
      }
    );
  }

  static async getOGTree(req: Request, res: Response) {
    logger.info(`Call to getOGTree in GTW`, {
      callRequest: { rootId: req.params.rootId },
    });

    kartoffelClient.GetOGTree(
      { rootId: req.params.rootId },
      (err: any, response: OGTree) => {
        if (err) {
          logger.error(`getOGTree ERROR in GTW`, {
            err,
            callRequest: { rootId: req.params.rootId },
          });
          res.send(null);
        }

        logger.info(`getOGTree OK in GTW`, {
          response: response,
          callRequest: { rootId: req.params.rootId },
        });
        res.send(response);
      }
    );
  }

  static async searchOG(req: Request, res: Response) {
    logger.info(`Call to searchOG in GTW`, {
      callRequest: { hierarchyAndName: req.query.hierarchyAndName },
    });

    kartoffelClient.SearchOG(
      { hierarchyAndName: req.query.hierarchyAndName },
      (err: any, response: OGArray) => {
        if (err) {
          logger.error(`searchOG ERROR in GTW`, {
            err,
            callRequest: { hierarchyAndName: req.query.hierarchyAndName },
          });
          res.send(null);
        }

        logger.info(`searchOG OK in GTW`, {
          response: response,
          callRequest: { hierarchyAndName: req.query.hierarchyAndName },
        });
        res.send(response);
      }
    );
  }

  static async searchEntitiesByFullName(req: Request, res: Response) {
    logger.info(`Call to searchEntitiesByFullName in GTW`, {
      callRequest: { fullName: req.query.fullName },
    });

    kartoffelClient.SearchEntitiesByFullName(
      { fullName: req.query.fullName },
      (err: any, response: EntityArray) => {
        if (err) {
          logger.error(`searchEntitiesByFullName ERROR in GTW`, {
            err,
            callRequest: { fullName: req.query.fullName },
          });
          res.send(null);
        }

        logger.info(`searchEntitiesByFullName OK in GTW`, {
          response: response,
          callRequest: { fullName: req.query.fullName },
        });
        res.send(response);
      }
    );
  }

  static async getEntityByIdNumber(req: Request, res: Response) {
    logger.info(`Call to getEntityByIdNumber in GTW`, {
      callRequest: { idNumber: req.params.idNumber },
    });

    kartoffelClient.GetEntityByIdNumber(
      { idNumber: req.params.idNumber },
      (err: any, response: Entity) => {
        if (err) {
          logger.error(`getEntityByIdNumber ERROR in GTW`, {
            err,
            callRequest: { idNumber: req.params.idNumber },
          });
          res.send(null);
        }

        logger.info(`getEntityByIdNumber OK in GTW`, {
          response: response,
          callRequest: { idNumber: req.params.idNumber },
        });
        res.send(response);
      }
    );
  }

  static async searchRolesByRoleId(req: Request, res: Response) {
    logger.info(`Call to searchRolesByRoleId in GTW`, {
      callRequest: { roleId: req.params.roleId },
    });

    kartoffelClient.SearchRolesByRoleId(
      { roleId: req.params.roleId },
      (err: any, response: Role) => {
        if (err) {
          logger.error(`searchRolesByRoleId ERROR in GTW`, {
            err,
            callRequest: { roleId: req.params.roleId },
          });
          res.send(null);
        }

        logger.info(`searchRolesByRoleId OK in GTW`, {
          response: response,
          callRequest: { roleId: req.params.roleId },
        });
        res.send(response);
      }
    );
  }

  static async getRolesUnderOG(req: Request, res: Response) {
    logger.info(`Call to getRolesUnderOG in GTW`, {
      callRequest: { id: req.params.id, direct: req.query.direct },
    });

    kartoffelClient.GetRolesUnderOG(
      { id: req.params.id, direct: req.query.direct },
      (err: any, response: RoleArray) => {
        if (err) {
          logger.error(`getRolesUnderOG ERROR in GTW`, {
            err,
            callRequest: { id: req.params.id, direct: req.query.direct },
          });
          res.send(null);
        }

        logger.info(`getRolesUnderOG OK in GTW`, {
          response: response,
          callRequest: { id: req.params.id, direct: req.query.direct },
        });
        res.send(response);
      }
    );
  }

  static async getEntityByRoleId(req: Request, res: Response) {
    logger.info(`Call to getEntityByRoleId in GTW`, {
      callRequest: { roleId: req.params.roleId },
    });

    kartoffelClient.GetEntityByRoleId(
      { roleId: req.params.roleId },
      (err: any, response: Entity) => {
        if (err) {
          logger.error(`getEntityByRoleId ERROR in GTW`, {
            err,
            callRequest: { roleId: req.params.roleId },
          });
          res.send(null);
        }

        logger.info(`getEntityByRoleId OK in GTW`, {
          response: response,
          callRequest: { roleId: req.params.roleId },
        });
        res.send(response);
      }
    );
  }

  static async getMyUser(req: any, res: Response) {
    logger.info(`Call to getMyUser in GTW`, {
      callRequest: { id: req.user.id },
    });

    kartoffelClient.GetEntityByMongoId(
      { id: req.user.id },
      (err: any, response: Entity) => {
        if (err) {
          logger.error(`getMyUser ERROR in GTW`, {
            err,
            callRequest: { id: req.user.id },
          });
          res.send(null);
        }

        logger.info(`getMyUser OK in GTW`, {
          response: response,
          callRequest: { id: req.user.id },
        });
        res.send(response);
      }
    );
  }

  static async getEntityByMongoId(req: Request, res: Response) {
    logger.info(`Call to getEntityByMongoId in GTW`, {
      callRequest: { id: req.params.id },
    });

    kartoffelClient.GetEntityByMongoId(
      { id: req.params.id },
      (err: any, response: Entity) => {
        if (err) {
          logger.error(`getEntityByMongoId ERROR in GTW`, {
            err,
            callRequest: { id: req.params.id },
          });
          res.send(null);
        }

        logger.info(`getEntityByMongoId OK in GTW`, {
          response: response,
          callRequest: { id: req.params.id },
        });
        res.send(response);
      }
    );
  }

  static async getChildrenOfOG(req: Request, res: Response) {
    logger.info(`Call to getChildrenOfOG in GTW`, {
      callRequest: { id: req.params.id },
    });

    kartoffelClient.GetChildrenOfOG(
      { id: req.params.id },
      (err: any, response: OGArray) => {
        if (err) {
          logger.error(`getChildrenOfOG ERROR in GTW`, {
            err,
            callRequest: { id: req.params.id },
          });
          res.send(null);
        }

        logger.info(`getChildrenOfOG OK in GTW`, {
          response: response,
          callRequest: { id: req.params.id },
        });
        res.send(response);
      }
    );
  }

  static async getEntitiesUnderOG(req: Request, res: Response) {
    logger.info(`Call to getEntitiesUnderOG in GTW`, {
      callRequest: { id: req.params.id, direct: req.query.direct },
    });

    kartoffelClient.GetEntitiesUnderOG(
      { id: req.params.id, direct: req.query.direct },
      (err: any, response: EntityArray) => {
        if (err) {
          logger.error(`getEntitiesUnderOG ERROR in GTW`, {
            err,
            callRequest: { id: req.params.id, direct: req.query.direct },
          });
          res.send(null);
        }

        logger.info(`getEntitiesUnderOG OK in GTW`, {
          response: response,
          callRequest: { id: req.params.id, direct: req.query.direct },
        });
        res.send(response);
      }
    );
  }
}
