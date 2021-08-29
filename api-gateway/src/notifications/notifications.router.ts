import { Router } from 'express';
import NotificationController from './notifications.controller';

const NotificationRouter: Router = Router();


NotificationRouter.get('/',NotificationController.getMyNotifications);
NotificationRouter.post('/markAsRead', NotificationController.markAsRead);
NotificationRouter.post('/markAllAsRead', NotificationController.markAllAsRead);

export default NotificationRouter;
