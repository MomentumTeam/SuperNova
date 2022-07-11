/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Tea";

export enum Domain {
  OLD = 0,
  NEW = 1,
  UNRECOGNIZED = -1,
}

export function domainFromJSON(object: any): Domain {
  switch (object) {
    case 0:
    case "OLD":
      return Domain.OLD;
    case 1:
    case "NEW":
      return Domain.NEW;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Domain.UNRECOGNIZED;
  }
}

export function domainToJSON(object: Domain): string {
  switch (object) {
    case Domain.OLD:
      return "OLD";
    case Domain.NEW:
      return "NEW";
    default:
      return "UNKNOWN";
  }
}

export interface RetrieveBrolReq {}

export interface RetrieveTeaByOGIdReq {
  id: string;
}

export interface GetAllPrefixesReq {}

export interface RetrieveTeaByPrefixReq {
  prefix: string;
}

export interface TeaMessage {
  tea: string;
  roleId?: string | undefined;
  uniqueId?: string | undefined;
  samAccountName?: string | undefined;
  mail?: string | undefined;
}

export interface UPNMessage {
  upn: string;
}

export interface UpdatePrefixReq {
  prefix: string;
  properties: PrefixProperties | undefined;
}

export interface DeletePrefixReq {
  prefix: string;
}

export interface GetPrefixReq {
  prefix: string;
}

export interface AddPrefixReq {
  prefix: string;
  currentCounter: number;
}

export interface Prefix {
  /** 1234 */
  prefix: string;
  currentCounter: number;
  teaInProgress: string[];
  failedTea: string[];
  createdAt: number;
}

export interface PrefixArray {
  prefixes: Prefix[];
  totalCount: number;
}

export interface PrefixProperties {
  prefix?: string | undefined;
  currentCounter?: string | undefined;
  teaInProgress: string[];
  failedTea: string[];
}

export interface ReportTeaReq {
  tea: string;
}

export interface SuccessMessage {
  success: boolean;
}

export interface RetrieveByEntityReq {
  domain: Domain;
  entity: EntityMin | undefined;
}

export interface RetrieveByEntityIdReq {
  domain: Domain;
  entityId: string;
  entityType?: string | undefined;
}

export interface RetrieveByIdentifierReq {
  domain: Domain;
  identifier: string;
  entityType: string;
}

export interface EntityMin {
  entityType: string;
  akaUnit: string;
  personalNumber?: string | undefined;
  identityCard?: string | undefined;
  goalUserId?: string | undefined;
  firstName?: string | undefined;
  lastName?: string | undefined;
  employeeNumber?: string | undefined;
}

const baseRetrieveBrolReq: object = {};

export const RetrieveBrolReq = {
  encode(
    _: RetrieveBrolReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RetrieveBrolReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRetrieveBrolReq } as RetrieveBrolReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): RetrieveBrolReq {
    const message = { ...baseRetrieveBrolReq } as RetrieveBrolReq;
    return message;
  },

  toJSON(_: RetrieveBrolReq): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<RetrieveBrolReq>): RetrieveBrolReq {
    const message = { ...baseRetrieveBrolReq } as RetrieveBrolReq;
    return message;
  },
};

const baseRetrieveTeaByOGIdReq: object = { id: "" };

export const RetrieveTeaByOGIdReq = {
  encode(
    message: RetrieveTeaByOGIdReq,
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
  ): RetrieveTeaByOGIdReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRetrieveTeaByOGIdReq } as RetrieveTeaByOGIdReq;
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

  fromJSON(object: any): RetrieveTeaByOGIdReq {
    const message = { ...baseRetrieveTeaByOGIdReq } as RetrieveTeaByOGIdReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: RetrieveTeaByOGIdReq): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<RetrieveTeaByOGIdReq>): RetrieveTeaByOGIdReq {
    const message = { ...baseRetrieveTeaByOGIdReq } as RetrieveTeaByOGIdReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
};

const baseGetAllPrefixesReq: object = {};

export const GetAllPrefixesReq = {
  encode(
    _: GetAllPrefixesReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllPrefixesReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetAllPrefixesReq } as GetAllPrefixesReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetAllPrefixesReq {
    const message = { ...baseGetAllPrefixesReq } as GetAllPrefixesReq;
    return message;
  },

  toJSON(_: GetAllPrefixesReq): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<GetAllPrefixesReq>): GetAllPrefixesReq {
    const message = { ...baseGetAllPrefixesReq } as GetAllPrefixesReq;
    return message;
  },
};

const baseRetrieveTeaByPrefixReq: object = { prefix: "" };

