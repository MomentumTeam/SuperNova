const grpcHealth = require('grpc-js-health-check');
import * as grpc from '@grpc/grpc-js';
import { HealthRepository } from './health/health.repository';
import { KartoffelUtils } from './utils/kartoffel.utils';
const serviceNames: string[] = ['', 'Kartoffel.Kartoffel'];

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

const kartoffelUtils: KartoffelUtils = new KartoffelUtils();
const healthRepository: HealthRepository = new HealthRepository(kartoffelUtils);
export async function checkHealthStatusKartoffel() {
  const healthResponse = await healthRepository.GetIsHealthy();
  setHealthStatus(healthResponse.isHealthy ? grpcHealth.servingStatus.SERVING : grpcHealth.servingStatus.NOT_SERVING);
}
