/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Kartoffel";

export interface GetAllOGsRequest {
  source: string;
  akaUnit: string;
  updatedFrom: string;
  page: number;
  pageSize: number;
}

export interface UpdateDIRequest {
  id: string;
  isRoleAttachable: boolean;
  mail: string;
}

export interface GetDIByUniqueIdRequest {
  id: string;
}

export interface SearchDIOrUniqueIdRequest {
  uniqueId: string;
}

export interface GetDIByRoleIdRequest {
  roleId: string;
}

export interface DigitalIdentities {
  digitalIdentities: DigitalIdentity[];
}

export interface GetAllDIsRequest {
  updatedFrom: string;
  page: number;
  pageSize: number;
}

export interface UpdateOGParentRequest {
  id: string;
  parentId: string;
  parent: string;
}

export interface GetOGByIdRequest {
  id: string;
}

export interface GetOGByHierarchyNameRequest {
  hierarchy: string;
}

export interface DeleteEntityRequest {
  id: string;
}

export interface GetEntityByIdentifierRequest {
  identifier: string;
}

export interface GetEntitiesByHierarchyRequest {
  hierarchy: string;
  direct: boolean;
  page: number;
  pageSize: number;
}

export interface GetEntityByDIRequest {
  uniqueId: string;
}

export interface UpdateEntityRequest {
  id: string;
  properties: UpdateEntityProperties | undefined;
}

export interface UpdateEntityProperties {
  firstName?: string | undefined;
  lastName?: string | undefined;
  identityCard?: string | undefined;
  personalNumber?: string | undefined;
  serviceType?: string | undefined;
  phone: string[];
  mobilePhone: string[];
  address?: string | undefined;
  clearance?: string | undefined;
  sex?: string | undefined;
  birthDate?: string | undefined;
  entityType?: string | undefined;
  akaUnit?: string | undefined;
  dischargeDay?: string | undefined;
  rank?: string | undefined;
}

export interface RenameOGRequest {
  id: string;
  name: string;
}

export interface GetPictureByEntityIdRequest {
  id: string;
}

export interface Image {
  image: string;
}

/** SearchEntitiesByFullName */
export interface SearchEntitiesByFullNameRequest {
  fullName: string;
  rank?: string | undefined;
  entityType?: string | undefined;
  underGroupId?: string | undefined;
  status?: string | undefined;
  source?: string | undefined;
}

export interface GetOGTreeRequest {
  rootId: string;
}

export interface OGTree {
  id: string;
  name: string;
  children: OGTree[];
}

/** SearchOG */
export interface SearchOGRequest {
  nameAndHierarchy: string;
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
  entityId: string;
  isRoleAttachable: boolean;
  mail: string;
  source: string;
  type: string;
  uniqueId: string;
}

/** GetAllRoles */
export interface GetAllRolesRequest {
  updatedFrom: string;
  page: number;
  pageSize: number;
}

/** CreateRole */
export interface CreateRoleRequest {
  jobTitle: string;
  directGroup: string;
  source: string;
  roleId: string;
}

/** DeleteRole */
export interface DeleteRoleRequest {
  roleId: string;
}

/** RenameRole */
export interface RenameRoleRequest {
  roleId: string;
  jobTitle: string;
}

/** ConnectRoleAndDI */
export interface ConnectRoleAndDIRequest {
  /** id of role */
  id: string;
  /** uniqueId of DI */
  uniqueId: string;
}

/** DisconnectRoleAndDI */
export interface DisconnectRoleAndDIRequest {
  /** id of role */
  roleId: string;
  /** uniqueId of DI */
  uniqueId: string;
}

/** GetRoleByRoleId */
export interface GetRoleByRoleIdRequest {
  roleId: string;
}

/** GetRolesUnderOG */
export interface GetRolesUnderOGRequest {
  groupId: string;
  direct: boolean;
  page: number;
  pageSize: number;
}

/** GetRolesByDI */
export interface GetRoleByDIRequest {
  uniqueId: string;
}

/** GetRolesByHierarchy */
export interface GetRolesByHierarchyRequest {
  hierarchy: string;
  direct: boolean;
  page: number;
  pageSize: number;
}

/** ChangeRoleOG */
export interface ChangeRoleOGRequest {
  roleId: string;
  groupId: string;
}

export interface EntityArray {
  entities: Entity[];
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
  firstName?: string | undefined;
  lastName?: string | undefined;
  identityCard?: string | undefined;
  personalNumber?: string | undefined;
  serviceType?: string | undefined;
  phone: string[];
  mobilePhone: string[];
  address?: string | undefined;
  clearance?: string | undefined;
  sex?: string | undefined;
  birthDate?: string | undefined;
  entityType?: string | undefined;
  akaUnit?: string | undefined;
  dischargeDay?: string | undefined;
  rank?: string | undefined;
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
export interface GetEntityByIdRequest {
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
  page: number;
  pageSize: number;
  direct: boolean;
}

/** DeleteDI */
export interface DeleteDIRequest {
  /** uniqueId of DI (taken from the role) */
  id: string;
}

/** GetEntitiesUnderOG */
export interface GetEntitiesUnderOGRequest {
  /** mongoIds of OG */
  id: string;
  direct: boolean;
  page: number;
  pageSize: number;
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
  createdAt: string;
  updatedAt: string;
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
  clearance: string;
  source: string;
  createdAt: string;
  updatedAt: string;
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
  fullName: string;
  akaUnit: string;
  dischargeDay: string;
  rank: string;
  mail: string;
  jobTitle: string;
  phone: string[];
  mobilePhone: string[];
  address: string;
  clearance: string;
  sex: string;
  birthDate: string;
  createdAt: string;
  updatedAt: string;
  digitalIdentities: DigitalIdentity[];
  picture: string;
  goalUserID: string;
}

export interface DigitalIdentity {
  type: string;
  source: string;
  mail: string;
  uniqueId: string;
  entityId: string;
  createdAt: string;
  updatedAt: string;
  isRoleAttachable: boolean;
  role: Role | undefined;
}

const baseGetAllOGsRequest: object = {
  source: "",
  akaUnit: "",
  updatedFrom: "",
  page: 0,
  pageSize: 0,
};

export const GetAllOGsRequest = {
  encode(
    message: GetAllOGsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.source !== "") {
      writer.uint32(10).string(message.source);
    }
    if (message.akaUnit !== "") {
      writer.uint32(18).string(message.akaUnit);
    }
    if (message.updatedFrom !== "") {
      writer.uint32(26).string(message.updatedFrom);
    }
    if (message.page !== 0) {
      writer.uint32(32).int32(message.page);
    }
    if (message.pageSize !== 0) {
      writer.uint32(40).int32(message.pageSize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllOGsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetAllOGsRequest } as GetAllOGsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.source = reader.string();
          break;
        case 2:
          message.akaUnit = reader.string();
          break;
        case 3:
          message.updatedFrom = reader.string();
          break;
        case 4:
          message.page = reader.int32();
          break;
        case 5:
          message.pageSize = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetAllOGsRequest {
    const message = { ...baseGetAllOGsRequest } as GetAllOGsRequest;
    if (object.source !== undefined && object.source !== null) {
      message.source = String(object.source);
    } else {
      message.source = "";
    }
    if (object.akaUnit !== undefined && object.akaUnit !== null) {
      message.akaUnit = String(object.akaUnit);
    } else {
      message.akaUnit = "";
    }
    if (object.updatedFrom !== undefined && object.updatedFrom !== null) {
      message.updatedFrom = String(object.updatedFrom);
    } else {
      message.updatedFrom = "";
    }
    if (object.page !== undefined && object.page !== null) {
      message.page = Number(object.page);
    } else {
      message.page = 0;
    }
    if (object.pageSize !== undefined && object.pageSize !== null) {
      message.pageSize = Number(object.pageSize);
    } else {
      message.pageSize = 0;
    }
    return message;
  },

  toJSON(message: GetAllOGsRequest): unknown {
    const obj: any = {};
    message.source !== undefined && (obj.source = message.source);
    message.akaUnit !== undefined && (obj.akaUnit = message.akaUnit);
    message.updatedFrom !== undefined &&
      (obj.updatedFrom = message.updatedFrom);
    message.page !== undefined && (obj.page = message.page);
    message.pageSize !== undefined && (obj.pageSize = message.pageSize);
    return obj;
  },

  fromPartial(object: DeepPartial<GetAllOGsRequest>): GetAllOGsRequest {
    const message = { ...baseGetAllOGsRequest } as GetAllOGsRequest;
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    } else {
      message.source = "";
    }
    if (object.akaUnit !== undefined && object.akaUnit !== null) {
      message.akaUnit = object.akaUnit;
    } else {
      message.akaUnit = "";
    }
    if (object.updatedFrom !== undefined && object.updatedFrom !== null) {
      message.updatedFrom = object.updatedFrom;
    } else {
      message.updatedFrom = "";
    }
    if (object.page !== undefined && object.page !== null) {
      message.page = object.page;
    } else {
      message.page = 0;
    }
    if (object.pageSize !== undefined && object.pageSize !== null) {
      message.pageSize = object.pageSize;
    } else {
      message.pageSize = 0;
    }
    return message;
  },
};

const baseUpdateDIRequest: object = {
  id: "",
  isRoleAttachable: false,
  mail: "",
};

export const UpdateDIRequest = {
  encode(
    message: UpdateDIRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.isRoleAttachable === true) {
      writer.uint32(16).bool(message.isRoleAttachable);
    }
    if (message.mail !== "") {
      writer.uint32(26).string(message.mail);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDIRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateDIRequest } as UpdateDIRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.isRoleAttachable = reader.bool();
          break;
        case 3:
          message.mail = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateDIRequest {
    const message = { ...baseUpdateDIRequest } as UpdateDIRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (
      object.isRoleAttachable !== undefined &&
      object.isRoleAttachable !== null
    ) {
      message.isRoleAttachable = Boolean(object.isRoleAttachable);
    } else {
      message.isRoleAttachable = false;
    }
    if (object.mail !== undefined && object.mail !== null) {
      message.mail = String(object.mail);
    } else {
      message.mail = "";
    }
    return message;
  },

  toJSON(message: UpdateDIRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.isRoleAttachable !== undefined &&
      (obj.isRoleAttachable = message.isRoleAttachable);
    message.mail !== undefined && (obj.mail = message.mail);
    return obj;
  },

  fromPartial(object: DeepPartial<UpdateDIRequest>): UpdateDIRequest {
    const message = { ...baseUpdateDIRequest } as UpdateDIRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (
      object.isRoleAttachable !== undefined &&
      object.isRoleAttachable !== null
    ) {
      message.isRoleAttachable = object.isRoleAttachable;
    } else {
      message.isRoleAttachable = false;
    }
    if (object.mail !== undefined && object.mail !== null) {
      message.mail = object.mail;
    } else {
      message.mail = "";
    }
    return message;
  },
};

const baseGetDIByUniqueIdRequest: object = { id: "" };

export const GetDIByUniqueIdRequest = {
  encode(
    message: GetDIByUniqueIdRequest,
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
  ): GetDIByUniqueIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetDIByUniqueIdRequest } as GetDIByUniqueIdRequest;
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

