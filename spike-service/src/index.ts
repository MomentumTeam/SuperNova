process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import { findPath } from './utils/path';

if (process.env.NODE_ENV !== 'production') {
  const ENV_PATH = findPath('supernova.env');
  require('dotenv').config({
    path: ENV_PATH,
  });
}

import { Server } from './server';
import { logger } from './logger';

async function main() {
  try {
    const server: Server = new Server();
    await server.startServer();
    logger.info('spike-service started successfully');
  } catch (error: any) {
    logger.error(`Error while trying to start spike-service: ${error.message}`);
  }
}

main();
