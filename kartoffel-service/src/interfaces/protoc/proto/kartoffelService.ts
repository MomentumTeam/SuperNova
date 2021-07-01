/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Kartoffel";

/** SearchOG */
export interface SearchOGRequest {
  hierarchyAndName: string;
}

export interface OGArray {
  groups: OrganizationGroup[];
}

/** CreateOG */
export interface CreateOGRequest {
  name: string;
  parent: string;
  source: string;
}

/** CreateDI */
export interface CreateDIRequest {
  type: string;
  source: string;
  uniqueId: string;
  mail: string;
  isRoleAttachable: boolean;
}

/** CreateRole */
export interface CreateRoleRequest {
  jobTitle: string;
  directGroup: string;
  source: string;
  roleId: string;
}

/** ConnectRoleAndDI */
export interface ConnectRoleAndDIRequest {
  /** mongoId of role */
  id: string;
  /** uniqueId of DI */
  uniqueId: string;
}

/** SearchEntitiesByFullName */
export interface SearchEntitiesByFullNameRequest {
  fullName: string;
}

export interface EntityArray {
  entities: Entity[];
}

/** GetEntityByIdNumber */
export interface GetEntityByIdNumberRequest {
  /** identityCard or personalNumber */
  idNumber: string;
}

/** SearchRolesByRoleId */
export interface SearchRolesByRoleIdRequest {
  roleId: string;
}

/** GetRolesUnderOG */
export interface GetRolesUnderOGRequest {
  /** mongoId of OG */
  id: string;
  direct: boolean;
}

export interface RoleArray {
  roles: Role[];
}

/** ConnectEntityAndDI */
export interface ConnectEntityAndDIRequest {
  /** mongoId of entity */
  id: string;
  /** uniqueId of DI (taken from the role) */
  uniqueId: string;
}

/** CreateEntity */
export interface CreateEntityRequest {
  firstName: string;
  lastName: string;
  identityCard: string;
  personalNumber: string;
  serviceType: string;
  phone: string[];
  mobilePhone: string[];
  address: string;
  clearance: string;
  sex: string;
  birthdate: number;
  entityType: string;
}

/** GetEntityByRoleId */
export interface GetEntityByRoleIdRequest {
  roleId: string;
}

/** DisconnectDIFromEntity */
export interface DisconnectDIFromEntityRequest {
  /** mongoId of entity */
  id: string;
  /** uniqueId of DI (taken from the role) */
  uniqueId: string;
}

/** GetEntityByMongoId */
export interface GetEntityByMongoIdRequest {
  /** mongoId of entity */
  id: string;
}

/** DeleteOG */
export interface DeleteOGRequest {
  /** mongoId of OG */
  id: string;
}

/** GetChildrenOfOG */
export interface GetChildrenOfOGRequest {
  /** mongoId of OG */
  id: string;
}

/** DeleteRole */
export interface DeleteRoleRequest {
  roleId: string;
}

/** DeleteDI */
export interface DeleteDIRequest {
  /** uniqueId of DI (taken from the role) */
  uniqueId: string;
}

/** GetEntitiesUnderOG */
export interface GetEntitiesUnderOGRequest {
  /** mongoIds of OG */
  id: string;
  direct: boolean;
}

/** SuccessMessage */
export interface SuccessMessage {
  success: boolean;
}

export interface OrganizationGroup {
  id: string;
  name: string;
  source: string;
  ancestors: string[];
  hierarchy: string;
  status: string;
  isLeaf: boolean;
  createdAt: number;
  updatedAt: number;
  directEntities: Entity[];
  directRoles: Role[];
}

export interface Role {
  roleId: string;
  jobTitle: string;
  digitalIdentityUniqueId: string;
  directGroup: string;
  hierarchy: string;
  hierarchyIds: string[];
  source: string;
  createdAt: number;
  updatedAt: number;
}

export interface Entity {
  id: string;
  displayName: string;
  directGroup: string;
  hierarchy: string;
  entityType: string;
  identityCard: string;
  personalNumber: string;
  serviceType: string;
  firstName: string;
  lastName: string;
  akaUnit: string;
  dischargeDay: number;
  rank: string;
  mail: string;
  jobTitle: string;
  phone: string[];
  mobilePhone: string[];
  address: string;
  clearance: string;
  sex: string;
  birthdate: number;
  createdAt: number;
  updatedAt: number;
  digitalIdentities: DigitalIdentity[];
}

export interface DigitalIdentity {
  type: string;
  source: string;
  mail: string;
  uniqueId: string;
  entityId: string;
  createdAt: number;
  updatedAt: number;
  isRoleAttachable: boolean;
  role: Role | undefined;
}

const baseSearchOGRequest: object = { hierarchyAndName: "" };

