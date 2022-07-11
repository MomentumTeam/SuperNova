import { Router } from 'express';
import HistoryController from './history.controller';
import { HistoryValidator } from './history.validator';

const HistoryRouter: Router = Router();

// GET
HistoryRouter.get(
  '/roles/:roleId',
  HistoryValidator.isGetEventsByRoleIdValid,
  HistoryController.getDoneRequestsByRoleId
);

HistoryRouter.get(
  '/groups/:groupId',
  HistoryValidator.isGetEventsByGroupIdSchemaValid,
  HistoryController.getDoneRequestsByGroupId
);

HistoryRouter.get(
  '/entities/:entityId',
  HistoryValidator.isGetEventsByEntityIdValid,
  HistoryController.getDoneRequestsByEntityId
);

HistoryRouter.get(
  '/submmitedBy/:entityId',
  HistoryValidator.isGetEventsSubmmitedByEntityIdValid,
  HistoryController.getDoneRequestsBySubmittedEntityId
);

export default HistoryRouter;