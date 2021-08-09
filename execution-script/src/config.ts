export const requestServiceUrl = process.env.EXS_RS_URL || '0.0.0.0:8081';
export const producerUrl = process.env.EXS_PS_URL || '0.0.0.0:8083';
export const authentication = {
  token: process.env.EXS_TOKEN || 'sp-token',
  secret: process.env.EXS_SECRET_KEY || 'superNova',
  authServiceUrl: process.env.EXS_AS_URL || '0.0.0.0:9000',
};

export const everyHour = process.env.EXS_EVERY_HOUR || '1';


