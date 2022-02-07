import mongoose from "mongoose";
import { config } from '../config';
import { logger } from '../utils/logger/logger';

export async function connectMongo() {
  logger.info("connectDB - trying to mongo server");
  const db = mongoose.connection;

  try {
    await startConnectionAttempts();
  } catch (err) {
    logger.error(`connectDB - did not connect to mongo: ${err}`);
  }

  db.on("connected", () => {
    logger.info(`connectDB- connected to ${config.mongo.uri}`);
  });
  db.on("error", (err: any) => {
    logger.error("connectDB - mongo connection error!", err);
  });
  db.on("disconnected", () => {
    logger.error("connectDB - mongo disconnected");
  });
}

/**
 * Attempts to connect to mongo connectionRetries times.
 * Waits reconnectTimeout ms bewteen attempts.
 * @param server - the server trying to connect.
 */
async function startConnectionAttempts() {
  const retries = config.mongo.connectionRetries;
  const timeout = config.mongo.reconnectTimeout;

  for (let i = 1; i <= retries; i++) {
    const connectionRes: { success: boolean; error: Error | null } = await connect();

    // if mongo connection attempt has failed
    if (!connectionRes.success) {
      logger.error(`connectDB - connection retry (${i}/${retries}) ${connectionRes.error}`, {
        errMsg: connectionRes.error?.message,
        stack: connectionRes.error?.stack,
      });

      await sleep(timeout);
    } else {
      logger.info(`connectDB - connected to ${config.mongo.uri}`);
      break;
    }
  }
}

/**
 * Connects to mongo with mongoConnectionString.
 */
async function connect(): Promise<{ success: boolean; error: Error | null }> {
  await mongoose.connect(
    config.mongo.uri,
    {
      useCreateIndex: true,
      useFindAndModify: false,
    },
    async (err: any) => {
      return { success: false, error: err };
    }
  );

  return { success: true, error: null };
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
