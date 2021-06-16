import { IRequest } from "../request.interface";

export interface IUpdateRequestReq {
  id: string;
  requestProperties: IRequest;
}
