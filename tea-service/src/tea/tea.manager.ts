import {
  AddPrefixReq,
  DeletePrefixReq,
  GetAllPrefixesReq,
  GetPrefixReq,
  Prefix,
  PrefixArray,
  RetrieveBrolReq,
  RetrieveTeaByOGIdReq,
  RetrieveTeaByPrefixReq,
  SuccessMessage,
  TeaMessage,
  UpdatePrefixReq,
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

  async retrieveBrol(retrieveBrolReq: RetrieveBrolReq): Promise<UPNMessage> {
    try {
      return await this.teaRepository.retrieveBrol(retrieveBrolReq);
    } catch (error) {
      throw error;
    }
  }

  async retrieveTeaByPrefix(
    retrieveTeaByPrefixReq: RetrieveTeaByPrefixReq
  ): Promise<TeaMessage> {
    try {
      return await this.teaRepository.retrieveTeaByPrefix(
        retrieveTeaByPrefixReq
      );
    } catch (error) {
      throw error;
    }
  }

  async retrieveTeaByOGId(
    retrieveTeaByOGIdReq: RetrieveTeaByOGIdReq
  ): Promise<TeaMessage> {
    try {
      return await this.teaRepository.retrieveTeaByOGId(retrieveTeaByOGIdReq);
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

  async getPrefix(getPrefixReq: GetPrefixReq): Promise<Prefix> {
    try {
      return await this.teaRepository.getPrefix(getPrefixReq);
    } catch (error) {
      throw error;
    }
  }

  async addPrefix(addPrefixReq: AddPrefixReq): Promise<Prefix> {
    try {
      return await this.teaRepository.addPrefix(addPrefixReq);
    } catch (error) {
      throw error;
    }
  }

  async updatePrefix(updatePrefixReq: UpdatePrefixReq): Promise<Prefix> {
    try {
      return await this.teaRepository.updatePrefix(updatePrefixReq);
    } catch (error) {
      throw error;
    }
  }

  async deletePrefix(
    deletePrefixReq: DeletePrefixReq
  ): Promise<SuccessMessage> {
    try {
      return await this.teaRepository.deletePrefix(deletePrefixReq);
    } catch (error) {
      throw error;
    }
  }

  async getAllPrefixes(
    getAllPrefixesReq: GetAllPrefixesReq
  ): Promise<PrefixArray> {
    try {
      return await this.teaRepository.getAllPrefixes(getAllPrefixesReq);
    } catch (error) {
      throw error;
    }
  }
}
