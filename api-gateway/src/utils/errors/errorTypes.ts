export class ApplicationError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super();

    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.message = message || "Error: Undefined Application Error";
    this.status = status || 500;
  }
}

export class ServerError extends ApplicationError {
  constructor(message = "Internal Server Error", status = 500) {
    super(message, status);
  }
}

export class UserError extends ApplicationError {
  constructor(message = "User Error", status = 400) {
    super(message, status);
  }
}
