import { Clearance } from "../../enums/clearance.enum";
import { EntityType } from "../../enums/entityType.enum";
import { ServiceType } from "../../enums/serviceType.enum";
import { Sex } from "../../enums/sex.enum";
import { IEntity } from "../kartoffelTypes/entity.interface";
import { IRequest } from "../request.interface";
import { IEntityMin } from "../kartoffelTypes/entityMin.interface";

export interface ICreateEntityRequest extends IRequest {
  entityProperties: IEntityMin;
  createdEntity: IEntity;
}
