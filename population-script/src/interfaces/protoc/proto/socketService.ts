/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Request } from "./requestService";
import { Notification } from "./notificationService";

export const protobufPackage = "SocketService";

export enum SocketEventType {
  NEW_NOTIFICATION = 0,
  READ_NOTIFICATION = 1,
  NEW_REQUEST = 2,
  UPDATE_REQUEST = 3,
  UPDATE_REQUEST_APPROVERS = 4,
  DELETE_REQUEST = 5,
  UNRECOGNIZED = -1,
}

export function socketEventTypeFromJSON(object: any): SocketEventType {
  switch (object) {
    case 0:
    case "NEW_NOTIFICATION":
      return SocketEventType.NEW_NOTIFICATION;
    case 1:
    case "READ_NOTIFICATION":
      return SocketEventType.READ_NOTIFICATION;
    case 2:
    case "NEW_REQUEST":
      return SocketEventType.NEW_REQUEST;
    case 3:
    case "UPDATE_REQUEST":
      return SocketEventType.UPDATE_REQUEST;
    case 4:
    case "UPDATE_REQUEST_APPROVERS":
      return SocketEventType.UPDATE_REQUEST_APPROVERS;
    case 5:
    case "DELETE_REQUEST":
      return SocketEventType.DELETE_REQUEST;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SocketEventType.UNRECOGNIZED;
  }
}

export function socketEventTypeToJSON(object: SocketEventType): string {
  switch (object) {
    case SocketEventType.NEW_NOTIFICATION:
      return "NEW_NOTIFICATION";
    case SocketEventType.READ_NOTIFICATION:
      return "READ_NOTIFICATION";
    case SocketEventType.NEW_REQUEST:
      return "NEW_REQUEST";
    case SocketEventType.UPDATE_REQUEST:
      return "UPDATE_REQUEST";
    case SocketEventType.UPDATE_REQUEST_APPROVERS:
      return "UPDATE_REQUEST_APPROVERS";
    case SocketEventType.DELETE_REQUEST:
      return "DELETE_REQUEST";
    default:
      return "UNKNOWN";
  }
}

export interface SendEventReq {
  eventType: SocketEventType;
  eventData?: SocketEventData | undefined;
  request?: Request | undefined;
}

export interface SuccessMessage {
  success: boolean;
}

export interface SocketEventData {
  notification?: Notification | undefined;
  /** optional RequestService.Request requestObj = 2; */
  oldRequest?: Request | undefined;
  additionalDests: string[];
}

const baseSendEventReq: object = { eventType: 0 };

export const SendEventReq = {
  encode(
    message: SendEventReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.eventType !== 0) {
      writer.uint32(8).int32(message.eventType);
    }
    if (message.eventData !== undefined) {
      SocketEventData.encode(
        message.eventData,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.request !== undefined) {
      Request.encode(message.request, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendEventReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSendEventReq } as SendEventReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventType = reader.int32() as any;
          break;
        case 2:
          message.eventData = SocketEventData.decode(reader, reader.uint32());
          break;
        case 3:
          message.request = Request.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SendEventReq {
    const message = { ...baseSendEventReq } as SendEventReq;
    if (object.eventType !== undefined && object.eventType !== null) {
      message.eventType = socketEventTypeFromJSON(object.eventType);
    } else {
      message.eventType = 0;
    }
    if (object.eventData !== undefined && object.eventData !== null) {
      message.eventData = SocketEventData.fromJSON(object.eventData);
    } else {
      message.eventData = undefined;
    }
    if (object.request !== undefined && object.request !== null) {
      message.request = Request.fromJSON(object.request);
    } else {
      message.request = undefined;
    }
    return message;
  },

  toJSON(message: SendEventReq): unknown {
    const obj: any = {};
    message.eventType !== undefined &&
      (obj.eventType = socketEventTypeToJSON(message.eventType));
    message.eventData !== undefined &&
      (obj.eventData = message.eventData
        ? SocketEventData.toJSON(message.eventData)
        : undefined);
    message.request !== undefined &&
      (obj.request = message.request
        ? Request.toJSON(message.request)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SendEventReq>): SendEventReq {
    const message = { ...baseSendEventReq } as SendEventReq;
    if (object.eventType !== undefined && object.eventType !== null) {
      message.eventType = object.eventType;
    } else {
      message.eventType = 0;
    }
    if (object.eventData !== undefined && object.eventData !== null) {
      message.eventData = SocketEventData.fromPartial(object.eventData);
    } else {
      message.eventData = undefined;
    }
    if (object.request !== undefined && object.request !== null) {
      message.request = Request.fromPartial(object.request);
    } else {
      message.request = undefined;
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

const baseSocketEventData: object = { additionalDests: "" };

export const SocketEventData = {
  encode(
    message: SocketEventData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.notification !== undefined) {
      Notification.encode(
        message.notification,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.oldRequest !== undefined) {
      Request.encode(message.oldRequest, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.additionalDests) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SocketEventData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSocketEventData } as SocketEventData;
    message.additionalDests = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.notification = Notification.decode(reader, reader.uint32());
          break;
        case 2:
          message.oldRequest = Request.decode(reader, reader.uint32());
          break;
        case 3:
          message.additionalDests.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SocketEventData {
    const message = { ...baseSocketEventData } as SocketEventData;
    message.additionalDests = [];
    if (object.notification !== undefined && object.notification !== null) {
      message.notification = Notification.fromJSON(object.notification);
    } else {
      message.notification = undefined;
    }
    if (object.oldRequest !== undefined && object.oldRequest !== null) {
      message.oldRequest = Request.fromJSON(object.oldRequest);
    } else {
      message.oldRequest = undefined;
    }
    if (
      object.additionalDests !== undefined &&
      object.additionalDests !== null
    ) {
      for (const e of object.additionalDests) {
        message.additionalDests.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: SocketEventData): unknown {
    const obj: any = {};
    message.notification !== undefined &&
      (obj.notification = message.notification
        ? Notification.toJSON(message.notification)
        : undefined);
    message.oldRequest !== undefined &&
      (obj.oldRequest = message.oldRequest
        ? Request.toJSON(message.oldRequest)
        : undefined);
    if (message.additionalDests) {
      obj.additionalDests = message.additionalDests.map((e) => e);
    } else {
      obj.additionalDests = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<SocketEventData>): SocketEventData {
    const message = { ...baseSocketEventData } as SocketEventData;
    message.additionalDests = [];
    if (object.notification !== undefined && object.notification !== null) {
      message.notification = Notification.fromPartial(object.notification);
    } else {
      message.notification = undefined;
    }
    if (object.oldRequest !== undefined && object.oldRequest !== null) {
      message.oldRequest = Request.fromPartial(object.oldRequest);
    } else {
      message.oldRequest = undefined;
    }
    if (
      object.additionalDests !== undefined &&
      object.additionalDests !== null
    ) {
      for (const e of object.additionalDests) {
        message.additionalDests.push(e);
      }
    }
    return message;
  },
};

export interface SocketService {
  SendEvent(request: SendEventReq): Promise<SuccessMessage>;
}

export class SocketServiceClientImpl implements SocketService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SendEvent = this.SendEvent.bind(this);
  }
  SendEvent(request: SendEventReq): Promise<SuccessMessage> {
    const data = SendEventReq.encode(request).finish();
    const promise = this.rpc.request(
      "SocketService.SocketService",
      "SendEvent",
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
