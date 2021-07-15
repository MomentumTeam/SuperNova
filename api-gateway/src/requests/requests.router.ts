import { Router } from 'express';
import RequestsController from './requests.controller';

const RequestsRouter: Router = Router();

RequestsRouter.get('/getMyRequests', RequestsController.getMyRequests);
RequestsRouter.get(
  '/getRequestsAsCommander',
  RequestsController.getRequestsAsCommander
);

RequestsRouter.get('/getRequestById/:id', RequestsController.getRequestById);
RequestsRouter.get('/getAllRequests', RequestsController.getAllRequests);
RequestsRouter.get(
  '/getRequestsSubmittedBy/:id',
  RequestsController.getRequestsSubmittedBy
);
RequestsRouter.get(
  '/getRequestsByCommander/:id',
  RequestsController.getRequestsByCommander
);

RequestsRouter.get('/:id', RequestsController.getRequestById);

RequestsRouter.put('/updateADStatus', RequestsController.updateADStatus);
RequestsRouter.put('/updateRequest', RequestsController.updateRequest);
RequestsRouter.put('/renameOGRequest', RequestsController.renameOGRequest);
RequestsRouter.put('/renameRoleRequest', RequestsController.renameRoleRequest);

RequestsRouter.post('/createOGRequest', RequestsController.createOGRequest);
RequestsRouter.post('/createRoleRequest', RequestsController.createRoleRequest);
RequestsRouter.post(
  '/createEntityRequest',
  RequestsController.createEntityRequest
);
RequestsRouter.post(
  '/assignRoleToEntityRequest',
  RequestsController.assignRoleToEntityRequest
);
RequestsRouter.post('/editEntityRequest', RequestsController.editEntityRequest);
RequestsRouter.post(
  '/disconectRoleFromEntityRequest',
  RequestsController.disconectRoleFromEntityRequest
);

RequestsRouter.delete(
  '/deleteRoleRequest',
  RequestsController.deleteRoleRequest
);
RequestsRouter.delete('/deleteOGRequest', RequestsController.deleteOGRequest);
RequestsRouter.delete('/deleteRequest', RequestsController.deleteRequest);

export default RequestsRouter;
