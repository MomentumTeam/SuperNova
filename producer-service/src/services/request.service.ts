import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as C from '../config';
import {
  GetRequestByIdReq,
  Request,
  requestTypeFromJSON,
  UpdateADStatusReq,
  UpdateKartoffelStatusReq,
} from '../interfaces/protoc/proto/requestService';
import { findPath } from '../utils/path';
import { logger } from '../logger';

const PROTO_PATH = `${findPath('proto')}/requestService.proto`;

export class RequestService {
  clients: any[];
  constructor() {
    this.clients = [];
    this.initClients();
  }

  randomClient(): any {
    return this.clients[Math.floor(Math.random() * this.clients.length)];
  }

  async getRequestById(req: GetRequestByIdReq): Promise<Request> {
    logger.info('getRequestById in RequestService', { req });
    return new Promise((resolve, reject) => {
      this.randomClient().GetRequestById(req, (error: any, res: any) => {
        if (error) {
          logger.error('getRequestById in RequestService ERROR', {
            error: { message: error.message },
          });
          reject(error);
        } else {
          logger.info('getRequestById in RequestService OK', {
            'req.id': req.id,
          });
          res.type = requestTypeFromJSON(res.type);
          resolve(res as Request);
        }
      });
    });
  }

  async updateKartoffelStatus(req: UpdateKartoffelStatusReq): Promise<Request> {
    logger.info('updateKartoffelStatus in RequestService', { req });
    return new Promise((resolve, reject) => {
      this.randomClient().UpdateKartoffelStatus(req, (error: any, res: any) => {
        if (error) {
          logger.error('updateKartoffelStatus in RequestService ERROR', {
            error: { message: error.message },
          });
          reject(error);
        } else {
          logger.info('updateKartoffelStatus in RequestService OK', {
            'req.requestId': req.requestId,
          });
          res.type = requestTypeFromJSON(res.type);
          resolve(res as Request);
        }
      });
    });
  }

  async updateADStatus(req: UpdateADStatusReq): Promise<Request> {
    logger.info('updateADStatus in RequestService', { req });
    return new Promise((resolve, reject) => {
      this.randomClient().UpdateADStatus(req, (error: any, res: any) => {
        if (error) {
          logger.error('updateADStatus in RequestService ERROR', {
            error: { message: error.message },
          });
          reject(error);
        } else {
          logger.info('updateADStatus in RequestService OK', {
            'req.requestId': req.requestId,
          });
          res.type = requestTypeFromJSON(res.type);
          resolve(res as Request);
        }
      });
    });
  }

  private initClients() {
    try {
      this.clients = [];
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

      for (let i = 0; i < C.grpcPoolSize; i++) {
        this.clients.push(
          new protoDescriptor.RequestService(
            C.requestServiceUrl,
            grpc.credentials.createInsecure(),
            { 'grpc.keepalive_timeout_ms': 5000 }
          )
        );
      }
      logger.info('Clients initialized successfully in RequestService');
    } catch (error: any) {
      logger.error('Error while initializing RequestService client', {
        error: { message: error.message },
      });
      throw error;
    }
  }
}
