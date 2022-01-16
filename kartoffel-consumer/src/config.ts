export const config = {
  consumer: {
    topic: process.env.KC_KAFKA_TOPIC || 'kartoffelprod',
    options: {
      kafkaHost: process.env.KC_KAFKA_HOSTS || '127.0.0.1:9092',
      groupId: process.env.KC_KAFKA_GROUP_ID || 'kafka-kartoffel',
      fromOffset: 'earliest',
      sasl: {
        mechanism: 'plain',
        username: process.env.KC_KAFKA_USERNAME || 'kartoffel',
        password: process.env.KC_KAFKA_PASSWORD || 'password',
      },
    },
  },
  endpoints: {
    kartoffel: process.env.KC_KS_URL || '0.0.0.0:8082',
    request: process.env.KC_RS_URL || '0.0.0.0:8081',
    tea: process.env.KC_TS_URL || '0.0.0.0:8086',
  },
  defaultRoleSource: process.env.KC_DEFAULT_ROLE_SOURCE || 'OneTree',
  defaultDISource: process.env.KC_DEFAULT_DI_SOURCE || 'OneTree',
  diSources: process.env.KC_DI_SOURCES
    ? process.env.KC_DI_SOURCES.split(',')
    : ['OneTree'],
  logPath: process.env.KC_LOG_PATH
    ? `${process.env.KC_LOG_PATH}/kartoffel-consumer`
    : './logs/kartoffel-consumer',
  storeLogs: process.env.GLOBAL_STORE_LOGS
    ? process.env.GLOBAL_STORE_LOGS === 'true'
    : false,
  goalUser: process.env.KC_KARTOFFEL_GOAL_USER || 'GoalUser',
  domainUser: process.env.KC_KARTOFFEL_DOMAIN_USER || 'domainUser',
  civilian: process.env.KC_CIVILIAN || 'Civilian',
  civilianDefaultRank: process.env.KC_CIVILIAN_DEFAULT_RANK || 'לא ידוע',
  sendUPNToKartoffel: process.env.KC_SEND_UPN_TO_KARTOFFEL
    ? process.env.KC_SEND_UPN_TO_KARTOFFEL === 'true'
    : true,
  grpcPoolSize: process.env.GLOBAL_GRPC_POOL_SIZE
    ? parseInt(process.env.GLOBAL_GRPC_POOL_SIZE)
    : 2,
};
