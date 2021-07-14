export const host = process.env.GATEWAY_HOST || '0.0.0.0';
export const port = process.env.GATEWAY_PORT || '2000';
export const kartoffelUrl = process.env.GATEWAY_KS_URL || '0.0.0.0:8082';
export const requestServiceUrl = process.env.GATEWAY_RS_URL || '0.0.0.0:8081';
export const producerUrl = process.env.GATEWAY_PS_URL || '0.0.0.0:8083';
export const notificationsUrl = process.env.GATEWAY_NS_URL || '0.0.0.0:8084';
export const authentication = {
  token: process.env.GATEWAY_TOKEN || 'sp-token',
  secret: process.env.GATEWAY_SECRET_KEY || 'superNova',
  authServiceUrl: process.env.GATEWAY_AS_URL || '0.0.0.0:9000',
};
