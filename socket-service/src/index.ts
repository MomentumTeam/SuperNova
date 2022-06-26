const grpcHealth = require("grpc-js-health-check");

import { Server } from "./server";
import { logger } from "./utils/logger/logger";
import { GrpcServer } from "./grpcServer";
import { setHealthStatus } from "./health";

async function main(): Promise<void> {
  try {
    const socketServer = Server.createServer();
    socketServer.startServer();

    const grpcServer = new GrpcServer(socketServer.io);
    await grpcServer.startServer();
    setHealthStatus(grpcHealth.servingStatus.SERVING);

    logger.info("socket-service started successfully");
  } catch (error: any) {
    logger.error(`Error while trying to start socket-service: ${error.message}`);
  }
}

main();
