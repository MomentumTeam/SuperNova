import { Router } from 'express';
import HistoryController from './History.controller';
import { HistoryValidator } from './History.validator';

const HistoryRouter: Router = Router();

// GET
HistoryRouter.get(
  '/role/',
  HistoryValidator.isDoneRequestsEventsValid,
  HistoryController.getDoneRequestsByRoleId
);

HistoryRouter.get(
  '/approve/all',
  HistoryValidator.isDoneRequestsEventsValid,
  HistoryController.getDoneRequestsByGroupId
);

HistoryRouter.get(
  '/approve/my',
  HistoryValidator.isDoneRequestsEventsValid,
  HistoryController.getDoneRequestsByEntityId
);

HistoryRouter.get(
  '/:id',
  HistoryValidator.isDoneRequestsEventsValid,
  HistoryController.getDoneRequestsSubmmitedByEntityId
);