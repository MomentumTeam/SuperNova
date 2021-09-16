import { kartoffelClient } from './kartoffel.service';
import { Request, Response } from 'express';
import { logger } from '../utils/logger/logger';
import {
  OGArray,
  EntityArray,
  Entity,
  RoleArray,
  Role,
  Image,
  GetEntityByIdRequest,
  GetPictureByEntityIdRequest,
  SearchEntitiesByFullNameRequest,
  GetEntityByIdentifierRequest,
  GetEntityByRoleIdRequest,
  GetEntitiesUnderOGRequest,
} from '../interfaces/protoc/proto/kartoffelService';
import { OGTree } from '../interfaces/protoc/proto/kartoffelService';
import { AuthenticationError } from '../utils/errors/userErrors';

export default class KartoffelController {
  // Entities
  static async getMyUser(req: any, res: Response) {
    if (!req.user && !req.user.id) throw new AuthenticationError();
    const getMyUserReq: GetEntityByIdRequest = { id: req.user.id };

    logger.info(`Call to getMyUser in GTW`, {
        callRequest: getMyUserReq,
    });

    kartoffelClient.GetEntityById(getMyUserReq, (err: any, response: Entity) => {
      if (err) {
        logger.error(`getMyUser ERROR in GTW`, {
            err,
            callRequest: getMyUserReq,
        });
        res.status(500).send(err.message);
      }

      logger.info(`getMyUser OK in GTW`, {
          response: response,
          callRequest: getMyUserReq,
      });
      res.send(response);
    });
  }

  static async getEntityByMongoId(req: Request, res: Response) {
    const getEntityByMongoIdReq: GetEntityByIdRequest = { id: req.params.id };
    logger.info(`Call to getEntityByMongoId in GTW`, {
        callRequest: getEntityByMongoIdReq,
    });

    kartoffelClient.GetEntityById(getEntityByMongoIdReq, (err: any, response: Entity) => {
        if (err) {
            logger.error(`getEntityByMongoId ERROR in GTW`, {
                err,
                callRequest: getEntityByMongoIdReq,
            });
            res.status(500).send(err.message);
        }

        logger.info(`getEntityByMongoId OK in GTW`, {
            response: response,
            callRequest: getEntityByMongoIdReq,
        });
        res.send(response);
    });
  }

  static async getPictureByEntityId(req: any, res: Response) {
    if (!req.user && !req.user.id) throw new AuthenticationError();
    const getPictureByEntityIdReq: GetPictureByEntityIdRequest = { id: req.user.id };

    logger.info(`Call to getPictureByEntityId in GTW`, {
        callRequest: getPictureByEntityIdReq,
    });

    kartoffelClient.GetPictureByEntityId(getPictureByEntityIdReq, (err: any, response: Image) => {
        if (err) {
            logger.error(`getPictureByEntityId ERROR in GTW`, {
                err,
                callRequest: getPictureByEntityIdReq,
            });
            res.status(500).send(err.message);
        }

        logger.info(`getPictureByEntityId OK in GTW`, {
            response: response,
            callRequest: getPictureByEntityIdReq,
        });
        res.send(response);
    });
  }

  static async searchEntitiesByFullName(req: Request, res: Response) {
    const searchEntitiesByFullNameReq = req.query;

    logger.info(`Call to searchEntitiesByFullName in GTW`, {
        callRequest: searchEntitiesByFullNameReq,
    });

    kartoffelClient.SearchEntitiesByFullName(searchEntitiesByFullNameReq, (err: any, response: EntityArray) => {
        if (err) {
            logger.error(`searchEntitiesByFullName ERROR in GTW`, {
                err,
                callRequest: searchEntitiesByFullNameReq,
            });
            res.status(500).send(err.message);
        }

        logger.info(`searchEntitiesByFullName OK in GTW`, {
            response: response,
            callRequest: searchEntitiesByFullNameReq,
        });
        res.send(response);
    });
  }

  static async getEntityByIdentifier(req: Request, res: Response) {
    const getEntityByIdentifierReq: GetEntityByIdentifierRequest = { identifier: req.params.identifier };
    logger.info(`Call to getEntityByIdentifier in GTW`, {
        callRequest: getEntityByIdentifierReq,
    });

    kartoffelClient.GetEntityByIdentifier(getEntityByIdentifierReq, (err: any, response: Entity) => {
        if (err) {
            logger.error(`getEntityByIdentifier ERROR in GTW`, {
                err,
                callRequest: getEntityByIdentifierReq,
            });
            res.status(500).send(err.message);
        }

        logger.info(`getEntityByIdentifier OK in GTW`, {
            response: response,
            callRequest: getEntityByIdentifierReq,
        });
        res.send(response);
    });
  }

