import express from 'express';
import * as http from 'http';
import * as config from './config';
import mainRouter from './mainRouter';
import { logger } from './logger';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
const auth = require('./auth/auth');

export class Server {
  public app: express.Application;
  private server: http.Server;

  constructor() {
    this.app = express();
    this.configureMiddlewares();
    this.server = http.createServer(this.app);
  }

  private configureMiddlewares() {
    this.app.use(cors());
    this.app.use(cookieParser());
    this.app.use(bodyParser.json());

    this.app.use('/api', auth, mainRouter);
    // this.app.use('/api', mainRouter);
    this.app.get('/api/auth/login', (req, res) => {
      res.redirect(`http://${config.authentication.authServiceUrl}/auth/login`);
    });
  }

  listen() {
    this.server.listen(config.port, () => {
      logger.log({
        level: 'info',
        message: `Server running on port ${config.port}`,
      });
    });
  }
}
