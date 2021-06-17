import { StageStatus } from "../../../enums/requestService/stageStatus.enum";

export interface IKartoffelStatus {
  status: StageStatus;
  message: string;
  createdId: string;
}
