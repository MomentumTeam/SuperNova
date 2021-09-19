import Router from 'express';
import KartoffelRouter from './kartoffel/kartoffel.router';
import RequestsRouter from './requests/requests.router';
import NotificationRouter from './notifications/notifications.router';
import ApproverRouter from './approver/approver.router';
import { config } from './config';

const mainRouter = Router();

mainRouter.get('/auth/login', (req, res) => {
  res.redirect(`http://${config.authentication.authServiceUrl}/auth/login`);
});

mainRouter.use('/approvers', ApproverRouter);
mainRouter.use('/notifications', NotificationRouter);
mainRouter.use('/kartoffel', KartoffelRouter);
mainRouter.use('/requests', RequestsRouter);

export default mainRouter;
