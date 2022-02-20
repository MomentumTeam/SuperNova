import mongoose from "mongoose";
import { MongoStream } from "./mongo/mongo.stream";
import { MongoConn } from "./mongo/mongo.conn";
import { Server } from "./server";
import { logger } from "./utils/logger/logger";

async function main(): Promise<void> {
  try {
    const server = Server.createServer();
    await new MongoConn().connectMongo();
    server.startServer();

    await mongoose.connection.once("open", () => {
      new MongoStream(server.io);
    });

    logger.info("socket-service started successfully");
  } catch (error: any) {
    logger.error(`Error while trying to start socket-service: ${error.message}`);
  }
}

main().then().catch();
