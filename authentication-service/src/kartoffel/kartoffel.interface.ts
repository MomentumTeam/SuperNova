import { Types } from 'mongoose';

interface IDigitalIdentity {
  type: string;
  source: string;
  mail: string;
  uniqueID: string;
  entityId: string;
  createdAt: Date;
  updatedAt: Date;
  isRoleAttachable: Boolean;
}

export interface IUser {
  _id?: string;
  id: string;
  displayName: string;
  identityCard: string;
  digitalIdentities: IDigitalIdentity[];
  hierarchy: string;
  directGroup: string;
  ancestors: string[];
  entityType: string;
  phone: string[];
  mobilePhone: string[];
  personalNumber: string;
  serviceType: string;
  firstName: string;
  lastName: string;
  fullName: string;
  akaUnit: string;
  dischargeDay: Date;
  rank: string;
  mail: string;
  jobTitle: string;
  address?: string;
  clearance?: string;
  sex?: string;
  birthDate?: Date;
  updatedAt?: Date;
  createdAt?: Date;
  goalUserID?: string;
}
