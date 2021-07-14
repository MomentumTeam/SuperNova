import mongoose from 'mongoose';
import { NotificationType } from '../interfaces/protoc/proto/notificationService';
import { connection } from '../mongoose';
const { Schema } = mongoose;

export const NotificationSchema = new Schema(
  {
    type: {
      type: String,
      enum: NotificationType,
    },
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
    },
    requestId: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
    },
    message: {
      type: String,
      default: null,
    },
    read: {
      type: Boolean,
      default: false,
    },
    createdAt: { type: Number, default: new Date().getTime() },
  },
  { strict: false }
);

export const NotificationModel = connection.model(
  'Notification',
  NotificationSchema,
  'notifications'
);
