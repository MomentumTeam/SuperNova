import * as errorhandlers from './utils/errors/errorHandlers';
import morgan from 'morgan';

import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import mainRouter from './router';
import addHeaders from './utils/addHeaders';

import { config } from './config';
import { logger } from './utils/logger/logger';
import { swaggerDocument } from './swagger';
import { addMockToken } from './utils/auth/user.mock';
import { Authenticator } from './utils/auth/auth';

export class Server {
  private static _instance: Server;
  public app: express.Application;

  private constructor() {
    this.app = express();

    this.initializeMiddlewares();
    this.initializeRouters();
    this.initializeErrorHandling();
  }

  public static bootstrap(): Server {
    if (!Server._instance) Server._instance = new Server();
    return Server._instance;
  }

  public listen() {
    this.app.listen(config.server.port, () => {
      logger.info(
        `${config.server.name} running in on port ${config.server.port}`,
        'connectedToServer'
      );
    });
  }

  private initializeMiddlewares() {
    this.app.use(cors());
    this.app.use(addHeaders);
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
    this.app.use(morgan('dev'));

    if (!config.authentication.required) this.app.use(addMockToken);

    this.app.use(Authenticator.initialize());
    this.app.use(Authenticator.middleware);
  }

  private initializeRouters() {
    this.app.get('/isAlive', (req, res) => {
      return res.send('alive');
    });

    this.app.use('/api', mainRouter);
    this.app.use(
      '/api-docs',
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocument)
    );

    this.app.use('*', (req, res) => {
      res.status(404).send('Invalid Route');
    });
  }

  private initializeErrorHandling() {
    this.app.use(errorhandlers.serverErrorHandler);
    this.app.use(errorhandlers.userErrorHandler);
    this.app.use(errorhandlers.unknownErrorHandler);
  }
}
