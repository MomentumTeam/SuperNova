import { IRequest } from "../request.interface";
import { IRole } from "../kartoffelTypes/role.interface";
import { IEntity } from "../kartoffelTypes/entity.interface";
export interface IAssignRoleToEntityRequest extends IRequest {
  entity: IEntity;
  role: IRole;
}
