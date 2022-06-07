import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { config } from '../config';
import {
  GetDoneRequestsByEntityIdReq,
  GetDoneRequestsByGroupIdReq,
  GetDoneRequestsByRoleIdReq,
  EventArray,
  Event,
} from '../interfaces/protoc/proto/historyService';
import { logger } from '../utils/logger/logger';
import {
  ApproverType,
  Request,
} from '../interfaces/protoc/proto/requestService';
import {
  DigitalIdentity,
  Entity,
  EntityArray,
} from '../interfaces/protoc/proto/kartoffelService';
import { resolve } from 'path/posix';

const PROTO_PATH = __dirname.includes('dist')
  ? path.join(__dirname, '../../../proto/historyService.proto')
  : path.join(__dirname, '../../proto/historyService.proto');

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
  grpc.loadPackageDefinition(packageDefinition).HistoryService;

const historyClients: any = [];
for (let i = 0; i < config.fields.grpcPoolSize; i++) {
  historyClients.push(
    new protoDescriptor.HistoryService(
      config.endpoints.history,
      grpc.credentials.createInsecure(),
      { 'grpc.keepalive_timeout_ms': 5000 }
    )
  );
}

function randomClient(): any {
  return historyClients[Math.floor(Math.random() * historyClients.length)];
}

export class HistoryService {
  static async getEventsByRoleId(
    getDoneRequestsByRoleIdReq: GetDoneRequestsByRoleIdReq
  ): Promise<EventArray> {
    logger.info(
      `Call to getEventsByRoleId in GTW`,
      getDoneRequestsByRoleIdReq
    );

    return new Promise((resolve, reject) => {
      randomClient().getEventsByRoleId(
        getDoneRequestsByRoleIdReq,
        (err: any, response: EventArray) => {
          if (err) {
            logger.error(`getEventsByRoleId ERROR in GTW`, {
              err,
              callRequest: getDoneRequestsByRoleIdReq,
            });
            reject(err);
          }

          logger.info(`getEventsByRoleId OK in GTW`, {
            callRequest: getDoneRequestsByRoleIdReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async getEventsByGroupId(
    getDoneRequestsByOGIdReq: GetDoneRequestsByGroupIdReq
  ) {
    logger.info(
      `Call to getEventsByGroupId in GTW`,
      getDoneRequestsByOGIdReq
    );

    return new Promise((resolve, reject) => {
      randomClient().getEventsByGroupId(
        getDoneRequestsByOGIdReq,
        (err: any, response: EventArray) => {
          if (err) {
            logger.error(`getEventsByGroupId ERROR in GTW`, {
              err,
              callRequest: getDoneRequestsByOGIdReq,
            });
            reject(err);
          }

          logger.info(`getEventsByGroupId OK in GTW`, {
            callRequest: getDoneRequestsByOGIdReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async getEventsByEntityId(
      getDoneRequestsByEntityIdReq: GetDoneRequestsByEntityIdReq
      ) {
    logger.info(`Call to getEventsByEntityId in GTW`, getDoneRequestsByEntityIdReq);

    return new Promise((resolve, reject) => {
      randomClient().getEventsByEntityId(
        getDoneRequestsByEntityIdReq,
        (err: any, response: EventArray) => {
          if (err) {
            logger.error(`getEventsByEntityId ERROR in GTW`, {
              err,
              callRequest: getDoneRequestsByEntityIdReq,
            });
            reject(err);
          }

          logger.info(`getEventsByEntityId OK in GTW`, {
            callRequest: getDoneRequestsByEntityIdReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async getEventsSubmmitedByEntityId(
    getDoneRequestsByEntityIdReq: GetDoneRequestsByEntityIdReq
  ) {
    logger.info(
      `Call to getEventsSubmmitedByEntityId in GTW`,
      getDoneRequestsByEntityIdReq
    );

    return new Promise((resolve, reject) => {
      randomClient().getEventsSubmmitedByEntityId(
        getDoneRequestsByEntityIdReq,
        (err: any, response: EventArray) => {
          if (err) {
            logger.error(`getEventsSubmmitedByEntityId ERROR in GTW`, {
              err,
              callRequest: getDoneRequestsByEntityIdReq,
            });
            reject(err);
          }

          logger.info(`getEventsSubmmitedByEntityId OK in GTW`, {
            callRequest: getDoneRequestsByEntityIdReq,
          });
          resolve(response);
        }
      );
    });
  }

  

}
