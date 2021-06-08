import { IRequest } from "../request.interface";
import { IRole } from "../kartoffelTypes/role.interface";
import { IEntity } from "../kartoffelTypes/entity.interface";
import { IDigitalIdentity } from "../kartoffelTypes/digitalIdentity.interface";
export interface IAssignRoleToEntityRequest extends IRequest {
  entity: IEntity;
  role: IRole;
  needToDisconnectDI: boolean;
  digitalIdentityToDisconnect: IDigitalIdentity;
}
