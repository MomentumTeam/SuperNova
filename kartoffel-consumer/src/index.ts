import kafka from 'kafka-node';
import { findPath } from './utils/path';
import { requestProcessor } from './consumer/consumer.processor';
import { logger } from './utils/logger';
import { config } from './config';

if (config.environment !== 'production') {
  const ENV_PATH = findPath('supernova.env');
  require('dotenv').config({path: ENV_PATH });
}

// Kafka connection init 
const connectToKafka = async () => {
  const client = new kafka.KafkaClient({
      kafkaHost: `${config.kafka.host}:${config.kafka.port}`,
      connectRetryOptions: { retries: config.kafka.options.connection.retries },
      reconnectOnIdle: true,
  });

  client.on('ready', () => logger.info('Kafka client is ready!'));
  return client;
};

// Consumer init
const startConsumer = async (client: kafka.KafkaClient) => {
  let consumer = new kafka.Consumer(
    client,
    config.consumer.payloads,
    config.consumer.options
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
