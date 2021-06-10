import { IEntity } from "../kartoffelTypes/entity.interface";
import { IEntityMin } from "../kartoffelTypes/entityMin.interface";
import { IRequestReq } from "../requestReq.interface";

export interface IEditEntityRequestReq extends IRequestReq {
  entityProperties: IEntityMin;
}
