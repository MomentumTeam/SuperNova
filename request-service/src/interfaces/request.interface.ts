import { ApproverDecision } from "../enums/approverDecision.enum";
import { Domain } from "../enums/domain.enum";
import { RequestType } from "../enums/requestType.enum";
import { Status } from "../enums/status.enum";

export interface IRequest {
  _id: string;
  type: RequestType;
  domain: Domain;
  submittedBy: string;
  commanderDecision: ApproverDecision;
  securityDecision: ApproverDecision;
  commanders: Array<string>;
  createdAt: Number;
  updatedAt: Number;
  status: Status;
}
