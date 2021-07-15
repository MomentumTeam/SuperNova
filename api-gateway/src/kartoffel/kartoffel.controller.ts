import { Request, Response } from 'express';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import * as config from '../config';
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
  static async getPictureByEntityId(req: Request, res: Response) {
    console.log('getRoleByRoleId');

    kartoffelClient.GetPictureByEntityId(
      { id: req.query.id },
      (err: any, response: Image) => {
        if (err) {
          res.send(null);
        }
        res.send(response);
      }
    );
  }

  static async getRoleByRoleId(req: Request, res: Response) {
    console.log('getRoleByRoleId');

    kartoffelClient.GetRoleByRoleId(
      { roleId: req.query.roleId },
      (err: any, response: Role) => {
        if (err) {
          res.send(null);
        }
        res.send(response);
      }
    );
  }

  static async getOGTree(req: Request, res: Response) {
    console.log('getOGTree');

    kartoffelClient.GetOGTree(
      { rootId: req.query.rootId },
      (err: any, response: OGTree) => {
        if (err) {
          res.send(null);
        }
        res.send(response);
      }
    );
  }

  static async searchOG(req: Request, res: Response) {
    console.log('SearchOG');

    kartoffelClient.SearchOG(
      { hierarchyAndName: req.query.hierarchyAndName },
      (err: any, response: OGArray) => {
        if (err) {
          res.send(null);
        }
        res.send(response);
      }
    );
  }

  static async searchEntitiesByFullName(req: Request, res: Response) {
    console.log('SearchEntitiesByFullName');

    kartoffelClient.SearchEntitiesByFullName(
      { fullName: req.query.fullName },
      (err: any, response: EntityArray) => {
        if (err) {
          res.send(null);
        }
        res.send(response);
      }
    );
  }

  static async getEntityByIdNumber(req: Request, res: Response) {
    console.log('GetEntityByIdNumber');

    kartoffelClient.GetEntityByIdNumber(
      { idNumber: req.params.idNumber },
      (err: any, response: Entity) => {
        if (err) {
          res.send(null);
        }
        res.send(response);
      }
    );
  }

  static async searchRolesByRoleId(req: Request, res: Response) {
    console.log('SearchRolesByRoleId');

    kartoffelClient.SearchRolesByRoleId(
      { roleId: req.params.roleId },
      (err: any, response: Role) => {
        if (err) {
          res.send(null);
        }
        res.send(response);
      }
    );
  }

  static async getRolesUnderOG(req: Request, res: Response) {
    console.log('GetRolesUnderOG');

    kartoffelClient.GetRolesUnderOG(
      { id: req.params.id, direct: req.query.direct },
      (err: any, response: RoleArray) => {
        if (err) {
          res.send(null);
        }
        res.send(response);
      }
    );
  }

  static async getEntityByRoleId(req: Request, res: Response) {
    console.log('GetEntityByRoleId');

    kartoffelClient.GetEntityByRoleId(
      { roleId: req.params.roleId },
      (err: any, response: Entity) => {
        if (err) {
          res.send(null);
        }
        res.send(response);
      }
    );
  }

  static async getMyUser(req: any, res: Response) {
    console.log('getMyUser');
    kartoffelClient.GetEntityByMongoId(
      { id: req.user.id },
      (err: any, response: Entity) => {
        if (err) {
          res.send(null);
        }
        res.send(response);
      }
    );
  }

  static async getEntityByMongoId(req: Request, res: Response) {
    console.log('GetEntityByMongoId');
    console.log('req.params', req.params);

    kartoffelClient.GetEntityByMongoId(
      { id: req.params.id },
      (err: any, response: Entity) => {
        if (err) {
          res.send(null);
        }
        console.log('response', response);
        res.send(response);
      }
    );
  }

  static async getChildrenOfOG(req: Request, res: Response) {
    console.log('GetChildrenOfOG');

    kartoffelClient.GetChildrenOfOG(
      { id: req.params.id },
      (err: any, response: OGArray) => {
        if (err) {
          res.send(null);
        }
        res.send(response);
      }
    );
  }

  static async getEntitiesUnderOG(req: Request, res: Response) {
    console.log('GetEntitiesUnderOG');

    kartoffelClient.GetEntitiesUnderOG(
      { id: req.params.id, direct: req.query.direct },
      (err: any, response: EntityArray) => {
        if (err) {
          res.send(null);
        }
        res.send(response);
      }
    );
  }
}
