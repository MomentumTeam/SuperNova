import {
  ProduceRequest,
  SuccessMessage,
} from '../interfaces/protoc/proto/producerService';
import {
  Request,
  RequestType,
} from '../interfaces/protoc/proto/requestService';
import { logger } from '../logger';
import { RequestService } from '../services/request.service';
import {
  generateADQueueMessage,
  generateKartoffelQueueMessage,
} from '../utils/messages';
import { ProducerRepository } from './producer.repository';

export class RequestManager {
  private producerRepository: ProducerRepository;
  private requestService: RequestService;
  constructor() {
    this.producerRepository = new ProducerRepository();
    this.requestService = new RequestService();
  }

  async produceToKartoffelQueue(
    produceRequest: ProduceRequest
  ): Promise<SuccessMessage> {
    try {
      const request: Request = await this.requestService.getRequestById({
        id: produceRequest.id,
      });
      const message = generateKartoffelQueueMessage(request);
      logger.info(
        'produceToKartoffelQueue received request successfully and generated queue message',
        {
          produceRequest,
          request,
          message,
        }
      );
      await this.producerRepository.pushIntoKartoffelQueue(message);
      const response = {
        success: true,
        message: 'Message pushed to Kartoffel queue successfully',
      };

      return response;
    } catch (error) {
      throw error;
    }
  }

  async produceToADQueue(
    produceRequest: ProduceRequest
  ): Promise<SuccessMessage> {
    try {
      const request: Request = await this.requestService.getRequestById({
        id: produceRequest.id,
      });
      const message = generateADQueueMessage(request);
      logger.info(
        'produceToADQueue received request successfully and generated queue message',
        {
          produceRequest,
          request,
          message,
        }
      );
      await this.producerRepository.pushIntoADQueue(message);
      const response = {
        success: true,
        message: 'Message pushed to AD queue successfully',
      };

      return response;
    } catch (error) {
      throw error;
    }
  }
}
