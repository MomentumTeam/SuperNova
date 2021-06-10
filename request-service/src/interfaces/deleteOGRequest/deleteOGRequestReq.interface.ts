import { IOrganizationGroupMin } from "../kartoffelTypes/organizationGroupMin.interface";
import { IRequestReq } from "../requestReq.interface";

export interface IDeleteOGRequestReq extends IRequestReq {
  organizationGroup: IOrganizationGroupMin;
}