  fromJSON(object: any): GetDIByUniqueIdRequest {
    const message = { ...baseGetDIByUniqueIdRequest } as GetDIByUniqueIdRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: GetDIByUniqueIdRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetDIByUniqueIdRequest>
  ): GetDIByUniqueIdRequest {
    const message = { ...baseGetDIByUniqueIdRequest } as GetDIByUniqueIdRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
};

const baseSearchDIOrUniqueIdRequest: object = { uniqueId: "" };

export const SearchDIOrUniqueIdRequest = {
  encode(
    message: SearchDIOrUniqueIdRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.uniqueId !== "") {
      writer.uint32(10).string(message.uniqueId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SearchDIOrUniqueIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSearchDIOrUniqueIdRequest,
    } as SearchDIOrUniqueIdRequest;
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

  fromJSON(object: any): SearchDIOrUniqueIdRequest {
    const message = {
      ...baseSearchDIOrUniqueIdRequest,
    } as SearchDIOrUniqueIdRequest;
    if (object.uniqueId !== undefined && object.uniqueId !== null) {
      message.uniqueId = String(object.uniqueId);
    } else {
      message.uniqueId = "";
    }
    return message;
  },

  toJSON(message: SearchDIOrUniqueIdRequest): unknown {
    const obj: any = {};
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SearchDIOrUniqueIdRequest>
  ): SearchDIOrUniqueIdRequest {
    const message = {
      ...baseSearchDIOrUniqueIdRequest,
    } as SearchDIOrUniqueIdRequest;
    if (object.uniqueId !== undefined && object.uniqueId !== null) {
      message.uniqueId = object.uniqueId;
    } else {
      message.uniqueId = "";
    }
    return message;
  },
};

const baseGetDIByRoleIdRequest: object = { roleId: "" };

export const GetDIByRoleIdRequest = {
  encode(
    message: GetDIByRoleIdRequest,
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
  ): GetDIByRoleIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetDIByRoleIdRequest } as GetDIByRoleIdRequest;
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

  fromJSON(object: any): GetDIByRoleIdRequest {
    const message = { ...baseGetDIByRoleIdRequest } as GetDIByRoleIdRequest;
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = String(object.roleId);
    } else {
      message.roleId = "";
    }
    return message;
  },

  toJSON(message: GetDIByRoleIdRequest): unknown {
    const obj: any = {};
    message.roleId !== undefined && (obj.roleId = message.roleId);
    return obj;
  },

  fromPartial(object: DeepPartial<GetDIByRoleIdRequest>): GetDIByRoleIdRequest {
    const message = { ...baseGetDIByRoleIdRequest } as GetDIByRoleIdRequest;
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = object.roleId;
    } else {
      message.roleId = "";
    }
    return message;
  },
};

const baseDigitalIdentities: object = {};

