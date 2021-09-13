import { PersonTypeInRequest } from '../interfaces/protoc/proto/requestService';

export function getIdentifierQuery(
  id: string,
  personTypeInRequest: PersonTypeInRequest
) {
  switch (personTypeInRequest) {
    case PersonTypeInRequest.SUBMITTER:
      return {
        $or: [
          { 'submittedBy.identityCard': id },
          { 'submittedBy.personalNumber': id },
        ],
      };
    case PersonTypeInRequest.COMMANDER_APPROVER:
      return {
        $or: [
          { 'commanders.identityCard': id },
          { 'commanders.personalNumber': id },
        ],
      };
    case PersonTypeInRequest.SECURITY_APPROVER:
      return {
        $or: [
          { 'securityApprovers.identityCard': id },
          { 'securityApprovers.personalNumber': id },
        ],
      };
    case PersonTypeInRequest.SUPER_SECURITY_APPROVER:
      return {
        $or: [
          { 'superSecurityApprovers.identityCard': id },
          { 'superSecurityApprovers.personalNumber': id },
        ],
      };
    default:
      //PersonTypeInRequest.APPROVER
      return {
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
}

export function getIdQuery(
  id: string,
  personTypeInRequest: PersonTypeInRequest
) {
  switch (personTypeInRequest) {
    case PersonTypeInRequest.SUBMITTER:
      return { 'submittedBy.id': id };
    case PersonTypeInRequest.COMMANDER_APPROVER:
      return { 'commanders.id': id };
    case PersonTypeInRequest.SECURITY_APPROVER:
      return { 'securityApprovers.id': id };
    case PersonTypeInRequest.SUPER_SECURITY_APPROVER:
      return { 'superSecurityApprovers.id': id };
    default:
      //PersonTypeInRequest.APPROVER
      return {
        $or: [
          { 'commanders.id': id },
          { 'securityApprovers.id': id },
          { 'superSecurityApprovers.id': id },
        ],
      };
  }
}
