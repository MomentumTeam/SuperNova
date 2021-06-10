import { IRequest } from "../request.interface";
import { IRole } from "../kartoffelTypes/role.interface";
import { IEntity } from "../kartoffelTypes/entity.interface";
import { IDigitalIdentity } from "../kartoffelTypes/digitalIdentity.interface";
import { IEntityMin } from "../kartoffelTypes/entityMin.interface";
import { IRoleMin } from "../kartoffelTypes/roleMin.interface";
import { IDigitalIdentityMin } from "../kartoffelTypes/digitalIdentityMin.interface";
export interface IAssignRoleToEntityRequest extends IRequest {
  entity: IEntityMin;
  role: IRoleMin;
  needToDisconnectDI: boolean;
  digitalIdentityToDisconnect: IDigitalIdentityMin;
}
