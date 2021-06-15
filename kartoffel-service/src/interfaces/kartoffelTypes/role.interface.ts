export interface IRole {
  roleId: string;
  jobTitle: string;
  digitalIdentityUniqueId: string;
  directGroup: string;
  hierarchy: string;
  hierarchyIds: string[];
  source: string;
  createdAt: number;
  updatedAt: number;
}

export class Role implements IRole {
  roleId: string;
  jobTitle: string;
  digitalIdentityUniqueId: string;
  directGroup: string;
  hierarchy: string;
  hierarchyIds: string[];
  source: string;
  createdAt: number;
  updatedAt: number;
  constructor(
    roleId: string,
    jobTitle: string,
    digitalIdentityUniqueId: string,
    directGroup: string,
    hierarchy: string,
    hierarchyIds: string[],
    source: string,
    createdAt: number,
    updatedAt: number
  ) {
    this.roleId = roleId;
    this.jobTitle = jobTitle;
    this.digitalIdentityUniqueId = digitalIdentityUniqueId;
    this.directGroup = directGroup;
    this.hierarchy = hierarchy;
    this.hierarchyIds = hierarchyIds;
    this.source = source;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
