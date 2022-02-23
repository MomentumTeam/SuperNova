import * as env from "env-var";

export const config = {
  server: {
    port: env.get("SKS_APPLICATION_PORT").default(2001).asPortNumber(),
    name: "socket-service",
  },
  approver: {
    endpoint: env.get("SKS_APS_URL").default("0.0.0.0:8085").asString(),
  },
  redis: {
    enabled: env.get("SKS_REDIS_ENABLED").default("true").asBool(),
    port: env.get("SKS_REDIS_PORT").default(6379).asPortNumber(),
    host: env.get("SKS_REDIS_HOST").default("localhost").asString(),
    password: env.get("SKS_REDIS_PASSWORD").default("mozart").asString(),
  },
  socket: {
    rooms: {
      security: env.get("SKS_SECURITY_ROOM").default("security").asString(),
      superSecurity: env.get("SKS_SUPER_SECURITY_ROOM").default("super_security").asString(),
    },
  },
  authorization: {
    secret: env.get("SKS_SECRET_KEY").default("superNova").asString(),
  },
  cors: {
    ui: env.get("SKS_UI_ALLOW_ORIGINS").default("http://localhost:3000").asString(),
  },
  mongo: {
    uri: env.get("SKS_MONGO_URI").default("mongodb://localhost:27017/supernova?replicaSet=rs0").asString(),
    connectionRetries: env.get("SKS_MONGO_CONNECTION_RETRIES").default(5).asInt(),
    reconnectTimeout: env.get("SKS_MONGO_RECONNECT_TIMEOUT").default(2000).asInt(),
    collections: {
      notifications: env.get("SKS_MONGO_NOTIFICATION_COLLECTION_NAME").default("notifications").asString(),
      requests: env.get("SKS_MONGO_REQUEST_COLLECTION_NAME").default("requests").asString(),
    },
  },
};