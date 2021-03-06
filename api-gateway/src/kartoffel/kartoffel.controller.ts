import { KartoffelService } from './kartoffel.service';
import { Request, Response } from 'express';
import { logger } from '../utils/logger/logger';
import {
  GetEntityByIdRequest,
  GetEntityByIdentifierRequest,
  GetEntityByRoleIdRequest,
  GetEntityByDIRequest,
  GetOGTreeRequest,
  GetOGByIdRequest,
  GetRoleByRoleIdRequest,
  IsRoleAlreadyTakenReq,
  GetPictureByEntityIdentifierRequest,
} from '../interfaces/protoc/proto/kartoffelService';
import { AuthenticationError } from '../utils/errors/userErrors';
import { statusCodeHandler } from '../utils/errors/errorHandlers';
import { timeout } from '../utils/timeout';
import { config } from '../config';

export default class KartoffelController {
  // Entities
  static async getMyUser(req: any, res: Response) {
    if (!req.user && !req.user.id) throw new AuthenticationError();
    const getMyUserReq: GetEntityByIdRequest = { id: req.user.id };

    logger.info(`Call to getMyUser in GTW`, {
      callRequest: getMyUserReq,
    });

    try {
      const entity = await KartoffelService.getEntityById({
        id: getMyUserReq.id,
        withPicture: true,
      });
      res.send(entity);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async getEntityByMongoId(req: Request, res: Response) {
    const getEntityByMongoIdReq: GetEntityByIdRequest = { id: req.params.id };
    logger.info(`Call to getEntityByMongoId in GTW`, {
      callRequest: getEntityByMongoIdReq,
    });

    try {
      const entity = await KartoffelService.getEntityById(
        getEntityByMongoIdReq
      );
      res.send(entity);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async getMyPicture(req: any, res: Response) {
    if (!req.user && (!req.user.personalNumber || !req.user.identityCard))
      throw new AuthenticationError();
    const getPictureByEntityIdentifierReq: GetPictureByEntityIdentifierRequest =
      {
        identifier: req.user.personalNumber || req.user.identityCard,
      };

    try {
      const userImage = await KartoffelService.getPictureByEntityIdentifier(
        getPictureByEntityIdentifierReq
      );
      res.send(userImage);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async getPictureByEntityIdentifier(req: any, res: Response) {
    try {
      const userImage = await KartoffelService.getPictureByEntityIdentifier({
        identifier: req.params.identifier,
      });
      res.send(userImage);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async searchEntitiesByFullName(req: Request, res: Response) {
    const searchEntitiesByFullNameReq: any = req.query;

    try {
      const entities = await KartoffelService.searchEntitiesByFullName(
        searchEntitiesByFullNameReq
      );
      res.send(entities);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async getEntityByIdentifier(req: Request, res: Response) {
    const getEntityByIdentifierReq: GetEntityByIdentifierRequest = {
      identifier: req.params.identifier,
    };

    try {
      const entity = await KartoffelService.getEntityByIdentifier(
        getEntityByIdentifierReq
      );
      res.send(entity);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async getEntityByRoleId(req: Request, res: Response) {
    const getEntityByRoleIdReq: GetEntityByRoleIdRequest = {
      roleId: req.params.roleId,
    };

    try {
      const entity = await KartoffelService.getEntityByRoleId(
        getEntityByRoleIdReq
      );
      res.send(entity);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async getEntitiesUnderOG(req: Request, res: Response) {
    const getEntitiesUnderOGReq: any = { ...req.params, ...req.query };

    try {
      const entities = await KartoffelService.getEntitiesUnderOG(
        getEntitiesUnderOGReq
      );
      res.send(entities);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async getEntitiesByHierarchy(req: Request, res: Response) {
    const getEntitiesByHierarchyReq: any = { ...req.params, ...req.query };

    try {
      const entities = await KartoffelService.getEntitiesByHierarchy(
        getEntitiesByHierarchyReq
      );
      res.send(entities);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async getEntityByDI(req: Request, res: Response) {
    const getEntityByDI: GetEntityByDIRequest = {
      uniqueId: req.params.uniqueId,
    };

    try {
      const entity = await KartoffelService.getEntityByDI(getEntityByDI);
      res.send(entity);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  // Groups

  static async getMyOG(req: any, res: Response) {
    const getOGByIdReq: GetOGByIdRequest = { id: req.user.directGroup };
    try {
      const organizationGroup = await KartoffelService.getOGById(getOGByIdReq);
      res.send(organizationGroup);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async searchOG(req: Request, res: Response) {
    const searchOGReq: any = { ...req.query, ...req.params };

    try {
      const OGarray = await KartoffelService.searchOG(searchOGReq);
      res.send(OGarray);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async isOGNameAlreadyTaken(req: Request, res: Response) {
    const isOGNameAlreadyTakenReq: any = {
      name: req.query.name,
      parent: req.query.parent,
    };

    try {
      const response = await KartoffelService.isOGNameAlreadyTaken(
        isOGNameAlreadyTakenReq
      );
      res.send(response);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async getOGRootChildren(req: Request, res: Response) {
    const getOGRootChildrenReq: any = { ...req.params, ...req.query };

    try {
      const children = await KartoffelService.getOGRootChildren(
        getOGRootChildrenReq
      );
      res.send(children);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async getOGChildren(req: Request, res: Response) {
    const getOGChildrenReq: any = { ...req.params, ...req.query };

    try {
      const children = await KartoffelService.getOGChildren(getOGChildrenReq);
      res.send(children);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async getOGTree(req: Request, res: Response) {
    const getOGTreeReq: GetOGTreeRequest = { directGroupId: req.params.id };

    try {
      const tree = await KartoffelService.getOGTree(getOGTreeReq);
      res.send(tree);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async getAllOGs(req: Request, res: Response) {
    const getAllOGsReq: any = req.query;

    try {
      const OGarray = await KartoffelService.getAllOGs(getAllOGsReq);
      res.send(OGarray);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async getOGById(req: Request, res: Response) {
    const getOGByIdReq: GetOGByIdRequest = { id: req.params.id };

    try {
      const og = await KartoffelService.getOGById(getOGByIdReq);
      res.send(og);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async getOGByHierarchyName(req: Request, res: Response) {
    const getOGByHierarchyNameReq: any = {
      hierarchy: req.query.hierarchy,
      withRoles: req.query.withRoles,
    };

    try {
      const og = await KartoffelService.getOGByHierarchyName(
        getOGByHierarchyNameReq
      );
      res.send(og);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  // Roles
  static async getRoleById(req: Request, res: Response) {
    const getRoleByIdReq: GetRoleByRoleIdRequest = {
      roleId: req.params.roleId,
    };

    try {
      const role = await KartoffelService.getRoleById(getRoleByIdReq);
      res.send(role);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async getRolesUnderOG(req: Request, res: Response) {
    const getRolesUnderOGReq: any = { ...req.params, ...req.query };
    getRolesUnderOGReq['groupId'] = getRolesUnderOGReq.id;

    try {
      const roles = await KartoffelService.getRolesUnderOG(getRolesUnderOGReq);
      res.send(roles);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async getRolesByHierarchy(req: Request, res: Response) {
    const getRolesByHierarchyReq: any = { ...req.params, ...req.query };

    try {
      const roles = await KartoffelService.getRolesByHierarchy(
        getRolesByHierarchyReq
      );
      res.send(roles);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }
  static async getAllRoles(req: Request, res: Response) {
    const getAllRolesReq: any = req.query;

    try {
      const roles = await KartoffelService.getAllRoles(getAllRolesReq);
      res.send(roles);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async isRoleAlreadyTaken(req: Request, res: Response) {
    const isRoleAlreadyTakenReq: IsRoleAlreadyTakenReq = {
      roleId: req.params.roleId,
    };

    try {
      const response = await KartoffelService.isRoleAlreadyTaken(
        isRoleAlreadyTakenReq
      );
      res.send(response);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async isJobTitleAlreadyTaken(req: Request, res: Response) {
    const isJobTitleAlreadyTakenReq: any = {
      jobTitle: req.query.jobTitle,
      directGroup: req.query.directGroup,
    };

    try {
      const response = await KartoffelService.isJobTitleAlreadyTaken(
        isJobTitleAlreadyTakenReq
      );
      res.send(response);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async searchRolesByRoleId(req: Request, res: Response) {
    const searchRolesByRoleId: any = { ...req.query, ...req.params };

    try {
      const roles = await KartoffelService.searchRolesByRoleId(
        searchRolesByRoleId
      );
      res.send(roles);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  // DI
  static async searchDIsByUniqueId(req: Request, res: Response) {
    const searchDIsByUniqueId: any = { ...req.query, ...req.params };

    try {
      const dis = await KartoffelService.searchDIsByUniqueId(
        searchDIsByUniqueId
      );
      res.send(dis);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async getDIByUniqueId(req: Request, res: Response) {
    const getDIByUniqueId: any = { ...req.query, ...req.params };

    try {
      const dis = await KartoffelService.getDIByUniqueId(getDIByUniqueId);
      res.send(dis);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async getIsHealthy(req: Request, res: Response) {
    try {
      const isHealthy = config.server.healthCheckAllowed
        ? await timeout(KartoffelService.getIsHealthy({}), config.server.healthCheckTimeout)
        : await KartoffelService.getIsHealthy({});
      res.send(isHealthy);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }
}
