const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

// GET
export const getMyNotificationsSchema = Joi.object({
  body: {},
  params: {},
  query: {
    startTime: Joi.date()
      .default(Date.now() - 86400000 * 7) // week ago
      .max(Date.now()),
    from: Joi.number().default(1),
    to: Joi.number().default(100),
    read: Joi.boolean(),
  },
});

// PUT
export const markAsReadSchema = Joi.object({
  body: {
    notificationIds: Joi.array().items(Joi.objectId()).min(1).required(),
  },
  params: {},
  query: {},
});
