/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Entity } from "../proto/kartoffelService";

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

export interface UpdateUnitReq {
  kartoffelId: string;
  unitProperties: UnitProperties | undefined;
}

export interface DeleteUnitReq {
  kartoffelId: string;
}

export interface GetUnitReq {
  kartoffelId: string;
}

export interface AddUnitReq {
  kartoffelId: string;
  name: string;
  prefix: string;
  /** gmail.com, after @ */
  oldDomainSuffix: string;
  /** gmail.com, after @ */
  newDomainSuffix: string;
  currentCounter: number;
}

export interface Unit {
  kartoffelId: string;
  name: string;
  /** 1234 */
  prefix: string;
  /** gmail.com, after @ */
  oldDomainSuffix: string;
  /** gmail.com, after @ */
  newDomainSuffix: string;
  currentCounter: number;
  teaInProgress: string[];
  failedTea: string[];
  createdAt: number;
}

export interface UnitProperties {
  kartoffelId?: string | undefined;
  name?: string | undefined;
  prefix?: string | undefined;
  /** gmail.com, after @ */
  oldDomainSuffix: string;
  /** gmail.com, after @ */
  newDomainSuffix: string;
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

export interface RetrieveTeaAndUPNByEntityReq {
  domain: Domain;
  entity: Entity | undefined;
}

export interface RetrieveTeaAndUPNByEntityIdReq {
  domain: Domain;
  entityId: string;
}

export interface TeaAndUPN {
  tea: string;
  upn: string;
}

const baseUpdateUnitReq: object = { kartoffelId: "" };

export const UpdateUnitReq = {
  encode(
    message: UpdateUnitReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.kartoffelId !== "") {
      writer.uint32(10).string(message.kartoffelId);
    }
    if (message.unitProperties !== undefined) {
      UnitProperties.encode(
        message.unitProperties,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUnitReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateUnitReq } as UpdateUnitReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kartoffelId = reader.string();
          break;
        case 2:
          message.unitProperties = UnitProperties.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateUnitReq {
    const message = { ...baseUpdateUnitReq } as UpdateUnitReq;
    if (object.kartoffelId !== undefined && object.kartoffelId !== null) {
      message.kartoffelId = String(object.kartoffelId);
    } else {
      message.kartoffelId = "";
    }
    if (object.unitProperties !== undefined && object.unitProperties !== null) {
      message.unitProperties = UnitProperties.fromJSON(object.unitProperties);
    } else {
      message.unitProperties = undefined;
    }
    return message;
  },

  toJSON(message: UpdateUnitReq): unknown {
    const obj: any = {};
    message.kartoffelId !== undefined &&
      (obj.kartoffelId = message.kartoffelId);
    message.unitProperties !== undefined &&
      (obj.unitProperties = message.unitProperties
        ? UnitProperties.toJSON(message.unitProperties)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<UpdateUnitReq>): UpdateUnitReq {
    const message = { ...baseUpdateUnitReq } as UpdateUnitReq;
    if (object.kartoffelId !== undefined && object.kartoffelId !== null) {
      message.kartoffelId = object.kartoffelId;
    } else {
      message.kartoffelId = "";
    }
    if (object.unitProperties !== undefined && object.unitProperties !== null) {
      message.unitProperties = UnitProperties.fromPartial(
        object.unitProperties
      );
    } else {
      message.unitProperties = undefined;
    }
    return message;
  },
};

const baseDeleteUnitReq: object = { kartoffelId: "" };

export const DeleteUnitReq = {
  encode(
    message: DeleteUnitReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.kartoffelId !== "") {
      writer.uint32(10).string(message.kartoffelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUnitReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteUnitReq } as DeleteUnitReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kartoffelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteUnitReq {
    const message = { ...baseDeleteUnitReq } as DeleteUnitReq;
    if (object.kartoffelId !== undefined && object.kartoffelId !== null) {
      message.kartoffelId = String(object.kartoffelId);
    } else {
      message.kartoffelId = "";
    }
    return message;
  },

  toJSON(message: DeleteUnitReq): unknown {
    const obj: any = {};
    message.kartoffelId !== undefined &&
      (obj.kartoffelId = message.kartoffelId);
    return obj;
  },

  fromPartial(object: DeepPartial<DeleteUnitReq>): DeleteUnitReq {
    const message = { ...baseDeleteUnitReq } as DeleteUnitReq;
    if (object.kartoffelId !== undefined && object.kartoffelId !== null) {
      message.kartoffelId = object.kartoffelId;
    } else {
      message.kartoffelId = "";
    }
    return message;
  },
};

const baseGetUnitReq: object = { kartoffelId: "" };

export const GetUnitReq = {
  encode(
    message: GetUnitReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.kartoffelId !== "") {
      writer.uint32(10).string(message.kartoffelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUnitReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetUnitReq } as GetUnitReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kartoffelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetUnitReq {
    const message = { ...baseGetUnitReq } as GetUnitReq;
    if (object.kartoffelId !== undefined && object.kartoffelId !== null) {
      message.kartoffelId = String(object.kartoffelId);
    } else {
      message.kartoffelId = "";
    }
    return message;
  },

  toJSON(message: GetUnitReq): unknown {
    const obj: any = {};
    message.kartoffelId !== undefined &&
      (obj.kartoffelId = message.kartoffelId);
    return obj;
  },

  fromPartial(object: DeepPartial<GetUnitReq>): GetUnitReq {
    const message = { ...baseGetUnitReq } as GetUnitReq;
    if (object.kartoffelId !== undefined && object.kartoffelId !== null) {
      message.kartoffelId = object.kartoffelId;
    } else {
      message.kartoffelId = "";
    }
    return message;
  },
};

const baseAddUnitReq: object = {
  kartoffelId: "",
  name: "",
  prefix: "",
  oldDomainSuffix: "",
  newDomainSuffix: "",
  currentCounter: 0,
};

export const AddUnitReq = {
  encode(
    message: AddUnitReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.kartoffelId !== "") {
      writer.uint32(10).string(message.kartoffelId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.prefix !== "") {
      writer.uint32(26).string(message.prefix);
    }
    if (message.oldDomainSuffix !== "") {
      writer.uint32(34).string(message.oldDomainSuffix);
    }
    if (message.newDomainSuffix !== "") {
      writer.uint32(42).string(message.newDomainSuffix);
    }
    if (message.currentCounter !== 0) {
      writer.uint32(48).int32(message.currentCounter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddUnitReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddUnitReq } as AddUnitReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kartoffelId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.prefix = reader.string();
          break;
        case 4:
          message.oldDomainSuffix = reader.string();
          break;
        case 5:
          message.newDomainSuffix = reader.string();
          break;
        case 6:
          message.currentCounter = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddUnitReq {
    const message = { ...baseAddUnitReq } as AddUnitReq;
    if (object.kartoffelId !== undefined && object.kartoffelId !== null) {
      message.kartoffelId = String(object.kartoffelId);
    } else {
      message.kartoffelId = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = String(object.prefix);
    } else {
      message.prefix = "";
    }
    if (
      object.oldDomainSuffix !== undefined &&
      object.oldDomainSuffix !== null
    ) {
      message.oldDomainSuffix = String(object.oldDomainSuffix);
    } else {
      message.oldDomainSuffix = "";
    }
    if (
      object.newDomainSuffix !== undefined &&
      object.newDomainSuffix !== null
    ) {
      message.newDomainSuffix = String(object.newDomainSuffix);
    } else {
      message.newDomainSuffix = "";
    }
    if (object.currentCounter !== undefined && object.currentCounter !== null) {
      message.currentCounter = Number(object.currentCounter);
    } else {
      message.currentCounter = 0;
    }
    return message;
  },

  toJSON(message: AddUnitReq): unknown {
    const obj: any = {};
    message.kartoffelId !== undefined &&
      (obj.kartoffelId = message.kartoffelId);
    message.name !== undefined && (obj.name = message.name);
    message.prefix !== undefined && (obj.prefix = message.prefix);
    message.oldDomainSuffix !== undefined &&
      (obj.oldDomainSuffix = message.oldDomainSuffix);
    message.newDomainSuffix !== undefined &&
      (obj.newDomainSuffix = message.newDomainSuffix);
    message.currentCounter !== undefined &&
      (obj.currentCounter = message.currentCounter);
    return obj;
  },

  fromPartial(object: DeepPartial<AddUnitReq>): AddUnitReq {
    const message = { ...baseAddUnitReq } as AddUnitReq;
    if (object.kartoffelId !== undefined && object.kartoffelId !== null) {
      message.kartoffelId = object.kartoffelId;
    } else {
      message.kartoffelId = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = object.prefix;
    } else {
      message.prefix = "";
    }
    if (
      object.oldDomainSuffix !== undefined &&
      object.oldDomainSuffix !== null
    ) {
      message.oldDomainSuffix = object.oldDomainSuffix;
    } else {
      message.oldDomainSuffix = "";
    }
    if (
      object.newDomainSuffix !== undefined &&
      object.newDomainSuffix !== null
    ) {
      message.newDomainSuffix = object.newDomainSuffix;
    } else {
      message.newDomainSuffix = "";
    }
    if (object.currentCounter !== undefined && object.currentCounter !== null) {
      message.currentCounter = object.currentCounter;
    } else {
      message.currentCounter = 0;
    }
    return message;
  },
};

const baseUnit: object = {
  kartoffelId: "",
  name: "",
  prefix: "",
  oldDomainSuffix: "",
  newDomainSuffix: "",
  currentCounter: 0,
  teaInProgress: "",
  failedTea: "",
  createdAt: 0,
};

export const Unit = {
  encode(message: Unit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kartoffelId !== "") {
      writer.uint32(10).string(message.kartoffelId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.prefix !== "") {
      writer.uint32(26).string(message.prefix);
    }
    if (message.oldDomainSuffix !== "") {
      writer.uint32(34).string(message.oldDomainSuffix);
    }
    if (message.newDomainSuffix !== "") {
      writer.uint32(42).string(message.newDomainSuffix);
    }
    if (message.currentCounter !== 0) {
      writer.uint32(48).int32(message.currentCounter);
    }
    for (const v of message.teaInProgress) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.failedTea) {
      writer.uint32(66).string(v!);
    }
    if (message.createdAt !== 0) {
      writer.uint32(72).int64(message.createdAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Unit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUnit } as Unit;
    message.teaInProgress = [];
    message.failedTea = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kartoffelId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.prefix = reader.string();
          break;
        case 4:
          message.oldDomainSuffix = reader.string();
          break;
        case 5:
          message.newDomainSuffix = reader.string();
          break;
        case 6:
          message.currentCounter = reader.int32();
          break;
        case 7:
          message.teaInProgress.push(reader.string());
          break;
        case 8:
          message.failedTea.push(reader.string());
          break;
        case 9:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Unit {
    const message = { ...baseUnit } as Unit;
    message.teaInProgress = [];
    message.failedTea = [];
    if (object.kartoffelId !== undefined && object.kartoffelId !== null) {
      message.kartoffelId = String(object.kartoffelId);
    } else {
      message.kartoffelId = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = String(object.prefix);
    } else {
      message.prefix = "";
    }
    if (
      object.oldDomainSuffix !== undefined &&
      object.oldDomainSuffix !== null
    ) {
      message.oldDomainSuffix = String(object.oldDomainSuffix);
    } else {
      message.oldDomainSuffix = "";
    }
    if (
      object.newDomainSuffix !== undefined &&
      object.newDomainSuffix !== null
    ) {
      message.newDomainSuffix = String(object.newDomainSuffix);
    } else {
      message.newDomainSuffix = "";
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

  toJSON(message: Unit): unknown {
    const obj: any = {};
    message.kartoffelId !== undefined &&
      (obj.kartoffelId = message.kartoffelId);
    message.name !== undefined && (obj.name = message.name);
    message.prefix !== undefined && (obj.prefix = message.prefix);
    message.oldDomainSuffix !== undefined &&
      (obj.oldDomainSuffix = message.oldDomainSuffix);
    message.newDomainSuffix !== undefined &&
      (obj.newDomainSuffix = message.newDomainSuffix);
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

  fromPartial(object: DeepPartial<Unit>): Unit {
    const message = { ...baseUnit } as Unit;
    message.teaInProgress = [];
    message.failedTea = [];
    if (object.kartoffelId !== undefined && object.kartoffelId !== null) {
      message.kartoffelId = object.kartoffelId;
    } else {
      message.kartoffelId = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = object.prefix;
    } else {
      message.prefix = "";
    }
    if (
      object.oldDomainSuffix !== undefined &&
      object.oldDomainSuffix !== null
    ) {
      message.oldDomainSuffix = object.oldDomainSuffix;
    } else {
      message.oldDomainSuffix = "";
    }
    if (
      object.newDomainSuffix !== undefined &&
      object.newDomainSuffix !== null
    ) {
      message.newDomainSuffix = object.newDomainSuffix;
    } else {
      message.newDomainSuffix = "";
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

const baseUnitProperties: object = {
  oldDomainSuffix: "",
  newDomainSuffix: "",
  teaInProgress: "",
  failedTea: "",
};

export const UnitProperties = {
  encode(
    message: UnitProperties,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.kartoffelId !== undefined) {
      writer.uint32(10).string(message.kartoffelId);
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    if (message.prefix !== undefined) {
      writer.uint32(26).string(message.prefix);
    }
    if (message.oldDomainSuffix !== "") {
      writer.uint32(34).string(message.oldDomainSuffix);
    }
    if (message.newDomainSuffix !== "") {
      writer.uint32(42).string(message.newDomainSuffix);
    }
    if (message.currentCounter !== undefined) {
      writer.uint32(50).string(message.currentCounter);
    }
    for (const v of message.teaInProgress) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.failedTea) {
      writer.uint32(66).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnitProperties {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUnitProperties } as UnitProperties;
    message.teaInProgress = [];
    message.failedTea = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kartoffelId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.prefix = reader.string();
          break;
        case 4:
          message.oldDomainSuffix = reader.string();
          break;
        case 5:
          message.newDomainSuffix = reader.string();
          break;
        case 6:
          message.currentCounter = reader.string();
          break;
        case 7:
          message.teaInProgress.push(reader.string());
          break;
        case 8:
          message.failedTea.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnitProperties {
    const message = { ...baseUnitProperties } as UnitProperties;
    message.teaInProgress = [];
    message.failedTea = [];
    if (object.kartoffelId !== undefined && object.kartoffelId !== null) {
      message.kartoffelId = String(object.kartoffelId);
    } else {
      message.kartoffelId = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = undefined;
    }
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = String(object.prefix);
    } else {
      message.prefix = undefined;
    }
    if (
      object.oldDomainSuffix !== undefined &&
      object.oldDomainSuffix !== null
    ) {
      message.oldDomainSuffix = String(object.oldDomainSuffix);
    } else {
      message.oldDomainSuffix = "";
    }
    if (
      object.newDomainSuffix !== undefined &&
      object.newDomainSuffix !== null
    ) {
      message.newDomainSuffix = String(object.newDomainSuffix);
    } else {
      message.newDomainSuffix = "";
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

  toJSON(message: UnitProperties): unknown {
    const obj: any = {};
    message.kartoffelId !== undefined &&
      (obj.kartoffelId = message.kartoffelId);
    message.name !== undefined && (obj.name = message.name);
    message.prefix !== undefined && (obj.prefix = message.prefix);
    message.oldDomainSuffix !== undefined &&
      (obj.oldDomainSuffix = message.oldDomainSuffix);
    message.newDomainSuffix !== undefined &&
      (obj.newDomainSuffix = message.newDomainSuffix);
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

  fromPartial(object: DeepPartial<UnitProperties>): UnitProperties {
    const message = { ...baseUnitProperties } as UnitProperties;
    message.teaInProgress = [];
    message.failedTea = [];
    if (object.kartoffelId !== undefined && object.kartoffelId !== null) {
      message.kartoffelId = object.kartoffelId;
    } else {
      message.kartoffelId = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = undefined;
    }
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = object.prefix;
    } else {
      message.prefix = undefined;
    }
    if (
      object.oldDomainSuffix !== undefined &&
      object.oldDomainSuffix !== null
    ) {
      message.oldDomainSuffix = object.oldDomainSuffix;
    } else {
      message.oldDomainSuffix = "";
    }
    if (
      object.newDomainSuffix !== undefined &&
      object.newDomainSuffix !== null
    ) {
      message.newDomainSuffix = object.newDomainSuffix;
    } else {
      message.newDomainSuffix = "";
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

const baseRetrieveTeaAndUPNByEntityReq: object = { domain: 0 };

export const RetrieveTeaAndUPNByEntityReq = {
  encode(
    message: RetrieveTeaAndUPNByEntityReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.domain !== 0) {
      writer.uint32(8).int32(message.domain);
    }
    if (message.entity !== undefined) {
      Entity.encode(message.entity, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RetrieveTeaAndUPNByEntityReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRetrieveTeaAndUPNByEntityReq,
    } as RetrieveTeaAndUPNByEntityReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domain = reader.int32() as any;
          break;
        case 2:
          message.entity = Entity.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RetrieveTeaAndUPNByEntityReq {
    const message = {
      ...baseRetrieveTeaAndUPNByEntityReq,
    } as RetrieveTeaAndUPNByEntityReq;
    if (object.domain !== undefined && object.domain !== null) {
      message.domain = domainFromJSON(object.domain);
    } else {
      message.domain = 0;
    }
    if (object.entity !== undefined && object.entity !== null) {
      message.entity = Entity.fromJSON(object.entity);
    } else {
      message.entity = undefined;
    }
    return message;
  },

  toJSON(message: RetrieveTeaAndUPNByEntityReq): unknown {
    const obj: any = {};
    message.domain !== undefined && (obj.domain = domainToJSON(message.domain));
    message.entity !== undefined &&
      (obj.entity = message.entity ? Entity.toJSON(message.entity) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RetrieveTeaAndUPNByEntityReq>
  ): RetrieveTeaAndUPNByEntityReq {
    const message = {
      ...baseRetrieveTeaAndUPNByEntityReq,
    } as RetrieveTeaAndUPNByEntityReq;
    if (object.domain !== undefined && object.domain !== null) {
      message.domain = object.domain;
    } else {
      message.domain = 0;
    }
    if (object.entity !== undefined && object.entity !== null) {
      message.entity = Entity.fromPartial(object.entity);
    } else {
      message.entity = undefined;
    }
    return message;
  },
};

const baseRetrieveTeaAndUPNByEntityIdReq: object = { domain: 0, entityId: "" };

export const RetrieveTeaAndUPNByEntityIdReq = {
  encode(
    message: RetrieveTeaAndUPNByEntityIdReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.domain !== 0) {
      writer.uint32(8).int32(message.domain);
    }
    if (message.entityId !== "") {
      writer.uint32(18).string(message.entityId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RetrieveTeaAndUPNByEntityIdReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRetrieveTeaAndUPNByEntityIdReq,
    } as RetrieveTeaAndUPNByEntityIdReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domain = reader.int32() as any;
          break;
        case 2:
          message.entityId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RetrieveTeaAndUPNByEntityIdReq {
    const message = {
      ...baseRetrieveTeaAndUPNByEntityIdReq,
    } as RetrieveTeaAndUPNByEntityIdReq;
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
    return message;
  },

  toJSON(message: RetrieveTeaAndUPNByEntityIdReq): unknown {
    const obj: any = {};
    message.domain !== undefined && (obj.domain = domainToJSON(message.domain));
    message.entityId !== undefined && (obj.entityId = message.entityId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RetrieveTeaAndUPNByEntityIdReq>
  ): RetrieveTeaAndUPNByEntityIdReq {
    const message = {
      ...baseRetrieveTeaAndUPNByEntityIdReq,
    } as RetrieveTeaAndUPNByEntityIdReq;
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
    return message;
  },
};

const baseTeaAndUPN: object = { tea: "", upn: "" };

export const TeaAndUPN = {
  encode(
    message: TeaAndUPN,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tea !== "") {
      writer.uint32(10).string(message.tea);
    }
    if (message.upn !== "") {
      writer.uint32(18).string(message.upn);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TeaAndUPN {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTeaAndUPN } as TeaAndUPN;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tea = reader.string();
          break;
        case 2:
          message.upn = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TeaAndUPN {
    const message = { ...baseTeaAndUPN } as TeaAndUPN;
    if (object.tea !== undefined && object.tea !== null) {
      message.tea = String(object.tea);
    } else {
      message.tea = "";
    }
    if (object.upn !== undefined && object.upn !== null) {
      message.upn = String(object.upn);
    } else {
      message.upn = "";
    }
    return message;
  },

  toJSON(message: TeaAndUPN): unknown {
    const obj: any = {};
    message.tea !== undefined && (obj.tea = message.tea);
    message.upn !== undefined && (obj.upn = message.upn);
    return obj;
  },

  fromPartial(object: DeepPartial<TeaAndUPN>): TeaAndUPN {
    const message = { ...baseTeaAndUPN } as TeaAndUPN;
    if (object.tea !== undefined && object.tea !== null) {
      message.tea = object.tea;
    } else {
      message.tea = "";
    }
    if (object.upn !== undefined && object.upn !== null) {
      message.upn = object.upn;
    } else {
      message.upn = "";
    }
    return message;
  },
};

export interface Tea {
  RetrieveTeaAndUPNByEntity(
    request: RetrieveTeaAndUPNByEntityReq
  ): Promise<TeaAndUPN>;
  RetrieveTeaAndUPNByEntityId(
    request: RetrieveTeaAndUPNByEntityIdReq
  ): Promise<TeaAndUPN>;
  ReportTeaSuccess(request: ReportTeaReq): Promise<SuccessMessage>;
  ReportTeaFail(request: ReportTeaReq): Promise<SuccessMessage>;
  GetUnit(request: GetUnitReq): Promise<Unit>;
  AddUnit(request: AddUnitReq): Promise<Unit>;
  UpdateUnit(request: UpdateUnitReq): Promise<Unit>;
  DeleteUnit(request: DeleteUnitReq): Promise<SuccessMessage>;
}

export class TeaClientImpl implements Tea {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.RetrieveTeaAndUPNByEntity = this.RetrieveTeaAndUPNByEntity.bind(this);
    this.RetrieveTeaAndUPNByEntityId =
      this.RetrieveTeaAndUPNByEntityId.bind(this);
    this.ReportTeaSuccess = this.ReportTeaSuccess.bind(this);
    this.ReportTeaFail = this.ReportTeaFail.bind(this);
    this.GetUnit = this.GetUnit.bind(this);
    this.AddUnit = this.AddUnit.bind(this);
    this.UpdateUnit = this.UpdateUnit.bind(this);
    this.DeleteUnit = this.DeleteUnit.bind(this);
  }
  RetrieveTeaAndUPNByEntity(
    request: RetrieveTeaAndUPNByEntityReq
  ): Promise<TeaAndUPN> {
    const data = RetrieveTeaAndUPNByEntityReq.encode(request).finish();
    const promise = this.rpc.request(
      "Tea.Tea",
      "RetrieveTeaAndUPNByEntity",
      data
    );
    return promise.then((data) => TeaAndUPN.decode(new _m0.Reader(data)));
  }

  RetrieveTeaAndUPNByEntityId(
    request: RetrieveTeaAndUPNByEntityIdReq
  ): Promise<TeaAndUPN> {
    const data = RetrieveTeaAndUPNByEntityIdReq.encode(request).finish();
    const promise = this.rpc.request(
      "Tea.Tea",
      "RetrieveTeaAndUPNByEntityId",
      data
    );
    return promise.then((data) => TeaAndUPN.decode(new _m0.Reader(data)));
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

  GetUnit(request: GetUnitReq): Promise<Unit> {
    const data = GetUnitReq.encode(request).finish();
    const promise = this.rpc.request("Tea.Tea", "GetUnit", data);
    return promise.then((data) => Unit.decode(new _m0.Reader(data)));
  }

  AddUnit(request: AddUnitReq): Promise<Unit> {
    const data = AddUnitReq.encode(request).finish();
    const promise = this.rpc.request("Tea.Tea", "AddUnit", data);
    return promise.then((data) => Unit.decode(new _m0.Reader(data)));
  }

  UpdateUnit(request: UpdateUnitReq): Promise<Unit> {
    const data = UpdateUnitReq.encode(request).finish();
    const promise = this.rpc.request("Tea.Tea", "UpdateUnit", data);
    return promise.then((data) => Unit.decode(new _m0.Reader(data)));
  }

  DeleteUnit(request: DeleteUnitReq): Promise<SuccessMessage> {
    const data = DeleteUnitReq.encode(request).finish();
    const promise = this.rpc.request("Tea.Tea", "DeleteUnit", data);
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
