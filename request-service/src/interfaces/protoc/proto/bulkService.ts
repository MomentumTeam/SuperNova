/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  CreateRoleBulkRes,
  ChangeRoleHierarchyBulkRes,
  CreateRoleBulkReq,
  ChangeRoleHierarchyBulkReq,
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

export interface GetBulkRequestExampleReq {
  bulkType: BulkType;
}

export interface GetBulkRequestExampleRes {
  bulkFileName: string;
}

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

export interface BulkService {
  CreateRoleBulkRequest(request: CreateRoleBulkReq): Promise<CreateRoleBulkRes>;
  ChangeRoleHierarchyBulkRequest(
    request: ChangeRoleHierarchyBulkReq
  ): Promise<ChangeRoleHierarchyBulkRes>;
  GetBulkRequestExample(
    request: GetBulkRequestExampleReq
  ): Promise<GetBulkRequestExampleRes>;
}

export class BulkServiceClientImpl implements BulkService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateRoleBulkRequest = this.CreateRoleBulkRequest.bind(this);
    this.ChangeRoleHierarchyBulkRequest =
      this.ChangeRoleHierarchyBulkRequest.bind(this);
    this.GetBulkRequestExample = this.GetBulkRequestExample.bind(this);
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
