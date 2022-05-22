import { Router } from 'express';
import RollbackController from './rollback.controller';
import { RollbackValidator } from './rollback.validator';

const RollbackRouter: Router = Router();

RollbackRouter.post(
  '/isValid/:id',
  RollbackValidator.isRollbackValidValid,
  RollbackController.isRollbackValid
);

RollbackRouter.post(
  '/ad/:id',
  RollbackValidator.rollbackInADValid,
  RollbackController.rollbackInAD
);

RollbackRouter.post(
  '/kartoffel/:id',
  RollbackValidator.rollbackInKartoffelValid,
  RollbackController.rollbackInKartoffel
);

export default RollbackRouter;
