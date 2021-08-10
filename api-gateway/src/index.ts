import { Server } from './server';
import { logger } from './logger';

async function main() {
  try {
    const server: Server = new Server();
    server.listen();
    logger.info('Api-Gateway started successfully!');
  } catch (error) {
    logger.error('ERROR while trying to start Api-Gateway');
  }
}

main();
