import { IRequest } from "../request.interface";
import { IRole } from "../kartoffelTypes/role.interface";
import { IOrganizationGroup } from "../kartoffelTypes/organizationGroup.interface";
import { IDigitalIdentity } from "../kartoffelTypes/digitalIdentity.interface";
export interface ICreateRoleRequest extends IRequest {
  roleProperties: IRole;
  organizationGroup: IOrganizationGroup;
  createdRole: IRole;
  createdDI: IDigitalIdentity;
}
