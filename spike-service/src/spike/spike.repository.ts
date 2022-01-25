import * as C from '../config';
import { GetSpikeTokenRequest } from '../interfaces/protoc/proto/spikeService';
import getTokenCreator from "spike-token-manager";

const kartoffelGetToken = getTokenCreator(C.kartoffelSpikeOptions);
const shmuelGetToken = getTokenCreator(C.shmuelSpikeOptions);
import { logger } from '../logger';

export class SpikeRepository {
  async getSpikeToken(
    getSpikeTokenRequest: GetSpikeTokenRequest
  ): Promise<string> {
    try {
      const audience = getSpikeTokenRequest.audience;
      let token;
      if (audience === C.kartoffelAudience) {
        token = await kartoffelGetToken();
      } else if (audience === C.shmuelAudience) {
        token = await shmuelGetToken();
      } else {
        throw new Error(`AudienceId '${audience}' is illegal!`);
      }

      logger.info(`Token successfully retrieved from Spike`, {
        token: token,
        audience: getSpikeTokenRequest.audience,
      });
      return token;
    } catch (error: any) {
      logger.error(`Error while requesting Spike token`, {
        error: { message: error.message },
      });
      throw error;
    }
  }
}
