import { IRequest } from "./request.interface";

export interface IRequestArray {
  requests: IRequest[];
  totalCount: number;
}

export class RequestArray implements IRequestArray {
  requests: IRequest[];
  totalCount: number;
  constructor(requests: IRequest[], totalCount: number) {
    this.requests = requests;
    this.totalCount = totalCount;
  }
}
