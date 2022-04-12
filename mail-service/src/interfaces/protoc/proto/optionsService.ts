/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "OptionsService";

export interface GetOptionsByEntityIdReq {
  entityId: string;
}

export interface Options {
  toggleProfilePicture: boolean;
  getMailNotifications: boolean;
  showPhoneNumber: boolean;
  favoriteCommanders: string[];
}

export interface UpdateUserOptionsReq {
  entityId: string;
  toggleProfilePicture?: boolean | undefined;
  getMailNotifications?: boolean | undefined;
  showPhoneNumber?: boolean | undefined;
}

export interface FavoriteCommanderReq {
  entityId: string;
  commanderId: string;
}

const baseGetOptionsByEntityIdReq: object = { entityId: "" };

export const GetOptionsByEntityIdReq = {
  encode(
    message: GetOptionsByEntityIdReq,
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
  ): GetOptionsByEntityIdReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetOptionsByEntityIdReq,
    } as GetOptionsByEntityIdReq;
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

  fromJSON(object: any): GetOptionsByEntityIdReq {
    const message = {
      ...baseGetOptionsByEntityIdReq,
    } as GetOptionsByEntityIdReq;
    if (object.entityId !== undefined && object.entityId !== null) {
      message.entityId = String(object.entityId);
    } else {
      message.entityId = "";
    }
    return message;
  },

  toJSON(message: GetOptionsByEntityIdReq): unknown {
    const obj: any = {};
    message.entityId !== undefined && (obj.entityId = message.entityId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetOptionsByEntityIdReq>
  ): GetOptionsByEntityIdReq {
    const message = {
      ...baseGetOptionsByEntityIdReq,
    } as GetOptionsByEntityIdReq;
    if (object.entityId !== undefined && object.entityId !== null) {
      message.entityId = object.entityId;
    } else {
      message.entityId = "";
    }
    return message;
  },
};

const baseOptions: object = {
  toggleProfilePicture: false,
  getMailNotifications: false,
  showPhoneNumber: false,
  favoriteCommanders: "",
};

