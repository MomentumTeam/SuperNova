/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  Request,
  RequestStatus,
  CreateRoleBulkRes,
  ChangeRoleHierarchyBulkRes,
  CreateRoleBulkReq,
  ChangeRoleHierarchyBulkReq,
  requestStatusFromJSON,
  requestStatusToJSON,
} from "./requestService";

export const protobufPackage = "BulkService";

export enum BulkType {
  CREATE_ROLE_REQUEST = 0,
  CHANGE_ROLE_HIERARCHY_REQUEST = 1,
  UNRECOGNIZED = -1,
}

export function bulkTypeFromJSON(object: any): BulkType {
  switch (object) {
    case 0:
    case "CREATE_ROLE_REQUEST":
      return BulkType.CREATE_ROLE_REQUEST;
    case 1:
    case "CHANGE_ROLE_HIERARCHY_REQUEST":
      return BulkType.CHANGE_ROLE_HIERARCHY_REQUEST;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BulkType.UNRECOGNIZED;
  }
}

export function bulkTypeToJSON(object: BulkType): string {
  switch (object) {
    case BulkType.CREATE_ROLE_REQUEST:
      return "CREATE_ROLE_REQUEST";
    case BulkType.CHANGE_ROLE_HIERARCHY_REQUEST:
      return "CHANGE_ROLE_HIERARCHY_REQUEST";
    default:
      return "UNKNOWN";
  }
}

export interface IsBulkFileValidReq {
  fileName: string;
  type: BulkType;
}

export interface IsBulkFileValidRes {
  /** repeated int32 errorRows = 2; */
  isFileValid: boolean;
}

export interface GetBulkRequestExampleReq {
  bulkType: BulkType;
}

export interface GetBulkRequestExampleRes {
  bulkFileName: string;
}

export interface GetBulkRequestByIdReq {
  id: string;
}

export interface DetailedCreateRoleBulkRequest {
  request: Request | undefined;
  rows: CreateRoleRow[];
}

export interface DetailedChangeRoleHierarchyBulkRequest {
  request: Request | undefined;
  rows: ChangeRoleHierarchyRow[];
}

export interface CreateRoleRow {
  id: string;
  jobTitle: string;
  clearance: string;
  roleEntityType: string;
  rowNumber: string;
  status?: RequestStatus | undefined;
}

export interface ChangeRoleHierarchyRow {
  id: string;
  roleId: string;
  currentJobTitle: string;
  newJobTitle: string;
  rowNumber: string;
  status?: RequestStatus | undefined;
}

const baseIsBulkFileValidReq: object = { fileName: "", type: 0 };

