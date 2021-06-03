import { RequestType } from "../../enums/requestType.enum";
import { Source } from "../../enums/source.enum";
import { IGroup } from "../group.interface";
import { Decision } from "../../enums/Decision.enum";
import { Status } from "../../enums/status.enum";
import { IRequest } from "../request.interface";
export interface ICreateOGRequest extends IRequest {
  name: string;
  parent: IGroup;
}
