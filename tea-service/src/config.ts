export const host = process.env.TS_HOST || '0.0.0.0';
export const port =
  process.env.NODE_ENV === 'production'
    ? '8080'
    : process.env.TS_PORT || '8086';
export const mongoUrl =
  process.env.NS_MONGO_URL || 'mongodb://127.0.0.1:27017/supernova';
export const soldier = process.env.TS_SOLDIER || 'חייל';
export const reserved = process.env.TS_RESERVED || 'מילואים';
export const civilian = process.env.TS_CIVILIAN || 'אזרח';
export const goalUser = process.env.TS_GOAL_USER || 'תפקידן';
