export const config = {
    environment: process.env.NODE_ENV || 'production',
    kafka: {
        host: process.env.KC_KAFKA_HOST || '127.0.0.1',
        port: process.env.KC_KAFKA_PORT || '9092',
        options: {
            connection: {
                retries: 10,
            }
        }
    },
    consumer: {
        payloads: [
            {
                topic: process.env.KC_KAFKA_CONSUMER_TOPIC || 'requests',
                partition: 0
            }
        ],
        options: { autoCommit: true, fromOffset: true },
    },
    endpoints: {
        kartoffel: process.env.KC_KS_URL || '0.0.0.0:8082',
        request: process.env.KC_RS_URL || '0.0.0.0:8081',
    },
}; 

// 
// // CONSUMER CONFIGURATION
// const consumerPayloads = [{
//     topic: process.env.KC_KAFKA_CONSUMER_TOPIC || 'requests',
//     partition: 0
// }];
