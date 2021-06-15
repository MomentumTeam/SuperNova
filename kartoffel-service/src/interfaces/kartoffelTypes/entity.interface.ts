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
  dischargeDay: number;
  rank: string;
  mail: string;
  jobTitle: string;
  phone: string[];
  mobilePhone: string[];
  address: string;
  clearance: string;
  sex: string;
  birthdate: number;
  createdAt: number;
  updatedAt: number;
  digitalIdentities: IDigitalIdentity[] | null;
}

export class Entity implements IEntity {
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
  dischargeDay: number;
  rank: string;
  mail: string;
  jobTitle: string;
  phone: string[];
  mobilePhone: string[];
  address: string;
  clearance: string;
  sex: string;
  birthdate: number;
  createdAt: number;
  updatedAt: number;
  digitalIdentities: IDigitalIdentity[] | null;
  constructor(
    id: string,
    displayName: string,
    directGroup: string,
    hierarchy: string,
    entityType: string,
    identityCard: string,
    personalNumber: string,
    serviceType: string,
    firstName: string,
    lastName: string,
    akaUnit: string,
    dischargeDay: number,
    rank: string,
    mail: string,
    jobTitle: string,
    phone: string[],
    mobilePhone: string[],
    address: string,
    clearance: string,
    sex: string,
    birthdate: number,
    createdAt: number,
    updatedAt: number,
    digitalIdentities: IDigitalIdentity[] | null
  ) {
    this.id = id;
    this.displayName = displayName;
    this.directGroup = directGroup;
    this.hierarchy = hierarchy;
    this.entityType = entityType;
    this.identityCard = identityCard;
    this.personalNumber = personalNumber;
    this.serviceType = serviceType;
    this.firstName = firstName;
    this.lastName = lastName;
    this.akaUnit = akaUnit;
    this.dischargeDay = dischargeDay;
    this.rank = rank;
    this.mail = mail;
    this.jobTitle = jobTitle;
    this.phone = phone;
    this.mobilePhone = mobilePhone;
    this.address = address;
    this.clearance = clearance;
    this.sex = sex;
    this.birthdate = birthdate;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.digitalIdentities = digitalIdentities;
  }
}
