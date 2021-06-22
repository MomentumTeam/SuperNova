import { StageStatus } from "../../enums/stageStatus.enum";

export interface IUpdateKartoffelStatusReq {
  requestId: string;
  status: StageStatus;
  message: string;
  createdId: string;
}
