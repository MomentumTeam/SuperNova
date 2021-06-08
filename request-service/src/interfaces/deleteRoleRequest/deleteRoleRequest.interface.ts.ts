import { IRole } from "../kartoffelTypes/role.interface";
import { IRequest } from "../request.interface";

export interface IDeleteRoleRequest extends IRequest {
  role: IRole;
}
