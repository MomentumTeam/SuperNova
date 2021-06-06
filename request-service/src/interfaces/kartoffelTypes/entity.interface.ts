import { Clearance } from "../../enums/clearance.enum";
import { Sex } from "../../enums/sex.enum";
import { IDigitalIdentity } from "./digitalIdentity.interface";
export interface IEntity {
  id: string;
  displayName: string;
  directGroup: string;
  hierarchy: string;
  entityType: string;
  identityCard: string;
  personalNumber: string;
  serviceType: string;
  firstName: string;
  lastName: string;
  akaUnit: string;
  dischargeDate: string;
  rank: string;
  mail: string;
  jobTitle: string;
  phone: string[];
  mobilePhone: string[];
  address: string;
  clearance: Clearance;
  sex: Sex;
  birthday: number;
  createdAt: number;
  updatedAt: number;
  digitalIdentities: IDigitalIdentity[];
}
