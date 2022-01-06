import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { findPath } from '../utils/path';
import { config } from '../config';
import { logger } from '../utils/logger/logger';
import { RequestsService } from '../requests/requests.service';
import { SuccessMessage } from '../interfaces/protoc/proto/producerService';

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

const clients: any = [];
for (let i = 0; i < config.fields.grpcPoolSize; i++) {
  clients.push(
    new psProtoDescriptor.Producer(
      config.endpoints.producer,
      grpc.credentials.createInsecure(),
      { 'grpc.keepalive_timeout_ms': 5000 }
    )
  );
}

function randomClient(): any {
  return clients[Math.floor(Math.random() * clients.length)];
}

export default class ProducerService {
  static async executeRequest(requestId: string) {
    const canPushToKartoffel = await RequestsService.canPushToKartoffelQueue({
      id: requestId,
    });
    const canPushToAD = await RequestsService.canPushToADQueue({
      id: requestId,
    });

    if (canPushToKartoffel.canPushToQueue === true) {
      try {
        logger.info(`Call to ProduceToKartoffelQueue in ProducerService`);
        await ProducerService.produceToKartoffelQueue(requestId);
      } catch (error: any) {
        logger.error(`ProduceToKartoffelQueue ERROR in ProducerService`, {
          error: { message: error.message },
          callRequest: { id: requestId },
        });
        throw error;
      }
    } else if (canPushToAD.canPushToQueue === true) {
      try {
        logger.info(`Call to ProduceToADQueue in ProducerService`);
        await ProducerService.produceToADQueue(requestId);
      } catch (error: any) {
        logger.error(`ProduceToADQueue ERROR in ProducerService`, {
          error: { message: error.message },
          callRequest: { id: requestId },
        });
        throw error;
      }
    }
  }

  static async produceToKartoffelQueue(requestId: string) {
    return new Promise((resolve, reject) => {
      logger.info(`Call to produceToKartoffelQueue in ProducerService`, {
        callRequest: { id: requestId },
      });

      randomClient().ProduceToKartoffelQueue(
        { id: requestId },
        (error: any, response: SuccessMessage) => {
          if (error) {
            logger.error(`produceToKartoffelQueue ERROR in ProducerService`, {
              error: { message: error.message },
              callRequest: { id: requestId },
            });
            reject(error);
          }

          logger.info(`produceToKartoffelQueue OK in ProducerService`, {
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
      logger.info(`Call to produceToADQueue in ProducerService`, {
        callRequest: { id: requestId },
      });

      randomClient().ProduceToADQueue(
        { id: requestId },
        (error: any, response: SuccessMessage) => {
          if (error) {
            logger.error(`produceToADQueue ERROR in ProducerService`, {
              error: { message: error.message },
              callRequest: { id: requestId },
            });
            reject(error);
          }

          logger.info(`produceToADQueue OK in ProducerService`, {
            response: response,
            callRequest: { id: requestId },
          });
          resolve(true);
        }
      );
    });
  }
}
