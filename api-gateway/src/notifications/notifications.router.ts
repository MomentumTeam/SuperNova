import { Router } from 'express';
import NotificationController from './notifications.controller';

const NotificationRouter: Router = Router();

NotificationRouter.post('/markAsRead', NotificationController.markAsRead);

NotificationRouter.post(
  '/getMyNotifications',
  NotificationController.getMyNotifications
);

export default NotificationRouter;
