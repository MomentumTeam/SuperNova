import { GetDoneRequestsByRoleIdReq, EventArray, GetDoneRequestsByGroupIdReq, GetDoneRequestsByEntityIdReq } from '../interfaces/protoc/proto/historyService';
import { HistoryRepository } from './history.repository';

export class HistoryManager {
  private historyRepository: HistoryRepository;
  constructor() {
    this.historyRepository = new HistoryRepository();
  }

  async getEventsByRoleId(
    getDoneRequestsByRoleIdReq: GetDoneRequestsByRoleIdReq
  ): Promise<EventArray> {
    try {
      return await this.historyRepository.getEventsByRoleId(getDoneRequestsByRoleIdReq);
    } catch (error) {
      throw error;
    }
  }

  async getOGByOGId(
    getDoneRequestsByOGIdReq: GetDoneRequestsByGroupIdReq
  ): Promise<EventArray> {
    try {
      return await this.historyRepository.getOGByOGId(getDoneRequestsByOGIdReq);
    } catch (error) {
      throw error;
    }
  }

  async getEventsByEntityId(
    getDoneRequestsByEntityIdReq: GetDoneRequestsByEntityIdReq
  ): Promise<EventArray> {
    try {
      return await this.historyRepository.getEventsByEntityId(getDoneRequestsByEntityIdReq);
    } catch (error) {
      throw error;
    }
  }

  async getEventsBySubmittedEntityId(
    getDoneRequestsByEntityIdReq: GetDoneRequestsByEntityIdReq
  ): Promise<EventArray> {
    try {
      return await this.historyRepository.getEventsBySubmittedEntityId(getDoneRequestsByEntityIdReq);
    } catch (error) {
      throw error;
    }
  }
}
