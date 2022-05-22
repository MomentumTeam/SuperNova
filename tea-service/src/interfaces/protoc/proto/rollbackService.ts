/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "RollbackService";

export interface IsRollbackValidReq {
  id: string;
}

export interface IsRollbackValidRes {
  isValid: boolean;
  message: string;
}

export interface RollbackReq {
  id: string;
}

export interface RollbackRes {
  success: boolean;
  message: string;
}

const baseIsRollbackValidReq: object = { id: "" };

export const IsRollbackValidReq = {
  encode(
    message: IsRollbackValidReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IsRollbackValidReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIsRollbackValidReq } as IsRollbackValidReq;
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

  fromJSON(object: any): IsRollbackValidReq {
    const message = { ...baseIsRollbackValidReq } as IsRollbackValidReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: IsRollbackValidReq): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<IsRollbackValidReq>): IsRollbackValidReq {
    const message = { ...baseIsRollbackValidReq } as IsRollbackValidReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
};

const baseIsRollbackValidRes: object = { isValid: false, message: "" };

export const IsRollbackValidRes = {
  encode(
    message: IsRollbackValidRes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.isValid === true) {
      writer.uint32(8).bool(message.isValid);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IsRollbackValidRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIsRollbackValidRes } as IsRollbackValidRes;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isValid = reader.bool();
          break;
        case 2:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IsRollbackValidRes {
    const message = { ...baseIsRollbackValidRes } as IsRollbackValidRes;
    if (object.isValid !== undefined && object.isValid !== null) {
      message.isValid = Boolean(object.isValid);
    } else {
      message.isValid = false;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    } else {
      message.message = "";
    }
    return message;
  },

  toJSON(message: IsRollbackValidRes): unknown {
    const obj: any = {};
    message.isValid !== undefined && (obj.isValid = message.isValid);
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(object: DeepPartial<IsRollbackValidRes>): IsRollbackValidRes {
    const message = { ...baseIsRollbackValidRes } as IsRollbackValidRes;
    if (object.isValid !== undefined && object.isValid !== null) {
      message.isValid = object.isValid;
    } else {
      message.isValid = false;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    } else {
      message.message = "";
    }
    return message;
  },
};

const baseRollbackReq: object = { id: "" };

export const RollbackReq = {
  encode(
    message: RollbackReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RollbackReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRollbackReq } as RollbackReq;
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

  fromJSON(object: any): RollbackReq {
    const message = { ...baseRollbackReq } as RollbackReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: RollbackReq): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<RollbackReq>): RollbackReq {
    const message = { ...baseRollbackReq } as RollbackReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
};

const baseRollbackRes: object = { success: false, message: "" };

export const RollbackRes = {
  encode(
    message: RollbackRes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RollbackRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRollbackRes } as RollbackRes;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        case 2:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RollbackRes {
    const message = { ...baseRollbackRes } as RollbackRes;
    if (object.success !== undefined && object.success !== null) {
      message.success = Boolean(object.success);
    } else {
      message.success = false;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    } else {
      message.message = "";
    }
    return message;
  },

  toJSON(message: RollbackRes): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(object: DeepPartial<RollbackRes>): RollbackRes {
    const message = { ...baseRollbackRes } as RollbackRes;
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    } else {
      message.success = false;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    } else {
      message.message = "";
    }
    return message;
  },
};

export interface RollbackService {
  IsRollbackValid(request: IsRollbackValidReq): Promise<IsRollbackValidRes>;
  RollbackInAD(request: RollbackReq): Promise<RollbackRes>;
  RollbackInKartoffel(request: RollbackReq): Promise<RollbackRes>;
}

export class RollbackServiceClientImpl implements RollbackService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.IsRollbackValid = this.IsRollbackValid.bind(this);
    this.RollbackInAD = this.RollbackInAD.bind(this);
    this.RollbackInKartoffel = this.RollbackInKartoffel.bind(this);
  }
  IsRollbackValid(request: IsRollbackValidReq): Promise<IsRollbackValidRes> {
    const data = IsRollbackValidReq.encode(request).finish();
    const promise = this.rpc.request(
      "RollbackService.RollbackService",
      "IsRollbackValid",
      data
    );
    return promise.then((data) =>
      IsRollbackValidRes.decode(new _m0.Reader(data))
    );
  }

  RollbackInAD(request: RollbackReq): Promise<RollbackRes> {
    const data = RollbackReq.encode(request).finish();
    const promise = this.rpc.request(
      "RollbackService.RollbackService",
      "RollbackInAD",
      data
    );
    return promise.then((data) => RollbackRes.decode(new _m0.Reader(data)));
  }

  RollbackInKartoffel(request: RollbackReq): Promise<RollbackRes> {
    const data = RollbackReq.encode(request).finish();
    const promise = this.rpc.request(
      "RollbackService.RollbackService",
      "RollbackInKartoffel",
      data
    );
    return promise.then((data) => RollbackRes.decode(new _m0.Reader(data)));
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
