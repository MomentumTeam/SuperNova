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
  UserType,
  userTypeFromJSON,
  userTypeToJSON,
} from '../interfaces/protoc/proto/approverService';
import {
  DigitalIdentity,
  Entity,
} from '../interfaces/protoc/proto/kartoffelService';
import {
  Request,
  UpdateDecisionReq,
} from '../interfaces/protoc/proto/requestService';
import { logger } from '../logger';
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
      logger.info('addApprover', { document, addCommanderApproverReq, type });
      return document as Approver;
    } catch (error) {
      logger.error('addApprover ERROR', { error, addCommanderApproverReq });
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
      logger.error('addCommanderApprover ERROR', {
        error,
        addCommanderApproverReq,
      });
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
      logger.error('addSuperSecurityApprover ERROR', {
        error,
        addSecurityApproverReq,
      });
      throw error;
    }
  }

  async addSecurityApprover(
    addSecurityApproverReq: AddApproverReq
  ): Promise<Approver> {
    try {
      return await this.addApprover(addSecurityApproverReq, UserType.SECURITY);
    } catch (error) {
      logger.error('addSecurityApprover ERROR', {
        error,
        addSecurityApproverReq,
      });
      throw error;
    }
  }

  async deleteApprover(
    deleteApproverReq: DeleteApproverReq
  ): Promise<SuccessMessage> {
    try {
      await ApproverModel.deleteMany({
        entityId: deleteApproverReq.approverId,
      });
      logger.info('deleteApprover', { deleteApproverReq });
      return { success: true };
    } catch (error) {
      logger.error('deleteApprover ERROR', { deleteApproverReq, error });
      throw error;
    }
  }

  async getAllApprovers(
    getAllApproversReq: GetAllApproversReq
  ): Promise<ApproverArray> {
    try {
      const mongoApprovers: any = await ApproverModel.find({});
      logger.info('getAllApprovers', { getAllApproversReq });
      return { approvers: getMongoApproverArray(mongoApprovers) };
    } catch (error) {
      logger.error('getAllApprovers ERROR', { error, getAllApproversReq });
      throw error;
    }
  }

  async getAllApproverIds(
    getAllApproverIdsReq: GetAllApproversReq
  ): Promise<ApproverIdArray> {
    try {
      let approverIds: any = await ApproverModel.find({}).distinct('entityId');
      approverIds = approverIds.map((approverId: any) => approverId.toString());
      logger.info('getAllApproverIds', { approverIds, getAllApproverIdsReq });
      return { approverIds: approverIds };
    } catch (error) {
      logger.error('getAllApproverIds ERROR', { error, getAllApproverIdsReq });
      throw error;
    }
  }

  async syncApprover(syncApproverReq: SyncApproverReq): Promise<Approver> {
    try {
      const entity: Entity = await KartoffelService.getEntityById({
        id: syncApproverReq.approverId,
      });
      const domainUsers = entity.digitalIdentities
        ? entity.digitalIdentities.map((di: DigitalIdentity) => di.mail)
        : [];
      logger.info('syncApprover got entity successfully from Kartoffel', {
        entity,
        syncApproverReq,
        domainUsers,
      });
      const updateParams: any = {
        displayName: entity.displayName,
        domainUsers: domainUsers,
        akaUnit: entity.akaUnit,
      };
      const documentAfter: any = await ApproverModel.findOneAndUpdate(
        { entityId: syncApproverReq.approverId },
        { $set: updateParams },
        { new: true }
      );
      const document = documentAfter.toObject();
      turnObjectIdsToStrings(document);
      logger.info('syncApprover updated Approver successfully', {
        syncApproverReq,
        displayName: entity.displayName,
        domainUsers: domainUsers,
        akaUnit: entity.akaUnit,
        document,
      });
      return document as Approver;
    } catch (error) {
      logger.error('syncApprover ERROR', {
        syncApproverReq,
        error,
      });
      throw error;
    }
  }

  async getUserType(getUserTypeReq: GetUserTypeReq): Promise<GetUserTypeRes> {
    try {
      const approvers = await ApproverModel.find({
        entityId: getUserTypeReq.entityId,
      });
      let response: GetUserTypeRes;
      if (approvers) {
        const types: any = approvers.map((approver) => {
          const documentObj: any = turnObjectIdsToStrings(approver.toObject());
          return documentObj.type;
        });

        response = {
          entityId: getUserTypeReq.entityId,
          types,
        };
      } else {
        const entity = await KartoffelService.getEntityById({
          id: getUserTypeReq.entityId,
        });
        if (hasCommanderRank(entity)) {
          response = {
            entityId: getUserTypeReq.entityId,
            types: [UserType.COMMANDER],
          };
        } else {
          response = {
            entityId: getUserTypeReq.entityId,
            types: [UserType.SOLDIER],
          };
        }
      }
      logger.info('getUserType', { getUserTypeReq, response });
      return response;
    } catch (error) {
      logger.error('getUserType ERROR', { getUserTypeReq, error });
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
      logger.info('searchApproverByDisplayName MongoResults', {
        searchByDisplayNameReq,
        approversResult,
      });

      if (userTypeFromJSON(searchByDisplayNameReq.type) !== UserType.SECURITY) {
        const kartoffelEntities =
          await KartoffelService.searchEntitiesByFullName({
            fullName: searchByDisplayNameReq.displayName,
          });
        logger.info('searchApproverByDisplayName kartoffelResults', {
          kartoffelEntities,
          searchByDisplayNameReq,
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
      logger.info('searchApproverByDisplayName Results', {
        uniqueApproversResult,
        searchByDisplayNameReq,
      });
      return { approvers: uniqueApproversResult };
    } catch (error) {
      logger.error('searchApproverByDisplayName ERROR', {
        error,
        searchByDisplayNameReq,
      });
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
      let response: ApproverArray;
      if (mongoApprover) {
        response = {
          approvers: getMongoApproverArray([mongoApprover]),
        };
      } else {
        const entity: Entity = await KartoffelService.getEntityByRoleId({
          roleId: searchByDomainUserReq.domainUser,
        });
        response = {
          approvers: getApproverArrayByEntityArray(
            { entities: [entity] },
            searchByDomainUserReq.type
          ),
        };
      }
      logger.info('searchApproverByDomainUser', {
        searchByDomainUserReq,
        response,
      });
      return response;
    } catch (error) {
      logger.error('searchApproverByDomainUser ERROR', {
        searchByDomainUserReq,
        error,
      });
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
      const response = { approvers: getMongoApproverArray(mongoApprovers) };
      logger.info('getAllSecurityApprovers', {
        response,
        getAllSecurityApproversReq,
      });
      return response;
    } catch (error) {
      logger.error('getAllSecurityApprovers ERROR', {
        error,
        getAllSecurityApproversReq,
      });
      throw error;
    }
  }

  async getAllSuperSecurityApprovers(
    getAllSuperSecurityApproversReq: GetAllApproversReq
  ): Promise<ApproverArray> {
    try {
      const mongoApprovers: any = await ApproverModel.find({
        type: userTypeToJSON(UserType.SUPER_SECURITY),
      });
      const response = { approvers: getMongoApproverArray(mongoApprovers) };
      logger.info('getAllSuperSecurityApprovers', {
        response,
        getAllSuperSecurityApproversReq,
      });
      return response;
    } catch (error) {
      logger.error('getAllSuperSecurityApprovers ERROR', {
        getAllSuperSecurityApproversReq,
        error,
      });
      throw error;
    }
  }

  async getAllCommanderApprovers(
    getAllCommanderApproversReq: GetAllApproversReq
  ): Promise<ApproverArray> {
    try {
      const mongoApprovers: any = await ApproverModel.find({
        type: userTypeToJSON(UserType.COMMANDER),
      });
      const response = { approvers: getMongoApproverArray(mongoApprovers) };
      logger.info('getAllCommanderApprovers', {
        response,
        getAllCommanderApproversReq,
      });
      return response;
    } catch (error) {
      logger.error('getAllCommanderApprovers ERROR', {
        error,
        getAllCommanderApproversReq,
      });
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
      logger.info('updateCommanderDecision', {
        updatedRequest,
        updateDecisionReq,
      });
      return updatedRequest;
    } catch (error) {
      logger.error('updateCommanderDecision ERROR', {
        updateDecisionReq,
        error,
      });
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
      logger.info('updateSecurityDecision', {
        updatedRequest,
        updateDecisionReq,
      });
      return updatedRequest;
    } catch (error) {
      logger.error('updateSecurityDecision ERROR', {
        updateDecisionReq,
        error,
      });
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
      logger.info('updateSuperSecurityDecision', {
        updatedRequest,
        updateDecisionReq,
      });
      return updatedRequest;
    } catch (error) {
      logger.error('updateSuperSecurityDecision ERROR', {
        error,
        updateDecisionReq,
      });
      throw error;
    }
  }
}
