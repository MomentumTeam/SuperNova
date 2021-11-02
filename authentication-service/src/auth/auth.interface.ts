export interface IUserToken {
  // SHRAGA
  id: string;
  genesisId: string;
  iat: number;
  exp: number;

  // KARTOFFEL
  identityCard: string;
  personalNumber: string;
  displayName: string;
  fullName: string;

  // APPROVER
  types: string[];
}
