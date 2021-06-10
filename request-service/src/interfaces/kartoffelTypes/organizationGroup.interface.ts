import { OGStatus } from "../../enums/ogStatus.enum";
import { Source } from "../../enums/source.enum";
import { IEntity } from "./entity.interface";
import { IOrganizationGroupMin } from "./organizationGroupMin.interface";
import { IRole } from "./role.interface";

export interface IOrganizationGroup extends IOrganizationGroupMin {
  source: Source;
  ancestors: string[];
  status: OGStatus;
  isLeaf: boolean;
  createdAt: number;
  updatedAt: number;
  directEntities: IEntity;
  directRoles: IRole[];
}
