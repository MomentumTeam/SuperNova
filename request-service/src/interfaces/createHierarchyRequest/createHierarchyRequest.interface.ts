import { RequestType } from "../../enums/requestType.enum";
import { Domain } from "../../enums/domain.enum";
import { IGroup } from "../group.interface";
import { Decision } from "../../enums/Decision.enum";
import { Status } from "../../enums/status.enum";
import { IRequest } from "../request.interface";
export interface ICreateHierarchyRequest extends IRequest {
  newChild: string;
  parent: IGroup;
}
