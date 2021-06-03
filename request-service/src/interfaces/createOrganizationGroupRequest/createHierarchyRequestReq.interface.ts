import { IGroup } from "../group.interface";
import { IRequestReq } from "../requestReq.interface";
export interface ICreateHierarchyRequestReq extends IRequestReq {
  newChild: string;
  parent: IGroup;
}
