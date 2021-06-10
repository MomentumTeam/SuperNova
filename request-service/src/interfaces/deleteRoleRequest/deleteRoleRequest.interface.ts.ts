import { IRoleMin } from "../kartoffelTypes/roleMin.interface";
import { IRequest } from "../request.interface";

export interface IDeleteRoleRequest extends IRequest {
  role: IRoleMin;
}
