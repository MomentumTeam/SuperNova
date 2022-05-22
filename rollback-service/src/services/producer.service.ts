import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as config from '../config';
import {
  ProduceRequest,
  SuccessMessage,
} from '../interfaces/protoc/proto/producerService';
import { logger } from '../logger';
import { findPath } from '../utils/path';

const PROTO_PATH = `${findPath('proto')}/producerService.proto`;

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
  grpc.loadPackageDefinition(packageDefinition).ProucerService;

const clients: any = [];
for (let i = 0; i < config.grpcPoolSize; i++) {
  clients.push(
    new protoDescriptor.ProducerService(
      config.producerServiceUrl,
      grpc.credentials.createInsecure(),
      { 'grpc.keepalive_timeout_ms': 5000 }
    )
  );
}

function randomClient(): any {
  return clients[Math.floor(Math.random() * clients.length)];
}

export default class ProducerService {
  static async produceToKartoffelQueue(
    produceRequest: ProduceRequest
  ): Promise<SuccessMessage> {
    return new Promise((resolve, reject) => {
      randomClient().produceToKartoffelQueue(
        produceRequest,
        (error: any, successMessage: SuccessMessage) => {
          if (error) {
            logger.info('produceToKartoffelQueue in ProducerService ERROR', {
              produceRequest,
              error: { message: error.message },
            });
            reject(error);
          }
          logger.info('produceToKartoffelQueue in ProducerService', {
            produceRequest,
          });
          resolve(successMessage);
        }
      );
    });
  }
  static async produceToADQueue(
    produceRequest: ProduceRequest
  ): Promise<SuccessMessage> {
    return new Promise((resolve, reject) => {
      randomClient().produceToADQueue(
        produceRequest,
        (error: any, successMessage: SuccessMessage) => {
          if (error) {
            logger.info('produceToADQueue in ProducerService ERROR', {
              produceRequest,
              error: { message: error.message },
            });
            reject(error);
          }
          logger.info('produceToADQueue in ProducerService', {
            produceRequest,
          });
          resolve(successMessage);
        }
      );
    });
  }
}
