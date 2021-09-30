import {config} from "./config";
const apm = require('elastic-apm-node').start({
  secretToken: '',
  serviceName: 'API-GATEWAY',
  serverUrl: config.endpoints.apm,
  environment: process.env.NODE_ENV,
  cloudProvider: "none",
});

import { Server } from './server';
import { logger } from './utils/logger/logger';

process.on('uncaughtException', (err: Error) => {
  console.error('Unhandled Exception', err.stack);
  logger.error('Unhandled Exception', err.stack || 'Unhandled Exception');
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection', err);
  logger.error('Unhandled Rejection', 'Unhandled Rejection');
});

(async () => {
  try {
    const server: Server = Server.bootstrap();
    server.listen();

    logger.info('Api-Gateway started successfully!');
  } catch (error) {
    logger.error('ERROR while trying to start Api-Gateway');
  }
})();
