import express from "express";
import * as bodyParser from "body-parser";
import * as http from "http";
import { Server as socketIoServer } from "socket.io";
import { config } from "./config";
import { userErrorHandler, serverErrorHandler, unknownErrorHandler } from "./utils/errors/handler";
import { logger } from "./utils/logger/logger";
import { SocketsConnector } from "./socket/socket.conn";

// Socket server
export class Server {
  public app: express.Application;
  private server: http.Server;
  public io: socketIoServer;

  static createServer(): Server {
    return new Server();
  }

  public startServer() {
    this.server.listen(config.server.port, () => {
      logger.info(`${config.server.name} listening on port ${config.server.port}`);
    });
  }

  private constructor() {
    this.app = express();
    this.server = http.createServer(this.app);
    this.io = new socketIoServer(this.server, {
      cors: {
        origin: config.cors.ui,
      },
    });

    const socketConnector = new SocketsConnector(this.io, config.redis.enabled);
    socketConnector.startSocket();

    this.configurationMiddleware();
    this.initializeErrorHandler();
  }

  private configurationMiddleware() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }


  private initializeErrorHandler() {
    this.app.use(userErrorHandler);
    this.app.use(serverErrorHandler);
    this.app.use(unknownErrorHandler);
  }
}
