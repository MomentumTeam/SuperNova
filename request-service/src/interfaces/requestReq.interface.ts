import { ApproverDecision } from "../interfaces/approverDecision.interface";
import { RequestStatus } from "../enums/requestStatus.enum";
import { IKartoffelStatus } from "./stageStatuses/kartoffelStatus.interface";
import { IADStatus } from "./stageStatuses/adStatus.interface";
import { IKartoffelProperties } from "./stageProperties/kartoffelProperties.interface";
import { IADProperties } from "./stageProperties/adProperties.interface";

export interface IRequestReq {
  submittedBy: string;
  status: RequestStatus;
  commanderDecision: ApproverDecision;
  securityDecision: ApproverDecision;
  commanders: string[];
  kartoffelStatus: IKartoffelStatus;
  adStatus: IADStatus;
  KartoffelProperties: IKartoffelProperties;
  adProperties: IADProperties;
}