export const RetrieveTeaByPrefixReq = {
  encode(
    message: RetrieveTeaByPrefixReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.prefix !== "") {
      writer.uint32(10).string(message.prefix);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RetrieveTeaByPrefixReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRetrieveTeaByPrefixReq } as RetrieveTeaByPrefixReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prefix = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RetrieveTeaByPrefixReq {
    const message = { ...baseRetrieveTeaByPrefixReq } as RetrieveTeaByPrefixReq;
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = String(object.prefix);
    } else {
      message.prefix = "";
    }
    return message;
  },

  toJSON(message: RetrieveTeaByPrefixReq): unknown {
    const obj: any = {};
    message.prefix !== undefined && (obj.prefix = message.prefix);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RetrieveTeaByPrefixReq>
  ): RetrieveTeaByPrefixReq {
    const message = { ...baseRetrieveTeaByPrefixReq } as RetrieveTeaByPrefixReq;
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = object.prefix;
    } else {
      message.prefix = "";
    }
    return message;
  },
};

const baseTeaMessage: object = { tea: "" };

export const TeaMessage = {
  encode(
    message: TeaMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tea !== "") {
      writer.uint32(10).string(message.tea);
    }
    if (message.roleId !== undefined) {
      writer.uint32(18).string(message.roleId);
    }
    if (message.uniqueId !== undefined) {
      writer.uint32(26).string(message.uniqueId);
    }
    if (message.samAccountName !== undefined) {
      writer.uint32(34).string(message.samAccountName);
    }
    if (message.mail !== undefined) {
      writer.uint32(42).string(message.mail);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TeaMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTeaMessage } as TeaMessage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tea = reader.string();
          break;
        case 2:
          message.roleId = reader.string();
          break;
        case 3:
          message.uniqueId = reader.string();
          break;
        case 4:
          message.samAccountName = reader.string();
          break;
        case 5:
          message.mail = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TeaMessage {
    const message = { ...baseTeaMessage } as TeaMessage;
    if (object.tea !== undefined && object.tea !== null) {
      message.tea = String(object.tea);
    } else {
      message.tea = "";
    }
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = String(object.roleId);
    } else {
      message.roleId = undefined;
    }
    if (object.uniqueId !== undefined && object.uniqueId !== null) {
      message.uniqueId = String(object.uniqueId);
    } else {
      message.uniqueId = undefined;
    }
    if (object.samAccountName !== undefined && object.samAccountName !== null) {
      message.samAccountName = String(object.samAccountName);
    } else {
      message.samAccountName = undefined;
    }
    if (object.mail !== undefined && object.mail !== null) {
      message.mail = String(object.mail);
    } else {
      message.mail = undefined;
    }
    return message;
  },

  toJSON(message: TeaMessage): unknown {
    const obj: any = {};
    message.tea !== undefined && (obj.tea = message.tea);
    message.roleId !== undefined && (obj.roleId = message.roleId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.samAccountName !== undefined &&
      (obj.samAccountName = message.samAccountName);
    message.mail !== undefined && (obj.mail = message.mail);
    return obj;
  },

  fromPartial(object: DeepPartial<TeaMessage>): TeaMessage {
    const message = { ...baseTeaMessage } as TeaMessage;
    if (object.tea !== undefined && object.tea !== null) {
      message.tea = object.tea;
    } else {
      message.tea = "";
    }
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = object.roleId;
    } else {
      message.roleId = undefined;
    }
    if (object.uniqueId !== undefined && object.uniqueId !== null) {
      message.uniqueId = object.uniqueId;
    } else {
      message.uniqueId = undefined;
    }
    if (object.samAccountName !== undefined && object.samAccountName !== null) {
      message.samAccountName = object.samAccountName;
    } else {
      message.samAccountName = undefined;
    }
    if (object.mail !== undefined && object.mail !== null) {
      message.mail = object.mail;
    } else {
      message.mail = undefined;
    }
    return message;
  },
};

const baseUPNMessage: object = { upn: "" };

export const UPNMessage = {
  encode(
    message: UPNMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.upn !== "") {
      writer.uint32(10).string(message.upn);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UPNMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUPNMessage } as UPNMessage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.upn = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UPNMessage {
    const message = { ...baseUPNMessage } as UPNMessage;
    if (object.upn !== undefined && object.upn !== null) {
      message.upn = String(object.upn);
    } else {
      message.upn = "";
    }
    return message;
  },

  toJSON(message: UPNMessage): unknown {
    const obj: any = {};
    message.upn !== undefined && (obj.upn = message.upn);
    return obj;
  },

  fromPartial(object: DeepPartial<UPNMessage>): UPNMessage {
    const message = { ...baseUPNMessage } as UPNMessage;
    if (object.upn !== undefined && object.upn !== null) {
      message.upn = object.upn;
    } else {
      message.upn = "";
    }
    return message;
  },
};

const baseUpdatePrefixReq: object = { prefix: "" };

