import { EntityType } from "../../enums/entityType.enum";
import { ServiceType } from "../../enums/serviceType.enum";
import { Sex } from "../../enums/sex.enum";
import { IRequest } from "../request.interface";

export interface ICreateEntityRequest extends IRequest {
  firstName: string;
  lastName: string;
  entityCard: string;
  personalNumber: string;
  serviceType: ServiceType;
  phone: string[];
  mobilePhone: string[];
  address: string[];
  sex: Sex;
  birthdate: number;
  entityType: EntityType;
}
