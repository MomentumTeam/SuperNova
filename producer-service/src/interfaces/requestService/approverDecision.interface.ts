import { Decision } from "../../enums/requestService/decision.enum";

export interface ApproverDecision {
  approverId: string;
  approverDecision: Decision;
}
