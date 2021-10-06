import kafka from 'kafka-node';
import { findPath } from './utils/path';
import { requestProcessor } from './consumer/consumer.processor';
import { logger } from './utils/logger';
import { config } from './config';

if (config.environment !== 'production') {
  const ENV_PATH = findPath('supernova.env');
  require('dotenv').config({ path: ENV_PATH });
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

const createTopics = async (client: kafka.KafkaClient) => {
  client.createTopics(config.consumer.topics, (error, result) => {
    error ? logger.error(error) : logger.info(result);
  });
};

const offsetInit = async (
  client: kafka.KafkaClient,
  consumer: kafka.Consumer
) => {
  const offset = new kafka.Offset(client);

  config.consumer.topics.map(async (topic) => {
    offset.fetchLatestOffsets([topic.topic], (error, offsets) => {
      if (error) {
        logger.error('error in getting lastest offset', error);
      } else {
        const latestOffset = offsets[topic.topic][0];
        logger.info(
          `Kafka consumer, topic: ${topic.topic} latest offset: ${latestOffset}`
        );
        consumer.setOffset(topic.topic, 0, latestOffset);
      }
    });
  });
};

// Consumer init
const startConsumer = async (client: kafka.KafkaClient) => {
  await createTopics(client);
  const consumer = new kafka.Consumer(
    client,
    config.consumer.topics.map((topic) => {
      return { topic: topic.topic, partition: config.consumer.partition };
    }),
    config.consumer.options
  );

  // set offset
  await offsetInit(client, consumer);

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
      consumer.commit((err, data) => logger.error(err, data));
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
