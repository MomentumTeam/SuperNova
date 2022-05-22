import * as C from '../config';
import {
  aDStageFromJSON,
  ProduceRequest,
  SuccessMessage,
} from '../interfaces/protoc/proto/producerService';
import {
  Request,
  RequestType,
  requestTypeFromJSON,
  requestTypeToJSON,
  StageStatus,
  stageStatusFromJSON,
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
      const force =
        produceRequest.force && produceRequest.force === true ? true : false;
      let kartoffelStatus = request.kartoffelStatus?.status;
      kartoffelStatus =
        typeof kartoffelStatus === typeof ''
          ? stageStatusFromJSON(kartoffelStatus)
          : kartoffelStatus;
      if (
        !force &&
        (kartoffelStatus === StageStatus.STAGE_DONE ||
          kartoffelStatus === StageStatus.STAGE_FAILED ||
          kartoffelStatus === StageStatus.STAGE_IN_PROGRESS)
      ) {
        return { success: true, message: 'No need' };
      }
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
      } else if (requestType === RequestType.ADD_APPROVER) {
        await this.requestService.updateADStatus({
          requestId: produceRequest.id,
          status: StageStatus.STAGE_DONE,
          message: `AD stage is not part of ADD_APPROVER request!`,
        });
        await this.requestService.updateKartoffelStatus({
          requestId: produceRequest.id,
          status: StageStatus.STAGE_DONE,
          message: `Kartoffel stage is not part of ADD_APPROVER request!`,
        });
        return {
          success: true,
          message: 'ADD_APPROVER',
        };
      } else {
        const isRollback: any = produceRequest.isRollback
          ? produceRequest.isRollback
          : undefined;
        const message = generateKartoffelQueueMessage(request, isRollback);
        logger.info(
          `produceToKafkaQueue generated queue message : ${JSON.stringify(
            message
          )}`
        );
        logger.info(
          'produceToKartoffelQueue received request successfully and generated queue message',
          {
            produceRequest,
            message,
            messageStr: JSON.stringify(message),
          }
        );
        await this.producerRepository.pushIntoKartoffelQueue(message);
        logger.info(
          `produceToKartoffelQueue pushed successfully into Kartoffel queue for ${
            produceRequest.id
          }: ${JSON.stringify(message)}`
        );
        await this.requestService.updateKartoffelStatus({
          requestId: produceRequest.id,
          status: StageStatus.STAGE_IN_PROGRESS,
          message: `Pushed into kartoffel queue at ${new Date().toString()}`,
        });
        logger.info(
          `produceToKartoffelQueue successfully updated kartoffelStatus of ${produceRequest.id}`
        );
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
      const submitterId: any = request.submittedBy?.id;
      if (C.restrictADAccess && !C.adAllowedSubmitters.includes(submitterId)) {
        await this.requestService.updateADStatus({
          requestId: produceRequest.id,
          status: StageStatus.STAGE_DONE,
          message: `User ${submitterId} is not AD allowed submitter, AD stage has not been performed`,
        });
        const kartoffelSuccessMessage = await this.produceToKartoffelQueue({
          id: produceRequest.id,
        });
        return kartoffelSuccessMessage;
      }
      const force =
        produceRequest.force && produceRequest.force === true ? true : false;
      let adStatus = request.adStatus?.status;
      adStatus =
        typeof adStatus === typeof ''
          ? stageStatusFromJSON(adStatus)
          : adStatus;
      if (
        !force &&
        (adStatus === StageStatus.STAGE_DONE ||
          adStatus === StageStatus.STAGE_FAILED ||
          adStatus === StageStatus.STAGE_IN_PROGRESS)
      ) {
        return { success: true, message: 'No need' };
      }

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
            this.produceToADQueue({ id: requestId, force: force })
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
      } else if (requestType === RequestType.ADD_APPROVER) {
        await this.requestService.updateADStatus({
          requestId: produceRequest.id,
          status: StageStatus.STAGE_DONE,
          message: `AD stage is not part of ADD_APPROVER request!`,
        });
        await this.requestService.updateKartoffelStatus({
          requestId: produceRequest.id,
          status: StageStatus.STAGE_DONE,
          message: `Kartoffel stage is not part of ADD_APPROVER request!`,
        });
        return {
          success: true,
          message: 'ADD_APPROVER',
        };
      } else if (
        requestType === RequestType.CREATE_ENTITY ||
        requestType === RequestType.DELETE_OG ||
        requestType === RequestType.DELETE_ENTITY
      ) {
        await this.requestService.updateADStatus({
          requestId: produceRequest.id,
          status: StageStatus.STAGE_DONE,
          message: `AD stage is not part of ${requestTypeToJSON(
            requestType
          )} request!`,
        });
        return {
          success: true,
          message: requestTypeToJSON(requestType),
        };
      } else if (
        requestType === RequestType.EDIT_ENTITY &&
        (request.adParams?.samAccountName === undefined ||
          request.adParams?.samAccountName === null)
      ) {
        await this.requestService.updateADStatus({
          requestId: produceRequest.id,
          status: StageStatus.STAGE_DONE,
          message: `Entity does not have samAccountName, ADStage is not required!`,
        });
        const kartoffelSuccessMessage = await this.produceToKartoffelQueue({
          id: produceRequest.id,
        });
        return kartoffelSuccessMessage;
      } else {
        const adStage: any = produceRequest.adStage
          ? produceRequest.adStage
          : undefined;
        const message = generateADQueueMessage(request, adStage);
        logger.info(
          `produceToADQueue generated queue message : ${JSON.stringify(
            message
          )}`
        );
        logger.info(
          'produceToADQueue received request successfully and generated queue message',
          {
            produceRequest,
            message,
            messageStr: JSON.stringify(message),
          }
        );
        await this.producerRepository.pushIntoADQueue(message);
        logger.info(
          `produceToADQueue pushed successfully into AD queue for ${
            produceRequest.id
          }: ${JSON.stringify(message)}`
        );
        await this.requestService.updateADStatus({
          requestId: produceRequest.id,
          status: StageStatus.STAGE_IN_PROGRESS,
          message: `Pushed into AD queue at ${new Date().toString()}`,
        });
        logger.info(
          `produceToADQueue successfully updated adStatus of ${produceRequest.id}`
        );
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
