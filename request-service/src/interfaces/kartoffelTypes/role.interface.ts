import { Source } from "../../enums/source.enum";

export interface IRole {
  roleId: string;
  jobTitle: string;
  digitalIdentityUniqueId: string;
  directGroup: string;
  hierarchy: string;
  hierarchyIds: string;
  source: Source;
  createdAt: number;
  updatedAt: number;
}
