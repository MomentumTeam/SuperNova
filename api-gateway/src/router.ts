import Router from 'express';
import KartoffelRouter from './kartoffel/kartoffel.router';
import RequestsRouter from './requests/requests.router';
import NotificationRouter from './notifications/notifications.router';
import ApproverRouter from './approver/approver.router';
import BulkRouter from './bulk/bulk.router';

const mainRouter = Router();

mainRouter.use('/approvers', ApproverRouter);
mainRouter.use('/notifications', NotificationRouter);
mainRouter.use('/kartoffel', KartoffelRouter);
mainRouter.use('/requests', RequestsRouter);
mainRouter.use('/bulk', BulkRouter);

export default mainRouter;
