import * as socketIO from "socket.io";
import * as socketioJwt from 'socketio-jwt';
import { logger } from "./utils/logger/logger";
import { config } from "./config";

export class SocketsConnector {
  static io: socketIO.Server;

  /**
   * startSocket connect to all the namespaces in the config
   * @param io is the socketio server
   */
  static startSocket(io: socketIO.Server): void {
    SocketsConnector.io = io;
    this.io.use(
      socketioJwt.authorize({
        secret: config.authorization.secret,
        handshake: true,
      })
    );

    this.io.on("connection", (socket: any) => {
      logger.info(`Connected clientid:${socket.decoded_token.id}, socketid: ${socket.id}`);
      socket.join(socket.decoded_token.id);
    });

    // Object.values(config.socket.namespaces).forEach((namespace: string) => {
    //   this.connect(this.io.of(namespace));
    // });
  }

  //   /**
  //    * connect gets a namespace and creates an event listener for the socket
  //    * @param nsp is the socket namespace
  //    */
  //   static connect(nsp: socketIO.Namespace): void {
  //     nsp.on("connection", (socket: any) => {
  //       logger.info(`Connected client ${socket.decoded_token.fullName} ${socket.id}`);
  //
  //       // socket.on("joinRoom", (room: string) => {
  //       //   socket.join(room);
  //       // });
  //     });
  //   }

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
