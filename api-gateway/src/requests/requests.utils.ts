import {
    ApproverDecision,
    ApproverType,
    approverTypeFromJSON,
    Decision,
    EntityMin,
    PersonTypeInRequest,
} from '../interfaces/protoc/proto/requestService';

export const approveUserRequest = async (req: any, request: any) => {
    if (req.user.types.length > 0 && req.user.types !== [ApproverType.SOLDIER]) {
        req.user.types.map((type: any) => {
            const approverType = parseFromApproverTypeToPersonInRequest(type);

            const entityUser: EntityMin = {
                displayName: req.user.displayName,
                id: req.user.id,
                identityCard: req.user.identityCard,
                personalNumber: req.user.personalNumber,
            };

            const decision: ApproverDecision = {
                approver: entityUser,
                decision: Decision.APPROVED,
            };

            switch (approverType) {
                case PersonTypeInRequest.SECURITY_APPROVER:
                    request.securityApprovers = request.securityApprovers
                        ? [...request.securityApprovers, entityUser]
                        : [entityUser];
                    request.securityDecision = decision;
                    break;
                case PersonTypeInRequest.SUPER_SECURITY_APPROVER:
                    request.superSecurityApprovers = request.superSecurityApprovers
                        ? [...request.superSecurityApprovers, entityUser]
                        : [entityUser];
                    request.superSecurityDecision = decision;
                    break;

                case PersonTypeInRequest.COMMANDER_APPROVER:
                    request.commanders = request.commanders ? [...request.commanders, entityUser] : [entityUser];
                    request.commanderDecision = decision;
                    break;

                default:
                    break;
            }
        });
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
