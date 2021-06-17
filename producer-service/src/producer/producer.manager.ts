import { RequestType } from "../enums/requestService/requestType.enum";
import { IProduceRequest } from "../interfaces/produceRequest.interface";
import { GetRequestByIdReq } from "../interfaces/requestService/getRequestById/getRequestByIdReq.interface";
import { IRequest } from "../interfaces/requestService/request.interface";
import { IADParams } from "../interfaces/requestService/stageParams/adParams.interface";
import { IKartoffelParams } from "../interfaces/requestService/stageParams/kartoffelParams.interface";
import {
  ISuccessMessage,
  SuccessMessage,
} from "../interfaces/successMessage.interface";
import { RequestService } from "../services/request.service";
import { ProducerRepository } from "./producer.repository";

export class RequestManager {
  private producerRepository: ProducerRepository;
  private requestService: RequestService;
  constructor() {
    this.producerRepository = new ProducerRepository();
    this.requestService = new RequestService();
  }

  generateKartoffelQueueMessage(request: IRequest): any {
    const message: any = {
      requestId: request.id,
      type: request.type,
      domain: "domain1",
    };
    const kartoffelParams: IKartoffelParams = request.kartoffelParams;
    switch (request.type) {
      case RequestType.CREATE_OG: {
        message.data = {
          name: kartoffelParams.name,
          parent: kartoffelParams.parent,
          source: kartoffelParams.source,
        };
        break;
      }
      case RequestType.CREATE_ROLE: {
        message.data = {};
        break;
      }
      case RequestType.CREATE_ENTITY: {
        message.data = {};
        break;
      }
      case RequestType.ASSIGN_ROLE_TO_ENTITY: {
        message.data = {};
        break;
      }
      case RequestType.RENAME_OG: {
        message.data = {};
        break;
      }
      case RequestType.RENAME_ROLE: {
        message.data = {};
        break;
      }
      case RequestType.EDIT_ENTITY: {
        message.data = {};
        break;
      }
      case RequestType.DELETE_OG: {
        message.data = {};
        break;
      }
      case RequestType.DELETE_ROLE: {
        message.data = {};
        break;
      }
      case RequestType.DISCONNECT_ROLE: {
        message.data = {};
        break;
      }
    }
    return message;
  }

  generateADQueueMessage(request: IRequest): any {
    const message: any = {
      requestId: request.id,
      type: request.type,
      domain: "domain1",
    };
    const adParams: IADParams = request.adParams;
    switch (request.type) {
      case RequestType.CREATE_OG: {
        message.data = {
          ouDisplayName: adParams.ouDisplayName,
          ouName: adParams.ouName,
          name: adParams.name,
        };
        break;
      }
      case RequestType.CREATE_ROLE: {
        message.data = {};
        break;
      }
      case RequestType.CREATE_ENTITY: {
        message.data = {};
        break;
      }
      case RequestType.ASSIGN_ROLE_TO_ENTITY: {
        message.data = {};
        break;
      }
      case RequestType.RENAME_OG: {
        message.data = {};
        break;
      }
      case RequestType.RENAME_ROLE: {
        message.data = {};
        break;
      }
      case RequestType.EDIT_ENTITY: {
        message.data = {};
        break;
      }
      case RequestType.DELETE_OG: {
        message.data = {};
        break;
      }
      case RequestType.DELETE_ROLE: {
        message.data = {};
        break;
      }
      case RequestType.DISCONNECT_ROLE: {
        message.data = {};
        break;
      }
    }
    return message;
  }

  async produceToKartoffelQueue(
    produceRequest: IProduceRequest
  ): Promise<ISuccessMessage> {
    try {
      const request: IRequest = await this.requestService.getRequestById(
        new GetRequestByIdReq(produceRequest.id)
      );
      const message = this.generateKartoffelQueueMessage(request);
      await this.producerRepository.pushIntoKartoffelQueue(message);

      return new SuccessMessage(
        true,
        "Message pushed to Kartoffel queue successfully"
      );
    } catch (error) {
      throw error;
    }
  }

  async produceToADQueue(
    produceRequest: IProduceRequest
  ): Promise<ISuccessMessage> {
    try {
      const request: IRequest = await this.requestService.getRequestById(
        new GetRequestByIdReq(produceRequest.id)
      );
      const message = this.generateADQueueMessage(request);
      await this.producerRepository.pushIntoADQueue(message);

      return new SuccessMessage(
        true,
        "Message pushed to AD queue successfully"
      );
    } catch (error) {
      throw error;
    }
  }
}
