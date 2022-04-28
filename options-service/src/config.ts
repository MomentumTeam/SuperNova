import * as env from 'env-var';

export const host = env
  .get('OS_HOST')
  .default('0.0.0.0')
  .asString();

export const port = env
  .get('NODE_ENV').asString() === 'production' ?
  '8080'
  : env.get('OS_PORT')
    .default('8088');

export const mongoUrl = env
  .get('OS_MONGO_URL')
  .default('mongodb://127.0.0.1:27017/supernova')
  .asString();

export const maxQueueRetries = env
  .get('OS_MAX_QUEUE_RETRIES')
  .default('5')
  .asIntPositive();

export const mongoConnectionRetries = env
  .get('MONGO_RECONNECT_ATTEMPTS')
  .default('5')
  .asString();

export const mongoReconnectTimeout = env
  .get('MONGO_RECONNECT_TIMEOUT')
  .default('2000')
  .asString();

export const defaultOptions = {
  toggleProfilePicture: env
    .get('OS_TOGGLE_PROFILE_PICTURE')
    .default('true')
    .asBool(),
  getMailNotifications: env
    .get('OS_TOGGLE_MAIL_NOTIFICATIONS')
    .default('true')
    .asBool(),
  showPhoneNumber: env
    .get('OS_TOGGLE_PHONE_NUMBER')
    .default('true')
    .asBool(),
  favoriteCommanders: []
};