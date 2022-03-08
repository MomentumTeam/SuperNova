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
const ObjectId = require('mongoose').Types.ObjectId;
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
      query = {
        'submittedBy.id': { $ne: ObjectId(id) },
        'commanders.id': ObjectId(id),
      };
      break;
    case PersonTypeInRequest.SECURITY_APPROVER:
      query = {
        'submittedBy.id': { $ne: ObjectId(id) },
        'securityApprovers.id': ObjectId(id),
      };
      break;
    case PersonTypeInRequest.SUPER_SECURITY_APPROVER:
      query = {
        'submittedBy.id': { $ne: ObjectId(id) },
        'superSecurityApprovers.id': ObjectId(id),
      };
      break;
    case PersonTypeInRequest.APPROVER:
      //PersonTypeInRequest.APPROVER
      query = {
        'submittedBy.id': { $ne: ObjectId(id) },
        $or: [
          { 'commanders.id': ObjectId(id) },
          { 'securityApprovers.id': ObjectId(id) },
          { 'superSecurityApprovers.id': ObjectId(id) },
        ],
      };
      break;
    case PersonTypeInRequest.GET_ALL:
      query = { 'submittedBy.id': { $ne: ObjectId(id) } };
      break;
  }
  return query;
}

export function getStatusQuery(status: any) {
  const requestStatus =
    typeof status === typeof '' ? status : requestStatusToJSON(status);
  return { status: requestStatus };
}

export function removeApproverFromArray(id: string, approvers: any) {
  return approvers.filter((approver: any) => approver.id !== id);
}

export function getRequestTypeQuery(type: any) {
  const requestType =
    typeof type === typeof '' ? type : requestTypeToJSON(type);
  return { type: type };
}

export function getAncestorsQuery(
  adminGroupsInCharge: Array<any>,
  securityAdminGroupsInCharge: Array<any>,
  userType: ApproverType[]
) {
  const orArray = [];
  if (userType.includes(ApproverType.ADMIN) && adminGroupsInCharge) {
    orArray.push({ 'submittedBy.ancestors': { $in: adminGroupsInCharge } });
    orArray.push({ 'submittedBy.directGroup': { $in: adminGroupsInCharge } });
  }
  if (
    userType.includes(ApproverType.SECURITY_ADMIN) &&
    securityAdminGroupsInCharge
  ) {
    orArray.push({
      'submittedBy.ancestors': { $in: securityAdminGroupsInCharge },
      hasSecurityAdmin: true,
    });
    orArray.push({
      'submittedBy.directGroup': { $in: securityAdminGroupsInCharge },
      hasSecurityAdmin: true,
    });
  }
  return {
    $or: orArray,
  };
}

export function getSearchQuery(searchQuery: any) {
  let orArray = [];
  orArray = searchFields.map((field) => {
    if (field)
      return {
        [field.name]: {
          $regex: searchQuery,
          $options: 'i',
        },
      };
  });
  return {
    $or: orArray,
  };
}

export function getSortQuery(sortField: any, sortOrder: any) {
  sortField =
    typeof sortField === typeof '' ? sortFieldFromJSON(sortField) : sortField;
  sortOrder =
    typeof sortOrder === typeof '' ? sortOrderFromJSON(sortOrder) : sortOrder;
  sortOrder = sortOrder === SortOrder.INC ? 1 : -1;
  switch (sortField) {
    case SortField.REQUEST_TYPE:
      return {
        type: sortOrder,
        sortStatusId: 1,
      };
    case SortField.SUBMITTED_BY:
      return {
        'submittedBy.displayName': sortOrder,
        sortStatusId: 1,
      };
    case SortField.CREATED_AT:
      return {
        createdAt: sortOrder,
        sortStatusId: 1,
      };
    case SortField.UPDATED_AT:
      return {
        updatedAt: sortOrder,
        sortStatusId: 1,
      };
    case SortField.STATUS:
      return {
        sortStatusId: sortOrder,
      };
    default:
      return {
        sortStatusId: 1,
        createdAt: 1,
      };
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
        { needSecurityDecision: true, hasSecurityAdmin: false },
      ],
    });
  }
  if (userType.includes(ApproverType.SECURITY_ADMIN)) {
    orArray.push({
      $and: [
        {
          'securityDecision.decision': decisionToJSON(
            Decision.DECISION_UNKNOWN
          ),
        },
        { needSecurityDecision: true, hasSecurityAdmin: true },
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
    let query: any = getIdQuery(id, personTypeInRequest);
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
      return {
        $or: [
          {
            'commanderDecision.decision': {
              $ne: decisionToJSON(Decision.APPROVED),
            },
          },
          {
            'commanderDecision.decision': decisionToJSON(Decision.APPROVED),
          },
        ],
      };
    case ApprovementStatus.SECURITY_APPROVE:
      const hasSecurityAdmin = userType.includes(ApproverType.SECURITY_ADMIN)
        ? true
        : false;
      return {
        $and: [
          { hasSecurityAdmin: hasSecurityAdmin },
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
  let commanderInserted: boolean = false;
  for (let type of userType) {
    if (
      (type === ApproverType.COMMANDER || type === ApproverType.ADMIN) &&
      !commanderInserted
    ) {
      commanderInserted = true;
      or.push(
        getApprovementQuery(ApprovementStatus.COMMANDER_APPROVE, userType)
      );
    } else if (
      type === ApproverType.SECURITY ||
      type === ApproverType.SECURITY_ADMIN
    ) {
      or.push(getApprovementQuery(ApprovementStatus.SECURITY_APPROVE, [type]));
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
