import { Request, Response } from 'express';
import * as grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import * as config from '../config';
import { logger } from '../logger';
import { SuccessMessage } from '../interfaces/protoc/proto/producerService';

const PROTO_PATH = __dirname.includes('dist')
  ? path.join(__dirname, '../../../proto/producerService.proto')
  : path.join(__dirname, '../../proto/producerService.proto');

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
  grpc.loadPackageDefinition(packageDefinition).Producer;

const producerClient: any = new protoDescriptor.Producer(
  config.producerUrl,
  grpc.credentials.createInsecure()
);

export default class ProducerController {
  static async produceToKartoffelQueue(requestId: string) {
    logger.info(`Call to produceToKartoffelQueue in GTW`, {
      callRequest: { id: requestId },
    });

    return new Promise((resolve, reject) => {
      producerClient.ProduceToKartoffelQueue(
        { id: requestId },
        (err: any, response: SuccessMessage) => {
          if (err) {
            logger.error(`produceToKartoffelQueue ERROR in GTW`, {
              err,
              callRequest: { id: requestId },
            });
            resolve(err);
          }

          logger.info(`produceToKartoffelQueue OK in GTW`, {
            response: response,
            callRequest: { id: requestId },
          });
          resolve(response);
        }
      );
    });
  }

  static async produceToADQueue(requestId: string) {
    logger.info(`Call to produceToADQueue in GTW`, {
      callRequest: { id: requestId },
    });

    producerClient.ProduceToADQueue(
      { id: requestId },
      (err: any, response: SuccessMessage) => {
        if (err) {
          logger.error(`produceToADQueue ERROR in GTW`, {
            err,
            callRequest: { id: requestId },
          });
          // return null;
        }

        logger.info(`produceToADQueue OK in GTW`, {
          response: response,
          callRequest: { id: requestId },
        });
        // return response;
      }
    );
  }
}
