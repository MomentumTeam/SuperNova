import mongoose from 'mongoose';
import { HealthCheckResponse } from 'grpc-ts-health-check';
import * as C from './config';
import { setHealthStatus } from './health';
export const connection = mongoose.createConnection(C.mongoUrl, {
  keepAlive: true,
  keepAliveInitialDelay: 300000,
});

connection.on('connected', () => {
  setHealthStatus(HealthCheckResponse.ServingStatus.SERVING);
});

connection.on('error', (err) => {
  setHealthStatus(HealthCheckResponse.ServingStatus.NOT_SERVING);
});

connection.on('disconnected', () => {
  setHealthStatus(HealthCheckResponse.ServingStatus.NOT_SERVING);
});
