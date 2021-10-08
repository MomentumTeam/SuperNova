const ecsFormat = require('@elastic/ecs-winston-format');
const DailyRotateFile = require('winston-daily-rotate-file');
import winston from 'winston';
import * as C from './config';

let transports: any = [new winston.transports.Console()];

if (C.storeLogs) {
  transports.push(
    new DailyRotateFile({
      dirname: C.logPath,
      filename: 'whiteListSync-script-%DATE%.log',
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
