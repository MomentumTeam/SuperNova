import { IRequestReq } from "../requestReq.interface";
import { IEntity } from "../kartoffelTypes/entity.interface";
import { IRole } from "../kartoffelTypes/role.interface";
import { IDigitalIdentity } from "../kartoffelTypes/digitalIdentity.interface";
export interface IAssignRoleToEntityRequestReq extends IRequestReq {
  entity: IEntity;
  role: IRole;
  needToDisconnectDI: boolean;
  digitalIdentityToDisconnect: IDigitalIdentity;
}
