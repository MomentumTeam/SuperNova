import { Router } from 'express';
import RequestsController from './requests.controller';
import {RequestValidator} from './requests.validator';

const RequestsRouter: Router = Router();

//GET
RequestsRouter.get('/:id',RequestValidator.isGetRequestByIdValid, RequestsController.getRequestById);
RequestsRouter.get('/all/:approvementStatus', RequestValidator.isGetAllRequestsValid,RequestsController.getAllRequests);
RequestsRouter.get('/person/:id',RequestValidator.isGetRequestsByPersonValid, RequestsController.getRequestsByPerson);
RequestsRouter.get('/serialNumber/:serialNumber',RequestValidator.isGetRequestBySerialNumberValid, RequestsController.getRequestBySerialNumber);

// TODO: chage it to one route with personType
RequestsRouter.get('/submitterDisplayName/:displayName',RequestValidator.isSearchRequestsByDisplayNameValid, RequestsController.searchRequestsBySubmitterDisplayName);
RequestsRouter.get('/commanderDisaplyName/:displayName',RequestValidator.isSearchRequestsByDisplayNameValid, RequestsController.searchRequestsByCommanderDisplayName);
RequestsRouter.get('/secuirtyDisplayName/:displayName',RequestValidator.isSearchRequestsByDisplayNameValid, RequestsController.searchRequestsBySecurityDisplayName);
RequestsRouter.get('/approverDisplayName/:displayName',RequestValidator.isSearchRequestsByDisplayNameValid, RequestsController.searchRequestsByApproverDisplayName);


//PUT
RequestsRouter.put('/adStatus',RequestValidator.isUpdateADStatusValid, RequestsController.updateADStatus);
RequestsRouter.put('/:id',RequestValidator.isUpdateRequestValid, RequestsController.updateRequest);
RequestsRouter.put('/commanders/:id',RequestValidator.isUpdateApproversValid, RequestsController.updateCommanders);
RequestsRouter.put('/securityApprovers/:id',RequestValidator.isUpdateApproversValid, RequestsController.updateSecurityApprovers);
RequestsRouter.put('/approverDecision/:id',RequestValidator.isUpdateApproverDecision, RequestsController.updateApproverDecision);


//POST
RequestsRouter.post('/roleRequest',RequestValidator.isCreateRoleValid, RequestsController.createRoleRequest);
RequestsRouter.post('/assignRoleToEntityRequest',RequestValidator.isAssignRoleToEntityValid, RequestsController.assignRoleToEntityRequest);
RequestsRouter.post('/ogRequest',RequestValidator.isCreateOGValid, RequestsController.createOGRequest);
RequestsRouter.post('/newApproverRequest',RequestValidator.isCreateNewApproverValid, RequestsController.createNewApproverRequest);
RequestsRouter.post('/entityRequest',RequestValidator.isCreateEntityValid, RequestsController.createEntityRequest);
RequestsRouter.post('/renameOGRequest',RequestValidator.isRenameOGValid, RequestsController.renameOGRequest);
RequestsRouter.post('/renameRoleRequest',RequestValidator.isRenameRoleValid, RequestsController.renameRoleRequest);
RequestsRouter.post('/editEntityRequest',RequestValidator.isEditEntityValid, RequestsController.editEntityRequest);
RequestsRouter.post('/disconectRoleFromEntityRequest',RequestValidator.isDisconectRoleFromEntityValid, RequestsController.disconectRoleFromEntityRequest);

//DELETE
RequestsRouter.post('/deleteRoleRequest',RequestValidator.isDeleteRoleValid, RequestsController.deleteRoleRequest);
RequestsRouter.post('/deleteOGRequest',RequestValidator.isDeleteOGValid, RequestsController.deleteOGRequest);
RequestsRouter.delete('/:id',RequestValidator.isDeleteRequestValid, RequestsController.deleteRequest);


export default RequestsRouter;
