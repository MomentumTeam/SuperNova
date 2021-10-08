const ecsFormat = require('@elastic/ecs-winston-format');
const DailyRotateFile = require('winston-daily-rotate-file');
import winston from 'winston';
import { config } from '../config';

let transports: any = [new winston.transports.Console()];

if (config.storeLogs) {
  transports.push(
    new DailyRotateFile({
      dirname: config.logPath,
      filename: 'kartoffel-consumer-%DATE%.log',
      datePattern: 'YYYY-MM-DD-HH',
      maxSize: '100m',
      maxFiles: '14d',
    })
  );
}

const logger = winston.createLogger({
  level: 'info',
  format: ecsFormat(),
  transports: transports,
});

export { logger };
