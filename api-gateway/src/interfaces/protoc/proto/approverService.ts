/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  ApproverType,
  ApproverDecision,
  Request,
  approverTypeFromJSON,
  approverTypeToJSON,
} from "./requestService";

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

export interface IsApproverValidForOGReq {
  approverId: string;
  groupId: string;
}

export interface IsApproverValidForOGRes {
  isValid: boolean;
}

export interface GetApproverByEntityIdReq {
  entityId: string;
}

export interface SyncApproverReq {
  approverId: string;
}

export interface DeleteApproverReq {
  approverId: string;
  type: ApproverType;
  groupInChargeId?: string | undefined;
}

export interface ApproverIdArray {
  approverIds: string[];
}

export interface GetAllApproversReq {
  type: ApproverType | undefined;
}

export interface SuccessMessage {
  success: boolean;
}

export interface SearchByDisplayNameReq {
  displayName: string;
  type: ApproverType;
  from: number;
  to: number;
}

export interface SearchByDomainUserReq {
  domainUser: string;
  type: ApproverType;
}

export interface ApproverArray {
  approvers: Approver[];
}

export interface SearchHighCommandersByDisplayNameReq {
  displayName: string;
}

export interface GetUserTypeReq {
  entityId: string;
}

export interface GetUserTypeRes {
  entityId: string;
  type: ApproverType[];
}

export interface AddApproverReq {
  entityId: string;
  displayName: string;
  domainUsers: string[];
  akaUnit?: string | undefined;
  type: ApproverType;
  personalNumber?: string | undefined;
  identityCard?: string | undefined;
  directGroup: string;
  groupInChargeId?: string | undefined;
}

export interface UpdateApproverDecisionReq {
  id: string;
  approverDecision: ApproverDecision | undefined;
}

export interface Approver {
  entityId: string;
  displayName: string;
  /** entity may have multiple emails */
  domainUsers: string[];
  type: ApproverType;
  akaUnit: string;
  id: string;
  personalNumber: string;
  identityCard: string;
  directGroup: string;
  groupsInCharge: string[];
}

export interface GetAllApproverTypesReq {
  entityId: string;
}

export interface GetAllApproverTypesRes {
  types: ApproverType[];
  groupsInCharge: groupsInCharge[];
}

export interface groupsInCharge {
  id: string;
  name: string;
  hierarchy: string;
}

const baseIsApproverValidForOGReq: object = { approverId: "", groupId: "" };

export const IsApproverValidForOGReq = {
  encode(
    message: IsApproverValidForOGReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.approverId !== "") {
      writer.uint32(10).string(message.approverId);
    }
    if (message.groupId !== "") {
      writer.uint32(18).string(message.groupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): IsApproverValidForOGReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseIsApproverValidForOGReq,
    } as IsApproverValidForOGReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.approverId = reader.string();
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

  fromJSON(object: any): IsApproverValidForOGReq {
    const message = {
      ...baseIsApproverValidForOGReq,
    } as IsApproverValidForOGReq;
    if (object.approverId !== undefined && object.approverId !== null) {
      message.approverId = String(object.approverId);
    } else {
      message.approverId = "";
    }
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = String(object.groupId);
    } else {
      message.groupId = "";
    }
    return message;
  },

  toJSON(message: IsApproverValidForOGReq): unknown {
    const obj: any = {};
    message.approverId !== undefined && (obj.approverId = message.approverId);
    message.groupId !== undefined && (obj.groupId = message.groupId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<IsApproverValidForOGReq>
  ): IsApproverValidForOGReq {
    const message = {
      ...baseIsApproverValidForOGReq,
    } as IsApproverValidForOGReq;
    if (object.approverId !== undefined && object.approverId !== null) {
      message.approverId = object.approverId;
    } else {
      message.approverId = "";
    }
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = object.groupId;
    } else {
      message.groupId = "";
    }
    return message;
  },
};

const baseIsApproverValidForOGRes: object = { isValid: false };

