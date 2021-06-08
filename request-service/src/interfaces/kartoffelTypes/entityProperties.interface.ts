import { Clearance } from "../../enums/clearance.enum";
import { EntityType } from "../../enums/entityType.enum";
import { ServiceType } from "../../enums/serviceType.enum";
import { Sex } from "../../enums/sex.enum";

export interface IEntityProperties {
  firstName: string;
  lastName: string;
  identityCard: string;
  personalNumber: string;
  serviceType: ServiceType;
  phone: string[];
  mobilePhone: string[];
  address: string[];
  sex: Sex;
  birthdate: number;
  entityType: EntityType;
  clearance: Clearance;
}
