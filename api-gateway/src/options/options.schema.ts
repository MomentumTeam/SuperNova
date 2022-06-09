const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

// GET
export const getUserOptionsSchema = Joi.object({
  body: {},
  params: {},
  query: {},
});

// PATCH
export const updateUserOptionsSchema = Joi.object({
  body: {
    toggleProfilePicture: Joi.boolean(),
    getMailNotifications: Joi.boolean(),
    showPhoneNumber: Joi.boolean(),
  },
  params: {},
  query: {},
});

export const modifyFavoriteCommandersSchema = Joi.object({
  body: { 
    commandersIds: Joi.array().items(Joi.string()).required(),
  },
  params: {},
  query: {},
});
