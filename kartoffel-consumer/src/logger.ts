import winston from "winston";
const { combine, timestamp, colorize, printf } = winston.format;

const myFormat = printf(({ level, message, label, timestamp }: any) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger: winston.Logger = winston.createLogger({
  handleExceptions: true,
  format: combine(timestamp(), colorize(), myFormat),
  transports: [new winston.transports.Console()],
  exitOnError: false,
});

export { logger };
