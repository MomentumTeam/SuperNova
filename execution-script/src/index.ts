process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import { findPath } from './utils/path';
import { logger } from './logger';
import RequestService from './services/requestService';
import ProducerService from './services/producerService';

// const schedule = require('node-schedule');

if (process.env.NODE_ENV !== 'production') {
  const ENV_PATH = `${findPath('supernova.env')}`;
  require('dotenv').config({
    path: ENV_PATH,
  });
}

async function main() {
  try {
    // schedule.scheduleJob(`* */${config.everyHour} * * *`, async function () {
    //run script every x hour

    logger.info(`Execution-Script started successfully!`);

    const requestsArray = await RequestService.getRequestIdsInProgress();

    const promises = requestsArray.requestIds.map(async (requestId: string) => {
      return new Promise((resolve, reject) => {
        ProducerService.executeRequest(requestId)
          .then(() => {
            resolve(true);
          })
          .catch((error) => {
            reject(error);
          });
      });
    });

    Promise.all(promises)
      .then((values) => {
        logger.info(`Promises were finished successfully`);
      })
      .catch((error) => {
        logger.error(`Promises exection failed`, {
          error: { message: error.message },
        });
      });

    // });
  } catch (error: any) {
    logger.error(
      `Error while trying to start Execution-Script: ${error.message}`
    );
  }
}

main();
