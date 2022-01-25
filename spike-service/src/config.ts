export const clientId = process.env.SS_SPIKE_CLIENT_ID || 'enter_client_id';
export const clientSecret =
  process.env.SS_SPIKE_CLIENT_SECRET || 'enter_client_secret';
export const redisHost = process.env.SS_REDIS_HOST || '127.0.0.1';
export const redisPort = process.env.SS_REDIS_PORT || '6379';
export const redisPassword = process.env.SS_REDIS_PASSWORD;

export const redisFullUrl = redisPassword
  ? `redis://:${process.env.SS_REDIS_PASSWORD}@${process.env.SS_REDIS_HOST}:${process.env.SS_REDIS_PORT}`
  : `redis://${redisHost}:${redisPort}`;

export const spikeURL =
  process.env.SS_SPIKE_TOKEN_URL ||
  'https://ospike.northeurope.cloudapp.azure.com/oauth2/token';

export const spikePubKeyPath =
  process.env.SS_SPIKE_PUBKEY_PATH ||
  'https://ospike.northeurope.cloudapp.azure.com/.well-known/publickey.pem';

export const localSpikePublicKeyFullPath =
  process.env.SS_SPIKE_PUBLIC_KEY_FULL_PATH ||
  '/home/barak/Desktop/SuperNova/spike-service/src/utils/publickey.pem';

export const kartoffelAudience =
  process.env.SS_KARTOFFEL_AUDIENCE || 'kartoffel';

export const shmuelAudience = process.env.SS_SHMUEL_AUDIENCE || 'shmuel';

export const grantTypeDef = process.env.SS_GRANT_TYPE || 'client_credentials';

export const host = process.env.SS_HOST || '0.0.0.0';
export const port =
  process.env.NODE_ENV === 'production'
    ? '8080'
    : process.env.SS_PORT || '8080';

export const useRedis = process.env.USE_REDIS
  ? process.env.USE_REDIS === 'true'
  : true;

export const sleepBetweenRetries = process.env.SS_SLEEP_BETWEEN_RETRIES
  ? parseInt(process.env.SS_SLEEP_BETWEEN_RETRIES)
  : 1000;
export const retries = process.env.SS_RETRIES_AMOUNT ? parseInt(process.env.SS_RETRIES_AMOUNT) : 3;

export const kartoffelSpikeOptions = {
  redisHost: redisFullUrl,
  ClientId: clientId,
  ClientSecret: clientSecret,
  spikeURL: spikeURL,
  tokenGrantType: grantTypeDef,
  tokenAudience: kartoffelAudience,
  spikePublicKeyFullPath: localSpikePublicKeyFullPath,
  useRedis: useRedis,
  tokenRedisKeyName: "kartoffelSpikeToken",
  retries: retries,
  sleepBetweenRetries: sleepBetweenRetries,
};

export const shmuelSpikeOptions = {
  redisHost: redisFullUrl,
  ClientId: clientId,
  ClientSecret: clientSecret,
  spikeURL: spikeURL,
  tokenGrantType: grantTypeDef,
  tokenAudience: shmuelAudience,
  spikePublicKeyFullPath: localSpikePublicKeyFullPath,
  useRedis: useRedis,
  tokenRedisKeyName: "shmuelSpikeToken",
  retries: retries,
  sleepBetweenRetries: sleepBetweenRetries,
};

export const logPath = process.env.SS_LOG_PATH
  ? `${process.env.SS_LOG_PATH}/spike-service`
  : './logs/spike-service';
export const storeLogs = process.env.GLOBAL_STORE_LOGS
  ? process.env.GLOBAL_STORE_LOGS === 'true'
  : false;
