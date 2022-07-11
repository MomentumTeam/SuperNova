import { Router } from 'express';
import KartoffelController from './kartoffel.controller';
import { KartoffelValidator } from './kartoffel.validator';

const KartoffelRouter: Router = Router();

// Entities
KartoffelRouter.get('/entities/me', KartoffelController.getMyUser);
KartoffelRouter.get('/entities/me/picture', KartoffelController.getMyPicture);
KartoffelRouter.get(
  '/entities/search',
  KartoffelValidator.isSearchEntitiesByFullNameValid,
  KartoffelController.searchEntitiesByFullName
);
KartoffelRouter.get(
  '/entities/search/:id',
  KartoffelValidator.isGetEntityByMongoIdValid,
  KartoffelController.getEntityByMongoId
);
KartoffelRouter.get(
  '/entities/identifier/:identifier',
  KartoffelValidator.isGetEntityByIdentifierValid,
  KartoffelController.getEntityByIdentifier
);
KartoffelRouter.get(
  '/entities/role/:roleId',
  KartoffelValidator.isGetEntityByRoleIdValid,
  KartoffelController.getEntityByRoleId
);
KartoffelRouter.get(
  '/entities/groups/:id',
  KartoffelValidator.isGetEntitiesUnderOGValid,
  KartoffelController.getEntitiesUnderOG
);
KartoffelRouter.get(
  '/entities/hierarchy/:hierarchy',
  KartoffelValidator.isGetEntitiesByHierarchyValid,
  KartoffelController.getEntitiesByHierarchy
);
KartoffelRouter.get(
  '/entities/di/:uniqueId',
  KartoffelValidator.isGetEntityByDIRequestValid,
  KartoffelController.getEntityByDI
);
KartoffelRouter.get(
  '/entities/picture/:identifier',
  KartoffelValidator.isGetPictureByEntityIdentifierValid,
  KartoffelController.getPictureByEntityIdentifier
);

// Groups
KartoffelRouter.get(
  '/groups',
  KartoffelValidator.isGetAllOGsValid,
  KartoffelController.getAllOGs
);
KartoffelRouter.get('/groups/me', KartoffelController.getMyOG);
KartoffelRouter.get(
  '/groups/search',
  KartoffelValidator.isSearchOGValid,
  KartoffelController.searchOG
);
KartoffelRouter.get(
  '/groups/search/:id',
  KartoffelValidator.isGetOGByIdValid,
  KartoffelController.getOGById
);
KartoffelRouter.get(
  '/groups/hierarchy',
  KartoffelValidator.isGetOGByHierarchyNameValid,
  KartoffelController.getOGByHierarchyName
);

KartoffelRouter.get(
  '/groups/roles',
  KartoffelValidator.isExportHierarchyDataValid,
  KartoffelController.ExportHierarchyData
);

KartoffelRouter.get('/groups/children', KartoffelController.getOGRootChildren);
KartoffelRouter.get(
  '/groups/:id/children',
  KartoffelValidator.isGetOGChildrenValid,
  KartoffelController.getOGChildren
);
KartoffelRouter.get(
  '/groups/:id/tree',
  KartoffelValidator.isGetOGTreeValid,
  KartoffelController.getOGTree
);
KartoffelRouter.get(
  '/groups/name/taken',
  KartoffelValidator.isOGNameAlreadyTakenValid,
  KartoffelController.isOGNameAlreadyTaken
);

// Roles
KartoffelRouter.get(
  '/roles',
  KartoffelValidator.isGetAllRolesValid,
  KartoffelController.getAllRoles
);
KartoffelRouter.get(
  '/roles/:roleId',
  KartoffelValidator.isGetRoleByIdValid,
  KartoffelController.getRoleById
);
KartoffelRouter.get(
  '/roles/group/:id',
  KartoffelValidator.isGetRolesUnderOGdValid,
  KartoffelController.getRolesUnderOG
);
KartoffelRouter.get(
  '/roles/job/taken',
  KartoffelValidator.isJobTitleAlreadyTakenValid,
  KartoffelController.isJobTitleAlreadyTaken
);
KartoffelRouter.get(
  '/roles/:roleId/taken',
  KartoffelValidator.isRoleAlreadyTakenValid,
  KartoffelController.isRoleAlreadyTaken
);
KartoffelRouter.get(
  '/roles/hierarchy/:hierarchy',
  KartoffelValidator.isGetRolesByHierarchyValid,
  KartoffelController.getRolesByHierarchy
);
KartoffelRouter.get(
  '/roles/search/:roleId',
  KartoffelValidator.isSearchRolesByRoleIdValid,
  KartoffelController.searchRolesByRoleId
);

// DI
KartoffelRouter.get(
  '/di/search/:uniqueId',
  KartoffelValidator.isSearchDIsByUniqueIdValid,
  KartoffelController.searchDIsByUniqueId
);

KartoffelRouter.get(
  '/di/:uniqueId',
  KartoffelValidator.isGetDIByUniqueIdValid,
  KartoffelController.getDIByUniqueId
);

// LDAP
KartoffelRouter.get(
  '/ldap/user',
  KartoffelValidator.isSearchSamAccountNameValid,
  KartoffelController.searchSamAccountName,
)
export default KartoffelRouter;
