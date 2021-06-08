import { IEntity } from "../kartoffelTypes/entity.interface";
import { IOrganizationGroup } from "../kartoffelTypes/organizationGroup.interface";
import { IRequest } from "../request.interface";

export interface IDeleteOGRequest extends IRequest {
  organizationGroup: IOrganizationGroup;
}
