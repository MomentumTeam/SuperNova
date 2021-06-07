import { IGroup } from "../group.interface";
import { IRequest } from "../request.interface";
export interface ICreateOGRequest extends IRequest {
  name: string;
  parent: IGroup;
}
