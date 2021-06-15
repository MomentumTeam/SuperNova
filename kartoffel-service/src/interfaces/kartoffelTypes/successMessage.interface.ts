export interface ISuccessMessage {
  success: boolean;
}

export class SuccessMessage implements ISuccessMessage {
  success: boolean;
  constructor(success: boolean) {
    this.success = success;
  }
}
