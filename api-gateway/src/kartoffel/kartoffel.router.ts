import { Router } from 'express';
import KartoffelController from './kartoffel.controller';

const KartoffelRouter: Router = Router();

KartoffelRouter.get('/searchOG', KartoffelController.searchOG);
KartoffelRouter.get(
  '/searchEntitiesByFullName',
  KartoffelController.searchEntitiesByFullName
);
KartoffelRouter.get(
  '/getEntityByIdNumber/:idNumber',
  KartoffelController.getEntityByIdNumber
);
KartoffelRouter.get(
  '/getRoleByRoleId/:roleId',
  KartoffelController.getRoleByRoleId
);
KartoffelRouter.get(
  '/getRolesUnderOG/:id',
  KartoffelController.getRolesUnderOG
);
KartoffelRouter.get(
  '/getEntityByRoleId/:roleId',
  KartoffelController.getEntityByRoleId
);
KartoffelRouter.get(
  '/getEntityByMongoId/:id',
  KartoffelController.getEntityByMongoId
);
KartoffelRouter.get(
  '/getChildrenOfOG/:id',
  KartoffelController.getChildrenOfOG
);
KartoffelRouter.get(
  '/getEntitiesUnderOG/:id',
  KartoffelController.getEntitiesUnderOG
);
KartoffelRouter.get(
  '/getPictureByEntityId/:id',
  KartoffelController.getPictureByEntityId
);
KartoffelRouter.get('/getOGTree/:rootId', KartoffelController.getOGTree);

export default KartoffelRouter;
