import winston from 'winston';
import { config } from '../../config';
const ecsFormat = require('@elastic/ecs-winston-format');
const DailyRotateFile = require('winston-daily-rotate-file');

let transports = [new winston.transports.Console()];
if (config.logs.storeLogs) {
  transports.push(
    new DailyRotateFile({
      dirname: config.logs.logPath,
      filename: 'api-gateway-%DATE%.log',
      datePattern: 'YYYY-MM-DD-HH',
      maxSize: '100m',
      maxFiles: '14d',
    })
  );
}

export const logger = winston.createLogger({
  level: 'info',
  format: ecsFormat(),
  transports: transports,
});
