import { IGroup } from "../group.interface";
import { IRole } from "../kartoffelTypes/role.interface";
import { IRequestReq } from "../requestReq.interface";
export interface IRenameRoleRequestReq extends IRequestReq {
  newJobTitle: string;
  role: IRole;
}
