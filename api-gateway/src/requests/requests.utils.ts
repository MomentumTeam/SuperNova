import { ApproverService } from '../approver/approver.service';
import {
    ApproverDecision,
    ApproverType,
    approverTypeFromJSON,
    Decision,
    EntityMin,
    PersonTypeInRequest,
} from '../interfaces/protoc/proto/requestService';
import { config } from '../config';

export const approveUserRequest = async (req: any, request: any, groupId?: string, highCommander = false) => {
  // Approver request if the user has type different than soldier
  if (req.user.types.length > 0 && req.user.types !== [ApproverType.SOLDIER]) {
    const entityUser: EntityMin = getEntityFromConnectedUser(req);
    const decision: ApproverDecision = getApprovedDecision(entityUser);

    await Promise.all(req.user.types.map(async (type: any) => {
      const approverType = parseFromApproverTypeToPersonInRequest(type);

      switch (approverType) {
        case PersonTypeInRequest.SECURITY_APPROVER:
          request.securityApprovers = request.securityApprovers
            ? [...request.securityApprovers, entityUser]
            : [entityUser];
          request.securityDecision = decision;
          request.securityApprovers = request.securityApprovers.filter(
            (v: any, i: any, a: any) => a.findIndex((t: any) => t.id === v.id) === i
          );

          break;
        case PersonTypeInRequest.SUPER_SECURITY_APPROVER:
          request.superSecurityApprovers = request.superSecurityApprovers
            ? [...request.superSecurityApprovers, entityUser]
            : [entityUser];
          request.superSecurityDecision = decision;
          request.superSecurityApprovers = request.superSecurityApprovers.filter(
            (v: any, i: any, a: any) => a.findIndex((t: any) => t.id === v.id) === i
          );

          break;

        case PersonTypeInRequest.COMMANDER_APPROVER:
          let valid = true;
          if (groupId) {
            const response: any = await ApproverService.isApproverValidForOG({
              approverId: req.user.id,
              groupId: groupId,
            });
            if (!response.isValid) valid = false;
          }

          if (highCommander) {
            if (!req.user?.rank || !config.fields.highCommandersRanks.includes(req.user.rank)) {
              valid = false;
            }
          }

          if (valid) {
            request.commanders = request.commanders ? [...request.commanders, entityUser] : [entityUser];
            request.commanderDecision = decision;
            request.commanders = request.commanders.filter(
              (v: any, i: any, a: any) => a.findIndex((t: any) => t.id === v.id) === i
            );

          }
          break;

        default:
          break;
      }
    }));
  }

  return request;
};

export const parseFromApproverTypeToPersonInRequest = (type: string) => {
    const approverType = approverTypeFromJSON(type);
    switch (approverType) {
        case ApproverType.SECURITY:
            return PersonTypeInRequest.SECURITY_APPROVER;
        case ApproverType.SUPER_SECURITY:
            return PersonTypeInRequest.SUPER_SECURITY_APPROVER;
        case ApproverType.COMMANDER:
            return PersonTypeInRequest.COMMANDER_APPROVER;
        case ApproverType.ADMIN:
            return PersonTypeInRequest.COMMANDER_APPROVER;
        default:
            break;
    }
};

export const getEntityFromConnectedUser = (req: any): EntityMin => {
  const entityUser: EntityMin = {
    displayName: req.user.displayName,
    id: req.user.id,
    identityCard: req.user.identityCard,
    personalNumber: req.user.personalNumber,
  };

  return entityUser;
};

export const getApprovedDecision = (entityUser: EntityMin): ApproverDecision => {
  const decision: ApproverDecision = {
    approver: entityUser,
    decision: Decision.APPROVED,
  };

  return decision;
}; 