import * as env from "env-var";

export const config = {
  server: {
    port: env.get("SKS_APPLICATION_PORT").default(2001).asPortNumber(),
    name: "socket-service",
  },
  redis: {
    port: env.get("SKS_REDIS_PORT").default(6379).asPortNumber(),
    host: env.get("SKS_REDIS_HOST").default("localhost"),
    password: env.get("SKS_REDIS_PASSWORD").default("mozart"),
  },
  socket: {
    namespaces: {
      notifications: env.get("SKS_NOTIFICATIONS_NAMESPACE").default("/notifications").asString(),
    },
  },
  authorization: {
    secret: env.get("SKS_SECRET_KEY").default("superNova").asString(),
  },
  cors: {
    ui: env.get("SKS_UI_ALLOW_ORIGINS").default("http://localhost:3000").asString(),
  },
  mongo: {
    uri: env.get("SKS_MONGO_URI").default("mongodb://localhost:27017/supernova").asString(),
    connectionRetries: env.get("SKS_MONGO_CONNECTION_RETRIES").default(5).asInt(),
    reconnectTimeout: env.get("SKS_MONGO_RECONNECT_TIMEOUT").default(2000).asInt(),
    collections: {
      notifications: env.get("SKS_MONGO_NOTIFICATION_COLLECTION_NAME").default("notifications").asString(),
    },
  },
};