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
import { connectMongo } from './mongoose';

async function main() {
  try {
    const server: Server = new Server();
    await server.startServer();
    await connectMongo();

    logger.info('notification-service started successfully');
  } catch (error) {
    logger.error(
      `Error while trying to start notification-service: ${error.message}`
    );
  }
}

main();
