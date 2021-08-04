process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import { Server } from './server';
import { logger } from './logger';
import { findPath } from './utils/path';

if (process.env.NODE_ENV !== 'production') {
  const ENV_PATH = `${findPath('supernova.env')}`;
  console.log(ENV_PATH);
  require('dotenv').config({
    path: ENV_PATH,
  });
}

async function main() {
  try {
    const server: Server = new Server();
    await server.startServer();
    logger.info(`kartoffel-service started successfully`);
  } catch (error) {
    logger.error(
      `Error while trying to start kartoffel-service: ${error.message}`
    );
  }
}

main();
