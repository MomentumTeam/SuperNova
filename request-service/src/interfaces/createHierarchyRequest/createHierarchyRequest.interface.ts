import { RequestType } from "../../enums/requestType.enum";
import { Domain } from "../../enums/domain.enum";
import { IGroup } from "../group.interface";
import { ApproverDecision } from "../../enums/approverDecision.enum";
import { Status } from "../../enums/status.enum";
export interface ICreateHierarchyRequest {
  _id: string;
  type: RequestType;
  domain: Domain;
  newChild: string;
  parent: IGroup;
  submittedBy: string;
  commanderDecision: ApproverDecision;
  securityDecision: ApproverDecision;
  commanders: Array<string>;
  createdAt: Number;
  updatedAt: Number;
  status: Status;
}

export function getCreateHierarchyRequest() {}
