import { RequestStatus, UserType } from '../interfaces/protoc/proto/approverService';
import { ApproverType } from '../interfaces/protoc/proto/requestService';

const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

// GET
export const getAllApproversSchema = Joi.object({
  body: {},
  params: {},
  query: {
    type: Joi.string().valid(...Object.keys(UserType)),
  },
});

export const getSearchByDisplayName = Joi.object({
  body: {},
  params: {
    displayName: Joi.string().required(),
  },
  query: {
    type: Joi.string()
      .valid(...Object.keys(ApproverType))
      .required(),
    from: Joi.number().default(0),
    to: Joi.number().default(100),
  },
});

export const getSearchByDomainUser = Joi.object({
  body: {},
  params: {
    domainUser: Joi.string().required(),
  },
  query: {
    type: Joi.string()
      .valid(...Object.keys(ApproverType))
      .required(),
  },
});


// POST
export const addApproverSchema = Joi.object({
  body: {
    entityId: Joi.objectId().required(),
    type: Joi.string()
      .valid(...Object.keys(ApproverType))
      .required(),
  },
  params: {},
  query: {},
});

// PUT
export const updateApproverDecisionSchema = Joi.object({
  body: {
    approverId: Joi.objectId().required(), // connected user
    descision: Joi.string()
      .valid(...Object.keys(RequestStatus))
      .required(),
    reason: Joi.string().required(),
    type: Joi.string()
    .valid(...Object.keys(ApproverType))
    .required(), // talk with barak about sending connected user's array
  },
  params: {
    requestId: Joi.objectId().required()
  },
  query: {},
});

// DELETE
export const deleteApproverSchema = Joi.object({
  body: {},
  params: {
    id: Joi.objectId().required(),
  },
  query: {},
});
