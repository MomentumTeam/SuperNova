import {
  AddApproverReq,
  Approver,
  ApproverArray,
  ApproverIdArray,
  DeleteApproverReq,
  GetAllApproversReq,
  GetUserTypeReq,
  GetUserTypeRes,
  IsApproverValidForOGReq,
  SearchByDisplayNameReq,
  SearchByDomainUserReq,
  SearchHighCommandersByDisplayNameReq,
  SuccessMessage,
  SyncApproverReq,
  UpdateApproverDecisionReq,
  IsApproverValidForOGRes,
  GetApproverByEntityIdReq,
  GetAdminsByGroupIdsReq,
} from '../interfaces/protoc/proto/approverService';
import {
  DigitalIdentity,
  Entity,
  OrganizationGroup,
} from '../interfaces/protoc/proto/kartoffelService';
import {
  ApproverType,
  approverTypeFromJSON,
  approverTypeToJSON,
  PersonTypeInRequest,
  personTypeInRequestFromJSON,
  Request,
  UpdateApproverDecisionReq as UpdateApproverDecisionReqService,
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
import { getApproverByEntity } from '../utils/approver.utils';
import * as C from '../config';

export class ApproverRepository {
  async isApproverValidForOG(
    isApproverValidForOGReq: IsApproverValidForOGReq
  ): Promise<IsApproverValidForOGRes> {
    try {
      if (
        C.alwaysValidCommanders.includes(isApproverValidForOGReq.approverId)
      ) {
        return { isValid: true };
      }
      const approverEntity: Entity = await KartoffelService.getEntityById({
        id: isApproverValidForOGReq.approverId,
      });
      if (!approverEntity.directGroup || approverEntity.directGroup === '') {
        return { isValid: false };
      } else {
        if (isApproverValidForOGReq.groupId === approverEntity.directGroup) {
          return { isValid: true };
        }
        const group: OrganizationGroup = await KartoffelService.getOGById({
          id: isApproverValidForOGReq.groupId,
        });
        const approverGroup = await KartoffelService.getOGById({
          id: approverEntity.directGroup,
        });
        if (isApproverValidForOGReq.isOrganization) {
          if (
            isApproverValidForOGReq.groupId === approverEntity.directGroup ||
            approverGroup.ancestors.includes(isApproverValidForOGReq.groupId)
          ) {
            return { isValid: true };
          } else {
            return { isValid: false };
          }
        }
        try {
          const admin = await this.getApproverByEntityId({
            entityId: isApproverValidForOGReq.approverId,
            type: ApproverType.ADMIN,
          });
          const groupsInCharge = admin.groupsInCharge;
          if (groupsInCharge.includes(isApproverValidForOGReq.groupId)) {
            return { isValid: true };
          } else {
            for (let ancestor of group.ancestors) {
              if (groupsInCharge.includes(ancestor)) {
                return { isValid: true };
              }
            }
          }
        } catch (getAdminError: any) {}
        // OneTree is not considered
        approverGroup.ancestors.pop();
        group.ancestors.pop();
        const lastIndex =
          approverGroup.ancestors.length < C.ogValidationDepth
            ? approverGroup.ancestors.length
            : C.ogValidationDepth;
        const approverGroupAncestors: any = approverGroup.ancestors.slice(
          0,
          lastIndex
        );
        for (let ancestor of approverGroupAncestors) {
          if (group.ancestors.includes(ancestor)) {
            return { isValid: true };
          }
        }
        for (let groupAncestor of group.ancestors) {
          if (groupAncestor === approverEntity.directGroup) {
            return { isValid: true };
          }
        }

        return { isValid: false };
      }
    } catch (error: any) {
      logger.error('addApprover ERROR', {
        error: { message: error.message },
        isApproverValidForOGReq,
      });
      throw error;
    }
  }

  async addApprover(addApproverReq: AddApproverReq) {
    try {
      approverTypeValidation(addApproverReq.type);
      const adminAlreadyExists: any = await ApproverModel.exists({
        entityId: addApproverReq.entityId,
        type: approverTypeToJSON(ApproverType.ADMIN),
      });

      if (
        adminAlreadyExists &&
        approverTypeFromJSON(addApproverReq.type) === ApproverType.ADMIN
      ) {
        const updatedAdminDocument = await ApproverModel.findOneAndUpdate(
          { entityId: addApproverReq.entityId },
          { $addToSet: { groupsInCharge: addApproverReq.groupInChargeId } },
          { new: true }
        );
        const updatedAdmin = updatedAdminDocument.toObject();
        turnObjectIdsToStrings(updatedAdmin);
        return updatedAdmin as Approver;
      } else {
        const addApproverModel: any = addApproverReq;
        addApproverModel.groupsInCharge =
          addApproverModel.groupInChargeId !== undefined
            ? [addApproverModel.groupInChargeId]
            : [C.rootId];
        delete addApproverModel.groupInChargeId;

        const approver: any = new ApproverModel(addApproverModel);
        const createdApprover = await approver.save();
        const document = createdApprover.toObject();
        turnObjectIdsToStrings(document);
        return document as Approver;
      }
    } catch (error: any) {
      logger.error('addApprover ERROR', {
        error: { message: error.message },
        addApproverReq,
      });
      throw error;
    }
  }

  async getAdminsByGroupIds(
    getAdminsByGroupIdsReq: GetAdminsByGroupIdsReq
  ): Promise<ApproverArray> {
    try {
      const mongoAdmins = await ApproverModel.find({
        type: approverTypeToJSON(ApproverType.ADMIN),
        groupsInCharge: { $in: getAdminsByGroupIdsReq.groupIds },
      });
      return { approvers: getMongoApproverArray(mongoAdmins) };
    } catch (error: any) {
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
        query = { type: approverTypeToJSON(type) };
      }

      const mongoApprovers: any = await ApproverModel.find(query);
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
        ? entity.digitalIdentities.map((di: DigitalIdentity) => di.uniqueId)
        : [];
      const updateParams: any = {
        displayName: entity.displayName,
        domainUsers: domainUsers,
        akaUnit: entity.akaUnit,
        personalNumber: entity.personalNumber,
        identityCard: entity.identityCard,
        directGroup: entity.directGroup,
      };
      await ApproverModel.updateMany(
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

  async getApproverByEntityId(
    getApproverByEntityIdReq: GetApproverByEntityIdReq
  ): Promise<Approver> {
    try {
      const query: any = {
        entityId: getApproverByEntityIdReq.entityId,
      };
      let type = undefined;
      if (getApproverByEntityIdReq.type !== undefined) {
        type =
          typeof getApproverByEntityIdReq.type === typeof ''
            ? approverTypeFromJSON(getApproverByEntityIdReq.type)
            : getApproverByEntityIdReq.type;
        query.type = approverTypeToJSON(type);
      }
      const approver = await ApproverModel.findOne(query);
      if (approver) {
        const document = approver.toObject();
        turnObjectIdsToStrings(document);
        if (getApproverByEntityIdReq.type === undefined) {
          document.type = ApproverType.UNKNOWN;
        }
        return document as Approver;
      } else {
        if (
          getApproverByEntityIdReq.type !== undefined &&
          type !== ApproverType.SOLDIER &&
          type !== ApproverType.COMMANDER
        ) {
          throw new Error(
            `Approver ${getApproverByEntityIdReq.entityId} does not exist with type ${getApproverByEntityIdReq.type}`
          );
        } else {
          const entity = await KartoffelService.getEntityById({
            id: getApproverByEntityIdReq.entityId,
          });
          if (hasCommanderRank(entity)) {
            return getApproverByEntity(entity, ApproverType.COMMANDER);
          } else {
            return getApproverByEntity(entity, ApproverType.SOLDIER);
          }
        }
      }
    } catch (error: any) {
      logger.error('getApproverByEntityId ERROR', {
        getApproverByEntityIdReq,
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
        if (!type.includes(approverTypeToJSON(ApproverType.COMMANDER))) {
          const entity = await KartoffelService.getEntityById({
            id: getUserTypeReq.entityId,
          });
          if (hasCommanderRank(entity)) {
            type.push(approverTypeToJSON(ApproverType.COMMANDER));
          }
        }
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
            type: [ApproverType.COMMANDER],
          };
        } else {
          response = {
            entityId: getUserTypeReq.entityId,
            type: [ApproverType.SOLDIER],
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

  async searchHighCommandersByDisplayName(
    searchHighCommandersByDisplayNameReq: SearchHighCommandersByDisplayNameReq
  ): Promise<ApproverArray> {
    try {
      const kartoffelEntities =
        await KartoffelService.searchHighCommandersByFullName({
          fullName: searchHighCommandersByDisplayNameReq.displayName,
        });
      const approvers: Approver[] = getApproverArrayByEntityArray(
        kartoffelEntities,
        ApproverType.COMMANDER
      );
      return { approvers: approvers };
    } catch (kartoffelError: any) {
      logger.error('searchHighCommandersByDisplayName KartoffelError', {
        error: { message: kartoffelError.message },
      });
      throw kartoffelError;
    }
  }

  async searchApproverByDisplayName(
    searchByDisplayNameReq: SearchByDisplayNameReq
  ): Promise<ApproverArray> {
    try {
      const approverTypesToSearch = [searchByDisplayNameReq.type.toString()];
      approverTypeValidation(searchByDisplayNameReq.type);

      if (
        approverTypeFromJSON(searchByDisplayNameReq.type) ===
        ApproverType.COMMANDER
      ) {
        approverTypesToSearch.push(approverTypeToJSON(ApproverType.ADMIN));
      }

      const mongoApprovers: any = await ApproverModel.find(
        {
          type: { $in: approverTypesToSearch },
          displayName: {
            $regex: searchByDisplayNameReq.displayName,
            $options: 'i',
          },
        },
        {},
        {
          skip: 0,
          limit: 20,
        }
      );
      let approversResult: Approver[] = getMongoApproverArray(mongoApprovers);

      if (
        approverTypeFromJSON(searchByDisplayNameReq.type) ===
        ApproverType.COMMANDER
      ) {
        try {
          const kartoffelEntities =
            await KartoffelService.searchCommandersByFullName({
              fullName: searchByDisplayNameReq.displayName,
            });

          approversResult.push(
            ...getApproverArrayByEntityArray(
              kartoffelEntities,
              searchByDisplayNameReq.type
            )
          );
        } catch (kartoffelError: any) {
          logger.error('searchApproverByDisplayName KartoffelError', {
            error: { message: kartoffelError.message },
          });
        }
      }

      const uniqueApproversResult = [
        ...new Map(
          approversResult.map((item: Approver) => [item.entityId, item])
        ).values(),
      ];
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
        const type =
          typeof searchByDomainUserReq.type === typeof ''
            ? approverTypeFromJSON(searchByDomainUserReq.type)
            : searchByDomainUserReq.type;
        if (type === ApproverType.COMMANDER && hasCommanderRank(entity)) {
          response = {
            approvers: getApproverArrayByEntityArray(
              { entities: [entity] },
              searchByDomainUserReq.type
            ),
          };
        } else {
          response = {
            approvers: [],
          };
        }
      }
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
      let updatedRequest: any = undefined;
      let currentUpdateRequest: UpdateApproverDecisionReqService = {
        ...updateApproverDecisionReq,
        approverType: PersonTypeInRequest.UNRECOGNIZED,
      };
      const approverId: any =
        updateApproverDecisionReq.approverDecision?.approver?.id;
      const hasPermission = await hasPermissionToDecide(approverId);
      if (!hasPermission) {
        throw new Error('User has no permission!');
      } else {
        const userType = await ApproverRepository.getUserType({
          entityId: approverId,
        });
        let types: any = userType.type;
        types = types.map((type: any) =>
          typeof type === typeof '' ? approverTypeFromJSON(type) : type
        );
        if (
          types.includes(ApproverType.ADMIN) ||
          types.includes(ApproverType.COMMANDER)
        ) {
          currentUpdateRequest.approverType =
            PersonTypeInRequest.COMMANDER_APPROVER;
          updatedRequest = await RequestService.updateApproverDecision(
            currentUpdateRequest
          );
        }

        if (types.includes(ApproverType.SECURITY)) {
          currentUpdateRequest.approverType =
            PersonTypeInRequest.SECURITY_APPROVER;
          updatedRequest = await RequestService.updateApproverDecision(
            currentUpdateRequest
          );
        }
        if (types.includes(ApproverType.SUPER_SECURITY)) {
          currentUpdateRequest.approverType =
            PersonTypeInRequest.SUPER_SECURITY_APPROVER;
          updatedRequest = await RequestService.updateApproverDecision(
            currentUpdateRequest
          );
        }
        return updatedRequest;
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
