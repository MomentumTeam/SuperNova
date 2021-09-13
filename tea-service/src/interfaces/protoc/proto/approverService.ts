/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Request, UpdateDecisionReq } from "./requestService";

export const protobufPackage = "ApproverService";

export enum RequestStatus {
  SUBMITTED = 0,
  DECLINED = 1,
  IN_PROGRESS = 2,
  DONE = 3,
  FAILED = 4,
  UNRECOGNIZED = -1,
}

export function requestStatusFromJSON(object: any): RequestStatus {
  switch (object) {
    case 0:
    case "SUBMITTED":
      return RequestStatus.SUBMITTED;
    case 1:
    case "DECLINED":
      return RequestStatus.DECLINED;
    case 2:
    case "IN_PROGRESS":
      return RequestStatus.IN_PROGRESS;
    case 3:
    case "DONE":
      return RequestStatus.DONE;
    case 4:
    case "FAILED":
      return RequestStatus.FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RequestStatus.UNRECOGNIZED;
  }
}

export function requestStatusToJSON(object: RequestStatus): string {
  switch (object) {
    case RequestStatus.SUBMITTED:
      return "SUBMITTED";
    case RequestStatus.DECLINED:
      return "DECLINED";
    case RequestStatus.IN_PROGRESS:
      return "IN_PROGRESS";
    case RequestStatus.DONE:
      return "DONE";
    case RequestStatus.FAILED:
      return "FAILED";
    default:
      return "UNKNOWN";
  }
}

export enum UserType {
  SECURITY = 0,
  SUPER_SECURITY = 1,
  COMMANDER = 2,
  SOLDIER = 3,
  UNRECOGNIZED = -1,
}

export function userTypeFromJSON(object: any): UserType {
  switch (object) {
    case 0:
    case "SECURITY":
      return UserType.SECURITY;
    case 1:
    case "SUPER_SECURITY":
      return UserType.SUPER_SECURITY;
    case 2:
    case "COMMANDER":
      return UserType.COMMANDER;
    case 3:
    case "SOLDIER":
      return UserType.SOLDIER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UserType.UNRECOGNIZED;
  }
}

export function userTypeToJSON(object: UserType): string {
  switch (object) {
    case UserType.SECURITY:
      return "SECURITY";
    case UserType.SUPER_SECURITY:
      return "SUPER_SECURITY";
    case UserType.COMMANDER:
      return "COMMANDER";
    case UserType.SOLDIER:
      return "SOLDIER";
    default:
      return "UNKNOWN";
  }
}

export interface SyncApproverReq {
  approverId: string;
}

export interface DeleteApproverReq {
  approverId: string;
}

export interface ApproverIdArray {
  approverIds: string[];
}

export interface GetAllApproversReq {}

export interface SuccessMessage {
  success: boolean;
}

export interface SearchByDisplayNameReq {
  displayName: string;
  type: UserType;
  from: number;
  to: number;
}

export interface SearchByDomainUserReq {
  domainUser: string;
  type: UserType;
}

export interface ApproverArray {
  approvers: Approver[];
}

export interface GetUserTypeReq {
  entityId: string;
}

export interface GetUserTypeRes {
  entityId: string;
  type: UserType;
}

export interface AddApproverReq {
  entityId: string;
  displayName: string;
  domainUsers: string[];
  akaUnit: string;
}

export interface Approver {
  entityId: string;
  displayName: string;
  /** entity may have multiple emails */
  domainUsers: string[];
  type: UserType;
  akaUnit: string;
  id: string;
}

const baseSyncApproverReq: object = { approverId: "" };

