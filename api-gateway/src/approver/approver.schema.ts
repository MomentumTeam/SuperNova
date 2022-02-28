import {
  ApproverType,
  Decision,
  PersonTypeInRequest,
} from '../interfaces/protoc/proto/requestService';

const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

// GET
export const getAllApproversSchema = Joi.object({
  body: {},
  params: {},
  query: {
    type: Joi.string().valid(...Object.keys(ApproverType)),
  },
});

export const getAllMyApproverTypes = Joi.object({
  body: {},
  params: {},
  query: {}
})

export const searchHighCommandersByDisplayNameValidSchema = Joi.object({
  body: {},
  params: {
    displayName: Joi.string().required(),
  },
  query: {},
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

export const getUserTypeValidSchema = Joi.object({
  body: {},
  params: {
    id: Joi.objectId().required(),
  },
  query: {},
});

// POST
export const isApproverValidSchema = Joi.object({
  body: {
    approverId: Joi.objectId().required(),
    groupId: Joi.objectId().required(),
    isOrganization: Joi.boolean().default(false),
  },
  params: {},
  query: {},
});

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

export const includesSpecialGroupSchema = Joi.object({
  body: {
    groupIds: Joi.array().items(Joi.objectId()),
  },
  params: {},
  query: {},
});

// PUT
export const approverDecisionObj = Joi.object({
  decision: Joi.string()
    .valid(...Object.keys(Decision))
    .required(),
  reason: Joi.string(),
  date: Joi.date(),
});

export const updateApproverDecisionSchema = Joi.object({
  body: {
    decision: approverDecisionObj.required(),
  },
  params: {
    requestId: Joi.objectId().required(),
  },
  query: {},
});

// DELETE
export const deleteApproverSchema = Joi.object({
  body: {},
  params: {},
  query: {
    groupInChargeId: Joi.objectId(),
    type: Joi.string()
      .valid(...Object.keys(ApproverType))
      .required(),
  },
});
