import * as grpc from "@grpc/grpc-js";
import { GetIsHealthyRes } from '../interfaces/protoc/proto/kartoffelService';
import { logger } from "../logger";
import { getErrorMessage, getStatusCode } from "../utils/errors.utils";
import { KartoffelUtils } from "../utils/kartoffel.utils";
import { HealthManager } from './health.manager';

const kartoffelUtils: KartoffelUtils = new KartoffelUtils();
const healthManager: HealthManager = new HealthManager(kartoffelUtils);

export async function getIsHealthy(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to getIsHealthy`, { callRequest: call.request });
    const isHealthy: GetIsHealthyRes= await healthManager.getIsHealthy(call.request);
    logger.info(`getIsHealthy OK`, {
      callRequest: call.request,
      response: isHealthy,
    });
    callback(null, isHealthy);
  } catch (error: any) {
    const code = getStatusCode(error);
    const message = getErrorMessage(error);

    logger.error(`getIsHealthy ERROR`, {
      callRequest: call.request,
      error: { message },
    });
    callback(
      {
        code,
        message,
        status: grpc.status.CANCELLED,
      },
      null
    );
  }
}
