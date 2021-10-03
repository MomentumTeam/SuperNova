import {
  ProduceRequest,
  SuccessMessage,
} from '../interfaces/protoc/proto/producerService';
import {
  Request,
  RequestType,
  requestTypeFromJSON,
  StageStatus,
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
      const requestType: RequestType =
        typeof request.type === typeof ''
          ? requestTypeFromJSON(request.type)
          : request.type;

      if (
        requestType === RequestType.CREATE_ROLE_BULK ||
        requestType === RequestType.CHANGE_ROLE_HIERARCHY_BULK
      ) {
        const requestIds = request.requestIds;
        const promises = requestIds.map((requestId) => {
          return new Promise((resolve, reject) => {
            this.produceToKartoffelQueue({ id: requestId })
              .then(() => {
                resolve(true);
              })
              .catch(() => reject(false));
          });
        });
        try {
          await Promise.all(promises);
          return {
            success: true,
            message:
              'All sub-requests of bulk request were pushed into kartoffel queue successfully',
          };
        } catch (bulkError) {
          return {
            success: false,
            message: 'One or more message were not pushed successfully',
          };
        }
      } else {
        const message = generateKartoffelQueueMessage(request);
        logger.info(
          'produceToKartoffelQueue received request successfully and generated queue message',
          {
            produceRequest,
            message,
            messageStr: JSON.stringify(message),
          }
        );
        await this.producerRepository.pushIntoKartoffelQueue(message);
        await this.requestService.updateKartoffelStatus({
          requestId: produceRequest.id,
          status: StageStatus.STAGE_IN_PROGRESS,
          message: `Pushed into kartoffel queue at ${new Date().toString()}`,
        });
        const response = {
          success: true,
          message: 'Message pushed to Kartoffel queue successfully',
        };

        return response;
      }
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
      const requestType: RequestType =
        typeof request.type === typeof ''
          ? requestTypeFromJSON(request.type)
          : request.type;
      if (
        requestType === RequestType.CREATE_ROLE_BULK ||
        requestType === RequestType.CHANGE_ROLE_HIERARCHY_BULK
      ) {
        const requestIds = request.requestIds;
        const promises = requestIds.map((requestId) => {
          return new Promise((resolve, reject) => {
            this.produceToADQueue({ id: requestId })
              .then(() => {
                resolve(true);
              })
              .catch(() => reject(false));
          });
        });
        try {
          await Promise.all(promises);
          return {
            success: true,
            message:
              'All sub-requests of bulk request were pushed into AD queue successfully',
          };
        } catch (bulkError) {
          return {
            success: false,
            message: 'One or more message were not pushed successfully',
          };
        }
      } else {
        const message = generateADQueueMessage(request);
        logger.info(
          'produceToADQueue received request successfully and generated queue message',
          {
            produceRequest,
            message,
            messageStr: JSON.stringify(message),
          }
        );
        await this.producerRepository.pushIntoADQueue(message);
        await this.requestService.updateADStatus({
          requestId: produceRequest.id,
          status: StageStatus.STAGE_IN_PROGRESS,
          message: `Pushed into AD queue at ${new Date().toString()}`,
        });
        const response = {
          success: true,
          message: 'Message pushed to AD queue successfully',
        };

        return response;
      }
    } catch (error) {
      throw error;
    }
  }
}
