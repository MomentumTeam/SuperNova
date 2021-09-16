const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

// Entities
export const getEntityByMongoIdSchema = Joi.object({
    body: {},
    params: {
        id: Joi.objectId().required(),
    },
    query: {},
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
        identifier: Joi.objectId().required(),
    },
    query: {},
});

export const getEntityByRoleIdSchema = Joi.object({
    body: {},
    params: {
        roleId: Joi.objectId().required(),
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
        page: Joi.number().default(1),
        pageSize: Joi.number().default(100),
    },
});

export const getEntitiesByHierarchySchema = Joi.object({
    body: {},
    params: {
        hierarchy: Joi.string().required(), // TODO: is it string?
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

export const searchOGSchema = Joi.object({
    body: {},
    params: {},
    query: {
        nameAndHierarchy: Joi.string().required(), // TODO: is it string?
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
    params: {
        hierarchy: Joi.string().required(),
    },
    query: {},
});

export const GetOGChildrenSchema = Joi.object({
    body: {},
    params: {
        id: Joi.objectId().required(),
    },
    query: {},
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
        id: Joi.objectId().required(),
    },
    query: {},
});

export const GetRolesUnderOGSchema = Joi.object({
    body: {},
    params: {
        id: Joi.objectId().required(),
    },
    query: {},
});