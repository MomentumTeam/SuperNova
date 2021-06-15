import { IOrganizationGroup } from "./organizationGroup.interface";

export interface IOGArray {
  groups: IOrganizationGroup[];
}

export class OGArray implements IOGArray {
  groups: IOrganizationGroup[];
  constructor(groups: IOrganizationGroup[]) {
    this.groups = groups;
  }
}
