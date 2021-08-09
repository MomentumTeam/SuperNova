/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "NotificationService";

export enum NotificationType {
  REQUEST_SUBMITTED = 0,
  REQUEST_APPROVED_1 = 1,
  REQUEST_DECLINED_1 = 2,
  REQUEST_APPROVED_2 = 3,
  REQUEST_DECLINED_2 = 4,
  REQUEST_APPROVED_3 = 5,
  REQUEST_DECLINED_3 = 6,
  REQUEST_IN_PROGRESS = 7,
  REQUEST_DECLINED = 8,
  KARTOFFEL_STAGE_DONE = 9,
  KARTOFFEL_STAGE_FAILED = 10,
  AD_STAGE_DONE = 11,
  AD_STAGE_FAILED = 12,
  REQUEST_DONE = 13,
  REQUEST_FAILED = 14,
  UNRECOGNIZED = -1,
}

export function notificationTypeFromJSON(object: any): NotificationType {
  switch (object) {
    case 0:
    case "REQUEST_SUBMITTED":
      return NotificationType.REQUEST_SUBMITTED;
    case 1:
    case "REQUEST_APPROVED_1":
      return NotificationType.REQUEST_APPROVED_1;
    case 2:
    case "REQUEST_DECLINED_1":
      return NotificationType.REQUEST_DECLINED_1;
    case 3:
    case "REQUEST_APPROVED_2":
      return NotificationType.REQUEST_APPROVED_2;
    case 4:
    case "REQUEST_DECLINED_2":
      return NotificationType.REQUEST_DECLINED_2;
    case 5:
    case "REQUEST_APPROVED_3":
      return NotificationType.REQUEST_APPROVED_3;
    case 6:
    case "REQUEST_DECLINED_3":
      return NotificationType.REQUEST_DECLINED_3;
    case 7:
    case "REQUEST_IN_PROGRESS":
      return NotificationType.REQUEST_IN_PROGRESS;
    case 8:
    case "REQUEST_DECLINED":
      return NotificationType.REQUEST_DECLINED;
    case 9:
    case "KARTOFFEL_STAGE_DONE":
      return NotificationType.KARTOFFEL_STAGE_DONE;
    case 10:
    case "KARTOFFEL_STAGE_FAILED":
      return NotificationType.KARTOFFEL_STAGE_FAILED;
    case 11:
    case "AD_STAGE_DONE":
      return NotificationType.AD_STAGE_DONE;
    case 12:
    case "AD_STAGE_FAILED":
      return NotificationType.AD_STAGE_FAILED;
    case 13:
    case "REQUEST_DONE":
      return NotificationType.REQUEST_DONE;
    case 14:
    case "REQUEST_FAILED":
      return NotificationType.REQUEST_FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return NotificationType.UNRECOGNIZED;
  }
}

export function notificationTypeToJSON(object: NotificationType): string {
  switch (object) {
    case NotificationType.REQUEST_SUBMITTED:
      return "REQUEST_SUBMITTED";
    case NotificationType.REQUEST_APPROVED_1:
      return "REQUEST_APPROVED_1";
    case NotificationType.REQUEST_DECLINED_1:
      return "REQUEST_DECLINED_1";
    case NotificationType.REQUEST_APPROVED_2:
      return "REQUEST_APPROVED_2";
    case NotificationType.REQUEST_DECLINED_2:
      return "REQUEST_DECLINED_2";
    case NotificationType.REQUEST_APPROVED_3:
      return "REQUEST_APPROVED_3";
    case NotificationType.REQUEST_DECLINED_3:
      return "REQUEST_DECLINED_3";
    case NotificationType.REQUEST_IN_PROGRESS:
      return "REQUEST_IN_PROGRESS";
    case NotificationType.REQUEST_DECLINED:
      return "REQUEST_DECLINED";
    case NotificationType.KARTOFFEL_STAGE_DONE:
      return "KARTOFFEL_STAGE_DONE";
    case NotificationType.KARTOFFEL_STAGE_FAILED:
      return "KARTOFFEL_STAGE_FAILED";
    case NotificationType.AD_STAGE_DONE:
      return "AD_STAGE_DONE";
    case NotificationType.AD_STAGE_FAILED:
      return "AD_STAGE_FAILED";
    case NotificationType.REQUEST_DONE:
      return "REQUEST_DONE";
    case NotificationType.REQUEST_FAILED:
      return "REQUEST_FAILED";
    default:
      return "UNKNOWN";
  }
}

export interface SuccessMessage {
  success: boolean;
}

export interface NotificationIdArray {
  notificationIds: string[];
}

export interface CreateNotificationReq {
  type: NotificationType;
  ownerId: string;
  requestId: string;
  message: string;
}

export interface Notification {
  id: string;
  type: NotificationType;
  ownerId: string;
  requestId: string;
  message: string;
  createdAt: number;
  read: boolean;
}

export interface GetNotificationsByOwnerIdReq {
  ownerId: string;
  startTime: number;
  from: number;
  to: number;
}

