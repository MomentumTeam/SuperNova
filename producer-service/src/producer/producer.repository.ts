import axios from 'axios';
import * as C from '../config';
export class ProducerRepository {
  async pushIntoKartoffelQueue(message: any) {
    console.log('pushIntoKartoffelQueue');
    if (C.devMode) {
      console.log(message);
    } else {
      return new Promise((resolve, reject) => {
        try {
          axios
            .post(`${C.queueApi}/kartoffelQueue`, message)
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
    console.log('pushIntoADQueue');
    if (C.devMode) {
      console.log(message);
    } else {
      return new Promise((resolve, reject) => {
        try {
          axios
            .post(`${C.queueApi}/adQueue`, message)
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
