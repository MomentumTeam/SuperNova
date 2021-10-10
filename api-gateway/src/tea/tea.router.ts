import { Router } from 'express';
import TeaController from './tea.controller';
import { TeaValidator } from './tea.validator';

const TeaRouter: Router = Router();

// GET
TeaRouter.get('/units', TeaController.getAllUnits);
TeaRouter.get(
  '/units/search',
  TeaValidator.isSearchUnitValid,
  TeaController.searchUnit
);

export default TeaRouter;
