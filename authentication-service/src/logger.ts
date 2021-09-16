import { transports, createLogger } from 'winston';
const ecsFormat = require('@elastic/ecs-winston-format');
const DailyRotateFile = require('winston-daily-rotate-file');

const logger = createLogger({
  level: 'info',
  format: ecsFormat(),
  transports: [
    new DailyRotateFile({
      dirname: './logs',
      filename: 'winston-%DATE%.log',
      datePattern: 'YYYY-MM-DD-HH',
      maxSize: '100m',
      maxFiles: '14d',
    }),
  ],
});

logger.add(new transports.Console());

export { logger };
