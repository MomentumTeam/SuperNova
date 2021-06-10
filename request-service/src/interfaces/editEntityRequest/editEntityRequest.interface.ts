import { IEntity } from "../kartoffelTypes/entity.interface";
import { IEntityMin } from "../kartoffelTypes/entityMin.interface";
import { IRequest } from "../request.interface";

export interface IEditEntityRequest extends IRequest {
  entityProperties: IEntityMin;
}
