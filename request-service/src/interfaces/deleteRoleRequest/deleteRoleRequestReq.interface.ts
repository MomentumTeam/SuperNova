import { IRoleMin } from "../kartoffelTypes/roleMin.interface";
import { IRequestReq } from "../requestReq.interface";

export interface IDeleteRoleRequestReq extends IRequestReq {
  role: IRoleMin;
}
