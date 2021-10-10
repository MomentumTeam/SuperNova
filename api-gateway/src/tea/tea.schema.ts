const Joi = require('joi');

// GET
export const searchUnitSchema = Joi.object({
  body: {},
  params: {},
  query: { nameAndHierarchy: Joi.string().required() },
});
