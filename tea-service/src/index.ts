process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import { findPath } from './utils/path';
if (process.env.NODE_ENV !== 'production') {
  const ENV_PATH = `${findPath('supernova.env')}`;
  require('dotenv').config({
    path: ENV_PATH,
  });
}

import { Server } from './server';
import { logger } from './logger';
import * as C from './config';
import { initUnits } from './utils/initUnits';
import { connectMongo } from './mongoose';
async function main(): Promise<void> {
  try {
    const server: Server = new Server();
    await server.startServer();
    await connectMongo();

    if (C.needInit) {
        await initUnits();
    }
    
    logger.info('tea-service started successfully');
  } catch (error: any) {
    logger.error(`Error while trying to start tea-service: ${error.message}`);
  }
}

main().then().catch();
