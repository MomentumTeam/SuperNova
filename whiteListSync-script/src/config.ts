export const approverServiceUrl = process.env.WLS_APS_URL || '0.0.0.0:8085';
export const authentication = {
  token: process.env.WLS_TOKEN || 'sp-token',
  secret: process.env.WLS_SECRET_KEY || 'superNova',
  authServiceUrl: process.env.WLS_AS_URL || '0.0.0.0:9000',
};
export const hour=process.env.WLS_HOUR || `0`;    //   0-23
export const minute=process.env.WLS_MINUTE || `0`;  //  0-59
