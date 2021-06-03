import { IGroup } from "../group.interface";
import { Source } from "../../enums/source.enum";
import { Decision } from "../../enums/Decision.enum";
import { Status } from "../../enums/status.enum";
import { IRequestReq } from "../requestReq.interface";
export interface ICreateOGRequestReq extends IRequestReq {
  name: string;
  parent: IGroup;
}
