require('./envload');

import { Server } from './server';
import { logger } from './logger';
import { checkHealthStatusKartoffel } from './health';
import { healthCheckInterval } from './config';

async function main() {
  try {
    const server: Server = new Server();
    await server.startServer();
    logger.info(`kartoffel-service started successfully`);
    
    await checkHealthStatusKartoffel();
    setInterval(() => {
      checkHealthStatusKartoffel();
    }, healthCheckInterval);

  } catch (error: any) {
    logger.error(
      `Error while trying to start kartoffel-service: ${error.message}`
    );
  }
}

main();
