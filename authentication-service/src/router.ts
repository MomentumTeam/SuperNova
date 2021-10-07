import * as express from 'express';
import path from 'path';
import { AuthRouter } from './auth/auth.router';

const Router = express.Router();

Router.use('/auth', AuthRouter);
Router.use('/401', express.static(path.resolve('./401')));

Router.use('/isAlive', (req, res) => {
  res.status(200).send('OK');
});

Router.use((req, res) => {
  res.status(404).send('invalid route');
});

export { Router };
