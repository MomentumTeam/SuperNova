import { StageStatus } from "../../../enums/requestService/stageStatus.enum";

export interface IADStatus {
  status: StageStatus;
  message: string;
}
