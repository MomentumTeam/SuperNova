import { Router } from 'express';
import RequestsController from './requests.controller';

const RequestsRouter: Router = Router();


RequestsRouter.get('/', RequestsController.getAllRequests);
RequestsRouter.get('/:id', RequestsController.getRequestById);
RequestsRouter.get('/myRequests', RequestsController.getMyRequests);
RequestsRouter.get('/requestsByCommander/:id', RequestsController.getRequestsByCommander);
RequestsRouter.get('/submittedBy/:id', RequestsController.getRequestsSubmittedBy);
RequestsRouter.get('/serialNumber/:serialNumber', RequestsController.getRequestBySerialNumber);
RequestsRouter.get('/submitterIdentifier/:identifier', RequestsController.getRequestsBySubmitterIdentifier);
RequestsRouter.get('/commanderIdentifier/:identifier', RequestsController.getRequestsByCommanderIdentifier);
RequestsRouter.get('/secuirtyIdentifier/:identifier', RequestsController.getRequestsBySecurityIdentifier);
RequestsRouter.get('/approverIdentifier/:identifier', RequestsController.getRequestsByApproverIdentifier);
RequestsRouter.get('/submitterDisplayName/:displayName', RequestsController.searchRequestsBySubmitterDisplayName);
RequestsRouter.get('/commanderDisaplyName/:displayName', RequestsController.searchRequestsByCommanderDisplayName);
RequestsRouter.get('/secuirtyDisplayName/:displayName', RequestsController.searchRequestsBySecurityDisplayName);
RequestsRouter.get('/approverDisplayName/:displayName', RequestsController.searchRequestsByApproverDisplayName);



RequestsRouter.put('/adStatus', RequestsController.updateADStatus);
RequestsRouter.put('/:id', RequestsController.updateRequest);
RequestsRouter.put('/commanders/:id', RequestsController.updateCommanders);
RequestsRouter.put('/securityApprovers/:id', RequestsController.updateSecurityApprovers);
//TODO(barak)- in requestService make one generic function for updateApproverDecision.
RequestsRouter.put('/approverDecision/:id', RequestsController.updateApproverDecision);



RequestsRouter.post('/roleRequest', RequestsController.createRoleRequest);
RequestsRouter.post('/assignRoleToEntityRequest', RequestsController.assignRoleToEntityRequest);
RequestsRouter.post('/ogRequest', RequestsController.createOGRequest);
RequestsRouter.post('/newApproverRequest', RequestsController.createNewApproverRequest);
RequestsRouter.post('/entityRequest', RequestsController.createEntityRequest);
RequestsRouter.post('/renameOGRequest', RequestsController.renameOGRequest);
RequestsRouter.post('/renameRoleRequest', RequestsController.renameRoleRequest);
RequestsRouter.post('/editEntityRequest', RequestsController.editEntityRequest);
RequestsRouter.post('/deleteRoleRequest', RequestsController.deleteRoleRequest);
RequestsRouter.post('/deleteOGRequest', RequestsController.deleteOGRequest);
RequestsRouter.post('/disconectRoleFromEntityRequest', RequestsController.disconectRoleFromEntityRequest);



RequestsRouter.delete('/deleteRequest', RequestsController.deleteRequest);


export default RequestsRouter;
