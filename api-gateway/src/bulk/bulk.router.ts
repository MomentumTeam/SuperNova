import BulkController from './bulk.controller';
import { Router } from 'express';
import { BulkValidator } from './bulk.validator';

const fileUpload = require('express-fileupload');
const BulkRouter: Router = Router();
BulkRouter.use(fileUpload());

// POST
BulkRouter.post('/upload', BulkController.uploadBulkFile);
BulkRouter.post('/request/role', BulkValidator.isCreateRoleBulkRequestValid, BulkController.createRoleBulkRequest);

// PUT
BulkRouter.put('/request/role/hierarchy', BulkValidator.isChangeRoleHierarchyBulkRequestValid, BulkController.changeRoleHierarchyBulkRequest);

export default BulkRouter;
