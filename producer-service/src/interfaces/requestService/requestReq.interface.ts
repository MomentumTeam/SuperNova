import { RequestStatus } from "../../enums/requestService/requestStatus.enum";
import { ApproverDecision } from "./approverDecision.interface";
import { IADParams } from "./stageParams/adParams.interface";
import { IKartoffelParams } from "./stageParams/kartoffelParams.interface";
import { IADStatus } from "./stageStatuses/adStatus.interface";
import { IKartoffelStatus } from "./stageStatuses/kartoffelStatus.interface";

export interface IRequestReq {
  submittedBy: string;
  status: RequestStatus;
  commanderDecision: ApproverDecision;
  securityDecision: ApproverDecision;
  commanders: string[];
  kartoffelStatus: IKartoffelStatus;
  adStatus: IADStatus;
  kartoffelParams: IKartoffelParams;
  adParams: IADParams;
}
