import {
  AddUnitReq,
  DeleteUnitReq,
  GetAllUnitsReq,
  GetUnitReq,
  MinUnitArray,
  RetrieveTeaByUnitReq,
  SearchUnitReq,
  SuccessMessage,
  TeaMessage,
  Unit,
  UpdateUnitReq,
  UPNMessage,
} from '../interfaces/protoc/proto/teaService';
import {
  ReportTeaReq,
  RetrieveByEntityIdReq,
  RetrieveByEntityReq,
} from '../interfaces/protoc/proto/teaService';
import { TeaRepository } from './tea.repository';

export class TeaManager {
  private teaRepository: TeaRepository;
  constructor() {
    this.teaRepository = new TeaRepository();
  }

  async retrieveTeaByUnit(
    retrieveTeaByUnitReq: RetrieveTeaByUnitReq
  ): Promise<TeaMessage> {
    try {
      return await this.teaRepository.retrieveTeaByUnit(retrieveTeaByUnitReq);
    } catch (error) {
      throw error;
    }
  }

  async retrieveUPNByEntity(
    retrieveUPNByEntityReq: RetrieveByEntityReq
  ): Promise<UPNMessage> {
    try {
      return await this.teaRepository.retrieveUPNByEntity(
        retrieveUPNByEntityReq
      );
    } catch (error) {
      throw error;
    }
  }
  async retrieveUPNByEntityId(
    retrieveUPNByEntityIdReq: RetrieveByEntityIdReq
  ): Promise<UPNMessage> {
    try {
      return await this.teaRepository.retrieveUPNByEntityId(
        retrieveUPNByEntityIdReq
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

  async throwTea(throwTeaReq: ReportTeaReq): Promise<SuccessMessage> {
    try {
      return await this.teaRepository.throwTea(throwTeaReq);
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

  async addUnit(addUnitReq: AddUnitReq): Promise<Unit> {
    try {
      return await this.teaRepository.addUnit(addUnitReq);
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

  async getAllUnits(getAllUnitsReq: GetAllUnitsReq): Promise<MinUnitArray> {
    try {
      return await this.teaRepository.getAllUnits(getAllUnitsReq);
    } catch (error) {
      throw error;
    }
  }

  async searchUnit(searchUnitReq: SearchUnitReq): Promise<MinUnitArray> {
    try {
      return await this.teaRepository.searchUnit(searchUnitReq);
    } catch (error) {
      throw error;
    }
  }
}
