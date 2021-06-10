import { IOrganizationGroupMin } from "../kartoffelTypes/organizationGroupMin.interface";
import { IRequest } from "../request.interface";
export interface IRenameOGRequest extends IRequest {
  newName: string;
  organizationGroup: IOrganizationGroupMin;
}
