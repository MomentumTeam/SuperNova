import { IGroup } from "../group.interface";
import { IRole } from "../kartoffelTypes/role.interface";
import { IRequest } from "../request.interface";
export interface IRenameRoleRequest extends IRequest {
  newName: string;
  role: IRole;
}
