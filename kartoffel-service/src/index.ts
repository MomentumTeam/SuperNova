require('./envload');

import { Server } from './server';
import { logger } from './logger';

async function main() {
  try {
    const server: Server = new Server();
    await server.startServer();
    logger.info(`kartoffel-service started successfully`);
  } catch (error: any) {
    logger.error(
      `Error while trying to start kartoffel-service: ${error.message}`
    );
  }
}

main();
