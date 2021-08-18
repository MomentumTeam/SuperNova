import * as grpc from 'grpc';
import { Image } from '../interfaces/protoc/proto/kartoffelService';
import { logger } from '../logger';
import { KartoffelFaker } from '../mock/kartoffel.faker';
import { KartoffelUtils } from '../utils/kartoffel.utils';
import { EntitiesManager } from './entities.manager';

const kartoffelFaker: KartoffelFaker = new KartoffelFaker();
const kartoffelUtils: KartoffelUtils = new KartoffelUtils();

const entitiesManager: EntitiesManager = new EntitiesManager(
  kartoffelUtils,
  kartoffelFaker
);

export async function getPictureByEntityId(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to getPictureByEntityId`, { callRequest: call.request });
    const image: Image = await entitiesManager.getPictureByEntityId(
      call.request
    );
    logger.info(`getPictureByEntityId OK`, {
      callRequest: call.request,
      response: image,
    });
    callback(null, image);
  } catch (error) {
    logger.error(`getPictureByEntityId ERROR`, {
      callRequest: call.request,
      error: error.message,
    });
    callback(
      {
        code: 400,
        message: error.message,
        status: grpc.status.CANCELLED,
      },
      null
    );
  }
}
