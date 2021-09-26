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
  PersonTypeInRequest,
  personTypeInRequestFromJSON,
  Request,
  UpdateApproverDecisionReq,
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
  approverTypeValidation,
} from '../utils/approver.utils';
import { hasPermissionToDecide } from '../utils/permission.utils';

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
    } catch (error: any) {
      logger.error('addApprover ERROR', {
        error: { message: error.message },
        addApproverReq,
      });
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
    } catch (error: any) {
      logger.error('deleteApprover ERROR', {
        deleteApproverReq,
        error: { message: error.message },
      });
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
    } catch (error: any) {
      logger.error('getAllApprovers ERROR', {
        error: { message: error.message },
        getAllApproversReq,
      });
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
    } catch (error: any) {
      logger.error('getAllApproverIds ERROR', {
        error: { message: error.message },
        getAllApproverIdsReq,
      });
      throw error;
    }
  }

  async syncApprover(syncApproverReq: SyncApproverReq): Promise<ApproverArray> {
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
      const result: any = await ApproverModel.updateMany(
        { entityId: syncApproverReq.approverId },
        { $set: updateParams }
      );
      const documentsObjArray = await ApproverModel.find({
        entityId: syncApproverReq.approverId,
      });
      let approvers = getMongoApproverArray(documentsObjArray);
      logger.info('syncApprover updated Approver successfully', {
        syncApproverReq,
        displayName: entity.displayName,
        domainUsers: domainUsers,
        akaUnit: entity.akaUnit,
        approvers,
      });
      return { approvers: approvers } as ApproverArray;
    } catch (error: any) {
      logger.error('syncApprover ERROR', {
        syncApproverReq,
        error: { message: error.message },
      });
      throw error;
    }
  }

  static async getUserType(
    getUserTypeReq: GetUserTypeReq
  ): Promise<GetUserTypeRes> {
    try {
      const approvers = await ApproverModel.find({
        entityId: getUserTypeReq.entityId,
      });
      let response: GetUserTypeRes;
      if (approvers) {
        let type: any = approvers.map((approver: any) => {
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
    } catch (error: any) {
      logger.error('getUserType ERROR', {
        getUserTypeReq,
        error: { message: error.message },
      });
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
    } catch (error: any) {
      logger.error('searchApproverByDisplayName ERROR', {
        error: { message: error.message },
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
    } catch (error: any) {
      logger.error('searchApproverByDomainUser ERROR', {
        searchByDomainUserReq,
        error: { message: error.message },
      });
      throw error;
    }
  }

  async updateApproverDecision(
    updateApproverDecisionReq: UpdateApproverDecisionReq
  ): Promise<Request> {
    try {
      const approverId: any =
        updateApproverDecisionReq.approverDecision?.approver?.id;
      const personTypeInRequest: PersonTypeInRequest =
        typeof updateApproverDecisionReq.approverType === typeof ''
          ? personTypeInRequestFromJSON(updateApproverDecisionReq.approverType)
          : updateApproverDecisionReq.approverType;
      const requestId = updateApproverDecisionReq.id;
      const hasPermission = await hasPermissionToDecide(
        approverId,
        personTypeInRequest,
        requestId
      );
      if (!hasPermission) {
        throw new Error('User has no permission!');
      } else {
        return await RequestService.updateApproverDecision(
          updateApproverDecisionReq
        );
      }
    } catch (error: any) {
      logger.error('updateApproverDecision ERROR', {
        updateApproverDecisionReq,
        error: { message: error.message },
      });
      throw error;
    }
  }
}
