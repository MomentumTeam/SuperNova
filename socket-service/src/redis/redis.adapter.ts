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


  //   /**
  //    * we want to prevent users from having more than one concurrent web socket connection to us at any given time
  //    * we must keep track of each connection, acquire a lock, and terminate other connections should the same user try to connect again
  //    */
  //   setUser = async (socket: any) => {
  //     // if redis can set the key, it means that is didn't previously exist.
  //     // NX - only set the key if doesn't already exist
  //     // EX (auto expire) - if redis crash we don't want to lock our users forever
  //     // (chose 30 seconds because socket.io default ping in 25 seconds)
  //     return await this.pubClient?.set(socket.decoded_token.id, socket.id, { NX: true, EX: 30 });
  //   };
  //
  //   getUser = async(id: string) => {
  //     const user =  await this.pubClient?.get(id);
  //     return user;
  //   }
}
