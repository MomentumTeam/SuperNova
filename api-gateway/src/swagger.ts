export const swaggerDocument: any = {
  swagger: '2.0',
  info: {
    version: '1.0.0',
    title: 'SuperNova - ApiGateway',
    description: 'מערכת לניהול זהויות',
    license: {
      name: 'MIT',
      url: 'https://opensource.org/licenses/MIT',
    },
  },
  host: 'localhost:2000',
  basePath: '/',
  tags: [
    {
      name: 'kartoffel',
      description: 'Operations about Kartoffel Service',
    },
    {
      name: 'requests',
      description: 'Operations about Requests Service',
    },
    {
      name: 'producer',
      description: 'Operations about Producer Service',
    },
  ],
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],

  paths: {
    '/api/kartoffel/searchOG': {
      get: {
        tags: ['kartoffel'],
        parameters: [
          {
            name: 'hierarchyAndName',
            in: 'query',
            description: 'Hierarchy And Name of OG that needs to be fetched',
            required: true,
            type: 'string',
          },
        ],

        summary: 'search OG by hierarchy And Name',
        responses: {
          '200': {
            description: 'OK',
            schema: {
              $ref: '#/definitions/OGArray',
            },
          },
        },
      },
    },

    '/api/kartoffel/searchEntitiesByFullName': {
      get: {
        tags: ['kartoffel'],
        parameters: [
          {
            name: 'fullName',
            in: 'query',
            description: '',
            required: true,
            type: 'string',
          },
        ],

        summary: 'search OG by hierarchy And Name',
        responses: {
          '200': {
            description: 'OK',
            schema: {
              $ref: '#/definitions/EntityArray',
            },
          },
        },
      },
    },

    '/api/kartoffel/getEntityByIdNumber/:idNumber': {
      get: {
        tags: ['kartoffel'],
        parameters: [
          {
            name: 'idNumber',
            in: 'path',
            description: 'ID Number of the Entity that needs to be fetched',
            required: true,
            type: 'string',
          },
        ],

        summary: 'get Entity ByIdNumber',
        responses: {
          '200': {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Entity',
            },
          },
        },
      },
    },

    '/api/kartoffel/getRoleByRoleId/:roleId': {
      get: {
        tags: ['kartoffel'],
        parameters: [
          {
            name: 'roleId',
            in: 'path',
            description: 'ID Number of the Role that needs to be fetched',
            required: true,
            type: 'string',
          },
        ],

        summary: 'get Role By Role Id',
        responses: {
          '200': {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Role',
            },
          },
        },
      },
    },

    '/api/kartoffel/getRolesUnderOG/:id': {
      get: {
        tags: ['kartoffel'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'ID of OG to get the RoleArray under it.',
            required: true,
            type: 'string',
          },
          {
            name: 'direct',
            in: 'query',
            description:
              'boolean field that determines: true-fetch Roles that are directly under this OG.  false- fetch all Roles under this OG',
            required: true,
            type: 'boolean',
          },
        ],

        summary: 'get Roles Under OG',
        responses: {
          '200': {
            description: 'OK',
            schema: {
              $ref: '#/definitions/RoleArray',
            },
          },
        },
      },
    },

    '/api/kartoffel/getEntityByRoleId/:roleId': {
      get: {
        tags: ['kartoffel'],
        parameters: [
          {
            name: 'roleId',
            in: 'path',
            description: 'ID of the Role to get the Entity assigned to it.',
            required: true,
            type: 'string',
          },
        ],

        summary: 'get Entity By Role Id',
        responses: {
          '200': {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Entity',
            },
          },
        },
      },
    },

    '/api/kartoffel/getEntityByMongoId/{id}': {
      get: {
        tags: ['kartoffel'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'ID of user that needs to be fetched',
            required: true,
            type: 'string',
          },
        ],

        summary: 'Get all users in system',
        responses: {
          '200': {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Entity',
            },
          },
        },
      },
    },

    '/api/kartoffel/getChildrenOfOG/:id': {
      get: {
        tags: ['kartoffel'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: "ID of the OG to get it's Children.",
            required: true,
            type: 'string',
          },
        ],

        summary: 'get Children Of OG',
        responses: {
          '200': {
            description: 'OK',
            schema: {
              $ref: '#/definitions/OGArray',
            },
          },
        },
      },
    },

    '/api/kartoffel/getEntitiesUnderOG/:id': {
      get: {
        tags: ['kartoffel'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'ID of the OG to get all Entities under it.',
            required: true,
            type: 'string',
          },
          {
            name: 'direct',
            in: 'query',
            description:
              'boolean field that determines: true-fetch Entities that are directly under this OG.  false- fetch all Entities under this OG',
            required: true,
            type: 'boolean',
          },
        ],

        summary: 'get Entities Under OG',
        responses: {
          '200': {
            description: 'OK',
            schema: {
              $ref: '#/definitions/EntityArray',
            },
          },
        },
      },
    },

    '/api/kartoffel/getPictureByEntityId/:id': {
      get: {
        tags: ['kartoffel'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: "ID of the Entity to get it's Profile Image.",
            required: true,
            type: 'string',
          },
        ],
        summary: 'get Picture By Entity Id',
        responses: {
          '200': {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Image',
            },
          },
        },
      },
    },

    '/api/kartoffel/getOGTree/:rootId': {
      get: {
        tags: ['kartoffel'],
        parameters: [
          {
            name: 'rootId',
            in: 'path',
            description: 'rootID of the root OG to get the OG Tree.',
            required: true,
            type: 'string',
          },
        ],
        summary: 'get OG Tree',
        responses: {
          '200': {
            description: 'OK',
            schema: {
              $ref: '#/definitions/OGTree',
            },
          },
        },
      },
    },

    '/api/requests/getRequestById/:id': {
      get: {
        tags: ['requests'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'id of the Request',
            required: true,
            type: 'string',
          },
        ],
        summary: 'get Request',
        responses: {
          '200': {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Request',
            },
          },
        },
      },
    },

    '/api/requests/getAllRequests': {
      get: {
        tags: ['requests'],
        parameters: [
          {
            name: 'from',
            in: 'query',
            description: 'start range of requests to fetch',
            required: true,
            type: 'integer',
            format: 'int32',
          },
          {
            name: 'to',
            in: 'query',
            description: 'end range of requests to fetch',
            required: true,
            type: 'integer',
            format: 'int32',
          },
        ],
        summary: 'get a range of Requests',
        responses: {
          '200': {
            description: 'OK',
            schema: {
              $ref: '#/definitions/RequestArray',
            },
          },
        },
      },
    },

    '/api/requests/getRequestsSubmittedBy/:id': {
      get: {
        tags: ['requests'],
        parameters: [
          {
            name: 'id',
            in: 'params',
            description: 'id of the user that Submitted the Request',
            required: true,
            type: 'string',
          },
          {
            name: 'from',
            in: 'query',
            description: 'start range of requests to fetch',
            required: true,
            type: 'integer',
            format: 'int32',
          },
          {
            name: 'to',
            in: 'query',
            description: 'end range of requests to fetch',
            required: true,
            type: 'integer',
            format: 'int32',
          },
        ],
        summary: 'get all the Requests that was Submitted by a person',
        responses: {
          '200': {
            description: 'OK',
            schema: {
              $ref: '#/definitions/RequestArray',
            },
          },
        },
      },
    },

    '/api/requests/getRequestsByCommander/:id': {
      get: {
        tags: ['requests'],
        parameters: [
          {
            name: 'id',
            in: 'params',
            description: 'id of the Commander that Submitted the Request',
            required: true,
            type: 'string',
          },
          {
            name: 'from',
            in: 'query',
            description: 'start range of requests to fetch',
            required: true,
            type: 'integer',
            format: 'int32',
          },
          {
            name: 'to',
            in: 'query',
            description: 'end range of requests to fetch',
            required: true,
            type: 'integer',
            format: 'int32',
          },
        ],
        summary: 'get all Request that the Commander Submitted',
        responses: {
          '200': {
            description: 'OK',
            schema: {
              $ref: '#/definitions/RequestArray',
            },
          },
        },
      },
    },

    '/api/requests/updateADStatus': {
      put: {
        tags: ['requests'],
        parameters: [
          {
            name: 'requestId',
            in: 'body',
            description: 'Id of the request',
            required: true,
            type: 'string',
          },
          {
            name: 'status',
            in: 'body',
            description: 'the new AD Status of the request',
            required: true,
            schema: {
              $ref: '#/definitions/StageStatus',
            },
          },
          {
            name: 'message',
            in: 'body',
            description: 'Message from AD',
            required: true,
            type: 'string',
          },
        ],
        summary: 'update AD Status',
        responses: {
          '200': {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Request',
            },
          },
        },
      },
    },

    '/api/requests/updateRequest': {
      put: {
        tags: ['requests'],
        parameters: [
          {
            name: 'id',
            in: 'body',
            description: 'Id of the request',
            required: true,
            type: 'string',
          },
          {
            name: 'requestProperties',
            in: 'body',
            description: 'request Properties for update',
            required: true,
            schema: {
              $ref: '#/definitions/UpdateReqProperties',
            },
          },
        ],
        summary: 'update Request',
        responses: {
          '200': {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Request',
            },
          },
        },
      },
    },

    '/api/requests/RenameOGRequest': {
      put: {
        tags: ['requests'],
        parameters: [
          {
            in: 'body',
            description: 'request Properties for Renaming OG, request',
            required: true,
            schema: {
              $ref: '#/definitions/RenameOGReq',
            },
          },
        ],
        summary: 'Rename OG Req',
        responses: {
          '200': {
            description: 'OK',
            schema: {
              $ref: '#/definitions/RenameOGRes',
            },
          },
        },
      },
    },

    '/api/requests/renameRoleRequest': {
      put: {
        tags: ['requests'],
        parameters: [
          {
            in: 'body',
            description: 'request Properties for Renaming Role, request',
            required: true,
            schema: {
              $ref: '#/definitions/RenameRoleReq',
            },
          },
        ],
        summary: 'rename Role Request',
        responses: {
          '200': {
            description: 'OK',
            schema: {
              $ref: '#/definitions/RenameRoleRes',
            },
          },
        },
      },
    },

    '/api/requests/createOGRequest': {
      post: {
        tags: ['requests'],
        parameters: [
          {
            name: 'body',
            in: 'body',
            description: 'request Properties for creating OG Request',
            required: true,
            schema: {
              $ref: '#/definitions/CreateOGReq',
            },
          },
        ],
        summary: 'create OG Request',
        responses: {
          '200': {
            description: 'OK',
            schema: {
              $ref: '#/definitions/createOGRes',
            },
          },
        },
      },
    },

    '/api/requests/createRoleRequest': {
      post: {
        tags: ['requests'],
        parameters: [
          {
            name: 'body',
            in: 'body',
            description: 'request Properties for creating Role Request',
            required: true,
            schema: {
              $ref: '#/definitions/CreateRoleReq',
            },
          },
        ],
        summary: 'create Role Request',
        responses: {
          '200': {
            description: 'OK',
            schema: {
              $ref: '#/definitions/CreateRoleRes',
            },
          },
        },
      },
    },

    '/api/requests/createEntityRequest': {
      post: {
        tags: ['requests'],
        parameters: [
          {
            name: 'body',
            in: 'body',
            description: 'request Properties for creating Entity Request',
            required: true,
            schema: {
              $ref: '#/definitions/CreateEntityReq',
            },
          },
        ],
        summary: 'create Entity Request',
        responses: {
          '200': {
            description: 'OK',
            schema: {
              $ref: '#/definitions/CreateEntityRes',
            },
          },
        },
      },
    },

    '/api/requests/assignRoleToEntityRequest': {
      post: {
        tags: ['requests'],
        parameters: [
          {
            name: 'body',
            in: 'body',
            description:
              'request Properties for creating assign Role To Entity',
            required: true,
            schema: {
              $ref: '#/definitions/AssignRoleToEntityReq',
            },
          },
        ],
        summary: 'assign Role To Entity Request',
        responses: {
          '200': {
            description: 'OK',
            schema: {
              $ref: '#/definitions/AssignRoleToEntityRes',
            },
          },
        },
      },
    },

    '/api/requests/editEntityRequest': {
      post: {
        tags: ['requests'],
        parameters: [
          {
            name: 'body',
            in: 'body',
            description: 'request Properties for creating edit Entity Request',
            required: true,
            schema: {
              $ref: '#/definitions/EditEntityReq',
            },
          },
        ],
        summary: 'edit Entity Request',
        responses: {
          '200': {
            description: 'OK',
            schema: {
              $ref: '#/definitions/EditEntityRes',
            },
          },
        },
      },
    },

    '/api/requests/disconectRoleFromEntityRequest': {
      post: {
        tags: ['requests'],
        parameters: [
          {
            name: 'body',
            in: 'body',
            description:
              'request Properties for disconecting Role From Entity Request',
            required: true,
            schema: {
              $ref: '#/definitions/DisconectRoleFromEntityReq',
            },
          },
        ],
        summary: 'disconect Role From Entity Request',
        responses: {
          '200': {
            description: 'OK',
            schema: {
              $ref: '#/definitions/DisconectRoleFromEntityRes',
            },
          },
        },
      },
    },

    '/api/requests/deleteRoleRequest': {
      delete: {
        tags: ['requests'],
        parameters: [
          {
            in: 'body',
            description: 'request Properties for delete Role Request',
            required: true,
            schema: {
              $ref: '#/definitions/DeleteRoleReq',
            },
          },
        ],
        summary: 'delete Role Request',
        responses: {
          '200': {
            description: 'OK',
            schema: {
              $ref: '#/definitions/DeleteRoleRes',
            },
          },
        },
      },
    },

    '/api/requests/deleteOGRequest': {
      delete: {
        tags: ['requests'],
        parameters: [
          {
            in: 'body',
            description: 'request Properties for delete OG Request',
            required: true,
            schema: {
              $ref: '#/definitions/DeleteOGReq',
            },
          },
        ],
        summary: 'delete OG Request',
        responses: {
          '200': {
            description: 'OK',
            schema: {
              $ref: '#/definitions/DeleteOGRes',
            },
          },
        },
      },
    },

    '/api/requests/deleteRequest': {
      delete: {
        tags: ['requests'],
        parameters: [
          {
            in: 'body',
            description: 'request Properties for delete Request',
            required: true,
            schema: {
              $ref: '#/definitions/DeleteReq',
            },
          },
        ],
        summary: 'delete Request',
        responses: {
          '200': {
            description: 'OK',
            schema: {
              $ref: '#/definitions/SuccessMessage',
            },
          },
        },
      },
    },
  },

  definitions: {
    Entity: {
      type: 'object',
      required: [
        'id',
        'displayName',
        'displayName',
        'hierarchy',
        'entityType',
        'identityCard',
        'personalNumber',
        'serviceType',
        'firstName',
        'lastName',
        'akaUnit',
        'dischargeDay',
        'rank',
        'mail',
        'jobTitle',
        'phone',
        'mobilePhone',
        'address',
        'clearance',
        'sex',
        'birthdate',
        'createdAt',
        'updatedAt',
        'digitalIdentities',
        'picture',
      ],
      properties: {
        id: {
          type: 'string',
        },
        displayName: {
          type: 'string',
        },
        directGroup: {
          type: 'string',
        },
        hierarchy: {
          type: 'string',
        },
        entityType: {
          type: 'string',
        },
        identityCard: {
          type: 'string',
        },
        personalNumber: {
          type: 'string',
        },
        serviceType: {
          type: 'string',
        },
        firstName: {
          type: 'string',
        },
        lastName: {
          type: 'string',
        },
        akaUnit: {
          type: 'string',
        },
        dischargeDay: {
          type: 'string',
        },
        rank: {
          type: 'string',
        },
        mail: {
          type: 'string',
        },
        jobTitle: {
          type: 'string',
        },
        phone: {
          type: 'string',
          items: {
            type: 'string',
          },
        },
        mobilePhone: {
          type: 'string',
          items: {
            type: 'string',
          },
        },
        address: {
          type: 'string',
        },

        clearance: {
          type: 'string',
        },
        sex: {
          type: 'string',
        },
        birthdate: {
          type: 'string',
          format: 'int64',
        },
        createdAt: {
          type: 'string',
          format: 'int64',
        },
        updatedAt: {
          type: 'string',
          format: 'int64',
        },

        digitalIdentities: {
          type: 'array',
          items: {
            $ref: '#/definitions/DigitalIdentity',
          },
        },
      },
    },

    DigitalIdentity: {
      type: 'object',
      required: [
        'type',
        'source',
        'mail',
        'uniqueId',
        'entityId',
        'createdAt',
        'updatedAt',
        'isRoleAttachable',
        'role',
      ],
      properties: {
        type: {
          type: 'string',
          format: 'int64',
        },
        source: {
          type: 'string',
          format: 'int64',
        },
        mail: {
          type: 'string',
          format: 'int64',
        },
        uniqueId: {
          type: 'string',
          format: 'int64',
        },
        entityId: {
          type: 'string',
          format: 'int64',
        },
        createdAt: {
          type: 'string',
          format: 'int64',
        },
        updatedAt: {
          type: 'string',
          format: 'int64',
        },
        isRoleAttachable: {
          type: 'boolean',
        },
        role: {
          $ref: '#/definitions/Role',
        },
      },
    },

    Role: {
      type: 'object',
      required: [
        'roleId',
        'jobTitle',
        'digitalIdentityUniqueId',
        'directGroup',
        'hierarchy',
        'hierarchyIds',
        'source',
        'createdAt',
        'updatedAt',
      ],
      properties: {
        roleId: {
          type: 'string',
        },
        jobTitle: {
          type: 'string',
        },
        digitalIdentityUniqueId: {
          type: 'string',
        },
        directGroup: {
          type: 'string',
        },
        hierarchy: {
          type: 'string',
        },
        hierarchyIds: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        source: {
          type: 'string',
        },
        createdAt: {
          type: 'array',
          format: 'int64',
        },
        updatedAt: {
          type: 'array',
          format: 'int64',
        },
      },
    },

    OrganizationGroup: {
      type: 'object',
      required: [
        'id',
        'name',
        'source',
        'ancestors',
        'hierarchy',
        'status',
        'isLeaf',
        'createdAt',
        'updatedAt',
        'directEntities',
        'directRoles',
      ],
      properties: {
        id: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
        source: {
          type: 'string',
        },
        ancestors: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        hierarchy: {
          type: 'string',
        },
        status: {
          type: 'string',
        },
        isLeaf: {
          type: 'boolean',
        },
        createdAt: {
          type: 'array',
          format: 'int64',
        },
        updatedAt: {
          type: 'array',
          format: 'int64',
        },
        directEntities: {
          type: 'array',
          items: {
            $ref: '#/definitions/Entity',
          },
        },
        directRoles: {
          type: 'array',
          items: {
            $ref: '#/definitions/Role',
          },
        },
      },
    },

    SuccessMessage: {
      type: 'object',
      required: ['success'],
      properties: {
        success: {
          type: 'boolean',
        },
        message: {
          type: 'string',
        },
      },
    },

    OGArray: {
      type: 'object',
      required: ['groups'],
      properties: {
        groups: {
          type: 'array',
          items: {
            $ref: '#/definitions/OrganizationGroup',
          },
        },
      },
    },

    OGTree: {
      type: 'object',
      required: ['id', 'name', 'children'],
      properties: {
        id: {
          type: 'string',
        },
        name: {
          name: 'string',
        },
        children: {
          type: 'array',
          items: {
            $ref: '#/definitions/OGTree',
          },
        },
      },
    },

    EntityArray: {
      type: 'object',
      required: ['entities'],
      properties: {
        entities: {
          type: 'array',
          items: {
            $ref: '#/definitions/Entity',
          },
        },
      },
    },

    RoleArray: {
      type: 'object',
      required: ['roles'],
      properties: {
        roles: {
          type: 'array',
          items: {
            $ref: '#/definitions/Role',
          },
        },
      },
    },

    Image: {
      type: 'object',
      required: ['image'],
      properties: {
        image: {
          type: 'string',
        },
      },
    },

    Request: {
      type: 'object',
      required: [
        'submittedBy',
        'status',
        'commanderDecision',
        'securityDecision',
        'commanders',
        'kartoffelStatus',
        'adStatus',
        'kartoffelParams',
        'adParams',
        'id',
        'createdAt',
        'updatedAt',
        'type',
      ],
      properties: {
        submittedBy: {
          type: 'string',
        },
        status: {
          type: 'string',
          enum: ['SUBMITTED', 'DECLINED', 'IN_PROGRESS', 'DONE', 'FAILED'],
        },
        commanderDecision: {
          $ref: '#/definitions/ApproverDecision',
        },
        securityDecision: {
          $ref: '#/definitions/ApproverDecision',
        },
        commanders: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        kartoffelStatus: {
          $ref: '#/definitions/KartoffelStatus',
        },
        adStatus: {
          $ref: '#/definitions/ADStatus',
        },
        kartoffelParams: {
          $ref: '#/definitions/KartoffelParams',
        },
        adParams: {
          $ref: '#/definitions/ADParams',
        },
        id: {
          type: 'string',
        },
        createdAt: {
          type: 'string',
          format: 'int64',
        },
        updatedAt: {
          type: 'string',
          format: 'int64',
        },
        type: {
          type: 'string',
          enum: [
            'CREATE_OG',
            'CREATE_ROLE',
            'ASSIGN_ROLE_TO_ENTITY',
            'CREATE_ENTITY',
            'RENAME_OG',
            'RENAME_ROLE',
            'EDIT_ENTITY',
            'DELETE_OG',
            'DELETE_ROLE',
            'DISCONNECT_ROLE',
          ],
        },
      },
    },

    ApproverDecision: {
      type: 'object',
      required: ['approverId', 'approverDecision'],
      properties: {
        approverId: {
          type: 'string',
        },
        approverDecision: {
          type: 'string',
          enum: ['DECISION_UNKNOWN', 'APPROVED', 'DENIED'],
        },
      },
    },

    KartoffelStatus: {
      type: 'object',
      required: ['status', 'message'],
      properties: {
        status: {
          type: 'string',
          enum: ['DECISION_UNKNOWN', 'APPROVED', 'DENIED'],
        },
        message: {
          type: 'string',
        },
        createdId: {
          type: 'string',
        },
      },
    },

    ADStatus: {
      type: 'object',
      required: ['status', 'message'],
      properties: {
        status: {
          type: 'string',
          enum: ['DECISION_UNKNOWN', 'APPROVED', 'DENIED'],
        },
        message: {
          type: 'string',
        },
      },
    },

    KartoffelParams: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        parent: {
          type: 'string',
        },
        source: {
          type: 'string',
        },
        jobTitle: {
          type: 'string',
        },
        directGroup: {
          type: 'string',
        },
        roleId: {
          type: 'string',
        },
        type: {
          type: 'string',
        },
        uniqueId: {
          type: 'string',
        },
        mail: {
          type: 'string',
        },
        isRoleAttachable: {
          type: 'boolean',
        },
        id: {
          type: 'string',
        },
        firstName: {
          type: 'string',
        },
        lastName: {
          type: 'string',
        },
        identityCard: {
          type: 'string',
        },
        personalNumber: {
          type: 'string',
        },
        serviceType: {
          type: 'string',
        },
        phone: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        mobilePhone: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        address: {
          type: 'string',
        },
        clearance: {
          type: 'string',
        },
        sex: {
          type: 'string',
        },
        birthdate: {
          type: 'string',
          format: 'int64',
        },
        entityType: {
          type: 'string',
        },
      },
    },

    ADParams: {
      type: 'object',
      properties: {
        ouDisplayName: {
          type: 'string',
        },
        ouName: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
        samAccountName: {
          type: 'string',
        },
        jobTitle: {
          type: 'string',
        },
        oldSAMAccountName: {
          type: 'string',
        },
        newSAMAccountName: {
          type: 'string',
        },
        upn: {
          type: 'string',
        },
        firstName: {
          type: 'string',
        },
        lastName: {
          type: 'string',
        },
        fullName: {
          type: 'string',
        },
        rank: {
          type: 'string',
        },
        roleSerialCode: {
          type: 'string',
        },
        oldName: {
          type: 'string',
        },
        newName: {
          type: 'string',
        },
        newJobTitle: {
          type: 'string',
        },
      },
    },

    RequestArray: {
      type: 'object',
      required: ['requests', 'totalCount'],
      properties: {
        requests: {
          type: 'array',
          items: {
            $ref: '#/definitions/Request',
          },
        },
        totalCount: {
          type: 'integer',
          format: 'int32',
        },
      },
    },

    RenameOGReq: {
      type: 'object',
      required: [
        'submittedBy',
        'status',
        'commanderDecision',
        'securityDecision',
        'commanders',
        'kartoffelStatus',
        'adStatus',
        'kartoffelParams',
        'adParams',
        'id',
        'createdAt',
        'updatedAt',
      ],
      properties: {
        submittedBy: {
          type: 'string',
        },
        status: {
          type: 'string',
          enum: ['SUBMITTED', 'DECLINED', 'IN_PROGRESS', 'DONE', 'FAILED'],
        },
        commanderDecision: {
          $ref: '#/definitions/ApproverDecision',
        },
        securityDecision: {
          $ref: '#/definitions/ApproverDecision',
        },
        commanders: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        kartoffelStatus: {
          $ref: '#/definitions/KartoffelStatus',
        },
        adStatus: {
          $ref: '#/definitions/ADStatus',
        },
        kartoffelParams: {
          $ref: '#/definitions/RenameOGKartoffelParams',
        },
        adParams: {
          $ref: '#/definitions/RenameOGADParams',
        },
      },
    },

    RenameOGRes: {
      type: 'object',
      required: [
        'submittedBy',
        'status',
        'commanderDecision',
        'securityDecision',
        'commanders',
        'kartoffelStatus',
        'adStatus',
        'kartoffelParams',
        'adParams',
        'id',
        'createdAt',
        'updatedAt',
      ],
      properties: {
        submittedBy: {
          type: 'string',
        },
        status: {
          type: 'string',
          enum: ['SUBMITTED', 'DECLINED', 'IN_PROGRESS', 'DONE', 'FAILED'],
        },
        commanderDecision: {
          $ref: '#/definitions/ApproverDecision',
        },
        securityDecision: {
          $ref: '#/definitions/ApproverDecision',
        },
        commanders: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        kartoffelStatus: {
          $ref: '#/definitions/KartoffelStatus',
        },
        adStatus: {
          $ref: '#/definitions/ADStatus',
        },
        kartoffelParams: {
          $ref: '#/definitions/RenameOGKartoffelParams',
        },
        adParams: {
          $ref: '#/definitions/RenameOGADParams',
        },
        id: {
          type: 'string',
        },
        createdAt: {
          type: 'string',
          format: 'int64',
        },
        updatedAt: {
          type: 'string',
          format: 'int64',
        },
      },
    },

    RenameRoleReq: {
      type: 'object',
      required: [
        'submittedBy',
        'status',
        'commanderDecision',
        'securityDecision',
        'commanders',
        'kartoffelStatus',
        'adStatus',
        'kartoffelParams',
        'adParams',
      ],
      properties: {
        submittedBy: {
          type: 'string',
        },
        status: {
          type: 'string',
          enum: ['SUBMITTED', 'DECLINED', 'IN_PROGRESS', 'DONE', 'FAILED'],
        },
        commanderDecision: {
          $ref: '#/definitions/ApproverDecision',
        },
        securityDecision: {
          $ref: '#/definitions/ApproverDecision',
        },
        commanders: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        kartoffelStatus: {
          $ref: '#/definitions/KartoffelStatus',
        },
        adStatus: {
          $ref: '#/definitions/ADStatus',
        },
        kartoffelParams: {
          $ref: '#/definitions/EditEntityKartoffelParams',
        },
        adParams: {
          $ref: '#/definitions/EditEntityADParams',
        },
      },
    },

    RenameRoleRes: {
      type: 'object',
      required: [
        'submittedBy',
        'status',
        'commanderDecision',
        'securityDecision',
        'commanders',
        'kartoffelStatus',
        'adStatus',
        'kartoffelParams',
        'adParams',
        'id',
        'createdAt',
        'updatedAt',
      ],
      properties: {
        submittedBy: {
          type: 'string',
        },
        status: {
          type: 'string',
          enum: ['SUBMITTED', 'DECLINED', 'IN_PROGRESS', 'DONE', 'FAILED'],
        },
        commanderDecision: {
          $ref: '#/definitions/ApproverDecision',
        },
        securityDecision: {
          $ref: '#/definitions/ApproverDecision',
        },
        commanders: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        kartoffelStatus: {
          $ref: '#/definitions/KartoffelStatus',
        },
        adStatus: {
          $ref: '#/definitions/ADStatus',
        },
        kartoffelParams: {
          $ref: '#/definitions/RenameRoleKartoffelParams',
        },
        adParams: {
          $ref: '#/definitions/RenameRoleADParams',
        },
        id: {
          type: 'string',
        },
        createdAt: {
          type: 'string',
          format: 'int64',
        },
        updatedAt: {
          type: 'string',
          format: 'int64',
        },
      },
    },

    EditEntityReq: {
      type: 'object',
      required: [
        'submittedBy',
        'status',
        'commanderDecision',
        'securityDecision',
        'commanders',
        'kartoffelStatus',
        'adStatus',
        'kartoffelParams',
        'adParams',
      ],
      properties: {
        submittedBy: {
          type: 'string',
        },
        status: {
          type: 'string',
          enum: ['SUBMITTED', 'DECLINED', 'IN_PROGRESS', 'DONE', 'FAILED'],
        },
        commanderDecision: {
          $ref: '#/definitions/ApproverDecision',
        },
        securityDecision: {
          $ref: '#/definitions/ApproverDecision',
        },
        commanders: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        kartoffelStatus: {
          $ref: '#/definitions/KartoffelStatus',
        },
        adStatus: {
          $ref: '#/definitions/ADStatus',
        },
        kartoffelParams: {
          $ref: '#/definitions/EditEntityKartoffelParams',
        },
        adParams: {
          $ref: '#/definitions/EditEntityADParams',
        },
      },
    },

    EditEntityRes: {
      type: 'object',
      required: [
        'submittedBy',
        'status',
        'commanderDecision',
        'securityDecision',
        'commanders',
        'kartoffelStatus',
        'adStatus',
        'kartoffelParams',
        'adParams',
        'id',
        'createdAt',
        'updatedAt',
      ],
      properties: {
        submittedBy: {
          type: 'string',
        },
        status: {
          type: 'string',
          enum: ['SUBMITTED', 'DECLINED', 'IN_PROGRESS', 'DONE', 'FAILED'],
        },
        commanderDecision: {
          $ref: '#/definitions/ApproverDecision',
        },
        securityDecision: {
          $ref: '#/definitions/ApproverDecision',
        },
        commanders: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        kartoffelStatus: {
          $ref: '#/definitions/KartoffelStatus',
        },
        adStatus: {
          $ref: '#/definitions/ADStatus',
        },
        kartoffelParams: {
          $ref: '#/definitions/EditEntityKartoffelParams',
        },
        adParams: {
          $ref: '#/definitions/EditEntityADParams',
        },
        id: {
          type: 'string',
        },
        createdAt: {
          type: 'string',
          format: 'int64',
        },
        updatedAt: {
          type: 'string',
          format: 'int64',
        },
      },
    },

    CreateOGReq: {
      type: 'object',
      required: [
        'submittedBy',
        'status',
        'commanderDecision',
        'securityDecision',
        'commanders',
        'kartoffelStatus',
        'adStatus',
        'kartoffelParams',
        'adParams',
      ],
      properties: {
        submittedBy: {
          type: 'string',
        },
        status: {
          type: 'string',
          enum: ['SUBMITTED', 'DECLINED', 'IN_PROGRESS', 'DONE', 'FAILED'],
        },
        commanderDecision: {
          $ref: '#/definitions/ApproverDecision',
        },
        securityDecision: {
          $ref: '#/definitions/ApproverDecision',
        },
        commanders: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        kartoffelStatus: {
          $ref: '#/definitions/KartoffelStatus',
        },
        adStatus: {
          $ref: '#/definitions/ADStatus',
        },
        kartoffelParams: {
          $ref: '#/definitions/KartoffelParams',
        },
        adParams: {
          $ref: '#/definitions/ADParams',
        },
      },
    },

    CreateOGRes: {
      type: 'object',
      required: [
        'submittedBy',
        'status',
        'commanderDecision',
        'securityDecision',
        'commanders',
        'kartoffelStatus',
        'adStatus',
        'kartoffelParams',
        'adParams',
        'id',
        'createdAt',
        'updatedAt',
      ],
      properties: {
        submittedBy: {
          type: 'string',
        },
        status: {
          type: 'string',
          enum: ['SUBMITTED', 'DECLINED', 'IN_PROGRESS', 'DONE', 'FAILED'],
        },
        commanderDecision: {
          $ref: '#/definitions/ApproverDecision',
        },
        securityDecision: {
          $ref: '#/definitions/ApproverDecision',
        },
        commanders: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        kartoffelStatus: {
          $ref: '#/definitions/KartoffelStatus',
        },
        adStatus: {
          $ref: '#/definitions/ADStatus',
        },
        kartoffelParams: {
          $ref: '#/definitions/KartoffelParams',
        },
        adParams: {
          $ref: '#/definitions/ADParams',
        },
        id: {
          type: 'string',
        },
        createdAt: {
          type: 'integer',
          format: 'int64',
        },
        updatedAt: {
          type: 'integer',
          format: 'int64',
        },
      },
    },

    CreateRoleReq: {
      type: 'object',
      required: [
        'submittedBy',
        'status',
        'commanderDecision',
        'securityDecision',
        'commanders',
        'kartoffelStatus',
        'adStatus',
        'kartoffelParams',
        'adParams',
      ],
      properties: {
        submittedBy: {
          type: 'string',
        },
        status: {
          type: 'string',
          enum: ['SUBMITTED', 'DECLINED', 'IN_PROGRESS', 'DONE', 'FAILED'],
        },
        commanderDecision: {
          $ref: '#/definitions/ApproverDecision',
        },
        securityDecision: {
          $ref: '#/definitions/ApproverDecision',
        },
        commanders: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        kartoffelStatus: {
          $ref: '#/definitions/KartoffelStatus',
        },
        adStatus: {
          $ref: '#/definitions/ADStatus',
        },
        kartoffelParams: {
          $ref: '#/definitions/CreateOGKartoffelParams',
        },
        adParams: {
          $ref: '#/definitions/CreateOGADParams',
        },
      },
    },

    CreateRoleRes: {
      type: 'object',
      required: [
        'submittedBy',
        'status',
        'commanderDecision',
        'securityDecision',
        'commanders',
        'kartoffelStatus',
        'adStatus',
        'kartoffelParams',
        'adParams',
        'id',
        'createdAt',
        'updatedAt',
      ],
      properties: {
        submittedBy: {
          type: 'string',
        },
        status: {
          type: 'string',
          enum: ['SUBMITTED', 'DECLINED', 'IN_PROGRESS', 'DONE', 'FAILED'],
        },
        commanderDecision: {
          $ref: '#/definitions/ApproverDecision',
        },
        securityDecision: {
          $ref: '#/definitions/ApproverDecision',
        },
        commanders: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        kartoffelStatus: {
          $ref: '#/definitions/KartoffelStatus',
        },
        adStatus: {
          $ref: '#/definitions/ADStatus',
        },
        kartoffelParams: {
          $ref: '#/definitions/CreateOGKartoffelParams',
        },
        adParams: {
          $ref: '#/definitions/CreateOGADParams',
        },
        id: {
          type: 'string',
        },
        createdAt: {
          type: 'integer',
          format: 'int64',
        },
        updatedAt: {
          type: 'integer',
          format: 'int64',
        },
      },
    },

    CreateEntityReq: {
      type: 'object',
      required: [
        'submittedBy',
        'status',
        'commanderDecision',
        'securityDecision',
        'commanders',
        'kartoffelStatus',
        'adStatus',
        'kartoffelParams',
        'adParams',
      ],
      properties: {
        submittedBy: {
          type: 'string',
        },
        status: {
          type: 'string',
          enum: ['SUBMITTED', 'DECLINED', 'IN_PROGRESS', 'DONE', 'FAILED'],
        },
        commanderDecision: {
          $ref: '#/definitions/ApproverDecision',
        },
        securityDecision: {
          $ref: '#/definitions/ApproverDecision',
        },
        commanders: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        kartoffelStatus: {
          $ref: '#/definitions/KartoffelStatus',
        },
        adStatus: {
          $ref: '#/definitions/ADStatus',
        },
        kartoffelParams: {
          $ref: '#/definitions/CreateEntityKartoffelParams',
        },
        adParams: {
          $ref: '#/definitions/CreateEntityADParams',
        },
      },
    },

    CreateEntityRes: {
      type: 'object',
      required: [
        'submittedBy',
        'status',
        'commanderDecision',
        'securityDecision',
        'commanders',
        'kartoffelStatus',
        'adStatus',
        'kartoffelParams',
        'adParams',
        'id',
        'createdAt',
        'updatedAt',
      ],
      properties: {
        submittedBy: {
          type: 'string',
        },
        status: {
          type: 'string',
          enum: ['SUBMITTED', 'DECLINED', 'IN_PROGRESS', 'DONE', 'FAILED'],
        },
        commanderDecision: {
          $ref: '#/definitions/ApproverDecision',
        },
        securityDecision: {
          $ref: '#/definitions/ApproverDecision',
        },
        commanders: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        kartoffelStatus: {
          $ref: '#/definitions/KartoffelStatus',
        },
        adStatus: {
          $ref: '#/definitions/ADStatus',
        },
        kartoffelParams: {
          $ref: '#/definitions/CreateEntityKartoffelParams',
        },
        adParams: {
          $ref: '#/definitions/CreateEntityADParams',
        },
        id: {
          type: 'string',
        },
        createdAt: {
          type: 'integer',
          format: 'int64',
        },
        updatedAt: {
          type: 'integer',
          format: 'int64',
        },
      },
    },

    AssignRoleToEntityReq: {
      type: 'object',
      required: [
        'submittedBy',
        'status',
        'commanderDecision',
        'securityDecision',
        'commanders',
        'kartoffelStatus',
        'adStatus',
        'kartoffelParams',
        'adParams',
      ],
      properties: {
        submittedBy: {
          type: 'string',
        },
        status: {
          type: 'string',
          enum: ['SUBMITTED', 'DECLINED', 'IN_PROGRESS', 'DONE', 'FAILED'],
        },
        commanderDecision: {
          $ref: '#/definitions/ApproverDecision',
        },
        securityDecision: {
          $ref: '#/definitions/ApproverDecision',
        },
        commanders: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        kartoffelStatus: {
          $ref: '#/definitions/KartoffelStatus',
        },
        adStatus: {
          $ref: '#/definitions/ADStatus',
        },
        kartoffelParams: {
          $ref: '#/definitions/AssignRoleToEntityKartoffelParams',
        },
        adParams: {
          $ref: '#/definitions/AssignRoleToEntityADParams',
        },
      },
    },

    AssignRoleToEntityRes: {
      type: 'object',
      required: [
        'submittedBy',
        'status',
        'commanderDecision',
        'securityDecision',
        'commanders',
        'kartoffelStatus',
        'adStatus',
        'kartoffelParams',
        'adParams',
        'id',
        'createdAt',
        'updatedAt',
      ],
      properties: {
        submittedBy: {
          type: 'string',
        },
        status: {
          type: 'string',
          enum: ['SUBMITTED', 'DECLINED', 'IN_PROGRESS', 'DONE', 'FAILED'],
        },
        commanderDecision: {
          $ref: '#/definitions/ApproverDecision',
        },
        securityDecision: {
          $ref: '#/definitions/ApproverDecision',
        },
        commanders: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        kartoffelStatus: {
          $ref: '#/definitions/KartoffelStatus',
        },
        adStatus: {
          $ref: '#/definitions/ADStatus',
        },
        kartoffelParams: {
          $ref: '#/definitions/AssignRoleToEntityKartoffelParams',
        },
        adParams: {
          $ref: '#/definitions/AssignRoleToEntityADParams',
        },
        id: {
          type: 'string',
        },
        createdAt: {
          type: 'integer',
          format: 'int64',
        },
        updatedAt: {
          type: 'integer',
          format: 'int64',
        },
      },
    },

    DisconectRoleFromEntityReq: {
      type: 'object',
      required: [
        'submittedBy',
        'status',
        'commanderDecision',
        'securityDecision',
        'commanders',
        'kartoffelStatus',
        'adStatus',
        'kartoffelParams',
        'adParams',
      ],
      properties: {
        submittedBy: {
          type: 'string',
        },
        status: {
          type: 'string',
          enum: ['SUBMITTED', 'DECLINED', 'IN_PROGRESS', 'DONE', 'FAILED'],
        },
        commanderDecision: {
          $ref: '#/definitions/ApproverDecision',
        },
        securityDecision: {
          $ref: '#/definitions/ApproverDecision',
        },
        commanders: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        kartoffelStatus: {
          $ref: '#/definitions/KartoffelStatus',
        },
        adStatus: {
          $ref: '#/definitions/ADStatus',
        },
        kartoffelParams: {
          $ref: '#/definitions/DisconectRoleFromEntityKartoffelParams',
        },
        adParams: {
          $ref: '#/definitions/DisconectRoleFromEntityADParams',
        },
      },
    },

    DisconectRoleFromEntityRes: {
      type: 'object',
      required: [
        'submittedBy',
        'status',
        'commanderDecision',
        'securityDecision',
        'commanders',
        'kartoffelStatus',
        'adStatus',
        'kartoffelParams',
        'adParams',
        'id',
        'createdAt',
        'updatedAt',
      ],
      properties: {
        submittedBy: {
          type: 'string',
        },
        status: {
          type: 'string',
          enum: ['SUBMITTED', 'DECLINED', 'IN_PROGRESS', 'DONE', 'FAILED'],
        },
        commanderDecision: {
          $ref: '#/definitions/ApproverDecision',
        },
        securityDecision: {
          $ref: '#/definitions/ApproverDecision',
        },
        commanders: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        kartoffelStatus: {
          $ref: '#/definitions/KartoffelStatus',
        },
        adStatus: {
          $ref: '#/definitions/ADStatus',
        },
        kartoffelParams: {
          $ref: '#/definitions/DisconectRoleFromEntityKartoffelParams',
        },
        adParams: {
          $ref: '#/definitions/DisconectRoleFromEntityADParams',
        },
        id: {
          type: 'string',
        },
        createdAt: {
          type: 'string',
          format: 'int64',
        },
        updatedAt: {
          type: 'string',
          format: 'int64',
        },
      },
    },

    DeleteRoleReq: {
      type: 'object',
      required: [
        'submittedBy',
        'status',
        'commanderDecision',
        'securityDecision',
        'commanders',
        'kartoffelStatus',
        'adStatus',
        'kartoffelParams',
        'adParams',
      ],
      properties: {
        submittedBy: {
          type: 'string',
        },
        status: {
          type: 'string',
          enum: ['SUBMITTED', 'DECLINED', 'IN_PROGRESS', 'DONE', 'FAILED'],
        },
        commanderDecision: {
          $ref: '#/definitions/ApproverDecision',
        },
        securityDecision: {
          $ref: '#/definitions/ApproverDecision',
        },
        commanders: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        kartoffelStatus: {
          $ref: '#/definitions/KartoffelStatus',
        },
        adStatus: {
          $ref: '#/definitions/ADStatus',
        },
        kartoffelParams: {
          $ref: '#/definitions/DeleteRoleKartoffelParams',
        },
        adParams: {
          $ref: '#/definitions/DeleteRoleADParams',
        },
      },
    },

    DeleteRoleRes: {
      type: 'object',
      required: [
        'submittedBy',
        'status',
        'commanderDecision',
        'securityDecision',
        'commanders',
        'kartoffelStatus',
        'adStatus',
        'kartoffelParams',
        'adParams',
        'id',
        'createdAt',
        'updatedAt',
      ],
      properties: {
        submittedBy: {
          type: 'string',
        },
        status: {
          type: 'string',
          enum: ['SUBMITTED', 'DECLINED', 'IN_PROGRESS', 'DONE', 'FAILED'],
        },
        commanderDecision: {
          $ref: '#/definitions/ApproverDecision',
        },
        securityDecision: {
          $ref: '#/definitions/ApproverDecision',
        },
        commanders: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        kartoffelStatus: {
          $ref: '#/definitions/KartoffelStatus',
        },
        adStatus: {
          $ref: '#/definitions/ADStatus',
        },
        kartoffelParams: {
          $ref: '#/definitions/DeleteRoleKartoffelParams',
        },
        adParams: {
          $ref: '#/definitions/DeleteRoleADParams',
        },
        id: {
          type: 'string',
        },
        createdAt: {
          type: 'string',
          format: 'int64',
        },
        updatedAt: {
          type: 'string',
          format: 'int64',
        },
      },
    },

    DeleteOGReq: {
      type: 'object',
      required: [
        'submittedBy',
        'status',
        'commanderDecision',
        'securityDecision',
        'commanders',
        'kartoffelStatus',
        'adStatus',
        'kartoffelParams',
        'adParams',
      ],
      properties: {
        submittedBy: {
          type: 'string',
        },
        status: {
          type: 'string',
          enum: ['SUBMITTED', 'DECLINED', 'IN_PROGRESS', 'DONE', 'FAILED'],
        },
        commanderDecision: {
          $ref: '#/definitions/ApproverDecision',
        },
        securityDecision: {
          $ref: '#/definitions/ApproverDecision',
        },
        commanders: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        kartoffelStatus: {
          $ref: '#/definitions/KartoffelStatus',
        },
        adStatus: {
          $ref: '#/definitions/ADStatus',
        },
        kartoffelParams: {
          $ref: '#/definitions/DeleteOGKartoffelParams',
        },
        adParams: {
          $ref: '#/definitions/DeleteOGADParams',
        },
      },
    },

    DeleteOGRes: {
      type: 'object',
      required: [
        'submittedBy',
        'status',
        'commanderDecision',
        'securityDecision',
        'commanders',
        'kartoffelStatus',
        'adStatus',
        'kartoffelParams',
        'adParams',
        'id',
        'createdAt',
        'updatedAt',
      ],
      properties: {
        submittedBy: {
          type: 'string',
        },
        status: {
          type: 'string',
          enum: ['SUBMITTED', 'DECLINED', 'IN_PROGRESS', 'DONE', 'FAILED'],
        },
        commanderDecision: {
          $ref: '#/definitions/ApproverDecision',
        },
        securityDecision: {
          $ref: '#/definitions/ApproverDecision',
        },
        commanders: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        kartoffelStatus: {
          $ref: '#/definitions/KartoffelStatus',
        },
        adStatus: {
          $ref: '#/definitions/ADStatus',
        },
        kartoffelParams: {
          $ref: '#/definitions/DeleteOGKartoffelParams',
        },
        adParams: {
          $ref: '#/definitions/DeleteOGADParams',
        },
        id: {
          type: 'string',
        },
        createdAt: {
          type: 'string',
          format: 'int64',
        },
        updatedAt: {
          type: 'string',
          format: 'int64',
        },
      },
    },

    DeleteReq: {
      type: 'object',
      required: ['id'],
      properties: {
        id: {
          type: 'string',
        },
      },
    },

    RenameOGKartoffelParams: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        parent: {
          type: 'string',
        },
        source: {
          type: 'string',
        },
        jobTitle: {
          type: 'string',
        },
        directGroup: {
          type: 'string',
        },
        roleId: {
          type: 'string',
        },
        type: {
          type: 'string',
        },
        uniqueId: {
          type: 'string',
        },
        mail: {
          type: 'string',
        },
        isRoleAttachable: {
          type: 'boolean',
        },
        id: {
          type: 'string',
        },
        firstName: {
          type: 'string',
        },
        lastName: {
          type: 'string',
        },
        identityCard: {
          type: 'string',
        },
        personalNumber: {
          type: 'string',
        },
        serviceType: {
          type: 'string',
        },
        phone: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        mobilePhone: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        address: {
          type: 'string',
        },
        clearance: {
          type: 'string',
        },
        sex: {
          type: 'string',
        },
        birthdate: {
          type: 'string',
          format: 'int64',
        },
        entityType: {
          type: 'string',
        },
      },
    },

    RenameOGADParams: {
      type: 'object',
      properties: {
        ouDisplayName: {
          type: 'string',
        },
        ouName: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
        samAccountName: {
          type: 'string',
        },
        jobTitle: {
          type: 'string',
        },
        oldSAMAccountName: {
          type: 'string',
        },
        newSAMAccountName: {
          type: 'string',
        },
        upn: {
          type: 'string',
        },
        firstName: {
          type: 'string',
        },
        lastName: {
          type: 'string',
        },
        fullName: {
          type: 'string',
        },
        rank: {
          type: 'string',
        },
        roleSerialCode: {
          type: 'string',
        },
        oldName: {
          type: 'string',
        },
        newName: {
          type: 'string',
        },
        newJobTitle: {
          type: 'string',
        },
      },
    },

    EditEntityKartoffelParams: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        parent: {
          type: 'string',
        },
        source: {
          type: 'string',
        },
        jobTitle: {
          type: 'string',
        },
        directGroup: {
          type: 'string',
        },
        roleId: {
          type: 'string',
        },
        type: {
          type: 'string',
        },
        uniqueId: {
          type: 'string',
        },
        mail: {
          type: 'string',
        },
        isRoleAttachable: {
          type: 'boolean',
        },
        id: {
          type: 'string',
        },
        firstName: {
          type: 'string',
        },
        lastName: {
          type: 'string',
        },
        identityCard: {
          type: 'string',
        },
        personalNumber: {
          type: 'string',
        },
        serviceType: {
          type: 'string',
        },
        phone: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        mobilePhone: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        address: {
          type: 'string',
        },
        clearance: {
          type: 'string',
        },
        sex: {
          type: 'string',
        },
        birthdate: {
          type: 'string',
          format: 'int64',
        },
        entityType: {
          type: 'string',
        },
      },
    },

    EditEntityADParams: {
      type: 'object',
      properties: {
        ouDisplayName: {
          type: 'string',
        },
        ouName: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
        samAccountName: {
          type: 'string',
        },
        jobTitle: {
          type: 'string',
        },
        oldSAMAccountName: {
          type: 'string',
        },
        newSAMAccountName: {
          type: 'string',
        },
        upn: {
          type: 'string',
        },
        firstName: {
          type: 'string',
        },
        lastName: {
          type: 'string',
        },
        fullName: {
          type: 'string',
        },
        rank: {
          type: 'string',
        },
        roleSerialCode: {
          type: 'string',
        },
        oldName: {
          type: 'string',
        },
        newName: {
          type: 'string',
        },
        newJobTitle: {
          type: 'string',
        },
      },
    },

    CreateOGKartoffelParams: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        parent: {
          type: 'string',
        },
        source: {
          type: 'string',
        },
        jobTitle: {
          type: 'string',
        },
        directGroup: {
          type: 'string',
        },
        roleId: {
          type: 'string',
        },
        type: {
          type: 'string',
        },
        uniqueId: {
          type: 'string',
        },
        mail: {
          type: 'string',
        },
        isRoleAttachable: {
          type: 'boolean',
        },
        id: {
          type: 'string',
        },
        firstName: {
          type: 'string',
        },
        lastName: {
          type: 'string',
        },
        identityCard: {
          type: 'string',
        },
        personalNumber: {
          type: 'string',
        },
        serviceType: {
          type: 'string',
        },
        phone: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        mobilePhone: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        address: {
          type: 'string',
        },
        clearance: {
          type: 'string',
        },
        sex: {
          type: 'string',
        },
        birthdate: {
          type: 'string',
          format: 'int64',
        },
        entityType: {
          type: 'string',
        },
      },
    },

    CreateOGADParams: {
      type: 'object',
      properties: {
        ouDisplayName: {
          type: 'string',
        },
        ouName: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
        samAccountName: {
          type: 'string',
        },
        jobTitle: {
          type: 'string',
        },
        oldSAMAccountName: {
          type: 'string',
        },
        newSAMAccountName: {
          type: 'string',
        },
        upn: {
          type: 'string',
        },
        firstName: {
          type: 'string',
        },
        lastName: {
          type: 'string',
        },
        fullName: {
          type: 'string',
        },
        rank: {
          type: 'string',
        },
        roleSerialCode: {
          type: 'string',
        },
        oldName: {
          type: 'string',
        },
        newName: {
          type: 'string',
        },
        newJobTitle: {
          type: 'string',
        },
      },
    },

    CreateRoleKartoffelParams: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        parent: {
          type: 'string',
        },
        source: {
          type: 'string',
        },
        jobTitle: {
          type: 'string',
        },
        directGroup: {
          type: 'string',
        },
        roleId: {
          type: 'string',
        },
        type: {
          type: 'string',
        },
        uniqueId: {
          type: 'string',
        },
        mail: {
          type: 'string',
        },
        isRoleAttachable: {
          type: 'boolean',
        },
        id: {
          type: 'string',
        },
        firstName: {
          type: 'string',
        },
        lastName: {
          type: 'string',
        },
        identityCard: {
          type: 'string',
        },
        personalNumber: {
          type: 'string',
        },
        serviceType: {
          type: 'string',
        },
        phone: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        mobilePhone: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        address: {
          type: 'string',
        },
        clearance: {
          type: 'string',
        },
        sex: {
          type: 'string',
        },
        birthdate: {
          type: 'string',
          format: 'int64',
        },
        entityType: {
          type: 'string',
        },
      },
    },

    CreateRoleADParams: {
      type: 'object',
      properties: {
        ouDisplayName: {
          type: 'string',
        },
        ouName: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
        samAccountName: {
          type: 'string',
        },
        jobTitle: {
          type: 'string',
        },
        oldSAMAccountName: {
          type: 'string',
        },
        newSAMAccountName: {
          type: 'string',
        },
        upn: {
          type: 'string',
        },
        firstName: {
          type: 'string',
        },
        lastName: {
          type: 'string',
        },
        fullName: {
          type: 'string',
        },
        rank: {
          type: 'string',
        },
        roleSerialCode: {
          type: 'string',
        },
        oldName: {
          type: 'string',
        },
        newName: {
          type: 'string',
        },
        newJobTitle: {
          type: 'string',
        },
      },
    },

    CreateEntityKartoffelParams: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        parent: {
          type: 'string',
        },
        source: {
          type: 'string',
        },
        jobTitle: {
          type: 'string',
        },
        directGroup: {
          type: 'string',
        },
        roleId: {
          type: 'string',
        },
        type: {
          type: 'string',
        },
        uniqueId: {
          type: 'string',
        },
        mail: {
          type: 'string',
        },
        isRoleAttachable: {
          type: 'boolean',
        },
        id: {
          type: 'string',
        },
        firstName: {
          type: 'string',
        },
        lastName: {
          type: 'string',
        },
        identityCard: {
          type: 'string',
        },
        personalNumber: {
          type: 'string',
        },
        serviceType: {
          type: 'string',
        },
        phone: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        mobilePhone: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        address: {
          type: 'string',
        },
        clearance: {
          type: 'string',
        },
        sex: {
          type: 'string',
        },
        birthdate: {
          type: 'integer',
          format: 'int64',
        },
        entityType: {
          type: 'string',
        },
      },
    },

    CreateEntityADParams: {
      type: 'object',
      properties: {
        ouDisplayName: {
          type: 'string',
        },
        ouName: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
        samAccountName: {
          type: 'string',
        },
        jobTitle: {
          type: 'string',
        },
        oldSAMAccountName: {
          type: 'string',
        },
        newSAMAccountName: {
          type: 'string',
        },
        upn: {
          type: 'string',
        },
        firstName: {
          type: 'string',
        },
        lastName: {
          type: 'string',
        },
        fullName: {
          type: 'string',
        },
        rank: {
          type: 'string',
        },
        roleSerialCode: {
          type: 'string',
        },
        oldName: {
          type: 'string',
        },
        newName: {
          type: 'string',
        },
        newJobTitle: {
          type: 'string',
        },
      },
    },

    AssignRoleToEntityKartoffelParams: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        parent: {
          type: 'string',
        },
        source: {
          type: 'string',
        },
        jobTitle: {
          type: 'string',
        },
        directGroup: {
          type: 'string',
        },
        roleId: {
          type: 'string',
        },
        type: {
          type: 'string',
        },
        uniqueId: {
          type: 'string',
        },
        mail: {
          type: 'string',
        },
        isRoleAttachable: {
          type: 'boolean',
        },
        id: {
          type: 'string',
        },
        firstName: {
          type: 'string',
        },
        lastName: {
          type: 'string',
        },
        identityCard: {
          type: 'string',
        },
        personalNumber: {
          type: 'string',
        },
        serviceType: {
          type: 'string',
        },
        phone: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        mobilePhone: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        address: {
          type: 'string',
        },
        clearance: {
          type: 'string',
        },
        sex: {
          type: 'string',
        },
        birthdate: {
          type: 'string',
          format: 'int64',
        },
        entityType: {
          type: 'string',
        },
      },
    },

    AssignRoleToEntityADParams: {
      type: 'object',
      properties: {
        ouDisplayName: {
          type: 'string',
        },
        ouName: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
        samAccountName: {
          type: 'string',
        },
        jobTitle: {
          type: 'string',
        },
        oldSAMAccountName: {
          type: 'string',
        },
        newSAMAccountName: {
          type: 'string',
        },
        upn: {
          type: 'string',
        },
        firstName: {
          type: 'string',
        },
        lastName: {
          type: 'string',
        },
        fullName: {
          type: 'string',
        },
        rank: {
          type: 'string',
        },
        roleSerialCode: {
          type: 'string',
        },
        oldName: {
          type: 'string',
        },
        newName: {
          type: 'string',
        },
        newJobTitle: {
          type: 'string',
        },
      },
    },

    DisconectRoleFromEntityKartoffelParams: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        parent: {
          type: 'string',
        },
        source: {
          type: 'string',
        },
        jobTitle: {
          type: 'string',
        },
        directGroup: {
          type: 'string',
        },
        roleId: {
          type: 'string',
        },
        type: {
          type: 'string',
        },
        uniqueId: {
          type: 'string',
        },
        mail: {
          type: 'string',
        },
        isRoleAttachable: {
          type: 'boolean',
        },
        id: {
          type: 'string',
        },
        firstName: {
          type: 'string',
        },
        lastName: {
          type: 'string',
        },
        identityCard: {
          type: 'string',
        },
        personalNumber: {
          type: 'string',
        },
        serviceType: {
          type: 'string',
        },
        phone: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        mobilePhone: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        address: {
          type: 'string',
        },
        clearance: {
          type: 'string',
        },
        sex: {
          type: 'string',
        },
        birthdate: {
          type: 'string',
          format: 'int64',
        },
        entityType: {
          type: 'string',
        },
      },
    },

    DisconectRoleFromEntityADParams: {
      type: 'object',
      properties: {
        ouDisplayName: {
          type: 'string',
        },
        ouName: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
        samAccountName: {
          type: 'string',
        },
        jobTitle: {
          type: 'string',
        },
        oldSAMAccountName: {
          type: 'string',
        },
        newSAMAccountName: {
          type: 'string',
        },
        upn: {
          type: 'string',
        },
        firstName: {
          type: 'string',
        },
        lastName: {
          type: 'string',
        },
        fullName: {
          type: 'string',
        },
        rank: {
          type: 'string',
        },
        roleSerialCode: {
          type: 'string',
        },
        oldName: {
          type: 'string',
        },
        newName: {
          type: 'string',
        },
        newJobTitle: {
          type: 'string',
        },
      },
    },

    DeleteRoleKartoffelParams: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        parent: {
          type: 'string',
        },
        source: {
          type: 'string',
        },
        jobTitle: {
          type: 'string',
        },
        directGroup: {
          type: 'string',
        },
        roleId: {
          type: 'string',
        },
        type: {
          type: 'string',
        },
        uniqueId: {
          type: 'string',
        },
        mail: {
          type: 'string',
        },
        isRoleAttachable: {
          type: 'boolean',
        },
        id: {
          type: 'string',
        },
        firstName: {
          type: 'string',
        },
        lastName: {
          type: 'string',
        },
        identityCard: {
          type: 'string',
        },
        personalNumber: {
          type: 'string',
        },
        serviceType: {
          type: 'string',
        },
        phone: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        mobilePhone: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        address: {
          type: 'string',
        },
        clearance: {
          type: 'string',
        },
        sex: {
          type: 'string',
        },
        birthdate: {
          type: 'string',
          format: 'int64',
        },
        entityType: {
          type: 'string',
        },
      },
    },

    DeleteRoleADParams: {
      type: 'object',
      properties: {
        ouDisplayName: {
          type: 'string',
        },
        ouName: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
        samAccountName: {
          type: 'string',
        },
        jobTitle: {
          type: 'string',
        },
        oldSAMAccountName: {
          type: 'string',
        },
        newSAMAccountName: {
          type: 'string',
        },
        upn: {
          type: 'string',
        },
        firstName: {
          type: 'string',
        },
        lastName: {
          type: 'string',
        },
        fullName: {
          type: 'string',
        },
        rank: {
          type: 'string',
        },
        roleSerialCode: {
          type: 'string',
        },
        oldName: {
          type: 'string',
        },
        newName: {
          type: 'string',
        },
        newJobTitle: {
          type: 'string',
        },
      },
    },

    DeleteOGKartoffelParams: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        parent: {
          type: 'string',
        },
        source: {
          type: 'string',
        },
        jobTitle: {
          type: 'string',
        },
        directGroup: {
          type: 'string',
        },
        roleId: {
          type: 'string',
        },
        type: {
          type: 'string',
        },
        uniqueId: {
          type: 'string',
        },
        mail: {
          type: 'string',
        },
        isRoleAttachable: {
          type: 'boolean',
        },
        id: {
          type: 'string',
        },
        firstName: {
          type: 'string',
        },
        lastName: {
          type: 'string',
        },
        identityCard: {
          type: 'string',
        },
        personalNumber: {
          type: 'string',
        },
        serviceType: {
          type: 'string',
        },
        phone: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        mobilePhone: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        address: {
          type: 'string',
        },
        clearance: {
          type: 'string',
        },
        sex: {
          type: 'string',
        },
        birthdate: {
          type: 'string',
          format: 'int64',
        },
        entityType: {
          type: 'string',
        },
      },
    },

    DeleteOGADParams: {
      type: 'object',
      properties: {
        ouDisplayName: {
          type: 'string',
        },
        ouName: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
        samAccountName: {
          type: 'string',
        },
        jobTitle: {
          type: 'string',
        },
        oldSAMAccountName: {
          type: 'string',
        },
        newSAMAccountName: {
          type: 'string',
        },
        upn: {
          type: 'string',
        },
        firstName: {
          type: 'string',
        },
        lastName: {
          type: 'string',
        },
        fullName: {
          type: 'string',
        },
        rank: {
          type: 'string',
        },
        roleSerialCode: {
          type: 'string',
        },
        oldName: {
          type: 'string',
        },
        newName: {
          type: 'string',
        },
        newJobTitle: {
          type: 'string',
        },
      },
    },

    UpdateReqProperties: {
      type: 'object',
      properties: {
        properties: {
          submittedBy: {
            type: 'string',
          },
          status: {
            type: 'string',
            enum: ['SUBMITTED', 'DECLINED', 'IN_PROGRESS', 'DONE', 'FAILED'],
          },
          commanderDecision: {
            $ref: '#/definitions/ApproverDecision',
          },
          securityDecision: {
            $ref: '#/definitions/ApproverDecision',
          },
          commanders: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          kartoffelStatus: {
            $ref: '#/definitions/KartoffelStatus',
          },
          adStatus: {
            $ref: '#/definitions/ADStatus',
          },
          kartoffelParams: {
            $ref: '#/definitions/KartoffelParams',
          },
          adParams: {
            $ref: '#/definitions/ADParams',
          },
        },
      },
    },
  },
};
