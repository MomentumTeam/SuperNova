import Router from 'express';
import KartoffelRouter from './kartoffel/kartoffel.router';
import RequestsRouter from './requests/requests.router';
import ProducerRouter from './producer/producer.router';
import NotificationRouter from './notifications/notifications.router';
import ApproverRouter from './approver/approver.router';

const mainRouter = Router();

mainRouter.use('/kartoffel', KartoffelRouter);
mainRouter.use('/requests', RequestsRouter);
mainRouter.use('/producer', ProducerRouter);
mainRouter.use('/notifications', NotificationRouter);
mainRouter.use('/approver', ApproverRouter);

export default mainRouter;
