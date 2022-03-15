import * as socketIO from "socket.io";
import { createClient, RedisClientType } from "redis";
import { config } from "../config";
import { logger } from "../utils/logger/logger";
import { createAdapter } from '@socket.io/redis-adapter';

export class RedisConnAdapter {
  pubClient: RedisClientType<any, any> | null = null;
  subClient: RedisClientType<any, any> | null = null;

  constructor(io: socketIO.Server) {
    this.initRedis(io);
  }

  /**
   * init redis adapter in order to prevent multiple connections to a single user
   */
  initRedis = async (io: socketIO.Server) => {
    // publish client that sends messages
    this.pubClient = createClient({
      url: `redis://:${config.redis.password}@${config.redis.host}:${config.redis.port}`,
    });

    // subscriber client that receives messages
    this.subClient = this.pubClient.duplicate();

    try {
      await Promise.all([this.pubClient.connect(), this.subClient.connect()]);
      io.adapter(createAdapter(this.pubClient, this.subClient));
    } catch (error: any) {
      logger.error(`Error while trying to connect to redis: ${error.message}`);
    }
  };
}
