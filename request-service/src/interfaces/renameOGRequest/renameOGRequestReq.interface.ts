import { IOrganizationGroupMin } from "../kartoffelTypes/organizationGroupMin.interface";
import { IRequestReq } from "../requestReq.interface";
export interface IRenameOGRequestReq extends IRequestReq {
  newName: string;
  organizationGroup: IOrganizationGroupMin;
}
