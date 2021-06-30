import { Router } from 'express';
import KartoffelController from './kartoffel.controller';

const KartoffelRouter: Router = Router();

KartoffelRouter.get('/searchOG/:hierarchyAndName',KartoffelController.searchOG);
KartoffelRouter.get('/searchEntitiesByFullName/:fullName',KartoffelController.searchEntitiesByFullName);
KartoffelRouter.get('/getEntityByIdNumber/:idNumber',KartoffelController.getEntityByIdNumber);
KartoffelRouter.get('/searchRolesByRoleId/:roleId',KartoffelController.searchRolesByRoleId);
KartoffelRouter.get('/getRolesUnderOG/:id/:direct',KartoffelController.getRolesUnderOG);
KartoffelRouter.get('/getEntityByRoleId/:roleId',KartoffelController.getEntityByRoleId);
KartoffelRouter.get('/getEntityByMongoId/:id',KartoffelController.getEntityByMongoId);
KartoffelRouter.get('/getChildrenOfOG/:id',KartoffelController.getChildrenOfOG);
KartoffelRouter.get('/getEntitiesUnderOG/:id/:direct',KartoffelController.getEntitiesUnderOG);

export default KartoffelRouter;
