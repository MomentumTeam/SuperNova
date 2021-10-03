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

const offsetInit = async (client: kafka.KafkaClient, consumer: kafka.Consumer) => {
  const offset = new kafka.Offset(client);

  offset.fetchLatestOffsets([config.consumer.topic], (error, offsets) => {
    if (error) {
      logger.error('error in getting lastest offset', error);
    } else {
      const latestOffset = offsets[config.consumer.topic][0];
      logger.info(`Kafka consumer latest offset: ${latestOffset}`)
      consumer.setOffset(config.consumer.topic, 0, latestOffset);
    }
  });
}

// Consumer init
const startConsumer = async (client: kafka.KafkaClient) => {
  const consumer = new kafka.Consumer(
    client,
    [{topic: config.consumer.topic, partition: config.consumer.partition}],
    config.consumer.options
  );

  // set offset
  offsetInit(client, consumer);

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
      consumer.commit((err, data) => console.log(err, data));
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
