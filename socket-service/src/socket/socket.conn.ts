import * as socketIO from "socket.io";
import * as socketioJwt from "socketio-jwt";

import { logger } from "../utils/logger/logger";
import { config } from "../config";
import { ApproverType, approverTypeFromJSON } from "../interfaces/protoc/proto/requestService";
import { RedisConnAdapter } from '../redis/redis.adapter';

export class SocketsConnector {
  io: socketIO.Server;
  redisEnabled: boolean;

  constructor(io: socketIO.Server, redisEnabled = false) {
    this.io = io;
    this.redisEnabled = redisEnabled;

    if (this.redisEnabled) {
      const redisAdapter = new RedisConnAdapter(this.io);
    }
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

      socket.on('join', async(user: any)=> {
        console.log(user);
      })
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
}
