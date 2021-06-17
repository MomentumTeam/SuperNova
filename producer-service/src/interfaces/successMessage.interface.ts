export interface ISuccessMessage {
  success: boolean;
  message: string;
}

export class SuccessMessage implements ISuccessMessage {
  success: boolean;
  message: string;
  constructor(success: boolean, message: string) {
    this.success = success;
    this.message = message;
  }
}
