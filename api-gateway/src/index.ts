import { Server } from './server';
import { logger } from './utils/logger/logger';

process.on('uncaughtException', (err: Error) => {
  console.error('Unhandled Exception', err.stack);
  logger.error('Unhandled Exception', err.stack || 'Unhandled Exception');
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection', err);
  logger.error('Unhandled Rejection', 'Unhandled Rejection');
  process.exit(1);
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
