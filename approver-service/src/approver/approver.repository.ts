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
  UpdateApproverDecisionReq,
  userTypeToJSON,
} from '../interfaces/protoc/proto/approverService';
import {
  DigitalIdentity,
  Entity,
} from '../interfaces/protoc/proto/kartoffelService';
import { Request } from '../interfaces/protoc/proto/requestService';
import { logger } from '../logger';
import { ApproverModel } from '../models/approver.model';
import KartoffelService from '../services/kartoffelService';
import RequestService from '../services/requestService';
import {
  getApproverArrayByEntityArray,
  getMongoApproverArray,
  hasCommanderRank,
  turnObjectIdsToStrings,
  approverTypeValidation,
} from '../utils/approver.utils';

export class ApproverRepository {
  async addApprover(addApproverReq: AddApproverReq) {
    try {
      const approver: any = new ApproverModel(addApproverReq);
      approverTypeValidation(approver.type);

      const createdApprover = await approver.save();
      const document = createdApprover.toObject();
      turnObjectIdsToStrings(document);

      logger.info('addApprover', { document, addApproverReq });
      return document as Approver;
    } catch (error) {
      logger.error('addApprover ERROR', { error, addApproverReq });
      throw error;
    }
  }

  async deleteApprover(
    deleteApproverReq: DeleteApproverReq
  ): Promise<SuccessMessage> {
    try {
      // TODO: what if there is not user? return false??
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
      let query = {};
      if (getAllApproversReq.type != undefined) {
        let type = approverTypeValidation(getAllApproversReq.type);
        query = { type: userTypeToJSON(type) };
      }

      const mongoApprovers: any = await ApproverModel.find(query);
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
        let type: any = approvers.map((approver) => {
          const document: any = approver.toObject();
          turnObjectIdsToStrings(document);

          return document.type;
        });
        type = [...new Set(type)];

        response = {
          entityId: getUserTypeReq.entityId,
          type,
        };
      } else {
        const entity = await KartoffelService.getEntityById({
          id: getUserTypeReq.entityId,
        });
        if (hasCommanderRank(entity)) {
          response = {
            entityId: getUserTypeReq.entityId,
            type: [UserType.COMMANDER],
          };
        } else {
          response = {
            entityId: getUserTypeReq.entityId,
            type: [UserType.SOLDIER],
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
      approverTypeValidation(searchByDisplayNameReq.type);

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

      if (
        userTypeFromJSON(searchByDisplayNameReq.type) === UserType.COMMANDER
      ) {
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

  async updateApproverDecision(
    updateApproverDecisionReq: UpdateApproverDecisionReq
  ): Promise<Request> {
    try {
      const userType = updateApproverDecisionReq.type;
      let updatedRequest;

      if (updateApproverDecisionReq.decision) {
        switch (userType) {
          case UserType.COMMANDER:
            updatedRequest = await RequestService.updateCommanderDecision(
              updateApproverDecisionReq.decision
            );
            break;
          case UserType.SECURITY:
            updatedRequest = await RequestService.updateSecurityDecision(
              updateApproverDecisionReq.decision
            );
            break;
          case UserType.SUPER_SECURITY:
            updatedRequest = await RequestService.updateSuperSecurityDecision(
              updateApproverDecisionReq.decision
            );
            break;
          default:
            throw new Error(`unsupported usertype ${userType}`);
        }
      }
      logger.info('updateApproverDecision', {
        updatedRequest,
        updateApproverDecisionReq,
      });

      if (updatedRequest) {
        return updatedRequest;
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      logger.error('updateApproverDecision ERROR', {
        updateApproverDecisionReq,
        error,
      });
      throw error;
    }
  }
}
