const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

// GET
export const getUserOptionsSchema = Joi.object({
  body: {
      entityId: Joi.string().required()
  },
  params: {},
  query: {},
});

// PUT
export const updateUserOptionsSchema = Joi.object({
  body: {
    toggleProfilePicture: Joi.boolean(),
    getMailNotifications: Joi.boolean(),
    showPhoneNumber: Joi.boolean()
  },
  params: {},
  query: {},
});

export const modifyFavoriteCommandersSchema = Joi.object({
  body: {},
  params: { 
    commanderId: Joi.string()
  },
  query: {},
});
