import { BulkType } from '../interfaces/protoc/proto/bulkService';
import { ErrorType, RequestStatus } from '../interfaces/protoc/proto/requestService';
import { ADStatusObj, ApproverDecisionObj, entityMinObj, kartoffelStatusObj } from '../requests/requests.schema';

const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

// OBJ
const createRoleBulkKartoffelParamsObj = Joi.object({
  directGroup: Joi.string().required(),
  unit: Joi.string().required(),
});

const createRoleBulkADParamsObj = Joi.object({
  ouDisplayName: Joi.string().required(),
});

const rowErrorObj = Joi.object({
  rowNumber: Joi.string().required(),
  error: Joi.string().required(),
  errorType: Joi.string()
    .valid(...Object.keys(ErrorType))
    .required(),
});

const changeRoleHierarchyBulkKartoffelParamsObj = Joi.object({
  directGroup: Joi.string().required(),
});

const changeRoleHierarchyBulkADParamsObj = Joi.object({
  ouDisplayName: Joi.string().required(),
});

// POST

export const createRoleBulkRequestSchema = Joi.object({
  body: {
    status: Joi.string().valid(...Object.keys(RequestStatus)),
    commanderDecision: ApproverDecisionObj,
    securityDecision: ApproverDecisionObj,
    superSecurityDecision: ApproverDecisionObj,
    commanders: Joi.array().items(entityMinObj),
    securityApprovers: Joi.array().items(entityMinObj),
    superSecurityApprovers: Joi.array().items(entityMinObj),
    comments: Joi.string(),
    approversComments: Joi.string(),
    due: Joi.number().unsafe(),
    requestIds: Joi.array().items(Joi.string()),
    rowErrors: Joi.array().items(rowErrorObj),
    excelFilePath: Joi.string().required(),
    kartoffelStatus: kartoffelStatusObj,
    adStatus: ADStatusObj,
    kartoffelParams: createRoleBulkKartoffelParamsObj.required(),
    adParams: createRoleBulkADParamsObj.required(),
  },
  params: {},
  query: {},
});

// PUT
export const changeRoleHierarchyBulkRequestSchema = Joi.object({
  body: {
    status: Joi.string().valid(...Object.keys(RequestStatus)),
    commanderDecision: ApproverDecisionObj,
    securityDecision: ApproverDecisionObj,
    superSecurityDecision: ApproverDecisionObj,
    commanders: Joi.array().items(entityMinObj),
    securityApprovers: Joi.array().items(entityMinObj),
    superSecurityApprovers: Joi.array().items(entityMinObj),
    comments: Joi.string(),
    approversComments: Joi.string(),
    due: Joi.number().unsafe(),
    requestIds: Joi.array().items(Joi.string()),
    excelFilePath: Joi.string().required(),
    kartoffelParams: changeRoleHierarchyBulkKartoffelParamsObj.required(),
    adParams: changeRoleHierarchyBulkADParamsObj.required(),
  },
  params: {},
  query: {},
});

// GET
export const getBulkRequestExampleSchema = Joi.object({
  body: {},
  params: {},
  query: {
    bulkType: Joi.string()
      .valid(...Object.keys(BulkType))
      .required(),
  },
});
