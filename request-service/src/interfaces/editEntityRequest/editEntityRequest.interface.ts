import { IEntity } from "../kartoffelTypes/entity.interface";
import { IEntityProperties } from "../kartoffelTypes/entityProperties.interface";
import { IRequest } from "../request.interface";

export interface IEditEntityRequest extends IRequest {
  entity: IEntity;
  entityProperties: IEntityProperties;
}
