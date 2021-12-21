import {
  PersonTypeInRequest,
  PersonInfoType,
  RequestStatus,
  Decision,
  StageStatus,
  ApproverType,
  ApprovementStatus,
  RequestType,
  personTypeInRequestToJSON,
  personInfoTypeToJSON,
  approvementStatusToJSON,
  SortField,
  SortOrder,
} from '../interfaces/protoc/proto/requestService';

const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

// GET
export const getAllRequestsSchema = Joi.object({
  body: {},
  params: {
    approvementStatus: Joi.string().valid(...Object.keys(ApprovementStatus)),
  },
  query: {
    from: Joi.number().default(0),
    to: Joi.number().default(100),
  },
});

export const getRequestByIdSchema = Joi.object({
  body: {},
  params: {
    id: Joi.objectId().required(),
  },
  query: {},
});

export const getRequestsSchema = Joi.object({
  body: {},
  params: {},
  query: {
    searchQuery: Joi.string(),
    status: Joi.string().valid(...Object.keys(RequestStatus)),
    type: Joi.string().valid(...Object.keys(RequestType)),
    sortField: Joi.string().valid(...Object.keys(SortField)),
    sortOrder: Joi.string().valid(...Object.keys(SortOrder)),
    from: Joi.number().default(1),
    to: Joi.number().default(100),
  },
});

