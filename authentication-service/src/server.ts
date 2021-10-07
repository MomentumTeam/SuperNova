import express from 'express';
import http from 'http';
import helmet from 'helmet';
import morgan from 'morgan';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import { config } from './config';
import { logger } from './logger';
import {
    userErrorHandler,
    serverErrorHandler,
    unknownErrorHandler,
} from './utils/errors/errorHandler';
import { PassportHandler } from './passport/passport.handler';
import { Router } from './router';

export class Server {
  public app: express.Application;
  private server: http.Server;

  public static bootstrap(): Server {
    return new Server();
  }

  private constructor() {
    this.app = express();
    this.configureMiddlewares();
    this.initializeShragaAuthenticator();
    this.app.use(Router);
    this.initializeErrorHandler();

    this.server = http.createServer(this.app);
    this.server.listen(config.server.port, () => {
      logger.info(
        `Auth-service Server running in ${process.env.NODE_ENV || 'development'} environment on port ${
          config.server.port
        }`
      );
    });
  }

  private setHeaders = (_req: express.Request, res: express.Response, next: express.NextFunction): void => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type');
    next();
  };

  private configureMiddlewares() {
    this.app.use(helmet());
    this.app.use(this.setHeaders);
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    if (process.env.NODE_ENV === "development") {
      this.app.use(morgan("dev"));
    }
    this.app.use(cookieParser());

    this.app.use(
      session({
        secret: config.authentication.sessionSecret,
        resave: false,
        saveUninitialized: true,
      })
    );
  }

  private initializeErrorHandler() {
    this.app.use(userErrorHandler);
    this.app.use(serverErrorHandler);
    this.app.use(unknownErrorHandler);
  }

  private initializeShragaAuthenticator() {
    this.app.use(passport.initialize());
    this.app.use(passport.session());
    PassportHandler();
  }
}
