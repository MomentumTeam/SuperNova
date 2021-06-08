import { IEntity } from "../kartoffelTypes/entity.interface";
import { IRequestReq } from "../requestReq.interface";
import { IEntityProperties } from "../kartoffelTypes/entityProperties.interface";

export interface ICreateEntityRequestReq extends IRequestReq {
  entityProperties: IEntityProperties;
  createdEntity: IEntity;
}
