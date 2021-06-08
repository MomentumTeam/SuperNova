import { IEntity } from "../kartoffelTypes/entity.interface";
import { IEntityProperties } from "../kartoffelTypes/entityProperties.interface";
import { IRequestReq } from "../requestReq.interface";

export interface IEditEntityRequestReq extends IRequestReq {
  entity: IEntity;
  entityProperties: IEntityProperties;
}
