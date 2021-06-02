import { RequestType } from "../../enums/requestType.enum";
import { Domain } from "../../enums/domain.enum";
import { IGroup } from "../group.interface";
import { ApproverDecision } from "../../enums/approverDecision.enum";
import { Status } from "../../enums/status.enum";
import { IRequest } from "../request.interface";
import { SecurityLevel } from "../../enums/securityLevel.enum";
import { RoleStatus } from "../../enums/roleStatus.enum";
export interface ICreateRoleRequest extends IRequest {
  roleName: string;
  parent: IGroup;
  securityLevel: SecurityLevel;
  roleStatus: RoleStatus;
}
