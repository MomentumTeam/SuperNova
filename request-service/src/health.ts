import {
  GrpcHealthCheck,
  HealthCheckResponse,
  HealthService,
} from 'grpc-ts-health-check';
import * as grpc from 'grpc';
const serviceNames: string[] = ['', 'NotificationService.NotificationService'];

export const healthCheckStatusMap = {
  '': HealthCheckResponse.ServingStatus.UNKNOWN,
  serviceName: HealthCheckResponse.ServingStatus.UNKNOWN,
};

const grpcHealthCheck = new GrpcHealthCheck(healthCheckStatusMap);

export function addHealthService(server: grpc.Server): grpc.Server {
  server.addService(HealthService, grpcHealthCheck);
  return server;
}

export function setHealthStatus(status: number): void {
  for (let i = 0; i < serviceNames.length; i++) {
    grpcHealthCheck.setStatus(serviceNames[i], status);
  }
}
