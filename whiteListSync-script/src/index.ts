process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import { findPath } from './utils/path';
if (process.env.NODE_ENV !== 'production') {
  const ENV_PATH = `${findPath('supernova.env')}`;
  require('dotenv').config({
    path: ENV_PATH,
  });
}

import { logger } from './logger';
import { getAllApproverIds, sync } from './service';
import { ApproverIdArray } from './interfaces/protoc/proto/approverService';
import * as config from './config';

const schedule = require('node-schedule');

async function main() {
  try {
    // schedule.scheduleJob(
    // `${config.minute} ${config.hour} * * *`,
    // async function () {
    //run script at midnight - 00:00
    logger.info(`WhiteList-Script started successfully!`);

    const approversArray = (await getAllApproverIds()) as ApproverIdArray;

    const promises = approversArray.approverIds.map(
      async (approverId: string) => {
        return new Promise((resolve, reject) => {
          sync(approverId)
            .then(() => {
              resolve(true);
            })
            .catch((error) => {
              reject(error);
            });
        });
      }
    );

    Promise.all(promises)
      .then((values) => {
        logger.info(`Promises were finished successfully`);
      })
      .catch((error: any) => {
        logger.error(`Promises sync failed`, {
          error: { message: error.message },
        });
      });

    // }
    // );
  } catch (error: any) {
    logger.error(
      `Error while trying to start WhiteList-Script: ${error.message}`
    );
  }
}

main();
