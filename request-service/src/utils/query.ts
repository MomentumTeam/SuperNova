import {
  ApprovementStatus,
  Decision,
  decisionToJSON,
  PersonTypeInRequest,
} from '../interfaces/protoc/proto/requestService';

export function getIdentifierQuery(
  id: string,
  personTypeInRequest: PersonTypeInRequest,
  approvementStatus: ApprovementStatus
) {
  let query: any = {};
  switch (personTypeInRequest) {
    case PersonTypeInRequest.SUBMITTER:
      query = {
        $or: [
          { 'submittedBy.identityCard': id },
          { 'submittedBy.personalNumber': id },
        ],
      };
      break;
    case PersonTypeInRequest.COMMANDER_APPROVER:
      query = {
        $or: [
          { 'commanders.identityCard': id },
          { 'commanders.personalNumber': id },
        ],
      };
      break;
    case PersonTypeInRequest.SECURITY_APPROVER:
      query = {
        $or: [
          { 'securityApprovers.identityCard': id },
          { 'securityApprovers.personalNumber': id },
        ],
      };
      break;
    case PersonTypeInRequest.SUPER_SECURITY_APPROVER:
      query = {
        $or: [
          { 'superSecurityApprovers.identityCard': id },
          { 'superSecurityApprovers.personalNumber': id },
        ],
      };
      break;
    default:
      //PersonTypeInRequest.APPROVER
      query = {
        $or: [
          { 'commanders.identityCard': id },
          { 'commanders.personalNumber': id },
          { 'securityApprovers.identityCard': id },
          { 'securityApprovers.personalNumber': id },
          { 'superSecurityApprovers.identityCard': id },
          { 'superSecurityApprovers.personalNumber': id },
        ],
      };
  }
  const approvementQuery: any = getApprovementQuery(approvementStatus);
  query = { ...approvementQuery, ...query };
  return query;
}

export function getIdQuery(
  id: string,
  personTypeInRequest: PersonTypeInRequest,
  approvementStatus: ApprovementStatus
) {
  let query: any = {};
  switch (personTypeInRequest) {
    case PersonTypeInRequest.SUBMITTER:
      query = { 'submittedBy.id': id };
      break;
    case PersonTypeInRequest.COMMANDER_APPROVER:
      query = { 'commanders.id': id };
      break;
    case PersonTypeInRequest.SECURITY_APPROVER:
      query = { 'securityApprovers.id': id };
      break;
    case PersonTypeInRequest.SUPER_SECURITY_APPROVER:
      query = { 'superSecurityApprovers.id': id };
      break;
    default:
      //PersonTypeInRequest.APPROVER
      query = {
        $or: [
          { 'commanders.id': id },
          { 'securityApprovers.id': id },
          { 'superSecurityApprovers.id': id },
        ],
      };
  }
  const approvementQuery: any = getApprovementQuery(approvementStatus);
  query = { ...approvementQuery, ...query };
  return query;
}

export function getApprovementQuery(approvementStatus: ApprovementStatus) {
  switch (approvementStatus) {
    case ApprovementStatus.COMMANDER_APPROVE:
      return {};
    case ApprovementStatus.SECURITY_APPROVE:
      return {
        needSecurityDecision: true,
        'commanderDecision.decision': decisionToJSON(Decision.APPROVED),
      };
    case ApprovementStatus.SUPER_SECURITY_APPROVE:
      return {
        $or: [
          {
            needSuperSecurityDecision: true,
            needSecurityDecision: true,
            'securityDecision.decision': decisionToJSON(Decision.APPROVED),
          },
          {
            needSuperSecurityDecision: true,
            needSecurityDecision: false,
            'commanderDecision.decision': decisionToJSON(Decision.APPROVED),
          },
        ],
      };
    default:
      //ANY
      return {};
  }
}
