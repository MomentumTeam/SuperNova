import * as express from 'express';
import path from 'path';
import { ShragaAuthenticationRouter } from './auth/auth.router';

const Router = express.Router();

Router.use('/auth', ShragaAuthenticationRouter);
Router.use('/401', express.static(path.resolve('./401')));

Router.get('/isAlive', (_req: express.Request, res: express.Response) => {
  res.status(200).send('OK');
});

export { Router };
