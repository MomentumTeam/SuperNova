process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import { findPath } from './utils/path';
const grpcHealth = require("grpc-js-health-check");

if (process.env.NODE_ENV !== 'production') {
  const ENV_PATH = findPath('supernova.env');
  require('dotenv').config({
    path: ENV_PATH,
  });
}

import { Server } from './server';
import { logger } from './logger';
import { setHealthStatus } from './health';

async function main() {
  try {
    const server: Server = new Server();
    await server.startServer();
    setHealthStatus(grpcHealth.servingStatus.SERVING);

    logger.info('spike-service started successfully');
  } catch (error: any) {
    logger.error(`Error while trying to start spike-service: ${error.message}`);
  }
}

main();
