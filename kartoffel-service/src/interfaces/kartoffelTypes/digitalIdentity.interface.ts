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
  role: IRole | null;
}

export class DigitalIdentity implements IDigitalIdentity {
  type: string;
  source: string;
  mail: string;
  uniqueId: string;
  entityId: string;
  createdAt: number;
  updatedAt: number;
  isRoleAttachable: boolean;
  role: IRole | null;
  constructor(
    type: string,
    source: string,
    mail: string,
    uniqueId: string,
    entityId: string,
    createdAt: number,
    updatedAt: number,
    isRoleAttachable: boolean,
    role: IRole | null
  ) {
    this.type = type;
    this.source = source;
    this.mail = mail;
    this.uniqueId = uniqueId;
    this.entityId = entityId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.isRoleAttachable = isRoleAttachable;
    this.role = role;
  }
}
