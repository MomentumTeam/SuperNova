import { IRole } from "./role.interface";

export interface IDigitalIdentity {
  type: string;
  source: string;
  mail: string;
  uniqueId: string;
  entityId: string;
  createdAt: number;
  updatedAt: number;
  isRoleAttachable: boolean;
  role: IRole;
}
