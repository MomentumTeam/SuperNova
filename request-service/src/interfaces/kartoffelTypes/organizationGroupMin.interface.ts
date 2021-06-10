import { IGroup } from "./group.interface";

export interface IOrganizationGroupMin {
  id: string;
  hierarchy: string;
  name: string;
  parent: IGroup;
}
