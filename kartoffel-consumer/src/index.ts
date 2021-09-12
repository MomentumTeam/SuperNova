import kafka from 'kafka-node';
import * as C from './config';
import { findPath } from './utils/path';
import { requestProcessor } from './requestsProcessor';
import { logger } from './logger';

if (process.env.NODE_ENV !== 'production') {
  const ENV_PATH = findPath('supernova.env');
  require('dotenv').config({
    path: ENV_PATH,
  });
}

const connectToKafka = async () => {
  let client = new kafka.KafkaClient({
    kafkaHost: `${C.kafka.host}:${C.kafka.port}`,
  });

  client.on('ready', function () {
    logger.info('Kafka client ready!');
  });

  return client;
};

const startConsumer = async (client: kafka.KafkaClient) => {
  let consumer = new kafka.Consumer(
    client,
    C.consumer.payloads,
    C.consumer.options
  );

  consumer.on('error', function (err) {
    logger.error('Kafka Error: Consumer - ' + err);
  });

  consumer.on('offsetOutOfRange', function (err) {
    logger.error('Kafka offsetOutOfRange: ' + err);
  });

  consumer.on('message', function (incomingRequest) {
    logger.info('Received message from kafka -', incomingRequest);
    try {
      requestProcessor(incomingRequest);
    } catch (err) {
      logger.error(err);
    }
  });
};

const main = async () => {
  let kafkaClient = await connectToKafka();

  await startConsumer(kafkaClient);
};

main().catch((err) => console.error(err));
