import path from 'path';
import * as grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import * as C from '../config';
import {
  ChangeRoleHierarchyBulkReq,
  CreateRoleBulkReq,
  CreateRoleReq,
  GetRequestByIdReq,
  Request,
  RequestReq,
  RequestType,
  UpdateReq,
} from '../interfaces/protoc/proto/requestService';
import { findPath } from '../utils/path';
import { logger } from '../logger';

const PROTO_PATH = `${findPath('proto')}/requestService.proto`;

export class RequestService {
  client: any;
  constructor() {
    this.client = this.initClient();
  }

  async updateRequest(req: any): Promise<any> {
    logger.info('updateRequest in RequestService', { req });
    return new Promise((resolve, reject) => {
      this.client.UpdateRequest(req, (error: any, res: any) => {
        if (error) {
          logger.error('updateRequest in RequestService ERROR', {
            error: { message: error.message },
          });
          reject(error);
        } else {
          logger.info('updateRequest in RequestService OK', {
            res,
          });
          res.type = RequestType[res.type];
          resolve(res as Request);
        }
      });
    });
  }

  async deleteRequest(req: any): Promise<Request> {
    logger.info('deleteRequest in RequestService', { req });
    return new Promise((resolve, reject) => {
      this.client.DeleteRequest(req, (error: any, res: any) => {
        if (error) {
          logger.error('deleteRequest in RequestService ERROR', {
            error: { message: error.message },
          });
          reject(error);
        } else {
          logger.info('deleteRequest in RequestService OK', {
            res,
          });
          res.type = RequestType[res.type];
          resolve(res as Request);
        }
      });
    });
  }

  async createRoleRequest(req: CreateRoleReq): Promise<Request> {
    logger.info('createRoleRequest in RequestService', { req });
    return new Promise((resolve, reject) => {
      this.client.CreateRoleRequest(req, (error: any, res: any) => {
        if (error) {
          logger.error('createRoleRequest in RequestService ERROR', {
            error: { message: error.message },
          });
          reject(error);
        } else {
          logger.info('createRoleRequest in RequestService OK', {
            res,
          });
          res.type = RequestType[res.type];
          resolve(res as Request);
        }
      });
    });
  }

  async changeRoleHierarchyRequest(req: CreateRoleReq): Promise<Request> {
    logger.info('changeRoleHierarchyRequest in RequestService', { req });
    return new Promise((resolve, reject) => {
      this.client.ChangeRoleHierarchyRequest(req, (error: any, res: any) => {
        if (error) {
          logger.error('changeRoleHierarchyRequest in RequestService ERROR', {
            error: { message: error.message },
          });
          reject(error);
        } else {
          logger.info('changeRoleHierarchyRequest in RequestService OK', {
            res,
          });
          res.type = RequestType[res.type];
          resolve(res as Request);
        }
      });
    });
  }

  async createRoleBulkRequest(req: CreateRoleBulkReq): Promise<Request> {
    logger.info('createRoleBulkRequest in RequestService', { req });
    return new Promise((resolve, reject) => {
      this.client.CreateRoleBulkRequest(req, (error: any, res: any) => {
        if (error) {
          logger.error('createRoleBulkRequest in RequestService ERROR', {
            error: { message: error.message },
          });
          reject(error);
        } else {
          logger.info('createRoleBulkRequest in RequestService OK', {
            res,
          });
          res.type = RequestType[res.type];
          resolve(res as Request);
        }
      });
    });
  }

  async changeRoleHierarchyBulkRequest(
    req: ChangeRoleHierarchyBulkReq
  ): Promise<Request> {
    logger.info('changeRoleHierarchyBulkRequest in RequestService', { req });
    return new Promise((resolve, reject) => {
      this.client.ChangeRoleHierarchyBulkRequest(
        req,
        (error: any, res: any) => {
          if (error) {
            logger.error(
              'changeRoleHierarchyBulkRequest in RequestService ERROR',
              {
                error: { message: error.message },
              }
            );
            reject(error);
          } else {
            logger.info('changeRoleHierarchyBulkRequest in RequestService OK', {
              res,
            });
            res.type = RequestType[res.type];
            resolve(res as Request);
          }
        }
      );
    });
  }

  private initClient(): any {
    try {
      const packageDefinition: protoLoader.PackageDefinition =
        protoLoader.loadSync(PROTO_PATH, {
          keepCase: true,
          longs: String,
          enums: String,
          // defaults: true,
          oneofs: true,
        });
      const protoDescriptor: any =
        grpc.loadPackageDefinition(packageDefinition).RequestService;

      const client: any = new protoDescriptor.RequestService(
        C.requestServiceUrl,
        grpc.credentials.createInsecure(),
        { 'grpc.keepalive_timeout_ms': 5000 }
      );
      logger.info('Client initialized successfully in RequestService');
      return client;
    } catch (error: any) {
      logger.error('Error while initializing RequestService client', {
        error: { message: error.message },
      });
      throw error;
    }
  }
}
