import { IGroup } from "../group.interface";
import { IRequest } from "../request.interface";
export interface IRenameOGRequest extends IRequest {
  newName: string;
  group: IGroup;
}
