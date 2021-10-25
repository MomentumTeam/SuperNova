/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Request } from "./requestService";

export const protobufPackage = "MailService";

export enum MailType {
  REQUEST_APPROVED_1 = 0,
  REQUEST_DECLINED_1 = 1,
  REQUEST_APPROVED_2 = 2,
  REQUEST_DECLINED_2 = 3,
  REQUEST_APPROVED_3 = 4,
  REQUEST_DECLINED_3 = 5,
  REQUEST_DONE = 6,
  REQUEST_FAILED = 7,
  REQUEST_TOO_OLD = 8,
  REQUEST_NEW_USER = 9,
  REQUEST_SUBMITTED = 10,
  UNRECOGNIZED = -1,
}

export function mailTypeFromJSON(object: any): MailType {
  switch (object) {
    case 0:
    case "REQUEST_APPROVED_1":
      return MailType.REQUEST_APPROVED_1;
    case 1:
    case "REQUEST_DECLINED_1":
      return MailType.REQUEST_DECLINED_1;
    case 2:
    case "REQUEST_APPROVED_2":
      return MailType.REQUEST_APPROVED_2;
    case 3:
    case "REQUEST_DECLINED_2":
      return MailType.REQUEST_DECLINED_2;
    case 4:
    case "REQUEST_APPROVED_3":
      return MailType.REQUEST_APPROVED_3;
    case 5:
    case "REQUEST_DECLINED_3":
      return MailType.REQUEST_DECLINED_3;
    case 6:
    case "REQUEST_DONE":
      return MailType.REQUEST_DONE;
    case 7:
    case "REQUEST_FAILED":
      return MailType.REQUEST_FAILED;
    case 8:
    case "REQUEST_TOO_OLD":
      return MailType.REQUEST_TOO_OLD;
    case 9:
    case "REQUEST_NEW_USER":
      return MailType.REQUEST_NEW_USER;
    case 10:
    case "REQUEST_SUBMITTED":
      return MailType.REQUEST_SUBMITTED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MailType.UNRECOGNIZED;
  }
}

export function mailTypeToJSON(object: MailType): string {
  switch (object) {
    case MailType.REQUEST_APPROVED_1:
      return "REQUEST_APPROVED_1";
    case MailType.REQUEST_DECLINED_1:
      return "REQUEST_DECLINED_1";
    case MailType.REQUEST_APPROVED_2:
      return "REQUEST_APPROVED_2";
    case MailType.REQUEST_DECLINED_2:
      return "REQUEST_DECLINED_2";
    case MailType.REQUEST_APPROVED_3:
      return "REQUEST_APPROVED_3";
    case MailType.REQUEST_DECLINED_3:
      return "REQUEST_DECLINED_3";
    case MailType.REQUEST_DONE:
      return "REQUEST_DONE";
    case MailType.REQUEST_FAILED:
      return "REQUEST_FAILED";
    case MailType.REQUEST_TOO_OLD:
      return "REQUEST_TOO_OLD";
    case MailType.REQUEST_NEW_USER:
      return "REQUEST_NEW_USER";
    case MailType.REQUEST_SUBMITTED:
      return "REQUEST_SUBMITTED";
    default:
      return "UNKNOWN";
  }
}

export interface SendCustomMailReq {
  entityId: string;
  title: string;
  message: string;
  html: string;
}

export interface SuccessMessage {
  success: boolean;
  message: string;
}

export interface SendMailReq {
  type: MailType;
  request: Request | undefined;
}

const baseSendCustomMailReq: object = {
  entityId: "",
  title: "",
  message: "",
  html: "",
};

export const SendCustomMailReq = {
  encode(
    message: SendCustomMailReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.entityId !== "") {
      writer.uint32(10).string(message.entityId);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    if (message.html !== "") {
      writer.uint32(34).string(message.html);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendCustomMailReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSendCustomMailReq } as SendCustomMailReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entityId = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.message = reader.string();
          break;
        case 4:
          message.html = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SendCustomMailReq {
    const message = { ...baseSendCustomMailReq } as SendCustomMailReq;
    if (object.entityId !== undefined && object.entityId !== null) {
      message.entityId = String(object.entityId);
    } else {
      message.entityId = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    } else {
      message.message = "";
    }
    if (object.html !== undefined && object.html !== null) {
      message.html = String(object.html);
    } else {
      message.html = "";
    }
    return message;
  },

  toJSON(message: SendCustomMailReq): unknown {
    const obj: any = {};
    message.entityId !== undefined && (obj.entityId = message.entityId);
    message.title !== undefined && (obj.title = message.title);
    message.message !== undefined && (obj.message = message.message);
    message.html !== undefined && (obj.html = message.html);
    return obj;
  },

  fromPartial(object: DeepPartial<SendCustomMailReq>): SendCustomMailReq {
    const message = { ...baseSendCustomMailReq } as SendCustomMailReq;
    if (object.entityId !== undefined && object.entityId !== null) {
      message.entityId = object.entityId;
    } else {
      message.entityId = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    } else {
      message.message = "";
    }
    if (object.html !== undefined && object.html !== null) {
      message.html = object.html;
    } else {
      message.html = "";
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

const baseSendMailReq: object = { type: 0 };

export const SendMailReq = {
  encode(
    message: SendMailReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.request !== undefined) {
      Request.encode(message.request, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendMailReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSendMailReq } as SendMailReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.request = Request.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SendMailReq {
    const message = { ...baseSendMailReq } as SendMailReq;
    if (object.type !== undefined && object.type !== null) {
      message.type = mailTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.request !== undefined && object.request !== null) {
      message.request = Request.fromJSON(object.request);
    } else {
      message.request = undefined;
    }
    return message;
  },

  toJSON(message: SendMailReq): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = mailTypeToJSON(message.type));
    message.request !== undefined &&
      (obj.request = message.request
        ? Request.toJSON(message.request)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SendMailReq>): SendMailReq {
    const message = { ...baseSendMailReq } as SendMailReq;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.request !== undefined && object.request !== null) {
      message.request = Request.fromPartial(object.request);
    } else {
      message.request = undefined;
    }
    return message;
  },
};

export interface MailService {
  SendCustomMail(request: SendCustomMailReq): Promise<SuccessMessage>;
  SendMail(request: SendMailReq): Promise<SuccessMessage>;
}

export class MailServiceClientImpl implements MailService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SendCustomMail = this.SendCustomMail.bind(this);
    this.SendMail = this.SendMail.bind(this);
  }
  SendCustomMail(request: SendCustomMailReq): Promise<SuccessMessage> {
    const data = SendCustomMailReq.encode(request).finish();
    const promise = this.rpc.request(
      "MailService.MailService",
      "SendCustomMail",
      data
    );
    return promise.then((data) => SuccessMessage.decode(new _m0.Reader(data)));
  }

  SendMail(request: SendMailReq): Promise<SuccessMessage> {
    const data = SendMailReq.encode(request).finish();
    const promise = this.rpc.request(
      "MailService.MailService",
      "SendMail",
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
