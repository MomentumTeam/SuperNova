import {
  ApprovementStatus,
  ApproverType,
  Decision,
  decisionToJSON,
  PersonInfoType,
  PersonTypeInRequest,
} from '../interfaces/protoc/proto/requestService';

export function getIdentifierQuery(
  id: string,
  personTypeInRequest: PersonTypeInRequest
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
    case PersonTypeInRequest.APPROVER:
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
      break;
    case PersonTypeInRequest.GET_ALL:
      //PersonTypeInRequest.APPROVER
      query = {};
      break;
  }
}

export function getIdQuery(
  id: string,
  personTypeInRequest: PersonTypeInRequest
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
    case PersonTypeInRequest.APPROVER:
      //PersonTypeInRequest.APPROVER
      query = {
        $or: [
          { 'commanders.id': id },
          { 'securityApprovers.id': id },
          { 'superSecurityApprovers.id': id },
        ],
      };
      break;
    case PersonTypeInRequest.GET_ALL:
      query = {};
      break;
  }
  return query;
}

export function getQuery(
  id: string,
  personInfoType: PersonInfoType,
  personTypeInRequest: PersonTypeInRequest,
  approvementStatus: ApprovementStatus,
  userType: ApproverType[]
) {
  try {
    let query: any = {};
    if (personTypeInRequest !== PersonTypeInRequest.GET_ALL) {
      if (personInfoType === PersonInfoType.ID) {
        query = getIdQuery(id, personTypeInRequest);
      } else {
        query = getIdentifierQuery(id, personTypeInRequest);
      }
    }

    const approvementQuery: any = getApprovementQuery(
      approvementStatus,
      userType
    );
    query = { ...approvementQuery, ...query };
    return query;
  } catch (error: any) {
    throw error;
  }
}

export function getApprovementQuery(
  approvementStatus: ApprovementStatus,
  userType: ApproverType[]
) {
  switch (approvementStatus) {
    case ApprovementStatus.COMMANDER_APPROVE:
      return {};
    case ApprovementStatus.SECURITY_APPROVE:
      return {
        $and: [
          { needSecurityDecision: true },
          {
            $or: [
              {
                'commanderDecision.decision': decisionToJSON(Decision.APPROVED),
              },
              {
                'securityDecision.decision': decisionToJSON(Decision.APPROVED),
              },
            ],
          },
        ],
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
          {
            needSuperSecurityDecision: true,
            'superSecurityDecision.decision': decisionToJSON(Decision.APPROVED),
          },
        ],
      };
    case ApprovementStatus.ANY:
      return {};
    default:
      //BY_USER_TYPE
      return getAnyApprovementQuery(userType);
  }
}

export function getAnyApprovementQuery(userType: ApproverType[]) {
  let or: any = [];
  for (let type of userType) {
    if (type === ApproverType.COMMANDER || type === ApproverType.ADMIN) {
      or.push(
        getApprovementQuery(ApprovementStatus.COMMANDER_APPROVE, userType)
      );
    } else if (type === ApproverType.SECURITY) {
      or.push(
        getApprovementQuery(ApprovementStatus.SECURITY_APPROVE, userType)
      );
    } else if (type === ApproverType.SUPER_SECURITY) {
      or.push(
        getApprovementQuery(ApprovementStatus.SUPER_SECURITY_APPROVE, userType)
      );
    }
  }
  if (!or || or.length === 0) {
    return {};
  } else {
    return { $or: or };
  }
}
