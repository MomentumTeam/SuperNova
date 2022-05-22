const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

export const isRollbackValidSchema = Joi.object({
  body: {},
  params: {
    id: Joi.objectId().required(),
  },
  query: {},
});

export const rollbackInADSchema = Joi.object({
  body: {},
  params: {
    id: Joi.objectId().required(),
  },
  query: {},
});

export const rollbackInKartoffelSchema = Joi.object({
  body: {},
  params: {
    id: Joi.objectId().required(),
  },
  query: {},
});
