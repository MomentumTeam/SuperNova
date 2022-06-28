const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

export const sendHierarchyDataMailSchema = Joi.object({
  body: {
    hierarchy: Joi.string().required(),
    withRoles: Joi.boolean().default(true),
    direct: Joi.boolean().default(false),
  },
  params: {},
  query: {},
});
