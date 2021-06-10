import { IOrganizationGroupMin } from "../kartoffelTypes/organizationGroupMin.interface";
import { IRequest } from "../request.interface";

export interface IDeleteOGRequest extends IRequest {
  organizationGroup: IOrganizationGroupMin;
}
