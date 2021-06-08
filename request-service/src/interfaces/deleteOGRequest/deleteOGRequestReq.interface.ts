import { IOrganizationGroup } from "../kartoffelTypes/organizationGroup.interface";
import { IRequestReq } from "../requestReq.interface";

export interface IDeleteOGRequestReq extends IRequestReq {
  organizationGroup: IOrganizationGroup;
}
