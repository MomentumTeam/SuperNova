import axios from "axios";
import * as C from "../config";
export class ProducerRepository {
  async pushIntoKartoffelQueue(message: any) {
    try {
      await axios.post(`${C.queueApi}/kartoffelQueue`, message);
    } catch (error) {
      throw error;
    }
  }
  async pushIntoADQueue(message: any) {
    try {
      await axios.post(`${C.queueApi}/kartoffelQueue`, message);
    } catch (error) {
      throw error;
    }
  }
}
