import { IEntity } from "../kartoffelTypes/entity.interface";
import { IRequestReq } from "../requestReq.interface";
import { IEntityMin } from "../kartoffelTypes/entityMin.interface";

export interface ICreateEntityRequestReq extends IRequestReq {
  entityProperties: IEntityMin;
  createdEntity: IEntity;
}