export const IsBulkFileValidReq = {
  encode(
    message: IsBulkFileValidReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fileName !== "") {
      writer.uint32(10).string(message.fileName);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IsBulkFileValidReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIsBulkFileValidReq } as IsBulkFileValidReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fileName = reader.string();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IsBulkFileValidReq {
    const message = { ...baseIsBulkFileValidReq } as IsBulkFileValidReq;
    if (object.fileName !== undefined && object.fileName !== null) {
      message.fileName = String(object.fileName);
    } else {
      message.fileName = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = bulkTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    return message;
  },

  toJSON(message: IsBulkFileValidReq): unknown {
    const obj: any = {};
    message.fileName !== undefined && (obj.fileName = message.fileName);
    message.type !== undefined && (obj.type = bulkTypeToJSON(message.type));
    return obj;
  },

  fromPartial(object: DeepPartial<IsBulkFileValidReq>): IsBulkFileValidReq {
    const message = { ...baseIsBulkFileValidReq } as IsBulkFileValidReq;
    if (object.fileName !== undefined && object.fileName !== null) {
      message.fileName = object.fileName;
    } else {
      message.fileName = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    return message;
  },
};

const baseIsBulkFileValidRes: object = { isFileValid: false };

export const IsBulkFileValidRes = {
  encode(
    message: IsBulkFileValidRes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.isFileValid === true) {
      writer.uint32(8).bool(message.isFileValid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IsBulkFileValidRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIsBulkFileValidRes } as IsBulkFileValidRes;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isFileValid = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IsBulkFileValidRes {
    const message = { ...baseIsBulkFileValidRes } as IsBulkFileValidRes;
    if (object.isFileValid !== undefined && object.isFileValid !== null) {
      message.isFileValid = Boolean(object.isFileValid);
    } else {
      message.isFileValid = false;
    }
    return message;
  },

  toJSON(message: IsBulkFileValidRes): unknown {
    const obj: any = {};
    message.isFileValid !== undefined &&
      (obj.isFileValid = message.isFileValid);
    return obj;
  },

  fromPartial(object: DeepPartial<IsBulkFileValidRes>): IsBulkFileValidRes {
    const message = { ...baseIsBulkFileValidRes } as IsBulkFileValidRes;
    if (object.isFileValid !== undefined && object.isFileValid !== null) {
      message.isFileValid = object.isFileValid;
    } else {
      message.isFileValid = false;
    }
    return message;
  },
};

const baseGetBulkRequestExampleReq: object = { bulkType: 0 };

export const GetBulkRequestExampleReq = {
  encode(
    message: GetBulkRequestExampleReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bulkType !== 0) {
      writer.uint32(8).int32(message.bulkType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetBulkRequestExampleReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetBulkRequestExampleReq,
    } as GetBulkRequestExampleReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bulkType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBulkRequestExampleReq {
    const message = {
      ...baseGetBulkRequestExampleReq,
    } as GetBulkRequestExampleReq;
    if (object.bulkType !== undefined && object.bulkType !== null) {
      message.bulkType = bulkTypeFromJSON(object.bulkType);
    } else {
      message.bulkType = 0;
    }
    return message;
  },

  toJSON(message: GetBulkRequestExampleReq): unknown {
    const obj: any = {};
    message.bulkType !== undefined &&
      (obj.bulkType = bulkTypeToJSON(message.bulkType));
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetBulkRequestExampleReq>
  ): GetBulkRequestExampleReq {
    const message = {
      ...baseGetBulkRequestExampleReq,
    } as GetBulkRequestExampleReq;
    if (object.bulkType !== undefined && object.bulkType !== null) {
      message.bulkType = object.bulkType;
    } else {
      message.bulkType = 0;
    }
    return message;
  },
};

const baseGetBulkRequestExampleRes: object = { bulkFileName: "" };

export const GetBulkRequestExampleRes = {
  encode(
    message: GetBulkRequestExampleRes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bulkFileName !== "") {
      writer.uint32(10).string(message.bulkFileName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetBulkRequestExampleRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetBulkRequestExampleRes,
    } as GetBulkRequestExampleRes;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bulkFileName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBulkRequestExampleRes {
    const message = {
      ...baseGetBulkRequestExampleRes,
    } as GetBulkRequestExampleRes;
    if (object.bulkFileName !== undefined && object.bulkFileName !== null) {
      message.bulkFileName = String(object.bulkFileName);
    } else {
      message.bulkFileName = "";
    }
    return message;
  },

  toJSON(message: GetBulkRequestExampleRes): unknown {
    const obj: any = {};
    message.bulkFileName !== undefined &&
      (obj.bulkFileName = message.bulkFileName);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetBulkRequestExampleRes>
  ): GetBulkRequestExampleRes {
    const message = {
      ...baseGetBulkRequestExampleRes,
    } as GetBulkRequestExampleRes;
    if (object.bulkFileName !== undefined && object.bulkFileName !== null) {
      message.bulkFileName = object.bulkFileName;
    } else {
      message.bulkFileName = "";
    }
    return message;
  },
};

const baseGetBulkRequestByIdReq: object = { id: "" };

export const GetBulkRequestByIdReq = {
  encode(
    message: GetBulkRequestByIdReq,
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
  ): GetBulkRequestByIdReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetBulkRequestByIdReq } as GetBulkRequestByIdReq;
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

  fromJSON(object: any): GetBulkRequestByIdReq {
    const message = { ...baseGetBulkRequestByIdReq } as GetBulkRequestByIdReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: GetBulkRequestByIdReq): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetBulkRequestByIdReq>
  ): GetBulkRequestByIdReq {
    const message = { ...baseGetBulkRequestByIdReq } as GetBulkRequestByIdReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
};

const baseDetailedCreateRoleBulkRequest: object = {};

export const DetailedCreateRoleBulkRequest = {
  encode(
    message: DetailedCreateRoleBulkRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.request !== undefined) {
      Request.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.rows) {
      CreateRoleRow.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DetailedCreateRoleBulkRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDetailedCreateRoleBulkRequest,
    } as DetailedCreateRoleBulkRequest;
    message.rows = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = Request.decode(reader, reader.uint32());
          break;
        case 2:
          message.rows.push(CreateRoleRow.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DetailedCreateRoleBulkRequest {
    const message = {
      ...baseDetailedCreateRoleBulkRequest,
    } as DetailedCreateRoleBulkRequest;
    message.rows = [];
    if (object.request !== undefined && object.request !== null) {
      message.request = Request.fromJSON(object.request);
    } else {
      message.request = undefined;
    }
    if (object.rows !== undefined && object.rows !== null) {
      for (const e of object.rows) {
        message.rows.push(CreateRoleRow.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: DetailedCreateRoleBulkRequest): unknown {
    const obj: any = {};
    message.request !== undefined &&
      (obj.request = message.request
        ? Request.toJSON(message.request)
        : undefined);
    if (message.rows) {
      obj.rows = message.rows.map((e) =>
        e ? CreateRoleRow.toJSON(e) : undefined
      );
    } else {
      obj.rows = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<DetailedCreateRoleBulkRequest>
  ): DetailedCreateRoleBulkRequest {
    const message = {
      ...baseDetailedCreateRoleBulkRequest,
    } as DetailedCreateRoleBulkRequest;
    message.rows = [];
    if (object.request !== undefined && object.request !== null) {
      message.request = Request.fromPartial(object.request);
    } else {
      message.request = undefined;
    }
    if (object.rows !== undefined && object.rows !== null) {
      for (const e of object.rows) {
        message.rows.push(CreateRoleRow.fromPartial(e));
      }
    }
    return message;
  },
};

const baseDetailedChangeRoleHierarchyBulkRequest: object = {};

export const DetailedChangeRoleHierarchyBulkRequest = {
  encode(
    message: DetailedChangeRoleHierarchyBulkRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.request !== undefined) {
      Request.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.rows) {
      ChangeRoleHierarchyRow.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DetailedChangeRoleHierarchyBulkRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDetailedChangeRoleHierarchyBulkRequest,
    } as DetailedChangeRoleHierarchyBulkRequest;
    message.rows = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = Request.decode(reader, reader.uint32());
          break;
        case 2:
          message.rows.push(
            ChangeRoleHierarchyRow.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DetailedChangeRoleHierarchyBulkRequest {
    const message = {
      ...baseDetailedChangeRoleHierarchyBulkRequest,
    } as DetailedChangeRoleHierarchyBulkRequest;
    message.rows = [];
    if (object.request !== undefined && object.request !== null) {
      message.request = Request.fromJSON(object.request);
    } else {
      message.request = undefined;
    }
    if (object.rows !== undefined && object.rows !== null) {
      for (const e of object.rows) {
        message.rows.push(ChangeRoleHierarchyRow.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: DetailedChangeRoleHierarchyBulkRequest): unknown {
    const obj: any = {};
    message.request !== undefined &&
      (obj.request = message.request
        ? Request.toJSON(message.request)
        : undefined);
    if (message.rows) {
      obj.rows = message.rows.map((e) =>
        e ? ChangeRoleHierarchyRow.toJSON(e) : undefined
      );
    } else {
      obj.rows = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<DetailedChangeRoleHierarchyBulkRequest>
  ): DetailedChangeRoleHierarchyBulkRequest {
    const message = {
      ...baseDetailedChangeRoleHierarchyBulkRequest,
    } as DetailedChangeRoleHierarchyBulkRequest;
    message.rows = [];
    if (object.request !== undefined && object.request !== null) {
      message.request = Request.fromPartial(object.request);
    } else {
      message.request = undefined;
    }
    if (object.rows !== undefined && object.rows !== null) {
      for (const e of object.rows) {
        message.rows.push(ChangeRoleHierarchyRow.fromPartial(e));
      }
    }
    return message;
  },
};

const baseCreateRoleRow: object = {
  id: "",
  jobTitle: "",
  clearance: "",
  roleEntityType: "",
  rowNumber: "",
};

export const CreateRoleRow = {
  encode(
    message: CreateRoleRow,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.jobTitle !== "") {
      writer.uint32(18).string(message.jobTitle);
    }
    if (message.clearance !== "") {
      writer.uint32(26).string(message.clearance);
    }
    if (message.roleEntityType !== "") {
      writer.uint32(34).string(message.roleEntityType);
    }
    if (message.rowNumber !== "") {
      writer.uint32(42).string(message.rowNumber);
    }
    if (message.status !== undefined) {
      writer.uint32(48).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateRoleRow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateRoleRow } as CreateRoleRow;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.jobTitle = reader.string();
          break;
        case 3:
          message.clearance = reader.string();
          break;
        case 4:
          message.roleEntityType = reader.string();
          break;
        case 5:
          message.rowNumber = reader.string();
          break;
        case 6:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateRoleRow {
    const message = { ...baseCreateRoleRow } as CreateRoleRow;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.jobTitle !== undefined && object.jobTitle !== null) {
      message.jobTitle = String(object.jobTitle);
    } else {
      message.jobTitle = "";
    }
    if (object.clearance !== undefined && object.clearance !== null) {
      message.clearance = String(object.clearance);
    } else {
      message.clearance = "";
    }
    if (object.roleEntityType !== undefined && object.roleEntityType !== null) {
      message.roleEntityType = String(object.roleEntityType);
    } else {
      message.roleEntityType = "";
    }
    if (object.rowNumber !== undefined && object.rowNumber !== null) {
      message.rowNumber = String(object.rowNumber);
    } else {
      message.rowNumber = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = requestStatusFromJSON(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  toJSON(message: CreateRoleRow): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.jobTitle !== undefined && (obj.jobTitle = message.jobTitle);
    message.clearance !== undefined && (obj.clearance = message.clearance);
    message.roleEntityType !== undefined &&
      (obj.roleEntityType = message.roleEntityType);
    message.rowNumber !== undefined && (obj.rowNumber = message.rowNumber);
    message.status !== undefined &&
      (obj.status =
        message.status !== undefined
          ? requestStatusToJSON(message.status)
          : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateRoleRow>): CreateRoleRow {
    const message = { ...baseCreateRoleRow } as CreateRoleRow;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.jobTitle !== undefined && object.jobTitle !== null) {
      message.jobTitle = object.jobTitle;
    } else {
      message.jobTitle = "";
    }
    if (object.clearance !== undefined && object.clearance !== null) {
      message.clearance = object.clearance;
    } else {
      message.clearance = "";
    }
    if (object.roleEntityType !== undefined && object.roleEntityType !== null) {
      message.roleEntityType = object.roleEntityType;
    } else {
      message.roleEntityType = "";
    }
    if (object.rowNumber !== undefined && object.rowNumber !== null) {
      message.rowNumber = object.rowNumber;
    } else {
      message.rowNumber = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = undefined;
    }
    return message;
  },
};

const baseChangeRoleHierarchyRow: object = {
  id: "",
  roleId: "",
  currentJobTitle: "",
  newJobTitle: "",
  rowNumber: "",
};

export const ChangeRoleHierarchyRow = {
  encode(
    message: ChangeRoleHierarchyRow,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.roleId !== "") {
      writer.uint32(18).string(message.roleId);
    }
    if (message.currentJobTitle !== "") {
      writer.uint32(26).string(message.currentJobTitle);
    }
    if (message.newJobTitle !== "") {
      writer.uint32(34).string(message.newJobTitle);
    }
    if (message.rowNumber !== "") {
      writer.uint32(42).string(message.rowNumber);
    }
    if (message.status !== undefined) {
      writer.uint32(48).int32(message.status);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ChangeRoleHierarchyRow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseChangeRoleHierarchyRow } as ChangeRoleHierarchyRow;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.roleId = reader.string();
          break;
        case 3:
          message.currentJobTitle = reader.string();
          break;
        case 4:
          message.newJobTitle = reader.string();
          break;
        case 5:
          message.rowNumber = reader.string();
          break;
        case 6:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChangeRoleHierarchyRow {
    const message = { ...baseChangeRoleHierarchyRow } as ChangeRoleHierarchyRow;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = String(object.roleId);
    } else {
      message.roleId = "";
    }
    if (
      object.currentJobTitle !== undefined &&
      object.currentJobTitle !== null
    ) {
      message.currentJobTitle = String(object.currentJobTitle);
    } else {
      message.currentJobTitle = "";
    }
    if (object.newJobTitle !== undefined && object.newJobTitle !== null) {
      message.newJobTitle = String(object.newJobTitle);
    } else {
      message.newJobTitle = "";
    }
    if (object.rowNumber !== undefined && object.rowNumber !== null) {
      message.rowNumber = String(object.rowNumber);
    } else {
      message.rowNumber = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = requestStatusFromJSON(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  toJSON(message: ChangeRoleHierarchyRow): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.roleId !== undefined && (obj.roleId = message.roleId);
    message.currentJobTitle !== undefined &&
      (obj.currentJobTitle = message.currentJobTitle);
    message.newJobTitle !== undefined &&
      (obj.newJobTitle = message.newJobTitle);
    message.rowNumber !== undefined && (obj.rowNumber = message.rowNumber);
    message.status !== undefined &&
      (obj.status =
        message.status !== undefined
          ? requestStatusToJSON(message.status)
          : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ChangeRoleHierarchyRow>
  ): ChangeRoleHierarchyRow {
    const message = { ...baseChangeRoleHierarchyRow } as ChangeRoleHierarchyRow;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = object.roleId;
    } else {
      message.roleId = "";
    }
    if (
      object.currentJobTitle !== undefined &&
      object.currentJobTitle !== null
    ) {
      message.currentJobTitle = object.currentJobTitle;
    } else {
      message.currentJobTitle = "";
    }
    if (object.newJobTitle !== undefined && object.newJobTitle !== null) {
      message.newJobTitle = object.newJobTitle;
    } else {
      message.newJobTitle = "";
    }
    if (object.rowNumber !== undefined && object.rowNumber !== null) {
      message.rowNumber = object.rowNumber;
    } else {
      message.rowNumber = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = undefined;
    }
    return message;
  },
};

export interface BulkService {
  CreateRoleBulkRequest(request: CreateRoleBulkReq): Promise<CreateRoleBulkRes>;
  ChangeRoleHierarchyBulkRequest(
    request: ChangeRoleHierarchyBulkReq
  ): Promise<ChangeRoleHierarchyBulkRes>;
  GetBulkRequestExample(
    request: GetBulkRequestExampleReq
  ): Promise<GetBulkRequestExampleRes>;
  GetCreateRoleBulkRequestById(
    request: GetBulkRequestByIdReq
  ): Promise<DetailedCreateRoleBulkRequest>;
  GetChangeRoleHierarchyBulkRequestById(
    request: GetBulkRequestByIdReq
  ): Promise<DetailedChangeRoleHierarchyBulkRequest>;
  IsBulkFileValid(request: IsBulkFileValidReq): Promise<IsBulkFileValidRes>;
}

export class BulkServiceClientImpl implements BulkService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateRoleBulkRequest = this.CreateRoleBulkRequest.bind(this);
    this.ChangeRoleHierarchyBulkRequest =
      this.ChangeRoleHierarchyBulkRequest.bind(this);
    this.GetBulkRequestExample = this.GetBulkRequestExample.bind(this);
    this.GetCreateRoleBulkRequestById =
      this.GetCreateRoleBulkRequestById.bind(this);
    this.GetChangeRoleHierarchyBulkRequestById =
      this.GetChangeRoleHierarchyBulkRequestById.bind(this);
    this.IsBulkFileValid = this.IsBulkFileValid.bind(this);
  }
  CreateRoleBulkRequest(
    request: CreateRoleBulkReq
  ): Promise<CreateRoleBulkRes> {
    const data = CreateRoleBulkReq.encode(request).finish();
    const promise = this.rpc.request(
      "BulkService.BulkService",
      "CreateRoleBulkRequest",
      data
    );
    return promise.then((data) =>
      CreateRoleBulkRes.decode(new _m0.Reader(data))
    );
  }

  ChangeRoleHierarchyBulkRequest(
    request: ChangeRoleHierarchyBulkReq
  ): Promise<ChangeRoleHierarchyBulkRes> {
    const data = ChangeRoleHierarchyBulkReq.encode(request).finish();
    const promise = this.rpc.request(
      "BulkService.BulkService",
      "ChangeRoleHierarchyBulkRequest",
      data
    );
    return promise.then((data) =>
      ChangeRoleHierarchyBulkRes.decode(new _m0.Reader(data))
    );
  }

  GetBulkRequestExample(
    request: GetBulkRequestExampleReq
  ): Promise<GetBulkRequestExampleRes> {
    const data = GetBulkRequestExampleReq.encode(request).finish();
    const promise = this.rpc.request(
      "BulkService.BulkService",
      "GetBulkRequestExample",
      data
    );
    return promise.then((data) =>
      GetBulkRequestExampleRes.decode(new _m0.Reader(data))
    );
  }

  GetCreateRoleBulkRequestById(
    request: GetBulkRequestByIdReq
  ): Promise<DetailedCreateRoleBulkRequest> {
    const data = GetBulkRequestByIdReq.encode(request).finish();
    const promise = this.rpc.request(
      "BulkService.BulkService",
      "GetCreateRoleBulkRequestById",
      data
    );
    return promise.then((data) =>
      DetailedCreateRoleBulkRequest.decode(new _m0.Reader(data))
    );
  }

  GetChangeRoleHierarchyBulkRequestById(
    request: GetBulkRequestByIdReq
  ): Promise<DetailedChangeRoleHierarchyBulkRequest> {
    const data = GetBulkRequestByIdReq.encode(request).finish();
    const promise = this.rpc.request(
      "BulkService.BulkService",
      "GetChangeRoleHierarchyBulkRequestById",
      data
    );
    return promise.then((data) =>
      DetailedChangeRoleHierarchyBulkRequest.decode(new _m0.Reader(data))
    );
  }

  IsBulkFileValid(request: IsBulkFileValidReq): Promise<IsBulkFileValidRes> {
    const data = IsBulkFileValidReq.encode(request).finish();
    const promise = this.rpc.request(
      "BulkService.BulkService",
      "IsBulkFileValid",
      data
    );
    return promise.then((data) =>
      IsBulkFileValidRes.decode(new _m0.Reader(data))
    );
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
