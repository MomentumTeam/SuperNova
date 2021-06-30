export const host = process.env.RS_HOST || "0.0.0.0";
export const port = process.env.RS_PORT || "2000";
export const kartoffelUrl = process.env.KS_KARTOFFEL_URL || "0.0.0.0:5000";
export const requestServiceUrl = process.env.RS_HOST || "0.0.0.0:8081";
export const producerUrl = process.env.PS_URL || "0.0.0.0:6000";
export const authentication = {
    token: process.env.TOKEN || 'sp-token',
    secret: process.env.SECRET_KEY || 'superNova',
    authServiceUrl: process.env.SECRET_KEY || '0.0.0.0:9000',
    
}
