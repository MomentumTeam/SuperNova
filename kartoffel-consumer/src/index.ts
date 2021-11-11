import kafka from 'kafka-node';
import { findPath } from './utils/path';
if (process.env.NODE_ENV !== 'production') {
  const ENV_PATH = findPath('supernova.env');
  require('dotenv').config({ path: ENV_PATH });
}

import { requestProcessor } from './consumer/consumer.processor';
import { logger } from './utils/logger';
import { config } from './config';

// Kafka connection init
const connectToKafka = async () => {
  try {
    const kafkaClientInit: any = {
      kafkaHost: `${config.kafka.host}:${config.kafka.port}`,
      connectRetryOptions: { retries: config.kafka.options.connection.retries },
      reconnectOnIdle: true,
    };
    const client = new kafka.KafkaClient(kafkaClientInit);

    client.on('ready', () =>
      logger.info('Kafka client is ready!', kafkaClientInit)
    );
    return client;
  } catch (error) {
    throw error;
  }
};

const createTopics = (client: kafka.KafkaClient) => {
  return new Promise((resolve, reject) => {
    client.createTopics(config.consumer.topics, (error, result) => {
      if (error) {
        logger.error('Error while trying to create topics', {
          error: { message: error.message },
        });
        reject(error);
      } else {
        logger.info('Topics were created successfuly in Kafka');
        resolve(result);
      }
    });
  });
};

const offsetInit = (client: kafka.KafkaClient, consumer: kafka.Consumer) => {
  return new Promise((resolve, reject) => {
    const offset = new kafka.Offset(client);
    let promises = [];
    for (let topic of config.consumer.topics) {
      promises.push(
        new Promise((topicResolve, topicReject) => {
          offset.fetchLatestOffsets([topic.topic], (error, offsets) => {
            if (error) {
              logger.error('Error in getting latest offset', {
                error: { message: error.message },
              });
              topicReject(error);
            } else {
              const latestOffset = offsets[topic.topic][0];
              logger.info(
                `Kafka consumer, topic: ${topic.topic} latest offset: ${latestOffset}`
              );
              consumer.setOffset(topic.topic, 0, latestOffset);
              topicResolve(offsets);
            }
          });
        })
      );
    }
    Promise.all(promises)
      .then((values) => {
        resolve(values);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const commit = (consumer: kafka.Consumer) => {
  return new Promise((resolve, reject) => {
    consumer.commit((error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
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

  consumer.on('error', function (error) {
    logger.error('Consumer error', { error: { message: error.message } });
  });

  consumer.on('offsetOutOfRange', function (error) {
    logger.error('offsetOutOfRange error', {
      error: { message: error.message },
    });
  });

  consumer.on('message', async function (incomingRequest) {
    try {
      logger.info('Received a message from Kafka', incomingRequest);
      await requestProcessor(incomingRequest);
      await commit(consumer);
    } catch (error: any) {
      logger.error('Error while receiving a message from Kafka', {
        error: { message: error.message },
      });
    }
  });
};

const main = async () => {
  try {
    let kafkaClient = await connectToKafka();
    await startConsumer(kafkaClient);
  } catch (error) {
    throw error;
  }
};

main()
  .then(() => {
    logger.info('kafka-consumer started successfuly!');
  })
  .catch((error) => {
    logger.error('Error while starting kartoffel-consumer', {
      error: { message: error.message },
    });
  });
