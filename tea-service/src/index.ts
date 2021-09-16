process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import { findPath } from './utils/path';
if (process.env.NODE_ENV !== 'production') {
  const ENV_PATH = `${findPath('supernova.env')}`;
  require('dotenv').config({
    path: ENV_PATH,
  });
}

import { Server } from './server';
import { logger } from './logger';
import * as C from './config';
import { initUnits } from './utils/initUnits';
async function main(): Promise<void> {
  try {
    if (C.needInit) {
      await initUnits();
    }
    const server: Server = new Server();
    await server.startServer();

    logger.info('tea-service started successfully');
  } catch (error: any) {
    logger.error(`Error while trying to start tea-service: ${error.message}`);
  }
}

main().then().catch();
