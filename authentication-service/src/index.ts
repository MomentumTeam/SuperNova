require('./envload');

import { Server } from './server';
import { logger } from './logger';

process.on('uncaughtException', (err) => {
  logger.error('Unhandled Exception in Auth-service', err.stack);
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  logger.error('Unhandled Rejection in Auth-service', err);
  process.exit(1);
});

process.on('SIGINT', async () => {
  logger.info('User Termination in Auth-service');
  process.exit(0);
});

(async () => {
  logger.info(`Starting Auth-service server`);
  const server: Server = Server.bootstrap();

  server.app.on('close', () => {
    logger.info('Auth-service Server closed');
  });
})();
