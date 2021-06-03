import { IGroup } from "../group.interface";
import { IRequestReq } from "../requestReq.interface";
import { Clearance } from "../../enums/clearance.enum";
import { RoleStatus } from "../../enums/roleStatus.enum";
export interface ICreateRoleRequestReq extends IRequestReq {
  jobTitle: string;
  parent: IGroup;
  clearance: Clearance;
  roleStatus: RoleStatus;
}
