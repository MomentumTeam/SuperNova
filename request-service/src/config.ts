export const clientId = process.env.SPIKE_CLIENT_ID || "enter_client_id";
export const clientSecret =
  process.env.SPIKE_CLIENT_SECRET || "enter_client_secret";
export const redisHost = process.env.REDIS_URL || "redis://127.0.0.1:6379";
export const spikeURL =
  process.env.SPIKE_TOKEN_URL ||
  "https://spike.westeurope.cloudapp.azure.com:1337/oauth2/token";
export const spikePubKeyPath =
  process.env.SPIKE_PUBKEY_PATH ||
  "https://spike.westeurope.cloudapp.azure.com:1337/.well-known/publickey.pem";
export const localSpikePublicKeyFullPath =
  process.env.SPIKE_PUBLIC_KEY_FULL_PATH ||
  "/home/barak/Desktop/SuperNova/spike-service/utils/publickey.pem";
export const selfAudience = process.env.AUDIENCE || "kartoffel";
export const grantTypeDef = process.env.GRANT_TYPE || "client_credentials";

export const host = process.env.SS_HOST || "0.0.0.0";
export const port = process.env.SS_PROT || "8080";

export const mongoUrl =
  process.env.MONGO_URL || "mongodb://localhost:27017/supernova";

export const spikeOptions = {
  redisHost: redisHost,
  ClientId: clientId,
  ClientSecret: clientSecret,
  spikeURL: spikeURL,
  tokenGrantType: grantTypeDef,
  tokenAudience: selfAudience,
  spikePublicKeyFullPath: localSpikePublicKeyFullPath,
  useRedis: process.env.USE_REDIS === "true",
  tokenRedisKeyName: "spikeToken",
};
