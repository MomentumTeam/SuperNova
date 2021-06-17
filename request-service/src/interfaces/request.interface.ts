import { ApproverDecision } from "../interfaces/approverDecision.interface";
import { RequestStatus } from "../enums/requestStatus.enum";
import { IKartoffelStatus } from "./stageStatuses/kartoffelStatus.interface";
import { IADStatus } from "./stageStatuses/adStatus.interface";
import { IKartoffelParams } from "./stageParams/kartoffelParams.interface";
import { IADParams } from "./stageParams/adParams.interface";
import { RequestType } from "../enums/requestType.enum";

export interface IRequest {
  submittedBy: string;
  status: RequestStatus;
  commanderDecision: ApproverDecision;
  securityDecision: ApproverDecision;
  commanders: string[] | undefined;
  kartoffelStatus: IKartoffelStatus;
  adStatus: IADStatus;
  kartoffelParams: IKartoffelParams;
  adParams: IADParams;

  id: string;
  createdAt: number;
  updatedAt: number;
  type: RequestType;
}
