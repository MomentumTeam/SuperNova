import { ApproverDecision } from "../interfaces/approverDecision.interface";
import { Source } from "../enums/source.enum";
import { RequestType } from "../enums/requestType.enum";
import { Status } from "../enums/status.enum";

export interface IRequest {
  id: string;
  type: RequestType;
  source: Source;
  submittedBy: string;
  commanderDecision: ApproverDecision;
  securityDecision: ApproverDecision;
  commanders: Array<string>;
  createdAt: Number;
  updatedAt: Number;
  status: Status;
  generatedKartoffelId: string;
}
