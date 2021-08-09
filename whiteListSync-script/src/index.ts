import { logger } from './logger';
import { getAllApproverIds, sync } from './service';
import { ApproverIdArray } from './interfaces/protoc/proto/approverService';
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
    schedule.scheduleJob(`${config.minute} ${config.hour} * * *`, async function () {
      //run script at midnight - 00:00
      logger.info(`WhiteList-Script started successfully!`);

      const approversArray = (await getAllApproverIds()) as ApproverIdArray;
      approversArray.approverIds.forEach(async (approverId: string) => {
        await sync(approverId);
      });
    });
  } catch (error) {
    logger.error(
      `Error while trying to start WhiteList-Script: ${error.message}`
    );
  }
}

main();
