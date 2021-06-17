export interface IGetRequestByIdReq {
  id: string;
}

export class GetRequestByIdReq implements IGetRequestByIdReq {
  id: string;
  constructor(id: string) {
    this.id = id;
  }
}
