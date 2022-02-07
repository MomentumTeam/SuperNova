export class ApplicationError extends Error {
  constructor(public message: string, public status: number, public name: string) {
    super();
  }
}

export class UserError extends ApplicationError {
  constructor(message = "User Error", status = 400) {
    super(message, status, "UserError");
  }
}

export class ServerError extends ApplicationError {
  constructor(message = "Server Error", status = 500) {
    super(message, status, "ServerError");
  }
}

export class UnauthorizedError extends UserError {
  constructor(messege = "Unauthorized") {
    super(messege, 401);
  }
}
