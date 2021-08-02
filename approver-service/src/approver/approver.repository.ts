import {
  AddApproverReq,
  Approver,
  ApproverArray,
  GetAllApproversReq,
  GetUserTypeReq,
  GetUserTypeRes,
  SearchByDisplayNameReq,
  SearchByDomainUserReq,
  UserType,
  userTypeFromJSON,
  userTypeToJSON,
} from '../interfaces/protoc/proto/approverService';
import { Entity } from '../interfaces/protoc/proto/kartoffelService';
import {
  Request,
  UpdateDecisionReq,
} from '../interfaces/protoc/proto/requestService';
import { ApproverModel } from '../models/approver.model';
import KartoffelService from '../services/kartoffelService';
import RequestService from '../services/requestService';
import {
  getApproverArrayByEntityArray,
  getMongoApproverArray,
  hasCommanderRank,
  turnObjectIdsToStrings,
} from '../utils/approver.utils';

export class ApproverRepository {
  async addApprover(addCommanderApproverReq: AddApproverReq, type: UserType) {
    try {
      const approver: any = new ApproverModel(addCommanderApproverReq);
      approver.type = UserType[type];
      const createdApprover = await approver.save();
      const document = createdApprover.toObject();
      turnObjectIdsToStrings(document);
      return document as Approver;
    } catch (error) {
      throw error;
    }
  }

  async addCommanderApprover(
    addCommanderApproverReq: AddApproverReq
  ): Promise<Approver> {
    try {
      return await this.addApprover(
        addCommanderApproverReq,
        UserType.COMMANDER
      );
    } catch (error) {
      throw error;
    }
  }

  async addSuperSecurityApprover(
    addSecurityApproverReq: AddApproverReq
  ): Promise<Approver> {
    try {
      return await this.addApprover(
        addSecurityApproverReq,
        UserType.SUPER_SECURITY
      );
    } catch (error) {
      throw error;
    }
  }

  async addSecurityApprover(
    addSecurityApproverReq: AddApproverReq
  ): Promise<Approver> {
    try {
      return await this.addApprover(addSecurityApproverReq, UserType.SECURITY);
    } catch (error) {
      throw error;
    }
  }

  async getUserType(getUserTypeReq: GetUserTypeReq): Promise<GetUserTypeRes> {
    try {
      const approver = await ApproverModel.findOne({
        entityId: getUserTypeReq.entityId,
      });
      if (approver) {
        const documentObj: any = approver.toObject();
        turnObjectIdsToStrings(documentObj);
        return {
          entityId: getUserTypeReq.entityId,
          type: documentObj.type,
        };
      } else {
        const entity = await KartoffelService.getEntityByMongoId({
          id: getUserTypeReq.entityId,
        });
        if (hasCommanderRank(entity)) {
          return {
            entityId: getUserTypeReq.entityId,
            type: UserType.COMMANDER,
          };
        } else {
          return { entityId: getUserTypeReq.entityId, type: UserType.SOLDIER };
        }
      }
    } catch (error) {
      throw error;
    }
  }

  async searchApproverByDisplayName(
    searchByDisplayNameReq: SearchByDisplayNameReq
  ): Promise<ApproverArray> {
    try {
      const mongoApprovers: any = await ApproverModel.find(
        {
          type: searchByDisplayNameReq.type,
          $text: {
            $search: searchByDisplayNameReq.displayName,
          },
        },
        {},
        {
          skip: 0,
          limit: 20,
        }
      );
      let approversResult: Approver[] = getMongoApproverArray(mongoApprovers);

      if (userTypeFromJSON(searchByDisplayNameReq.type) !== UserType.SECURITY) {
        const kartoffelEntities =
          await KartoffelService.searchEntitiesByFullName({
            fullName: searchByDisplayNameReq.displayName,
            from: searchByDisplayNameReq.from,
            to: searchByDisplayNameReq.to,
          });

        approversResult.push(
          ...getApproverArrayByEntityArray(
            kartoffelEntities,
            searchByDisplayNameReq.type
          )
        );
      }

      const uniqueApproversResult = [
        ...new Map(
          approversResult.map((item: Approver) => [item.entityId, item])
        ).values(),
      ];

      return { approvers: uniqueApproversResult };
    } catch (error) {
      throw error;
    }
  }

  async searchApproverByDomainUser(
    searchByDomainUserReq: SearchByDomainUserReq
  ): Promise<ApproverArray> {
    try {
      const mongoApprover: any = await ApproverModel.findOne(
        {
          type: searchByDomainUserReq.type,
          domainUsers: searchByDomainUserReq.domainUser,
        },
        {},
        {
          skip: 0,
          limit: 20,
        }
      );
      if (mongoApprover) {
        return {
          approvers: getMongoApproverArray([mongoApprover]),
        } as ApproverArray;
      } else {
        const entity: Entity = await KartoffelService.getEntityByRoleId({
          roleId: searchByDomainUserReq.domainUser,
        });
        return {
          approvers: getApproverArrayByEntityArray(
            { entities: [entity] },
            searchByDomainUserReq.type
          ),
        } as ApproverArray;
      }
    } catch (error) {
      throw error;
    }
  }

  async getAllSecurityApprovers(
    getAllSecurityApproversReq: GetAllApproversReq
  ): Promise<ApproverArray> {
    try {
      const mongoApprovers: any = await ApproverModel.find({
        type: userTypeToJSON(UserType.SECURITY),
      });
      return { approvers: getMongoApproverArray(mongoApprovers) };
    } catch (error) {
      throw error;
    }
  }

  async getAllSuperSecurityApprovers(
    getAllSecurityApproversReq: GetAllApproversReq
  ): Promise<ApproverArray> {
    try {
      const mongoApprovers: any = await ApproverModel.find({
        type: userTypeToJSON(UserType.SUPER_SECURITY),
      });
      return { approvers: getMongoApproverArray(mongoApprovers) };
    } catch (error) {
      throw error;
    }
  }

  async getAllCommanderApprovers(
    getAllSecurityApproversReq: GetAllApproversReq
  ): Promise<ApproverArray> {
    try {
      const mongoApprovers: any = await ApproverModel.find({
        type: userTypeToJSON(UserType.COMMANDER),
      });
      return { approvers: getMongoApproverArray(mongoApprovers) };
    } catch (error) {
      throw error;
    }
  }

  async updateCommanderDecision(
    updateDecisionReq: UpdateDecisionReq
  ): Promise<Request> {
    try {
      const updatedRequest = await RequestService.updateCommanderDecision(
        updateDecisionReq
      );
      return updatedRequest;
    } catch (error) {
      throw error;
    }
  }

  async updateSecurityDecision(
    updateDecisionReq: UpdateDecisionReq
  ): Promise<Request> {
    try {
      const updatedRequest = await RequestService.updateSecurityDecision(
        updateDecisionReq
      );
      return updatedRequest;
    } catch (error) {
      throw error;
    }
  }

  async updateSuperSecurityDecision(
    updateDecisionReq: UpdateDecisionReq
  ): Promise<Request> {
    try {
      const updatedRequest = await RequestService.updateSuperSecurityDecision(
        updateDecisionReq
      );
      return updatedRequest;
    } catch (error) {
      throw error;
    }
  }
}