export const getRequestsByPersonSchema = Joi.object({
  body: {},
  params: {
    id: Joi.string().required(),
  },
  query: {
    personType: Joi.string()
      .valid(...Object.keys(PersonTypeInRequest))
      .default(personTypeInRequestToJSON(PersonTypeInRequest.SUBMITTER)),
    personInfoType: Joi.string()
      .valid(...Object.keys(PersonInfoType))
      .default(personInfoTypeToJSON(PersonInfoType.ID)),
    approvementStatus: Joi.string()
      .valid(...Object.keys(ApprovementStatus))
      .default(approvementStatusToJSON(ApprovementStatus.ANY)),
    displayName: Joi.string(),
    status: Joi.string().valid(...Object.keys(RequestStatus)),
    type: Joi.string().valid(...Object.keys(RequestType)),
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

// PUT

export const updateADStatusSchema = Joi.object({
  body: {
    Retry: Joi.boolean().required(),
    Status: Joi.boolean().required(),
    RequestID: Joi.string().required(),
    ErrorID: Joi.string().required(),
  },
  params: {},
  query: {},
});

export const entityMinObj = Joi.object({
  id: Joi.objectId().required(),
  displayName: Joi.string().required(),
  identityCard: Joi.string().default(''),
  personalNumber: Joi.string().default(''),
});

export const ApproverDecisionObj = Joi.object({
  approver: entityMinObj.required(),
  decision: Joi.string()
    .valid(...Object.keys(Decision))
    .required(),
  reason: Joi.string(),
  date: Joi.number().unsafe(),
});

export const kartoffelStatusObj = Joi.object({
  status: Joi.string()
    .valid(...Object.keys(StageStatus))
    .required(),
  message: Joi.string().required(),
  createdId: Joi.string(),
  failedRetries: Joi.number().unsafe().required(),
});

export const ADStatusObj = Joi.object({
  status: Joi.string()
    .valid(...Object.keys(StageStatus))
    .required(),
  message: Joi.string().required(),
  failedRetries: Joi.number().unsafe().required(),
});

export const KartoffelParamsObj = Joi.object({
  //TODO
});

export const ADParamsObj = Joi.object({
  //TODO
});

export const transferRequestToApproversSchema = Joi.object({
  body: {
    approvers: Joi.array().items(entityMinObj).required(),
    type: Joi.string()
      .valid(...Object.keys(ApproverType))
      .required(),
    commentForApprovers: Joi.string(),
  },
  params: { id: Joi.objectId().required() },
  query: {},
});

export const updateApproversCommentsSchema = Joi.object({
  body: {
    type: Joi.string()
      .valid(...Object.keys(ApproverType))
      .required(),
    commentForApprovers: Joi.string(),
  },
  params: {id: Joi.objectId().required() },
  query: {},
});

export const updateRequestSchema = Joi.object({
  body: {
    requestProperties: Joi.object({
      submittedBy: entityMinObj,
      status: Joi.string().valid(...Object.keys(RequestStatus)),
      commanderDecision: ApproverDecisionObj,
      securityDecision: ApproverDecisionObj,
      superSecurityDecision: ApproverDecisionObj,
      kartoffelStatus: kartoffelStatusObj,
      adStatus: ADStatusObj,
      kartoffelParams: kartoffelStatusObj,
      adParams: ADParamsObj,
      due: Joi.number().unsafe(),
      commanders: Joi.array().items(entityMinObj).required(),
      securityApprovers: Joi.array().items(entityMinObj).required(),
      superSecurityApprovers: Joi.array().items(entityMinObj).required(),
    }),
  },
  params: {
    id: Joi.objectId().required(),
  },
  query: {},
});

export const UpdateApproversSchema = Joi.object({
  body: {
    approvers: Joi.array().items(entityMinObj).required(),
  },
  params: {
    id: Joi.objectId().required(),
  },
  query: {},
});

// POST

const createRoleKartoffelParamsObj = Joi.object({
  //for role
  jobTitle: Joi.string().required(), //name of the role
  directGroup: Joi.string().required(), //groupId of direct father
  roleId: Joi.string(), //T154514... generated automatically by tea-service if not given
  clearance: Joi.string().required(), //clearance of the role
  akaUnit: Joi.string(),
  hierarchy: Joi.string().required(),

  //forDigitalIdentity
  type: Joi.string().required(), //always domainUser
  source: Joi.string().required(), //always oneTree
  uniqueId: Joi.string(), //T154514... generated automatically by tea-service if not given
  mail: Joi.string(), //T154514... generated automatically by tea-service if not given
  isRoleAttachable: Joi.boolean().required(), //true, if the role is unoccupied
  roleEntityType: Joi.string(),
});

const createRoleADParamsObj = Joi.object({
  samAccountName: Joi.string(), //T154514... generated automatically by tea-service if not given
  ouDisplayName: Joi.string().required(), // Role's full hierarchy
  jobTitle: Joi.string().required(), //name of the role
});

export const createRoleSchema = Joi.object({
  body: {
    status: Joi.string().valid(...Object.keys(RequestStatus)),
    commanderDecision: ApproverDecisionObj,
    securityDecision: ApproverDecisionObj,
    superSecurityDecision: ApproverDecisionObj,
    commanders: Joi.array().items(entityMinObj), 
    securityApprovers: Joi.array().items(entityMinObj),
    superSecurityApprovers: Joi.array().items(entityMinObj),
    kartoffelStatus: kartoffelStatusObj,
    adStatus: ADStatusObj,
    kartoffelParams: createRoleKartoffelParamsObj.required(),
    adParams: createRoleADParamsObj.required(),
    comments: Joi.string().allow(''),
    approversComments: Joi.string(),
    due: Joi.number().unsafe(),
  },
  params: {},
  query: {},
});

const assignRoleToEntityKartoffelParamsObj = Joi.object({
  id: Joi.string().required(),
  uniqueId: Joi.string().required(),
  roleId: Joi.string().required(),
});

const assignRoleToEntityADParamsObj = Joi.object({
  oldSAMAccountName: Joi.string(),
  newSAMAccountName: Joi.string().required(),
  upn: Joi.string(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  fullName: Joi.string().required(),
  rank: Joi.string().required(),
  roleSerialCode: Joi.string().required(),
});

export const assignRoleToEntitySchema = Joi.object({
  body: {
    status: Joi.string().valid(...Object.keys(RequestStatus)),
    commanderDecision: ApproverDecisionObj,
    securityDecision: ApproverDecisionObj,
    superSecurityDecision: ApproverDecisionObj,
    commanders: Joi.array().items(entityMinObj),
    securityApprovers: Joi.array().items(entityMinObj),
    superSecurityApprovers: Joi.array().items(entityMinObj),
    kartoffelStatus: kartoffelStatusObj,
    adStatus: ADStatusObj,
    kartoffelParams: assignRoleToEntityKartoffelParamsObj.required(),
    adParams: assignRoleToEntityADParamsObj.required(),
    comments: Joi.string().allow(''),
    approversComments: Joi.string(),
    due: Joi.number().unsafe(),
  },
  params: {},
  query: {},
});

const createOGKartoffelParamsObj = Joi.object({
  name: Joi.string().required(),
  parent: Joi.string().required(),
  source: Joi.string().required(),
});

const createOGADParamsObj = Joi.object({
  ouDisplayName: Joi.string().required(),
  ouName: Joi.string().required(),
  name: Joi.string().required(),
});

export const createOGSchema = Joi.object({
  body: {
    status: Joi.string().valid(...Object.keys(RequestStatus)),
    commanderDecision: ApproverDecisionObj,
    securityDecision: ApproverDecisionObj,
    superSecurityDecision: ApproverDecisionObj,
    commanders: Joi.array().items(entityMinObj),
    securityApprovers: Joi.array().items(entityMinObj),
    superSecurityApprovers: Joi.array().items(entityMinObj),
    kartoffelStatus: kartoffelStatusObj,
    adStatus: ADStatusObj,
    kartoffelParams: createOGKartoffelParamsObj.required(),
    adParams: createOGADParamsObj.required(),
    comments: Joi.string().allow(''),
    approversComments: Joi.string(),
    due: Joi.number().unsafe(),
  },
  params: {},
  query: {},
});

const additionalParamsObj = Joi.object({
  entityId: Joi.string().required(),
  displayName: Joi.string().required(),
  domainUsers: Joi.array().items(Joi.string()),
  akaUnit: Joi.string().default(''),
  personalNumber: Joi.string().default(''),
  identityCard: Joi.string().default(''),
  type: Joi.string()
    .valid(...Object.keys(ApproverType))
    .required(),
  directGroup: Joi.string().default(''),
});

export const createNewApproverSchema = Joi.object({
  body: {
    status: Joi.string().valid(...Object.keys(RequestStatus)),
    commanderDecision: ApproverDecisionObj,
    securityDecision: ApproverDecisionObj,
    superSecurityDecision: ApproverDecisionObj,
    commanders: Joi.array().items(entityMinObj),
    securityApprovers: Joi.array().items(entityMinObj),
    superSecurityApprovers: Joi.array().items(entityMinObj),
    additionalParams: additionalParamsObj,
    comments: Joi.string().allow(''),
    approversComments: Joi.string(),
    due: Joi.number().unsafe(),
  },
  params: {},
  query: {},
});

const createEntityKartoffelParamsObj = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  identityCard: Joi.string().required(),
  personalNumber: Joi.string(),
  serviceType: Joi.string(),
  phone: Joi.array().items(Joi.string()),
  mobilePhone: Joi.array().items(Joi.string()),
  address: Joi.string(),
  clearance: Joi.string().required(),
  sex: Joi.string().required(),
  birthdate: Joi.number().unsafe(),
  entityType: Joi.string(),
});
const createEntityADParamsObj = Joi.object({
  //NO PARAMETERS NEEDED
});

export const createEntitySchema = Joi.object({
  body: {
    status: Joi.string().valid(...Object.keys(RequestStatus)),
    commanderDecision: ApproverDecisionObj,
    securityDecision: ApproverDecisionObj,
    superSecurityDecision: ApproverDecisionObj,
    commanders: Joi.array().items(entityMinObj),
    securityApprovers: Joi.array().items(entityMinObj),
    superSecurityApprovers: Joi.array().items(entityMinObj),
    kartoffelStatus: kartoffelStatusObj,
    adStatus: ADStatusObj,
    kartoffelParams: createEntityKartoffelParamsObj.required(),
    adParams: createEntityADParamsObj.required(),
    comments: Joi.string().allow(''),
    approversComments: Joi.string(),
    due: Joi.number().unsafe(),
  },
  params: {},
  query: {},
});

const renameOGKartoffelParamsObj = Joi.object({
  id: Joi.string().required(),
  name: Joi.string().required(),
});

const renameOGADParamsObj = Joi.object({
  ouDisplayName: Joi.string().required(),
  oldOuName: Joi.string().required(),
  newOuName: Joi.string().required(),
});

export const renameOGSchema = Joi.object({
  body: {
    status: Joi.string().valid(...Object.keys(RequestStatus)),
    commanderDecision: ApproverDecisionObj,
    securityDecision: ApproverDecisionObj,
    superSecurityDecision: ApproverDecisionObj,
    commanders: Joi.array().items(entityMinObj),
    securityApprovers: Joi.array().items(entityMinObj),
    superSecurityApprovers: Joi.array().items(entityMinObj),
    kartoffelStatus: kartoffelStatusObj,
    adStatus: ADStatusObj,
    kartoffelParams: renameOGKartoffelParamsObj.required(),
    adParams: renameOGADParamsObj.required(),
    comments: Joi.string().allow(''),
    approversComments: Joi.string(),
    due: Joi.number().unsafe(),
  },
  params: {},
  query: {},
});

const renameRoleKartoffelParamsObj = Joi.object({
  jobTitle: Joi.string().required(),
  roleId: Joi.string().required(),
  oldJobTitle: Joi.string().required()
});

const renameRoleADParamsObj = Joi.object({
  samAccountName: Joi.string().required(),
  jobTitle: Joi.string().required(),
});

export const renameRoleSchema = Joi.object({
  body: {
    status: Joi.string().valid(...Object.keys(RequestStatus)),
    commanderDecision: ApproverDecisionObj,
    securityDecision: ApproverDecisionObj,
    superSecurityDecision: ApproverDecisionObj,
    commanders: Joi.array().items(entityMinObj),
    securityApprovers: Joi.array().items(entityMinObj),
    superSecurityApprovers: Joi.array().items(entityMinObj),
    kartoffelStatus: kartoffelStatusObj,
    adStatus: ADStatusObj,
    kartoffelParams: renameRoleKartoffelParamsObj.required(),
    adParams: renameRoleADParamsObj.required(),
    comments: Joi.string().allow(''),
    approversComments: Joi.string(),
    due: Joi.number().unsafe(),
  },
  params: {},
  query: {},
});

const editEntityKartoffelParamsObj = Joi.object({
  id: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  identityCard: Joi.string(),
  personalNumber: Joi.string(),
  serviceType: Joi.string(),
  phone: Joi.array().items(Joi.string()),
  mobilePhone: Joi.array().items(Joi.string()),
  address: Joi.string(),
  clearance: Joi.string(),
  sex: Joi.string(),
  birthdate: Joi.number().unsafe(),
  entityType: Joi.string(),
});

const editEntityADParamsObj = Joi.object({
  samAccountName: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  fullName: Joi.string().required(),
});

export const editEntitySchema = Joi.object({
  body: {
    status: Joi.string().valid(...Object.keys(RequestStatus)),
    commanderDecision: ApproverDecisionObj,
    securityDecision: ApproverDecisionObj,
    superSecurityDecision: ApproverDecisionObj,
    commanders: Joi.array().items(entityMinObj),
    securityApprovers: Joi.array().items(entityMinObj),
    superSecurityApprovers: Joi.array().items(entityMinObj),
    kartoffelStatus: kartoffelStatusObj,
    adStatus: ADStatusObj,
    kartoffelParams: editEntityKartoffelParamsObj.required(),
    adParams: editEntityADParamsObj.required(),
    comments: Joi.string().allow(''),
    approversComments: Joi.string(),
    due: Joi.number().unsafe(),
  },
  params: {},
  query: {},
});

const changeRoleHierarchyKartoffelParamsObj = Joi.object({
  roleId: Joi.string().required(),
  directGroup: Joi.string().required(),
  currentJobTitle: Joi.string().required(),
  newJobTitle: Joi.string(),
  hierarchy: Joi.string().required(),
  oldHierarchy: Joi.string().required()
});

const changeRoleHierarchyADParamsObj = Joi.object({
  samAccountName: Joi.string(),
  ouDisplayName: Joi.string(), // the new one
  newJobTitle: Joi.string(),
});

export const changeRoleHierarchyReqSchema = Joi.object({
  body: {
    status: Joi.string().valid(...Object.keys(RequestStatus)),
    commanderDecision: ApproverDecisionObj,
    securityDecision: ApproverDecisionObj,
    superSecurityDecision: ApproverDecisionObj,
    commanders: Joi.array().items(entityMinObj),
    securityApprovers: Joi.array().items(entityMinObj),
    superSecurityApprovers: Joi.array().items(entityMinObj),
    kartoffelStatus: kartoffelStatusObj,
    adStatus: ADStatusObj,
    kartoffelParams: changeRoleHierarchyKartoffelParamsObj.required(),
    adParams: changeRoleHierarchyADParamsObj.required(),
    comments: Joi.string().allow(''),
    approversComments: Joi.string(),
    due: Joi.number().unsafe(),
    isPartOfBulk: Joi.boolean().default(false),
    bulkRequestId: Joi.string(),
    rowNumber: Joi.string(),
  },
  params: {},
  query: {},
});

// DELETE
const deleteRoleKartoffelParamsObj = Joi.object({
  roleId: Joi.string().required(),
  uniqueId: Joi.string().required(),
});

const deleteRoleADParamsObj = Joi.object({
  samAccountName: Joi.string().required(),
});

export const deleteRoleSchema = Joi.object({
  body: {
    status: Joi.string().valid(...Object.keys(RequestStatus)),
    commanderDecision: ApproverDecisionObj,
    securityDecision: ApproverDecisionObj,
    superSecurityDecision: ApproverDecisionObj,
    commanders: Joi.array().items(entityMinObj),
    securityApprovers: Joi.array().items(entityMinObj),
    superSecurityApprovers: Joi.array().items(entityMinObj),
    kartoffelStatus: kartoffelStatusObj,
    adStatus: ADStatusObj,
    kartoffelParams: deleteRoleKartoffelParamsObj.required(),
    adParams: deleteRoleADParamsObj.required(),
    comments: Joi.string().allow(''),
    approversComments: Joi.string(),
    due: Joi.number().unsafe(),
  },
  params: {},
  query: {},
});

const deleteOGKartoffelParamsObj = Joi.object({
  id: Joi.string().required(),
});

const deleteOGADParamsObj = Joi.object({
  ouDisplayName: Joi.string().required(),
  ouName: Joi.string().required(),
  name: Joi.string().required(),
});

export const deleteOGSchema = Joi.object({
  body: {
    status: Joi.string().valid(...Object.keys(RequestStatus)),
    commanderDecision: ApproverDecisionObj,
    securityDecision: ApproverDecisionObj,
    superSecurityDecision: ApproverDecisionObj,
    commanders: Joi.array().items(entityMinObj),
    securityApprovers: Joi.array().items(entityMinObj),
    superSecurityApprovers: Joi.array().items(entityMinObj),
    kartoffelStatus: kartoffelStatusObj,
    adStatus: ADStatusObj,
    kartoffelParams: deleteOGKartoffelParamsObj.required(),
    adParams: deleteOGADParamsObj.required(),
    comments: Joi.string().allow(''),
    approversComments: Joi.string(),
    due: Joi.number().unsafe(),
  },
  params: {},
  query: {},
});

const deleteEntityKartoffelParamsObj = Joi.object({
  id: Joi.string().required(),
});

const deleteEntityADParamsObj = Joi.object({
  //NO PARAMETERS NEEDED
});

export const deleteEntitySchema = Joi.object({
  body: {
    status: Joi.string().valid(...Object.keys(RequestStatus)),
    commanderDecision: ApproverDecisionObj,
    securityDecision: ApproverDecisionObj,
    superSecurityDecision: ApproverDecisionObj,
    commanders: Joi.array().items(entityMinObj),
    securityApprovers: Joi.array().items(entityMinObj),
    superSecurityApprovers: Joi.array().items(entityMinObj),
    kartoffelStatus: kartoffelStatusObj,
    adStatus: ADStatusObj,
    kartoffelParams: deleteEntityKartoffelParamsObj.required(),
    adParams: deleteEntityADParamsObj.required(),
    comments: Joi.string().allow(''),
    approversComments: Joi.string(),
    due: Joi.number().unsafe(),
  },
  params: {},
  query: {},
});

const disconectRoleFromEntityRequestKartoffelParamsObj = Joi.object({
  id: Joi.string().required(),
  uniqueId: Joi.string().required(),
});

const disconectRoleFromEntityRequestADParamsObj = Joi.object({
  samAccountName: Joi.string().required(),
});

export const disconectRoleFromEntitySchema = Joi.object({
  body: {
    status: Joi.string().valid(...Object.keys(RequestStatus)),
    commanderDecision: ApproverDecisionObj,
    securityDecision: ApproverDecisionObj,
    superSecurityDecision: ApproverDecisionObj,
    commanders: Joi.array().items(entityMinObj),
    securityApprovers: Joi.array().items(entityMinObj),
    superSecurityApprovers: Joi.array().items(entityMinObj),
    kartoffelStatus: kartoffelStatusObj,
    adStatus: ADStatusObj,
    kartoffelParams:
      disconectRoleFromEntityRequestKartoffelParamsObj.required(),
    adParams: disconectRoleFromEntityRequestADParamsObj.required(),
    comments: Joi.string().allow(''),
    approversComments: Joi.string(),
    due: Joi.number().unsafe(),
  },
  params: {},
  query: {},
});

export const deleteRequestSchema = Joi.object({
  body: {},
  params: {
    id: Joi.objectId().required(),
  },
  query: {},
});
