import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as C from '../config';
import {

  GetDoneRequestsByRoleIdReq,
  GetDoneRequestsByEntityIdReq,
  GetDoneRequestsByGroupIdReq,
  CheckIfCreateWasInLegoReq,
  GetRequestByIdReq,
  Request,
  RequestArray,
  BoolCheck,

  RequestType,

} from '../interfaces/protoc/proto/requestService';
import { findPath } from '../utils/path';
import { logger } from '../logger';
//import { GetDoneRequestsByGroupIdReq } from '../interfaces/protoc/proto/historyService';

const PROTO_PATH = `${findPath('proto')}/requestService.proto`;

export class RequestService {
  static wasCreateBeenInLego(arg0: { idCheck: string; }): BoolCheck | PromiseLike<BoolCheck> {
    throw new Error('Method not implemented.');
  }
  clients: any[];
  constructor() {
    this.clients = [];
    this.initClients();
  }

  randomClient(): any {
    return this.clients[Math.floor(Math.random() * this.clients.length)];
  }


  async getDoneRequestsByRoleId(req: GetDoneRequestsByRoleIdReq): Promise<RequestArray> {
    logger.info('GetDoneRequestsByRoleId in RequestService', { req });
    return new Promise((resolve, reject) => {
      this.randomClient().getDoneRequestsByRoleId(req, (error: any, res: any) => {
        if (error) {
          logger.error('GetDoneRequestsByRoleId in RequestService ERROR', {
            error: { message: error.message },
          });
          reject(error);
        } else {
          logger.info('GetDoneRequestsByRoleId in RequestService OK', {
            res,
          });
          resolve(res as RequestArray);
        }
      });
    });
  }

  //TODO ADD THE OTHER FUNCTIONS
  async getDoneRequestsByOG(req: GetDoneRequestsByGroupIdReq): Promise<RequestArray> {
    logger.info('GetDoneRequestsByGroupIdReq in RequestService', { req });
    return new Promise((resolve, reject) => {
      this.randomClient().getDoneRequestsByGroupId(req, (error: any, res: any) => {
        if (error) {
          logger.error('GetDoneRequestsByGroupIdReq in RequestService ERROR', {
            error: { message: error.message },
          });
          reject(error);
        } else {
          logger.info('GetDoneRequestsByGroupIdReq in RequestService OK', {
            res,
          });
          resolve(res as RequestArray);
        }
      });
    });
  }

  async getEventsByEntityId(req: GetDoneRequestsByEntityIdReq): Promise<RequestArray> {
    logger.info('GetDoneRequestsByEntityIdReq in RequestService', { req });
    return new Promise((resolve, reject) => {
      this.randomClient().getDoneRequestsByEntityId(req, (error: any, res: any) => {
        if (error) {
          logger.error('GetDoneRequestsByEntityIdReq in RequestService ERROR', {
            error: { message: error.message },
          });
          reject(error);
        } else {
          logger.info('GetDoneRequestsByEntityIdReq in RequestService OK', {
            res,
          });
          resolve(res as RequestArray);
        }
      });
    });
  }

  async getEventsBySubmittedEntityId(req: GetDoneRequestsByEntityIdReq): Promise<RequestArray> {
    logger.info('getEventsBySubmittedEntityId in RequestService', { req });
    return new Promise((resolve, reject) => {
      this.randomClient().getDoneRequestsSubmmitedByEntityId(req, (error: any, res: any) => {
        if (error) {
          logger.error('getEventsBySubmittedEntityId in RequestService ERROR', {
            error: { message: error.message },
          });
          reject(error);
        } else {
          logger.info('getEventsBySubmittedEntityId in RequestService OK', {
            res,
          });
          resolve(res as RequestArray);
        }
      });
    });
  }


  async wasCreateBeenInLego(req: CheckIfCreateWasInLegoReq): Promise<BoolCheck> {
    logger.info('wasCreateBeenInLego in RequestService', { req });
    return new Promise((resolve, reject) => {
      this.randomClient().wasCreateBeenInLego(req, (error: any, res: any) => {
        if (error) {
          logger.error('wasCreateBeenInLego in RequestService ERROR', {
            error: { message: error.message },
          });
          reject(error);
        } else {
          logger.info('wasCreateBeenInLego in RequestService OK', {
            res,
          });
          resolve(res as BoolCheck);
        }
      });
    });
  }

//   async getRequestById(req: any): Promise<any> {
//     logger.info('getRequestById in RequestService', { req });
//     return new Promise((resolve, reject) => {
//       this.randomClient().GetRequestById(req, (error: any, res: any) => {
//         if (error) {
//           logger.error('getRequestById in RequestService ERROR', {
//             error: { message: error.message },
//           });
//           reject(error);
//         } else {
//           logger.info('getRequestById in RequestService OK', {
//             res,
//           });
//           res.type = RequestType[res.type];
//           resolve(res as Request);
//         }
//       });
//     });
//   }

//   async sendSubmissionMail(req: any): Promise<any> {
//     logger.info('sendSubmissionMail in RequestService', { req });
//     return new Promise((resolve, reject) => {
//       this.randomClient().SendSubmissionMail(req, (error: any, res: any) => {
//         if (error) {
//           logger.error('sendSubmissionMail in RequestService ERROR', {
//             error: { message: error.message },
//           });
//           reject(error);
//         } else {
//           logger.info('sendSubmissionMail in RequestService OK', {
//             res,
//           });
//           resolve(res as Request);
//         }
//       });
//     });
//   }


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