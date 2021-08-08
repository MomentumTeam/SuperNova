import { logger } from './logger';
import { getAllApproverIds, sync } from './service';
import { ApproverIdArray } from './interfaces/protoc/proto/approverService';
import { findPath } from './utils/path';

const schedule = require('node-schedule');

console.log('process.env.NODE_ENV', process.env.NODE_ENV);
if (process.env.NODE_ENV !== 'production') {
  const ENV_PATH = `${findPath('supernova.env')}`;
  console.log(ENV_PATH);
  require('dotenv').config({
    path: ENV_PATH,
  });
}

async function main() {
  try {
    schedule.scheduleJob('0 0 * * *', async function () {
      //run script at midnight - 00:00
      const approversArray = (await getAllApproverIds()) as ApproverIdArray;
      console.log('approversArray', approversArray);
      approversArray.approverIds.forEach(async (approverId: string) => {
        await sync(approverId);
      });
    });
  } catch (error) {
    console.log('error', error);
    logger.log({
      level: 'error',
      label: 'main',
      message: `Error: ${error.message}`,
    });
  }
}

main();
