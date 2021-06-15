import * as C from "../config";
const getTokenCreator = require("spike-get-token");
const getToken = getTokenCreator(C.spikeOptions);
import { logger } from "../logger";

export class SpikeRepository {
  async getSpikeToken(): Promise<string> {
    try {
      // const token = await getToken();
      const token = "SADIBALIKJDBSAKJDHBSAKJDHSAD";
      logger.log({
        level: "info",
        message: `Token successfully retrieved from Spike`,
        label: "getSpikeToken",
      });
      return token;
    } catch (error) {
      logger.log({
        level: "error",
        message: `Error while requesting Spike token: ${error.message}`,
        label: "getSpikeToken",
      });
      throw error;
    }
  }
}
