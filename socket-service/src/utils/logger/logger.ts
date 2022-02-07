import winston from "winston";
const ecsFormat = require("@elastic/ecs-winston-format");

let transports = [new winston.transports.Console()];

export const logger = winston.createLogger({
  level: "info",
  format: ecsFormat(),
  transports: transports,
});
