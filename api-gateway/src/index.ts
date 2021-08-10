import { Server } from './server';
import { logger } from './logger';

async function main() {
  try {
    const server: Server = new Server();
    server.listen();
    logger.error('Api-Gateway started successfully!');
  } catch (error) {
    console.log('error', error);
    logger.error('ERROR while trying to start Api-Gateway');
  }
}

main();
