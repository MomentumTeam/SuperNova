import { IRequestReq } from "../requestReq.interface";
import { IOrganizationGroup } from "../kartoffelTypes/organizationGroup.interface";
import { IOrganizationGroupMin } from "../kartoffelTypes/organizationGroupMin.interface";
export interface ICreateOGRequestReq extends IRequestReq {
  ogProperties: IOrganizationGroupMin;
  createdOG: IOrganizationGroup;
}
