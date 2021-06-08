import { IGroup } from "../group.interface";
import { IOrganizationGroup } from "../kartoffelTypes/organizationGroup.interface";
import { IRequestReq } from "../requestReq.interface";
export interface IRenameOGRequestReq extends IRequestReq {
  newName: string;
  organizationGroup: IOrganizationGroup;
}
