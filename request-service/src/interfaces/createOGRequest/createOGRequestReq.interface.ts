import { IRequestReq } from "../requestReq.interface";
import { IOrganizationGroup } from "../kartoffelTypes/organizationGroup.interface";
export interface ICreateOGRequestReq extends IRequestReq {
  ogProperties: IOrganizationGroup;
  createdOG: IOrganizationGroup;
}