export const DigitalIdentities = {
  encode(
    message: DigitalIdentities,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.digitalIdentities) {
      DigitalIdentity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DigitalIdentities {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDigitalIdentities } as DigitalIdentities;
    message.digitalIdentities = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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

  fromJSON(object: any): DigitalIdentities {
    const message = { ...baseDigitalIdentities } as DigitalIdentities;
    message.digitalIdentities = [];
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

  toJSON(message: DigitalIdentities): unknown {
    const obj: any = {};
    if (message.digitalIdentities) {
      obj.digitalIdentities = message.digitalIdentities.map((e) =>
        e ? DigitalIdentity.toJSON(e) : undefined
      );
    } else {
      obj.digitalIdentities = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<DigitalIdentities>): DigitalIdentities {
    const message = { ...baseDigitalIdentities } as DigitalIdentities;
    message.digitalIdentities = [];
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

const baseGetAllDIsRequest: object = { updatedFrom: "", page: 0, pageSize: 0 };

export const GetAllDIsRequest = {
  encode(
    message: GetAllDIsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.updatedFrom !== "") {
      writer.uint32(10).string(message.updatedFrom);
    }
    if (message.page !== 0) {
      writer.uint32(16).int32(message.page);
    }
    if (message.pageSize !== 0) {
      writer.uint32(24).int32(message.pageSize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllDIsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetAllDIsRequest } as GetAllDIsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.updatedFrom = reader.string();
          break;
        case 2:
          message.page = reader.int32();
          break;
        case 3:
          message.pageSize = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetAllDIsRequest {
    const message = { ...baseGetAllDIsRequest } as GetAllDIsRequest;
    if (object.updatedFrom !== undefined && object.updatedFrom !== null) {
      message.updatedFrom = String(object.updatedFrom);
    } else {
      message.updatedFrom = "";
    }
    if (object.page !== undefined && object.page !== null) {
      message.page = Number(object.page);
    } else {
      message.page = 0;
    }
    if (object.pageSize !== undefined && object.pageSize !== null) {
      message.pageSize = Number(object.pageSize);
    } else {
      message.pageSize = 0;
    }
    return message;
  },

  toJSON(message: GetAllDIsRequest): unknown {
    const obj: any = {};
    message.updatedFrom !== undefined &&
      (obj.updatedFrom = message.updatedFrom);
    message.page !== undefined && (obj.page = message.page);
    message.pageSize !== undefined && (obj.pageSize = message.pageSize);
    return obj;
  },

  fromPartial(object: DeepPartial<GetAllDIsRequest>): GetAllDIsRequest {
    const message = { ...baseGetAllDIsRequest } as GetAllDIsRequest;
    if (object.updatedFrom !== undefined && object.updatedFrom !== null) {
      message.updatedFrom = object.updatedFrom;
    } else {
      message.updatedFrom = "";
    }
    if (object.page !== undefined && object.page !== null) {
      message.page = object.page;
    } else {
      message.page = 0;
    }
    if (object.pageSize !== undefined && object.pageSize !== null) {
      message.pageSize = object.pageSize;
    } else {
      message.pageSize = 0;
    }
    return message;
  },
};

const baseUpdateOGParentRequest: object = { id: "", parentId: "", parent: "" };

export const UpdateOGParentRequest = {
  encode(
    message: UpdateOGParentRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.parentId !== "") {
      writer.uint32(18).string(message.parentId);
    }
    if (message.parent !== "") {
      writer.uint32(26).string(message.parent);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateOGParentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateOGParentRequest } as UpdateOGParentRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.parentId = reader.string();
          break;
        case 3:
          message.parent = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateOGParentRequest {
    const message = { ...baseUpdateOGParentRequest } as UpdateOGParentRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.parentId !== undefined && object.parentId !== null) {
      message.parentId = String(object.parentId);
    } else {
      message.parentId = "";
    }
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = String(object.parent);
    } else {
      message.parent = "";
    }
    return message;
  },

  toJSON(message: UpdateOGParentRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.parent !== undefined && (obj.parent = message.parent);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateOGParentRequest>
  ): UpdateOGParentRequest {
    const message = { ...baseUpdateOGParentRequest } as UpdateOGParentRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.parentId !== undefined && object.parentId !== null) {
      message.parentId = object.parentId;
    } else {
      message.parentId = "";
    }
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = object.parent;
    } else {
      message.parent = "";
    }
    return message;
  },
};

const baseGetOGByIdRequest: object = { id: "" };

export const GetOGByIdRequest = {
  encode(
    message: GetOGByIdRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetOGByIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetOGByIdRequest } as GetOGByIdRequest;
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

  fromJSON(object: any): GetOGByIdRequest {
    const message = { ...baseGetOGByIdRequest } as GetOGByIdRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: GetOGByIdRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<GetOGByIdRequest>): GetOGByIdRequest {
    const message = { ...baseGetOGByIdRequest } as GetOGByIdRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
};

const baseGetOGByHierarchyNameRequest: object = { hierarchy: "" };

export const GetOGByHierarchyNameRequest = {
  encode(
    message: GetOGByHierarchyNameRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.firstName !== undefined) {
      writer.uint32(10).string(message.firstName);
    }
    if (message.lastName !== undefined) {
      writer.uint32(18).string(message.lastName);
    }
    if (message.identityCard !== undefined) {
      writer.uint32(26).string(message.identityCard);
    }
    if (message.personalNumber !== undefined) {
      writer.uint32(34).string(message.personalNumber);
    }
    if (message.serviceType !== undefined) {
      writer.uint32(42).string(message.serviceType);
    }
    for (const v of message.phone) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.mobilePhone) {
      writer.uint32(58).string(v!);
    }
    if (message.address !== undefined) {
      writer.uint32(66).string(message.address);
    }
    if (message.clearance !== undefined) {
      writer.uint32(74).string(message.clearance);
    }
    if (message.sex !== undefined) {
      writer.uint32(82).string(message.sex);
    }
    if (message.birthDate !== undefined) {
      writer.uint32(90).string(message.birthDate);
    }
    if (message.entityType !== undefined) {
      writer.uint32(98).string(message.entityType);
    }
    if (message.akaUnit !== undefined) {
      writer.uint32(106).string(message.akaUnit);
    }
    if (message.dischargeDay !== undefined) {
      writer.uint32(114).string(message.dischargeDay);
    }
    if (message.rank !== undefined) {
      writer.uint32(122).string(message.rank);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetOGByHierarchyNameRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetOGByHierarchyNameRequest,
    } as GetOGByHierarchyNameRequest;
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
          message.birthDate = reader.string();
          break;
        case 12:
          message.entityType = reader.string();
          break;
        case 13:
          message.akaUnit = reader.string();
          break;
        case 14:
          message.dischargeDay = reader.string();
          break;
        case 15:
          message.rank = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateEntityProperties {
    const message = { ...baseUpdateEntityProperties } as UpdateEntityProperties;
    message.phone = [];
    message.mobilePhone = [];
    if (object.firstName !== undefined && object.firstName !== null) {
      message.firstName = String(object.firstName);
    } else {
      message.firstName = undefined;
    }
    if (object.lastName !== undefined && object.lastName !== null) {
      message.lastName = String(object.lastName);
    } else {
      message.lastName = undefined;
    }
    if (object.akaUnit !== undefined && object.akaUnit !== null) {
      message.akaUnit = String(object.akaUnit);
    } else {
      message.akaUnit = undefined;
    }
    if (object.dischargeDay !== undefined && object.dischargeDay !== null) {
      message.dischargeDay = String(object.dischargeDay);
    } else {
      message.dischargeDay = undefined;
    }
    if (object.rank !== undefined && object.rank !== null) {
      message.rank = String(object.rank);
    } else {
      message.rank = undefined;
    }
    return message;
  },

  toJSON(message: UpdateEntityProperties): unknown {
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
    message.birthDate !== undefined && (obj.birthDate = message.birthDate);
    message.entityType !== undefined && (obj.entityType = message.entityType);
    message.akaUnit !== undefined && (obj.akaUnit = message.akaUnit);
    message.dischargeDay !== undefined &&
      (obj.dischargeDay = message.dischargeDay);
    message.rank !== undefined && (obj.rank = message.rank);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateEntityProperties>
  ): UpdateEntityProperties {
    const message = { ...baseUpdateEntityProperties } as UpdateEntityProperties;
    message.phone = [];
    message.mobilePhone = [];
    if (object.firstName !== undefined && object.firstName !== null) {
      message.firstName = object.firstName;
    } else {
      message.firstName = undefined;
    }
    if (object.lastName !== undefined && object.lastName !== null) {
      message.lastName = object.lastName;
    } else {
      message.lastName = undefined;
    }
    if (object.identityCard !== undefined && object.identityCard !== null) {
      message.identityCard = object.identityCard;
    } else {
      message.identityCard = undefined;
    }
    if (object.personalNumber !== undefined && object.personalNumber !== null) {
      message.personalNumber = object.personalNumber;
    } else {
      message.personalNumber = undefined;
    }
    if (object.serviceType !== undefined && object.serviceType !== null) {
      message.serviceType = object.serviceType;
    } else {
      message.serviceType = undefined;
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
      message.address = undefined;
    }
    if (object.clearance !== undefined && object.clearance !== null) {
      message.clearance = object.clearance;
    } else {
      message.clearance = undefined;
    }
    if (object.sex !== undefined && object.sex !== null) {
      message.sex = object.sex;
    } else {
      message.sex = undefined;
    }
    if (object.birthDate !== undefined && object.birthDate !== null) {
      message.birthDate = object.birthDate;
    } else {
      message.birthDate = undefined;
    }
    if (object.entityType !== undefined && object.entityType !== null) {
      message.entityType = object.entityType;
    } else {
      message.entityType = undefined;
    }
    if (object.akaUnit !== undefined && object.akaUnit !== null) {
      message.akaUnit = object.akaUnit;
    } else {
      message.akaUnit = undefined;
    }
    if (object.dischargeDay !== undefined && object.dischargeDay !== null) {
      message.dischargeDay = object.dischargeDay;
    } else {
      message.dischargeDay = undefined;
    }
    if (object.rank !== undefined && object.rank !== null) {
      message.rank = object.rank;
    } else {
      message.rank = undefined;
    }
    return message;
  },
};

const baseRenameOGRequest: object = { id: "", name: "" };

export const RenameOGRequest = {
  encode(
    message: RenameOGRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RenameOGRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRenameOGRequest } as RenameOGRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RenameOGRequest {
    const message = { ...baseRenameOGRequest } as RenameOGRequest;
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
    return message;
  },

  toJSON(message: RenameOGRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<RenameOGRequest>): RenameOGRequest {
    const message = { ...baseRenameOGRequest } as RenameOGRequest;
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
    return message;
  },
};

const baseGetPictureByEntityIdRequest: object = { id: "" };

export const GetPictureByEntityIdRequest = {
  encode(
    message: GetPictureByEntityIdRequest,
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
  ): GetPictureByEntityIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetPictureByEntityIdRequest,
    } as GetPictureByEntityIdRequest;
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

  fromJSON(object: any): GetPictureByEntityIdRequest {
    const message = {
      ...baseGetPictureByEntityIdRequest,
    } as GetPictureByEntityIdRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: GetPictureByEntityIdRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetPictureByEntityIdRequest>
  ): GetPictureByEntityIdRequest {
    const message = {
      ...baseGetPictureByEntityIdRequest,
    } as GetPictureByEntityIdRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
};

const baseImage: object = { image: "" };

export const Image = {
  encode(message: Image, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.image !== "") {
      writer.uint32(10).string(message.image);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Image {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseImage } as Image;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.image = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Image {
    const message = { ...baseImage } as Image;
    if (object.image !== undefined && object.image !== null) {
      message.image = String(object.image);
    } else {
      message.image = "";
    }
    return message;
  },

  toJSON(message: Image): unknown {
    const obj: any = {};
    message.image !== undefined && (obj.image = message.image);
    return obj;
  },

  fromPartial(object: DeepPartial<Image>): Image {
    const message = { ...baseImage } as Image;
    if (object.image !== undefined && object.image !== null) {
      message.image = object.image;
    } else {
      message.image = "";
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
    if (message.rank !== undefined) {
      writer.uint32(18).string(message.rank);
    }
    if (message.entityType !== undefined) {
      writer.uint32(26).string(message.entityType);
    }
    if (message.underGroupId !== undefined) {
      writer.uint32(34).string(message.underGroupId);
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
      message.entityType = undefined;
    }
    if (object.underGroupId !== undefined && object.underGroupId !== null) {
      message.underGroupId = String(object.underGroupId);
    } else {
      message.underGroupId = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = undefined;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = String(object.source);
    } else {
      message.source = undefined;
    }
    if (object.entityType !== undefined && object.entityType !== null) {
      message.entityType = String(object.entityType);
    } else {
      message.entityType = undefined;
    }
    if (object.akaUnit !== undefined && object.akaUnit !== null) {
      message.akaUnit = String(object.akaUnit);
    } else {
      message.akaUnit = undefined;
    }
    if (object.dischargeDay !== undefined && object.dischargeDay !== null) {
      message.dischargeDay = String(object.dischargeDay);
    } else {
      message.dischargeDay = undefined;
    }
    if (object.rank !== undefined && object.rank !== null) {
      message.rank = String(object.rank);
    } else {
      message.rank = undefined;
    }
    return message;
  },

  toJSON(message: SearchEntitiesByFullNameRequest): unknown {
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
    message.birthDate !== undefined && (obj.birthDate = message.birthDate);
    message.entityType !== undefined && (obj.entityType = message.entityType);
    message.akaUnit !== undefined && (obj.akaUnit = message.akaUnit);
    message.dischargeDay !== undefined &&
      (obj.dischargeDay = message.dischargeDay);
    message.rank !== undefined && (obj.rank = message.rank);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateEntityProperties>
  ): UpdateEntityProperties {
    const message = { ...baseUpdateEntityProperties } as UpdateEntityProperties;
    message.phone = [];
    message.mobilePhone = [];
    if (object.firstName !== undefined && object.firstName !== null) {
      message.firstName = object.firstName;
    } else {
      message.firstName = undefined;
    }
    if (object.lastName !== undefined && object.lastName !== null) {
      message.lastName = object.lastName;
    } else {
      message.lastName = undefined;
    }
    if (object.identityCard !== undefined && object.identityCard !== null) {
      message.identityCard = object.identityCard;
    } else {
      message.identityCard = undefined;
    }
    if (object.personalNumber !== undefined && object.personalNumber !== null) {
      message.personalNumber = object.personalNumber;
    } else {
      message.personalNumber = undefined;
    }
    if (object.serviceType !== undefined && object.serviceType !== null) {
      message.serviceType = object.serviceType;
    } else {
      message.serviceType = undefined;
    }
    if (object.phone !== undefined && object.phone !== null) {
      for (const e of object.phone) {
        message.phone.push(e);
      }
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetOGTreeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetOGTreeRequest } as GetOGTreeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rootId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetOGTreeRequest {
    const message = { ...baseGetOGTreeRequest } as GetOGTreeRequest;
    if (object.rootId !== undefined && object.rootId !== null) {
      message.rootId = String(object.rootId);
    } else {
      message.rootId = "";
    }
    return message;
  },

  toJSON(message: GetOGTreeRequest): unknown {
    const obj: any = {};
    message.rootId !== undefined && (obj.rootId = message.rootId);
    return obj;
  },

  fromPartial(object: DeepPartial<GetOGTreeRequest>): GetOGTreeRequest {
    const message = { ...baseGetOGTreeRequest } as GetOGTreeRequest;
    if (object.rootId !== undefined && object.rootId !== null) {
      message.rootId = object.rootId;
    } else {
      message.rootId = "";
    }
    if (object.entityType !== undefined && object.entityType !== null) {
      message.entityType = object.entityType;
    } else {
      message.entityType = undefined;
    }
    if (object.akaUnit !== undefined && object.akaUnit !== null) {
      message.akaUnit = object.akaUnit;
    } else {
      message.akaUnit = undefined;
    }
    if (object.dischargeDay !== undefined && object.dischargeDay !== null) {
      message.dischargeDay = object.dischargeDay;
    } else {
      message.dischargeDay = undefined;
    }
    if (object.rank !== undefined && object.rank !== null) {
      message.rank = object.rank;
    } else {
      message.rank = undefined;
    }
    return message;
  },
};

const baseOGTree: object = { id: "", name: "" };

export const OGTree = {
  encode(
    message: OGTree,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.children) {
      OGTree.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OGTree {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOGTree } as OGTree;
    message.children = [];
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
          message.children.push(OGTree.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OGTree {
    const message = { ...baseOGTree } as OGTree;
    message.children = [];
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
    if (object.children !== undefined && object.children !== null) {
      for (const e of object.children) {
        message.children.push(OGTree.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: OGTree): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    if (message.children) {
      obj.children = message.children.map((e) =>
        e ? OGTree.toJSON(e) : undefined
      );
    } else {
      obj.children = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<OGTree>): OGTree {
    const message = { ...baseOGTree } as OGTree;
    message.children = [];
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
    if (object.children !== undefined && object.children !== null) {
      for (const e of object.children) {
        message.children.push(OGTree.fromPartial(e));
      }
    }
    return message;
  },
};

const baseSearchOGRequest: object = { nameAndHierarchy: "" };

export const SearchOGRequest = {
  encode(
    message: SearchOGRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.nameAndHierarchy !== "") {
      writer.uint32(10).string(message.nameAndHierarchy);
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
          message.nameAndHierarchy = reader.string();
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
      object.nameAndHierarchy !== undefined &&
      object.nameAndHierarchy !== null
    ) {
      message.nameAndHierarchy = String(object.nameAndHierarchy);
    } else {
      message.nameAndHierarchy = "";
    }
    return message;
  },

  toJSON(message: SearchOGRequest): unknown {
    const obj: any = {};
    message.nameAndHierarchy !== undefined &&
      (obj.nameAndHierarchy = message.nameAndHierarchy);
    return obj;
  },

  fromPartial(object: DeepPartial<SearchOGRequest>): SearchOGRequest {
    const message = { ...baseSearchOGRequest } as SearchOGRequest;
    if (
      object.nameAndHierarchy !== undefined &&
      object.nameAndHierarchy !== null
    ) {
      message.nameAndHierarchy = object.nameAndHierarchy;
    } else {
      message.nameAndHierarchy = "";
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
  entityId: "",
  isRoleAttachable: false,
  mail: "",
  source: "",
  type: "",
  uniqueId: "",
};

export const CreateDIRequest = {
  encode(
    message: CreateDIRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.entityId !== "") {
      writer.uint32(10).string(message.entityId);
    }
    if (message.isRoleAttachable === true) {
      writer.uint32(16).bool(message.isRoleAttachable);
    }
    if (message.mail !== "") {
      writer.uint32(26).string(message.mail);
    }
    if (message.source !== "") {
      writer.uint32(34).string(message.source);
    }
    if (message.type !== "") {
      writer.uint32(42).string(message.type);
    }
    if (message.uniqueId !== "") {
      writer.uint32(50).string(message.uniqueId);
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
          message.entityId = reader.string();
          break;
        case 2:
          message.isRoleAttachable = reader.bool();
          break;
        case 3:
          message.mail = reader.string();
          break;
        case 4:
          message.source = reader.string();
          break;
        case 5:
          message.type = reader.string();
          break;
        case 6:
          message.uniqueId = reader.string();
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
    if (object.entityId !== undefined && object.entityId !== null) {
      message.entityId = String(object.entityId);
    } else {
      message.entityId = "";
    }
    if (
      object.isRoleAttachable !== undefined &&
      object.isRoleAttachable !== null
    ) {
      message.isRoleAttachable = Boolean(object.isRoleAttachable);
    } else {
      message.isRoleAttachable = false;
    }
    if (object.mail !== undefined && object.mail !== null) {
      message.mail = String(object.mail);
    } else {
      message.mail = "";
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = String(object.source);
    } else {
      message.source = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    if (object.uniqueId !== undefined && object.uniqueId !== null) {
      message.uniqueId = String(object.uniqueId);
    } else {
      message.uniqueId = "";
    }
    return message;
  },

  toJSON(message: CreateDIRequest): unknown {
    const obj: any = {};
    message.entityId !== undefined && (obj.entityId = message.entityId);
    message.isRoleAttachable !== undefined &&
      (obj.isRoleAttachable = message.isRoleAttachable);
    message.mail !== undefined && (obj.mail = message.mail);
    message.source !== undefined && (obj.source = message.source);
    message.type !== undefined && (obj.type = message.type);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateDIRequest>): CreateDIRequest {
    const message = { ...baseCreateDIRequest } as CreateDIRequest;
    if (object.entityId !== undefined && object.entityId !== null) {
      message.entityId = object.entityId;
    } else {
      message.entityId = "";
    }
    if (
      object.isRoleAttachable !== undefined &&
      object.isRoleAttachable !== null
    ) {
      message.isRoleAttachable = object.isRoleAttachable;
    } else {
      message.isRoleAttachable = false;
    }
    if (object.mail !== undefined && object.mail !== null) {
      message.mail = object.mail;
    } else {
      message.mail = "";
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    } else {
      message.source = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    if (object.uniqueId !== undefined && object.uniqueId !== null) {
      message.uniqueId = object.uniqueId;
    } else {
      message.uniqueId = "";
    }
    return message;
  },
};

const baseGetAllRolesRequest: object = {
  updatedFrom: "",
  page: 0,
  pageSize: 0,
};

export const GetAllRolesRequest = {
  encode(
    message: GetAllRolesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.updatedFrom !== "") {
      writer.uint32(10).string(message.updatedFrom);
    }
    if (message.page !== 0) {
      writer.uint32(16).int32(message.page);
    }
    if (message.pageSize !== 0) {
      writer.uint32(24).int32(message.pageSize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllRolesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetAllRolesRequest } as GetAllRolesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.updatedFrom = reader.string();
          break;
        case 2:
          message.page = reader.int32();
          break;
        case 3:
          message.pageSize = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetAllRolesRequest {
    const message = { ...baseGetAllRolesRequest } as GetAllRolesRequest;
    if (object.updatedFrom !== undefined && object.updatedFrom !== null) {
      message.updatedFrom = String(object.updatedFrom);
    } else {
      message.updatedFrom = "";
    }
    if (object.page !== undefined && object.page !== null) {
      message.page = Number(object.page);
    } else {
      message.page = 0;
    }
    if (object.pageSize !== undefined && object.pageSize !== null) {
      message.pageSize = Number(object.pageSize);
    } else {
      message.pageSize = 0;
    }
    return message;
  },

  toJSON(message: GetAllRolesRequest): unknown {
    const obj: any = {};
    message.updatedFrom !== undefined &&
      (obj.updatedFrom = message.updatedFrom);
    message.page !== undefined && (obj.page = message.page);
    message.pageSize !== undefined && (obj.pageSize = message.pageSize);
    return obj;
  },

  fromPartial(object: DeepPartial<GetAllRolesRequest>): GetAllRolesRequest {
    const message = { ...baseGetAllRolesRequest } as GetAllRolesRequest;
    if (object.updatedFrom !== undefined && object.updatedFrom !== null) {
      message.updatedFrom = object.updatedFrom;
    } else {
      message.updatedFrom = "";
    }
    if (object.page !== undefined && object.page !== null) {
      message.page = object.page;
    } else {
      message.page = 0;
    }
    if (object.pageSize !== undefined && object.pageSize !== null) {
      message.pageSize = object.pageSize;
    } else {
      message.pageSize = 0;
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

const baseRenameRoleRequest: object = { roleId: "", jobTitle: "" };

export const RenameRoleRequest = {
  encode(
    message: RenameRoleRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.roleId !== "") {
      writer.uint32(10).string(message.roleId);
    }
    if (message.jobTitle !== "") {
      writer.uint32(18).string(message.jobTitle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RenameRoleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRenameRoleRequest } as RenameRoleRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.roleId = reader.string();
          break;
        case 2:
          message.jobTitle = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RenameRoleRequest {
    const message = { ...baseRenameRoleRequest } as RenameRoleRequest;
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
    return message;
  },

  toJSON(message: RenameRoleRequest): unknown {
    const obj: any = {};
    message.roleId !== undefined && (obj.roleId = message.roleId);
    message.jobTitle !== undefined && (obj.jobTitle = message.jobTitle);
    return obj;
  },

  fromPartial(object: DeepPartial<RenameRoleRequest>): RenameRoleRequest {
    const message = { ...baseRenameRoleRequest } as RenameRoleRequest;
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

const baseDisconnectRoleAndDIRequest: object = { roleId: "", uniqueId: "" };

export const DisconnectRoleAndDIRequest = {
  encode(
    message: DisconnectRoleAndDIRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.roleId !== "") {
      writer.uint32(10).string(message.roleId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(18).string(message.uniqueId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DisconnectRoleAndDIRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDisconnectRoleAndDIRequest,
    } as DisconnectRoleAndDIRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.roleId = reader.string();
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

  fromJSON(object: any): DisconnectRoleAndDIRequest {
    const message = {
      ...baseDisconnectRoleAndDIRequest,
    } as DisconnectRoleAndDIRequest;
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = String(object.roleId);
    } else {
      message.roleId = "";
    }
    if (object.uniqueId !== undefined && object.uniqueId !== null) {
      message.uniqueId = String(object.uniqueId);
    } else {
      message.uniqueId = "";
    }
    return message;
  },

  toJSON(message: DisconnectRoleAndDIRequest): unknown {
    const obj: any = {};
    message.roleId !== undefined && (obj.roleId = message.roleId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DisconnectRoleAndDIRequest>
  ): DisconnectRoleAndDIRequest {
    const message = {
      ...baseDisconnectRoleAndDIRequest,
    } as DisconnectRoleAndDIRequest;
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = object.roleId;
    } else {
      message.roleId = "";
    }
    if (object.uniqueId !== undefined && object.uniqueId !== null) {
      message.uniqueId = object.uniqueId;
    } else {
      message.uniqueId = "";
    }
    return message;
  },
};

const baseGetRoleByRoleIdRequest: object = { roleId: "" };

export const GetRoleByRoleIdRequest = {
  encode(
    message: GetRoleByRoleIdRequest,
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
  ): GetRoleByRoleIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetRoleByRoleIdRequest } as GetRoleByRoleIdRequest;
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

  fromJSON(object: any): GetRoleByRoleIdRequest {
    const message = { ...baseGetRoleByRoleIdRequest } as GetRoleByRoleIdRequest;
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = String(object.roleId);
    } else {
      message.roleId = "";
    }
    return message;
  },

  toJSON(message: GetRoleByRoleIdRequest): unknown {
    const obj: any = {};
    message.roleId !== undefined && (obj.roleId = message.roleId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetRoleByRoleIdRequest>
  ): GetRoleByRoleIdRequest {
    const message = { ...baseGetRoleByRoleIdRequest } as GetRoleByRoleIdRequest;
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = object.roleId;
    } else {
      message.roleId = "";
    }
    return message;
  },
};

const baseGetRolesUnderOGRequest: object = {
  groupId: "",
  direct: false,
  page: 0,
  pageSize: 0,
};

export const GetRolesUnderOGRequest = {
  encode(
    message: GetRolesUnderOGRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.groupId !== "") {
      writer.uint32(10).string(message.groupId);
    }
    if (message.direct === true) {
      writer.uint32(16).bool(message.direct);
    }
    if (message.page !== 0) {
      writer.uint32(24).int32(message.page);
    }
    if (message.pageSize !== 0) {
      writer.uint32(32).int32(message.pageSize);
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
          message.groupId = reader.string();
          break;
        case 2:
          message.direct = reader.bool();
          break;
        case 3:
          message.page = reader.int32();
          break;
        case 4:
          message.pageSize = reader.int32();
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
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = String(object.groupId);
    } else {
      message.groupId = "";
    }
    if (object.direct !== undefined && object.direct !== null) {
      message.direct = Boolean(object.direct);
    } else {
      message.direct = false;
    }
    if (object.page !== undefined && object.page !== null) {
      message.page = Number(object.page);
    } else {
      message.page = 0;
    }
    if (object.pageSize !== undefined && object.pageSize !== null) {
      message.pageSize = Number(object.pageSize);
    } else {
      message.pageSize = 0;
    }
    return message;
  },

  toJSON(message: GetRolesUnderOGRequest): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = message.groupId);
    message.direct !== undefined && (obj.direct = message.direct);
    message.page !== undefined && (obj.page = message.page);
    message.pageSize !== undefined && (obj.pageSize = message.pageSize);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetRolesUnderOGRequest>
  ): GetRolesUnderOGRequest {
    const message = { ...baseGetRolesUnderOGRequest } as GetRolesUnderOGRequest;
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = object.groupId;
    } else {
      message.groupId = "";
    }
    if (object.direct !== undefined && object.direct !== null) {
      message.direct = object.direct;
    } else {
      message.direct = false;
    }
    if (object.page !== undefined && object.page !== null) {
      message.page = object.page;
    } else {
      message.page = 0;
    }
    if (object.pageSize !== undefined && object.pageSize !== null) {
      message.pageSize = object.pageSize;
    } else {
      message.pageSize = 0;
    }
    return message;
  },
};

const baseGetRoleByDIRequest: object = { uniqueId: "" };

export const GetRoleByDIRequest = {
  encode(
    message: GetRoleByDIRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.uniqueId !== "") {
      writer.uint32(10).string(message.uniqueId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRoleByDIRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetRoleByDIRequest } as GetRoleByDIRequest;
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

  fromJSON(object: any): GetRoleByDIRequest {
    const message = { ...baseGetRoleByDIRequest } as GetRoleByDIRequest;
    if (object.uniqueId !== undefined && object.uniqueId !== null) {
      message.uniqueId = String(object.uniqueId);
    } else {
      message.uniqueId = "";
    }
    return message;
  },

  toJSON(message: GetRoleByDIRequest): unknown {
    const obj: any = {};
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    return obj;
  },

  fromPartial(object: DeepPartial<GetRoleByDIRequest>): GetRoleByDIRequest {
    const message = { ...baseGetRoleByDIRequest } as GetRoleByDIRequest;
    if (object.uniqueId !== undefined && object.uniqueId !== null) {
      message.uniqueId = object.uniqueId;
    } else {
      message.uniqueId = "";
    }
    return message;
  },
};

const baseGetRolesByHierarchyRequest: object = {
  hierarchy: "",
  direct: false,
  page: 0,
  pageSize: 0,
};

export const GetRolesByHierarchyRequest = {
  encode(
    message: GetRolesByHierarchyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.hierarchy !== "") {
      writer.uint32(10).string(message.hierarchy);
    }
    if (message.direct === true) {
      writer.uint32(16).bool(message.direct);
    }
    if (message.page !== 0) {
      writer.uint32(24).int32(message.page);
    }
    if (message.pageSize !== 0) {
      writer.uint32(32).int32(message.pageSize);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetRolesByHierarchyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetRolesByHierarchyRequest,
    } as GetRolesByHierarchyRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hierarchy = reader.string();
          break;
        case 2:
          message.direct = reader.bool();
          break;
        case 3:
          message.page = reader.int32();
          break;
        case 4:
          message.pageSize = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetRolesByHierarchyRequest {
    const message = {
      ...baseGetRolesByHierarchyRequest,
    } as GetRolesByHierarchyRequest;
    if (object.hierarchy !== undefined && object.hierarchy !== null) {
      message.hierarchy = String(object.hierarchy);
    } else {
      message.hierarchy = "";
    }
    if (object.direct !== undefined && object.direct !== null) {
      message.direct = Boolean(object.direct);
    } else {
      message.direct = false;
    }
    if (object.page !== undefined && object.page !== null) {
      message.page = Number(object.page);
    } else {
      message.page = 0;
    }
    if (object.pageSize !== undefined && object.pageSize !== null) {
      message.pageSize = Number(object.pageSize);
    } else {
      message.pageSize = 0;
    }
    return message;
  },

  toJSON(message: GetRolesByHierarchyRequest): unknown {
    const obj: any = {};
    message.hierarchy !== undefined && (obj.hierarchy = message.hierarchy);
    message.direct !== undefined && (obj.direct = message.direct);
    message.page !== undefined && (obj.page = message.page);
    message.pageSize !== undefined && (obj.pageSize = message.pageSize);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetRolesByHierarchyRequest>
  ): GetRolesByHierarchyRequest {
    const message = {
      ...baseGetRolesByHierarchyRequest,
    } as GetRolesByHierarchyRequest;
    if (object.hierarchy !== undefined && object.hierarchy !== null) {
      message.hierarchy = object.hierarchy;
    } else {
      message.hierarchy = "";
    }
    if (object.direct !== undefined && object.direct !== null) {
      message.direct = object.direct;
    } else {
      message.direct = false;
    }
    if (object.page !== undefined && object.page !== null) {
      message.page = object.page;
    } else {
      message.page = 0;
    }
    if (object.pageSize !== undefined && object.pageSize !== null) {
      message.pageSize = object.pageSize;
    } else {
      message.pageSize = 0;
    }
    return message;
  },
};

const baseChangeRoleOGRequest: object = { roleId: "", groupId: "" };

export const ChangeRoleOGRequest = {
  encode(
    message: ChangeRoleOGRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.roleId !== "") {
      writer.uint32(10).string(message.roleId);
    }
    if (message.groupId !== "") {
      writer.uint32(18).string(message.groupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChangeRoleOGRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseChangeRoleOGRequest } as ChangeRoleOGRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.roleId = reader.string();
          break;
        case 2:
          message.groupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChangeRoleOGRequest {
    const message = { ...baseChangeRoleOGRequest } as ChangeRoleOGRequest;
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = String(object.roleId);
    } else {
      message.roleId = "";
    }
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = String(object.groupId);
    } else {
      message.groupId = "";
    }
    return message;
  },

  toJSON(message: ChangeRoleOGRequest): unknown {
    const obj: any = {};
    message.roleId !== undefined && (obj.roleId = message.roleId);
    message.groupId !== undefined && (obj.groupId = message.groupId);
    return obj;
  },

  fromPartial(object: DeepPartial<ChangeRoleOGRequest>): ChangeRoleOGRequest {
    const message = { ...baseChangeRoleOGRequest } as ChangeRoleOGRequest;
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = object.roleId;
    } else {
      message.roleId = "";
    }
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = object.groupId;
    } else {
      message.groupId = "";
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

const baseCreateEntityRequest: object = { phone: "", mobilePhone: "" };

export const CreateEntityRequest = {
  encode(
    message: CreateEntityRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.firstName !== undefined) {
      writer.uint32(10).string(message.firstName);
    }
    if (message.lastName !== undefined) {
      writer.uint32(18).string(message.lastName);
    }
    if (message.identityCard !== undefined) {
      writer.uint32(26).string(message.identityCard);
    }
    if (message.personalNumber !== undefined) {
      writer.uint32(34).string(message.personalNumber);
    }
    if (message.serviceType !== undefined) {
      writer.uint32(42).string(message.serviceType);
    }
    for (const v of message.phone) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.mobilePhone) {
      writer.uint32(58).string(v!);
    }
    if (message.address !== undefined) {
      writer.uint32(66).string(message.address);
    }
    if (message.clearance !== undefined) {
      writer.uint32(74).string(message.clearance);
    }
    if (message.sex !== undefined) {
      writer.uint32(82).string(message.sex);
    }
    if (message.birthDate !== undefined) {
      writer.uint32(90).string(message.birthDate);
    }
    if (message.entityType !== undefined) {
      writer.uint32(98).string(message.entityType);
    }
    if (message.akaUnit !== undefined) {
      writer.uint32(106).string(message.akaUnit);
    }
    if (message.dischargeDay !== undefined) {
      writer.uint32(114).string(message.dischargeDay);
    }
    if (message.rank !== undefined) {
      writer.uint32(122).string(message.rank);
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
          message.birthDate = reader.string();
          break;
        case 12:
          message.entityType = reader.string();
          break;
        case 13:
          message.akaUnit = reader.string();
          break;
        case 14:
          message.dischargeDay = reader.string();
          break;
        case 15:
          message.rank = reader.string();
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
      message.firstName = undefined;
    }
    if (object.lastName !== undefined && object.lastName !== null) {
      message.lastName = String(object.lastName);
    } else {
      message.lastName = undefined;
    }
    if (object.identityCard !== undefined && object.identityCard !== null) {
      message.identityCard = String(object.identityCard);
    } else {
      message.identityCard = undefined;
    }
    if (object.personalNumber !== undefined && object.personalNumber !== null) {
      message.personalNumber = String(object.personalNumber);
    } else {
      message.personalNumber = undefined;
    }
    if (object.serviceType !== undefined && object.serviceType !== null) {
      message.serviceType = String(object.serviceType);
    } else {
      message.serviceType = undefined;
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
      message.address = undefined;
    }
    if (object.clearance !== undefined && object.clearance !== null) {
      message.clearance = String(object.clearance);
    } else {
      message.clearance = undefined;
    }
    if (object.sex !== undefined && object.sex !== null) {
      message.sex = String(object.sex);
    } else {
      message.sex = undefined;
    }
    if (object.birthDate !== undefined && object.birthDate !== null) {
      message.birthDate = String(object.birthDate);
    } else {
      message.birthDate = undefined;
    }
    if (object.entityType !== undefined && object.entityType !== null) {
      message.entityType = String(object.entityType);
    } else {
      message.entityType = undefined;
    }
    if (object.akaUnit !== undefined && object.akaUnit !== null) {
      message.akaUnit = String(object.akaUnit);
    } else {
      message.akaUnit = undefined;
    }
    if (object.dischargeDay !== undefined && object.dischargeDay !== null) {
      message.dischargeDay = String(object.dischargeDay);
    } else {
      message.dischargeDay = undefined;
    }
    if (object.rank !== undefined && object.rank !== null) {
      message.rank = String(object.rank);
    } else {
      message.rank = undefined;
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
    message.birthDate !== undefined && (obj.birthDate = message.birthDate);
    message.entityType !== undefined && (obj.entityType = message.entityType);
    message.akaUnit !== undefined && (obj.akaUnit = message.akaUnit);
    message.dischargeDay !== undefined &&
      (obj.dischargeDay = message.dischargeDay);
    message.rank !== undefined && (obj.rank = message.rank);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateEntityRequest>): CreateEntityRequest {
    const message = { ...baseCreateEntityRequest } as CreateEntityRequest;
    message.phone = [];
    message.mobilePhone = [];
    if (object.firstName !== undefined && object.firstName !== null) {
      message.firstName = object.firstName;
    } else {
      message.firstName = undefined;
    }
    if (object.lastName !== undefined && object.lastName !== null) {
      message.lastName = object.lastName;
    } else {
      message.lastName = undefined;
    }
    if (object.identityCard !== undefined && object.identityCard !== null) {
      message.identityCard = object.identityCard;
    } else {
      message.identityCard = undefined;
    }
    if (object.personalNumber !== undefined && object.personalNumber !== null) {
      message.personalNumber = object.personalNumber;
    } else {
      message.personalNumber = undefined;
    }
    if (object.serviceType !== undefined && object.serviceType !== null) {
      message.serviceType = object.serviceType;
    } else {
      message.serviceType = undefined;
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
      message.address = undefined;
    }
    if (object.clearance !== undefined && object.clearance !== null) {
      message.clearance = object.clearance;
    } else {
      message.clearance = undefined;
    }
    if (object.sex !== undefined && object.sex !== null) {
      message.sex = object.sex;
    } else {
      message.sex = undefined;
    }
    if (object.dischargeDay !== undefined && object.dischargeDay !== null) {
      message.dischargeDay = object.dischargeDay;
    } else {
      message.birthDate = undefined;
    }
    if (object.rank !== undefined && object.rank !== null) {
      message.rank = object.rank;
    } else {
      message.entityType = undefined;
    }
    if (object.akaUnit !== undefined && object.akaUnit !== null) {
      message.akaUnit = object.akaUnit;
    } else {
      message.akaUnit = undefined;
    }
    if (object.dischargeDay !== undefined && object.dischargeDay !== null) {
      message.dischargeDay = object.dischargeDay;
    } else {
      message.dischargeDay = undefined;
    }
    if (object.rank !== undefined && object.rank !== null) {
      message.rank = object.rank;
    } else {
      message.rank = undefined;
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

const baseGetEntityByIdRequest: object = { id: "" };

export const GetEntityByIdRequest = {
  encode(
    message: GetEntityByIdRequest,
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
  ): GetEntityByIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetEntityByIdRequest } as GetEntityByIdRequest;
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

  fromJSON(object: any): GetEntityByIdRequest {
    const message = { ...baseGetEntityByIdRequest } as GetEntityByIdRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: GetEntityByIdRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<GetEntityByIdRequest>): GetEntityByIdRequest {
    const message = { ...baseGetEntityByIdRequest } as GetEntityByIdRequest;
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

const baseGetChildrenOfOGRequest: object = {
  id: "",
  page: 0,
  pageSize: 0,
  direct: false,
};

export const GetChildrenOfOGRequest = {
  encode(
    message: GetChildrenOfOGRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.page !== 0) {
      writer.uint32(16).int32(message.page);
    }
    if (message.pageSize !== 0) {
      writer.uint32(24).int32(message.pageSize);
    }
    if (message.direct === true) {
      writer.uint32(32).bool(message.direct);
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
        case 2:
          message.page = reader.int32();
          break;
        case 3:
          message.pageSize = reader.int32();
          break;
        case 4:
          message.direct = reader.bool();
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
    if (object.page !== undefined && object.page !== null) {
      message.page = Number(object.page);
    } else {
      message.page = 0;
    }
    if (object.pageSize !== undefined && object.pageSize !== null) {
      message.pageSize = Number(object.pageSize);
    } else {
      message.pageSize = 0;
    }
    if (object.direct !== undefined && object.direct !== null) {
      message.direct = Boolean(object.direct);
    } else {
      message.direct = false;
    }
    return message;
  },

  toJSON(message: GetChildrenOfOGRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.page !== undefined && (obj.page = message.page);
    message.pageSize !== undefined && (obj.pageSize = message.pageSize);
    message.direct !== undefined && (obj.direct = message.direct);
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
    if (object.page !== undefined && object.page !== null) {
      message.page = object.page;
    } else {
      message.page = 0;
    }
    if (object.pageSize !== undefined && object.pageSize !== null) {
      message.pageSize = object.pageSize;
    } else {
      message.pageSize = 0;
    }
    if (object.direct !== undefined && object.direct !== null) {
      message.direct = object.direct;
    } else {
      message.direct = false;
    }
    return message;
  },
};

const baseDeleteDIRequest: object = { id: "" };

export const DeleteDIRequest = {
  encode(
    message: DeleteDIRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
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
          message.id = reader.string();
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
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: DeleteDIRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<DeleteDIRequest>): DeleteDIRequest {
    const message = { ...baseDeleteDIRequest } as DeleteDIRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
};

const baseGetEntitiesUnderOGRequest: object = {
  id: "",
  direct: false,
  page: 0,
  pageSize: 0,
};

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
    if (message.page !== 0) {
      writer.uint32(24).int32(message.page);
    }
    if (message.pageSize !== 0) {
      writer.uint32(32).int32(message.pageSize);
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
        case 3:
          message.page = reader.int32();
          break;
        case 4:
          message.pageSize = reader.int32();
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
    if (object.page !== undefined && object.page !== null) {
      message.page = Number(object.page);
    } else {
      message.page = 0;
    }
    if (object.pageSize !== undefined && object.pageSize !== null) {
      message.pageSize = Number(object.pageSize);
    } else {
      message.pageSize = 0;
    }
    return message;
  },

  toJSON(message: GetEntitiesUnderOGRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.direct !== undefined && (obj.direct = message.direct);
    message.page !== undefined && (obj.page = message.page);
    message.pageSize !== undefined && (obj.pageSize = message.pageSize);
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
    if (object.page !== undefined && object.page !== null) {
      message.page = object.page;
    } else {
      message.page = 0;
    }
    if (object.pageSize !== undefined && object.pageSize !== null) {
      message.pageSize = object.pageSize;
    } else {
      message.pageSize = 0;
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
  createdAt: "",
  updatedAt: "",
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
    if (message.createdAt !== "") {
      writer.uint32(66).string(message.createdAt);
    }
    if (message.updatedAt !== "") {
      writer.uint32(74).string(message.updatedAt);
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
          message.createdAt = reader.string();
          break;
        case 9:
          message.updatedAt = reader.string();
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
      message.createdAt = String(object.createdAt);
    } else {
      message.createdAt = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = String(object.updatedAt);
    } else {
      message.updatedAt = "";
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
      message.createdAt = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = "";
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
  clearance: "",
  source: "",
  createdAt: "",
  updatedAt: "",
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
    if (message.clearance !== "") {
      writer.uint32(58).string(message.clearance);
    }
    if (message.source !== "") {
      writer.uint32(66).string(message.source);
    }
    if (message.createdAt !== "") {
      writer.uint32(74).string(message.createdAt);
    }
    if (message.updatedAt !== "") {
      writer.uint32(82).string(message.updatedAt);
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
          message.clearance = reader.string();
          break;
        case 8:
          message.source = reader.string();
          break;
        case 9:
          message.createdAt = reader.string();
          break;
        case 10:
          message.updatedAt = reader.string();
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
    if (object.clearance !== undefined && object.clearance !== null) {
      message.clearance = String(object.clearance);
    } else {
      message.clearance = "";
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = String(object.source);
    } else {
      message.source = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = String(object.createdAt);
    } else {
      message.createdAt = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = String(object.updatedAt);
    } else {
      message.updatedAt = "";
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
    message.clearance !== undefined && (obj.clearance = message.clearance);
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
    if (object.clearance !== undefined && object.clearance !== null) {
      message.clearance = object.clearance;
    } else {
      message.clearance = "";
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    } else {
      message.source = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = "";
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
  fullName: "",
  akaUnit: "",
  dischargeDay: "",
  rank: "",
  mail: "",
  jobTitle: "",
  phone: "",
  mobilePhone: "",
  address: "",
  clearance: "",
  sex: "",
  birthDate: "",
  createdAt: "",
  updatedAt: "",
  picture: "",
  goalUserID: "",
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
    if (message.fullName !== "") {
      writer.uint32(90).string(message.fullName);
    }
    if (message.akaUnit !== "") {
      writer.uint32(98).string(message.akaUnit);
    }
    if (message.dischargeDay !== "") {
      writer.uint32(106).string(message.dischargeDay);
    }
    if (message.rank !== "") {
      writer.uint32(114).string(message.rank);
    }
    if (message.mail !== "") {
      writer.uint32(122).string(message.mail);
    }
    if (message.jobTitle !== "") {
      writer.uint32(130).string(message.jobTitle);
    }
    for (const v of message.phone) {
      writer.uint32(138).string(v!);
    }
    for (const v of message.mobilePhone) {
      writer.uint32(146).string(v!);
    }
    if (message.address !== "") {
      writer.uint32(154).string(message.address);
    }
    if (message.clearance !== "") {
      writer.uint32(162).string(message.clearance);
    }
    if (message.sex !== "") {
      writer.uint32(170).string(message.sex);
    }
    if (message.birthDate !== "") {
      writer.uint32(178).string(message.birthDate);
    }
    if (message.createdAt !== "") {
      writer.uint32(186).string(message.createdAt);
    }
    if (message.updatedAt !== "") {
      writer.uint32(194).string(message.updatedAt);
    }
    for (const v of message.digitalIdentities) {
      DigitalIdentity.encode(v!, writer.uint32(202).fork()).ldelim();
    }
    if (message.picture !== "") {
      writer.uint32(210).string(message.picture);
    }
    if (message.goalUserID !== "") {
      writer.uint32(218).string(message.goalUserID);
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
          message.fullName = reader.string();
          break;
        case 12:
          message.akaUnit = reader.string();
          break;
        case 13:
          message.dischargeDay = reader.string();
          break;
        case 14:
          message.rank = reader.string();
          break;
        case 15:
          message.mail = reader.string();
          break;
        case 16:
          message.jobTitle = reader.string();
          break;
        case 17:
          message.phone.push(reader.string());
          break;
        case 18:
          message.mobilePhone.push(reader.string());
          break;
        case 19:
          message.address = reader.string();
          break;
        case 20:
          message.clearance = reader.string();
          break;
        case 21:
          message.sex = reader.string();
          break;
        case 22:
          message.birthDate = reader.string();
          break;
        case 23:
          message.createdAt = reader.string();
          break;
        case 24:
          message.updatedAt = reader.string();
          break;
        case 25:
          message.digitalIdentities.push(
            DigitalIdentity.decode(reader, reader.uint32())
          );
          break;
        case 26:
          message.picture = reader.string();
          break;
        case 27:
          message.goalUserID = reader.string();
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
    if (object.fullName !== undefined && object.fullName !== null) {
      message.fullName = String(object.fullName);
    } else {
      message.fullName = "";
    }
    if (object.akaUnit !== undefined && object.akaUnit !== null) {
      message.akaUnit = String(object.akaUnit);
    } else {
      message.akaUnit = "";
    }
    if (object.dischargeDay !== undefined && object.dischargeDay !== null) {
      message.dischargeDay = String(object.dischargeDay);
    } else {
      message.dischargeDay = "";
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
    if (object.birthDate !== undefined && object.birthDate !== null) {
      message.birthDate = String(object.birthDate);
    } else {
      message.birthDate = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = String(object.createdAt);
    } else {
      message.createdAt = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = String(object.updatedAt);
    } else {
      message.updatedAt = "";
    }
    if (
      object.digitalIdentities !== undefined &&
      object.digitalIdentities !== null
    ) {
      for (const e of object.digitalIdentities) {
        message.digitalIdentities.push(DigitalIdentity.fromJSON(e));
      }
    }
    if (object.picture !== undefined && object.picture !== null) {
      message.picture = String(object.picture);
    } else {
      message.picture = "";
    }
    if (object.goalUserID !== undefined && object.goalUserID !== null) {
      message.goalUserID = String(object.goalUserID);
    } else {
      message.goalUserID = "";
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
    message.fullName !== undefined && (obj.fullName = message.fullName);
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
    message.birthDate !== undefined && (obj.birthDate = message.birthDate);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
    if (message.digitalIdentities) {
      obj.digitalIdentities = message.digitalIdentities.map((e) =>
        e ? DigitalIdentity.toJSON(e) : undefined
      );
    } else {
      obj.digitalIdentities = [];
    }
    message.picture !== undefined && (obj.picture = message.picture);
    message.goalUserID !== undefined && (obj.goalUserID = message.goalUserID);
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
    if (object.fullName !== undefined && object.fullName !== null) {
      message.fullName = object.fullName;
    } else {
      message.fullName = "";
    }
    if (object.akaUnit !== undefined && object.akaUnit !== null) {
      message.akaUnit = object.akaUnit;
    } else {
      message.akaUnit = "";
    }
    if (object.dischargeDay !== undefined && object.dischargeDay !== null) {
      message.dischargeDay = object.dischargeDay;
    } else {
      message.dischargeDay = "";
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
    if (object.birthDate !== undefined && object.birthDate !== null) {
      message.birthDate = object.birthDate;
    } else {
      message.birthDate = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = "";
    }
    if (
      object.digitalIdentities !== undefined &&
      object.digitalIdentities !== null
    ) {
      for (const e of object.digitalIdentities) {
        message.digitalIdentities.push(DigitalIdentity.fromPartial(e));
      }
    }
    if (object.picture !== undefined && object.picture !== null) {
      message.picture = object.picture;
    } else {
      message.picture = "";
    }
    if (object.goalUserID !== undefined && object.goalUserID !== null) {
      message.goalUserID = object.goalUserID;
    } else {
      message.goalUserID = "";
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
  createdAt: "",
  updatedAt: "",
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
    if (message.createdAt !== "") {
      writer.uint32(50).string(message.createdAt);
    }
    if (message.updatedAt !== "") {
      writer.uint32(58).string(message.updatedAt);
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
          message.createdAt = reader.string();
          break;
        case 7:
          message.updatedAt = reader.string();
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
      message.createdAt = String(object.createdAt);
    } else {
      message.createdAt = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = String(object.updatedAt);
    } else {
      message.updatedAt = "";
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
      message.createdAt = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = "";
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
  /** Entities */
  CreateEntity(request: CreateEntityRequest): Promise<Entity>;
  GetEntityByDI(request: GetEntityByDIRequest): Promise<Entity>;
  GetEntityByRoleId(request: GetEntityByRoleIdRequest): Promise<Entity>;
  GetEntitiesUnderOG(request: GetEntitiesUnderOGRequest): Promise<EntityArray>;
  GetEntitiesByHierarchy(
    request: GetEntitiesByHierarchyRequest
  ): Promise<EntityArray>;
  GetEntityByIdentifier(request: GetEntityByIdentifierRequest): Promise<Entity>;
  SearchEntitiesByFullName(
    request: SearchEntitiesByFullNameRequest
  ): Promise<EntityArray>;
  GetEntityById(request: GetEntityByIdRequest): Promise<Entity>;
  DeleteEntity(request: DeleteEntityRequest): Promise<SuccessMessage>;
  UpdateEntity(request: UpdateEntityRequest): Promise<Entity>;
  ConnectEntityAndDI(
    request: ConnectEntityAndDIRequest
  ): Promise<SuccessMessage>;
  DisconnectDIFromEntity(
    request: DisconnectDIFromEntityRequest
  ): Promise<SuccessMessage>;
  GetPictureByEntityId(request: GetPictureByEntityIdRequest): Promise<Image>;
  /** Groups */
  GetAllOGs(request: GetAllOGsRequest): Promise<OGArray>;
  CreateOG(request: CreateOGRequest): Promise<OrganizationGroup>;
  GetOGByHierarchyName(
    request: GetOGByHierarchyNameRequest
  ): Promise<OrganizationGroup>;
  SearchOG(request: SearchOGRequest): Promise<OGArray>;
  DeleteOG(request: DeleteOGRequest): Promise<SuccessMessage>;
  GetOGById(request: GetOGByIdRequest): Promise<OrganizationGroup>;
  GetChildrenOfOG(request: GetChildrenOfOGRequest): Promise<OGArray>;
  UpdateOGParent(request: UpdateOGParentRequest): Promise<SuccessMessage>;
  RenameOG(request: RenameOGRequest): Promise<SuccessMessage>;
  CreateDI(request: CreateDIRequest): Promise<DigitalIdentity>;
  GetDIByRoleId(request: GetDIByRoleIdRequest): Promise<DigitalIdentity>;
  SearchDIOrUniqueId(
    request: SearchDIOrUniqueIdRequest
  ): Promise<DigitalIdentities>;
  DeleteDI(request: DeleteDIRequest): Promise<SuccessMessage>;
  GetDIByUniqueId(request: GetDIByUniqueIdRequest): Promise<DigitalIdentity>;
  UpdateDI(request: UpdateDIRequest): Promise<SuccessMessage>;
  /** Roles */
  GetAllRoles(request: GetAllRolesRequest): Promise<RoleArray>;
  CreateRole(request: CreateRoleRequest): Promise<Role>;
  ConnectRoleAndDI(request: ConnectRoleAndDIRequest): Promise<SuccessMessage>;
  DisconnectRoleAndDI(
    request: DisconnectRoleAndDIRequest
  ): Promise<SuccessMessage>;
  GetRoleByRoleId(request: GetRoleByRoleIdRequest): Promise<Role>;
  GetRolesUnderOG(request: GetRolesUnderOGRequest): Promise<RoleArray>;
  DeleteRole(request: DeleteRoleRequest): Promise<SuccessMessage>;
  DeleteDI(request: DeleteDIRequest): Promise<SuccessMessage>;
  GetOGTree(request: GetOGTreeRequest): Promise<OGTree>;
  RenameRole(request: RenameRoleRequest): Promise<SuccessMessage>;
}

export class KartoffelClientImpl implements Kartoffel {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateEntity = this.CreateEntity.bind(this);
    this.GetEntityByDI = this.GetEntityByDI.bind(this);
    this.GetEntityByRoleId = this.GetEntityByRoleId.bind(this);
    this.GetEntitiesUnderOG = this.GetEntitiesUnderOG.bind(this);
    this.GetEntitiesByHierarchy = this.GetEntitiesByHierarchy.bind(this);
    this.GetEntityByIdentifier = this.GetEntityByIdentifier.bind(this);
    this.SearchEntitiesByFullName = this.SearchEntitiesByFullName.bind(this);
    this.GetEntityById = this.GetEntityById.bind(this);
    this.DeleteEntity = this.DeleteEntity.bind(this);
    this.UpdateEntity = this.UpdateEntity.bind(this);
    this.ConnectEntityAndDI = this.ConnectEntityAndDI.bind(this);
    this.DisconnectDIFromEntity = this.DisconnectDIFromEntity.bind(this);
    this.GetPictureByEntityId = this.GetPictureByEntityId.bind(this);
    this.GetAllOGs = this.GetAllOGs.bind(this);
    this.CreateOG = this.CreateOG.bind(this);
    this.GetOGByHierarchyName = this.GetOGByHierarchyName.bind(this);
    this.SearchOG = this.SearchOG.bind(this);
    this.DeleteOG = this.DeleteOG.bind(this);
    this.GetOGById = this.GetOGById.bind(this);
    this.GetChildrenOfOG = this.GetChildrenOfOG.bind(this);
    this.UpdateOGParent = this.UpdateOGParent.bind(this);
    this.RenameOG = this.RenameOG.bind(this);
    this.CreateDI = this.CreateDI.bind(this);
    this.GetDIByRoleId = this.GetDIByRoleId.bind(this);
    this.SearchDIOrUniqueId = this.SearchDIOrUniqueId.bind(this);
    this.DeleteDI = this.DeleteDI.bind(this);
    this.GetDIByUniqueId = this.GetDIByUniqueId.bind(this);
    this.UpdateDI = this.UpdateDI.bind(this);
    this.GetAllRoles = this.GetAllRoles.bind(this);
    this.CreateRole = this.CreateRole.bind(this);
    this.ConnectRoleAndDI = this.ConnectRoleAndDI.bind(this);
    this.DisconnectRoleAndDI = this.DisconnectRoleAndDI.bind(this);
    this.GetRoleByRoleId = this.GetRoleByRoleId.bind(this);
    this.GetRolesUnderOG = this.GetRolesUnderOG.bind(this);
    this.DeleteRole = this.DeleteRole.bind(this);
    this.DeleteDI = this.DeleteDI.bind(this);
    this.GetOGTree = this.GetOGTree.bind(this);
    this.RenameRole = this.RenameRole.bind(this);
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

  GetEntityByDI(request: GetEntityByDIRequest): Promise<Entity> {
    const data = GetEntityByDIRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Kartoffel.Kartoffel",
      "GetEntityByDI",
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

  GetEntitiesUnderOG(request: GetEntitiesUnderOGRequest): Promise<EntityArray> {
    const data = GetEntitiesUnderOGRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Kartoffel.Kartoffel",
      "GetEntitiesUnderOG",
      data
    );
    return promise.then((data) => EntityArray.decode(new _m0.Reader(data)));
  }

  GetEntitiesByHierarchy(
    request: GetEntitiesByHierarchyRequest
  ): Promise<EntityArray> {
    const data = GetEntitiesByHierarchyRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Kartoffel.Kartoffel",
      "GetEntitiesByHierarchy",
      data
    );
    return promise.then((data) => EntityArray.decode(new _m0.Reader(data)));
  }

  GetEntityByIdentifier(
    request: GetEntityByIdentifierRequest
  ): Promise<Entity> {
    const data = GetEntityByIdentifierRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Kartoffel.Kartoffel",
      "GetEntityByIdentifier",
      data
    );
    return promise.then((data) => Entity.decode(new _m0.Reader(data)));
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

  GetEntityById(request: GetEntityByIdRequest): Promise<Entity> {
    const data = GetEntityByIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Kartoffel.Kartoffel",
      "GetEntityById",
      data
    );
    return promise.then((data) => Entity.decode(new _m0.Reader(data)));
  }

  DeleteEntity(request: DeleteEntityRequest): Promise<SuccessMessage> {
    const data = DeleteEntityRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Kartoffel.Kartoffel",
      "DeleteEntity",
      data
    );
    return promise.then((data) => SuccessMessage.decode(new _m0.Reader(data)));
  }

  UpdateEntity(request: UpdateEntityRequest): Promise<Entity> {
    const data = UpdateEntityRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Kartoffel.Kartoffel",
      "UpdateEntity",
      data
    );
    return promise.then((data) => Entity.decode(new _m0.Reader(data)));
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

  GetPictureByEntityId(request: GetPictureByEntityIdRequest): Promise<Image> {
    const data = GetPictureByEntityIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Kartoffel.Kartoffel",
      "GetPictureByEntityId",
      data
    );
    return promise.then((data) => Image.decode(new _m0.Reader(data)));
  }

  GetAllOGs(request: GetAllOGsRequest): Promise<OGArray> {
    const data = GetAllOGsRequest.encode(request).finish();
    const promise = this.rpc.request("Kartoffel.Kartoffel", "GetAllOGs", data);
    return promise.then((data) => OGArray.decode(new _m0.Reader(data)));
  }

  CreateOG(request: CreateOGRequest): Promise<OrganizationGroup> {
    const data = CreateOGRequest.encode(request).finish();
    const promise = this.rpc.request("Kartoffel.Kartoffel", "CreateOG", data);
    return promise.then((data) =>
      OrganizationGroup.decode(new _m0.Reader(data))
    );
  }

  GetOGByHierarchyName(
    request: GetOGByHierarchyNameRequest
  ): Promise<OrganizationGroup> {
    const data = GetOGByHierarchyNameRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Kartoffel.Kartoffel",
      "GetOGByHierarchyName",
      data
    );
    return promise.then((data) =>
      OrganizationGroup.decode(new _m0.Reader(data))
    );
  }

  SearchOG(request: SearchOGRequest): Promise<OGArray> {
    const data = SearchOGRequest.encode(request).finish();
    const promise = this.rpc.request("Kartoffel.Kartoffel", "SearchOG", data);
    return promise.then((data) => OGArray.decode(new _m0.Reader(data)));
  }

  DeleteOG(request: DeleteOGRequest): Promise<SuccessMessage> {
    const data = DeleteOGRequest.encode(request).finish();
    const promise = this.rpc.request("Kartoffel.Kartoffel", "DeleteOG", data);
    return promise.then((data) => SuccessMessage.decode(new _m0.Reader(data)));
  }

  GetOGById(request: GetOGByIdRequest): Promise<OrganizationGroup> {
    const data = GetOGByIdRequest.encode(request).finish();
    const promise = this.rpc.request("Kartoffel.Kartoffel", "GetOGById", data);
    return promise.then((data) =>
      OrganizationGroup.decode(new _m0.Reader(data))
    );
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

  UpdateOGParent(request: UpdateOGParentRequest): Promise<SuccessMessage> {
    const data = UpdateOGParentRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Kartoffel.Kartoffel",
      "UpdateOGParent",
      data
    );
    return promise.then((data) => SuccessMessage.decode(new _m0.Reader(data)));
  }

  RenameOG(request: RenameOGRequest): Promise<SuccessMessage> {
    const data = RenameOGRequest.encode(request).finish();
    const promise = this.rpc.request("Kartoffel.Kartoffel", "RenameOG", data);
    return promise.then((data) => SuccessMessage.decode(new _m0.Reader(data)));
  }

  CreateDI(request: CreateDIRequest): Promise<DigitalIdentity> {
    const data = CreateDIRequest.encode(request).finish();
    const promise = this.rpc.request("Kartoffel.Kartoffel", "CreateDI", data);
    return promise.then((data) => DigitalIdentity.decode(new _m0.Reader(data)));
  }

  GetDIByRoleId(request: GetDIByRoleIdRequest): Promise<DigitalIdentity> {
    const data = GetDIByRoleIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Kartoffel.Kartoffel",
      "GetDIByRoleId",
      data
    );
    return promise.then((data) => DigitalIdentity.decode(new _m0.Reader(data)));
  }

  SearchDIOrUniqueId(
    request: SearchDIOrUniqueIdRequest
  ): Promise<DigitalIdentities> {
    const data = SearchDIOrUniqueIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Kartoffel.Kartoffel",
      "SearchDIOrUniqueId",
      data
    );
    return promise.then((data) =>
      DigitalIdentities.decode(new _m0.Reader(data))
    );
  }

  DeleteDI(request: DeleteDIRequest): Promise<SuccessMessage> {
    const data = DeleteDIRequest.encode(request).finish();
    const promise = this.rpc.request("Kartoffel.Kartoffel", "DeleteDI", data);
    return promise.then((data) => SuccessMessage.decode(new _m0.Reader(data)));
  }

  GetDIByUniqueId(request: GetDIByUniqueIdRequest): Promise<DigitalIdentity> {
    const data = GetDIByUniqueIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Kartoffel.Kartoffel",
      "GetDIByUniqueId",
      data
    );
    return promise.then((data) => DigitalIdentity.decode(new _m0.Reader(data)));
  }

  UpdateDI(request: UpdateDIRequest): Promise<SuccessMessage> {
    const data = UpdateDIRequest.encode(request).finish();
    const promise = this.rpc.request("Kartoffel.Kartoffel", "UpdateDI", data);
    return promise.then((data) => SuccessMessage.decode(new _m0.Reader(data)));
  }

  GetAllRoles(request: GetAllRolesRequest): Promise<RoleArray> {
    const data = GetAllRolesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Kartoffel.Kartoffel",
      "GetAllRoles",
      data
    );
    return promise.then((data) => RoleArray.decode(new _m0.Reader(data)));
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

  DisconnectRoleAndDI(
    request: DisconnectRoleAndDIRequest
  ): Promise<SuccessMessage> {
    const data = DisconnectRoleAndDIRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Kartoffel.Kartoffel",
      "DisconnectRoleAndDI",
      data
    );
    return promise.then((data) => SuccessMessage.decode(new _m0.Reader(data)));
  }

  GetRoleByRoleId(request: GetRoleByRoleIdRequest): Promise<Role> {
    const data = GetRoleByRoleIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Kartoffel.Kartoffel",
      "GetRoleByRoleId",
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

  DeleteRole(request: DeleteRoleRequest): Promise<SuccessMessage> {
    const data = DeleteRoleRequest.encode(request).finish();
    const promise = this.rpc.request("Kartoffel.Kartoffel", "DeleteRole", data);
    return promise.then((data) => SuccessMessage.decode(new _m0.Reader(data)));
  }

  RenameRole(request: RenameRoleRequest): Promise<SuccessMessage> {
    const data = RenameRoleRequest.encode(request).finish();
    const promise = this.rpc.request("Kartoffel.Kartoffel", "RenameRole", data);
    return promise.then((data) => SuccessMessage.decode(new _m0.Reader(data)));
  }

  GetRolesByHierarchy(
    request: GetRolesByHierarchyRequest
  ): Promise<SuccessMessage> {
    const data = GetRolesByHierarchyRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Kartoffel.Kartoffel",
      "GetRolesByHierarchy",
      data
    );
    return promise.then((data) => SuccessMessage.decode(new _m0.Reader(data)));
  }

  ChangeRoleOG(request: ChangeRoleOGRequest): Promise<SuccessMessage> {
    const data = ChangeRoleOGRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Kartoffel.Kartoffel",
      "ChangeRoleOG",
      data
    );
    return promise.then((data) => SuccessMessage.decode(new _m0.Reader(data)));
  }

  RenameRole(request: RenameRoleRequest): Promise<SuccessMessage> {
    const data = RenameRoleRequest.encode(request).finish();
    const promise = this.rpc.request("Kartoffel.Kartoffel", "RenameRole", data);
    return promise.then((data) => SuccessMessage.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
