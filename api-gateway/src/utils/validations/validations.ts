import * as Joi from 'joi';
import { Request } from 'express';
import { UserError } from '../errors/errorTypes';

class ValidationError extends UserError {
  constructor(message = 'Validation error') {
    super(message, 400);
  }
}

export function transformRequest(
  req: Request,
  value: {
    body: Record<string, any>;
    query: Record<string, any>;
    params: Record<string, any>;
  }
): void {
  req.body = value.body;
  req.query = value.query;
  req.params = value.params;
}

export function validateObject(
  objectToValidate: any,
  joiSchema: Joi.ObjectSchema<any>,
  options?: Joi.ValidationOptions
) {
  const optionsWithDefaultValues: Joi.ValidationOptions = {
    ...options,
    abortEarly: false,
  };
  const validationResult = joiSchema
    .unknown()
    .validate(objectToValidate, optionsWithDefaultValues);

  if (!validationResult.error) {
    return validationResult.value;
  }

  const errorsMessages = validationResult.error.details.map((errorDetails) =>
    errorDetails.message.replace(/"/gi, '')
  );

  throw new ValidationError(errorsMessages.join(', '));
}
