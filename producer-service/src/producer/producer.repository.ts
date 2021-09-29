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
      logger.info(JSON.stringify(message));
    } else {
      return new Promise((resolve, reject) => {
        try {
          this.shmuelUtils
            .shmuelPost(`${C.queueApi}/kartoffel`, message)
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
      logger.info(JSON.stringify(message));
    } else {
      return new Promise((resolve, reject) => {
        try {
          this.shmuelUtils
            .shmuelPost(`${C.queueApi}/orch`, message)
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
