import { OGStatus } from "../../enums/ogStatus.enum";
import { Source } from "../../enums/source.enum";
import { IEntity } from "./entity.interface";
import { IRole } from "./role.interface";

export interface IOrganizationGroup {
  id: string;
  name: string;
  source: Source;
  ancestors: string[];
  hierarchy: string;
  status: OGStatus;
  isLeaf: boolean;
  createdAt: number;
  updatedAt: number;
  directEntities: IEntity[];
  directRoles: IRole[];
  parent: string;
}
