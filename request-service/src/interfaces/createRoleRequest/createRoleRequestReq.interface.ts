import { IRequestReq } from "../requestReq.interface";
import { IRole } from "../kartoffelTypes/role.interface";
import { IDigitalIdentity } from "../kartoffelTypes/digitalIdentity.interface";
import { IRoleMin } from "../kartoffelTypes/roleMin.interface";
import { IOrganizationGroupMin } from "../kartoffelTypes/organizationGroupMin.interface";
export interface ICreateRoleRequestReq extends IRequestReq {
  roleProperties: IRoleMin;
  ogProperties: IOrganizationGroupMin;
  createdRole: IRole;
  createdDI: IDigitalIdentity;
}
