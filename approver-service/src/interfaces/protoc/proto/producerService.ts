/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Producer";

export enum ADStage {
  FIRST_AD_STAGE = 0,
  SECOND_AD_STAGE = 1,
  UNRECOGNIZED = -1,
}

export function aDStageFromJSON(object: any): ADStage {
  switch (object) {
    case 0:
    case "FIRST_AD_STAGE":
      return ADStage.FIRST_AD_STAGE;
    case 1:
    case "SECOND_AD_STAGE":
      return ADStage.SECOND_AD_STAGE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ADStage.UNRECOGNIZED;
  }
}

export function aDStageToJSON(object: ADStage): string {
  switch (object) {
    case ADStage.FIRST_AD_STAGE:
      return "FIRST_AD_STAGE";
    case ADStage.SECOND_AD_STAGE:
      return "SECOND_AD_STAGE";
    default:
      return "UNKNOWN";
  }
}

export interface ProduceRequest {
  id: string;
  force?: boolean | undefined;
  adStage?: ADStage | undefined;
  isRollback?: boolean | undefined;
}

export interface SuccessMessage {
  success: boolean;
  message: string;
}

const baseProduceRequest: object = { id: "" };

export const ProduceRequest = {
  encode(
    message: ProduceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.force !== undefined) {
      writer.uint32(16).bool(message.force);
    }
    if (message.adStage !== undefined) {
      writer.uint32(24).int32(message.adStage);
    }
    if (message.isRollback !== undefined) {
      writer.uint32(32).bool(message.isRollback);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProduceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProduceRequest } as ProduceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.force = reader.bool();
          break;
        case 3:
          message.adStage = reader.int32() as any;
          break;
        case 4:
          message.isRollback = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProduceRequest {
    const message = { ...baseProduceRequest } as ProduceRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.force !== undefined && object.force !== null) {
      message.force = Boolean(object.force);
    } else {
      message.force = undefined;
    }
    if (object.adStage !== undefined && object.adStage !== null) {
      message.adStage = aDStageFromJSON(object.adStage);
    } else {
      message.adStage = undefined;
    }
    if (object.isRollback !== undefined && object.isRollback !== null) {
      message.isRollback = Boolean(object.isRollback);
    } else {
      message.isRollback = undefined;
    }
    return message;
  },

  toJSON(message: ProduceRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.force !== undefined && (obj.force = message.force);
    message.adStage !== undefined &&
      (obj.adStage =
        message.adStage !== undefined
          ? aDStageToJSON(message.adStage)
          : undefined);
    message.isRollback !== undefined && (obj.isRollback = message.isRollback);
    return obj;
  },

  fromPartial(object: DeepPartial<ProduceRequest>): ProduceRequest {
    const message = { ...baseProduceRequest } as ProduceRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.force !== undefined && object.force !== null) {
      message.force = object.force;
    } else {
      message.force = undefined;
    }
    if (object.adStage !== undefined && object.adStage !== null) {
      message.adStage = object.adStage;
    } else {
      message.adStage = undefined;
    }
    if (object.isRollback !== undefined && object.isRollback !== null) {
      message.isRollback = object.isRollback;
    } else {
      message.isRollback = undefined;
    }
    return message;
  },
};

const baseSuccessMessage: object = { success: false, message: "" };

export const SuccessMessage = {
  encode(
    message: SuccessMessage,
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

  fromJSON(object: any): SuccessMessage {
    const message = { ...baseSuccessMessage } as SuccessMessage;
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

  toJSON(message: SuccessMessage): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(object: DeepPartial<SuccessMessage>): SuccessMessage {
    const message = { ...baseSuccessMessage } as SuccessMessage;
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

export interface Producer {
  ProduceToKartoffelQueue(request: ProduceRequest): Promise<SuccessMessage>;
  ProduceToADQueue(request: ProduceRequest): Promise<SuccessMessage>;
}

export class ProducerClientImpl implements Producer {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ProduceToKartoffelQueue = this.ProduceToKartoffelQueue.bind(this);
    this.ProduceToADQueue = this.ProduceToADQueue.bind(this);
  }
  ProduceToKartoffelQueue(request: ProduceRequest): Promise<SuccessMessage> {
    const data = ProduceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Producer.Producer",
      "ProduceToKartoffelQueue",
      data
    );
    return promise.then((data) => SuccessMessage.decode(new _m0.Reader(data)));
  }

  ProduceToADQueue(request: ProduceRequest): Promise<SuccessMessage> {
    const data = ProduceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Producer.Producer",
      "ProduceToADQueue",
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