export const UpdatePrefixReq = {
  encode(
    message: UpdatePrefixReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.prefix !== "") {
      writer.uint32(10).string(message.prefix);
    }
    if (message.properties !== undefined) {
      PrefixProperties.encode(
        message.properties,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePrefixReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdatePrefixReq } as UpdatePrefixReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prefix = reader.string();
          break;
        case 2:
          message.properties = PrefixProperties.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdatePrefixReq {
    const message = { ...baseUpdatePrefixReq } as UpdatePrefixReq;
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = String(object.prefix);
    } else {
      message.prefix = "";
    }
    if (object.properties !== undefined && object.properties !== null) {
      message.properties = PrefixProperties.fromJSON(object.properties);
    } else {
      message.properties = undefined;
    }
    return message;
  },

  toJSON(message: UpdatePrefixReq): unknown {
    const obj: any = {};
    message.prefix !== undefined && (obj.prefix = message.prefix);
    message.properties !== undefined &&
      (obj.properties = message.properties
        ? PrefixProperties.toJSON(message.properties)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<UpdatePrefixReq>): UpdatePrefixReq {
    const message = { ...baseUpdatePrefixReq } as UpdatePrefixReq;
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = object.prefix;
    } else {
      message.prefix = "";
    }
    if (object.properties !== undefined && object.properties !== null) {
      message.properties = PrefixProperties.fromPartial(object.properties);
    } else {
      message.properties = undefined;
    }
    return message;
  },
};

const baseDeletePrefixReq: object = { prefix: "" };

export const DeletePrefixReq = {
  encode(
    message: DeletePrefixReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.prefix !== "") {
      writer.uint32(10).string(message.prefix);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeletePrefixReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeletePrefixReq } as DeletePrefixReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prefix = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeletePrefixReq {
    const message = { ...baseDeletePrefixReq } as DeletePrefixReq;
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = String(object.prefix);
    } else {
      message.prefix = "";
    }
    return message;
  },

  toJSON(message: DeletePrefixReq): unknown {
    const obj: any = {};
    message.prefix !== undefined && (obj.prefix = message.prefix);
    return obj;
  },

  fromPartial(object: DeepPartial<DeletePrefixReq>): DeletePrefixReq {
    const message = { ...baseDeletePrefixReq } as DeletePrefixReq;
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = object.prefix;
    } else {
      message.prefix = "";
    }
    return message;
  },
};

const baseGetPrefixReq: object = { prefix: "" };

export const GetPrefixReq = {
  encode(
    message: GetPrefixReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.prefix !== "") {
      writer.uint32(10).string(message.prefix);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPrefixReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetPrefixReq } as GetPrefixReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prefix = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetPrefixReq {
    const message = { ...baseGetPrefixReq } as GetPrefixReq;
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = String(object.prefix);
    } else {
      message.prefix = "";
    }
    return message;
  },

  toJSON(message: GetPrefixReq): unknown {
    const obj: any = {};
    message.prefix !== undefined && (obj.prefix = message.prefix);
    return obj;
  },

  fromPartial(object: DeepPartial<GetPrefixReq>): GetPrefixReq {
    const message = { ...baseGetPrefixReq } as GetPrefixReq;
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = object.prefix;
    } else {
      message.prefix = "";
    }
    return message;
  },
};

const baseAddPrefixReq: object = { prefix: "", currentCounter: 0 };

export const AddPrefixReq = {
  encode(
    message: AddPrefixReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.prefix !== "") {
      writer.uint32(10).string(message.prefix);
    }
    if (message.currentCounter !== 0) {
      writer.uint32(16).int32(message.currentCounter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddPrefixReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddPrefixReq } as AddPrefixReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prefix = reader.string();
          break;
        case 2:
          message.currentCounter = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddPrefixReq {
    const message = { ...baseAddPrefixReq } as AddPrefixReq;
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = String(object.prefix);
    } else {
      message.prefix = "";
    }
    if (object.currentCounter !== undefined && object.currentCounter !== null) {
      message.currentCounter = Number(object.currentCounter);
    } else {
      message.currentCounter = 0;
    }
    return message;
  },

  toJSON(message: AddPrefixReq): unknown {
    const obj: any = {};
    message.prefix !== undefined && (obj.prefix = message.prefix);
    message.currentCounter !== undefined &&
      (obj.currentCounter = message.currentCounter);
    return obj;
  },

  fromPartial(object: DeepPartial<AddPrefixReq>): AddPrefixReq {
    const message = { ...baseAddPrefixReq } as AddPrefixReq;
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = object.prefix;
    } else {
      message.prefix = "";
    }
    if (object.currentCounter !== undefined && object.currentCounter !== null) {
      message.currentCounter = object.currentCounter;
    } else {
      message.currentCounter = 0;
    }
    return message;
  },
};

const basePrefix: object = {
  prefix: "",
  currentCounter: 0,
  teaInProgress: "",
  failedTea: "",
  createdAt: 0,
};

