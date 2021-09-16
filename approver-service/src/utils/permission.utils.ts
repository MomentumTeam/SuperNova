import { ApproverRepository } from '../approver/approver.repository';
import {
  UserType,
  userTypeFromJSON,
} from '../interfaces/protoc/proto/approverService';
import { PersonTypeInRequest } from '../interfaces/protoc/proto/requestService';

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
      typeof type === typeof '' ? userTypeFromJSON(type) : type
    );
    if (types.includes(UserType.ADMIN)) {
      return true;
    }
    const commanderFlag =
      personTypeInRequest === PersonTypeInRequest.COMMANDER_APPROVER &&
      types.includes(UserType.COMMANDER);
    const securityFlag =
      personTypeInRequest === PersonTypeInRequest.SECURITY_APPROVER &&
      (types.includes(UserType.SECURITY) ||
        types.includes(UserType.SUPER_SECURITY));
    const superSecurityFlag =
      personTypeInRequest === PersonTypeInRequest.SUPER_SECURITY_APPROVER &&
      (types.includes(UserType.SECURITY) ||
        types.includes(UserType.SUPER_SECURITY));
    return commanderFlag || securityFlag || superSecurityFlag;
  } catch (error) {
    throw error;
  }
}
