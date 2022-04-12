export const mongoUrl =
  process.env.OS_MONGO_URL || 'mongodb://127.0.0.1:27017/supernova';

export const maxQueueRetries = process.env.RS_MAX_QUEUE_RETRIES
  ? parseInt(process.env.RS_MAX_QUEUE_RETRIES)
  : 5;

export const mongoConnectionRetries =
  process.env.MONGO_RECONNECT_ATTEMPTS || '5';

export const mongoReconnectTimeout =
  process.env.MONGO_RECONNECT_TIMEOUT || '2000';

export const defaultOptions = {
  toggleProfilePicture: true,
  getMailNotifications: true,
  showPhoneNumber: true,
  favoriteCommanders: []
};