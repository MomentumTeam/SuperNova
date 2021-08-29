import { Server } from './server';
import { logger } from './logger';
import { findPath } from './utils/path';
import * as C from './config';
import { initUnits } from './utils/initUnits';
if (process.env.NODE_ENV !== 'production') {
  const ENV_PATH = `${findPath('supernova.env')}`;
  require('dotenv').config({
    path: ENV_PATH,
  });
}

async function main(): Promise<void> {
  try {
    if (C.needInit) {
      await initUnits();
    }
    const server: Server = new Server();
    await server.startServer();

    logger.info('tea-service started successfully');
  } catch (error) {
    logger.error(`Error while trying to start tea-service: ${error.message}`);
  }
}

main().then().catch();
