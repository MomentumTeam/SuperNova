import { UserError } from './applicationError';

export class ValidationError extends UserError {
    constructor() {
        super('Validation error', 400);
    }
}

export class NotPermittedError extends UserError {
    constructor() {
        super('Operation not permitted', 403);
    }
}

export class NotFoundError extends UserError {
    constructor() {
        super('Resource not found', 404);
    }
}

