import { Decision } from "../enums/Decision.enum";

export interface ApproverDecision {
  approverId: string;
  approverDecision: Decision;
}
