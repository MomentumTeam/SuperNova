import { IOrganizationGroup } from "../kartoffelTypes/organizationGroup.interface";
import { IRequest } from "../request.interface";
export interface ICreateOGRequest extends IRequest {
  ogProperties: IOrganizationGroup;
  createdOG: IOrganizationGroup;
}
