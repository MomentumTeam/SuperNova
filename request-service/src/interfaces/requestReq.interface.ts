import { ApproverDecision } from "../enums/approverDecision.enum";
import { Domain } from "../enums/domain.enum";
import { Status } from "../enums/status.enum";

export interface IRequestReq {
  domain: Domain;
  submittedBy: string;
  commanderDecision?: ApproverDecision;
  securityDecision?: ApproverDecision;
  commanders: string[];
  status?: Status;
}
