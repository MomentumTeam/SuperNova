import { IGroup } from "./group.interface";
export interface ICreateHierarchyRequestReq {
  newChild: string;
  parent: IGroup;
  submittedBy: string;
  commanderApproved: boolean;
  securityApproved: boolean;
  commanders: string[];
  createdAt: Date;
  updatedAt: Date;
}