export const Options = {
  encode(
    message: Options,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.toggleProfilePicture === true) {
      writer.uint32(8).bool(message.toggleProfilePicture);
    }
    if (message.getMailNotifications === true) {
      writer.uint32(16).bool(message.getMailNotifications);
    }
    if (message.showPhoneNumber === true) {
      writer.uint32(24).bool(message.showPhoneNumber);
    }
    for (const v of message.favoriteCommanders) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Options {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOptions } as Options;
    message.favoriteCommanders = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.toggleProfilePicture = reader.bool();
          break;
        case 2:
          message.getMailNotifications = reader.bool();
          break;
        case 3:
          message.showPhoneNumber = reader.bool();
          break;
        case 4:
          message.favoriteCommanders.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Options {
    const message = { ...baseOptions } as Options;
    message.favoriteCommanders = [];
    if (
      object.toggleProfilePicture !== undefined &&
      object.toggleProfilePicture !== null
    ) {
      message.toggleProfilePicture = Boolean(object.toggleProfilePicture);
    } else {
      message.toggleProfilePicture = false;
    }
    if (
      object.getMailNotifications !== undefined &&
      object.getMailNotifications !== null
    ) {
      message.getMailNotifications = Boolean(object.getMailNotifications);
    } else {
      message.getMailNotifications = false;
    }
    if (
      object.showPhoneNumber !== undefined &&
      object.showPhoneNumber !== null
    ) {
      message.showPhoneNumber = Boolean(object.showPhoneNumber);
    } else {
      message.showPhoneNumber = false;
    }
    if (
      object.favoriteCommanders !== undefined &&
      object.favoriteCommanders !== null
    ) {
      for (const e of object.favoriteCommanders) {
        message.favoriteCommanders.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: Options): unknown {
    const obj: any = {};
    message.toggleProfilePicture !== undefined &&
      (obj.toggleProfilePicture = message.toggleProfilePicture);
    message.getMailNotifications !== undefined &&
      (obj.getMailNotifications = message.getMailNotifications);
    message.showPhoneNumber !== undefined &&
      (obj.showPhoneNumber = message.showPhoneNumber);
    if (message.favoriteCommanders) {
      obj.favoriteCommanders = message.favoriteCommanders.map((e) => e);
    } else {
      obj.favoriteCommanders = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Options>): Options {
    const message = { ...baseOptions } as Options;
    message.favoriteCommanders = [];
    if (
      object.toggleProfilePicture !== undefined &&
      object.toggleProfilePicture !== null
    ) {
      message.toggleProfilePicture = object.toggleProfilePicture;
    } else {
      message.toggleProfilePicture = false;
    }
    if (
      object.getMailNotifications !== undefined &&
      object.getMailNotifications !== null
    ) {
      message.getMailNotifications = object.getMailNotifications;
    } else {
      message.getMailNotifications = false;
    }
    if (
      object.showPhoneNumber !== undefined &&
      object.showPhoneNumber !== null
    ) {
      message.showPhoneNumber = object.showPhoneNumber;
    } else {
      message.showPhoneNumber = false;
    }
    if (
      object.favoriteCommanders !== undefined &&
      object.favoriteCommanders !== null
    ) {
      for (const e of object.favoriteCommanders) {
        message.favoriteCommanders.push(e);
      }
    }
    return message;
  },
};

const baseUpdateUserOptionsReq: object = { entityId: "" };

export const UpdateUserOptionsReq = {
  encode(
    message: UpdateUserOptionsReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.entityId !== "") {
      writer.uint32(10).string(message.entityId);
    }
    if (message.toggleProfilePicture !== undefined) {
      writer.uint32(16).bool(message.toggleProfilePicture);
    }
    if (message.getMailNotifications !== undefined) {
      writer.uint32(24).bool(message.getMailNotifications);
    }
    if (message.showPhoneNumber !== undefined) {
      writer.uint32(32).bool(message.showPhoneNumber);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateUserOptionsReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateUserOptionsReq } as UpdateUserOptionsReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entityId = reader.string();
          break;
        case 2:
          message.toggleProfilePicture = reader.bool();
          break;
        case 3:
          message.getMailNotifications = reader.bool();
          break;
        case 4:
          message.showPhoneNumber = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateUserOptionsReq {
    const message = { ...baseUpdateUserOptionsReq } as UpdateUserOptionsReq;
    if (object.entityId !== undefined && object.entityId !== null) {
      message.entityId = String(object.entityId);
    } else {
      message.entityId = "";
    }
    if (
      object.toggleProfilePicture !== undefined &&
      object.toggleProfilePicture !== null
    ) {
      message.toggleProfilePicture = Boolean(object.toggleProfilePicture);
    } else {
      message.toggleProfilePicture = undefined;
    }
    if (
      object.getMailNotifications !== undefined &&
      object.getMailNotifications !== null
    ) {
      message.getMailNotifications = Boolean(object.getMailNotifications);
    } else {
      message.getMailNotifications = undefined;
    }
    if (
      object.showPhoneNumber !== undefined &&
      object.showPhoneNumber !== null
    ) {
      message.showPhoneNumber = Boolean(object.showPhoneNumber);
    } else {
      message.showPhoneNumber = undefined;
    }
    return message;
  },

  toJSON(message: UpdateUserOptionsReq): unknown {
    const obj: any = {};
    message.entityId !== undefined && (obj.entityId = message.entityId);
    message.toggleProfilePicture !== undefined &&
      (obj.toggleProfilePicture = message.toggleProfilePicture);
    message.getMailNotifications !== undefined &&
      (obj.getMailNotifications = message.getMailNotifications);
    message.showPhoneNumber !== undefined &&
      (obj.showPhoneNumber = message.showPhoneNumber);
    return obj;
  },

  fromPartial(object: DeepPartial<UpdateUserOptionsReq>): UpdateUserOptionsReq {
    const message = { ...baseUpdateUserOptionsReq } as UpdateUserOptionsReq;
    if (object.entityId !== undefined && object.entityId !== null) {
      message.entityId = object.entityId;
    } else {
      message.entityId = "";
    }
    if (
      object.toggleProfilePicture !== undefined &&
      object.toggleProfilePicture !== null
    ) {
      message.toggleProfilePicture = object.toggleProfilePicture;
    } else {
      message.toggleProfilePicture = undefined;
    }
    if (
      object.getMailNotifications !== undefined &&
      object.getMailNotifications !== null
    ) {
      message.getMailNotifications = object.getMailNotifications;
    } else {
      message.getMailNotifications = undefined;
    }
    if (
      object.showPhoneNumber !== undefined &&
      object.showPhoneNumber !== null
    ) {
      message.showPhoneNumber = object.showPhoneNumber;
    } else {
      message.showPhoneNumber = undefined;
    }
    return message;
  },
};

const baseFavoriteCommanderReq: object = { entityId: "", commanderId: "" };

export const FavoriteCommanderReq = {
  encode(
    message: FavoriteCommanderReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.entityId !== "") {
      writer.uint32(10).string(message.entityId);
    }
    if (message.commanderId !== "") {
      writer.uint32(18).string(message.commanderId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FavoriteCommanderReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFavoriteCommanderReq } as FavoriteCommanderReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entityId = reader.string();
          break;
        case 2:
          message.commanderId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FavoriteCommanderReq {
    const message = { ...baseFavoriteCommanderReq } as FavoriteCommanderReq;
    if (object.entityId !== undefined && object.entityId !== null) {
      message.entityId = String(object.entityId);
    } else {
      message.entityId = "";
    }
    if (object.commanderId !== undefined && object.commanderId !== null) {
      message.commanderId = String(object.commanderId);
    } else {
      message.commanderId = "";
    }
    return message;
  },

  toJSON(message: FavoriteCommanderReq): unknown {
    const obj: any = {};
    message.entityId !== undefined && (obj.entityId = message.entityId);
    message.commanderId !== undefined &&
      (obj.commanderId = message.commanderId);
    return obj;
  },

  fromPartial(object: DeepPartial<FavoriteCommanderReq>): FavoriteCommanderReq {
    const message = { ...baseFavoriteCommanderReq } as FavoriteCommanderReq;
    if (object.entityId !== undefined && object.entityId !== null) {
      message.entityId = object.entityId;
    } else {
      message.entityId = "";
    }
    if (object.commanderId !== undefined && object.commanderId !== null) {
      message.commanderId = object.commanderId;
    } else {
      message.commanderId = "";
    }
    return message;
  },
};

export interface OptionsService {
  GetOptionsByEntityId(request: GetOptionsByEntityIdReq): Promise<Options>;
  UpdateUserOptions(request: UpdateUserOptionsReq): Promise<Options>;
  AddFavoriteCommander(request: FavoriteCommanderReq): Promise<Options>;
  RemoveFavoriteCommander(request: FavoriteCommanderReq): Promise<Options>;
}

export class OptionsServiceClientImpl implements OptionsService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetOptionsByEntityId = this.GetOptionsByEntityId.bind(this);
    this.UpdateUserOptions = this.UpdateUserOptions.bind(this);
    this.AddFavoriteCommander = this.AddFavoriteCommander.bind(this);
    this.RemoveFavoriteCommander = this.RemoveFavoriteCommander.bind(this);
  }
  GetOptionsByEntityId(request: GetOptionsByEntityIdReq): Promise<Options> {
    const data = GetOptionsByEntityIdReq.encode(request).finish();
    const promise = this.rpc.request(
      "OptionsService.OptionsService",
      "GetOptionsByEntityId",
      data
    );
    return promise.then((data) => Options.decode(new _m0.Reader(data)));
  }

  UpdateUserOptions(request: UpdateUserOptionsReq): Promise<Options> {
    const data = UpdateUserOptionsReq.encode(request).finish();
    const promise = this.rpc.request(
      "OptionsService.OptionsService",
      "UpdateUserOptions",
      data
    );
    return promise.then((data) => Options.decode(new _m0.Reader(data)));
  }

  AddFavoriteCommander(request: FavoriteCommanderReq): Promise<Options> {
    const data = FavoriteCommanderReq.encode(request).finish();
    const promise = this.rpc.request(
      "OptionsService.OptionsService",
      "AddFavoriteCommander",
      data
    );
    return promise.then((data) => Options.decode(new _m0.Reader(data)));
  }

  RemoveFavoriteCommander(request: FavoriteCommanderReq): Promise<Options> {
    const data = FavoriteCommanderReq.encode(request).finish();
    const promise = this.rpc.request(
      "OptionsService.OptionsService",
      "RemoveFavoriteCommander",
      data
    );
    return promise.then((data) => Options.decode(new _m0.Reader(data)));
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
