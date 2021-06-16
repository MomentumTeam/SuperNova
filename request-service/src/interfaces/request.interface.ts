import { ApproverDecision } from "../interfaces/approverDecision.interface";
import { RequestStatus } from "../enums/requestStatus.enum";
import { IKartoffelStatus } from "./stageStatuses/kartoffelStatus.interface";
import { IADStatus } from "./stageStatuses/adStatus.interface";
import { IKartoffelProperties } from "./stageProperties/kartoffelProperties.interface";
import { IADProperties } from "./stageProperties/adProperties.interface";
import { RequestType } from "../enums/requestType.enum";

export interface IRequest {
  submittedBy: string;
  status: RequestStatus;
  commanderDecision: ApproverDecision;
  securityDecision: ApproverDecision;
  commanders: string[];
  kartoffelStatus: IKartoffelStatus;
  adStatus: IADStatus;
  KartoffelProperties: IKartoffelProperties;
  adProperties: IADProperties;

  id: string;
  createdAt: number;
  updatedAt: number;
  type: RequestType;
}
