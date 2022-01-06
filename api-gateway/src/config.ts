import * as env from 'env-var';
import { findPath } from './utils/path';

let spikePubKeyDefault;
try {
  spikePubKeyDefault = `${findPath('spike-service')}/src/utils/publickey.pem`;
} catch (error: any) {
  //docker
  spikePubKeyDefault = '/usr/src/app/spike-utils/publickey.pem';
}

export const config = {
  server: {
    port: env.get('GATEWAY_PORT').default(2000).asPortNumber(),
    host: env.get('GATEWAY_HOST').default('0.0.0.0'),
    name: 'api-gatway',
  },
  fields: {
    highCommandersRanks: env
      .get('GATEWAY_HIGH_COMMANDER_RANKS')
      .default(['rookie', 'champion'])
      .asArray(),
    rootId: env
      .get('GATEWAY_ROOT_ID')
      .default('619e3193f235dc001846bb4f')
      .asString(),
    grpcPoolSize: env.get('GLOBAL_GRPC_POOL_SIZE').default('3').asInt(),
  },
  endpoints: {
    request: env.get('GATEWAY_RS_URL').default('0.0.0.0:8081').asString(),
    kartoffel: env.get('GATEWAY_KS_URL').default('0.0.0.0:8082').asString(),
    producer: env.get('GATEWAY_PS_URL').default('0.0.0.0:8083').asString(),
    notification: env.get('GATEWAY_NS_URL').default('0.0.0.0:8084').asString(),
    approver: env.get('GATEWAY_APS_URL').default('0.0.0.0:8085').asString(),
    tea: env.get('GATEWAY_TS_URL').default('0.0.0.0:8086').asString(),
    bulk: env.get('GATEWAY_BS_URL').default('0.0.0.0:8087').asString(),
    apm: env
      .get('GATEWAY_APM_URL')
      .default('http://52.169.23.32:8200')
      .asString(),
    useApm: env.get('GATEWAY_USE_APM').default('false').asBool(),
    supportLink: env
      .get('GATEWAY_SUPPORT_LINK')
      .default('https://www.lego.com/en-us/service')
      .asString(),
  },
  files: {
    path: env
      .get('GATEWAY_BS_FOLDER_PATH')
      .default('../bulk-service/src/excelFilesExample')
      .asString(),
  },
  authentication: {
    token: env.get('GATEWAY_TOKEN').default('sp-token').asString(),
    secret: env.get('GATEWAY_SECRET_KEY').default('superNova').asString(),
    authServiceUrl: env
      .get('GATEWAY_AS_URL')
      .default('http://localhost:9000')
      .asString(),
    required: env.get('GATEWAY_AUTHENTICATION_REQUIRED').default(1).asBool(),
  },
  spike: {
    audienceId: env
      .get('GATEWAY_SPIKE_AUDIENCE_ID')
      .default('audience')
      .asString(),
    publicKeyPath: env
      .get('GATEWAY_SPIKE_PUBLIC_KEY_FULL_PATH')
      .default(spikePubKeyDefault)
      .asString(),
    writeScopeName: env
      .get('GATEWAY_WRITE_SCOPE_NAME')
      .default('write')
      .asString(),
  },
  logs: {
    storeLogs: env.get('GLOBAL_STORE_LOGS').default('true').asBool(),
    logPath: process.env.GATEWAY_LOG_PATH
      ? `${process.env.GATEWAY_LOG_PATH}/api-gateway`
      : './logs/api-gateway',
  },
};
