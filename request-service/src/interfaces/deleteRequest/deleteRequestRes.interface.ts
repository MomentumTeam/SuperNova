import { IDeleteRequestReq } from "./deleteRequestReq.interface";

export interface IDeleteRequestRes {
  success: boolean;
}

export class DeleteRequestRes implements IDeleteRequestRes {
  success: boolean;
  constructor(success: boolean) {
    this.success = success;
  }
}
