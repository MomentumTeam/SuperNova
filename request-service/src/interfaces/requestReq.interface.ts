import { ApproverDecision } from "../interfaces/approverDecision.interface";
import { RequestStatus } from "../enums/requestStatus.enum";
import { IKartoffelStatus } from "./stageStatuses/kartoffelStatus.interface";
import { IADStatus } from "./stageStatuses/adStatus.interface";
import { IKartoffelParams } from "./stageParams/kartoffelParams.interface";
import { IADParams } from "./stageParams/adParams.interface";

export interface IRequestReq {
  submittedBy: string;
  status: RequestStatus;
  commanderDecision: ApproverDecision;
  securityDecision: ApproverDecision;
  commanders: string[];
  kartoffelStatus: IKartoffelStatus;
  adStatus: IADStatus;
  KartoffelParams: IKartoffelParams;
  adParams: IADParams;
}
