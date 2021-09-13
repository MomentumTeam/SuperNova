import Router from 'express';
import KartoffelRouter from './kartoffel/kartoffel.router';
import RequestsRouter from './requests/requests.router';
import NotificationRouter from './notifications/notifications.router';
import ApproverRouter from './approver/approver.router';
import { config } from './config';
// import ProducerRouter from './producer/producer.router';

const mainRouter = Router();

mainRouter.get('/auth/login', (req, res) => {
  res.redirect(`http://${config.authentication.authServiceUrl}/auth/login`);
});

mainRouter.use('/approvers', ApproverRouter);
mainRouter.use('/kartoffel', KartoffelRouter);
mainRouter.use('/requests', RequestsRouter);
mainRouter.use('/notifications', NotificationRouter);

// mainRouter.use('/producer', ProducerRouter);

export default mainRouter;
