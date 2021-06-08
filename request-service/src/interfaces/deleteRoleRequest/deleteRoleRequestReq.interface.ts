import { IRole } from "../kartoffelTypes/role.interface";
import { IRequestReq } from "../requestReq.interface";

export interface IDeleteRoleRequestReq extends IRequestReq {
  role: IRole;
}
