import { Router } from 'express';
import NotificationController from './notifications.controller';
import { NotificationValidator } from './notifications.validator';

const NotificationRouter: Router = Router();

// GET
NotificationRouter.get('/', NotificationValidator.isGetMyNotificationsValid, NotificationController.getMyNotifications);

// PUT
NotificationRouter.put('/markAsRead', NotificationValidator.isMarkAsReadValid, NotificationController.markAsRead);
NotificationRouter.put('/markAsRead/all', NotificationController.markAllAsRead);

export default NotificationRouter;