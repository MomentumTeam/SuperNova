import { IProduceRequest } from "../interfaces/produceRequest.interface";
import { GetRequestByIdReq } from "../interfaces/requestService/getRequestById/getRequestByIdReq.interface";
import { IRequest } from "../interfaces/requestService/request.interface";
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

  async produceToKartoffelQueue(
    produceRequest: IProduceRequest
  ): Promise<ISuccessMessage> {
    try {
      const request: IRequest = await this.requestService.getRequestById(
        new GetRequestByIdReq(produceRequest.id)
      );
      return new SuccessMessage(true);
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
      return new SuccessMessage(true);
    } catch (error) {
      throw error;
    }
  }
}
