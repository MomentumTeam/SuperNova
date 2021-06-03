import { ApproverDecision } from "../interfaces/approverDecision.interface";
import { Source } from "../enums/source.enum";
import { Status } from "../enums/status.enum";

export interface IRequestReq {
  source: Source;
  submittedBy: string;
  commanderDecision?: ApproverDecision;
  securityDecision?: ApproverDecision;
  commanders: string[];
  status?: Status;
}
