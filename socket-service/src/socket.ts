import * as socketIO from "socket.io";
import * as socketioJwt from 'socketio-jwt';
import { createAdapter } from "@socket.io/redis-adapter";
import { createClient, RedisClientType } from "redis";

import { logger } from "./utils/logger/logger";
import { config } from "./config";
import { ApproverType, approverTypeFromJSON } from './interfaces/protoc/proto/requestService';

export class SocketsConnector {
  io: socketIO.Server;
  redisEnabled: boolean;
  pubClient: RedisClientType<any, any> | null = null;

  constructor(io: socketIO.Server, redisEnabled = true) {
    this.io = io;
    this.redisEnabled = redisEnabled;

    if (this.redisEnabled) this.initRedis();
  }
  /**
   * startSocket connect to all the namespaces in the config
   * @param io is the socketio server
   */
  startSocket(): void {
    this.io.use(
      socketioJwt.authorize({
        secret: config.authorization.secret,
        handshake: true,
      })
    );

    this.io.on("connection", (socket: any) => {
      if (socket.decoded_token?.id) {
        logger.info(`Connected clientid:${socket.decoded_token.id}, socketid: ${socket.id}`);
        socket.join(socket.decoded_token.id);

        this.connectToRoom(socket);
      } else {
        // TODO: throw unauth
      }
    });
  }

  /**
   * connectToRoom gets a user connects him to his relevant rooms by user types
   * @param socket - socket
   */
  connectToRoom = (socket: any): void => {
    const userTypes = socket.decoded_token?.types;
    if (userTypes && Array.isArray(userTypes)) {
      userTypes.map((userType) => {
        const type = approverTypeFromJSON(userType);
        let room;

        switch (type) {
          case ApproverType.SECURITY:
            room = config.socket.rooms.security;
            break;
          case ApproverType.SUPER_SECURITY:
            room = config.socket.rooms.superSecurity;
            break;
          default:
            break;
        }

        if (room) {
          logger.info(`Connected clientid:${socket.decoded_token.id} to room: ${room}`);
          socket.join(room);
        }
      });
    }
  };

  /**
   * init redis adapter in order to prevent multiple connections to a single user
   */
  initRedis = async () => {
    // publish client that sends messages
    this.pubClient = createClient({
      url: `redis://:${config.redis.password}@${config.redis.host}:${config.redis.port}`,
    });

    // subscriber client that receives messages
    const subClient = this.pubClient.duplicate();

    await Promise.all([this.pubClient.connect(), subClient.connect()]);
    this.io.adapter(createAdapter(this.pubClient, subClient));
  };

  /**
   * we want to prevent users from having more than one concurrent web socket connection to us at any given time
   * we must keep track of each connection, acquire a lock, and terminate other connections should the same user try to connect again
   */
  redisMiddleware = async (socket: any) => {
    if (this.redisEnabled) {
      // if redis can set the key, it means that is didn't previously exist.
      // NX - only set the key if doesn't already exist
      // EX (auto expire) - if redis crash we don't want to lock our users forever
      // (chose 30 seconds because socket.io default ping in 25 seconds)
      this.pubClient && (await this.pubClient?.set(socket.decoded_token.id, socket.id, { NX: true, EX: 30 }));
    }
  };

  //
  //   /**
  //    * emitRoom emits to all the rooms in the namespace the change event
  //    * @param rooms is the list of the rooms that needs to be emitted
  //    * @param nsp is the socket namespace
  //    */
  //   static emitRoom(rooms: string[], nsp: string): void {
  //     rooms.forEach((room: string) => {
  //       SocketsConnector.io.of(nsp).to(room).emit(config.socket.event);
  //     });
  //   }
  //
  //   /**
  //    * emitNamespace emits to all the sockets that connected the change event
  //    * @param nsp is the socket namespace
  //    */
  //   static emitNamespace(nsp: string): void {
  //     SocketsConnector.io.of(nsp).emit(config.socket.event);
  //   }
}
