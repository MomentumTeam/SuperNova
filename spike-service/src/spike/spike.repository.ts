import * as C from "../config";
const getTokenCreator = require("spike-get-token");
const getToken = getTokenCreator(C.spikeOptions);
import { logger } from "../logger";

export class SpikeRepository {
  async getSpikeToken(): Promise<string> {
    try {
      const token = await getToken();
      logger.info(`Token successfully retrieved from Spike`, { token: token });
      return token;
    } catch (err) {
      logger.error(`Error while requesting Spike token`, { err: err });
      throw err;
    }
  }
}
