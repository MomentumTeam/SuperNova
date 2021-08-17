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
  '/home/barak/Desktop/SuperNova/spike-service/src/spikeUtils/publickey.pem';
export const selfAudience = process.env.SS_AUDIENCE || 'kartoffel';
export const grantTypeDef = process.env.SS_GRANT_TYPE || 'client_credentials';

export const host = process.env.SS_HOST || '0.0.0.0';
export const port =
  process.env.NODE_ENV === 'production'
    ? '8080'
    : process.env.SS_PORT || '8080';

export const spikeOptions = {
  redisHost: redisFullUrl,
  ClientId: clientId,
  ClientSecret: clientSecret,
  spikeURL: spikeURL,
  tokenGrantType: grantTypeDef,
  tokenAudience: selfAudience,
  spikePublicKeyFullPath: localSpikePublicKeyFullPath,
  useRedis: process.env.USE_REDIS === 'true',
  tokenRedisKeyName: 'spikeToken',
};
