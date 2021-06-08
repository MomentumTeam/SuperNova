import { IGroup } from "../group.interface";
import { IOrganizationGroup } from "../kartoffelTypes/organizationGroup.interface";
import { IRequest } from "../request.interface";
export interface IRenameOGRequest extends IRequest {
  newName: string;
  organizationGroup: IOrganizationGroup;
}
