export interface ICreateEntityRequest {
  firstName: string;
  lastName: string;
  identityCard: string;
  personalNumber: string;
  serviceType: string;
  phone: string[];
  mobilePhone: string[];
  address: string;
  clearance: string;
  sex: string;
  birthdate: number;
  entityType: string;
}