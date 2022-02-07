import mongoose from "mongoose";
import { createMongoStreams } from "./mongo/mongo.stream";
import { connectMongo } from "./mongo/mongoose";
import { Server } from "./server";
import { logger } from "./utils/logger/logger";

async function main(): Promise<void> {
  try {
    const server = Server.createServer();
    await connectMongo();
    server.startServer();

    await mongoose.connection.once("open", () => {
      createMongoStreams(server.io);
    });

    logger.info("socket-service started successfully");
  } catch (error: any) {
    logger.error(`Error while trying to start socket-service: ${error.message}`);
  }
}

main().then().catch();
