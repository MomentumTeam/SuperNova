export interface IADParams {
  //CreateOG
  ouDisplayName: string;
  ouName: string;
  name: string;

  //CreateRole
  samAccountName: string;
  //ouDisplayName
  jobTitle: string;

  //AssignRoleToEntity
  oldSAMAccountName: string;
  newSAMAccountName: string;
  upn: string;
  firstName: string;
  lastName: string;
  fullName: string;
  rank: string;
  roleSerialCode: string;

  //CreateEntity - nothing

  //RenameOG
  //displayName
  oldName: string;
  newName: string;

  //RenameRole
  //samAccountName
  newJobTitle: string;

  //DeleteOG - ?

  //EditEntity
  //samAccountName
  //firstName
  //lastName
  //fullName

  //DisconectRoleFromEntity
  //samAccountName
}
