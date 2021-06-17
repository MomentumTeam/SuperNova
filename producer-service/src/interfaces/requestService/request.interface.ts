import { RequestStatus } from "../../enums/requestService/requestStatus.enum";
import { RequestType } from "../../enums/requestService/requestType.enum";
import { ApproverDecision } from "./approverDecision.interface";
import { IADParams } from "./stageParams/adParams.interface";
import { IKartoffelParams } from "./stageParams/kartoffelParams.interface";
import { IADStatus } from "./stageStatuses/adStatus.interface";
import { IKartoffelStatus } from "./stageStatuses/kartoffelStatus.interface";

export interface IRequest {
  submittedBy: string;
  status: RequestStatus;
  commanderDecision: ApproverDecision;
  securityDecision: ApproverDecision;
  commanders: string[] | undefined;
  kartoffelStatus: IKartoffelStatus;
  adStatus: IADStatus;
  KartoffelParams: IKartoffelParams;
  adParams: IADParams;

  id: string;
  createdAt: number;
  updatedAt: number;
  type: RequestType;
}
