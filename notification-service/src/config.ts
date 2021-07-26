export const host = process.env.NS_HOST || '0.0.0.0';
export const port =
  process.env.NODE_ENV === 'production'
    ? '8080'
    : process.env.NS_PORT || '8084';

export const mongoUrl =
  process.env.NS_MONGO_URL || 'mongodb://127.0.0.1:27017/supernova';
