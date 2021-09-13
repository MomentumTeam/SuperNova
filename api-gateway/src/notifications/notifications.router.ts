import { Router } from 'express';
import NotificationController from './notifications.controller';

const NotificationRouter: Router = Router();

// GET
NotificationRouter.get('/',NotificationController.getMyNotifications);

// POST
NotificationRouter.post('/', NotificationController.createNotifications);
NotificationRouter.post('/custom', NotificationController.createCustomNotifications);

// PUT
NotificationRouter.put('/markAsRead', NotificationController.markAsRead);
NotificationRouter.put('/markAsRead/all', NotificationController.markAllAsRead);

export default NotificationRouter;
