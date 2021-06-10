import { Source } from "../../enums/source.enum";
import { IRoleMin } from "./roleMin.interface";

export interface IRole extends IRoleMin {
  directGroup: string;
  hierarchy: string;
  hierarchyIds: string[];
  source: Source;
  createdAt: number;
  updatedAt: number;
}
