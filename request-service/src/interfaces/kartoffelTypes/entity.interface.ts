import { IDigitalIdentity } from "./digitalIdentity.interface";
import { IEntityMin } from "./entityMin.interface";
export interface IEntity extends IEntityMin {
  displayName: string;
  irectGroup: string;
  hierarchy: string;
  akaUnit: string;
  dischargeDate: number;
  rank: string;
  mail: string;
  jobTitle: string;
  createdAt: number;
  updatedAt: number;
  digitalIdentities: IDigitalIdentity[];
}
