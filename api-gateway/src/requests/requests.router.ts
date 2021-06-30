import { Router } from 'express';
import RequestsController from './requests.controller';

const RequestsRouter: Router = Router();
RequestsRouter.get('/ui',RequestsController.ui);

RequestsRouter.get('/abc',RequestsController.getRequestById);
RequestsRouter.get('/getAllRequests/:from/:to',RequestsController.getAllRequests);
RequestsRouter.get('/getRequestsSubmittedBy/:id/:from/:to',RequestsController.getRequestsSubmittedBy);
RequestsRouter.get('/getRequestsByCommander/:id/:from/:to',RequestsController.getRequestsByCommander);
RequestsRouter.put('/updateADStatus', RequestsController.updateADStatus);


export default RequestsRouter;