export const SyncApproverReq = {
  encode(
    message: SyncApproverReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.approverId !== "") {
      writer.uint32(10).string(message.approverId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SyncApproverReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSyncApproverReq } as SyncApproverReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.approverId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SyncApproverReq {
    const message = { ...baseSyncApproverReq } as SyncApproverReq;
    if (object.approverId !== undefined && object.approverId !== null) {
      message.approverId = String(object.approverId);
    } else {
      message.approverId = "";
    }
    return message;
  },

  toJSON(message: SyncApproverReq): unknown {
    const obj: any = {};
    message.approverId !== undefined && (obj.approverId = message.approverId);
    return obj;
  },

  fromPartial(object: DeepPartial<SyncApproverReq>): SyncApproverReq {
    const message = { ...baseSyncApproverReq } as SyncApproverReq;
    if (object.approverId !== undefined && object.approverId !== null) {
      message.approverId = object.approverId;
    } else {
      message.approverId = "";
    }
    return message;
  },
};

const baseDeleteApproverReq: object = { approverId: "" };

export const DeleteApproverReq = {
  encode(
    message: DeleteApproverReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.approverId !== "") {
      writer.uint32(10).string(message.approverId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteApproverReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteApproverReq } as DeleteApproverReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.approverId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteApproverReq {
    const message = { ...baseDeleteApproverReq } as DeleteApproverReq;
    if (object.approverId !== undefined && object.approverId !== null) {
      message.approverId = String(object.approverId);
    } else {
      message.approverId = "";
    }
    return message;
  },

  toJSON(message: DeleteApproverReq): unknown {
    const obj: any = {};
    message.approverId !== undefined && (obj.approverId = message.approverId);
    return obj;
  },

  fromPartial(object: DeepPartial<DeleteApproverReq>): DeleteApproverReq {
    const message = { ...baseDeleteApproverReq } as DeleteApproverReq;
    if (object.approverId !== undefined && object.approverId !== null) {
      message.approverId = object.approverId;
    } else {
      message.approverId = "";
    }
    return message;
  },
};

const baseApproverIdArray: object = { approverIds: "" };

export const ApproverIdArray = {
  encode(
    message: ApproverIdArray,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.approverIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ApproverIdArray {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseApproverIdArray } as ApproverIdArray;
    message.approverIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.approverIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ApproverIdArray {
    const message = { ...baseApproverIdArray } as ApproverIdArray;
    message.approverIds = [];
    if (object.approverIds !== undefined && object.approverIds !== null) {
      for (const e of object.approverIds) {
        message.approverIds.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: ApproverIdArray): unknown {
    const obj: any = {};
    if (message.approverIds) {
      obj.approverIds = message.approverIds.map((e) => e);
    } else {
      obj.approverIds = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ApproverIdArray>): ApproverIdArray {
    const message = { ...baseApproverIdArray } as ApproverIdArray;
    message.approverIds = [];
    if (object.approverIds !== undefined && object.approverIds !== null) {
      for (const e of object.approverIds) {
        message.approverIds.push(e);
      }
    }
    return message;
  },
};

const baseGetAllApproversReq: object = {};

export const GetAllApproversReq = {
  encode(
    _: GetAllApproversReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllApproversReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetAllApproversReq } as GetAllApproversReq;
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

  fromJSON(_: any): GetAllApproversReq {
    const message = { ...baseGetAllApproversReq } as GetAllApproversReq;
    return message;
  },

  toJSON(_: GetAllApproversReq): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<GetAllApproversReq>): GetAllApproversReq {
    const message = { ...baseGetAllApproversReq } as GetAllApproversReq;
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

const baseSearchByDisplayNameReq: object = {
  displayName: "",
  type: 0,
  from: 0,
  to: 0,
};

export const SearchByDisplayNameReq = {
  encode(
    message: SearchByDisplayNameReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.displayName !== "") {
      writer.uint32(10).string(message.displayName);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.from !== 0) {
      writer.uint32(24).int32(message.from);
    }
    if (message.to !== 0) {
      writer.uint32(32).int32(message.to);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SearchByDisplayNameReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSearchByDisplayNameReq } as SearchByDisplayNameReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.displayName = reader.string();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        case 3:
          message.from = reader.int32();
          break;
        case 4:
          message.to = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SearchByDisplayNameReq {
    const message = { ...baseSearchByDisplayNameReq } as SearchByDisplayNameReq;
    if (object.displayName !== undefined && object.displayName !== null) {
      message.displayName = String(object.displayName);
    } else {
      message.displayName = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = userTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = Number(object.from);
    } else {
      message.from = 0;
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = Number(object.to);
    } else {
      message.to = 0;
    }
    return message;
  },

  toJSON(message: SearchByDisplayNameReq): unknown {
    const obj: any = {};
    message.displayName !== undefined &&
      (obj.displayName = message.displayName);
    message.type !== undefined && (obj.type = userTypeToJSON(message.type));
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SearchByDisplayNameReq>
  ): SearchByDisplayNameReq {
    const message = { ...baseSearchByDisplayNameReq } as SearchByDisplayNameReq;
    if (object.displayName !== undefined && object.displayName !== null) {
      message.displayName = object.displayName;
    } else {
      message.displayName = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    } else {
      message.from = 0;
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = 0;
    }
    return message;
  },
};

const baseSearchByDomainUserReq: object = { domainUser: "", type: 0 };

export const SearchByDomainUserReq = {
  encode(
    message: SearchByDomainUserReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.domainUser !== "") {
      writer.uint32(10).string(message.domainUser);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SearchByDomainUserReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSearchByDomainUserReq } as SearchByDomainUserReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domainUser = reader.string();
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

  fromJSON(object: any): SearchByDomainUserReq {
    const message = { ...baseSearchByDomainUserReq } as SearchByDomainUserReq;
    if (object.domainUser !== undefined && object.domainUser !== null) {
      message.domainUser = String(object.domainUser);
    } else {
      message.domainUser = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = userTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    return message;
  },

  toJSON(message: SearchByDomainUserReq): unknown {
    const obj: any = {};
    message.domainUser !== undefined && (obj.domainUser = message.domainUser);
    message.type !== undefined && (obj.type = userTypeToJSON(message.type));
    return obj;
  },

  fromPartial(
    object: DeepPartial<SearchByDomainUserReq>
  ): SearchByDomainUserReq {
    const message = { ...baseSearchByDomainUserReq } as SearchByDomainUserReq;
    if (object.domainUser !== undefined && object.domainUser !== null) {
      message.domainUser = object.domainUser;
    } else {
      message.domainUser = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    return message;
  },
};

const baseApproverArray: object = {};

export const ApproverArray = {
  encode(
    message: ApproverArray,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.approvers) {
      Approver.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ApproverArray {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseApproverArray } as ApproverArray;
    message.approvers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.approvers.push(Approver.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ApproverArray {
    const message = { ...baseApproverArray } as ApproverArray;
    message.approvers = [];
    if (object.approvers !== undefined && object.approvers !== null) {
      for (const e of object.approvers) {
        message.approvers.push(Approver.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: ApproverArray): unknown {
    const obj: any = {};
    if (message.approvers) {
      obj.approvers = message.approvers.map((e) =>
        e ? Approver.toJSON(e) : undefined
      );
    } else {
      obj.approvers = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ApproverArray>): ApproverArray {
    const message = { ...baseApproverArray } as ApproverArray;
    message.approvers = [];
    if (object.approvers !== undefined && object.approvers !== null) {
      for (const e of object.approvers) {
        message.approvers.push(Approver.fromPartial(e));
      }
    }
    return message;
  },
};

const baseGetUserTypeReq: object = { entityId: "" };

export const GetUserTypeReq = {
  encode(
    message: GetUserTypeReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.entityId !== "") {
      writer.uint32(10).string(message.entityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserTypeReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetUserTypeReq } as GetUserTypeReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entityId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetUserTypeReq {
    const message = { ...baseGetUserTypeReq } as GetUserTypeReq;
    if (object.entityId !== undefined && object.entityId !== null) {
      message.entityId = String(object.entityId);
    } else {
      message.entityId = "";
    }
    return message;
  },

  toJSON(message: GetUserTypeReq): unknown {
    const obj: any = {};
    message.entityId !== undefined && (obj.entityId = message.entityId);
    return obj;
  },

  fromPartial(object: DeepPartial<GetUserTypeReq>): GetUserTypeReq {
    const message = { ...baseGetUserTypeReq } as GetUserTypeReq;
    if (object.entityId !== undefined && object.entityId !== null) {
      message.entityId = object.entityId;
    } else {
      message.entityId = "";
    }
    return message;
  },
};

const baseGetUserTypeRes: object = { entityId: "", type: 0 };

export const GetUserTypeRes = {
  encode(
    message: GetUserTypeRes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.entityId !== "") {
      writer.uint32(10).string(message.entityId);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserTypeRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetUserTypeRes } as GetUserTypeRes;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entityId = reader.string();
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

  fromJSON(object: any): GetUserTypeRes {
    const message = { ...baseGetUserTypeRes } as GetUserTypeRes;
    if (object.entityId !== undefined && object.entityId !== null) {
      message.entityId = String(object.entityId);
    } else {
      message.entityId = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = userTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    return message;
  },

  toJSON(message: GetUserTypeRes): unknown {
    const obj: any = {};
    message.entityId !== undefined && (obj.entityId = message.entityId);
    message.type !== undefined && (obj.type = userTypeToJSON(message.type));
    return obj;
  },

  fromPartial(object: DeepPartial<GetUserTypeRes>): GetUserTypeRes {
    const message = { ...baseGetUserTypeRes } as GetUserTypeRes;
    if (object.entityId !== undefined && object.entityId !== null) {
      message.entityId = object.entityId;
    } else {
      message.entityId = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    return message;
  },
};

const baseAddApproverReq: object = {
  entityId: "",
  displayName: "",
  domainUsers: "",
  akaUnit: "",
};

export const AddApproverReq = {
  encode(
    message: AddApproverReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.entityId !== "") {
      writer.uint32(10).string(message.entityId);
    }
    if (message.displayName !== "") {
      writer.uint32(18).string(message.displayName);
    }
    for (const v of message.domainUsers) {
      writer.uint32(26).string(v!);
    }
    if (message.akaUnit !== "") {
      writer.uint32(34).string(message.akaUnit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddApproverReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddApproverReq } as AddApproverReq;
    message.domainUsers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entityId = reader.string();
          break;
        case 2:
          message.displayName = reader.string();
          break;
        case 3:
          message.domainUsers.push(reader.string());
          break;
        case 4:
          message.akaUnit = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddApproverReq {
    const message = { ...baseAddApproverReq } as AddApproverReq;
    message.domainUsers = [];
    if (object.entityId !== undefined && object.entityId !== null) {
      message.entityId = String(object.entityId);
    } else {
      message.entityId = "";
    }
    if (object.displayName !== undefined && object.displayName !== null) {
      message.displayName = String(object.displayName);
    } else {
      message.displayName = "";
    }
    if (object.domainUsers !== undefined && object.domainUsers !== null) {
      for (const e of object.domainUsers) {
        message.domainUsers.push(String(e));
      }
    }
    if (object.akaUnit !== undefined && object.akaUnit !== null) {
      message.akaUnit = String(object.akaUnit);
    } else {
      message.akaUnit = "";
    }
    return message;
  },

  toJSON(message: AddApproverReq): unknown {
    const obj: any = {};
    message.entityId !== undefined && (obj.entityId = message.entityId);
    message.displayName !== undefined &&
      (obj.displayName = message.displayName);
    if (message.domainUsers) {
      obj.domainUsers = message.domainUsers.map((e) => e);
    } else {
      obj.domainUsers = [];
    }
    message.akaUnit !== undefined && (obj.akaUnit = message.akaUnit);
    return obj;
  },

  fromPartial(object: DeepPartial<AddApproverReq>): AddApproverReq {
    const message = { ...baseAddApproverReq } as AddApproverReq;
    message.domainUsers = [];
    if (object.entityId !== undefined && object.entityId !== null) {
      message.entityId = object.entityId;
    } else {
      message.entityId = "";
    }
    if (object.displayName !== undefined && object.displayName !== null) {
      message.displayName = object.displayName;
    } else {
      message.displayName = "";
    }
    if (object.domainUsers !== undefined && object.domainUsers !== null) {
      for (const e of object.domainUsers) {
        message.domainUsers.push(e);
      }
    }
    if (object.akaUnit !== undefined && object.akaUnit !== null) {
      message.akaUnit = object.akaUnit;
    } else {
      message.akaUnit = "";
    }
    return message;
  },
};

const baseApprover: object = {
  entityId: "",
  displayName: "",
  domainUsers: "",
  type: 0,
  akaUnit: "",
  id: "",
};

export const Approver = {
  encode(
    message: Approver,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.entityId !== "") {
      writer.uint32(10).string(message.entityId);
    }
    if (message.displayName !== "") {
      writer.uint32(18).string(message.displayName);
    }
    for (const v of message.domainUsers) {
      writer.uint32(26).string(v!);
    }
    if (message.type !== 0) {
      writer.uint32(32).int32(message.type);
    }
    if (message.akaUnit !== "") {
      writer.uint32(42).string(message.akaUnit);
    }
    if (message.id !== "") {
      writer.uint32(50).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Approver {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseApprover } as Approver;
    message.domainUsers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entityId = reader.string();
          break;
        case 2:
          message.displayName = reader.string();
          break;
        case 3:
          message.domainUsers.push(reader.string());
          break;
        case 4:
          message.type = reader.int32() as any;
          break;
        case 5:
          message.akaUnit = reader.string();
          break;
        case 6:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Approver {
    const message = { ...baseApprover } as Approver;
    message.domainUsers = [];
    if (object.entityId !== undefined && object.entityId !== null) {
      message.entityId = String(object.entityId);
    } else {
      message.entityId = "";
    }
    if (object.displayName !== undefined && object.displayName !== null) {
      message.displayName = String(object.displayName);
    } else {
      message.displayName = "";
    }
    if (object.domainUsers !== undefined && object.domainUsers !== null) {
      for (const e of object.domainUsers) {
        message.domainUsers.push(String(e));
      }
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = userTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.akaUnit !== undefined && object.akaUnit !== null) {
      message.akaUnit = String(object.akaUnit);
    } else {
      message.akaUnit = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: Approver): unknown {
    const obj: any = {};
    message.entityId !== undefined && (obj.entityId = message.entityId);
    message.displayName !== undefined &&
      (obj.displayName = message.displayName);
    if (message.domainUsers) {
      obj.domainUsers = message.domainUsers.map((e) => e);
    } else {
      obj.domainUsers = [];
    }
    message.type !== undefined && (obj.type = userTypeToJSON(message.type));
    message.akaUnit !== undefined && (obj.akaUnit = message.akaUnit);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<Approver>): Approver {
    const message = { ...baseApprover } as Approver;
    message.domainUsers = [];
    if (object.entityId !== undefined && object.entityId !== null) {
      message.entityId = object.entityId;
    } else {
      message.entityId = "";
    }
    if (object.displayName !== undefined && object.displayName !== null) {
      message.displayName = object.displayName;
    } else {
      message.displayName = "";
    }
    if (object.domainUsers !== undefined && object.domainUsers !== null) {
      for (const e of object.domainUsers) {
        message.domainUsers.push(e);
      }
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.akaUnit !== undefined && object.akaUnit !== null) {
      message.akaUnit = object.akaUnit;
    } else {
      message.akaUnit = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
};

export interface ApproverService {
  AddCommanderApprover(request: AddApproverReq): Promise<Approver>;
  AddSecurityApprover(request: AddApproverReq): Promise<Approver>;
  AddSuperSecurityApprover(request: AddApproverReq): Promise<Approver>;
  GetUserType(request: GetUserTypeReq): Promise<GetUserTypeRes>;
  SearchApproverByDisplayName(
    request: SearchByDisplayNameReq
  ): Promise<ApproverArray>;
  SearchApproverByDomainUser(
    request: SearchByDomainUserReq
  ): Promise<ApproverArray>;
  GetAllSecurityApprovers(request: GetAllApproversReq): Promise<ApproverArray>;
  GetAllSuperSecurityApprovers(
    request: GetAllApproversReq
  ): Promise<ApproverArray>;
  GetAllCommanderApprovers(request: GetAllApproversReq): Promise<ApproverArray>;
  UpdateCommanderDecision(request: UpdateDecisionReq): Promise<Request>;
  UpdateSecurityDecision(request: UpdateDecisionReq): Promise<Request>;
  UpdateSuperSecurityDecision(request: UpdateDecisionReq): Promise<Request>;
  GetAllApprovers(request: GetAllApproversReq): Promise<ApproverArray>;
  GetAllApproverIds(request: GetAllApproversReq): Promise<ApproverIdArray>;
  SyncApprover(request: SyncApproverReq): Promise<Approver>;
  DeleteApprover(request: DeleteApproverReq): Promise<SuccessMessage>;
}

export class ApproverServiceClientImpl implements ApproverService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AddCommanderApprover = this.AddCommanderApprover.bind(this);
    this.AddSecurityApprover = this.AddSecurityApprover.bind(this);
    this.AddSuperSecurityApprover = this.AddSuperSecurityApprover.bind(this);
    this.GetUserType = this.GetUserType.bind(this);
    this.SearchApproverByDisplayName =
      this.SearchApproverByDisplayName.bind(this);
    this.SearchApproverByDomainUser =
      this.SearchApproverByDomainUser.bind(this);
    this.GetAllSecurityApprovers = this.GetAllSecurityApprovers.bind(this);
    this.GetAllSuperSecurityApprovers =
      this.GetAllSuperSecurityApprovers.bind(this);
    this.GetAllCommanderApprovers = this.GetAllCommanderApprovers.bind(this);
    this.UpdateCommanderDecision = this.UpdateCommanderDecision.bind(this);
    this.UpdateSecurityDecision = this.UpdateSecurityDecision.bind(this);
    this.UpdateSuperSecurityDecision =
      this.UpdateSuperSecurityDecision.bind(this);
    this.GetAllApprovers = this.GetAllApprovers.bind(this);
    this.GetAllApproverIds = this.GetAllApproverIds.bind(this);
    this.SyncApprover = this.SyncApprover.bind(this);
    this.DeleteApprover = this.DeleteApprover.bind(this);
  }
  AddCommanderApprover(request: AddApproverReq): Promise<Approver> {
    const data = AddApproverReq.encode(request).finish();
    const promise = this.rpc.request(
      "ApproverService.ApproverService",
      "AddCommanderApprover",
      data
    );
    return promise.then((data) => Approver.decode(new _m0.Reader(data)));
  }

  AddSecurityApprover(request: AddApproverReq): Promise<Approver> {
    const data = AddApproverReq.encode(request).finish();
    const promise = this.rpc.request(
      "ApproverService.ApproverService",
      "AddSecurityApprover",
      data
    );
    return promise.then((data) => Approver.decode(new _m0.Reader(data)));
  }

  AddSuperSecurityApprover(request: AddApproverReq): Promise<Approver> {
    const data = AddApproverReq.encode(request).finish();
    const promise = this.rpc.request(
      "ApproverService.ApproverService",
      "AddSuperSecurityApprover",
      data
    );
    return promise.then((data) => Approver.decode(new _m0.Reader(data)));
  }

  GetUserType(request: GetUserTypeReq): Promise<GetUserTypeRes> {
    const data = GetUserTypeReq.encode(request).finish();
    const promise = this.rpc.request(
      "ApproverService.ApproverService",
      "GetUserType",
      data
    );
    return promise.then((data) => GetUserTypeRes.decode(new _m0.Reader(data)));
  }

  SearchApproverByDisplayName(
    request: SearchByDisplayNameReq
  ): Promise<ApproverArray> {
    const data = SearchByDisplayNameReq.encode(request).finish();
    const promise = this.rpc.request(
      "ApproverService.ApproverService",
      "SearchApproverByDisplayName",
      data
    );
    return promise.then((data) => ApproverArray.decode(new _m0.Reader(data)));
  }

  SearchApproverByDomainUser(
    request: SearchByDomainUserReq
  ): Promise<ApproverArray> {
    const data = SearchByDomainUserReq.encode(request).finish();
    const promise = this.rpc.request(
      "ApproverService.ApproverService",
      "SearchApproverByDomainUser",
      data
    );
    return promise.then((data) => ApproverArray.decode(new _m0.Reader(data)));
  }

  GetAllSecurityApprovers(request: GetAllApproversReq): Promise<ApproverArray> {
    const data = GetAllApproversReq.encode(request).finish();
    const promise = this.rpc.request(
      "ApproverService.ApproverService",
      "GetAllSecurityApprovers",
      data
    );
    return promise.then((data) => ApproverArray.decode(new _m0.Reader(data)));
  }

  GetAllSuperSecurityApprovers(
    request: GetAllApproversReq
  ): Promise<ApproverArray> {
    const data = GetAllApproversReq.encode(request).finish();
    const promise = this.rpc.request(
      "ApproverService.ApproverService",
      "GetAllSuperSecurityApprovers",
      data
    );
    return promise.then((data) => ApproverArray.decode(new _m0.Reader(data)));
  }

  GetAllCommanderApprovers(
    request: GetAllApproversReq
  ): Promise<ApproverArray> {
    const data = GetAllApproversReq.encode(request).finish();
    const promise = this.rpc.request(
      "ApproverService.ApproverService",
      "GetAllCommanderApprovers",
      data
    );
    return promise.then((data) => ApproverArray.decode(new _m0.Reader(data)));
  }

  UpdateCommanderDecision(request: UpdateDecisionReq): Promise<Request> {
    const data = UpdateDecisionReq.encode(request).finish();
    const promise = this.rpc.request(
      "ApproverService.ApproverService",
      "UpdateCommanderDecision",
      data
    );
    return promise.then((data) => Request.decode(new _m0.Reader(data)));
  }

  UpdateSecurityDecision(request: UpdateDecisionReq): Promise<Request> {
    const data = UpdateDecisionReq.encode(request).finish();
    const promise = this.rpc.request(
      "ApproverService.ApproverService",
      "UpdateSecurityDecision",
      data
    );
    return promise.then((data) => Request.decode(new _m0.Reader(data)));
  }

  UpdateSuperSecurityDecision(request: UpdateDecisionReq): Promise<Request> {
    const data = UpdateDecisionReq.encode(request).finish();
    const promise = this.rpc.request(
      "ApproverService.ApproverService",
      "UpdateSuperSecurityDecision",
      data
    );
    return promise.then((data) => Request.decode(new _m0.Reader(data)));
  }

  GetAllApprovers(request: GetAllApproversReq): Promise<ApproverArray> {
    const data = GetAllApproversReq.encode(request).finish();
    const promise = this.rpc.request(
      "ApproverService.ApproverService",
      "GetAllApprovers",
      data
    );
    return promise.then((data) => ApproverArray.decode(new _m0.Reader(data)));
  }

  GetAllApproverIds(request: GetAllApproversReq): Promise<ApproverIdArray> {
    const data = GetAllApproversReq.encode(request).finish();
    const promise = this.rpc.request(
      "ApproverService.ApproverService",
      "GetAllApproverIds",
      data
    );
    return promise.then((data) => ApproverIdArray.decode(new _m0.Reader(data)));
  }

  SyncApprover(request: SyncApproverReq): Promise<Approver> {
    const data = SyncApproverReq.encode(request).finish();
    const promise = this.rpc.request(
      "ApproverService.ApproverService",
      "SyncApprover",
      data
    );
    return promise.then((data) => Approver.decode(new _m0.Reader(data)));
  }

  DeleteApprover(request: DeleteApproverReq): Promise<SuccessMessage> {
    const data = DeleteApproverReq.encode(request).finish();
    const promise = this.rpc.request(
      "ApproverService.ApproverService",
      "DeleteApprover",
      data
    );
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
