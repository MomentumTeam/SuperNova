export const config = {
  server: {
    port: +(process.env.AS_PORT || 9000),
    name: 'authentication-service',
    endpoint: process.env.AS_ENDPOINT || 'http://localhost:9000/auth',
  },
  cors: {
    allowedOrigins: process.env.AS_ALLOWED_ORIGINS ? process.env.AS_ALLOWED_ORIGINS.split(',') : ['http://localhost/'],
  },
  kartoffel: {
    endpoint: process.env.AS_KARTOFFEL_RPC_ENDPOINT || '0.0.0.0:8082',
    defaultLastName: ' ',
    enrich: process.env.AS_KARTOFFEL_ENRICH || true,
  },
  approver: {
    endpoint: process.env.AS_APS_URL || '0.0.0.0:8085',
    enrich: process.env.AS_APPROVER_ENRICH || true,
  },
  authentication: {
    sessionSecret: process.env.SESSION_SECRET || 'Rand0M-SeSS1ioN-SecREt',
    required: true,
    profileExtractor: {
      id: process.env.AS_PROFILE_EXTRACTOR_ID || 'id',
      mail: process.env.AS_PROFILE_EXTRACTOR_MAIL || 'mail',
      firstName: process.env.AS_PROFILE_EXTRACTOR_FIRST_NAME || 'givenName',
      lastName: process.env.AS_PROFILE_EXTRACTOR_LAST_NAME || 'surName',
      job: process.env.AS_PROFILE_EXTRACTOR_JOB || 'job',
    },
    strategy: process.env.AS_STRATEGY || 'shraga',
    token: process.env.AS_TOKEN || 'sp-token',
    secret: process.env.AS_SECRET_KEY || 'superNova', // TODO: Don't use static value in production! remove from source control!
    daysExpires: +(process.env.AS_TOKEN_DAYS_EXPIRES ||30),
    shraga: {
      callbackURL: process.env.AUTH_CALLBACK_URL || '/auth/callback',
      shragaURL: process.env.AS_SHRAGA_URL || 'https://shraga-prod.northeurope.cloudapp.azure.com',
      useEnrichId: process.env.AS_SHRAGA_USE_ENRICH_ID || true,
    },
    unauthorized: './401/index.html',
  },
  clientEndpoint: process.env.AS_CLIENT_ENDPOINT || 'http://localhost:3000',
  support: process.env.AS_UNAUTHORIZED_SUPPORT_URL || 'https://open.rocket.chat',
  defaultUserTypes: ['COMMANDER'],
};
