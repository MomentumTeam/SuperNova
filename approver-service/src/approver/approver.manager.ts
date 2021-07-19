import {
  AddApproverReq,
  Approver,
  ApproverArray,
  GetAllApproversReq,
  GetUserTypeReq,
  GetUserTypeRes,
  SearchByDisplayNameReq,
  SearchByDomainUserReq,
  SuccessMessage,
  UpdateDecisionReq,
} from '../interfaces/protoc/proto/approverService';
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
  ): Promise<SuccessMessage> {
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
  ): Promise<SuccessMessage> {
    try {
      return await this.approverRepository.updateSecurityDecision(
        updateDecisionReq
      );
    } catch (error) {
      throw error;
    }
  }
}
