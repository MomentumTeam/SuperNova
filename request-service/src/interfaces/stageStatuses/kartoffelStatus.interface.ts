import { StageStatus } from "../../enums/stageStatus.enum";

export interface IKartoffelStatus {
  status: StageStatus;
  message: string;
  createdId: string;
}
