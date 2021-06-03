import { IGroup } from "../group.interface";
import { IRequest } from "../request.interface";
import { Clearance } from "../../enums/clearance.enum";
import { RoleStatus } from "../../enums/roleStatus.enum";
export interface ICreateRoleRequest extends IRequest {
  jobTitle: string;
  parent: IGroup;
  clearance: Clearance;
  roleStatus: RoleStatus;
}
