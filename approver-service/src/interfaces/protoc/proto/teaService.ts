/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Entity } from "../proto/kartoffelService";

export const protobufPackage = "Tea";

export enum Network {
  SECURITY = 0,
  COMMANDER = 1,
  UNRECOGNIZED = -1,
}

export function networkFromJSON(object: any): Network {
  switch (object) {
    case 0:
    case "SECURITY":
      return Network.SECURITY;
    case 1:
    case "COMMANDER":
      return Network.COMMANDER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Network.UNRECOGNIZED;
  }
}

export function networkToJSON(object: Network): string {
  switch (object) {
    case Network.SECURITY:
      return "SECURITY";
    case Network.COMMANDER:
      return "COMMANDER";
    default:
      return "UNKNOWN";
  }
}

export interface UpdateUnitReq {
  unitId: string;
  unitProperties: UnitProperties | undefined;
}

export interface DeleteUnitReq {
  unitId: string;
}

export interface GetUnitReq {
  unitId: string;
}

export interface Unit {
  unitId: string;
  name: string;
  prefix: string;
  currentCounter: string;
  teaInProgress: string[];
  failedTea: string[];
}

export interface UnitProperties {
  unitId?: string | undefined;
  name?: string | undefined;
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

export interface RetrieveTeaAndUPNByEntityReq {
  unitId: string;
  network: Network;
  entity: Entity | undefined;
}

export interface RetrieveTeaAndUPNByEntityIdReq {
  unitId: string;
  network: Network;
  entityId: string;
}

export interface TeaAndUPN {
  tea: string;
  upn: string;
}

const baseUpdateUnitReq: object = { unitId: "" };

export const UpdateUnitReq = {
  encode(
    message: UpdateUnitReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.unitId !== "") {
      writer.uint32(10).string(message.unitId);
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
          message.unitId = reader.string();
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
    if (object.unitId !== undefined && object.unitId !== null) {
      message.unitId = String(object.unitId);
    } else {
      message.unitId = "";
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
    message.unitId !== undefined && (obj.unitId = message.unitId);
    message.unitProperties !== undefined &&
      (obj.unitProperties = message.unitProperties
        ? UnitProperties.toJSON(message.unitProperties)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<UpdateUnitReq>): UpdateUnitReq {
    const message = { ...baseUpdateUnitReq } as UpdateUnitReq;
    if (object.unitId !== undefined && object.unitId !== null) {
      message.unitId = object.unitId;
    } else {
      message.unitId = "";
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

const baseDeleteUnitReq: object = { unitId: "" };

export const DeleteUnitReq = {
  encode(
    message: DeleteUnitReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.unitId !== "") {
      writer.uint32(10).string(message.unitId);
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
          message.unitId = reader.string();
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
    if (object.unitId !== undefined && object.unitId !== null) {
      message.unitId = String(object.unitId);
    } else {
      message.unitId = "";
    }
    return message;
  },

  toJSON(message: DeleteUnitReq): unknown {
    const obj: any = {};
    message.unitId !== undefined && (obj.unitId = message.unitId);
    return obj;
  },

  fromPartial(object: DeepPartial<DeleteUnitReq>): DeleteUnitReq {
    const message = { ...baseDeleteUnitReq } as DeleteUnitReq;
    if (object.unitId !== undefined && object.unitId !== null) {
      message.unitId = object.unitId;
    } else {
      message.unitId = "";
    }
    return message;
  },
};

const baseGetUnitReq: object = { unitId: "" };

export const GetUnitReq = {
  encode(
    message: GetUnitReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.unitId !== "") {
      writer.uint32(10).string(message.unitId);
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
          message.unitId = reader.string();
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
    if (object.unitId !== undefined && object.unitId !== null) {
      message.unitId = String(object.unitId);
    } else {
      message.unitId = "";
    }
    return message;
  },

  toJSON(message: GetUnitReq): unknown {
    const obj: any = {};
    message.unitId !== undefined && (obj.unitId = message.unitId);
    return obj;
  },

  fromPartial(object: DeepPartial<GetUnitReq>): GetUnitReq {
    const message = { ...baseGetUnitReq } as GetUnitReq;
    if (object.unitId !== undefined && object.unitId !== null) {
      message.unitId = object.unitId;
    } else {
      message.unitId = "";
    }
    return message;
  },
};

const baseUnit: object = {
  unitId: "",
  name: "",
  prefix: "",
  currentCounter: "",
  teaInProgress: "",
  failedTea: "",
};

export const Unit = {
  encode(message: Unit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.unitId !== "") {
      writer.uint32(10).string(message.unitId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.prefix !== "") {
      writer.uint32(26).string(message.prefix);
    }
    if (message.currentCounter !== "") {
      writer.uint32(34).string(message.currentCounter);
    }
    for (const v of message.teaInProgress) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.failedTea) {
      writer.uint32(50).string(v!);
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
          message.unitId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.prefix = reader.string();
          break;
        case 4:
          message.currentCounter = reader.string();
          break;
        case 5:
          message.teaInProgress.push(reader.string());
          break;
        case 6:
          message.failedTea.push(reader.string());
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
    if (object.unitId !== undefined && object.unitId !== null) {
      message.unitId = String(object.unitId);
    } else {
      message.unitId = "";
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
    if (object.currentCounter !== undefined && object.currentCounter !== null) {
      message.currentCounter = String(object.currentCounter);
    } else {
      message.currentCounter = "";
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

  toJSON(message: Unit): unknown {
    const obj: any = {};
    message.unitId !== undefined && (obj.unitId = message.unitId);
    message.name !== undefined && (obj.name = message.name);
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

  fromPartial(object: DeepPartial<Unit>): Unit {
    const message = { ...baseUnit } as Unit;
    message.teaInProgress = [];
    message.failedTea = [];
    if (object.unitId !== undefined && object.unitId !== null) {
      message.unitId = object.unitId;
    } else {
      message.unitId = "";
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
    if (object.currentCounter !== undefined && object.currentCounter !== null) {
      message.currentCounter = object.currentCounter;
    } else {
      message.currentCounter = "";
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

const baseUnitProperties: object = { teaInProgress: "", failedTea: "" };

export const UnitProperties = {
  encode(
    message: UnitProperties,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.unitId !== undefined) {
      writer.uint32(10).string(message.unitId);
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    if (message.prefix !== undefined) {
      writer.uint32(26).string(message.prefix);
    }
    if (message.currentCounter !== undefined) {
      writer.uint32(34).string(message.currentCounter);
    }
    for (const v of message.teaInProgress) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.failedTea) {
      writer.uint32(50).string(v!);
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
          message.unitId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.prefix = reader.string();
          break;
        case 4:
          message.currentCounter = reader.string();
          break;
        case 5:
          message.teaInProgress.push(reader.string());
          break;
        case 6:
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
    if (object.unitId !== undefined && object.unitId !== null) {
      message.unitId = String(object.unitId);
    } else {
      message.unitId = undefined;
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
    message.unitId !== undefined && (obj.unitId = message.unitId);
    message.name !== undefined && (obj.name = message.name);
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

  fromPartial(object: DeepPartial<UnitProperties>): UnitProperties {
    const message = { ...baseUnitProperties } as UnitProperties;
    message.teaInProgress = [];
    message.failedTea = [];
    if (object.unitId !== undefined && object.unitId !== null) {
      message.unitId = object.unitId;
    } else {
      message.unitId = undefined;
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

const baseRetrieveTeaAndUPNByEntityReq: object = { unitId: "", network: 0 };

export const RetrieveTeaAndUPNByEntityReq = {
  encode(
    message: RetrieveTeaAndUPNByEntityReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.unitId !== "") {
      writer.uint32(10).string(message.unitId);
    }
    if (message.network !== 0) {
      writer.uint32(16).int32(message.network);
    }
    if (message.entity !== undefined) {
      Entity.encode(message.entity, writer.uint32(26).fork()).ldelim();
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
          message.unitId = reader.string();
          break;
        case 2:
          message.network = reader.int32() as any;
          break;
        case 3:
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
    if (object.unitId !== undefined && object.unitId !== null) {
      message.unitId = String(object.unitId);
    } else {
      message.unitId = "";
    }
    if (object.network !== undefined && object.network !== null) {
      message.network = networkFromJSON(object.network);
    } else {
      message.network = 0;
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
    message.unitId !== undefined && (obj.unitId = message.unitId);
    message.network !== undefined &&
      (obj.network = networkToJSON(message.network));
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
    if (object.unitId !== undefined && object.unitId !== null) {
      message.unitId = object.unitId;
    } else {
      message.unitId = "";
    }
    if (object.network !== undefined && object.network !== null) {
      message.network = object.network;
    } else {
      message.network = 0;
    }
    if (object.entity !== undefined && object.entity !== null) {
      message.entity = Entity.fromPartial(object.entity);
    } else {
      message.entity = undefined;
    }
    return message;
  },
};

const baseRetrieveTeaAndUPNByEntityIdReq: object = {
  unitId: "",
  network: 0,
  entityId: "",
};

export const RetrieveTeaAndUPNByEntityIdReq = {
  encode(
    message: RetrieveTeaAndUPNByEntityIdReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.unitId !== "") {
      writer.uint32(10).string(message.unitId);
    }
    if (message.network !== 0) {
      writer.uint32(16).int32(message.network);
    }
    if (message.entityId !== "") {
      writer.uint32(26).string(message.entityId);
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
          message.unitId = reader.string();
          break;
        case 2:
          message.network = reader.int32() as any;
          break;
        case 3:
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
    if (object.unitId !== undefined && object.unitId !== null) {
      message.unitId = String(object.unitId);
    } else {
      message.unitId = "";
    }
    if (object.network !== undefined && object.network !== null) {
      message.network = networkFromJSON(object.network);
    } else {
      message.network = 0;
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
    message.unitId !== undefined && (obj.unitId = message.unitId);
    message.network !== undefined &&
      (obj.network = networkToJSON(message.network));
    message.entityId !== undefined && (obj.entityId = message.entityId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RetrieveTeaAndUPNByEntityIdReq>
  ): RetrieveTeaAndUPNByEntityIdReq {
    const message = {
      ...baseRetrieveTeaAndUPNByEntityIdReq,
    } as RetrieveTeaAndUPNByEntityIdReq;
    if (object.unitId !== undefined && object.unitId !== null) {
      message.unitId = object.unitId;
    } else {
      message.unitId = "";
    }
    if (object.network !== undefined && object.network !== null) {
      message.network = object.network;
    } else {
      message.network = 0;
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
  AddUnit(request: Unit): Promise<Unit>;
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

  AddUnit(request: Unit): Promise<Unit> {
    const data = Unit.encode(request).finish();
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
