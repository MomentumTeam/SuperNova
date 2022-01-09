import {
  AddApproverReq,
  Approver,
  ApproverArray,
  ApproverIdArray,
  DeleteApproverReq,
  GetAllApproversReq,
  GetApproverByEntityIdReq,
  GetUserTypeReq,
  GetUserTypeRes,
  IsApproverValidForOGReq,
  IsApproverValidForOGRes,
  SearchByDisplayNameReq,
  SearchByDomainUserReq,
  SearchHighCommandersByDisplayNameReq,
  SuccessMessage,
  SyncApproverReq,
  UpdateApproverDecisionReq,
} from '../interfaces/protoc/proto/approverService';
import { Request } from '../interfaces/protoc/proto/requestService';
import { ApproverRepository } from './approver.repository';

export class ApproverManager {
  private approverRepository: ApproverRepository;
  constructor() {
    this.approverRepository = new ApproverRepository();
  }
  async isApproverValidForOG(
    isApproverValidForOGReq: IsApproverValidForOGReq
  ): Promise<IsApproverValidForOGRes> {
    try {
      return (await this.approverRepository.isApproverValidForOG(
        isApproverValidForOGReq
      )) as IsApproverValidForOGRes;
    } catch (error) {
      throw error;
    }
  }

  async getApproverByEntityId(
    getApproverByEntityIdReq: GetApproverByEntityIdReq
  ): Promise<Approver> {
    try {
      return (await this.approverRepository.getApproverByEntityId(
        getApproverByEntityIdReq
      )) as Approver;
    } catch (error) {
      throw error;
    }
  }

  async addApprover(addApproverReq: AddApproverReq): Promise<Approver> {
    try {
      return (await this.approverRepository.addApprover(
        addApproverReq
      )) as Approver;
    } catch (error) {
      throw error;
    }
  }

  async searchHighCommandersByDisplayName(
    searchHighCommandersByDisplayNameReq: SearchHighCommandersByDisplayNameReq
  ): Promise<ApproverArray> {
    try {
      return (await this.approverRepository.searchHighCommandersByDisplayName(
        searchHighCommandersByDisplayNameReq
      )) as ApproverArray;
    } catch (error) {
      throw error;
    }
  }

  async getUserType(getUserTypeReq: GetUserTypeReq): Promise<GetUserTypeRes> {
    try {
      return (await ApproverRepository.getUserType(
        getUserTypeReq
      )) as GetUserTypeRes;
    } catch (error) {
      throw error;
    }
  }

  async searchApproverByDisplayName(
    searchByDisplayNameReq: SearchByDisplayNameReq
  ): Promise<ApproverArray> {
    try {
      return (await this.approverRepository.searchApproverByDisplayName(
        searchByDisplayNameReq
      )) as ApproverArray;
    } catch (error) {
      throw error;
    }
  }

  async searchApproverByDomainUser(
    searchByDomainUserReq: SearchByDomainUserReq
  ): Promise<ApproverArray> {
    try {
      return (await this.approverRepository.searchApproverByDomainUser(
        searchByDomainUserReq
      )) as ApproverArray;
    } catch (error) {
      throw error;
    }
  }

  async updateApproverDecision(
    updateDecisionReq: UpdateApproverDecisionReq
  ): Promise<Request> {
    try {
      return await this.approverRepository.updateApproverDecision(
        updateDecisionReq
      );
    } catch (error) {
      throw error;
    }
  }

  async getAllApprovers(
    getAllApproversReq: GetAllApproversReq
  ): Promise<ApproverArray> {
    try {
      return await this.approverRepository.getAllApprovers(getAllApproversReq);
    } catch (error) {
      throw error;
    }
  }

  async deleteApprover(
    deleteApproverReq: DeleteApproverReq
  ): Promise<SuccessMessage> {
    try {
      return await this.approverRepository.deleteApprover(deleteApproverReq);
    } catch (error) {
      throw error;
    }
  }

  async getAllApproverIds(
    getAllApproverIdsReq: GetAllApproversReq
  ): Promise<ApproverIdArray> {
    try {
      return await this.approverRepository.getAllApproverIds(
        getAllApproverIdsReq
      );
    } catch (error) {
      throw error;
    }
  }

  async syncApprover(syncApproverReq: SyncApproverReq): Promise<ApproverArray> {
    try {
      return await this.approverRepository.syncApprover(syncApproverReq);
    } catch (error) {
      throw error;
    }
  }
}
