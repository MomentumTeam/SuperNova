process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import { findPath } from './utils/path';
const grpcHealth = require("grpc-js-health-check");
import { connectMongo } from './mongoose';
    
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
    await connectMongo();

    logger.info('options-service started successfully');
  } catch (error: any) {
    logger.error(`Error while trying to start options-service: ${error.message}`);
  }
}

main();
