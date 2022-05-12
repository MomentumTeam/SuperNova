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
    case PersonTypeInRequest.ADMIN_APPROVER:
      query = {
        'submittedBy.id': { $ne: ObjectId(id) },
        'adminApprovers.id': ObjectId(id),
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
          { 'adminApprovers.id': ObjectId(id) },
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
  if (
    requestStatus === requestStatusToJSON(RequestStatus.APPROVED_BY_COMMANDER)
  ) {
    return {
      status: {
        $in: [
          requestStatus,
          requestStatusToJSON(RequestStatus.APPROVED_BY_ADMIN),
        ],
      },
    };
  }
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
    if (personTypeInRequest === PersonTypeInRequest.GET_ALL) {
      const approvementQuery: any = getApprovementQuery(
        approvementStatus,
        userType,
        id
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
  userType: ApproverType[],
  id: string
) {
  switch (approvementStatus) {
    case ApprovementStatus.ADMIN_APPROVE:
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
        $or: [
          {
            needSecurityDecision: true,
            needAdminDecision: false,
            'commanderDecision.decision': decisionToJSON(Decision.APPROVED),
            hasSecurityAdmin: hasSecurityAdmin,
          },
          {
            needSecurityDecision: true,
            needAdminDecision: true,
            'adminDecision.decision': decisionToJSON(Decision.APPROVED),
            hasSecurityAdmin: hasSecurityAdmin,
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
            needAdminDecision: false,
            'commanderDecision.decision': decisionToJSON(Decision.APPROVED),
          },
          {
            needSuperSecurityDecision: true,
            needSecurityDecision: false,
            needAdminDecision: true,
            'adminDecision.decision': decisionToJSON(Decision.APPROVED),
          },
        ],
      };
    case ApprovementStatus.COMMANDER_APPROVE:
      return {
        'submittedBy.id': { $ne: ObjectId(id) },
        'commanders.id': ObjectId(id),
      };

    case ApprovementStatus.ANY:
      return {};
    default:
      //BY_USER_TYPE
      return getApprovementQueryByUserType(userType, id);
  }
}

export function getApprovementQueryByUserType(
  userType: ApproverType[],
  id: string
) {
  let or: any = [];
  for (let type of userType) {
    if (type === ApproverType.ADMIN) {
      or.push(
        getApprovementQuery(ApprovementStatus.ADMIN_APPROVE, userType, id)
      );
    } else if (
      type === ApproverType.SECURITY ||
      type === ApproverType.SECURITY_ADMIN
    ) {
      or.push(
        getApprovementQuery(ApprovementStatus.SECURITY_APPROVE, [type], id)
      );
    } else if (type === ApproverType.SUPER_SECURITY) {
      or.push(
        getApprovementQuery(
          ApprovementStatus.SUPER_SECURITY_APPROVE,
          userType,
          id
        )
      );
    } else if (type === ApproverType.COMMANDER) {
      or.push(
        getApprovementQuery(ApprovementStatus.COMMANDER_APPROVE, userType, id)
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
