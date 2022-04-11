/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "HistoryService";

export interface GetDoneRequestsByEntityIdReq {
  entityId: string;
  from: number;
  to: number;
}

export interface GetDoneRequestsByGroupIdReq {
  groupId: string;
  from: number;
  to: number;
  showRoles?: boolean | undefined;
}

export interface GetDoneRequestsByRoleIdReq {
  roleId: string;
  from: number;
  to: number;
}

export interface Event {
  message: string;
  date: number;
}

export interface EventArray {
  events: Event[];
  totalCount: number;
  till: number;
}

const baseGetDoneRequestsByEntityIdReq: object = {
  entityId: "",
  from: 0,
  to: 0,
};

export const GetDoneRequestsByEntityIdReq = {
  encode(
    message: GetDoneRequestsByEntityIdReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.entityId !== "") {
      writer.uint32(10).string(message.entityId);
    }
    if (message.from !== 0) {
      writer.uint32(16).int32(message.from);
    }
    if (message.to !== 0) {
      writer.uint32(24).int32(message.to);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetDoneRequestsByEntityIdReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetDoneRequestsByEntityIdReq,
    } as GetDoneRequestsByEntityIdReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entityId = reader.string();
          break;
        case 2:
          message.from = reader.int32();
          break;
        case 3:
          message.to = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetDoneRequestsByEntityIdReq {
    const message = {
      ...baseGetDoneRequestsByEntityIdReq,
    } as GetDoneRequestsByEntityIdReq;
    if (object.entityId !== undefined && object.entityId !== null) {
      message.entityId = String(object.entityId);
    } else {
      message.entityId = "";
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

  toJSON(message: GetDoneRequestsByEntityIdReq): unknown {
    const obj: any = {};
    message.entityId !== undefined && (obj.entityId = message.entityId);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetDoneRequestsByEntityIdReq>
  ): GetDoneRequestsByEntityIdReq {
    const message = {
      ...baseGetDoneRequestsByEntityIdReq,
    } as GetDoneRequestsByEntityIdReq;
    if (object.entityId !== undefined && object.entityId !== null) {
      message.entityId = object.entityId;
    } else {
      message.entityId = "";
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

const baseGetDoneRequestsByGroupIdReq: object = { groupId: "", from: 0, to: 0 };

export const GetDoneRequestsByGroupIdReq = {
  encode(
    message: GetDoneRequestsByGroupIdReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.groupId !== "") {
      writer.uint32(10).string(message.groupId);
    }
    if (message.from !== 0) {
      writer.uint32(16).int32(message.from);
    }
    if (message.to !== 0) {
      writer.uint32(24).int32(message.to);
    }
    if (message.showRoles !== undefined) {
      writer.uint32(32).bool(message.showRoles);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetDoneRequestsByGroupIdReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetDoneRequestsByGroupIdReq,
    } as GetDoneRequestsByGroupIdReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.string();
          break;
        case 2:
          message.from = reader.int32();
          break;
        case 3:
          message.to = reader.int32();
          break;
        case 4:
          message.showRoles = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetDoneRequestsByGroupIdReq {
    const message = {
      ...baseGetDoneRequestsByGroupIdReq,
    } as GetDoneRequestsByGroupIdReq;
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = String(object.groupId);
    } else {
      message.groupId = "";
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
    if (object.showRoles !== undefined && object.showRoles !== null) {
      message.showRoles = Boolean(object.showRoles);
    } else {
      message.showRoles = undefined;
    }
    return message;
  },

  toJSON(message: GetDoneRequestsByGroupIdReq): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = message.groupId);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    message.showRoles !== undefined && (obj.showRoles = message.showRoles);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetDoneRequestsByGroupIdReq>
  ): GetDoneRequestsByGroupIdReq {
    const message = {
      ...baseGetDoneRequestsByGroupIdReq,
    } as GetDoneRequestsByGroupIdReq;
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = object.groupId;
    } else {
      message.groupId = "";
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
    if (object.showRoles !== undefined && object.showRoles !== null) {
      message.showRoles = object.showRoles;
    } else {
      message.showRoles = undefined;
    }
    return message;
  },
};

const baseGetDoneRequestsByRoleIdReq: object = { roleId: "", from: 0, to: 0 };

export const GetDoneRequestsByRoleIdReq = {
  encode(
    message: GetDoneRequestsByRoleIdReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.roleId !== "") {
      writer.uint32(10).string(message.roleId);
    }
    if (message.from !== 0) {
      writer.uint32(16).int32(message.from);
    }
    if (message.to !== 0) {
      writer.uint32(24).int32(message.to);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetDoneRequestsByRoleIdReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetDoneRequestsByRoleIdReq,
    } as GetDoneRequestsByRoleIdReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.roleId = reader.string();
          break;
        case 2:
          message.from = reader.int32();
          break;
        case 3:
          message.to = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetDoneRequestsByRoleIdReq {
    const message = {
      ...baseGetDoneRequestsByRoleIdReq,
    } as GetDoneRequestsByRoleIdReq;
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = String(object.roleId);
    } else {
      message.roleId = "";
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

  toJSON(message: GetDoneRequestsByRoleIdReq): unknown {
    const obj: any = {};
    message.roleId !== undefined && (obj.roleId = message.roleId);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetDoneRequestsByRoleIdReq>
  ): GetDoneRequestsByRoleIdReq {
    const message = {
      ...baseGetDoneRequestsByRoleIdReq,
    } as GetDoneRequestsByRoleIdReq;
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = object.roleId;
    } else {
      message.roleId = "";
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

const baseEvent: object = { message: "", date: 0 };

export const Event = {
  encode(message: Event, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.date !== 0) {
      writer.uint32(16).int64(message.date);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Event {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEvent } as Event;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        case 2:
          message.date = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Event {
    const message = { ...baseEvent } as Event;
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    } else {
      message.message = "";
    }
    if (object.date !== undefined && object.date !== null) {
      message.date = Number(object.date);
    } else {
      message.date = 0;
    }
    return message;
  },

  toJSON(message: Event): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.date !== undefined && (obj.date = message.date);
    return obj;
  },

  fromPartial(object: DeepPartial<Event>): Event {
    const message = { ...baseEvent } as Event;
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    } else {
      message.message = "";
    }
    if (object.date !== undefined && object.date !== null) {
      message.date = object.date;
    } else {
      message.date = 0;
    }
    return message;
  },
};

const baseEventArray: object = { totalCount: 0, till: 0 };

export const EventArray = {
  encode(
    message: EventArray,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).int32(message.totalCount);
    }
    if (message.till !== 0) {
      writer.uint32(24).int32(message.till);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventArray {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventArray } as EventArray;
    message.events = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalCount = reader.int32();
          break;
        case 3:
          message.till = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventArray {
    const message = { ...baseEventArray } as EventArray;
    message.events = [];
    if (object.events !== undefined && object.events !== null) {
      for (const e of object.events) {
        message.events.push(Event.fromJSON(e));
      }
    }
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = Number(object.totalCount);
    } else {
      message.totalCount = 0;
    }
    if (object.till !== undefined && object.till !== null) {
      message.till = Number(object.till);
    } else {
      message.till = 0;
    }
    return message;
  },

  toJSON(message: EventArray): unknown {
    const obj: any = {};
    if (message.events) {
      obj.events = message.events.map((e) => (e ? Event.toJSON(e) : undefined));
    } else {
      obj.events = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.till !== undefined && (obj.till = message.till);
    return obj;
  },

  fromPartial(object: DeepPartial<EventArray>): EventArray {
    const message = { ...baseEventArray } as EventArray;
    message.events = [];
    if (object.events !== undefined && object.events !== null) {
      for (const e of object.events) {
        message.events.push(Event.fromPartial(e));
      }
    }
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = object.totalCount;
    } else {
      message.totalCount = 0;
    }
    if (object.till !== undefined && object.till !== null) {
      message.till = object.till;
    } else {
      message.till = 0;
    }
    return message;
  },
};

export interface HistoryService {
  GetEventsByRoleId(request: GetDoneRequestsByRoleIdReq): Promise<EventArray>;
  GetEventsByGroupId(request: GetDoneRequestsByGroupIdReq): Promise<EventArray>;
  GetEventsByEntityId(
    request: GetDoneRequestsByEntityIdReq
  ): Promise<EventArray>;
  GetEventsSubmmitedByEntityId(
    request: GetDoneRequestsByEntityIdReq
  ): Promise<EventArray>;
}

export class HistoryServiceClientImpl implements HistoryService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetEventsByRoleId = this.GetEventsByRoleId.bind(this);
    this.GetEventsByGroupId = this.GetEventsByGroupId.bind(this);
    this.GetEventsByEntityId = this.GetEventsByEntityId.bind(this);
    this.GetEventsSubmmitedByEntityId =
      this.GetEventsSubmmitedByEntityId.bind(this);
  }
  GetEventsByRoleId(request: GetDoneRequestsByRoleIdReq): Promise<EventArray> {
    const data = GetDoneRequestsByRoleIdReq.encode(request).finish();
    const promise = this.rpc.request(
      "HistoryService.HistoryService",
      "GetEventsByRoleId",
      data
    );
    return promise.then((data) => EventArray.decode(new _m0.Reader(data)));
  }

  GetEventsByGroupId(
    request: GetDoneRequestsByGroupIdReq
  ): Promise<EventArray> {
    const data = GetDoneRequestsByGroupIdReq.encode(request).finish();
    const promise = this.rpc.request(
      "HistoryService.HistoryService",
      "GetEventsByGroupId",
      data
    );
    return promise.then((data) => EventArray.decode(new _m0.Reader(data)));
  }

  GetEventsByEntityId(
    request: GetDoneRequestsByEntityIdReq
  ): Promise<EventArray> {
    const data = GetDoneRequestsByEntityIdReq.encode(request).finish();
    const promise = this.rpc.request(
      "HistoryService.HistoryService",
      "GetEventsByEntityId",
      data
    );
    return promise.then((data) => EventArray.decode(new _m0.Reader(data)));
  }

  GetEventsSubmmitedByEntityId(
    request: GetDoneRequestsByEntityIdReq
  ): Promise<EventArray> {
    const data = GetDoneRequestsByEntityIdReq.encode(request).finish();
    const promise = this.rpc.request(
      "HistoryService.HistoryService",
      "GetEventsSubmmitedByEntityId",
      data
    );
    return promise.then((data) => EventArray.decode(new _m0.Reader(data)));
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