export const Prefix = {
  encode(
    message: Prefix,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.prefix !== "") {
      writer.uint32(10).string(message.prefix);
    }
    if (message.currentCounter !== 0) {
      writer.uint32(16).int32(message.currentCounter);
    }
    for (const v of message.teaInProgress) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.failedTea) {
      writer.uint32(34).string(v!);
    }
    if (message.createdAt !== 0) {
      writer.uint32(40).int64(message.createdAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Prefix {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePrefix } as Prefix;
    message.teaInProgress = [];
    message.failedTea = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prefix = reader.string();
          break;
        case 2:
          message.currentCounter = reader.int32();
          break;
        case 3:
          message.teaInProgress.push(reader.string());
          break;
        case 4:
          message.failedTea.push(reader.string());
          break;
        case 5:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Prefix {
    const message = { ...basePrefix } as Prefix;
    message.teaInProgress = [];
    message.failedTea = [];
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = String(object.prefix);
    } else {
      message.prefix = "";
    }
    if (object.currentCounter !== undefined && object.currentCounter !== null) {
      message.currentCounter = Number(object.currentCounter);
    } else {
      message.currentCounter = 0;
    }
    if (object.teaInProgress !== undefined && object.teaInProgress !== null) {
      for (const e of object.teaInProgress) {
        message.teaInProgress.push(String(e));
      }
    }
    if (object.failedTea !== undefined && object.failedTea !== null) {
      for (const e of object.failedTea) {
        message.failedTea.push(String(e));
      }
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Number(object.createdAt);
    } else {
      message.createdAt = 0;
    }
    return message;
  },

  toJSON(message: Prefix): unknown {
    const obj: any = {};
    message.prefix !== undefined && (obj.prefix = message.prefix);
    message.currentCounter !== undefined &&
      (obj.currentCounter = message.currentCounter);
    if (message.teaInProgress) {
      obj.teaInProgress = message.teaInProgress.map((e) => e);
    } else {
      obj.teaInProgress = [];
    }
    if (message.failedTea) {
      obj.failedTea = message.failedTea.map((e) => e);
    } else {
      obj.failedTea = [];
    }
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    return obj;
  },

  fromPartial(object: DeepPartial<Prefix>): Prefix {
    const message = { ...basePrefix } as Prefix;
    message.teaInProgress = [];
    message.failedTea = [];
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = object.prefix;
    } else {
      message.prefix = "";
    }
    if (object.currentCounter !== undefined && object.currentCounter !== null) {
      message.currentCounter = object.currentCounter;
    } else {
      message.currentCounter = 0;
    }
    if (object.teaInProgress !== undefined && object.teaInProgress !== null) {
      for (const e of object.teaInProgress) {
        message.teaInProgress.push(e);
      }
    }
    if (object.failedTea !== undefined && object.failedTea !== null) {
      for (const e of object.failedTea) {
        message.failedTea.push(e);
      }
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = 0;
    }
    return message;
  },
};

const basePrefixArray: object = { totalCount: 0 };

