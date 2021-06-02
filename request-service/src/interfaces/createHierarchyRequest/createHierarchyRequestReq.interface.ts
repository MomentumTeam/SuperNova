import { IGroup } from "../group.interface";
import { Domain } from "../../enums/domain.enum";
import { ApproverDecision } from "../../enums/approverDecision.enum";
import { Status } from "../../enums/status.enum";
export interface ICreateHierarchyRequestReq {
  newChild: string;
  parent: IGroup;
  domain: Domain;
  submittedBy: string;
  commanderDecision?: ApproverDecision;
  securityDecision?: ApproverDecision;
  commanders: string[];
  createdAt: Date;
  updatedAt: Date;
  status?: Status;
}
