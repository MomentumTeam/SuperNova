export const clientId = process.env.SPIKE_CLIENT_ID || 'enter_client_id';
export const clientSecret = process.env.SPIKE_CLIENT_SECRET || 'enter_client_secret';
export const redisHost = process.env.REDIS_URL || '127.0.0.1:6379';
export const spikeURL = process.env.SPIKE_TOKEN_URL || 'https://localhost:1337/oauth2/token';
export const spikePubKeyPath = process.env.SPIKE_PUBKEY_PATH || 'https://spike.westeurope.cloudapp.azure.com:1337/.well-known/publickey.pem';
export const localSpikePublicKeyFullPath = process.env.SPIKE_PUBLIC_KEY_FULL_PATH || '/usr/src/app/utils/publickey.pem';
export const selfAudience = process.env.AUDIENCE || 'drive';
export const grantTypeDef = process.env.GRANT_TYPE || 'client_credentials';

export const host = process.env.SS_HOST || '0.0.0.0';
export const port = process.env.SS_PROT || '8080';