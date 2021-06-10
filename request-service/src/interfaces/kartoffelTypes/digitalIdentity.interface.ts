import { Source } from "../../enums/source.enum";
import { IDigitalIdentityMin } from "./digitalIdentityMin.interface";
import { IRole } from "./role.interface";

export interface IDigitalIdentity extends IDigitalIdentityMin {
  uniqueId: string;
  type: string;
  source: Source;
  mail: string;
  entityId: string;
  createdAt: number;
  updatedAt: number;
  isRoleAttachable: boolean;
  role: IRole;
}
