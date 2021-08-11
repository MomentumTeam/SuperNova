import {
  DeleteUnitReq,
  GetUnitReq,
  SuccessMessage,
  Unit,
  UpdateUnitReq,
} from '../interfaces/protoc/proto/teaService';
import {
  ReportTeaReq,
  RetrieveTeaAndUPNByEntityIdReq,
  RetrieveTeaAndUPNByEntityReq,
  TeaAndUPN,
} from '../interfaces/protoc/proto/teaService';
import { TeaRepository } from './tea.repository';

export class TeaManager {
  private teaRepository: TeaRepository;
  constructor() {
    this.teaRepository = new TeaRepository();
  }

  async retrieveTeaAndUPNByEntity(
    retrieveTeaAndUPNByEntityReq: RetrieveTeaAndUPNByEntityReq
  ): Promise<TeaAndUPN> {
    try {
      return await this.teaRepository.retrieveTeaAndUPNByEntity(
        retrieveTeaAndUPNByEntityReq
      );
    } catch (error) {
      throw error;
    }
  }

  async retrieveTeaAndUPNByEntityId(
    retrieveTeaAndUPNByEntityIdReq: RetrieveTeaAndUPNByEntityIdReq
  ): Promise<TeaAndUPN> {
    try {
      return await this.teaRepository.retrieveTeaAndUPNByEntityId(
        retrieveTeaAndUPNByEntityIdReq
      );
    } catch (error) {
      throw error;
    }
  }

  async reportTeaSuccess(reportTeaReq: ReportTeaReq): Promise<SuccessMessage> {
    try {
      return await this.teaRepository.reportTeaSuccess(reportTeaReq);
    } catch (error) {
      throw error;
    }
  }

  async reportTeaFail(reportTeaReq: ReportTeaReq): Promise<SuccessMessage> {
    try {
      return await this.teaRepository.reportTeaFail(reportTeaReq);
    } catch (error) {
      throw error;
    }
  }

  async getUnit(getUnitReq: GetUnitReq): Promise<Unit> {
    try {
      return await this.teaRepository.getUnit(getUnitReq);
    } catch (error) {
      throw error;
    }
  }

  async addUnit(unit: Unit): Promise<Unit> {
    try {
      return await this.teaRepository.addUnit(unit);
    } catch (error) {
      throw error;
    }
  }

  async updateUnit(updateUnitReq: UpdateUnitReq): Promise<Unit> {
    try {
      return await this.teaRepository.updateUnit(updateUnitReq);
    } catch (error) {
      throw error;
    }
  }

  async deleteUnit(deleteUnitReq: DeleteUnitReq): Promise<SuccessMessage> {
    try {
      return await this.teaRepository.deleteUnit(deleteUnitReq);
    } catch (error) {
      throw error;
    }
  }
}
