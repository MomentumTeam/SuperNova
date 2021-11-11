const grpcHealth = require('grpc-js-health-check');
import * as grpc from '@grpc/grpc-js';
const serviceNames: string[] = ['', 'NotificationService.NotificationService'];

export const healthCheckStatusMap = {
  '': grpcHealth.servingStatus.UNKNOWN,
  serviceName: grpcHealth.servingStatus.UNKNOWN,
};

const grpcHealthCheck = new grpcHealth.Implementation(healthCheckStatusMap);

export function addHealthService(server: grpc.Server): grpc.Server {
  server.addService(grpcHealth.service, grpcHealthCheck);
  return server;
}

export function setHealthStatus(status: number): void {
  for (let i = 0; i < serviceNames.length; i++) {
    grpcHealthCheck.setStatus(serviceNames[i], status);
  }
}