export interface NotificationArray {
  notifications: Notification[];
  totalCount: number;
}

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

const baseNotificationIdArray: object = { notificationIds: "" };

export const NotificationIdArray = {
  encode(
    message: NotificationIdArray,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.notificationIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NotificationIdArray {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNotificationIdArray } as NotificationIdArray;
    message.notificationIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.notificationIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NotificationIdArray {
    const message = { ...baseNotificationIdArray } as NotificationIdArray;
    message.notificationIds = [];
    if (
      object.notificationIds !== undefined &&
      object.notificationIds !== null
    ) {
      for (const e of object.notificationIds) {
        message.notificationIds.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: NotificationIdArray): unknown {
    const obj: any = {};
    if (message.notificationIds) {
      obj.notificationIds = message.notificationIds.map((e) => e);
    } else {
      obj.notificationIds = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<NotificationIdArray>): NotificationIdArray {
    const message = { ...baseNotificationIdArray } as NotificationIdArray;
    message.notificationIds = [];
    if (
      object.notificationIds !== undefined &&
      object.notificationIds !== null
    ) {
      for (const e of object.notificationIds) {
        message.notificationIds.push(e);
      }
    }
    return message;
  },
};

const baseCreateNotificationReq: object = {
  type: 0,
  ownerId: "",
  requestId: "",
  message: "",
};

export const CreateNotificationReq = {
  encode(
    message: CreateNotificationReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.ownerId !== "") {
      writer.uint32(18).string(message.ownerId);
    }
    if (message.requestId !== "") {
      writer.uint32(26).string(message.requestId);
    }
    if (message.message !== "") {
      writer.uint32(34).string(message.message);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateNotificationReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateNotificationReq } as CreateNotificationReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.ownerId = reader.string();
          break;
        case 3:
          message.requestId = reader.string();
          break;
        case 4:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateNotificationReq {
    const message = { ...baseCreateNotificationReq } as CreateNotificationReq;
    if (object.type !== undefined && object.type !== null) {
      message.type = notificationTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.ownerId !== undefined && object.ownerId !== null) {
      message.ownerId = String(object.ownerId);
    } else {
      message.ownerId = "";
    }
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = String(object.requestId);
    } else {
      message.requestId = "";
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    } else {
      message.message = "";
    }
    return message;
  },

  toJSON(message: CreateNotificationReq): unknown {
    const obj: any = {};
    message.type !== undefined &&
      (obj.type = notificationTypeToJSON(message.type));
    message.ownerId !== undefined && (obj.ownerId = message.ownerId);
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateNotificationReq>
  ): CreateNotificationReq {
    const message = { ...baseCreateNotificationReq } as CreateNotificationReq;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.ownerId !== undefined && object.ownerId !== null) {
      message.ownerId = object.ownerId;
    } else {
      message.ownerId = "";
    }
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = object.requestId;
    } else {
      message.requestId = "";
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    } else {
      message.message = "";
    }
    return message;
  },
};

const baseNotification: object = {
  id: "",
  type: 0,
  ownerId: "",
  requestId: "",
  message: "",
  createdAt: 0,
  read: false,
};

export const Notification = {
  encode(
    message: Notification,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.ownerId !== "") {
      writer.uint32(26).string(message.ownerId);
    }
    if (message.requestId !== "") {
      writer.uint32(34).string(message.requestId);
    }
    if (message.message !== "") {
      writer.uint32(42).string(message.message);
    }
    if (message.createdAt !== 0) {
      writer.uint32(48).int64(message.createdAt);
    }
    if (message.read === true) {
      writer.uint32(56).bool(message.read);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Notification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNotification } as Notification;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        case 3:
          message.ownerId = reader.string();
          break;
        case 4:
          message.requestId = reader.string();
          break;
        case 5:
          message.message = reader.string();
          break;
        case 6:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.read = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Notification {
    const message = { ...baseNotification } as Notification;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = notificationTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.ownerId !== undefined && object.ownerId !== null) {
      message.ownerId = String(object.ownerId);
    } else {
      message.ownerId = "";
    }
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = String(object.requestId);
    } else {
      message.requestId = "";
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    } else {
      message.message = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Number(object.createdAt);
    } else {
      message.createdAt = 0;
    }
    if (object.read !== undefined && object.read !== null) {
      message.read = Boolean(object.read);
    } else {
      message.read = false;
    }
    return message;
  },

  toJSON(message: Notification): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.type !== undefined &&
      (obj.type = notificationTypeToJSON(message.type));
    message.ownerId !== undefined && (obj.ownerId = message.ownerId);
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.message !== undefined && (obj.message = message.message);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.read !== undefined && (obj.read = message.read);
    return obj;
  },

  fromPartial(object: DeepPartial<Notification>): Notification {
    const message = { ...baseNotification } as Notification;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.ownerId !== undefined && object.ownerId !== null) {
      message.ownerId = object.ownerId;
    } else {
      message.ownerId = "";
    }
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = object.requestId;
    } else {
      message.requestId = "";
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    } else {
      message.message = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = 0;
    }
    if (object.read !== undefined && object.read !== null) {
      message.read = object.read;
    } else {
      message.read = false;
    }
    return message;
  },
};

