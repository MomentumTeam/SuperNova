import { RequestType } from "../../enums/requestType.enum";
import { Domain } from "../../enums/domain.enum";
import { IGroup } from "../group.interface";
import { ApproverDecision } from "../../enums/approverDecision.enum";
import { Status } from "../../enums/status.enum";
import { IRequest } from "../request.interface";
export interface ICreateHierarchyRequest extends IRequest {
  newChild: string;
  parent: IGroup;
}
