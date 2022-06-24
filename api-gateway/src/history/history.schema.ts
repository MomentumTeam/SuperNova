// import {
//     Decision,
//   } from '../interfaces/protoc/proto/requestService';
  
  const Joi = require('joi');
  Joi.objectId = require('joi-objectid')(Joi);
  
  // GET

  export const getEventsByRoleIdSchema = Joi.object({
    body: {},
    params: {
      roleId: Joi.string().required(),
    },
    query: {
      from: Joi.number().default(0),
      to: Joi.number().default(100),
    },
  });

  export const getEventsByGroupIdSchema = Joi.object({
    body: {},
    params: {
      groupId: Joi.string().required(),
    },
    query: {
      from: Joi.number().default(0),
      to: Joi.number().default(100),
      showRoles: Joi.number().default(true),
    },
  });

  export const getEventsByEntityIdSchema = Joi.object({
    body: {},
    params: {
      entityId: Joi.string().required(),
    },
    query: {
      from: Joi.number().default(0),
      to: Joi.number().default(100),
    },
  });

  export const getEventsSubmmitedByEntityIdSchema = Joi.object({
    body: {},
    params: {
      entityId: Joi.string().required(),
    },
    query: {
      from: Joi.number().default(0),
      to: Joi.number().default(100),
    },
  });
