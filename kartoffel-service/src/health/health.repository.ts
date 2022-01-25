import * as C from "../config";
import { GetIsHealthyRes } from '../interfaces/protoc/proto/kartoffelService';
import { logger } from '../logger';
import { getErrorMessage, getStatusCode } from '../utils/errors.utils';
import { KartoffelUtils } from '../utils/kartoffel.utils';

export class HealthRepository {
  private kartoffelUtils: KartoffelUtils;
  constructor(kartoffelUtils: KartoffelUtils) {
    this.kartoffelUtils = kartoffelUtils;
  }

  async GetIsHealthy(): Promise<GetIsHealthyRes> {
    try {
      if (C.useFaker) {
        return { isHealthy: true };
      } else {
        const data = await this.kartoffelUtils.kartoffelGet(`${C.kartoffelUrl}/isalive`);
        return { isHealthy: true } as GetIsHealthyRes;
      }
    } catch (error) {
      const code = getStatusCode(error);
      const message = getErrorMessage(error);
      logger.error(`getIsHealthy ERROR`, {
        error: { message },
      });

      return {isHealthy: false};
    }
  }
}