import { IGroup } from "../kartoffelTypes/group.interface";
import { IRole } from "../kartoffelTypes/role.interface";
import { IRequest } from "../request.interface";
export interface IRenameRoleRequest extends IRequest {
  newJobTitle: string;
  role: IRole;
}
