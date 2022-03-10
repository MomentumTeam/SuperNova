import { ApproverRepository } from '../approver/approver.repository';
import {
  ApproverType,
  approverTypeFromJSON,
  PersonTypeInRequest,
} from '../interfaces/protoc/proto/requestService';

export async function hasPermissionToDecide(
  entityId: string
): Promise<boolean> {
  try {
    const userType = await ApproverRepository.getUserType({
      entityId: entityId,
    });
    let types: any = userType.type;
    types = types.map((type: any) =>
      typeof type === typeof '' ? approverTypeFromJSON(type) : type
    );
    const commanderFlag =
      types.includes(ApproverType.COMMANDER) ||
      types.includes(ApproverType.ADMIN);
    const securityFlag =
      types.includes(ApproverType.SECURITY) ||
      types.includes(ApproverType.SECURITY_ADMIN);
    const superSecurityFlag = types.includes(ApproverType.SUPER_SECURITY);
    return commanderFlag || securityFlag || superSecurityFlag;
  } catch (error) {
    throw error;
  }
}
