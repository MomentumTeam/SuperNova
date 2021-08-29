import {
  CreateDIRequest,
  DigitalIdentities,
  GetAllDIsRequest,
  DigitalIdentity,
  GetDIByRoleIdRequest,
  SearchDIOrUniqueIdRequest,
  SuccessMessage,
  DeleteDIRequest,
  GetDIByUniqueIdRequest,
  UpdateDIRequest,
} from '../interfaces/protoc/proto/kartoffelService';
import { KartoffelFaker } from '../mock/kartoffel.faker';
import { KartoffelUtils } from '../utils/kartoffel.utils';
import { DiRepository } from './di.repository';

export class DiManager {
  private diRepository: DiRepository;
  constructor(kartoffelUtils: KartoffelUtils, kartoffelFaker: KartoffelFaker) {
    this.diRepository = new DiRepository(kartoffelUtils, kartoffelFaker);
  }

  async getAllDIs(
    getAllDIsRequest: GetAllDIsRequest
  ): Promise<DigitalIdentities> {
    try {
      return await this.diRepository.getAllDIs(getAllDIsRequest);
    } catch (error) {
      throw error;
    }
  }

  async createDI(createDIRequest: CreateDIRequest): Promise<DigitalIdentity> {
    try {
      return await this.diRepository.createDI(createDIRequest);
    } catch (error) {
      throw error;
    }
  }

  async getDIByRoleId(
    getDIByRoleIdRequest: GetDIByRoleIdRequest
  ): Promise<DigitalIdentity> {
    try {
      return await this.diRepository.getDIByRoleId(getDIByRoleIdRequest);
    } catch (error) {
      throw error;
    }
  }

  async searchDIOrUniqueId(
    searchDIOrUniqueIdRequest: SearchDIOrUniqueIdRequest
  ): Promise<DigitalIdentities> {
    try {
      return await this.diRepository.searchDIOrUniqueId(
        searchDIOrUniqueIdRequest
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteDI(deleteDIRequest: DeleteDIRequest): Promise<SuccessMessage> {
    try {
      return await this.diRepository.deleteDI(deleteDIRequest);
    } catch (error) {
      throw error;
    }
  }

  async getDIByUniqueId(
    getDIByUniqueIdRequest: GetDIByUniqueIdRequest
  ): Promise<DigitalIdentity> {
    try {
      return await this.diRepository.getDIByUniqueId(getDIByUniqueIdRequest);
    } catch (error) {
      throw error;
    }
  }

  async updateDI(updateDIRequest: UpdateDIRequest): Promise<DigitalIdentity> {
    try {
      return await this.diRepository.updateDI(updateDIRequest);
    } catch (error) {
      throw error;
    }
  }
}
