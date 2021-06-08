import { IRole } from "./role.interface";

export interface IDigitalIdentity {
  uniqueId: string;
  type: string;
  source: string;
  mail: string;
  entityId: string;
  createdAt: number;
  updatedAt: number;
  isRoleAttachable: boolean;
  role: IRole;
}
