import * as C from "../config";
const getTokenCreator = require("spike-get-token");
const getToken = getTokenCreator(C.spikeOptions);

export class SpikeRepository {
  async getSpikeToken(): Promise<string> {
    try {
      const token = await getToken();
      return token;
    } catch (error) {
      throw error;
    }
  }
}
