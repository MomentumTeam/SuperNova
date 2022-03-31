const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

// Entities
export const getPictureByEntityIdentifierSchema = Joi.object({
  body: {},
  params: {
    identifier: Joi.string().required(),
  },
  query: {},
});

export const getEntityByMongoIdSchema = Joi.object({
  body: {},
  params: {
    id: Joi.objectId().required(),
  },
  query: {
    withPicture: Joi.boolean(),
  },
});

export const searchEntitiesByFullNameSchema = Joi.object({
  body: {},
  params: {},
  query: {
    fullName: Joi.string().required(),
    rank: Joi.string(), // TODO: there is enum?
    entityType: Joi.string(), // TODO: there is enum?
    underGroupId: Joi.objectId(),
    status: Joi.string(), // TODO: there is enum?
    source: Joi.string(), // TODO: there is enum?
  },
});

export const getEntityByIdentifierSchema = Joi.object({
  body: {},
  params: {
    identifier: Joi.string().required(),
  },
  query: {},
});

export const getEntityByRoleIdSchema = Joi.object({
  body: {},
  params: {
    roleId: Joi.string().required(),
  },
  query: {},
});

export const getEntitiesUnderOGSchema = Joi.object({
  body: {},
  params: {
    id: Joi.objectId().required(),
  },
  query: {
    direct: Joi.boolean().default(true),
    page: Joi.number(),
    pageSize: Joi.number(),
  },
});

export const getEntitiesByHierarchySchema = Joi.object({
  body: {},
  params: {
    hierarchy: Joi.string().required(),
  },
  query: {
    direct: Joi.boolean().default(true),
    page: Joi.number().default(1),
    pageSize: Joi.number().default(100),
  },
});

export const getEntityByDIRequestSchema = Joi.object({
  body: {},
  params: {
    uniqueId: Joi.string().required(), // TODO: is it string?
  },
  query: {},
});

// Groups
export const getAllOGsSchema = Joi.object({
  body: {},
  params: {},
  query: {
    source: Joi.string().required(), // TODO: is it string?
    akaUnit: Joi.string().required(), // TODO: is it string?
    updatedFrom: Joi.date()
      .default(Date.now() - 86400000 * 7) // week ago
      .max(Date.now()),
    from: Joi.number().default(1),
    to: Joi.number().default(100),
  },
});

export const isOGNameAlreadyTakenSchema = Joi.object({
  body: {},
  params: {},
  query: {
    name: Joi.string().required(),
    parent: Joi.objectId().required(),
  },
});

export const searchOGSchema = Joi.object({
  body: {},
  params: {},
  query: {
    underGroupId: Joi.string(),
    nameAndHierarchy: Joi.string().required(),
    withRoles: Joi.boolean().default(false),
  },
});

export const GetOGByIdSchema = Joi.object({
  body: {},
  params: {
    id: Joi.objectId().required(),
  },
  query: {},
});

export const GetOGByHierarchyNameSchema = Joi.object({
  body: {},
  params: {},
  query: {
    hierarchy: Joi.string().required(),
    withRoles: Joi.boolean().default(false),
    direct: Joi.boolean().default(true),
  },
});

export const GetOGChildrenSchema = Joi.object({
  body: {},
  params: {
    id: Joi.objectId().required(),
  },
  query: {
    direct: Joi.boolean().default(true),
    withRoles: Joi.boolean().default(false),
    page: Joi.number(),
    pageSize: Joi.number(),
    withParent: Joi.boolean().default(false),
  },
});

export const GetOGTreeSchema = Joi.object({
  body: {},
  params: {
    id: Joi.objectId().required(),
  },
  query: {},
});

// Role
export const getAllRolesSchema = Joi.object({
  body: {},
  params: {},
  query: {
    updatedFrom: Joi.date()
      .default(Date.now() - 86400000 * 7) // week ago
      .max(Date.now()),
    page: Joi.number().default(1),
    pageSize: Joi.number().default(100),
  },
});

export const GetRoleByIdSchema = Joi.object({
  body: {},
  params: {
    roleId: Joi.string().required(),
  },
  query: {},
});

export const GetRolesUnderOGSchema = Joi.object({
  body: {},
  params: {
    id: Joi.objectId().required(),
  },
  query: {
    direct: Joi.boolean().default(true),
    page: Joi.number(),
    pageSize: Joi.number(),
  },
});

export const IsRoleAlreadyTakenSchema = Joi.object({
  body: {},
  params: {
    roleId: Joi.string().required(),
  },
  query: {},
});

export const IsJobTitleAlreadyTakenSchema = Joi.object({
  body: {},
  params: {},
  query: {
    jobTitle: Joi.string().required(),
    directGroup: Joi.string().required(),
  },
});

export const GetRolesByHierarchySchema = Joi.object({
  body: {},
  params: {
    hierarchy: Joi.string().required(),
    direct: Joi.boolean().default(true),
    page: Joi.number().default(1),
    pageSize: Joi.number().default(100),
  },
  query: {},
});

export const SearchRolesByRoleIdValidSchema = Joi.object({
  body: {},
  params: {
    roleId: Joi.string().required(),
  },
  query: {
    hierarchy: Joi.string(),
  },
});

// DI
export const SearchDIsByUniqueIdValidSchema = Joi.object({
  body: {},
  params: {
    uniqueId: Joi.string().required(),
  },
  query: {},
});

export const GetDIByUniqueIdValidSchema = Joi.object({
  body: {},
  params: {
    uniqueId: Joi.string().required(),
  },
  query: {},
});
