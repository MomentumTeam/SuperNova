import { ConsumerGroup, ConsumerGroupOptions } from 'kafka-node';
import { findPath } from './utils/path';
if (process.env.NODE_ENV !== 'production') {
  const ENV_PATH = findPath('supernova.env');
  require('dotenv').config({ path: ENV_PATH });
}
import { requestProcessor } from './consumer/consumer.processor';
import { logger } from './utils/logger';
import { config } from './config';

const commit = (consumer: ConsumerGroup) => {
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
const startConsumer = async () => {
  const options: ConsumerGroupOptions = {
    kafkaHost: config.consumer.options.kafkaHost,
    sasl: config.consumer.options.sasl,
    groupId: config.consumer.options.groupId,
    fromOffset: 'earliest',
  };
  const consumerGroup = new ConsumerGroup(options, [config.consumer.topic]);

  consumerGroup.on('error', function (error) {
    logger.error('Consumer error', { error: { message: error.message } });
  });

  consumerGroup.on('offsetOutOfRange', function (error) {
    logger.error('offsetOutOfRange error', {
      error: { message: error.message },
    });
  });

  consumerGroup.on('message', async function (incomingRequest) {
    try {
      logger.info('Received a message from Kafka', incomingRequest);
      await requestProcessor(incomingRequest);
      await commit(consumerGroup);
    } catch (error: any) {
      logger.error('Error while receiving a message from Kafka', {
        error: { message: error.message },
      });
    }
  });
};

const main = async () => {
  try {
    await startConsumer();
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
