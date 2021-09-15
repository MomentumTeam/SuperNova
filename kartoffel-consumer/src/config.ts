import * as dotenv from "dotenv";

// KAFKA CONFIGURATION
const kafkaHost = process.env.KC_KAFKA_HOST || '127.0.0.1';
const kafkaPort = process.env.KC_KAFKA_PORT || '9092';

export const kafka = {
    host: kafkaHost,
    port: kafkaPort
};

// CONSUMER CONFIGURATION
const consumerPayloads = [{
    topic: process.env.KC_KAFKA_CONSUMER_TOPIC || 'requests',
    partition: 0
}];

const consumerOptions = { autoCommit: true, fromOffset: true }

export const consumer = {
    payloads: consumerPayloads,
    options: consumerOptions
};

export const kartoffelServiceUrl = process.env.KC_KS_URL || '0.0.0.0:8082';
export const requestServiceUrl = process.env.KC_RS_URL || '0.0.0.0:8081';