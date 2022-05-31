import { Router } from 'express';
import HistoryController from './History.controller';
import { HistoryValidator } from './History.validator';

const HistoryRouter: Router = Router();

// GET
HistoryRouter.get(
  '/roles',
  HistoryValidator.isDoneRequestsEventsValid,
  HistoryController.getDoneRequestsByRoleId
);

HistoryRouter.get(
  '/groups',
  HistoryValidator.isDoneRequestsEventsValid,
  HistoryController.getDoneRequestsByGroupId
);

HistoryRouter.get(
  '/entitys',
  HistoryValidator.isDoneRequestsEventsValid,
  HistoryController.getDoneRequestsByEntityId
);

HistoryRouter.get(
  '/submmitedEntitys',
  HistoryValidator.isDoneRequestsEventsValid,
  HistoryController.getDoneRequestsSubmmitedByEntityId
);