import winston from "winston";
import { config } from '../../config';
const ecsFormat = require("@elastic/ecs-winston-format");

let transports = [new winston.transports.Console()];

// if (config.storeLogs) {
//   transports.push(
//     new DailyRotateFile({
//       dirname: C.logPath,
//       filename: "approver-service-%DATE%.log",
//       datePattern: "YYYY-MM-DD-HH",
//       maxSize: "100m",
//       maxFiles: "14d",
//     })
//   );
// }

export const logger = winston.createLogger({
  level: "info",
  format: ecsFormat(),
  transports: transports,
});
