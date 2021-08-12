import { logger } from './logger';
import RequestService from './services/requestService';
import ProducerService from './services/producerService';
import { findPath } from './utils/path';
import * as config from './config';

const schedule = require('node-schedule');

if (process.env.NODE_ENV !== 'production') {
  const ENV_PATH = `${findPath('supernova.env')}`;

  require('dotenv').config({
    path: ENV_PATH,
  });
}

async function main() {
  try {
    schedule.scheduleJob(`* */${config.everyHour} * * *`, async function () {
      //run script every x hour
      logger.info(`Execution-Script started successfully!`);

      const requestsArray = await RequestService.getRequestIdsInProgress();

      requestsArray.requestIds.forEach(async (requestId: string) => {
        await ProducerService.executeRequest(requestId);
      });
    });
  } catch (error) {
    logger.error(
      `Error while trying to start Execution-Script: ${error.message}`
    );
  }
}

main();
