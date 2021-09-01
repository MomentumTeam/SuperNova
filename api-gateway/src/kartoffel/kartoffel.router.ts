import { Router } from 'express';
import KartoffelController from './kartoffel.controller';

const KartoffelRouter: Router = Router();


KartoffelRouter.get('/entities/myUser', KartoffelController.getMyUser);
KartoffelRouter.get('/entities/:id', KartoffelController.getEntityByMongoId);
KartoffelRouter.get('/entities/picture', KartoffelController.getPictureByEntityId);
KartoffelRouter.get('/entities/search', KartoffelController.searchEntitiesByFullName);
KartoffelRouter.get('/entities/identifier/:identifier', KartoffelController.getEntityByIdentifier);
KartoffelRouter.get('/entities/role/:roleId', KartoffelController.getEntityByRoleId);
KartoffelRouter.get('/entities/groups/:id', KartoffelController.getEntitiesUnderOG);
KartoffelRouter.get('/entities/hierarchy/:hierarchy', KartoffelController.getEntitiesByHierarchy);
KartoffelRouter.get('/entities/di/:uniqueId', KartoffelController.getEntityByDI);

KartoffelRouter.get('/groups/search', KartoffelController.searchOG);
KartoffelRouter.get('/groups/:id/children', KartoffelController.getChildrenOfOG);
KartoffelRouter.get('/groups/tree/:rootId', KartoffelController.getOGTree);
KartoffelRouter.get('/groups', KartoffelController.getAllOGs);
KartoffelRouter.get('/groups/:id', KartoffelController.getOGById);
KartoffelRouter.get('/groups/hierarchy/:hierarchy', KartoffelController.getOGByHierarchyName);

KartoffelRouter.get('/roles/:roleId', KartoffelController.getRoleByRoleId);
KartoffelRouter.get('/roles/group/:id', KartoffelController.getRolesUnderOG);
KartoffelRouter.get('/roles', KartoffelController.getAllRoles);

export default KartoffelRouter;
