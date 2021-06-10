import { IRequest } from "../request.interface";
import { IRole } from "../kartoffelTypes/role.interface";
import { IOrganizationGroup } from "../kartoffelTypes/organizationGroup.interface";
import { IDigitalIdentity } from "../kartoffelTypes/digitalIdentity.interface";
import { IRoleMin } from "../kartoffelTypes/roleMin.interface";
import { IOrganizationGroupMin } from "../kartoffelTypes/organizationGroupMin.interface";
export interface ICreateRoleRequest extends IRequest {
  roleProperties: IRoleMin;
  ogProperties: IOrganizationGroupMin;
  createdRole: IRole;
  createdDI: IDigitalIdentity;
}
