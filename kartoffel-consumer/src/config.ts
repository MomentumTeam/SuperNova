export const config = {
  environment: process.env.NODE_ENV || 'production',
  kafka: {
    host: process.env.KC_KAFKA_HOST || '127.0.0.1',
    port: process.env.KC_KAFKA_PORT || '9092',
    options: {
      connection: {
        retries: 10,
      },
    },
  },
  consumer: {
    topics: [
      {
        topic: process.env.KC_KAFKA_CONSUMER_TOPIC || 'requests',
        partitions: 1,
        replicationFactor: 1,
      },
    ],
    partition: 0,
    options: { autoCommit: false },
  },
  endpoints: {
    kartoffel: process.env.KC_KS_URL || '0.0.0.0:8082',
    request: process.env.KC_RS_URL || '0.0.0.0:8081',
    tea: process.env.KC_TS_URL || '0.0.0.0:8086',
  },
  logPath: process.env.KC_LOG_PATH || './logs',
  storeLogs: process.env.GLOBAL_STORE_LOGS
    ? process.env.GLOBAL_STORE_LOGS === 'true'
    : false,
};
