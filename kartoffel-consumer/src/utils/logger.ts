const ecsFormat = require('@elastic/ecs-winston-format');
const DailyRotateFile = require('winston-daily-rotate-file');
import winston from 'winston';
const { combine, json } = winston.format;

const logger = winston.createLogger({
  level: 'info',
  format: combine(ecsFormat(), json()),
  transports: [
    new winston.transports.Console(),
    new DailyRotateFile({
      dirname: './logs',
      filename: 'winston-%DATE%.log',
      datePattern: 'YYYY-MM-DD-HH',
      maxSize: '100m',
      maxFiles: '14d',
    }),
  ],
});

export { logger };
