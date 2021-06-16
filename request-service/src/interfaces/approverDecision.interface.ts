import { Decision } from "../enums/decision.enum";

export interface ApproverDecision {
  approverId: string;
  approverDecision: Decision;
}