  static async getEntityByRoleId(req: Request, res: Response) {
    const getEntityByRoleIdReq: GetEntityByRoleIdRequest = { roleId: req.params.roleId };

    logger.info(`Call to getEntityByRoleId in GTW`, {
        callRequest: getEntityByRoleIdReq,
    });

    kartoffelClient.GetEntityByRoleId(getEntityByRoleIdReq, (err: any, response: Entity) => {
        if (err) {
            logger.error(`getEntityByRoleId ERROR in GTW`, {
                err,
                callRequest: getEntityByRoleIdReq,
            });
            res.status(500).send(err.message);
        }

        logger.info(`getEntityByRoleId OK in GTW`, {
            response: response,
            callRequest: getEntityByRoleIdReq,
        });
        res.send(response);
    });
  }

  static async getEntitiesUnderOG(req: Request, res: Response) {
    const getEntitiesUnderOGReq = { ...req.params, ...req.query };

    logger.info(`Call to getEntitiesUnderOG in GTW`, {
        callRequest: getEntitiesUnderOGReq,
    });

    kartoffelClient.GetEntitiesUnderOG(getEntitiesUnderOGReq, (err: any, response: EntityArray) => {
        if (err) {
            logger.error(`getEntitiesUnderOG ERROR in GTW`, {
                err,
                callRequest: getEntitiesUnderOGReq,
            });
            res.status(500).send(err.message);
        }

        logger.info(`getEntitiesUnderOG OK in GTW`, {
            response: response,
            callRequest: getEntitiesUnderOGReq,
        });
        res.send(response);
    });
  }

  static async getEntitiesByHierarchy(req: Request, res: Response) {
    const getEntitiesByHierarchyReq = { ...req.params, ...req.query };

    logger.info(`Call to getEntitiesByHierarchy in GTW`, {
        callRequest: getEntitiesByHierarchyReq,
    });

    kartoffelClient.GetEntitiesByHierarchy(getEntitiesByHierarchyReq, (err: any, response: EntityArray) => {
        if (err) {
            logger.error(`getEntitiesByHierarchy ERROR in GTW`, {
                err,
                callRequest: getEntitiesByHierarchyReq,
            });
            res.status(500).send(err.message);
        }

        logger.info(`getEntitiesByHierarchy OK in GTW`, {
            response: response,
            callRequest: getEntitiesByHierarchyReq,
        });
        res.send(response);
    });
  }

  static async getEntityByDI(req: Request, res: Response) {
    const data = { uniqueId: req.params.uniqueId };

    logger.info(`Call to getEntityByDI in GTW`, {
      callRequest: data,
    });

    kartoffelClient.GetEntityByDI(data, (err: any, response: EntityArray) => {
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
    });
  }

  //groups

  static async searchOG(req: Request, res: Response) {
    const data = { nameAndHierarchy: req.query.nameAndHierarchy };

    logger.info(`Call to searchOG in GTW`, {
      callRequest: data,
    });

    kartoffelClient.SearchOG(data, (err: any, response: OGArray) => {
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
    });
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

    kartoffelClient.GetOGTree(data, (err: any, response: OGTree) => {
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
    });
  }

  static async getAllOGs(req: Request, res: Response) {
    const data = req.query;

    logger.info(`Call to getAllOGs in GTW`, {
      callRequest: data,
    });

    kartoffelClient.GetAllOGs(data, (err: any, response: OGTree) => {
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
    });
  }

  static async getOGById(req: Request, res: Response) {
    const data = { id: req.params.id };

    logger.info(`Call to getOGById in GTW`, {
      callRequest: data,
    });

    kartoffelClient.GetOGById(data, (err: any, response: OGTree) => {
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
    });
  }

  static async getOGByHierarchyName(req: Request, res: Response) {
    const data = { hierarchy: req.params.hierarchy };

    logger.info(`Call to getOGByHierarchyName in GTW`, {
      callRequest: data,
    });

    kartoffelClient.GetOGById(data, (err: any, response: OGTree) => {
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
    });
  }

  //roles
  static async getRoleByRoleId(req: Request, res: Response) {
    const data = { roleId: req.params.roleId };

    logger.info(`Call to getRoleByRoleId in GTW`, {
      callRequest: data,
    });

    kartoffelClient.GetRoleByRoleId(data, (err: any, response: Role) => {
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
    });
  }

  static async getRolesUnderOG(req: Request, res: Response) {
    const data = { ...req.params, ...req.query };

    logger.info(`Call to getRolesUnderOG in GTW`, {
      callRequest: data,
    });

    kartoffelClient.GetRolesUnderOG(data, (err: any, response: RoleArray) => {
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
    });
  }

  static async getAllRoles(req: Request, res: Response) {
    const data = req.query;

    logger.info(`Call to getAllRoles in GTW`, {
      callRequest: data,
    });

    kartoffelClient.GetAllRoles(data, (err: any, response: RoleArray) => {
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
    });
  }
}
