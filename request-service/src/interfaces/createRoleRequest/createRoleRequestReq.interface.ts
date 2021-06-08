import { IRequestReq } from "../requestReq.interface";
import { IRole } from "../kartoffelTypes/role.interface";
import { IDigitalIdentity } from "../kartoffelTypes/digitalIdentity.interface";
import { IOrganizationGroup } from "../kartoffelTypes/organizationGroup.interface";
export interface ICreateRoleRequestReq extends IRequestReq {
  roleProperties: IRole;
  organizationGroup: IOrganizationGroup;
  createdRole: IRole;
  createdDI: IDigitalIdentity;
}