export const IsApproverValidForOGRes = {
  encode(
    message: IsApproverValidForOGRes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.isValid === true) {
      writer.uint32(8).bool(message.isValid);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): IsApproverValidForOGRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseIsApproverValidForOGRes,
    } as IsApproverValidForOGRes;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isValid = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IsApproverValidForOGRes {
    const message = {
      ...baseIsApproverValidForOGRes,
    } as IsApproverValidForOGRes;
    if (object.isValid !== undefined && object.isValid !== null) {
      message.isValid = Boolean(object.isValid);
    } else {
      message.isValid = false;
    }
    return message;
  },

  toJSON(message: IsApproverValidForOGRes): unknown {
    const obj: any = {};
    message.isValid !== undefined && (obj.isValid = message.isValid);
    return obj;
  },

  fromPartial(
    object: DeepPartial<IsApproverValidForOGRes>
  ): IsApproverValidForOGRes {
    const message = {
      ...baseIsApproverValidForOGRes,
    } as IsApproverValidForOGRes;
    if (object.isValid !== undefined && object.isValid !== null) {
      message.isValid = object.isValid;
    } else {
      message.isValid = false;
    }
    return message;
  },
};

const baseGetApproverByEntityIdReq: object = { entityId: "" };

export const GetApproverByEntityIdReq = {
  encode(
    message: GetApproverByEntityIdReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.entityId !== "") {
      writer.uint32(10).string(message.entityId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetApproverByEntityIdReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetApproverByEntityIdReq,
    } as GetApproverByEntityIdReq;
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

  fromJSON(object: any): GetApproverByEntityIdReq {
    const message = {
      ...baseGetApproverByEntityIdReq,
    } as GetApproverByEntityIdReq;
    if (object.entityId !== undefined && object.entityId !== null) {
      message.entityId = String(object.entityId);
    } else {
      message.entityId = "";
    }
    return message;
  },

  toJSON(message: GetApproverByEntityIdReq): unknown {
    const obj: any = {};
    message.entityId !== undefined && (obj.entityId = message.entityId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetApproverByEntityIdReq>
  ): GetApproverByEntityIdReq {
    const message = {
      ...baseGetApproverByEntityIdReq,
    } as GetApproverByEntityIdReq;
    if (object.entityId !== undefined && object.entityId !== null) {
      message.entityId = object.entityId;
    } else {
      message.entityId = "";
    }
    return message;
  },
};

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

const baseDeleteApproverReq: object = { approverId: "", type: 0 };

export const DeleteApproverReq = {
  encode(
    message: DeleteApproverReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.approverId !== "") {
      writer.uint32(10).string(message.approverId);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.groupInChargeId !== undefined) {
      writer.uint32(26).string(message.groupInChargeId);
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
        case 2:
          message.type = reader.int32() as any;
          break;
        case 3:
          message.groupInChargeId = reader.string();
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
    if (object.type !== undefined && object.type !== null) {
      message.type = approverTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (
      object.groupInChargeId !== undefined &&
      object.groupInChargeId !== null
    ) {
      message.groupInChargeId = String(object.groupInChargeId);
    } else {
      message.groupInChargeId = undefined;
    }
    return message;
  },

  toJSON(message: DeleteApproverReq): unknown {
    const obj: any = {};
    message.approverId !== undefined && (obj.approverId = message.approverId);
    message.type !== undefined && (obj.type = approverTypeToJSON(message.type));
    message.groupInChargeId !== undefined &&
      (obj.groupInChargeId = message.groupInChargeId);
    return obj;
  },

  fromPartial(object: DeepPartial<DeleteApproverReq>): DeleteApproverReq {
    const message = { ...baseDeleteApproverReq } as DeleteApproverReq;
    if (object.approverId !== undefined && object.approverId !== null) {
      message.approverId = object.approverId;
    } else {
      message.approverId = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (
      object.groupInChargeId !== undefined &&
      object.groupInChargeId !== null
    ) {
      message.groupInChargeId = object.groupInChargeId;
    } else {
      message.groupInChargeId = undefined;
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
    message: GetAllApproversReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== undefined) {
      writer.uint32(8).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllApproversReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetAllApproversReq } as GetAllApproversReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetAllApproversReq {
    const message = { ...baseGetAllApproversReq } as GetAllApproversReq;
    if (object.type !== undefined && object.type !== null) {
      message.type = approverTypeFromJSON(object.type);
    } else {
      message.type = undefined;
    }
    return message;
  },

  toJSON(message: GetAllApproversReq): unknown {
    const obj: any = {};
    message.type !== undefined &&
      (obj.type =
        message.type !== undefined
          ? approverTypeToJSON(message.type)
          : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetAllApproversReq>): GetAllApproversReq {
    const message = { ...baseGetAllApproversReq } as GetAllApproversReq;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = undefined;
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
      message.type = approverTypeFromJSON(object.type);
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
    message.type !== undefined && (obj.type = approverTypeToJSON(message.type));
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
      message.type = approverTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    return message;
  },

  toJSON(message: SearchByDomainUserReq): unknown {
    const obj: any = {};
    message.domainUser !== undefined && (obj.domainUser = message.domainUser);
    message.type !== undefined && (obj.type = approverTypeToJSON(message.type));
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

const baseSearchHighCommandersByDisplayNameReq: object = { displayName: "" };

export const SearchHighCommandersByDisplayNameReq = {
  encode(
    message: SearchHighCommandersByDisplayNameReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.displayName !== "") {
      writer.uint32(10).string(message.displayName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SearchHighCommandersByDisplayNameReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSearchHighCommandersByDisplayNameReq,
    } as SearchHighCommandersByDisplayNameReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.displayName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SearchHighCommandersByDisplayNameReq {
    const message = {
      ...baseSearchHighCommandersByDisplayNameReq,
    } as SearchHighCommandersByDisplayNameReq;
    if (object.displayName !== undefined && object.displayName !== null) {
      message.displayName = String(object.displayName);
    } else {
      message.displayName = "";
    }
    return message;
  },

  toJSON(message: SearchHighCommandersByDisplayNameReq): unknown {
    const obj: any = {};
    message.displayName !== undefined &&
      (obj.displayName = message.displayName);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SearchHighCommandersByDisplayNameReq>
  ): SearchHighCommandersByDisplayNameReq {
    const message = {
      ...baseSearchHighCommandersByDisplayNameReq,
    } as SearchHighCommandersByDisplayNameReq;
    if (object.displayName !== undefined && object.displayName !== null) {
      message.displayName = object.displayName;
    } else {
      message.displayName = "";
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
    writer.uint32(18).fork();
    for (const v of message.type) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserTypeRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetUserTypeRes } as GetUserTypeRes;
    message.type = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entityId = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.type.push(reader.int32() as any);
            }
          } else {
            message.type.push(reader.int32() as any);
          }
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
    message.type = [];
    if (object.entityId !== undefined && object.entityId !== null) {
      message.entityId = String(object.entityId);
    } else {
      message.entityId = "";
    }
    if (object.type !== undefined && object.type !== null) {
      for (const e of object.type) {
        message.type.push(approverTypeFromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GetUserTypeRes): unknown {
    const obj: any = {};
    message.entityId !== undefined && (obj.entityId = message.entityId);
    if (message.type) {
      obj.type = message.type.map((e) => approverTypeToJSON(e));
    } else {
      obj.type = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GetUserTypeRes>): GetUserTypeRes {
    const message = { ...baseGetUserTypeRes } as GetUserTypeRes;
    message.type = [];
    if (object.entityId !== undefined && object.entityId !== null) {
      message.entityId = object.entityId;
    } else {
      message.entityId = "";
    }
    if (object.type !== undefined && object.type !== null) {
      for (const e of object.type) {
        message.type.push(e);
      }
    }
    return message;
  },
};

const baseAddApproverReq: object = {
  entityId: "",
  displayName: "",
  domainUsers: "",
  type: 0,
  directGroup: "",
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
    if (message.akaUnit !== undefined) {
      writer.uint32(34).string(message.akaUnit);
    }
    if (message.type !== 0) {
      writer.uint32(40).int32(message.type);
    }
    if (message.personalNumber !== undefined) {
      writer.uint32(50).string(message.personalNumber);
    }
    if (message.identityCard !== undefined) {
      writer.uint32(58).string(message.identityCard);
    }
    if (message.directGroup !== "") {
      writer.uint32(66).string(message.directGroup);
    }
    if (message.groupInChargeId !== undefined) {
      writer.uint32(74).string(message.groupInChargeId);
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
        case 5:
          message.type = reader.int32() as any;
          break;
        case 6:
          message.personalNumber = reader.string();
          break;
        case 7:
          message.identityCard = reader.string();
          break;
        case 8:
          message.directGroup = reader.string();
          break;
        case 9:
          message.groupInChargeId = reader.string();
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
      message.akaUnit = undefined;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = approverTypeFromJSON(object.type);
    } else {
      message.type = 0;
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
    if (object.directGroup !== undefined && object.directGroup !== null) {
      message.directGroup = String(object.directGroup);
    } else {
      message.directGroup = "";
    }
    if (
      object.groupInChargeId !== undefined &&
      object.groupInChargeId !== null
    ) {
      message.groupInChargeId = String(object.groupInChargeId);
    } else {
      message.groupInChargeId = undefined;
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
    message.type !== undefined && (obj.type = approverTypeToJSON(message.type));
    message.personalNumber !== undefined &&
      (obj.personalNumber = message.personalNumber);
    message.identityCard !== undefined &&
      (obj.identityCard = message.identityCard);
    message.directGroup !== undefined &&
      (obj.directGroup = message.directGroup);
    message.groupInChargeId !== undefined &&
      (obj.groupInChargeId = message.groupInChargeId);
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
      message.akaUnit = undefined;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
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
    if (object.directGroup !== undefined && object.directGroup !== null) {
      message.directGroup = object.directGroup;
    } else {
      message.directGroup = "";
    }
    if (
      object.groupInChargeId !== undefined &&
      object.groupInChargeId !== null
    ) {
      message.groupInChargeId = object.groupInChargeId;
    } else {
      message.groupInChargeId = undefined;
    }
    return message;
  },
};

const baseUpdateApproverDecisionReq: object = { id: "" };

export const UpdateApproverDecisionReq = {
  encode(
    message: UpdateApproverDecisionReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.approverDecision !== undefined) {
      ApproverDecision.encode(
        message.approverDecision,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateApproverDecisionReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateApproverDecisionReq,
    } as UpdateApproverDecisionReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.approverDecision = ApproverDecision.decode(
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

  fromJSON(object: any): UpdateApproverDecisionReq {
    const message = {
      ...baseUpdateApproverDecisionReq,
    } as UpdateApproverDecisionReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (
      object.approverDecision !== undefined &&
      object.approverDecision !== null
    ) {
      message.approverDecision = ApproverDecision.fromJSON(
        object.approverDecision
      );
    } else {
      message.approverDecision = undefined;
    }
    return message;
  },

  toJSON(message: UpdateApproverDecisionReq): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.approverDecision !== undefined &&
      (obj.approverDecision = message.approverDecision
        ? ApproverDecision.toJSON(message.approverDecision)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateApproverDecisionReq>
  ): UpdateApproverDecisionReq {
    const message = {
      ...baseUpdateApproverDecisionReq,
    } as UpdateApproverDecisionReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (
      object.approverDecision !== undefined &&
      object.approverDecision !== null
    ) {
      message.approverDecision = ApproverDecision.fromPartial(
        object.approverDecision
      );
    } else {
      message.approverDecision = undefined;
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
  personalNumber: "",
  identityCard: "",
  directGroup: "",
  groupsInCharge: "",
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
    if (message.personalNumber !== "") {
      writer.uint32(58).string(message.personalNumber);
    }
    if (message.identityCard !== "") {
      writer.uint32(66).string(message.identityCard);
    }
    if (message.directGroup !== "") {
      writer.uint32(74).string(message.directGroup);
    }
    for (const v of message.groupsInCharge) {
      writer.uint32(82).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Approver {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseApprover } as Approver;
    message.domainUsers = [];
    message.groupsInCharge = [];
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
        case 7:
          message.personalNumber = reader.string();
          break;
        case 8:
          message.identityCard = reader.string();
          break;
        case 9:
          message.directGroup = reader.string();
          break;
        case 10:
          message.groupsInCharge.push(reader.string());
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
    message.groupsInCharge = [];
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
      message.type = approverTypeFromJSON(object.type);
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
    if (object.personalNumber !== undefined && object.personalNumber !== null) {
      message.personalNumber = String(object.personalNumber);
    } else {
      message.personalNumber = "";
    }
    if (object.identityCard !== undefined && object.identityCard !== null) {
      message.identityCard = String(object.identityCard);
    } else {
      message.identityCard = "";
    }
    if (object.directGroup !== undefined && object.directGroup !== null) {
      message.directGroup = String(object.directGroup);
    } else {
      message.directGroup = "";
    }
    if (object.groupsInCharge !== undefined && object.groupsInCharge !== null) {
      for (const e of object.groupsInCharge) {
        message.groupsInCharge.push(String(e));
      }
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
    message.type !== undefined && (obj.type = approverTypeToJSON(message.type));
    message.akaUnit !== undefined && (obj.akaUnit = message.akaUnit);
    message.id !== undefined && (obj.id = message.id);
    message.personalNumber !== undefined &&
      (obj.personalNumber = message.personalNumber);
    message.identityCard !== undefined &&
      (obj.identityCard = message.identityCard);
    message.directGroup !== undefined &&
      (obj.directGroup = message.directGroup);
    if (message.groupsInCharge) {
      obj.groupsInCharge = message.groupsInCharge.map((e) => e);
    } else {
      obj.groupsInCharge = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Approver>): Approver {
    const message = { ...baseApprover } as Approver;
    message.domainUsers = [];
    message.groupsInCharge = [];
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
    if (object.personalNumber !== undefined && object.personalNumber !== null) {
      message.personalNumber = object.personalNumber;
    } else {
      message.personalNumber = "";
    }
    if (object.identityCard !== undefined && object.identityCard !== null) {
      message.identityCard = object.identityCard;
    } else {
      message.identityCard = "";
    }
    if (object.directGroup !== undefined && object.directGroup !== null) {
      message.directGroup = object.directGroup;
    } else {
      message.directGroup = "";
    }
    if (object.groupsInCharge !== undefined && object.groupsInCharge !== null) {
      for (const e of object.groupsInCharge) {
        message.groupsInCharge.push(e);
      }
    }
    return message;
  },
};

const baseGetAllApproverTypesReq: object = { entityId: "" };

export const GetAllApproverTypesReq = {
  encode(
    message: GetAllApproverTypesReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.entityId !== "") {
      writer.uint32(10).string(message.entityId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetAllApproverTypesReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetAllApproverTypesReq } as GetAllApproverTypesReq;
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

  fromJSON(object: any): GetAllApproverTypesReq {
    const message = { ...baseGetAllApproverTypesReq } as GetAllApproverTypesReq;
    if (object.entityId !== undefined && object.entityId !== null) {
      message.entityId = String(object.entityId);
    } else {
      message.entityId = "";
    }
    return message;
  },

  toJSON(message: GetAllApproverTypesReq): unknown {
    const obj: any = {};
    message.entityId !== undefined && (obj.entityId = message.entityId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetAllApproverTypesReq>
  ): GetAllApproverTypesReq {
    const message = { ...baseGetAllApproverTypesReq } as GetAllApproverTypesReq;
    if (object.entityId !== undefined && object.entityId !== null) {
      message.entityId = object.entityId;
    } else {
      message.entityId = "";
    }
    return message;
  },
};

const baseGetAllApproverTypesRes: object = { types: 0 };

export const GetAllApproverTypesRes = {
  encode(
    message: GetAllApproverTypesRes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.types) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.groupsInCharge) {
      groupsInCharge.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetAllApproverTypesRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetAllApproverTypesRes } as GetAllApproverTypesRes;
    message.types = [];
    message.groupsInCharge = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.types.push(reader.int32() as any);
            }
          } else {
            message.types.push(reader.int32() as any);
          }
          break;
        case 2:
          message.groupsInCharge.push(
            groupsInCharge.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetAllApproverTypesRes {
    const message = { ...baseGetAllApproverTypesRes } as GetAllApproverTypesRes;
    message.types = [];
    message.groupsInCharge = [];
    if (object.types !== undefined && object.types !== null) {
      for (const e of object.types) {
        message.types.push(approverTypeFromJSON(e));
      }
    }
    if (object.groupsInCharge !== undefined && object.groupsInCharge !== null) {
      for (const e of object.groupsInCharge) {
        message.groupsInCharge.push(groupsInCharge.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GetAllApproverTypesRes): unknown {
    const obj: any = {};
    if (message.types) {
      obj.types = message.types.map((e) => approverTypeToJSON(e));
    } else {
      obj.types = [];
    }
    if (message.groupsInCharge) {
      obj.groupsInCharge = message.groupsInCharge.map((e) =>
        e ? groupsInCharge.toJSON(e) : undefined
      );
    } else {
      obj.groupsInCharge = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetAllApproverTypesRes>
  ): GetAllApproverTypesRes {
    const message = { ...baseGetAllApproverTypesRes } as GetAllApproverTypesRes;
    message.types = [];
    message.groupsInCharge = [];
    if (object.types !== undefined && object.types !== null) {
      for (const e of object.types) {
        message.types.push(e);
      }
    }
    if (object.groupsInCharge !== undefined && object.groupsInCharge !== null) {
      for (const e of object.groupsInCharge) {
        message.groupsInCharge.push(groupsInCharge.fromPartial(e));
      }
    }
    return message;
  },
};

const basegroupsInCharge: object = { id: "", name: "", hierarchy: "" };

export const groupsInCharge = {
  encode(
    message: groupsInCharge,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.hierarchy !== "") {
      writer.uint32(26).string(message.hierarchy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): groupsInCharge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basegroupsInCharge } as groupsInCharge;
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
          message.hierarchy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): groupsInCharge {
    const message = { ...basegroupsInCharge } as groupsInCharge;
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
    if (object.hierarchy !== undefined && object.hierarchy !== null) {
      message.hierarchy = String(object.hierarchy);
    } else {
      message.hierarchy = "";
    }
    return message;
  },

  toJSON(message: groupsInCharge): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.hierarchy !== undefined && (obj.hierarchy = message.hierarchy);
    return obj;
  },

  fromPartial(object: DeepPartial<groupsInCharge>): groupsInCharge {
    const message = { ...basegroupsInCharge } as groupsInCharge;
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
    if (object.hierarchy !== undefined && object.hierarchy !== null) {
      message.hierarchy = object.hierarchy;
    } else {
      message.hierarchy = "";
    }
    return message;
  },
};

export interface ApproverService {
  AddApprover(request: AddApproverReq): Promise<Approver>;
  GetUserType(request: GetUserTypeReq): Promise<GetUserTypeRes>;
  SearchApproverByDisplayName(
    request: SearchByDisplayNameReq
  ): Promise<ApproverArray>;
  SearchApproverByDomainUser(
    request: SearchByDomainUserReq
  ): Promise<ApproverArray>;
  GetApproverByEntityId(request: GetApproverByEntityIdReq): Promise<Approver>;
  GetAllMyApproverTypes(
    request: GetAllApproverTypesReq
  ): Promise<GetAllApproverTypesRes>;
  UpdateApproverDecision(request: UpdateApproverDecisionReq): Promise<Request>;
  SearchHighCommandersByDisplayName(
    request: SearchHighCommandersByDisplayNameReq
  ): Promise<ApproverArray>;
  GetAllApprovers(request: GetAllApproversReq): Promise<ApproverArray>;
  GetAllApproverIds(request: GetAllApproversReq): Promise<ApproverIdArray>;
  SyncApprover(request: SyncApproverReq): Promise<ApproverArray>;
  DeleteApprover(request: DeleteApproverReq): Promise<SuccessMessage>;
  IsApproverValidForOG(
    request: IsApproverValidForOGReq
  ): Promise<IsApproverValidForOGRes>;
}

export class ApproverServiceClientImpl implements ApproverService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AddApprover = this.AddApprover.bind(this);
    this.GetUserType = this.GetUserType.bind(this);
    this.SearchApproverByDisplayName =
      this.SearchApproverByDisplayName.bind(this);
    this.SearchApproverByDomainUser =
      this.SearchApproverByDomainUser.bind(this);
    this.GetApproverByEntityId = this.GetApproverByEntityId.bind(this);
    this.GetAllMyApproverTypes = this.GetAllMyApproverTypes.bind(this);
    this.UpdateApproverDecision = this.UpdateApproverDecision.bind(this);
    this.SearchHighCommandersByDisplayName =
      this.SearchHighCommandersByDisplayName.bind(this);
    this.GetAllApprovers = this.GetAllApprovers.bind(this);
    this.GetAllApproverIds = this.GetAllApproverIds.bind(this);
    this.SyncApprover = this.SyncApprover.bind(this);
    this.DeleteApprover = this.DeleteApprover.bind(this);
    this.IsApproverValidForOG = this.IsApproverValidForOG.bind(this);
  }
  AddApprover(request: AddApproverReq): Promise<Approver> {
    const data = AddApproverReq.encode(request).finish();
    const promise = this.rpc.request(
      "ApproverService.ApproverService",
      "AddApprover",
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

  GetApproverByEntityId(request: GetApproverByEntityIdReq): Promise<Approver> {
    const data = GetApproverByEntityIdReq.encode(request).finish();
    const promise = this.rpc.request(
      "ApproverService.ApproverService",
      "GetApproverByEntityId",
      data
    );
    return promise.then((data) => Approver.decode(new _m0.Reader(data)));
  }

  GetAllMyApproverTypes(
    request: GetAllApproverTypesReq
  ): Promise<GetAllApproverTypesRes> {
    const data = GetAllApproverTypesReq.encode(request).finish();
    const promise = this.rpc.request(
      "ApproverService.ApproverService",
      "GetAllMyApproverTypes",
      data
    );
    return promise.then((data) =>
      GetAllApproverTypesRes.decode(new _m0.Reader(data))
    );
  }

  UpdateApproverDecision(request: UpdateApproverDecisionReq): Promise<Request> {
    const data = UpdateApproverDecisionReq.encode(request).finish();
    const promise = this.rpc.request(
      "ApproverService.ApproverService",
      "UpdateApproverDecision",
      data
    );
    return promise.then((data) => Request.decode(new _m0.Reader(data)));
  }

  SearchHighCommandersByDisplayName(
    request: SearchHighCommandersByDisplayNameReq
  ): Promise<ApproverArray> {
    const data = SearchHighCommandersByDisplayNameReq.encode(request).finish();
    const promise = this.rpc.request(
      "ApproverService.ApproverService",
      "SearchHighCommandersByDisplayName",
      data
    );
    return promise.then((data) => ApproverArray.decode(new _m0.Reader(data)));
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

  SyncApprover(request: SyncApproverReq): Promise<ApproverArray> {
    const data = SyncApproverReq.encode(request).finish();
    const promise = this.rpc.request(
      "ApproverService.ApproverService",
      "SyncApprover",
      data
    );
    return promise.then((data) => ApproverArray.decode(new _m0.Reader(data)));
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

  IsApproverValidForOG(
    request: IsApproverValidForOGReq
  ): Promise<IsApproverValidForOGRes> {
    const data = IsApproverValidForOGReq.encode(request).finish();
    const promise = this.rpc.request(
      "ApproverService.ApproverService",
      "IsApproverValidForOG",
      data
    );
    return promise.then((data) =>
      IsApproverValidForOGRes.decode(new _m0.Reader(data))
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
