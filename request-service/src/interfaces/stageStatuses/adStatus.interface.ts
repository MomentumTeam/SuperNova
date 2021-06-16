import { StageStatus } from "../../enums/stageStatus.enum";

export interface IADStatus {
  status: StageStatus;
  message: string;
}
