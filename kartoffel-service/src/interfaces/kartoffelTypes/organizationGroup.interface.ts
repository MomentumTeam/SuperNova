import { IEntity } from "./entity.interface";
import { IRole } from "./role.interface";

export interface IOrganizationGroup {
  id: string;
  name: string;
  source: string;
  ancestors: string[];
  hierarchy: string;
  status: string;
  isLeaf: boolean;
  createdAt: number;
  updatedAt: number;
  directEntities: IEntity[] | null;
  directRoles: IRole[] | null;
}

export class OrganizationGroup implements IOrganizationGroup {
  id: string;
  name: string;
  source: string;
  ancestors: string[];
  hierarchy: string;
  status: string;
  isLeaf: boolean;
  createdAt: number;
  updatedAt: number;
  directEntities: IEntity[] | null;
  directRoles: IRole[] | null;
  constructor(
    id: string,
    name: string,
    source: string,
    ancestors: string[],
    hierarchy: string,
    status: string,
    isLeaf: boolean,
    createdAt: number,
    updatedAt: number,
    directEntities: IEntity[] | null,
    directRoles: IRole[] | null
  ) {
    this.id = id;
    this.name = name;
    this.source = source;
    this.ancestors = ancestors;
    this.hierarchy = hierarchy;
    this.status = status;
    this.isLeaf = isLeaf;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.directEntities = directEntities;
    this.directRoles = directRoles;
  }
}