const baseGetNotificationsByOwnerIdReq: object = {
  ownerId: "",
  startTime: 0,
  from: 0,
  to: 0,
};

export const GetNotificationsByOwnerIdReq = {
  encode(
    message: GetNotificationsByOwnerIdReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ownerId !== "") {
      writer.uint32(10).string(message.ownerId);
    }
    if (message.startTime !== 0) {
      writer.uint32(16).int64(message.startTime);
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
  ): GetNotificationsByOwnerIdReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetNotificationsByOwnerIdReq,
    } as GetNotificationsByOwnerIdReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerId = reader.string();
          break;
        case 2:
          message.startTime = longToNumber(reader.int64() as Long);
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

  fromJSON(object: any): GetNotificationsByOwnerIdReq {
    const message = {
      ...baseGetNotificationsByOwnerIdReq,
    } as GetNotificationsByOwnerIdReq;
    if (object.ownerId !== undefined && object.ownerId !== null) {
      message.ownerId = String(object.ownerId);
    } else {
      message.ownerId = "";
    }
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = Number(object.startTime);
    } else {
      message.startTime = 0;
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

  toJSON(message: GetNotificationsByOwnerIdReq): unknown {
    const obj: any = {};
    message.ownerId !== undefined && (obj.ownerId = message.ownerId);
    message.startTime !== undefined && (obj.startTime = message.startTime);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetNotificationsByOwnerIdReq>
  ): GetNotificationsByOwnerIdReq {
    const message = {
      ...baseGetNotificationsByOwnerIdReq,
    } as GetNotificationsByOwnerIdReq;
    if (object.ownerId !== undefined && object.ownerId !== null) {
      message.ownerId = object.ownerId;
    } else {
      message.ownerId = "";
    }
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = object.startTime;
    } else {
      message.startTime = 0;
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

const baseNotificationArray: object = { totalCount: 0 };

export const NotificationArray = {
  encode(
    message: NotificationArray,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.notifications) {
      Notification.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).int32(message.totalCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NotificationArray {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNotificationArray } as NotificationArray;
    message.notifications = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.notifications.push(
            Notification.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): NotificationArray {
    const message = { ...baseNotificationArray } as NotificationArray;
    message.notifications = [];
    if (object.notifications !== undefined && object.notifications !== null) {
      for (const e of object.notifications) {
        message.notifications.push(Notification.fromJSON(e));
      }
    }
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = Number(object.totalCount);
    } else {
      message.totalCount = 0;
    }
    return message;
  },

  toJSON(message: NotificationArray): unknown {
    const obj: any = {};
    if (message.notifications) {
      obj.notifications = message.notifications.map((e) =>
        e ? Notification.toJSON(e) : undefined
      );
    } else {
      obj.notifications = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    return obj;
  },

  fromPartial(object: DeepPartial<NotificationArray>): NotificationArray {
    const message = { ...baseNotificationArray } as NotificationArray;
    message.notifications = [];
    if (object.notifications !== undefined && object.notifications !== null) {
      for (const e of object.notifications) {
        message.notifications.push(Notification.fromPartial(e));
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

export interface NotificationService {
  CreateNotification(request: CreateNotificationReq): Promise<Notification>;
  GetNotificationsByOwnerId(
    request: GetNotificationsByOwnerIdReq
  ): Promise<NotificationArray>;
  MarkAsRead(request: NotificationIdArray): Promise<SuccessMessage>;
}

export class NotificationServiceClientImpl implements NotificationService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateNotification = this.CreateNotification.bind(this);
    this.GetNotificationsByOwnerId = this.GetNotificationsByOwnerId.bind(this);
    this.MarkAsRead = this.MarkAsRead.bind(this);
  }
  CreateNotification(request: CreateNotificationReq): Promise<Notification> {
    const data = CreateNotificationReq.encode(request).finish();
    const promise = this.rpc.request(
      "NotificationService.NotificationService",
      "CreateNotification",
      data
    );
    return promise.then((data) => Notification.decode(new _m0.Reader(data)));
  }

  GetNotificationsByOwnerId(
    request: GetNotificationsByOwnerIdReq
  ): Promise<NotificationArray> {
    const data = GetNotificationsByOwnerIdReq.encode(request).finish();
    const promise = this.rpc.request(
      "NotificationService.NotificationService",
      "GetNotificationsByOwnerId",
      data
    );
    return promise.then((data) =>
      NotificationArray.decode(new _m0.Reader(data))
    );
  }

  MarkAsRead(request: NotificationIdArray): Promise<SuccessMessage> {
    const data = NotificationIdArray.encode(request).finish();
    const promise = this.rpc.request(
      "NotificationService.NotificationService",
      "MarkAsRead",
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
