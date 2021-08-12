import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { findPath } from '../utils/path';
import * as config from '../config';
import { logger } from '../logger';
import RequestService from './requestService';

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
  config.producerUrl,
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
        await producerClient.ProduceToKartoffelQueue({ id: requestId });
      } catch (error) {
        logger.error(`ProduceToKartoffelQueue ERROR in EXS`, {
          error,
          callRequest: { id: requestId },
        });
      }
    } else if (canPushToADQ.canPushToQueue === true) {
      try {
        logger.info(`Call to ProduceToADQueue in EXS`);
        await producerClient.ProduceToADQueue({ id: requestId });
      } catch (error) {
        logger.error(`ProduceToADQueue ERROR in EXS`, {
          error,
          callRequest: { id: requestId },
        });
      }
    }
  }
}