export const PrefixArray = {
  encode(
    message: PrefixArray,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.prefixes) {
      Prefix.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).int32(message.totalCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrefixArray {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePrefixArray } as PrefixArray;
    message.prefixes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prefixes.push(Prefix.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalCount = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PrefixArray {
    const message = { ...basePrefixArray } as PrefixArray;
    message.prefixes = [];
    if (object.prefixes !== undefined && object.prefixes !== null) {
      for (const e of object.prefixes) {
        message.prefixes.push(Prefix.fromJSON(e));
      }
    }
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = Number(object.totalCount);
    } else {
      message.totalCount = 0;
    }
    return message;
  },

  toJSON(message: PrefixArray): unknown {
    const obj: any = {};
    if (message.prefixes) {
      obj.prefixes = message.prefixes.map((e) =>
        e ? Prefix.toJSON(e) : undefined
      );
    } else {
      obj.prefixes = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    return obj;
  },

  fromPartial(object: DeepPartial<PrefixArray>): PrefixArray {
    const message = { ...basePrefixArray } as PrefixArray;
    message.prefixes = [];
    if (object.prefixes !== undefined && object.prefixes !== null) {
      for (const e of object.prefixes) {
        message.prefixes.push(Prefix.fromPartial(e));
      }
    }
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = object.totalCount;
    } else {
      message.totalCount = 0;
    }
    return message;
  },
};

const basePrefixProperties: object = { teaInProgress: "", failedTea: "" };

export const PrefixProperties = {
  encode(
    message: PrefixProperties,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.prefix !== undefined) {
      writer.uint32(10).string(message.prefix);
    }
    if (message.currentCounter !== undefined) {
      writer.uint32(18).string(message.currentCounter);
    }
    for (const v of message.teaInProgress) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.failedTea) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrefixProperties {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePrefixProperties } as PrefixProperties;
    message.teaInProgress = [];
    message.failedTea = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prefix = reader.string();
          break;
        case 2:
          message.currentCounter = reader.string();
          break;
        case 3:
          message.teaInProgress.push(reader.string());
          break;
        case 4:
          message.failedTea.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PrefixProperties {
    const message = { ...basePrefixProperties } as PrefixProperties;
    message.teaInProgress = [];
    message.failedTea = [];
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = String(object.prefix);
    } else {
      message.prefix = undefined;
    }
    if (object.currentCounter !== undefined && object.currentCounter !== null) {
      message.currentCounter = String(object.currentCounter);
    } else {
      message.currentCounter = undefined;
    }
    if (object.teaInProgress !== undefined && object.teaInProgress !== null) {
      for (const e of object.teaInProgress) {
        message.teaInProgress.push(String(e));
      }
    }
    if (object.failedTea !== undefined && object.failedTea !== null) {
      for (const e of object.failedTea) {
        message.failedTea.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: PrefixProperties): unknown {
    const obj: any = {};
    message.prefix !== undefined && (obj.prefix = message.prefix);
    message.currentCounter !== undefined &&
      (obj.currentCounter = message.currentCounter);
    if (message.teaInProgress) {
      obj.teaInProgress = message.teaInProgress.map((e) => e);
    } else {
      obj.teaInProgress = [];
    }
    if (message.failedTea) {
      obj.failedTea = message.failedTea.map((e) => e);
    } else {
      obj.failedTea = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<PrefixProperties>): PrefixProperties {
    const message = { ...basePrefixProperties } as PrefixProperties;
    message.teaInProgress = [];
    message.failedTea = [];
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = object.prefix;
    } else {
      message.prefix = undefined;
    }
    if (object.currentCounter !== undefined && object.currentCounter !== null) {
      message.currentCounter = object.currentCounter;
    } else {
      message.currentCounter = undefined;
    }
    if (object.teaInProgress !== undefined && object.teaInProgress !== null) {
      for (const e of object.teaInProgress) {
        message.teaInProgress.push(e);
      }
    }
    if (object.failedTea !== undefined && object.failedTea !== null) {
      for (const e of object.failedTea) {
        message.failedTea.push(e);
      }
    }
    return message;
  },
};

const baseReportTeaReq: object = { tea: "" };

export const ReportTeaReq = {
  encode(
    message: ReportTeaReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tea !== "") {
      writer.uint32(10).string(message.tea);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReportTeaReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReportTeaReq } as ReportTeaReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tea = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReportTeaReq {
    const message = { ...baseReportTeaReq } as ReportTeaReq;
    if (object.tea !== undefined && object.tea !== null) {
      message.tea = String(object.tea);
    } else {
      message.tea = "";
    }
    return message;
  },

  toJSON(message: ReportTeaReq): unknown {
    const obj: any = {};
    message.tea !== undefined && (obj.tea = message.tea);
    return obj;
  },

  fromPartial(object: DeepPartial<ReportTeaReq>): ReportTeaReq {
    const message = { ...baseReportTeaReq } as ReportTeaReq;
    if (object.tea !== undefined && object.tea !== null) {
      message.tea = object.tea;
    } else {
      message.tea = "";
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

const baseRetrieveByEntityReq: object = { domain: 0 };

export const RetrieveByEntityReq = {
  encode(
    message: RetrieveByEntityReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.domain !== 0) {
      writer.uint32(8).int32(message.domain);
    }
    if (message.entity !== undefined) {
      EntityMin.encode(message.entity, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RetrieveByEntityReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRetrieveByEntityReq } as RetrieveByEntityReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domain = reader.int32() as any;
          break;
        case 2:
          message.entity = EntityMin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RetrieveByEntityReq {
    const message = { ...baseRetrieveByEntityReq } as RetrieveByEntityReq;
    if (object.domain !== undefined && object.domain !== null) {
      message.domain = domainFromJSON(object.domain);
    } else {
      message.domain = 0;
    }
    if (object.entity !== undefined && object.entity !== null) {
      message.entity = EntityMin.fromJSON(object.entity);
    } else {
      message.entity = undefined;
    }
    return message;
  },

  toJSON(message: RetrieveByEntityReq): unknown {
    const obj: any = {};
    message.domain !== undefined && (obj.domain = domainToJSON(message.domain));
    message.entity !== undefined &&
      (obj.entity = message.entity
        ? EntityMin.toJSON(message.entity)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<RetrieveByEntityReq>): RetrieveByEntityReq {
    const message = { ...baseRetrieveByEntityReq } as RetrieveByEntityReq;
    if (object.domain !== undefined && object.domain !== null) {
      message.domain = object.domain;
    } else {
      message.domain = 0;
    }
    if (object.entity !== undefined && object.entity !== null) {
      message.entity = EntityMin.fromPartial(object.entity);
    } else {
      message.entity = undefined;
    }
    return message;
  },
};

const baseRetrieveByEntityIdReq: object = { domain: 0, entityId: "" };

export const RetrieveByEntityIdReq = {
  encode(
    message: RetrieveByEntityIdReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.domain !== 0) {
      writer.uint32(8).int32(message.domain);
    }
    if (message.entityId !== "") {
      writer.uint32(18).string(message.entityId);
    }
    if (message.entityType !== undefined) {
      writer.uint32(26).string(message.entityType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RetrieveByEntityIdReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRetrieveByEntityIdReq } as RetrieveByEntityIdReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domain = reader.int32() as any;
          break;
        case 2:
          message.entityId = reader.string();
          break;
        case 3:
          message.entityType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RetrieveByEntityIdReq {
    const message = { ...baseRetrieveByEntityIdReq } as RetrieveByEntityIdReq;
    if (object.domain !== undefined && object.domain !== null) {
      message.domain = domainFromJSON(object.domain);
    } else {
      message.domain = 0;
    }
    if (object.entityId !== undefined && object.entityId !== null) {
      message.entityId = String(object.entityId);
    } else {
      message.entityId = "";
    }
    if (object.entityType !== undefined && object.entityType !== null) {
      message.entityType = String(object.entityType);
    } else {
      message.entityType = undefined;
    }
    return message;
  },

  toJSON(message: RetrieveByEntityIdReq): unknown {
    const obj: any = {};
    message.domain !== undefined && (obj.domain = domainToJSON(message.domain));
    message.entityId !== undefined && (obj.entityId = message.entityId);
    message.entityType !== undefined && (obj.entityType = message.entityType);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RetrieveByEntityIdReq>
  ): RetrieveByEntityIdReq {
    const message = { ...baseRetrieveByEntityIdReq } as RetrieveByEntityIdReq;
    if (object.domain !== undefined && object.domain !== null) {
      message.domain = object.domain;
    } else {
      message.domain = 0;
    }
    if (object.entityId !== undefined && object.entityId !== null) {
      message.entityId = object.entityId;
    } else {
      message.entityId = "";
    }
    if (object.entityType !== undefined && object.entityType !== null) {
      message.entityType = object.entityType;
    } else {
      message.entityType = undefined;
    }
    return message;
  },
};

const baseRetrieveByIdentifierReq: object = {
  domain: 0,
  identifier: "",
  entityType: "",
};

export const RetrieveByIdentifierReq = {
  encode(
    message: RetrieveByIdentifierReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.domain !== 0) {
      writer.uint32(8).int32(message.domain);
    }
    if (message.identifier !== "") {
      writer.uint32(18).string(message.identifier);
    }
    if (message.entityType !== "") {
      writer.uint32(26).string(message.entityType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RetrieveByIdentifierReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRetrieveByIdentifierReq,
    } as RetrieveByIdentifierReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domain = reader.int32() as any;
          break;
        case 2:
          message.identifier = reader.string();
          break;
        case 3:
          message.entityType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RetrieveByIdentifierReq {
    const message = {
      ...baseRetrieveByIdentifierReq,
    } as RetrieveByIdentifierReq;
    if (object.domain !== undefined && object.domain !== null) {
      message.domain = domainFromJSON(object.domain);
    } else {
      message.domain = 0;
    }
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = String(object.identifier);
    } else {
      message.identifier = "";
    }
    if (object.entityType !== undefined && object.entityType !== null) {
      message.entityType = String(object.entityType);
    } else {
      message.entityType = "";
    }
    return message;
  },

  toJSON(message: RetrieveByIdentifierReq): unknown {
    const obj: any = {};
    message.domain !== undefined && (obj.domain = domainToJSON(message.domain));
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.entityType !== undefined && (obj.entityType = message.entityType);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RetrieveByIdentifierReq>
  ): RetrieveByIdentifierReq {
    const message = {
      ...baseRetrieveByIdentifierReq,
    } as RetrieveByIdentifierReq;
    if (object.domain !== undefined && object.domain !== null) {
      message.domain = object.domain;
    } else {
      message.domain = 0;
    }
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = object.identifier;
    } else {
      message.identifier = "";
    }
    if (object.entityType !== undefined && object.entityType !== null) {
      message.entityType = object.entityType;
    } else {
      message.entityType = "";
    }
    return message;
  },
};

const baseEntityMin: object = { entityType: "", akaUnit: "" };

export const EntityMin = {
  encode(
    message: EntityMin,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.entityType !== "") {
      writer.uint32(10).string(message.entityType);
    }
    if (message.akaUnit !== "") {
      writer.uint32(18).string(message.akaUnit);
    }
    if (message.personalNumber !== undefined) {
      writer.uint32(26).string(message.personalNumber);
    }
    if (message.identityCard !== undefined) {
      writer.uint32(34).string(message.identityCard);
    }
    if (message.goalUserId !== undefined) {
      writer.uint32(42).string(message.goalUserId);
    }
    if (message.firstName !== undefined) {
      writer.uint32(50).string(message.firstName);
    }
    if (message.lastName !== undefined) {
      writer.uint32(58).string(message.lastName);
    }
    if (message.employeeNumber !== undefined) {
      writer.uint32(66).string(message.employeeNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EntityMin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEntityMin } as EntityMin;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entityType = reader.string();
          break;
        case 2:
          message.akaUnit = reader.string();
          break;
        case 3:
          message.personalNumber = reader.string();
          break;
        case 4:
          message.identityCard = reader.string();
          break;
        case 5:
          message.goalUserId = reader.string();
          break;
        case 6:
          message.firstName = reader.string();
          break;
        case 7:
          message.lastName = reader.string();
          break;
        case 8:
          message.employeeNumber = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EntityMin {
    const message = { ...baseEntityMin } as EntityMin;
    if (object.entityType !== undefined && object.entityType !== null) {
      message.entityType = String(object.entityType);
    } else {
      message.entityType = "";
    }
    if (object.akaUnit !== undefined && object.akaUnit !== null) {
      message.akaUnit = String(object.akaUnit);
    } else {
      message.akaUnit = "";
    }
    if (object.personalNumber !== undefined && object.personalNumber !== null) {
      message.personalNumber = String(object.personalNumber);
    } else {
      message.personalNumber = undefined;
    }
    if (object.identityCard !== undefined && object.identityCard !== null) {
      message.identityCard = String(object.identityCard);
    } else {
      message.identityCard = undefined;
    }
    if (object.goalUserId !== undefined && object.goalUserId !== null) {
      message.goalUserId = String(object.goalUserId);
    } else {
      message.goalUserId = undefined;
    }
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
    if (object.employeeNumber !== undefined && object.employeeNumber !== null) {
      message.employeeNumber = String(object.employeeNumber);
    } else {
      message.employeeNumber = undefined;
    }
    return message;
  },

  toJSON(message: EntityMin): unknown {
    const obj: any = {};
    message.entityType !== undefined && (obj.entityType = message.entityType);
    message.akaUnit !== undefined && (obj.akaUnit = message.akaUnit);
    message.personalNumber !== undefined &&
      (obj.personalNumber = message.personalNumber);
    message.identityCard !== undefined &&
      (obj.identityCard = message.identityCard);
    message.goalUserId !== undefined && (obj.goalUserId = message.goalUserId);
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    message.employeeNumber !== undefined &&
      (obj.employeeNumber = message.employeeNumber);
    return obj;
  },

  fromPartial(object: DeepPartial<EntityMin>): EntityMin {
    const message = { ...baseEntityMin } as EntityMin;
    if (object.entityType !== undefined && object.entityType !== null) {
      message.entityType = object.entityType;
    } else {
      message.entityType = "";
    }
    if (object.akaUnit !== undefined && object.akaUnit !== null) {
      message.akaUnit = object.akaUnit;
    } else {
      message.akaUnit = "";
    }
    if (object.personalNumber !== undefined && object.personalNumber !== null) {
      message.personalNumber = object.personalNumber;
    } else {
      message.personalNumber = undefined;
    }
    if (object.identityCard !== undefined && object.identityCard !== null) {
      message.identityCard = object.identityCard;
    } else {
      message.identityCard = undefined;
    }
    if (object.goalUserId !== undefined && object.goalUserId !== null) {
      message.goalUserId = object.goalUserId;
    } else {
      message.goalUserId = undefined;
    }
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
    if (object.employeeNumber !== undefined && object.employeeNumber !== null) {
      message.employeeNumber = object.employeeNumber;
    } else {
      message.employeeNumber = undefined;
    }
    return message;
  },
};

export interface Tea {
  RetrieveTeaByOGId(request: RetrieveTeaByOGIdReq): Promise<TeaMessage>;
  RetrieveTeaByPrefix(request: RetrieveTeaByPrefixReq): Promise<TeaMessage>;
  RetrieveUPNByEntity(request: RetrieveByEntityReq): Promise<UPNMessage>;
  RetrieveUPNByEntityId(request: RetrieveByEntityIdReq): Promise<UPNMessage>;
  RetrieveUPNByIdentifier(
    request: RetrieveByIdentifierReq
  ): Promise<UPNMessage>;
  ReportTeaSuccess(request: ReportTeaReq): Promise<SuccessMessage>;
  ReportTeaFail(request: ReportTeaReq): Promise<SuccessMessage>;
  ThrowTea(request: ReportTeaReq): Promise<SuccessMessage>;
  GetPrefix(request: GetPrefixReq): Promise<Prefix>;
  AddPrefix(request: AddPrefixReq): Promise<Prefix>;
  UpdatePrefix(request: UpdatePrefixReq): Promise<Prefix>;
  DeletePrefix(request: DeletePrefixReq): Promise<SuccessMessage>;
  GetAllPrefixes(request: GetAllPrefixesReq): Promise<PrefixArray>;
  RetrieveBrol(request: RetrieveBrolReq): Promise<UPNMessage>;
}

export class TeaClientImpl implements Tea {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.RetrieveTeaByOGId = this.RetrieveTeaByOGId.bind(this);
    this.RetrieveTeaByPrefix = this.RetrieveTeaByPrefix.bind(this);
    this.RetrieveUPNByEntity = this.RetrieveUPNByEntity.bind(this);
    this.RetrieveUPNByEntityId = this.RetrieveUPNByEntityId.bind(this);
    this.RetrieveUPNByIdentifier = this.RetrieveUPNByIdentifier.bind(this);
    this.ReportTeaSuccess = this.ReportTeaSuccess.bind(this);
    this.ReportTeaFail = this.ReportTeaFail.bind(this);
    this.ThrowTea = this.ThrowTea.bind(this);
    this.GetPrefix = this.GetPrefix.bind(this);
    this.AddPrefix = this.AddPrefix.bind(this);
    this.UpdatePrefix = this.UpdatePrefix.bind(this);
    this.DeletePrefix = this.DeletePrefix.bind(this);
    this.GetAllPrefixes = this.GetAllPrefixes.bind(this);
    this.RetrieveBrol = this.RetrieveBrol.bind(this);
  }
  RetrieveTeaByOGId(request: RetrieveTeaByOGIdReq): Promise<TeaMessage> {
    const data = RetrieveTeaByOGIdReq.encode(request).finish();
    const promise = this.rpc.request("Tea.Tea", "RetrieveTeaByOGId", data);
    return promise.then((data) => TeaMessage.decode(new _m0.Reader(data)));
  }

  RetrieveTeaByPrefix(request: RetrieveTeaByPrefixReq): Promise<TeaMessage> {
    const data = RetrieveTeaByPrefixReq.encode(request).finish();
    const promise = this.rpc.request("Tea.Tea", "RetrieveTeaByPrefix", data);
    return promise.then((data) => TeaMessage.decode(new _m0.Reader(data)));
  }

  RetrieveUPNByEntity(request: RetrieveByEntityReq): Promise<UPNMessage> {
    const data = RetrieveByEntityReq.encode(request).finish();
    const promise = this.rpc.request("Tea.Tea", "RetrieveUPNByEntity", data);
    return promise.then((data) => UPNMessage.decode(new _m0.Reader(data)));
  }

  RetrieveUPNByEntityId(request: RetrieveByEntityIdReq): Promise<UPNMessage> {
    const data = RetrieveByEntityIdReq.encode(request).finish();
    const promise = this.rpc.request("Tea.Tea", "RetrieveUPNByEntityId", data);
    return promise.then((data) => UPNMessage.decode(new _m0.Reader(data)));
  }

  RetrieveUPNByIdentifier(
    request: RetrieveByIdentifierReq
  ): Promise<UPNMessage> {
    const data = RetrieveByIdentifierReq.encode(request).finish();
    const promise = this.rpc.request(
      "Tea.Tea",
      "RetrieveUPNByIdentifier",
      data
    );
    return promise.then((data) => UPNMessage.decode(new _m0.Reader(data)));
  }

  ReportTeaSuccess(request: ReportTeaReq): Promise<SuccessMessage> {
    const data = ReportTeaReq.encode(request).finish();
    const promise = this.rpc.request("Tea.Tea", "ReportTeaSuccess", data);
    return promise.then((data) => SuccessMessage.decode(new _m0.Reader(data)));
  }

  ReportTeaFail(request: ReportTeaReq): Promise<SuccessMessage> {
    const data = ReportTeaReq.encode(request).finish();
    const promise = this.rpc.request("Tea.Tea", "ReportTeaFail", data);
    return promise.then((data) => SuccessMessage.decode(new _m0.Reader(data)));
  }

  ThrowTea(request: ReportTeaReq): Promise<SuccessMessage> {
    const data = ReportTeaReq.encode(request).finish();
    const promise = this.rpc.request("Tea.Tea", "ThrowTea", data);
    return promise.then((data) => SuccessMessage.decode(new _m0.Reader(data)));
  }

  GetPrefix(request: GetPrefixReq): Promise<Prefix> {
    const data = GetPrefixReq.encode(request).finish();
    const promise = this.rpc.request("Tea.Tea", "GetPrefix", data);
    return promise.then((data) => Prefix.decode(new _m0.Reader(data)));
  }

  AddPrefix(request: AddPrefixReq): Promise<Prefix> {
    const data = AddPrefixReq.encode(request).finish();
    const promise = this.rpc.request("Tea.Tea", "AddPrefix", data);
    return promise.then((data) => Prefix.decode(new _m0.Reader(data)));
  }

  UpdatePrefix(request: UpdatePrefixReq): Promise<Prefix> {
    const data = UpdatePrefixReq.encode(request).finish();
    const promise = this.rpc.request("Tea.Tea", "UpdatePrefix", data);
    return promise.then((data) => Prefix.decode(new _m0.Reader(data)));
  }

  DeletePrefix(request: DeletePrefixReq): Promise<SuccessMessage> {
    const data = DeletePrefixReq.encode(request).finish();
    const promise = this.rpc.request("Tea.Tea", "DeletePrefix", data);
    return promise.then((data) => SuccessMessage.decode(new _m0.Reader(data)));
  }

  GetAllPrefixes(request: GetAllPrefixesReq): Promise<PrefixArray> {
    const data = GetAllPrefixesReq.encode(request).finish();
    const promise = this.rpc.request("Tea.Tea", "GetAllPrefixes", data);
    return promise.then((data) => PrefixArray.decode(new _m0.Reader(data)));
  }

  RetrieveBrol(request: RetrieveBrolReq): Promise<UPNMessage> {
    const data = RetrieveBrolReq.encode(request).finish();
    const promise = this.rpc.request("Tea.Tea", "RetrieveBrol", data);
    return promise.then((data) => UPNMessage.decode(new _m0.Reader(data)));
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
