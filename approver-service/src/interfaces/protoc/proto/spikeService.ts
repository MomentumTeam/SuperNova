/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Spike";

export interface GetSpikeTokenRequest {}

export interface SpikeToken {
  token: string;
}

const baseGetSpikeTokenRequest: object = {};

export const GetSpikeTokenRequest = {
  encode(
    _: GetSpikeTokenRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetSpikeTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetSpikeTokenRequest } as GetSpikeTokenRequest;
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

  fromJSON(_: any): GetSpikeTokenRequest {
    const message = { ...baseGetSpikeTokenRequest } as GetSpikeTokenRequest;
    return message;
  },

  toJSON(_: GetSpikeTokenRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<GetSpikeTokenRequest>): GetSpikeTokenRequest {
    const message = { ...baseGetSpikeTokenRequest } as GetSpikeTokenRequest;
    return message;
  },
};

const baseSpikeToken: object = { token: "" };

export const SpikeToken = {
  encode(
    message: SpikeToken,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpikeToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSpikeToken } as SpikeToken;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SpikeToken {
    const message = { ...baseSpikeToken } as SpikeToken;
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    return message;
  },

  toJSON(message: SpikeToken): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  fromPartial(object: DeepPartial<SpikeToken>): SpikeToken {
    const message = { ...baseSpikeToken } as SpikeToken;
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    return message;
  },
};

export interface Spike {
  GetSpikeToken(request: GetSpikeTokenRequest): Promise<SpikeToken>;
}

export class SpikeClientImpl implements Spike {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetSpikeToken = this.GetSpikeToken.bind(this);
  }
  GetSpikeToken(request: GetSpikeTokenRequest): Promise<SpikeToken> {
    const data = GetSpikeTokenRequest.encode(request).finish();
    const promise = this.rpc.request("Spike.Spike", "GetSpikeToken", data);
    return promise.then((data) => SpikeToken.decode(new _m0.Reader(data)));
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
