import { IGroup } from "../group.interface";
import { IRequestReq } from "../requestReq.interface";
export interface IRenameOGRequestReq extends IRequestReq {
  newName: string;
  group: IGroup;
}
