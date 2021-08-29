import { Request, Response } from 'express';
import * as grpc from 'grpc';
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


  //entities
  static async getMyUser(req: any, res: Response) {
    const data = { id: req.user.id };

    logger.info(`Call to getMyUser in GTW`, {
      callRequest: data,
    });

    kartoffelClient.GetEntityById(
      data,
      (err: any, response: Entity) => {
        if (err) {
          logger.error(`getMyUser ERROR in GTW`, {
            err,
            callRequest: data,
          });
          res.status(500).send(err.message);
        }

        logger.info(`getMyUser OK in GTW`, {
          response: response,
          callRequest: data,
        });
        res.send(response);
      }
    );
  }

  static async getEntityByMongoId(req: Request, res: Response) {
    const data = { id: req.params.id };

    logger.info(`Call to getEntityByMongoId in GTW`, {
      callRequest: data,
    });

    kartoffelClient.GetEntityById(
      data,
      (err: any, response: Entity) => {
        if (err) {
          logger.error(`getEntityByMongoId ERROR in GTW`, {
            err,
            callRequest: data,
          });
          res.status(500).send(err.message);
        }

        logger.info(`getEntityByMongoId OK in GTW`, {
          response: response,
          callRequest: data,
        });
        res.send(response);
      }
    );
  }

  static async getPictureByEntityId(req: any, res: Response) {
    const data={ id: req.user.id };

    logger.info(`Call to getPictureByEntityId in GTW`, {
      callRequest: data,
    });

    kartoffelClient.GetPictureByEntityId(
      data,
      (err: any, response: Image) => {
        if (err) {
          logger.error(`getPictureByEntityId ERROR in GTW`, {
            err,
            callRequest: data,
          });
          res.status(500).send(err.message);
        }

        logger.info(`getPictureByEntityId OK in GTW`, {
          response: response,
          callRequest: data,
        });
        res.send(response);
      }
    );
  }

  static async searchEntitiesByFullName(req: Request, res: Response) {
    const data=req.query;

    logger.info(`Call to searchEntitiesByFullName in GTW`, {
      callRequest: data,
    });

    kartoffelClient.SearchEntitiesByFullName(
      data,
      (err: any, response: EntityArray) => {
        if (err) {
          logger.error(`searchEntitiesByFullName ERROR in GTW`, {
            err,
            callRequest: data,
          });
          res.status(500).send(err.message);
        }

        logger.info(`searchEntitiesByFullName OK in GTW`, {
          response: response,
          callRequest: data,
        });
        res.send(response);
      }
    );
  }

  static async getEntityByIdentifier(req: Request, res: Response) {
    const data={ identifier: req.params.identifier };

    logger.info(`Call to getEntityByIdentifier in GTW`, {
      callRequest: data,
    });

    kartoffelClient.GetEntityByIdentifier(
      data,
      (err: any, response: Entity) => {
        if (err) {
          logger.error(`getEntityByIdentifier ERROR in GTW`, {
            err,
            callRequest: data,
          });
          res.status(500).send(err.message);
        }

        logger.info(`getEntityByIdentifier OK in GTW`, {
          response: response,
          callRequest: data,
        });
        res.send(response);
      }
    );
  }

  static async getEntityByRoleId(req: Request, res: Response) {
    const data={ roleId: req.params.roleId };

    logger.info(`Call to getEntityByRoleId in GTW`, {
      callRequest: data,
    });

    kartoffelClient.GetEntityByRoleId(
      data,
      (err: any, response: Entity) => {
        if (err) {
          logger.error(`getEntityByRoleId ERROR in GTW`, {
            err,
            callRequest: data,
          });
          res.status(500).send(err.message);
        }

        logger.info(`getEntityByRoleId OK in GTW`, {
          response: response,
          callRequest: data,
        });
        res.send(response);
      }
    );
  }

  static async getEntitiesUnderOG(req: Request, res: Response) {
    const data = { ...req.params, ...req.query };

    logger.info(`Call to getEntitiesUnderOG in GTW`, {
      callRequest: data,
    });

    kartoffelClient.GetEntitiesUnderOG(
      data,
      (err: any, response: EntityArray) => {
        if (err) {
          logger.error(`getEntitiesUnderOG ERROR in GTW`, {
            err,
            callRequest: data,
          });
          res.status(500).send(err.message);
        }

        logger.info(`getEntitiesUnderOG OK in GTW`, {
          response: response,
          callRequest: data,
        });
        res.send(response);
      }
    );
  }

  static async getEntitiesByHierarchy(req: Request, res: Response) {
    const data = { ...req.params, ...req.query };

    logger.info(`Call to getEntitiesByHierarchy in GTW`, {
      callRequest: data,
    });

    kartoffelClient.GetEntitiesByHierarchy(
      data,
      (err: any, response: EntityArray) => {
        if (err) {
          logger.error(`getEntitiesByHierarchy ERROR in GTW`, {
            err,
            callRequest: data,
          });
          res.status(500).send(err.message);
        }

        logger.info(`getEntitiesByHierarchy OK in GTW`, {
          response: response,
          callRequest: data,
        });
        res.send(response);
      }
    );
  }

  static async getEntityByDI(req: Request, res: Response) {
    const data = { uniqueId: req.params.uniqueId };

    logger.info(`Call to getEntityByDI in GTW`, {
      callRequest: data,
    });

    kartoffelClient.GetEntityByDI(
      data,
      (err: any, response: EntityArray) => {
        if (err) {
          logger.error(`getEntityByDI ERROR in GTW`, {
            err,
            callRequest: data,
          });
          res.status(500).send(err.message);
        }

        logger.info(`getEntityByDI OK in GTW`, {
          response: response,
          callRequest: data,
        });
        res.send(response);
      }
    );
  }




  //groups

  static async searchOG(req: Request, res: Response) {
    const data = { nameAndHierarchy: req.query.nameAndHierarchy };

    logger.info(`Call to searchOG in GTW`, {
      callRequest: data,
    });

    kartoffelClient.SearchOG(
      data,
      (err: any, response: OGArray) => {
        if (err) {
          logger.error(`searchOG ERROR in GTW`, {
            err,
            callRequest: data,
          });
          res.status(500).send(err.message);
        }

        logger.info(`searchOG OK in GTW`, {
          response: response,
          callRequest: data,
        });
        res.send(response);
      }
    );
  }

  static async getChildrenOfOG(req: Request, res: Response) {
    const data = { ...req.params, ...req.query };

    logger.info(`Call to getChildrenOfOG in GTW`, {
      callRequest: data,
    });

    kartoffelClient.GetChildrenOfOG(
      { id: req.params.id },
      (err: any, response: OGArray) => {
        if (err) {
          logger.error(`getChildrenOfOG ERROR in GTW`, {
            err,
            callRequest: data,
          });
          res.status(500).send(err.message);
        }

        logger.info(`getChildrenOfOG OK in GTW`, {
          response: response,
          callRequest: data,
        });
        res.send(response);
      }
    );
  }

  static async getOGTree(req: Request, res: Response) {
    const data = { rootId: req.params.rootId };

    logger.info(`Call to getOGTree in GTW`, {
      callRequest: data,
    });

    kartoffelClient.GetOGTree(
      data,
      (err: any, response: OGTree) => {
        if (err) {
          logger.error(`getOGTree ERROR in GTW`, {
            err,
            callRequest: data,
          });
          res.status(500).send(err.message);
        }

        logger.info(`getOGTree OK in GTW`, {
          response: response,
          callRequest: data,
        });
        res.send(response);
      }
    );
  }

  static async getAllOGs(req: Request, res: Response) {
    const data = req.query;

    logger.info(`Call to getAllOGs in GTW`, {
      callRequest: data
    });

    kartoffelClient.GetAllOGs(
      data,
      (err: any, response: OGTree) => {
        if (err) {
          logger.error(`getAllOGs ERROR in GTW`, {
            err,
            callRequest: data,
          });
          res.status(500).send(err.message);
        }

        logger.info(`getAllOGs OK in GTW`, {
          response: response,
          callRequest: data,
        });
        res.send(response);
      }
    );
  }

  static async getOGById(req: Request, res: Response) {
    const data = { id: req.params.id };

    logger.info(`Call to getOGById in GTW`, {
      callRequest: data
    });

    kartoffelClient.GetOGById(
      data,
      (err: any, response: OGTree) => {
        if (err) {
          logger.error(`getOGById ERROR in GTW`, {
            err,
            callRequest: data,
          });
          res.status(500).send(err.message);
        }

        logger.info(`getOGById OK in GTW`, {
          response: response,
          callRequest: data,
        });
        res.send(response);
      }
    );
  }

  static async getOGByHierarchyName(req: Request, res: Response) {
    const data = { hierarchy: req.params.hierarchy };

    logger.info(`Call to getOGByHierarchyName in GTW`, {
      callRequest: data
    });

    kartoffelClient.GetOGById(
      data,
      (err: any, response: OGTree) => {
        if (err) {
          logger.error(`getOGByHierarchyName ERROR in GTW`, {
            err,
            callRequest: data,
          });
          res.status(500).send(err.message);
        }

        logger.info(`getOGByHierarchyName OK in GTW`, {
          response: response,
          callRequest: data,
        });
        res.send(response);
      }
    );
  }




  //roles
  static async getRoleByRoleId(req: Request, res: Response) {
    const data = { roleId: req.params.roleId };

    logger.info(`Call to getRoleByRoleId in GTW`, {
      callRequest: data,
    });

    kartoffelClient.GetRoleByRoleId(
      data,
      (err: any, response: Role) => {
        if (err) {
          logger.error(`getRoleByRoleId ERROR in GTW`, {
            err,
            callRequest: data,
          });
          res.status(500).send(err.message);
        }

        logger.info(`getRoleByRoleId OK in GTW`, {
          response: response,
          callRequest: data,
        });
        res.send(response);
      }
    );
  }

  static async getRolesUnderOG(req: Request, res: Response) {
    const data = { ...req.params, ...req.query };

    logger.info(`Call to getRolesUnderOG in GTW`, {
      callRequest: data,
    });

    kartoffelClient.GetRolesUnderOG(
      data,
      (err: any, response: RoleArray) => {
        if (err) {
          logger.error(`getRolesUnderOG ERROR in GTW`, {
            err,
            callRequest: data,
          });
          res.status(500).send(err.message);
        }

        logger.info(`getRolesUnderOG OK in GTW`, {
          response: response,
          callRequest: data,
        });
        res.send(response);
      }
    );
  }

  static async getAllRoles(req: Request, res: Response) {
    const data = req.query;

    logger.info(`Call to getAllRoles in GTW`, {
      callRequest: data,
    });

    kartoffelClient.GetAllRoles(
      data,
      (err: any, response: RoleArray) => {
        if (err) {
          logger.error(`getAllRoles ERROR in GTW`, {
            err,
            callRequest: data,
          });
          res.status(500).send(err.message);
        }

        logger.info(`getAllRoles OK in GTW`, {
          response: response,
          callRequest: data,
        });
        res.send(response);
      }
    );
  }
}
