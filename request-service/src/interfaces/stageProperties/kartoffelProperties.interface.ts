export interface IKartoffelProperties {
  //CreateOG
  name: string;
  parent: string;
  source: string; //for almost all requests

  //CreateRole
  jobTitle: string;
  directGroup: string;
  roleId: string;
  type: string;
  uniqueId: string;
  mail: string;
  isRoleAttachable: boolean;

  //AssignRoleToEntity, same as changing role to entity
  id: string;
  //uniqueId

  //CreateEntity
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

  //RenameOG
  // ?

  //RenameRole
  // ?

  //EditEntity
  //same as CreateEntity + id

  //DeleteOG
  //id

  //DeleteRole
  //roleId
  //uniqueId

  //DisconectRoleFromEntity
  //uniqueId
  //id
}
