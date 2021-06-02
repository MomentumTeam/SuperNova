import { IGroup } from "../group.interface";
import { IRequestReq } from "../requestReq.interface";
import { SecurityLevel } from "../../enums/securityLevel.enum";
import { RoleStatus } from "../../enums/roleStatus.enum";
export interface ICreateRoleRequestReq extends IRequestReq {
  roleName: string;
  parent: IGroup;
  securityLevel: SecurityLevel;
  roleStatus: RoleStatus;
}
