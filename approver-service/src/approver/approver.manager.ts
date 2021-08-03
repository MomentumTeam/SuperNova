import {
  AddApproverReq,
  Approver,
  ApproverArray,
  ApproverIdArray,
  DeleteApproverReq,
  GetAllApproversReq,
  GetUserTypeReq,
  GetUserTypeRes,
  SearchByDisplayNameReq,
  SearchByDomainUserReq,
  SuccessMessage,
  SyncApproverReq,
} from '../interfaces/protoc/proto/approverService';
import {
  Request,
  UpdateDecisionReq,
} from '../interfaces/protoc/proto/requestService';
import { ApproverRepository } from './approver.repository';

export class ApproverManager {
  private approverRepository: ApproverRepository;
  constructor() {
    this.approverRepository = new ApproverRepository();
  }

  async addCommanderApprover(
    addCommanderApproverReq: AddApproverReq
  ): Promise<Approver> {
    try {
      return (await this.approverRepository.addCommanderApprover(
        addCommanderApproverReq
      )) as Approver;
    } catch (error) {
      throw error;
    }
  }

  async addSecurityApprover(
    addSecurityApproverReq: AddApproverReq
  ): Promise<Approver> {
    try {
      return (await this.approverRepository.addSecurityApprover(
        addSecurityApproverReq
      )) as Approver;
    } catch (error) {
      throw error;
    }
  }

  async addSuperSecurityApprover(
    addSecurityApproverReq: AddApproverReq
  ): Promise<Approver> {
    try {
      return (await this.approverRepository.addSuperSecurityApprover(
        addSecurityApproverReq
      )) as Approver;
    } catch (error) {
      throw error;
    }
  }

  async getUserType(getUserTypeReq: GetUserTypeReq): Promise<GetUserTypeRes> {
    try {
      return (await this.approverRepository.getUserType(
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

  async getAllSecurityApprovers(
    getAllSecurityApproversReq: GetAllApproversReq
  ): Promise<ApproverArray> {
    try {
      return await this.approverRepository.getAllSecurityApprovers(
        getAllSecurityApproversReq
      );
    } catch (error) {
      throw error;
    }
  }

  async getAllSuperSecurityApprovers(
    getAllSecurityApproversReq: GetAllApproversReq
  ): Promise<ApproverArray> {
    try {
      return await this.approverRepository.getAllSuperSecurityApprovers(
        getAllSecurityApproversReq
      );
    } catch (error) {
      throw error;
    }
  }

  async getAllCommanderApprovers(
    getAllSecurityApproversReq: GetAllApproversReq
  ): Promise<ApproverArray> {
    try {
      return await this.approverRepository.getAllCommanderApprovers(
        getAllSecurityApproversReq
      );
    } catch (error) {
      throw error;
    }
  }

  async updateCommanderDecision(
    updateDecisionReq: UpdateDecisionReq
  ): Promise<Request> {
    try {
      return await this.approverRepository.updateCommanderDecision(
        updateDecisionReq
      );
    } catch (error) {
      throw error;
    }
  }

  async updateSecurityDecision(
    updateDecisionReq: UpdateDecisionReq
  ): Promise<Request> {
    try {
      return await this.approverRepository.updateSecurityDecision(
        updateDecisionReq
      );
    } catch (error) {
      throw error;
    }
  }

  async updateSuperSecurityDecision(
    updateDecisionReq: UpdateDecisionReq
  ): Promise<Request> {
    try {
      return await this.approverRepository.updateSuperSecurityDecision(
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

  async syncApprover(syncApproverReq: SyncApproverReq): Promise<Approver> {
    try {
      return await this.approverRepository.syncApprover(syncApproverReq);
    } catch (error) {
      throw error;
    }
  }
}
