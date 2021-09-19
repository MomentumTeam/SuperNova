import { ApprovementStatus } from '../interfaces/protoc/proto/requestService';

const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

// GET
export const getAllRequestsSchema = Joi.object({
  body: {},
  params: {},
  query: {
    from: Joi.number().default(0),
    to: Joi.number().default(100),
    status: Joi.string().valid(...Object.keys(ApprovementStatus)),
  },
});

export const getRequestByIdSchema = Joi.object({
  body: {},
  params: {
    id: Joi.objectId().required(),
  },
  query: {},
});

export const getMyRequestsSchema = Joi.object({
  body: {},
  params: {},
  query: {
    from: Joi.number().default(0),
    to: Joi.number().default(100),
  },
});

export const getRequestsByCommanderSchema = Joi.object({
  body: {},
  params: {},
  query: {
    from: Joi.number().default(0),
    to: Joi.number().default(100),
  },
});

export const getRequestsSubmittedBySchema = Joi.object({
  body: {},
  params: {
    id: Joi.objectId().required(),
  },
  query: {
    from: Joi.number().default(0),
    to: Joi.number().default(100),
  },
});

export const getRequestBySerialNumberSchema = Joi.object({
  body: {},
  params: {
    serialNumber: Joi.string().required(),
  },
  query: {},
});

// export const getRequestsBySubmitterIdentifierSchema = Joi.object({
//   body: {},
//   params: {
//     serialNumber: Joi.string().required(),
//   },
//   query: {},
// });

export const searchRequestsBySubmitterDisplayNameSchema = Joi.object({
    body: {},
    params: {
      serialNumber: Joi.string().required(),
    },
    query: {},
  });
