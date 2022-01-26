const grpcHealth = require("grpc-js-health-check");
import { grpcHealthCheck } from '../health';
import { GetIsHealthyReq, GetIsHealthyRes } from '../interfaces/protoc/proto/kartoffelService';
import { logger } from '../logger';
import { getErrorMessage, getStatusCode } from '../utils/errors.utils';

export class HealthManager {
  async getIsHealthy(getIsHealthyReq: GetIsHealthyReq): Promise<GetIsHealthyRes> {
    return new Promise((resolve, reject) => {
      try {
        grpcHealthCheck.check({ request: { service: "" } }, (err: any, response: any) => {
          if (err) {
            const code = getStatusCode(err);
            const message = getErrorMessage(err);
            logger.error(`getIsHealthy ERROR`, {
              error: { message },
            });
          } else {
            resolve({
              isHealthy: response?.status && response.status === grpcHealth.servingStatus.SERVING,
            });
          }
        });
        
        reject(new Error("something wrong with HEALTH CHECKER"));
      } catch (error) {
        const code = getStatusCode(error);
        const message = getErrorMessage(error);
        logger.error(`getIsHealthy ERROR`, {
          error: { message },
        });

        resolve({ isHealthy: false });
      }
    });
  }
}