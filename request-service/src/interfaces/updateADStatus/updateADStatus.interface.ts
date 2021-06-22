import { StageStatus } from "../../enums/stageStatus.enum";

export interface IUpdateADStatusReq {
  requestId: string;
  status: StageStatus;
  message: string;
}
