import * as env from 'env-var';
import { findPath } from './utils/path';

let spikePubKeyDefault;
try {
  spikePubKeyDefault = `${findPath('spike-service')}/src/utils/publickey.pem`;
} catch (error: any) {
  //docker
  spikePubKeyDefault = '/usr/src/app/spike-utils/publickey.pem';
}

const organizationNumbers = env
  .get('UI_EXTERNAL_ORGANIZATION_NUMBERS')
  .default('8200,8100,8000,7900')
  .asString()
  ?.split(',');

const organizationIds = env
  .get('UI_EXTERNAL_ORGANIZATION_GROUP_IDS')
  .default(
    '619e3210f235dc001846faff,619e3210f235dc001846faff,619e3210f235dc001846faff,619e3210f235dc001846faff'
  )
  .asString()
  ?.split(',');

const organizationNumberToGroupId: any = [];

for (let [index, value] of organizationNumbers.entries()) {
  organizationNumberToGroupId.push({
    orgNumber: value,
    orgId: organizationIds[index],
  });
}

export const config = {
  server: {
    port: env.get('GATEWAY_PORT').default(2000).asPortNumber(),
    host: env.get('GATEWAY_HOST').default('0.0.0.0'),
    name: 'api-gatway',
    healthCheckTimeout: env
      .get('GATEWAY_HEALTH_CHECK_TIMEOUT')
      .default(30000)
      .asIntPositive(),
    healthCheckAllowed: env
      .get('GATEWAY_HEALTH_CHECK_TIMEOUT_ENABLED')
      .default('true')
      .asBool(),
  },
  fields: {
    highCommandersRanks: env
      .get('GATEWAY_HIGH_COMMANDER_RANKS')
      .default('rookie,champion')
      .asArray(),
    rootId: env
      .get('GATEWAY_ROOT_ID')
      .default('619e3193f235dc001846bb4f')
      .asString(),
    grpcPoolSize: env.get('GLOBAL_GRPC_POOL_SIZE').default('3').asInt(),
    groupsWithSecurityAdmin: env
      .get('GATEWAY_GROUPS_WITH_SECURITY_ADMIN')
      .default(
        '61ee8c7af302e80019bba6e4,619e31fef235dc001846f10b,61bb4647e4de0300121de442,619e31f5f235dc001846e872'
      )
      .asArray(),
  },
  endpoints: {
    request: env.get('GATEWAY_RS_URL').default('0.0.0.0:8081').asString(),
    kartoffel: env.get('GATEWAY_KS_URL').default('0.0.0.0:8082').asString(),
    producer: env.get('GATEWAY_PS_URL').default('0.0.0.0:8083').asString(),
    notification: env.get('GATEWAY_NS_URL').default('0.0.0.0:8084').asString(),
    approver: env.get('GATEWAY_APS_URL').default('0.0.0.0:8085').asString(),
    tea: env.get('GATEWAY_TS_URL').default('0.0.0.0:8086').asString(),
    bulk: env.get('GATEWAY_BS_URL').default('0.0.0.0:8087').asString(),
    history: env.get('GATEWAY_HS_URL').default('0.0.0.0:8089').asString(),
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
  ui: {
    TOKEN_NAME: env.get('GATEWAY_TOKEN').default('sp-token').asString(),
    PAGE_SIZE: env.get('UI_REACT_PAGE_SIZE').default(10).asInt(),
    ITEMS_IN_PAGE: env.get('UI_REACT_ITEMS_IN_PAGE').default(6).asInt(),
    FIRST_PAGE: env.get('UI_REACT_FIRST_PAGE').default(0).asInt(),
    USER_CITIZEN_ENTITY_TYPE: env
      .get('UI_USER_CITIZEN_ENTITY_TYPE')
      .default('digimon')
      .asString(),
    USER_EXTERNAL_ENTITY_TYPE: env
      .get('UI_USER_EXTERNAL_ENTITY_TYPE')
      .default('external')
      .asString(),
    USER_CLEARANCE: env
      .get('UI_USER_CLEARANCE')
      .default('1,2,3,4,5,6')
      .asString()
      ?.split(','),
    USER_SOURCE_DI: env.get('UI_USER_SOURCE_DI').default('sf_name').asString(),
    USER_NO_PICTURE: env
      .get('UI_USER_NO_PICTURE_STRING')
      .default('pictureUrl')
      .asString(),
    USER_HIGH_COMMANDER_RANKS: env
      .get('UI_HIGH_COMMANDER_RANKS')
      .default('rookie,champion')
      .asString()
      ?.split(','),
    USER_DI_TYPE: env.get('UI_DI_TYPE').default('domainUser').asString(),
    USER_ROLE_ENTITY_TYPE: env
      .get('UI_ROLE_ENTITY_TYPE')
      .default('goalUser')
      .asString(),
    SECURITY_MAIL: env
      .get('UI_SECURITY_MAIL')
      .default('T82130201@gmail.com')
      .asString(),
    SUPER_SECURITY_MAIL: env
      .get('UI_SUPER_SECURITY_MAIL')
      .default('T02250B49@gmail.com')
      .asString(),
    INSTRUCTION_VIDEOS: env
      .get('UI_INSTRUCTION_VIDEOS')
      .default(
        'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'
      )
      .asString(),
    HI_CHAT_SUPPORT_GROUP_NAME: env
      .get('UI_HI_CHAT_SUPPORT_GROUP_NAME')
      .default('לגו תמיכה')
      .asString(),
    CREATE_ADMIN_APPROVERS: env
      .get('UI_CREATE_ADMIN_APPROVERS')
      .default(
        '61c039d8e4de0300121de45a,61dd539ce4de030012202d5e,619f8aa0e4de0300121dd3f4'
      )
      .asString()
      ?.split(','),
    CREATE_BULK_APPROVERS: env
      .get('UI_CREATE_BULK_APPROVERS')
      .default('61dd539ce4de030012202d5e,619e3a6fe4de0300121d78c7')
      .asString()
      ?.split(','),
    CREATE_SPECIAL_GROUP_APPROVERS: env
      .get('UI_CREATE_SPECIAL_GROUP_APPROVERS')
      .default(
        '61dd539ce4de030012202d5e,619f8aa0e4de0300121dd3f4,619e3a6fe4de0300121d78c7'
      )
      .asString()
      ?.split(','),
    CREATE_SECURITY_ADMIN_APPROVERS: env
      .get('UI_CREATE_SECURITY_ADMIN_APPROVERS')
      .default('61dd539ce4de030012202d5e,619e3a6fe4de0300121d78c7')
      .asString()
      ?.split(','),
    CREATE_SOLDIER_APPROVERS: env
      .get('UI_CREATE_SOLDIER_APPROVERS')
      .default('619e3a6fe4de0300121d78c7,619e406ee4de0300121dc4c8')
      .asString()
      ?.split(','),
    ENTITIES_WITH_VISIBLE_CREATE_EXTERNAL: env
      .get('UI_ENTITIES_WITH_VISIBLE_CREATE_EXTERNAL')
      .default('619e3a6fe4de0300121d78c7,619e406ee4de0300121dc4c8')
      .asString()
      ?.split(','),
    KARTOFFEL_CIVILIAN: env
      .get('UI_KARTOFFEL_CIVILIAN')
      .default('Civilian')
      .asString(),
    KARTOFFEL_SOLDIER: env
      .get('UI_KARTOFFEL_SOLDIER')
      .default('Soldier')
      .asString(),
    KARTOFFEL_WORKER: env
      .get('UI_KARTOFFEL_EXTERNAL')
      .default('Worker')
      .asString(),
    KARTOFFEL_RANKS: env
      .get('UI_KARTOFFEL_RANKS')
      .default('טוראי,רב"ט,סמל,סמ"ר')
      .asString()
      ?.split(','),
    KARTOFFEL_SERVICE_TYPES: env
      .get('UI_KARTOFFEL_SERVICE_TYPES')
      .default('חובה,חובה בתנאי קבע,קבע,מילואים')
      .asString()
      ?.split(','),
    organizationNumbers,
    organizationIds,
    organizationNumberToGroupId,
  },
  logs: {
    storeLogs: env.get('GLOBAL_STORE_LOGS').default('true').asBool(),
    logPath: process.env.GATEWAY_LOG_PATH
      ? `${process.env.GATEWAY_LOG_PATH}/api-gateway`
      : './logs/api-gateway',
  },
};
