import { IRequestReq } from "../requestReq.interface";
import { IEntity } from "../kartoffelTypes/entity.interface";
import { IRole } from "../kartoffelTypes/role.interface";
import { IDigitalIdentity } from "../kartoffelTypes/digitalIdentity.interface";
import { IEntityMin } from "../kartoffelTypes/entityMin.interface";
import { IRoleMin } from "../kartoffelTypes/roleMin.interface";
import { IDigitalIdentityMin } from "../kartoffelTypes/digitalIdentityMin.interface";
export interface IAssignRoleToEntityRequestReq extends IRequestReq {
  entity: IEntityMin;
  role: IRoleMin;
  needToDisconnectDI: boolean;
  digitalIdentityToDisconnect: IDigitalIdentityMin;
}
