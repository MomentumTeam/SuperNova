import { Router } from 'express';
import KartoffelController from './kartoffel.controller';

const KartoffelRouter: Router = Router();

KartoffelRouter.get('/searchOG',KartoffelController.searchOG);
KartoffelRouter.get('/searchEntitiesByFullName',KartoffelController.searchEntitiesByFullName);
KartoffelRouter.get('/getEntityByIdNumber/:idNumber',KartoffelController.getEntityByIdNumber);
KartoffelRouter.get('/searchRolesByRoleId/:roleId',KartoffelController.searchRolesByRoleId);
KartoffelRouter.get('/getRolesUnderOG/:id',KartoffelController.getRolesUnderOG);
KartoffelRouter.get('/getEntityByRoleId/:roleId',KartoffelController.getEntityByRoleId);
KartoffelRouter.get('/getEntityByMongoId/:id',KartoffelController.getEntityByMongoId);
KartoffelRouter.get('/getChildrenOfOG/:id',KartoffelController.getChildrenOfOG);
KartoffelRouter.get('/getEntitiesUnderOG/:id',KartoffelController.getEntitiesUnderOG);

export default KartoffelRouter;
