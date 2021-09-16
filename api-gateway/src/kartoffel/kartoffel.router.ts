import { Router } from 'express';
import KartoffelController from './kartoffel.controller';
import { KartoffelValidator } from './kartoffel.validator';

const KartoffelRouter: Router = Router();

// Entities
KartoffelRouter.get('/entities/me', KartoffelController.getMyUser);
KartoffelRouter.get('/entities/me/picture', KartoffelController.getPictureByEntityId);
KartoffelRouter.get('/entities/:id', KartoffelValidator.isGetEntityByMongoIdValid, KartoffelController.getEntityByMongoId);
KartoffelRouter.get('/entities/search', KartoffelValidator.isSearchEntitiesByFullNameValid, KartoffelController.searchEntitiesByFullName);
KartoffelRouter.get('/entities/identifier/:identifier', KartoffelValidator.isGetEntityByIdentifierValid, KartoffelController.getEntityByIdentifier);
KartoffelRouter.get(
    '/entities/role/:roleId',
    KartoffelValidator.isGetEntityByRoleIdValid,
    KartoffelController.getEntityByRoleId
);
KartoffelRouter.get('/entities/groups/:id', KartoffelValidator.isGetEntitiesUnderOGValid, KartoffelController.getEntitiesUnderOG);
KartoffelRouter.get('/entities/hierarchy/:hierarchy',KartoffelValidator.isGetEntitiesByHierarchyValid, KartoffelController.getEntitiesByHierarchy);
KartoffelRouter.get('/entities/di/:uniqueId',KartoffelValidator.isGetEntityByDIRequestValid, KartoffelController.getEntityByDI);

// Groups
// TODO: add validators
KartoffelRouter.get('/groups/search', KartoffelController.searchOG);
KartoffelRouter.get('/groups/:id/children', KartoffelController.getChildrenOfOG);
KartoffelRouter.get('/groups/tree/:rootId', KartoffelController.getOGTree);
KartoffelRouter.get('/groups', KartoffelController.getAllOGs);
KartoffelRouter.get('/groups/:id', KartoffelController.getOGById);
KartoffelRouter.get('/groups/hierarchy/:hierarchy', KartoffelController.getOGByHierarchyName);

// Roles
// TODO: add validators
KartoffelRouter.get('/roles/:roleId', KartoffelController.getRoleByRoleId);
KartoffelRouter.get('/roles/group/:id', KartoffelController.getRolesUnderOG);
KartoffelRouter.get('/roles', KartoffelController.getAllRoles);

export default KartoffelRouter;
