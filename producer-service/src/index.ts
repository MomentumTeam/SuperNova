process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const grpcHealth = require("grpc-js-health-check");
import { findPath } from './utils/path';
if (process.env.NODE_ENV !== 'production') {
  const ENV_PATH = `${findPath('supernova.env')}`;
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

    logger.info(`producer-service started successfully`);
  } catch (error: any) {
    logger.error(
      `Error while trying to start producer-service: ${error.message}`
    );
  }
}

main();
