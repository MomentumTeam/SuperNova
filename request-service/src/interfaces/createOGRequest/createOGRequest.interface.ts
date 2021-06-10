import { IOrganizationGroup } from "../kartoffelTypes/organizationGroup.interface";
import { IOrganizationGroupMin } from "../kartoffelTypes/organizationGroupMin.interface";
import { IRequest } from "../request.interface";
export interface ICreateOGRequest extends IRequest {
  ogProperties: IOrganizationGroupMin;
  createdOG: IOrganizationGroup;
}
