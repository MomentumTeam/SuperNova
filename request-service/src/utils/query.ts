import { searchFields } from '../config';
import {
  ApprovementStatus,
  ApproverType,
  Decision,
  decisionToJSON,
  PersonInfoType,
  PersonTypeInRequest,
  RequestStatus,
  requestStatusToJSON,
  requestTypeToJSON,
  SortField,
  sortFieldFromJSON,
  SortOrder,
  sortOrderFromJSON,
} from '../interfaces/protoc/proto/requestService';

// export function getIdentifierQuery(
//   id: string,
//   personTypeInRequest: PersonTypeInRequest
// ) {
//   let query: any = {};
//   switch (personTypeInRequest) {
//     case PersonTypeInRequest.SUBMITTER:
//       query = {
//         $or: [
//           { 'submittedBy.identityCard': id },
//           { 'submittedBy.personalNumber': id },
//         ],
//       };
//       break;
//     case PersonTypeInRequest.COMMANDER_APPROVER:
//       query = {
//         $or: [
//           { 'commanders.identityCard': id },
//           { 'commanders.personalNumber': id },
//         ],
//       };
//       break;
//     case PersonTypeInRequest.SECURITY_APPROVER:
//       query = {
//         $or: [
//           { 'securityApprovers.identityCard': id },
//           { 'securityApprovers.personalNumber': id },
//         ],
//       };
//       break;
//     case PersonTypeInRequest.SUPER_SECURITY_APPROVER:
//       query = {
//         $or: [
//           { 'superSecurityApprovers.identityCard': id },
//           { 'superSecurityApprovers.personalNumber': id },
//         ],
//       };
//       break;
//     case PersonTypeInRequest.APPROVER:
//       //PersonTypeInRequest.APPROVER
//       query = {
//         $or: [
//           { 'commanders.identityCard': id },
//           { 'commanders.personalNumber': id },
//           { 'securityApprovers.identityCard': id },
//           { 'securityApprovers.personalNumber': id },
//           { 'superSecurityApprovers.identityCard': id },
//           { 'superSecurityApprovers.personalNumber': id },
//         ],
//       };
//       break;
//     case PersonTypeInRequest.GET_ALL:
//       //PersonTypeInRequest.APPROVER
//       query = {};
//       break;
//   }
// }

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

export function getStatusQuery(status: any) {
  const requestStatus =
    typeof status === typeof '' ? status : requestStatusToJSON(status);
  return { status: requestStatus };
}

export function getRequestTypeQuery(type: any) {
  const requestType =
    typeof type === typeof '' ? type : requestTypeToJSON(type);
  return { type: type };
}

export function getSearchQuery(searchQuery: any) {
  let orArray = [];
  orArray = searchFields.map((field) => {
    if (field.type === undefined)
      return {
        [field.name]: {
          $regex: searchQuery,
          $options: "i",
        },
      };

    if (field.type && field.type === "number" && !isNaN(searchQuery)) {
      return { $where: `/${searchQuery}/.test(this.${field.name})` };
    }

    return {};
  });
  return {
    $or: orArray,
  };
}

export function getSortArray(sortField: any, sortOrder: any) {
  sortField =
    typeof sortField === typeof '' ? sortFieldFromJSON(sortField) : sortField;
  sortOrder =
    typeof sortOrder === typeof '' ? sortOrderFromJSON(sortOrder) : sortOrder;
  sortOrder = sortOrder === SortOrder.INC ? 1 : -1;
  switch (sortField) {
    case SortField.REQUEST_TYPE:
      return [
        ['type', sortOrder],
        ['status', 1],
      ];
    case SortField.SUBMITTED_BY:
      return [
        ['submittedBy.displayName', sortOrder],
        ['status', 1],
      ];
    case SortField.CREATED_AT:
      return [
        ['createdAt', sortOrder],
        ['status', 1],
      ];
    case SortField.STATUS:
      return [['status', sortOrder]];
    default:
      return [
        ['createdAt', -1],
        ['status', 1],
      ];
  }
}

export function getWaitingForApproveCountQuery(userType: ApproverType[]) {
  let orArray = [];
  if (
    userType.includes(ApproverType.COMMANDER) ||
    userType.includes(ApproverType.ADMIN)
  ) {
    orArray.push({
      'commanderDecision.decision': decisionToJSON(Decision.DECISION_UNKNOWN),
    });
  }
  if (userType.includes(ApproverType.SECURITY)) {
    orArray.push({
      $and: [
        {
          'securityDecision.decision': decisionToJSON(
            Decision.DECISION_UNKNOWN
          ),
        },
        { needSecurityDecision: true },
      ],
    });
  }
  if (userType.includes(ApproverType.SUPER_SECURITY)) {
    orArray.push({
      $and: [
        {
          'superSecurityDecision.decision': decisionToJSON(
            Decision.DECISION_UNKNOWN
          ),
        },
        { needSuperSecurityDecision: true },
      ],
    });
  }
  if (orArray.length === 0) {
    orArray.push({
      status: {
        $nin: [
          requestStatusToJSON(RequestStatus.DONE),
          requestStatusToJSON(RequestStatus.FAILED),
          requestStatusToJSON(RequestStatus.IN_PROGRESS),
          requestStatusToJSON(RequestStatus.DECLINED),
        ],
      },
    });
  }
  return { $or: orArray };
}

export function getPersonQuery(
  id: string,
  personTypeInRequest: PersonTypeInRequest,
  approvementStatus: ApprovementStatus,
  userType: ApproverType[]
) {
  try {
    let query: any = {};
    if (personTypeInRequest !== PersonTypeInRequest.GET_ALL) {
      query = getIdQuery(id, personTypeInRequest);
    }
    if (personTypeInRequest !== PersonTypeInRequest.SUBMITTER) {
      const approvementQuery: any = getApprovementQuery(
        approvementStatus,
        userType
      );
      query = { ...approvementQuery, ...query };
    }

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
            'commanderDecision.decision': decisionToJSON(Decision.APPROVED),
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
        ],
      };
    case ApprovementStatus.ANY:
      return {};
    default:
      //BY_USER_TYPE
      return getApprovementQueryByUserType(userType);
  }
}

export function getApprovementQueryByUserType(userType: ApproverType[]) {
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

export function isApproverExists(approverArray: any[], newApprover: any) {
  const filteredArray = approverArray.filter((approver) => {
    return approver.id === newApprover.id;
  });
  return filteredArray.length > 0;
}
