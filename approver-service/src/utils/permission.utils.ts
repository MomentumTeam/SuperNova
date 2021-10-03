import { ApproverRepository } from '../approver/approver.repository';
import { ApproverType, approverTypeFromJSON, PersonTypeInRequest } from '../interfaces/protoc/proto/requestService';

export async function hasPermissionToDecide(
  entityId: string,
  personTypeInRequest: PersonTypeInRequest,
  requestId: string
): Promise<boolean> {
  try {
    const userType = await ApproverRepository.getUserType({
      entityId: entityId,
    });
    let types: any = userType.type;
    types = types.map((type: any) =>
      typeof type === typeof '' ? approverTypeFromJSON(type) : type
    );
    if (types.includes(ApproverType.ADMIN)) {
      return true;
    }
    const commanderFlag =
      personTypeInRequest === PersonTypeInRequest.COMMANDER_APPROVER &&
      types.includes(ApproverType.COMMANDER);
    const securityFlag =
      personTypeInRequest === PersonTypeInRequest.SECURITY_APPROVER &&
      (types.includes(ApproverType.SECURITY) ||
        types.includes(ApproverType.SUPER_SECURITY));
    const superSecurityFlag =
      personTypeInRequest === PersonTypeInRequest.SUPER_SECURITY_APPROVER &&
      (types.includes(ApproverType.SECURITY) ||
        types.includes(ApproverType.SUPER_SECURITY));
    return commanderFlag || securityFlag || superSecurityFlag;
  } catch (error) {
    throw error;
  }
}
