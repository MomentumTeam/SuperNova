export const host = process.env.KS_HOST || '0.0.0.0';

export const port =
  process.env.NODE_ENV === 'production'
    ? '8080'
    : process.env.KS_PORT || '8082';

export const spikeServiceUrl = process.env.KS_SS_URL || '0.0.0.0:8080';

export const devMode = process.env.NODE_ENV
  ? process.env.NODE_ENV === 'development'
  : true;

export const kartoffelUrl =
  process.env.KS_KARTOFFEL_URL || 'http://52.188.158.174:7709';

export const useFaker = process.env.KS_USE_FAKER
  ? process.env.KS_USE_FAKER === 'true'
  : false;

export const kartoffelAudience =
  process.env.KS_KARTOFFEL_AUDIENCE || 'kartoffel';

export const spikeTokenRefreshInHours = process.env.KS_SPIKE_TOKEN_REFRESH_HOURS
  ? parseInt(process.env.KS_SPIKE_TOKEN_REFRESH_HOURS)
  : 24;

export const kartoffelTreeDepth = process.env.KS_TREE_DEPTH
  ? parseInt(process.env.KS_TREE_DEPTH)
  : 3;

export const commanderRanks = process.env.KS_COMMANDER_RANKS
  ? process.env.KS_COMMANDER_RANKS.split(',')
  : ['aaa', 'bbb', 'ccc'];
