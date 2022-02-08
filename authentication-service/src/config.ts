import * as env from 'env-var';
import {
  ApproverType,
  approverTypeToJSON,
} from './interfaces/protoc/proto/requestService';

const useShragaLocalMap = env
  .get('AS_USE_SHRAGA_LOCAL_MAP')
  .default('true')
  .asBool();

let diToId: any = {}; // for user1,user2,user3

if (useShragaLocalMap) {
  const idArray = process.env.AS_SHRAGA_LOCAL_MAP_IDS
    ? process.env.AS_SHRAGA_LOCAL_MAP_IDS.split(',')
    : [
        '619e3a6fe4de0300121d78c7',
        '619e406ee4de0300121dc4c8',
        '619e42b6e4de0300121dc4e3',
      ];

  const diArray = process.env.AS_SHRAGA_LOCAL_MAP_DIS
    ? process.env.AS_SHRAGA_LOCAL_MAP_DIS.split(',')
    : ['t23458789@jello.com', 't25458789@jello.com', 't25458711@jello.com'];
  for (let i = 0; i < idArray.length; i++) {
    diToId[diArray[i]] = idArray[i];
  }
}

export const config: any = {
  server: {
    port: +(process.env.AS_PORT || 9000),
    name: "authentication-service",
    endpoint: process.env.AS_ENDPOINT || "http://localhost:9000/auth",
  },
  cors: {
    allowedOrigins: process.env.AS_ALLOWED_ORIGINS ? process.env.AS_ALLOWED_ORIGINS.split(",") : ["http://localhost/"],
  },
  kartoffel: {
    endpoint: process.env.AS_KS_URL || "0.0.0.0:8082",
    defaultLastName: " ",
    enrich: env.get("AS_KARTOFFEL_ENRICH").default("false").asBool(),
    timeout: env.get("AS_KARTOFFEL_TIMEOUT").default(30000).asIntPositive(),
    timeoutEnabled: env.get("AS_KARTOFFEL_TIMEOUT_ENABLED").default("true").asBool()
  },
  approver: {
    endpoint: process.env.AS_APS_URL || "0.0.0.0:8085",
    enrich: env.get("AS_APPROVER_ENRICH").default("true").asBool(),
  },
  authentication: {
    sessionSecret: process.env.SESSION_SECRET || "Rand0M-SeSS1ioN-SecREt",
    required: true,
    profileExtractor: {
      id: process.env.AS_PROFILE_EXTRACTOR_ID || "id",
      mail: process.env.AS_PROFILE_EXTRACTOR_MAIL || "mail",
      firstName: process.env.AS_PROFILE_EXTRACTOR_FIRST_NAME || "givenName",
      lastName: process.env.AS_PROFILE_EXTRACTOR_LAST_NAME || "surName",
      job: process.env.AS_PROFILE_EXTRACTOR_JOB || "job",
    },
    strategy: process.env.AS_STRATEGY || "shraga",
    token: process.env.AS_TOKEN || "sp-token",
    secret: process.env.AS_SECRET_KEY || "superNova", // TODO: Don't use static value in production! remove from source control!
    daysExpires: +(process.env.AS_TOKEN_DAYS_EXPIRES || 30),
    shraga: {
      callbackURL: process.env.AUTH_CALLBACK_URL || "/auth/callback",
      shragaURL: process.env.AS_SHRAGA_URL || "https://shraga.shraga.branch-yesodot.org",
      useEnrichId: process.env.AS_SHRAGA_USE_ENRICH_ID || true,
    },
    useShragaLocalMap: useShragaLocalMap,
    diToId: diToId,
    unauthorized: "./401/index.html",
    getEntityByAdfsId: env.get("AS_GET_ENTITY_BY_ADFS_ID").default("false").asBool()
  },
  clientEndpoint: process.env.AS_CLIENT_ENDPOINT || "http://localhost:3000",
  support: process.env.AS_UNAUTHORIZED_SUPPORT_URL || "https://open.rocket.chat",
  defaultUserTypes: [approverTypeToJSON(ApproverType.SOLDIER)],
  logPath: process.env.AS_LOG_PATH
    ? `${process.env.AS_LOG_PATH}/authentication-service`
    : "./logs/authentication-service",
  storeLogs: process.env.GLOBAL_STORE_LOGS ? process.env.GLOBAL_STORE_LOGS === "true" : false,
};
