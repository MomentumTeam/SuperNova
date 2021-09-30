import * as grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import { findPath } from '../utils/path';
import * as config from '../config';
import { logger } from '../logger';
import RequestService from './requestService';
import { SuccessMessage } from '../interfaces/protoc/proto/producerService';

//producerClient

const PS_PROTO_PATH = `${findPath('proto')}/producerService.proto`;

const psPackageDefinition: protoLoader.PackageDefinition = protoLoader.loadSync(
  PS_PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  }
);

const psProtoDescriptor: any =
  grpc.loadPackageDefinition(psPackageDefinition).Producer;

const producerClient: any = new psProtoDescriptor.Producer(
  config.producerServicUrl,
  grpc.credentials.createInsecure()
);

export default class ProducerService {
  static async executeRequest(requestId: string) {
    const canPushToKartoffel = await RequestService.canPushToKartoffelQueue(
      requestId
    );
    const canPushToADQ = await RequestService.canPushToADQueue(requestId);

    if (canPushToKartoffel.canPushToQueue === true) {
      try {
        logger.info(`Call to ProduceToKartoffelQueue in EXS`);
        await ProducerService.produceToKartoffelQueue(requestId);
      } catch (error: any) {
        logger.error(`ProduceToKartoffelQueue ERROR in EXS`, {
          error: { message: error.message },
          callRequest: { id: requestId },
        });
        throw error;
      }
    } else if (canPushToADQ.canPushToQueue === true) {
      try {
        logger.info(`Call to ProduceToADQueue in EXS`);
        await ProducerService.produceToADQueue(requestId);
      } catch (error: any) {
        logger.error(`ProduceToADQueue ERROR in EXS`, {
          error: { message: error.message },
          callRequest: { id: requestId },
        });
        throw error;
      }
    }
  }

  static async produceToKartoffelQueue(requestId: string) {
    return new Promise((resolve, reject) => {
      logger.info(`Call to produceToKartoffelQueue in EXS`, {
        callRequest: { id: requestId },
      });

      producerClient.ProduceToKartoffelQueue(
        { id: requestId },
        (error: any, response: SuccessMessage) => {
          if (error) {
            logger.error(`produceToKartoffelQueue ERROR in EXS`, {
              error: { message: error.message },
              callRequest: { id: requestId },
            });
            reject(error);
          }

          logger.info(`produceToKartoffelQueue OK in EXS`, {
            response: response,
            callRequest: { id: requestId },
          });
          resolve(true);
        }
      );
    });
  }

  static async produceToADQueue(requestId: string) {
    return new Promise((resolve, reject) => {
      logger.info(`Call to produceToADQueue in EXS`, {
        callRequest: { id: requestId },
      });

      producerClient.ProduceToADQueue(
        { id: requestId },
        (error: any, response: SuccessMessage) => {
          if (error) {
            logger.error(`produceToADQueue ERROR in EXS`, {
              error: { message: error.message },
              callRequest: { id: requestId },
            });
            reject(error);
          }

          logger.info(`produceToADQueue OK in EXS`, {
            response: response,
            callRequest: { id: requestId },
          });
          resolve(true);
        }
      );
    });
  }
}
