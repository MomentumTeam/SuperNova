import express from 'express';
import { ServerError, UserError } from './errorTypes';
import { logger } from '../logger/logger';

export const userErrorHandler = (
  error: Error,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (error instanceof UserError) {
    logger.info(
      'User Error',
      `${error.name} was thrown with status ${error.status} and message ${error.message}`,
      ''
    );
    res.status(error.status).send({
      type: error.name,
      message: error.message,
    });
  } else {
    next(error);
  }
};

export const serverErrorHandler = (
  error: Error,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (error instanceof ServerError) {
    logger.warn(
      'Server Error',
      `${error.name} was thrown with status ${error.status} and message ${error.message}`,
      ''
    );
    res.status(error.status).send({
      type: error.name,
      message: error.message,
    });
  } else {
    next(error);
  }
};

export function unknownErrorHandler(
  error: Error,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  logger.error(
    'Unknown Error',
    `${error.name} was thrown with status 500 and message ${error.message}`,
    ''
  );

  res.status(500).send({
    type: error.name,
    message: error.message,
  });
}
