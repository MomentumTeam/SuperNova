import { Server } from './server';
import { logger } from './logger';
import { findPath } from './utils/path';
if (process.env.NODE_ENV !== 'production') {
  const ENV_PATH = `${findPath('supernova.env')}`;
  require('dotenv').config({
    path: ENV_PATH,
  });
}

async function main() {
  try {
    const server: Server = new Server();
    await server.startServer();
    logger.info('Server started successfully');
  } catch (error) {
    logger.error(`Error while trying to start the server: ${error.message}`);
  }
}

main();
