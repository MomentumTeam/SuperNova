import * as env from 'env-var';

export const config = {
    server: {
        port: env.get('GATEWAY_PORT').default(2000).asPortNumber(),
        host: env.get('GATEWAY_HOST').default('0.0.0.0'),
        name: 'api-gatway',
    },
    endpoints: {
        kartoffel: env.get('GATEWAY_KS_URL').default('0.0.0.0:8082').asString(),
        request: env.get('GATEWAY_RS_URL').default('0.0.0.0:8081').asString(),
        producer: env.get('GATEWAY_PS_URL').default('0.0.0.0:8083').asString(),
        notification: env.get('GATEWAY_NS_URL').default('0.0.0.0:8084').asString(),
        approver: env.get('GATEWAY_APS_URL').default('0.0.0.0:8085').asString(),
        bulk: env.get('GATEWAY_BS_URL').default('0.0.0.0:8087').asString(),
    },
    files: {
        path: env.get('GATEWAY_BS_FOLDER_PATH').default('../bulk-files/').asString(),
    },
    authentication: {
        token: env.get('GATEWAY_TOKEN').default('sp-token').asString(),
        secret: env.get('GATEWAY_SECRET_KEY').default('superNova').asString(),
        authServiceUrl: env.get('GATEWAY_AS_URL').default('0.0.0.0:9000').asString(),
        required: env.get('GATEWAY_AUTHENTICATION_REQUIRED').default(1).asBool(),
    },
};
