import { Router } from 'express';
import HistoryController from './History.controller';
import { HistoryValidator } from './History.validator';

const HistoryRouter: Router = Router();

// GET
HistoryRouter.get(
  '/roles',
  HistoryValidator.isGetEventsByRoleIdValid,
  HistoryController.getDoneRequestsByRoleId
);

HistoryRouter.get(
  '/groups',
  HistoryValidator.isGetEventsByGroupIdSchemaValid,
  HistoryController.getDoneRequestsByGroupId
);

HistoryRouter.get(
  '/entitys',
  HistoryValidator.isGetEventsByEntityIdValid,
  HistoryController.getDoneRequestsByEntityId
);

HistoryRouter.get(
  '/submmitedEntitys',
  HistoryValidator.isGetEventsSubmmitedByEntityIdValid,
  HistoryController.getDoneRequestsBySubmittedEntityId
);