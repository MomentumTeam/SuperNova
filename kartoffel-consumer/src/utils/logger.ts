import winston from "winston";
const { combine, timestamp, colorize, printf, metadata, json } = winston.format;

const myFormat = printf(({ level, message, label, timestamp, ...metadata }: any) => {
  return `${timestamp} [${label}] ${level}: ${message} ${metadata}`;
});

const logger: winston.Logger = winston.createLogger({
    handleExceptions: true,
    format: combine(
      timestamp(),
      myFormat,
      metadata({ fillExcept: ['message', 'level', 'timestamp', 'label'] }),
      json()
    ),
    transports: [new winston.transports.Console()],
    exitOnError: false,
});

export { logger };
