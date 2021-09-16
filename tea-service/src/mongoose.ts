import mongoose from 'mongoose';
import * as C from './config';
export const connection = mongoose.createConnection(C.mongoUrl, {
  keepAlive: true,
  keepAliveInitialDelay: 300000,
});
