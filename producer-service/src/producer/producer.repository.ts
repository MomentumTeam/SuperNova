import * as C from '../config';
import { logger } from '../logger';
import { ShmuelUtils } from '../utils/shmuelUtils';
export class ProducerRepository {
  private shmuelUtils: ShmuelUtils;

  constructor() {
    this.shmuelUtils = new ShmuelUtils();
  }

  async pushIntoKartoffelQueue(message: any) {
    if (C.devMode) {
      logger.info(message);
    } else {
      return new Promise((resolve, reject) => {
        try {
          this.shmuelUtils
            .shmuelPost(`${C.queueApi}/kartoffelQueue`, message)
            .then(() => {
              resolve(true);
            })
            .catch((error) => {
              reject(error);
            });
        } catch (error) {
          throw error;
        }
      });
    }
  }
  async pushIntoADQueue(message: any) {
    if (C.devMode) {
      logger.info(message);
    } else {
      return new Promise((resolve, reject) => {
        try {
          this.shmuelUtils
            .shmuelPost(`${C.queueApi}/adQueue`, message)
            .then(() => {
              resolve(true);
            })
            .catch((error) => {
              reject(error);
            });
        } catch (error) {
          throw error;
        }
      });
    }
  }
}
