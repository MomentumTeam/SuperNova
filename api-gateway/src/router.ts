import Router from 'express';
import KartoffelRouter from './kartoffel/kartoffel.router';
import RequestsRouter from './requests/requests.router';
import NotificationRouter from './notifications/notifications.router';
import ApproverRouter from './approver/approver.router';
import BulkRouter from './bulk/bulk.router';
import TeaRouter from './tea/tea.router';

const mainRouter = Router();

mainRouter.use('/approvers', ApproverRouter);
mainRouter.use('/notifications', NotificationRouter);
mainRouter.use('/kartoffel', KartoffelRouter);
mainRouter.use('/requests', RequestsRouter);
mainRouter.use('/bulk', BulkRouter);
mainRouter.use('/tea', TeaRouter);

export default mainRouter;
