import { IGroup } from "../group.interface";
import { Domain } from "../../enums/domain.enum";
import { ApproverDecision } from "../../enums/approverDecision.enum";
import { Status } from "../../enums/status.enum";
import { IRequestReq } from "../requestReq.interface";
export interface ICreateHierarchyRequestReq extends IRequestReq {
  newChild: string;
  parent: IGroup;
}
