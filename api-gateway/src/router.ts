import { config } from './config';
import Router from 'express';
import KartoffelRouter from './kartoffel/kartoffel.router';
import RequestsRouter from './requests/requests.router';
import NotificationRouter from './notifications/notifications.router';
import ApproverRouter from './approver/approver.router';
import BulkRouter from './bulk/bulk.router';
import OptionsRouter from './options/options.router';

const mainRouter = Router();

mainRouter.use('/approvers', ApproverRouter);
mainRouter.use('/notifications', NotificationRouter);
mainRouter.use('/kartoffel', KartoffelRouter);
mainRouter.use('/requests', RequestsRouter);
mainRouter.use('/bulk', BulkRouter);
mainRouter.use('/options', OptionsRouter);
mainRouter.get("/config", (req, res) =>res.send(config.ui));

export default mainRouter;