export const SearchOGRequest = {
  encode(
    message: SearchOGRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.hierarchyAndName !== "") {
      writer.uint32(10).string(message.hierarchyAndName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SearchOGRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSearchOGRequest } as SearchOGRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hierarchyAndName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SearchOGRequest {
    const message = { ...baseSearchOGRequest } as SearchOGRequest;
    if (
      object.hierarchyAndName !== undefined &&
      object.hierarchyAndName !== null
    ) {
      message.hierarchyAndName = String(object.hierarchyAndName);
    } else {
      message.hierarchyAndName = "";
    }
    return message;
  },

  toJSON(message: SearchOGRequest): unknown {
    const obj: any = {};
    message.hierarchyAndName !== undefined &&
      (obj.hierarchyAndName = message.hierarchyAndName);
    return obj;
  },

  fromPartial(object: DeepPartial<SearchOGRequest>): SearchOGRequest {
    const message = { ...baseSearchOGRequest } as SearchOGRequest;
    if (
      object.hierarchyAndName !== undefined &&
      object.hierarchyAndName !== null
    ) {
      message.hierarchyAndName = object.hierarchyAndName;
    } else {
      message.hierarchyAndName = "";
    }
    return message;
  },
};

const baseOGArray: object = {};

export const OGArray = {
  encode(
    message: OGArray,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.groups) {
      OrganizationGroup.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OGArray {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOGArray } as OGArray;
    message.groups = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groups.push(
            OrganizationGroup.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OGArray {
    const message = { ...baseOGArray } as OGArray;
    message.groups = [];
    if (object.groups !== undefined && object.groups !== null) {
      for (const e of object.groups) {
        message.groups.push(OrganizationGroup.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: OGArray): unknown {
    const obj: any = {};
    if (message.groups) {
      obj.groups = message.groups.map((e) =>
        e ? OrganizationGroup.toJSON(e) : undefined
      );
    } else {
      obj.groups = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<OGArray>): OGArray {
    const message = { ...baseOGArray } as OGArray;
    message.groups = [];
    if (object.groups !== undefined && object.groups !== null) {
      for (const e of object.groups) {
        message.groups.push(OrganizationGroup.fromPartial(e));
      }
    }
    return message;
  },
};

const baseCreateOGRequest: object = { name: "", parent: "", source: "" };

export const CreateOGRequest = {
  encode(
    message: CreateOGRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.parent !== "") {
      writer.uint32(18).string(message.parent);
    }
    if (message.source !== "") {
      writer.uint32(26).string(message.source);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOGRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateOGRequest } as CreateOGRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.parent = reader.string();
          break;
        case 3:
          message.source = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateOGRequest {
    const message = { ...baseCreateOGRequest } as CreateOGRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = String(object.parent);
    } else {
      message.parent = "";
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = String(object.source);
    } else {
      message.source = "";
    }
    return message;
  },

  toJSON(message: CreateOGRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.parent !== undefined && (obj.parent = message.parent);
    message.source !== undefined && (obj.source = message.source);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateOGRequest>): CreateOGRequest {
    const message = { ...baseCreateOGRequest } as CreateOGRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = object.parent;
    } else {
      message.parent = "";
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    } else {
      message.source = "";
    }
    return message;
  },
};

const baseCreateDIRequest: object = {
  type: "",
  source: "",
  uniqueId: "",
  mail: "",
  isRoleAttachable: false,
};

export const CreateDIRequest = {
  encode(
    message: CreateDIRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.source !== "") {
      writer.uint32(18).string(message.source);
    }
    if (message.uniqueId !== "") {
      writer.uint32(26).string(message.uniqueId);
    }
    if (message.mail !== "") {
      writer.uint32(34).string(message.mail);
    }
    if (message.isRoleAttachable === true) {
      writer.uint32(40).bool(message.isRoleAttachable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateDIRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateDIRequest } as CreateDIRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.source = reader.string();
          break;
        case 3:
          message.uniqueId = reader.string();
          break;
        case 4:
          message.mail = reader.string();
          break;
        case 5:
          message.isRoleAttachable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateDIRequest {
    const message = { ...baseCreateDIRequest } as CreateDIRequest;
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = String(object.source);
    } else {
      message.source = "";
    }
    if (object.uniqueId !== undefined && object.uniqueId !== null) {
      message.uniqueId = String(object.uniqueId);
    } else {
      message.uniqueId = "";
    }
    if (object.mail !== undefined && object.mail !== null) {
      message.mail = String(object.mail);
    } else {
      message.mail = "";
    }
    if (
      object.isRoleAttachable !== undefined &&
      object.isRoleAttachable !== null
    ) {
      message.isRoleAttachable = Boolean(object.isRoleAttachable);
    } else {
      message.isRoleAttachable = false;
    }
    return message;
  },

  toJSON(message: CreateDIRequest): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.source !== undefined && (obj.source = message.source);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.mail !== undefined && (obj.mail = message.mail);
    message.isRoleAttachable !== undefined &&
      (obj.isRoleAttachable = message.isRoleAttachable);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateDIRequest>): CreateDIRequest {
    const message = { ...baseCreateDIRequest } as CreateDIRequest;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    } else {
      message.source = "";
    }
    if (object.uniqueId !== undefined && object.uniqueId !== null) {
      message.uniqueId = object.uniqueId;
    } else {
      message.uniqueId = "";
    }
    if (object.mail !== undefined && object.mail !== null) {
      message.mail = object.mail;
    } else {
      message.mail = "";
    }
    if (
      object.isRoleAttachable !== undefined &&
      object.isRoleAttachable !== null
    ) {
      message.isRoleAttachable = object.isRoleAttachable;
    } else {
      message.isRoleAttachable = false;
    }
    return message;
  },
};

const baseCreateRoleRequest: object = {
  jobTitle: "",
  directGroup: "",
  source: "",
  roleId: "",
};

export const CreateRoleRequest = {
  encode(
    message: CreateRoleRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.jobTitle !== "") {
      writer.uint32(10).string(message.jobTitle);
    }
    if (message.directGroup !== "") {
      writer.uint32(18).string(message.directGroup);
    }
    if (message.source !== "") {
      writer.uint32(26).string(message.source);
    }
    if (message.roleId !== "") {
      writer.uint32(34).string(message.roleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateRoleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateRoleRequest } as CreateRoleRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.jobTitle = reader.string();
          break;
        case 2:
          message.directGroup = reader.string();
          break;
        case 3:
          message.source = reader.string();
          break;
        case 4:
          message.roleId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateRoleRequest {
    const message = { ...baseCreateRoleRequest } as CreateRoleRequest;
    if (object.jobTitle !== undefined && object.jobTitle !== null) {
      message.jobTitle = String(object.jobTitle);
    } else {
      message.jobTitle = "";
    }
    if (object.directGroup !== undefined && object.directGroup !== null) {
      message.directGroup = String(object.directGroup);
    } else {
      message.directGroup = "";
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = String(object.source);
    } else {
      message.source = "";
    }
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = String(object.roleId);
    } else {
      message.roleId = "";
    }
    return message;
  },

  toJSON(message: CreateRoleRequest): unknown {
    const obj: any = {};
    message.jobTitle !== undefined && (obj.jobTitle = message.jobTitle);
    message.directGroup !== undefined &&
      (obj.directGroup = message.directGroup);
    message.source !== undefined && (obj.source = message.source);
    message.roleId !== undefined && (obj.roleId = message.roleId);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateRoleRequest>): CreateRoleRequest {
    const message = { ...baseCreateRoleRequest } as CreateRoleRequest;
    if (object.jobTitle !== undefined && object.jobTitle !== null) {
      message.jobTitle = object.jobTitle;
    } else {
      message.jobTitle = "";
    }
    if (object.directGroup !== undefined && object.directGroup !== null) {
      message.directGroup = object.directGroup;
    } else {
      message.directGroup = "";
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    } else {
      message.source = "";
    }
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = object.roleId;
    } else {
      message.roleId = "";
    }
    return message;
  },
};

const baseConnectRoleAndDIRequest: object = { id: "", uniqueId: "" };

export const ConnectRoleAndDIRequest = {
  encode(
    message: ConnectRoleAndDIRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.uniqueId !== "") {
      writer.uint32(18).string(message.uniqueId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ConnectRoleAndDIRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseConnectRoleAndDIRequest,
    } as ConnectRoleAndDIRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.uniqueId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConnectRoleAndDIRequest {
    const message = {
      ...baseConnectRoleAndDIRequest,
    } as ConnectRoleAndDIRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.uniqueId !== undefined && object.uniqueId !== null) {
      message.uniqueId = String(object.uniqueId);
    } else {
      message.uniqueId = "";
    }
    return message;
  },

  toJSON(message: ConnectRoleAndDIRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ConnectRoleAndDIRequest>
  ): ConnectRoleAndDIRequest {
    const message = {
      ...baseConnectRoleAndDIRequest,
    } as ConnectRoleAndDIRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.uniqueId !== undefined && object.uniqueId !== null) {
      message.uniqueId = object.uniqueId;
    } else {
      message.uniqueId = "";
    }
    return message;
  },
};

const baseSearchEntitiesByFullNameRequest: object = { fullName: "" };

export const SearchEntitiesByFullNameRequest = {
  encode(
    message: SearchEntitiesByFullNameRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fullName !== "") {
      writer.uint32(10).string(message.fullName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SearchEntitiesByFullNameRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSearchEntitiesByFullNameRequest,
    } as SearchEntitiesByFullNameRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SearchEntitiesByFullNameRequest {
    const message = {
      ...baseSearchEntitiesByFullNameRequest,
    } as SearchEntitiesByFullNameRequest;
    if (object.fullName !== undefined && object.fullName !== null) {
      message.fullName = String(object.fullName);
    } else {
      message.fullName = "";
    }
    return message;
  },

  toJSON(message: SearchEntitiesByFullNameRequest): unknown {
    const obj: any = {};
    message.fullName !== undefined && (obj.fullName = message.fullName);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SearchEntitiesByFullNameRequest>
  ): SearchEntitiesByFullNameRequest {
    const message = {
      ...baseSearchEntitiesByFullNameRequest,
    } as SearchEntitiesByFullNameRequest;
    if (object.fullName !== undefined && object.fullName !== null) {
      message.fullName = object.fullName;
    } else {
      message.fullName = "";
    }
    return message;
  },
};

const baseEntityArray: object = {};

export const EntityArray = {
  encode(
    message: EntityArray,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.entities) {
      Entity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EntityArray {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEntityArray } as EntityArray;
    message.entities = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entities.push(Entity.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EntityArray {
    const message = { ...baseEntityArray } as EntityArray;
    message.entities = [];
    if (object.entities !== undefined && object.entities !== null) {
      for (const e of object.entities) {
        message.entities.push(Entity.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: EntityArray): unknown {
    const obj: any = {};
    if (message.entities) {
      obj.entities = message.entities.map((e) =>
        e ? Entity.toJSON(e) : undefined
      );
    } else {
      obj.entities = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<EntityArray>): EntityArray {
    const message = { ...baseEntityArray } as EntityArray;
    message.entities = [];
    if (object.entities !== undefined && object.entities !== null) {
      for (const e of object.entities) {
        message.entities.push(Entity.fromPartial(e));
      }
    }
    return message;
  },
};

const baseGetEntityByIdNumberRequest: object = { idNumber: "" };

export const GetEntityByIdNumberRequest = {
  encode(
    message: GetEntityByIdNumberRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.idNumber !== "") {
      writer.uint32(10).string(message.idNumber);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetEntityByIdNumberRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetEntityByIdNumberRequest,
    } as GetEntityByIdNumberRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.idNumber = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetEntityByIdNumberRequest {
    const message = {
      ...baseGetEntityByIdNumberRequest,
    } as GetEntityByIdNumberRequest;
    if (object.idNumber !== undefined && object.idNumber !== null) {
      message.idNumber = String(object.idNumber);
    } else {
      message.idNumber = "";
    }
    return message;
  },

  toJSON(message: GetEntityByIdNumberRequest): unknown {
    const obj: any = {};
    message.idNumber !== undefined && (obj.idNumber = message.idNumber);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetEntityByIdNumberRequest>
  ): GetEntityByIdNumberRequest {
    const message = {
      ...baseGetEntityByIdNumberRequest,
    } as GetEntityByIdNumberRequest;
    if (object.idNumber !== undefined && object.idNumber !== null) {
      message.idNumber = object.idNumber;
    } else {
      message.idNumber = "";
    }
    return message;
  },
};

const baseSearchRolesByRoleIdRequest: object = { roleId: "" };

export const SearchRolesByRoleIdRequest = {
  encode(
    message: SearchRolesByRoleIdRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.roleId !== "") {
      writer.uint32(10).string(message.roleId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SearchRolesByRoleIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSearchRolesByRoleIdRequest,
    } as SearchRolesByRoleIdRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.roleId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SearchRolesByRoleIdRequest {
    const message = {
      ...baseSearchRolesByRoleIdRequest,
    } as SearchRolesByRoleIdRequest;
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = String(object.roleId);
    } else {
      message.roleId = "";
    }
    return message;
  },

  toJSON(message: SearchRolesByRoleIdRequest): unknown {
    const obj: any = {};
    message.roleId !== undefined && (obj.roleId = message.roleId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SearchRolesByRoleIdRequest>
  ): SearchRolesByRoleIdRequest {
    const message = {
      ...baseSearchRolesByRoleIdRequest,
    } as SearchRolesByRoleIdRequest;
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = object.roleId;
    } else {
      message.roleId = "";
    }
    return message;
  },
};

const baseGetRolesUnderOGRequest: object = { id: "", direct: false };

export const GetRolesUnderOGRequest = {
  encode(
    message: GetRolesUnderOGRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.direct === true) {
      writer.uint32(16).bool(message.direct);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetRolesUnderOGRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetRolesUnderOGRequest } as GetRolesUnderOGRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.direct = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetRolesUnderOGRequest {
    const message = { ...baseGetRolesUnderOGRequest } as GetRolesUnderOGRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.direct !== undefined && object.direct !== null) {
      message.direct = Boolean(object.direct);
    } else {
      message.direct = false;
    }
    return message;
  },

  toJSON(message: GetRolesUnderOGRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.direct !== undefined && (obj.direct = message.direct);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetRolesUnderOGRequest>
  ): GetRolesUnderOGRequest {
    const message = { ...baseGetRolesUnderOGRequest } as GetRolesUnderOGRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.direct !== undefined && object.direct !== null) {
      message.direct = object.direct;
    } else {
      message.direct = false;
    }
    return message;
  },
};

const baseRoleArray: object = {};

export const RoleArray = {
  encode(
    message: RoleArray,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.roles) {
      Role.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoleArray {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRoleArray } as RoleArray;
    message.roles = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.roles.push(Role.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RoleArray {
    const message = { ...baseRoleArray } as RoleArray;
    message.roles = [];
    if (object.roles !== undefined && object.roles !== null) {
      for (const e of object.roles) {
        message.roles.push(Role.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: RoleArray): unknown {
    const obj: any = {};
    if (message.roles) {
      obj.roles = message.roles.map((e) => (e ? Role.toJSON(e) : undefined));
    } else {
      obj.roles = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<RoleArray>): RoleArray {
    const message = { ...baseRoleArray } as RoleArray;
    message.roles = [];
    if (object.roles !== undefined && object.roles !== null) {
      for (const e of object.roles) {
        message.roles.push(Role.fromPartial(e));
      }
    }
    return message;
  },
};

const baseConnectEntityAndDIRequest: object = { id: "", uniqueId: "" };

export const ConnectEntityAndDIRequest = {
  encode(
    message: ConnectEntityAndDIRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.uniqueId !== "") {
      writer.uint32(18).string(message.uniqueId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ConnectEntityAndDIRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseConnectEntityAndDIRequest,
    } as ConnectEntityAndDIRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.uniqueId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConnectEntityAndDIRequest {
    const message = {
      ...baseConnectEntityAndDIRequest,
    } as ConnectEntityAndDIRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.uniqueId !== undefined && object.uniqueId !== null) {
      message.uniqueId = String(object.uniqueId);
    } else {
      message.uniqueId = "";
    }
    return message;
  },

  toJSON(message: ConnectEntityAndDIRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ConnectEntityAndDIRequest>
  ): ConnectEntityAndDIRequest {
    const message = {
      ...baseConnectEntityAndDIRequest,
    } as ConnectEntityAndDIRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.uniqueId !== undefined && object.uniqueId !== null) {
      message.uniqueId = object.uniqueId;
    } else {
      message.uniqueId = "";
    }
    return message;
  },
};

const baseCreateEntityRequest: object = {
  firstName: "",
  lastName: "",
  identityCard: "",
  personalNumber: "",
  serviceType: "",
  phone: "",
  mobilePhone: "",
  address: "",
  clearance: "",
  sex: "",
  birthdate: 0,
  entityType: "",
};

export const CreateEntityRequest = {
  encode(
    message: CreateEntityRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.firstName !== "") {
      writer.uint32(10).string(message.firstName);
    }
    if (message.lastName !== "") {
      writer.uint32(18).string(message.lastName);
    }
    if (message.identityCard !== "") {
      writer.uint32(26).string(message.identityCard);
    }
    if (message.personalNumber !== "") {
      writer.uint32(34).string(message.personalNumber);
    }
    if (message.serviceType !== "") {
      writer.uint32(42).string(message.serviceType);
    }
    for (const v of message.phone) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.mobilePhone) {
      writer.uint32(58).string(v!);
    }
    if (message.address !== "") {
      writer.uint32(66).string(message.address);
    }
    if (message.clearance !== "") {
      writer.uint32(74).string(message.clearance);
    }
    if (message.sex !== "") {
      writer.uint32(82).string(message.sex);
    }
    if (message.birthdate !== 0) {
      writer.uint32(88).int64(message.birthdate);
    }
    if (message.entityType !== "") {
      writer.uint32(98).string(message.entityType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateEntityRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateEntityRequest } as CreateEntityRequest;
    message.phone = [];
    message.mobilePhone = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.firstName = reader.string();
          break;
        case 2:
          message.lastName = reader.string();
          break;
        case 3:
          message.identityCard = reader.string();
          break;
        case 4:
          message.personalNumber = reader.string();
          break;
        case 5:
          message.serviceType = reader.string();
          break;
        case 6:
          message.phone.push(reader.string());
          break;
        case 7:
          message.mobilePhone.push(reader.string());
          break;
        case 8:
          message.address = reader.string();
          break;
        case 9:
          message.clearance = reader.string();
          break;
        case 10:
          message.sex = reader.string();
          break;
        case 11:
          message.birthdate = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.entityType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateEntityRequest {
    const message = { ...baseCreateEntityRequest } as CreateEntityRequest;
    message.phone = [];
    message.mobilePhone = [];
    if (object.firstName !== undefined && object.firstName !== null) {
      message.firstName = String(object.firstName);
    } else {
      message.firstName = "";
    }
    if (object.lastName !== undefined && object.lastName !== null) {
      message.lastName = String(object.lastName);
    } else {
      message.lastName = "";
    }
    if (object.identityCard !== undefined && object.identityCard !== null) {
      message.identityCard = String(object.identityCard);
    } else {
      message.identityCard = "";
    }
    if (object.personalNumber !== undefined && object.personalNumber !== null) {
      message.personalNumber = String(object.personalNumber);
    } else {
      message.personalNumber = "";
    }
    if (object.serviceType !== undefined && object.serviceType !== null) {
      message.serviceType = String(object.serviceType);
    } else {
      message.serviceType = "";
    }
    if (object.phone !== undefined && object.phone !== null) {
      for (const e of object.phone) {
        message.phone.push(String(e));
      }
    }
    if (object.mobilePhone !== undefined && object.mobilePhone !== null) {
      for (const e of object.mobilePhone) {
        message.mobilePhone.push(String(e));
      }
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.clearance !== undefined && object.clearance !== null) {
      message.clearance = String(object.clearance);
    } else {
      message.clearance = "";
    }
    if (object.sex !== undefined && object.sex !== null) {
      message.sex = String(object.sex);
    } else {
      message.sex = "";
    }
    if (object.birthdate !== undefined && object.birthdate !== null) {
      message.birthdate = Number(object.birthdate);
    } else {
      message.birthdate = 0;
    }
    if (object.entityType !== undefined && object.entityType !== null) {
      message.entityType = String(object.entityType);
    } else {
      message.entityType = "";
    }
    return message;
  },

  toJSON(message: CreateEntityRequest): unknown {
    const obj: any = {};
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    message.identityCard !== undefined &&
      (obj.identityCard = message.identityCard);
    message.personalNumber !== undefined &&
      (obj.personalNumber = message.personalNumber);
    message.serviceType !== undefined &&
      (obj.serviceType = message.serviceType);
    if (message.phone) {
      obj.phone = message.phone.map((e) => e);
    } else {
      obj.phone = [];
    }
    if (message.mobilePhone) {
      obj.mobilePhone = message.mobilePhone.map((e) => e);
    } else {
      obj.mobilePhone = [];
    }
    message.address !== undefined && (obj.address = message.address);
    message.clearance !== undefined && (obj.clearance = message.clearance);
    message.sex !== undefined && (obj.sex = message.sex);
    message.birthdate !== undefined && (obj.birthdate = message.birthdate);
    message.entityType !== undefined && (obj.entityType = message.entityType);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateEntityRequest>): CreateEntityRequest {
    const message = { ...baseCreateEntityRequest } as CreateEntityRequest;
    message.phone = [];
    message.mobilePhone = [];
    if (object.firstName !== undefined && object.firstName !== null) {
      message.firstName = object.firstName;
    } else {
      message.firstName = "";
    }
    if (object.lastName !== undefined && object.lastName !== null) {
      message.lastName = object.lastName;
    } else {
      message.lastName = "";
    }
    if (object.identityCard !== undefined && object.identityCard !== null) {
      message.identityCard = object.identityCard;
    } else {
      message.identityCard = "";
    }
    if (object.personalNumber !== undefined && object.personalNumber !== null) {
      message.personalNumber = object.personalNumber;
    } else {
      message.personalNumber = "";
    }
    if (object.serviceType !== undefined && object.serviceType !== null) {
      message.serviceType = object.serviceType;
    } else {
      message.serviceType = "";
    }
    if (object.phone !== undefined && object.phone !== null) {
      for (const e of object.phone) {
        message.phone.push(e);
      }
    }
    if (object.mobilePhone !== undefined && object.mobilePhone !== null) {
      for (const e of object.mobilePhone) {
        message.mobilePhone.push(e);
      }
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.clearance !== undefined && object.clearance !== null) {
      message.clearance = object.clearance;
    } else {
      message.clearance = "";
    }
    if (object.sex !== undefined && object.sex !== null) {
      message.sex = object.sex;
    } else {
      message.sex = "";
    }
    if (object.birthdate !== undefined && object.birthdate !== null) {
      message.birthdate = object.birthdate;
    } else {
      message.birthdate = 0;
    }
    if (object.entityType !== undefined && object.entityType !== null) {
      message.entityType = object.entityType;
    } else {
      message.entityType = "";
    }
    return message;
  },
};

const baseGetEntityByRoleIdRequest: object = { roleId: "" };

export const GetEntityByRoleIdRequest = {
  encode(
    message: GetEntityByRoleIdRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.roleId !== "") {
      writer.uint32(10).string(message.roleId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetEntityByRoleIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetEntityByRoleIdRequest,
    } as GetEntityByRoleIdRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.roleId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetEntityByRoleIdRequest {
    const message = {
      ...baseGetEntityByRoleIdRequest,
    } as GetEntityByRoleIdRequest;
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = String(object.roleId);
    } else {
      message.roleId = "";
    }
    return message;
  },

  toJSON(message: GetEntityByRoleIdRequest): unknown {
    const obj: any = {};
    message.roleId !== undefined && (obj.roleId = message.roleId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetEntityByRoleIdRequest>
  ): GetEntityByRoleIdRequest {
    const message = {
      ...baseGetEntityByRoleIdRequest,
    } as GetEntityByRoleIdRequest;
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = object.roleId;
    } else {
      message.roleId = "";
    }
    return message;
  },
};

const baseDisconnectDIFromEntityRequest: object = { id: "", uniqueId: "" };

export const DisconnectDIFromEntityRequest = {
  encode(
    message: DisconnectDIFromEntityRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.uniqueId !== "") {
      writer.uint32(18).string(message.uniqueId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DisconnectDIFromEntityRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDisconnectDIFromEntityRequest,
    } as DisconnectDIFromEntityRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.uniqueId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DisconnectDIFromEntityRequest {
    const message = {
      ...baseDisconnectDIFromEntityRequest,
    } as DisconnectDIFromEntityRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.uniqueId !== undefined && object.uniqueId !== null) {
      message.uniqueId = String(object.uniqueId);
    } else {
      message.uniqueId = "";
    }
    return message;
  },

  toJSON(message: DisconnectDIFromEntityRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DisconnectDIFromEntityRequest>
  ): DisconnectDIFromEntityRequest {
    const message = {
      ...baseDisconnectDIFromEntityRequest,
    } as DisconnectDIFromEntityRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.uniqueId !== undefined && object.uniqueId !== null) {
      message.uniqueId = object.uniqueId;
    } else {
      message.uniqueId = "";
    }
    return message;
  },
};

const baseGetEntityByMongoIdRequest: object = { id: "" };

export const GetEntityByMongoIdRequest = {
  encode(
    message: GetEntityByMongoIdRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetEntityByMongoIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetEntityByMongoIdRequest,
    } as GetEntityByMongoIdRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetEntityByMongoIdRequest {
    const message = {
      ...baseGetEntityByMongoIdRequest,
    } as GetEntityByMongoIdRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: GetEntityByMongoIdRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetEntityByMongoIdRequest>
  ): GetEntityByMongoIdRequest {
    const message = {
      ...baseGetEntityByMongoIdRequest,
    } as GetEntityByMongoIdRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
};

const baseDeleteOGRequest: object = { id: "" };

export const DeleteOGRequest = {
  encode(
    message: DeleteOGRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteOGRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteOGRequest } as DeleteOGRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteOGRequest {
    const message = { ...baseDeleteOGRequest } as DeleteOGRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: DeleteOGRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<DeleteOGRequest>): DeleteOGRequest {
    const message = { ...baseDeleteOGRequest } as DeleteOGRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
};

const baseGetChildrenOfOGRequest: object = { id: "" };

export const GetChildrenOfOGRequest = {
  encode(
    message: GetChildrenOfOGRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetChildrenOfOGRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetChildrenOfOGRequest } as GetChildrenOfOGRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetChildrenOfOGRequest {
    const message = { ...baseGetChildrenOfOGRequest } as GetChildrenOfOGRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: GetChildrenOfOGRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetChildrenOfOGRequest>
  ): GetChildrenOfOGRequest {
    const message = { ...baseGetChildrenOfOGRequest } as GetChildrenOfOGRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
};

const baseDeleteRoleRequest: object = { roleId: "" };

export const DeleteRoleRequest = {
  encode(
    message: DeleteRoleRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.roleId !== "") {
      writer.uint32(10).string(message.roleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteRoleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteRoleRequest } as DeleteRoleRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.roleId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteRoleRequest {
    const message = { ...baseDeleteRoleRequest } as DeleteRoleRequest;
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = String(object.roleId);
    } else {
      message.roleId = "";
    }
    return message;
  },

  toJSON(message: DeleteRoleRequest): unknown {
    const obj: any = {};
    message.roleId !== undefined && (obj.roleId = message.roleId);
    return obj;
  },

  fromPartial(object: DeepPartial<DeleteRoleRequest>): DeleteRoleRequest {
    const message = { ...baseDeleteRoleRequest } as DeleteRoleRequest;
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = object.roleId;
    } else {
      message.roleId = "";
    }
    return message;
  },
};

const baseDeleteDIRequest: object = { uniqueId: "" };

export const DeleteDIRequest = {
  encode(
    message: DeleteDIRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.uniqueId !== "") {
      writer.uint32(10).string(message.uniqueId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteDIRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteDIRequest } as DeleteDIRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uniqueId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteDIRequest {
    const message = { ...baseDeleteDIRequest } as DeleteDIRequest;
    if (object.uniqueId !== undefined && object.uniqueId !== null) {
      message.uniqueId = String(object.uniqueId);
    } else {
      message.uniqueId = "";
    }
    return message;
  },

  toJSON(message: DeleteDIRequest): unknown {
    const obj: any = {};
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    return obj;
  },

  fromPartial(object: DeepPartial<DeleteDIRequest>): DeleteDIRequest {
    const message = { ...baseDeleteDIRequest } as DeleteDIRequest;
    if (object.uniqueId !== undefined && object.uniqueId !== null) {
      message.uniqueId = object.uniqueId;
    } else {
      message.uniqueId = "";
    }
    return message;
  },
};

const baseGetEntitiesUnderOGRequest: object = { id: "", direct: false };

export const GetEntitiesUnderOGRequest = {
  encode(
    message: GetEntitiesUnderOGRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.direct === true) {
      writer.uint32(16).bool(message.direct);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetEntitiesUnderOGRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetEntitiesUnderOGRequest,
    } as GetEntitiesUnderOGRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.direct = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetEntitiesUnderOGRequest {
    const message = {
      ...baseGetEntitiesUnderOGRequest,
    } as GetEntitiesUnderOGRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.direct !== undefined && object.direct !== null) {
      message.direct = Boolean(object.direct);
    } else {
      message.direct = false;
    }
    return message;
  },

  toJSON(message: GetEntitiesUnderOGRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.direct !== undefined && (obj.direct = message.direct);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetEntitiesUnderOGRequest>
  ): GetEntitiesUnderOGRequest {
    const message = {
      ...baseGetEntitiesUnderOGRequest,
    } as GetEntitiesUnderOGRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.direct !== undefined && object.direct !== null) {
      message.direct = object.direct;
    } else {
      message.direct = false;
    }
    return message;
  },
};

const baseSuccessMessage: object = { success: false };

export const SuccessMessage = {
  encode(
    message: SuccessMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SuccessMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSuccessMessage } as SuccessMessage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SuccessMessage {
    const message = { ...baseSuccessMessage } as SuccessMessage;
    if (object.success !== undefined && object.success !== null) {
      message.success = Boolean(object.success);
    } else {
      message.success = false;
    }
    return message;
  },

  toJSON(message: SuccessMessage): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },

  fromPartial(object: DeepPartial<SuccessMessage>): SuccessMessage {
    const message = { ...baseSuccessMessage } as SuccessMessage;
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    } else {
      message.success = false;
    }
    return message;
  },
};

const baseOrganizationGroup: object = {
  id: "",
  name: "",
  source: "",
  ancestors: "",
  hierarchy: "",
  status: "",
  isLeaf: false,
  createdAt: 0,
  updatedAt: 0,
};

export const OrganizationGroup = {
  encode(
    message: OrganizationGroup,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.source !== "") {
      writer.uint32(26).string(message.source);
    }
    for (const v of message.ancestors) {
      writer.uint32(34).string(v!);
    }
    if (message.hierarchy !== "") {
      writer.uint32(42).string(message.hierarchy);
    }
    if (message.status !== "") {
      writer.uint32(50).string(message.status);
    }
    if (message.isLeaf === true) {
      writer.uint32(56).bool(message.isLeaf);
    }
    if (message.createdAt !== 0) {
      writer.uint32(64).int64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(72).int64(message.updatedAt);
    }
    for (const v of message.directEntities) {
      Entity.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.directRoles) {
      Role.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrganizationGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOrganizationGroup } as OrganizationGroup;
    message.ancestors = [];
    message.directEntities = [];
    message.directRoles = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.source = reader.string();
          break;
        case 4:
          message.ancestors.push(reader.string());
          break;
        case 5:
          message.hierarchy = reader.string();
          break;
        case 6:
          message.status = reader.string();
          break;
        case 7:
          message.isLeaf = reader.bool();
          break;
        case 8:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.updatedAt = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.directEntities.push(Entity.decode(reader, reader.uint32()));
          break;
        case 11:
          message.directRoles.push(Role.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrganizationGroup {
    const message = { ...baseOrganizationGroup } as OrganizationGroup;
    message.ancestors = [];
    message.directEntities = [];
    message.directRoles = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = String(object.source);
    } else {
      message.source = "";
    }
    if (object.ancestors !== undefined && object.ancestors !== null) {
      for (const e of object.ancestors) {
        message.ancestors.push(String(e));
      }
    }
    if (object.hierarchy !== undefined && object.hierarchy !== null) {
      message.hierarchy = String(object.hierarchy);
    } else {
      message.hierarchy = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    if (object.isLeaf !== undefined && object.isLeaf !== null) {
      message.isLeaf = Boolean(object.isLeaf);
    } else {
      message.isLeaf = false;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Number(object.createdAt);
    } else {
      message.createdAt = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = Number(object.updatedAt);
    } else {
      message.updatedAt = 0;
    }
    if (object.directEntities !== undefined && object.directEntities !== null) {
      for (const e of object.directEntities) {
        message.directEntities.push(Entity.fromJSON(e));
      }
    }
    if (object.directRoles !== undefined && object.directRoles !== null) {
      for (const e of object.directRoles) {
        message.directRoles.push(Role.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: OrganizationGroup): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.source !== undefined && (obj.source = message.source);
    if (message.ancestors) {
      obj.ancestors = message.ancestors.map((e) => e);
    } else {
      obj.ancestors = [];
    }
    message.hierarchy !== undefined && (obj.hierarchy = message.hierarchy);
    message.status !== undefined && (obj.status = message.status);
    message.isLeaf !== undefined && (obj.isLeaf = message.isLeaf);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
    if (message.directEntities) {
      obj.directEntities = message.directEntities.map((e) =>
        e ? Entity.toJSON(e) : undefined
      );
    } else {
      obj.directEntities = [];
    }
    if (message.directRoles) {
      obj.directRoles = message.directRoles.map((e) =>
        e ? Role.toJSON(e) : undefined
      );
    } else {
      obj.directRoles = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<OrganizationGroup>): OrganizationGroup {
    const message = { ...baseOrganizationGroup } as OrganizationGroup;
    message.ancestors = [];
    message.directEntities = [];
    message.directRoles = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    } else {
      message.source = "";
    }
    if (object.ancestors !== undefined && object.ancestors !== null) {
      for (const e of object.ancestors) {
        message.ancestors.push(e);
      }
    }
    if (object.hierarchy !== undefined && object.hierarchy !== null) {
      message.hierarchy = object.hierarchy;
    } else {
      message.hierarchy = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    if (object.isLeaf !== undefined && object.isLeaf !== null) {
      message.isLeaf = object.isLeaf;
    } else {
      message.isLeaf = false;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = 0;
    }
    if (object.directEntities !== undefined && object.directEntities !== null) {
      for (const e of object.directEntities) {
        message.directEntities.push(Entity.fromPartial(e));
      }
    }
    if (object.directRoles !== undefined && object.directRoles !== null) {
      for (const e of object.directRoles) {
        message.directRoles.push(Role.fromPartial(e));
      }
    }
    return message;
  },
};

const baseRole: object = {
  roleId: "",
  jobTitle: "",
  digitalIdentityUniqueId: "",
  directGroup: "",
  hierarchy: "",
  hierarchyIds: "",
  source: "",
  createdAt: 0,
  updatedAt: 0,
};

export const Role = {
  encode(message: Role, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.roleId !== "") {
      writer.uint32(10).string(message.roleId);
    }
    if (message.jobTitle !== "") {
      writer.uint32(18).string(message.jobTitle);
    }
    if (message.digitalIdentityUniqueId !== "") {
      writer.uint32(26).string(message.digitalIdentityUniqueId);
    }
    if (message.directGroup !== "") {
      writer.uint32(34).string(message.directGroup);
    }
    if (message.hierarchy !== "") {
      writer.uint32(42).string(message.hierarchy);
    }
    for (const v of message.hierarchyIds) {
      writer.uint32(50).string(v!);
    }
    if (message.source !== "") {
      writer.uint32(58).string(message.source);
    }
    if (message.createdAt !== 0) {
      writer.uint32(64).int64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(72).int64(message.updatedAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Role {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRole } as Role;
    message.hierarchyIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.roleId = reader.string();
          break;
        case 2:
          message.jobTitle = reader.string();
          break;
        case 3:
          message.digitalIdentityUniqueId = reader.string();
          break;
        case 4:
          message.directGroup = reader.string();
          break;
        case 5:
          message.hierarchy = reader.string();
          break;
        case 6:
          message.hierarchyIds.push(reader.string());
          break;
        case 7:
          message.source = reader.string();
          break;
        case 8:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.updatedAt = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Role {
    const message = { ...baseRole } as Role;
    message.hierarchyIds = [];
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = String(object.roleId);
    } else {
      message.roleId = "";
    }
    if (object.jobTitle !== undefined && object.jobTitle !== null) {
      message.jobTitle = String(object.jobTitle);
    } else {
      message.jobTitle = "";
    }
    if (
      object.digitalIdentityUniqueId !== undefined &&
      object.digitalIdentityUniqueId !== null
    ) {
      message.digitalIdentityUniqueId = String(object.digitalIdentityUniqueId);
    } else {
      message.digitalIdentityUniqueId = "";
    }
    if (object.directGroup !== undefined && object.directGroup !== null) {
      message.directGroup = String(object.directGroup);
    } else {
      message.directGroup = "";
    }
    if (object.hierarchy !== undefined && object.hierarchy !== null) {
      message.hierarchy = String(object.hierarchy);
    } else {
      message.hierarchy = "";
    }
    if (object.hierarchyIds !== undefined && object.hierarchyIds !== null) {
      for (const e of object.hierarchyIds) {
        message.hierarchyIds.push(String(e));
      }
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = String(object.source);
    } else {
      message.source = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Number(object.createdAt);
    } else {
      message.createdAt = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = Number(object.updatedAt);
    } else {
      message.updatedAt = 0;
    }
    return message;
  },

  toJSON(message: Role): unknown {
    const obj: any = {};
    message.roleId !== undefined && (obj.roleId = message.roleId);
    message.jobTitle !== undefined && (obj.jobTitle = message.jobTitle);
    message.digitalIdentityUniqueId !== undefined &&
      (obj.digitalIdentityUniqueId = message.digitalIdentityUniqueId);
    message.directGroup !== undefined &&
      (obj.directGroup = message.directGroup);
    message.hierarchy !== undefined && (obj.hierarchy = message.hierarchy);
    if (message.hierarchyIds) {
      obj.hierarchyIds = message.hierarchyIds.map((e) => e);
    } else {
      obj.hierarchyIds = [];
    }
    message.source !== undefined && (obj.source = message.source);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
    return obj;
  },

  fromPartial(object: DeepPartial<Role>): Role {
    const message = { ...baseRole } as Role;
    message.hierarchyIds = [];
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = object.roleId;
    } else {
      message.roleId = "";
    }
    if (object.jobTitle !== undefined && object.jobTitle !== null) {
      message.jobTitle = object.jobTitle;
    } else {
      message.jobTitle = "";
    }
    if (
      object.digitalIdentityUniqueId !== undefined &&
      object.digitalIdentityUniqueId !== null
    ) {
      message.digitalIdentityUniqueId = object.digitalIdentityUniqueId;
    } else {
      message.digitalIdentityUniqueId = "";
    }
    if (object.directGroup !== undefined && object.directGroup !== null) {
      message.directGroup = object.directGroup;
    } else {
      message.directGroup = "";
    }
    if (object.hierarchy !== undefined && object.hierarchy !== null) {
      message.hierarchy = object.hierarchy;
    } else {
      message.hierarchy = "";
    }
    if (object.hierarchyIds !== undefined && object.hierarchyIds !== null) {
      for (const e of object.hierarchyIds) {
        message.hierarchyIds.push(e);
      }
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    } else {
      message.source = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = 0;
    }
    return message;
  },
};

const baseEntity: object = {
  id: "",
  displayName: "",
  directGroup: "",
  hierarchy: "",
  entityType: "",
  identityCard: "",
  personalNumber: "",
  serviceType: "",
  firstName: "",
  lastName: "",
  akaUnit: "",
  dischargeDay: 0,
  rank: "",
  mail: "",
  jobTitle: "",
  phone: "",
  mobilePhone: "",
  address: "",
  clearance: "",
  sex: "",
  birthdate: 0,
  createdAt: 0,
  updatedAt: 0,
};

export const Entity = {
  encode(
    message: Entity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.displayName !== "") {
      writer.uint32(18).string(message.displayName);
    }
    if (message.directGroup !== "") {
      writer.uint32(26).string(message.directGroup);
    }
    if (message.hierarchy !== "") {
      writer.uint32(34).string(message.hierarchy);
    }
    if (message.entityType !== "") {
      writer.uint32(42).string(message.entityType);
    }
    if (message.identityCard !== "") {
      writer.uint32(50).string(message.identityCard);
    }
    if (message.personalNumber !== "") {
      writer.uint32(58).string(message.personalNumber);
    }
    if (message.serviceType !== "") {
      writer.uint32(66).string(message.serviceType);
    }
    if (message.firstName !== "") {
      writer.uint32(74).string(message.firstName);
    }
    if (message.lastName !== "") {
      writer.uint32(82).string(message.lastName);
    }
    if (message.akaUnit !== "") {
      writer.uint32(90).string(message.akaUnit);
    }
    if (message.dischargeDay !== 0) {
      writer.uint32(96).int64(message.dischargeDay);
    }
    if (message.rank !== "") {
      writer.uint32(106).string(message.rank);
    }
    if (message.mail !== "") {
      writer.uint32(114).string(message.mail);
    }
    if (message.jobTitle !== "") {
      writer.uint32(122).string(message.jobTitle);
    }
    for (const v of message.phone) {
      writer.uint32(130).string(v!);
    }
    for (const v of message.mobilePhone) {
      writer.uint32(138).string(v!);
    }
    if (message.address !== "") {
      writer.uint32(146).string(message.address);
    }
    if (message.clearance !== "") {
      writer.uint32(154).string(message.clearance);
    }
    if (message.sex !== "") {
      writer.uint32(162).string(message.sex);
    }
    if (message.birthdate !== 0) {
      writer.uint32(168).int64(message.birthdate);
    }
    if (message.createdAt !== 0) {
      writer.uint32(176).int64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(184).int64(message.updatedAt);
    }
    for (const v of message.digitalIdentities) {
      DigitalIdentity.encode(v!, writer.uint32(194).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Entity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEntity } as Entity;
    message.phone = [];
    message.mobilePhone = [];
    message.digitalIdentities = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.displayName = reader.string();
          break;
        case 3:
          message.directGroup = reader.string();
          break;
        case 4:
          message.hierarchy = reader.string();
          break;
        case 5:
          message.entityType = reader.string();
          break;
        case 6:
          message.identityCard = reader.string();
          break;
        case 7:
          message.personalNumber = reader.string();
          break;
        case 8:
          message.serviceType = reader.string();
          break;
        case 9:
          message.firstName = reader.string();
          break;
        case 10:
          message.lastName = reader.string();
          break;
        case 11:
          message.akaUnit = reader.string();
          break;
        case 12:
          message.dischargeDay = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.rank = reader.string();
          break;
        case 14:
          message.mail = reader.string();
          break;
        case 15:
          message.jobTitle = reader.string();
          break;
        case 16:
          message.phone.push(reader.string());
          break;
        case 17:
          message.mobilePhone.push(reader.string());
          break;
        case 18:
          message.address = reader.string();
          break;
        case 19:
          message.clearance = reader.string();
          break;
        case 20:
          message.sex = reader.string();
          break;
        case 21:
          message.birthdate = longToNumber(reader.int64() as Long);
          break;
        case 22:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 23:
          message.updatedAt = longToNumber(reader.int64() as Long);
          break;
        case 24:
          message.digitalIdentities.push(
            DigitalIdentity.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Entity {
    const message = { ...baseEntity } as Entity;
    message.phone = [];
    message.mobilePhone = [];
    message.digitalIdentities = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.displayName !== undefined && object.displayName !== null) {
      message.displayName = String(object.displayName);
    } else {
      message.displayName = "";
    }
    if (object.directGroup !== undefined && object.directGroup !== null) {
      message.directGroup = String(object.directGroup);
    } else {
      message.directGroup = "";
    }
    if (object.hierarchy !== undefined && object.hierarchy !== null) {
      message.hierarchy = String(object.hierarchy);
    } else {
      message.hierarchy = "";
    }
    if (object.entityType !== undefined && object.entityType !== null) {
      message.entityType = String(object.entityType);
    } else {
      message.entityType = "";
    }
    if (object.identityCard !== undefined && object.identityCard !== null) {
      message.identityCard = String(object.identityCard);
    } else {
      message.identityCard = "";
    }
    if (object.personalNumber !== undefined && object.personalNumber !== null) {
      message.personalNumber = String(object.personalNumber);
    } else {
      message.personalNumber = "";
    }
    if (object.serviceType !== undefined && object.serviceType !== null) {
      message.serviceType = String(object.serviceType);
    } else {
      message.serviceType = "";
    }
    if (object.firstName !== undefined && object.firstName !== null) {
      message.firstName = String(object.firstName);
    } else {
      message.firstName = "";
    }
    if (object.lastName !== undefined && object.lastName !== null) {
      message.lastName = String(object.lastName);
    } else {
      message.lastName = "";
    }
    if (object.akaUnit !== undefined && object.akaUnit !== null) {
      message.akaUnit = String(object.akaUnit);
    } else {
      message.akaUnit = "";
    }
    if (object.dischargeDay !== undefined && object.dischargeDay !== null) {
      message.dischargeDay = Number(object.dischargeDay);
    } else {
      message.dischargeDay = 0;
    }
    if (object.rank !== undefined && object.rank !== null) {
      message.rank = String(object.rank);
    } else {
      message.rank = "";
    }
    if (object.mail !== undefined && object.mail !== null) {
      message.mail = String(object.mail);
    } else {
      message.mail = "";
    }
    if (object.jobTitle !== undefined && object.jobTitle !== null) {
      message.jobTitle = String(object.jobTitle);
    } else {
      message.jobTitle = "";
    }
    if (object.phone !== undefined && object.phone !== null) {
      for (const e of object.phone) {
        message.phone.push(String(e));
      }
    }
    if (object.mobilePhone !== undefined && object.mobilePhone !== null) {
      for (const e of object.mobilePhone) {
        message.mobilePhone.push(String(e));
      }
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.clearance !== undefined && object.clearance !== null) {
      message.clearance = String(object.clearance);
    } else {
      message.clearance = "";
    }
    if (object.sex !== undefined && object.sex !== null) {
      message.sex = String(object.sex);
    } else {
      message.sex = "";
    }
    if (object.birthdate !== undefined && object.birthdate !== null) {
      message.birthdate = Number(object.birthdate);
    } else {
      message.birthdate = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Number(object.createdAt);
    } else {
      message.createdAt = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = Number(object.updatedAt);
    } else {
      message.updatedAt = 0;
    }
    if (
      object.digitalIdentities !== undefined &&
      object.digitalIdentities !== null
    ) {
      for (const e of object.digitalIdentities) {
        message.digitalIdentities.push(DigitalIdentity.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: Entity): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.displayName !== undefined &&
      (obj.displayName = message.displayName);
    message.directGroup !== undefined &&
      (obj.directGroup = message.directGroup);
    message.hierarchy !== undefined && (obj.hierarchy = message.hierarchy);
    message.entityType !== undefined && (obj.entityType = message.entityType);
    message.identityCard !== undefined &&
      (obj.identityCard = message.identityCard);
    message.personalNumber !== undefined &&
      (obj.personalNumber = message.personalNumber);
    message.serviceType !== undefined &&
      (obj.serviceType = message.serviceType);
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    message.akaUnit !== undefined && (obj.akaUnit = message.akaUnit);
    message.dischargeDay !== undefined &&
      (obj.dischargeDay = message.dischargeDay);
    message.rank !== undefined && (obj.rank = message.rank);
    message.mail !== undefined && (obj.mail = message.mail);
    message.jobTitle !== undefined && (obj.jobTitle = message.jobTitle);
    if (message.phone) {
      obj.phone = message.phone.map((e) => e);
    } else {
      obj.phone = [];
    }
    if (message.mobilePhone) {
      obj.mobilePhone = message.mobilePhone.map((e) => e);
    } else {
      obj.mobilePhone = [];
    }
    message.address !== undefined && (obj.address = message.address);
    message.clearance !== undefined && (obj.clearance = message.clearance);
    message.sex !== undefined && (obj.sex = message.sex);
    message.birthdate !== undefined && (obj.birthdate = message.birthdate);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
    if (message.digitalIdentities) {
      obj.digitalIdentities = message.digitalIdentities.map((e) =>
        e ? DigitalIdentity.toJSON(e) : undefined
      );
    } else {
      obj.digitalIdentities = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Entity>): Entity {
    const message = { ...baseEntity } as Entity;
    message.phone = [];
    message.mobilePhone = [];
    message.digitalIdentities = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.displayName !== undefined && object.displayName !== null) {
      message.displayName = object.displayName;
    } else {
      message.displayName = "";
    }
    if (object.directGroup !== undefined && object.directGroup !== null) {
      message.directGroup = object.directGroup;
    } else {
      message.directGroup = "";
    }
    if (object.hierarchy !== undefined && object.hierarchy !== null) {
      message.hierarchy = object.hierarchy;
    } else {
      message.hierarchy = "";
    }
    if (object.entityType !== undefined && object.entityType !== null) {
      message.entityType = object.entityType;
    } else {
      message.entityType = "";
    }
    if (object.identityCard !== undefined && object.identityCard !== null) {
      message.identityCard = object.identityCard;
    } else {
      message.identityCard = "";
    }
    if (object.personalNumber !== undefined && object.personalNumber !== null) {
      message.personalNumber = object.personalNumber;
    } else {
      message.personalNumber = "";
    }
    if (object.serviceType !== undefined && object.serviceType !== null) {
      message.serviceType = object.serviceType;
    } else {
      message.serviceType = "";
    }
    if (object.firstName !== undefined && object.firstName !== null) {
      message.firstName = object.firstName;
    } else {
      message.firstName = "";
    }
    if (object.lastName !== undefined && object.lastName !== null) {
      message.lastName = object.lastName;
    } else {
      message.lastName = "";
    }
    if (object.akaUnit !== undefined && object.akaUnit !== null) {
      message.akaUnit = object.akaUnit;
    } else {
      message.akaUnit = "";
    }
    if (object.dischargeDay !== undefined && object.dischargeDay !== null) {
      message.dischargeDay = object.dischargeDay;
    } else {
      message.dischargeDay = 0;
    }
    if (object.rank !== undefined && object.rank !== null) {
      message.rank = object.rank;
    } else {
      message.rank = "";
    }
    if (object.mail !== undefined && object.mail !== null) {
      message.mail = object.mail;
    } else {
      message.mail = "";
    }
    if (object.jobTitle !== undefined && object.jobTitle !== null) {
      message.jobTitle = object.jobTitle;
    } else {
      message.jobTitle = "";
    }
    if (object.phone !== undefined && object.phone !== null) {
      for (const e of object.phone) {
        message.phone.push(e);
      }
    }
    if (object.mobilePhone !== undefined && object.mobilePhone !== null) {
      for (const e of object.mobilePhone) {
        message.mobilePhone.push(e);
      }
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.clearance !== undefined && object.clearance !== null) {
      message.clearance = object.clearance;
    } else {
      message.clearance = "";
    }
    if (object.sex !== undefined && object.sex !== null) {
      message.sex = object.sex;
    } else {
      message.sex = "";
    }
    if (object.birthdate !== undefined && object.birthdate !== null) {
      message.birthdate = object.birthdate;
    } else {
      message.birthdate = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = 0;
    }
    if (
      object.digitalIdentities !== undefined &&
      object.digitalIdentities !== null
    ) {
      for (const e of object.digitalIdentities) {
        message.digitalIdentities.push(DigitalIdentity.fromPartial(e));
      }
    }
    return message;
  },
};

const baseDigitalIdentity: object = {
  type: "",
  source: "",
  mail: "",
  uniqueId: "",
  entityId: "",
  createdAt: 0,
  updatedAt: 0,
  isRoleAttachable: false,
};

export const DigitalIdentity = {
  encode(
    message: DigitalIdentity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.source !== "") {
      writer.uint32(18).string(message.source);
    }
    if (message.mail !== "") {
      writer.uint32(26).string(message.mail);
    }
    if (message.uniqueId !== "") {
      writer.uint32(34).string(message.uniqueId);
    }
    if (message.entityId !== "") {
      writer.uint32(42).string(message.entityId);
    }
    if (message.createdAt !== 0) {
      writer.uint32(48).int64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(56).int64(message.updatedAt);
    }
    if (message.isRoleAttachable === true) {
      writer.uint32(64).bool(message.isRoleAttachable);
    }
    if (message.role !== undefined) {
      Role.encode(message.role, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DigitalIdentity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDigitalIdentity } as DigitalIdentity;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.source = reader.string();
          break;
        case 3:
          message.mail = reader.string();
          break;
        case 4:
          message.uniqueId = reader.string();
          break;
        case 5:
          message.entityId = reader.string();
          break;
        case 6:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.updatedAt = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.isRoleAttachable = reader.bool();
          break;
        case 9:
          message.role = Role.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DigitalIdentity {
    const message = { ...baseDigitalIdentity } as DigitalIdentity;
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = String(object.source);
    } else {
      message.source = "";
    }
    if (object.mail !== undefined && object.mail !== null) {
      message.mail = String(object.mail);
    } else {
      message.mail = "";
    }
    if (object.uniqueId !== undefined && object.uniqueId !== null) {
      message.uniqueId = String(object.uniqueId);
    } else {
      message.uniqueId = "";
    }
    if (object.entityId !== undefined && object.entityId !== null) {
      message.entityId = String(object.entityId);
    } else {
      message.entityId = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Number(object.createdAt);
    } else {
      message.createdAt = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = Number(object.updatedAt);
    } else {
      message.updatedAt = 0;
    }
    if (
      object.isRoleAttachable !== undefined &&
      object.isRoleAttachable !== null
    ) {
      message.isRoleAttachable = Boolean(object.isRoleAttachable);
    } else {
      message.isRoleAttachable = false;
    }
    if (object.role !== undefined && object.role !== null) {
      message.role = Role.fromJSON(object.role);
    } else {
      message.role = undefined;
    }
    return message;
  },

  toJSON(message: DigitalIdentity): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.source !== undefined && (obj.source = message.source);
    message.mail !== undefined && (obj.mail = message.mail);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.entityId !== undefined && (obj.entityId = message.entityId);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
    message.isRoleAttachable !== undefined &&
      (obj.isRoleAttachable = message.isRoleAttachable);
    message.role !== undefined &&
      (obj.role = message.role ? Role.toJSON(message.role) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<DigitalIdentity>): DigitalIdentity {
    const message = { ...baseDigitalIdentity } as DigitalIdentity;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    } else {
      message.source = "";
    }
    if (object.mail !== undefined && object.mail !== null) {
      message.mail = object.mail;
    } else {
      message.mail = "";
    }
    if (object.uniqueId !== undefined && object.uniqueId !== null) {
      message.uniqueId = object.uniqueId;
    } else {
      message.uniqueId = "";
    }
    if (object.entityId !== undefined && object.entityId !== null) {
      message.entityId = object.entityId;
    } else {
      message.entityId = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = 0;
    }
    if (
      object.isRoleAttachable !== undefined &&
      object.isRoleAttachable !== null
    ) {
      message.isRoleAttachable = object.isRoleAttachable;
    } else {
      message.isRoleAttachable = false;
    }
    if (object.role !== undefined && object.role !== null) {
      message.role = Role.fromPartial(object.role);
    } else {
      message.role = undefined;
    }
    return message;
  },
};

export interface Kartoffel {
  SearchOG(request: SearchOGRequest): Promise<OGArray>;
  CreateOG(request: CreateOGRequest): Promise<OrganizationGroup>;
  CreateDI(request: CreateDIRequest): Promise<DigitalIdentity>;
  CreateRole(request: CreateRoleRequest): Promise<Role>;
  ConnectRoleAndDI(request: ConnectRoleAndDIRequest): Promise<SuccessMessage>;
  SearchEntitiesByFullName(
    request: SearchEntitiesByFullNameRequest
  ): Promise<EntityArray>;
  GetEntityByIdNumber(request: GetEntityByIdNumberRequest): Promise<Entity>;
  SearchRolesByRoleId(request: SearchRolesByRoleIdRequest): Promise<Role>;
  GetRolesUnderOG(request: GetRolesUnderOGRequest): Promise<RoleArray>;
  ConnectEntityAndDI(
    request: ConnectEntityAndDIRequest
  ): Promise<SuccessMessage>;
  CreateEntity(request: CreateEntityRequest): Promise<Entity>;
  GetEntityByRoleId(request: GetEntityByRoleIdRequest): Promise<Entity>;
  DisconnectDIFromEntity(
    request: DisconnectDIFromEntityRequest
  ): Promise<SuccessMessage>;
  GetEntityByMongoId(request: GetEntityByMongoIdRequest): Promise<Entity>;
  DeleteOG(request: DeleteOGRequest): Promise<SuccessMessage>;
  GetChildrenOfOG(request: GetChildrenOfOGRequest): Promise<OGArray>;
  DeleteRole(request: DeleteRoleRequest): Promise<SuccessMessage>;
  DeleteDI(request: DeleteDIRequest): Promise<SuccessMessage>;
  GetEntitiesUnderOG(request: GetEntitiesUnderOGRequest): Promise<EntityArray>;
}

export class KartoffelClientImpl implements Kartoffel {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SearchOG = this.SearchOG.bind(this);
    this.CreateOG = this.CreateOG.bind(this);
    this.CreateDI = this.CreateDI.bind(this);
    this.CreateRole = this.CreateRole.bind(this);
    this.ConnectRoleAndDI = this.ConnectRoleAndDI.bind(this);
    this.SearchEntitiesByFullName = this.SearchEntitiesByFullName.bind(this);
    this.GetEntityByIdNumber = this.GetEntityByIdNumber.bind(this);
    this.SearchRolesByRoleId = this.SearchRolesByRoleId.bind(this);
    this.GetRolesUnderOG = this.GetRolesUnderOG.bind(this);
    this.ConnectEntityAndDI = this.ConnectEntityAndDI.bind(this);
    this.CreateEntity = this.CreateEntity.bind(this);
    this.GetEntityByRoleId = this.GetEntityByRoleId.bind(this);
    this.DisconnectDIFromEntity = this.DisconnectDIFromEntity.bind(this);
    this.GetEntityByMongoId = this.GetEntityByMongoId.bind(this);
    this.DeleteOG = this.DeleteOG.bind(this);
    this.GetChildrenOfOG = this.GetChildrenOfOG.bind(this);
    this.DeleteRole = this.DeleteRole.bind(this);
    this.DeleteDI = this.DeleteDI.bind(this);
    this.GetEntitiesUnderOG = this.GetEntitiesUnderOG.bind(this);
  }
  SearchOG(request: SearchOGRequest): Promise<OGArray> {
    const data = SearchOGRequest.encode(request).finish();
    const promise = this.rpc.request("Kartoffel.Kartoffel", "SearchOG", data);
    return promise.then((data) => OGArray.decode(new _m0.Reader(data)));
  }

  CreateOG(request: CreateOGRequest): Promise<OrganizationGroup> {
    const data = CreateOGRequest.encode(request).finish();
    const promise = this.rpc.request("Kartoffel.Kartoffel", "CreateOG", data);
    return promise.then((data) =>
      OrganizationGroup.decode(new _m0.Reader(data))
    );
  }

  CreateDI(request: CreateDIRequest): Promise<DigitalIdentity> {
    const data = CreateDIRequest.encode(request).finish();
    const promise = this.rpc.request("Kartoffel.Kartoffel", "CreateDI", data);
    return promise.then((data) => DigitalIdentity.decode(new _m0.Reader(data)));
  }

  CreateRole(request: CreateRoleRequest): Promise<Role> {
    const data = CreateRoleRequest.encode(request).finish();
    const promise = this.rpc.request("Kartoffel.Kartoffel", "CreateRole", data);
    return promise.then((data) => Role.decode(new _m0.Reader(data)));
  }

  ConnectRoleAndDI(request: ConnectRoleAndDIRequest): Promise<SuccessMessage> {
    const data = ConnectRoleAndDIRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Kartoffel.Kartoffel",
      "ConnectRoleAndDI",
      data
    );
    return promise.then((data) => SuccessMessage.decode(new _m0.Reader(data)));
  }

  SearchEntitiesByFullName(
    request: SearchEntitiesByFullNameRequest
  ): Promise<EntityArray> {
    const data = SearchEntitiesByFullNameRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Kartoffel.Kartoffel",
      "SearchEntitiesByFullName",
      data
    );
    return promise.then((data) => EntityArray.decode(new _m0.Reader(data)));
  }

  GetEntityByIdNumber(request: GetEntityByIdNumberRequest): Promise<Entity> {
    const data = GetEntityByIdNumberRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Kartoffel.Kartoffel",
      "GetEntityByIdNumber",
      data
    );
    return promise.then((data) => Entity.decode(new _m0.Reader(data)));
  }

  SearchRolesByRoleId(request: SearchRolesByRoleIdRequest): Promise<Role> {
    const data = SearchRolesByRoleIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Kartoffel.Kartoffel",
      "SearchRolesByRoleId",
      data
    );
    return promise.then((data) => Role.decode(new _m0.Reader(data)));
  }

  GetRolesUnderOG(request: GetRolesUnderOGRequest): Promise<RoleArray> {
    const data = GetRolesUnderOGRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Kartoffel.Kartoffel",
      "GetRolesUnderOG",
      data
    );
    return promise.then((data) => RoleArray.decode(new _m0.Reader(data)));
  }

  ConnectEntityAndDI(
    request: ConnectEntityAndDIRequest
  ): Promise<SuccessMessage> {
    const data = ConnectEntityAndDIRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Kartoffel.Kartoffel",
      "ConnectEntityAndDI",
      data
    );
    return promise.then((data) => SuccessMessage.decode(new _m0.Reader(data)));
  }

  CreateEntity(request: CreateEntityRequest): Promise<Entity> {
    const data = CreateEntityRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Kartoffel.Kartoffel",
      "CreateEntity",
      data
    );
    return promise.then((data) => Entity.decode(new _m0.Reader(data)));
  }

  GetEntityByRoleId(request: GetEntityByRoleIdRequest): Promise<Entity> {
    const data = GetEntityByRoleIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Kartoffel.Kartoffel",
      "GetEntityByRoleId",
      data
    );
    return promise.then((data) => Entity.decode(new _m0.Reader(data)));
  }

  DisconnectDIFromEntity(
    request: DisconnectDIFromEntityRequest
  ): Promise<SuccessMessage> {
    const data = DisconnectDIFromEntityRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Kartoffel.Kartoffel",
      "DisconnectDIFromEntity",
      data
    );
    return promise.then((data) => SuccessMessage.decode(new _m0.Reader(data)));
  }

  GetEntityByMongoId(request: GetEntityByMongoIdRequest): Promise<Entity> {
    const data = GetEntityByMongoIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Kartoffel.Kartoffel",
      "GetEntityByMongoId",
      data
    );
    return promise.then((data) => Entity.decode(new _m0.Reader(data)));
  }

  DeleteOG(request: DeleteOGRequest): Promise<SuccessMessage> {
    const data = DeleteOGRequest.encode(request).finish();
    const promise = this.rpc.request("Kartoffel.Kartoffel", "DeleteOG", data);
    return promise.then((data) => SuccessMessage.decode(new _m0.Reader(data)));
  }

  GetChildrenOfOG(request: GetChildrenOfOGRequest): Promise<OGArray> {
    const data = GetChildrenOfOGRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Kartoffel.Kartoffel",
      "GetChildrenOfOG",
      data
    );
    return promise.then((data) => OGArray.decode(new _m0.Reader(data)));
  }

  DeleteRole(request: DeleteRoleRequest): Promise<SuccessMessage> {
    const data = DeleteRoleRequest.encode(request).finish();
    const promise = this.rpc.request("Kartoffel.Kartoffel", "DeleteRole", data);
    return promise.then((data) => SuccessMessage.decode(new _m0.Reader(data)));
  }

  DeleteDI(request: DeleteDIRequest): Promise<SuccessMessage> {
    const data = DeleteDIRequest.encode(request).finish();
    const promise = this.rpc.request("Kartoffel.Kartoffel", "DeleteDI", data);
    return promise.then((data) => SuccessMessage.decode(new _m0.Reader(data)));
  }

  GetEntitiesUnderOG(request: GetEntitiesUnderOGRequest): Promise<EntityArray> {
    const data = GetEntitiesUnderOGRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Kartoffel.Kartoffel",
      "GetEntitiesUnderOG",
      data
    );
    return promise.then((data) => EntityArray.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
